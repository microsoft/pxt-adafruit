#include "pxt.h"
#include "RefCounted.h"
#include <Adafruit_CircuitPlayground.h>

#define BYTECODE_WORD(off)  pgm_read_word_near(bytecode + off)

namespace pxt {
  
    int incr(uint16_t e)
    {
      if (e) {
        if (hasVTable(e))
          ((RefObject*)e)->ref();
        else
          ((RefCounted*)e)->incr();
      }
      return e;
    }

    void decr(uint16_t e)
    {
      if (e) {
        if (hasVTable(e))
          ((RefObject*)e)->unref();
        else
          ((RefCounted*)e)->decr();
      }
    }

/*
    Action mkAction(int reflen, int totallen, int startptr)
    {
      check(0 <= reflen && reflen <= totallen, ERR_SIZE, 1);
      check(reflen <= totallen && totallen <= 255, ERR_SIZE, 2);
      check(bytecode[startptr] == 0xffff, ERR_INVALID_BINARY_HEADER, 3);
      check(bytecode[startptr + 1] == 0, ERR_INVALID_BINARY_HEADER, 4);

      uint16_t tmp = (uint16_t)&bytecode[startptr];

      if (totallen == 0) {
        return tmp; // no closure needed
      }

      void *ptr = ::operator new(sizeof(RefAction) + totallen * sizeof(uint16_t));
      RefAction *r = new (ptr) RefAction();
      r->len = totallen;
      r->reflen = reflen;
      r->func = (ActionCB)((tmp + 4));
      memset(r->fields, 0, r->len * sizeof(uint16_t));

      return (Action)r;
    }
*/

    uint16_t runAction3(Action a, int arg0, int arg1, int arg2)
    {
      // if (hasVTable(a))
      //  return ((RefAction*)a)->runCore(arg0, arg1, arg2);
      // else {
        check(*(uint16_t*)a == 0xffff, ERR_INVALID_BINARY_HEADER, 4);
        return ((ActionCB)((a + 4)))(NULL, arg0, arg1, arg2);
      //}
    }

    uint16_t runAction2(Action a, int arg0, int arg1)
    {
      return runAction3(a, arg0, arg1, 0);
    }

    uint16_t runAction1(Action a, int arg0)
    {
      return runAction3(a, arg0, 0, 0);
    }

    uint16_t runAction0(Action a)
    {
      return runAction3(a, 0, 0, 0);
    }

    void RefObject::destroy() {
      ((RefObjectMethod)getVTable()->methods[0])(this);
      delete this;
    }

    void RefObject::print() {
      ((RefObjectMethod)getVTable()->methods[1])(this);
    }

/*
    RefRecord* mkClassInstance(int vtableOffset)
    {
      VTable *vtable = (VTable*)&bytecode[vtableOffset];

      intcheck(vtable->methods[0] == &RefRecord_destroy, ERR_SIZE, 3);
      intcheck(vtable->methods[1] == &RefRecord_print, ERR_SIZE, 4);
    
      void *ptr = ::operator new(vtable->numbytes);
      RefRecord *r = new (ptr) RefRecord(PXT_VTABLE_TO_INT(vtable));
      memset(r->fields, 0, vtable->numbytes - sizeof(RefRecord));
      return r;
    }

    uint16_t RefRecord::ld(int idx)
    {
      //intcheck((reflen == 255 ? 0 : reflen) <= idx && idx < len, ERR_OUT_OF_BOUNDS, 1);
      return fields[idx];
    }

    uint16_t RefRecord::ldref(int idx)
    {
      //printf("LD %p len=%d reflen=%d idx=%d\n", this, len, reflen, idx);
      //intcheck(0 <= idx && idx < reflen, ERR_OUT_OF_BOUNDS, 2);
      uint16_t tmp = fields[idx];
      incr(tmp);
      return tmp;
    }

    void RefRecord::st(int idx, uint16_t v)
    {
      //intcheck((reflen == 255 ? 0 : reflen) <= idx && idx < len, ERR_OUT_OF_BOUNDS, 3);
      fields[idx] = v;
    }

    void RefRecord::stref(int idx, uint16_t v)
    {
      //printf("ST %p len=%d reflen=%d idx=%d\n", this, len, reflen, idx);
      //intcheck(0 <= idx && idx < reflen, ERR_OUT_OF_BOUNDS, 4);
      decr(fields[idx]);
      fields[idx] = v;
    }

    void RefRecord_destroy(RefRecord *r) {
        auto tbl = r->getVTable();
        uint8_t *refmask = (uint8_t*)&tbl->methods[tbl->userdata & 0xff];
        int len = (tbl->numbytes >> 2) - 1;
        for (int i = 0; i < len; ++i) {
          if (refmask[i]) decr(r->fields[i]);
          r->fields[i] = 0;
        }
    }

    void RefRecord_print(RefRecord *r)
    {
      printf("RefRecord %p r=%d size=%d bytes\n", r, r->refcnt, r->getVTable()->numbytes);
    }

    void RefCollection::push(uint16_t x) {
      if (isRef()) incr(x);
      data.push_back(x);
    }

    uint16_t RefCollection::getAt(int x) {
      if (in_range(x)) {
        uint16_t tmp = data.at(x);
        if (isRef()) incr(tmp);
        return tmp;
      }
      else {
        error(ERR_OUT_OF_BOUNDS);
        return 0;
      }
    }

    void RefCollection::removeAt(int x) {
      if (!in_range(x))
        return;

      if (isRef()) decr(data.at(x));
      data.erase(data.begin()+x);
    }

    void RefCollection::setAt(int x, uint16_t y) {
      if (!in_range(x))
        return;

      if (isRef()) {
        decr(data.at(x));
        incr(y);
      }
      data.at(x) = y;
    }

    int RefCollection::indexOf(uint16_t x, int start) {
      if (!in_range(start))
        return -1;

      if (isString()) {
        StringData *xx = (StringData*)x;
        for (uint16_t i = start; i < data.size(); ++i) {
          StringData *ee = (StringData*)data.at(i);
          if (xx->len == ee->len && memcmp(xx->data, ee->data, xx->len) == 0)
            return (int)i;
        }
      } else {
        for (uint16_t i = start; i < data.size(); ++i)
          if (data.at(i) == x)
            return (int)i;
      }

      return -1;
    }

    int RefCollection::removeElement(uint16_t x) {
      int idx = indexOf(x, 0);
      if (idx >= 0) {
        removeAt(idx);
        return 1;
      }
      return 0;
    }

    namespace Coll0 {
      PXT_VTABLE_BEGIN(RefCollection, 0, 0)
      PXT_VTABLE_END
    }
    namespace Coll1 {
      PXT_VTABLE_BEGIN(RefCollection, 1, 0)
      PXT_VTABLE_END
    }
    namespace Coll3 {
      PXT_VTABLE_BEGIN(RefCollection, 3, 0)
      PXT_VTABLE_END
    }

    RefCollection::RefCollection(uint16_t flags) : RefObject(0) {
      switch (flags) {
        case 0:
          vtable = PXT_VTABLE_TO_INT(&Coll0::RefCollection_vtable);
          break;
        case 1:
          vtable = PXT_VTABLE_TO_INT(&Coll1::RefCollection_vtable);
          break;
        case 3:
          vtable = PXT_VTABLE_TO_INT(&Coll3::RefCollection_vtable);
          break;
        default:
          error(ERR_SIZE);
          break;
      }
    }

    void RefCollection::destroy()
    {
      if (this->isRef())
        for (uint16_t i = 0; i < this->data.size(); ++i) {
          decr(this->data[i]);
          this->data[i] = 0;
        }
      this->data.resize(0);
    }

    void RefCollection::print()
    {
      printf("RefCollection %p r=%d flags=%d size=%d [%p, ...]\n", this, refcnt, getFlags(), data.size(), data.size() > 0 ? data[0] : 0);
    }

    PXT_VTABLE_CTOR(RefAction) {}

    // fields[] contain captured locals
    void RefAction::destroy()
    {
      for (int i = 0; i < this->reflen; ++i) {
        decr(fields[i]);
        fields[i] = 0;
      }
    }

    void RefAction::print()
    {
      printf("RefAction %p r=%d pc=0x%lx size=%d (%d refs)\n", this, refcnt, (const uint8_t*)func - (const uint8_t*)bytecode, len, reflen);
    }

    void RefLocal::print()
    {
      printf("RefLocal %p r=%d v=%d\n", this, refcnt, v);
    }

    void RefLocal::destroy()
    {
    }

    PXT_VTABLE_CTOR(RefLocal) {
      v = 0;
    }

    PXT_VTABLE_CTOR(RefRefLocal) {
      v = 0;
    }

    void RefRefLocal::print()
    {
      printf("RefRefLocal %p r=%d v=%p\n", this, refcnt, (void*)v);
    }

    void RefRefLocal::destroy()
    {
      decr(v);
    }

    PXT_VTABLE_BEGIN(RefMap, 0, RefMapMarker)
    PXT_VTABLE_END
    RefMap::RefMap() : PXT_VTABLE_INIT(RefMap) {}

    void RefMap::destroy() {
      for (unsigned i = 0; i < data.size(); ++i) {
        if (data[i].key & 1) {
          decr(data[i].val);
        }
        data[i].val = 0;
      }
      data.resize(0);
    }

    int RefMap::findIdx(uint16_t key) {
      for (unsigned i = 0; i < data.size(); ++i) {
        if (data[i].key >> 1 == key)
          return i;
      }
      return -1;
    }

    void RefMap::print()
    {
      printf("RefMap %p r=%d size=%d\n", this, refcnt, data.size());
    }


#ifdef DEBUG_MEMLEAKS
  std::set<RefObject*> allptrs;
  void debugMemLeaks()
  {
    printf("LIVE POINTERS:\n");
    for(std::set<RefObject*>::iterator itr = allptrs.begin();itr!=allptrs.end();itr++)
    {
      (*itr)->print();
    }    
    printf("\n");
  }
#else
  void debugMemLeaks() {}
#endif

*/

  void error(ERROR code, int subcode)
  {
    Serial.print("Error: ");
    Serial.print(code);
    Serial.print(" [");
    Serial.print(subcode);
    Serial.println("]");
    panic(42);
  }

  uint16_t *bytecode;
  uint16_t *globals;
  int numGlobals;

  uint16_t *allocate(uint16_t sz)
  {
    uint16_t *arr = new uint16_t[sz];
    memset(arr, 0, sz * 4);
    return arr;
  }

  void panic(int code)
  {
    Serial.print("Panic! Code: ");
    Serial.println(code);
    for (;;) {
      for (int i = 0; i < 10; ++i)
        CircuitPlayground.setPixelColor(i, 255, 0, 0);
      delay(500);
      for (int i = 0; i < 10; ++i)
        CircuitPlayground.setPixelColor(i, 0, 0, 255);
      delay(500);
    }
  }

  void checkStr(bool cond, const char *msg, uint16_t ver)
  {
    if (!cond) {
      Serial.print("checkStr() failed: ");
      Serial.println(msg);
      Serial.println(ver);
      panic(100);
    }
  }

  int16_t templateHash()
  {
    return BYTECODE_WORD(8);
  }

  int16_t programHash()
  {
    return  BYTECODE_WORD(12);
  }

  int getNumGlobals()
  {
    return BYTECODE_WORD(16);
  }

  void redLED_test(boolean on) {
    CircuitPlayground.redLED(on);
  }

  void exec_binary(int16_t *pc)
  {
    // XXX re-enable once the calibration code is fixed and [editor/embedded.ts]
    // properly prepends a call to [internal_main].
    // ::touch_develop::internal_main();

    // unique group for radio based on source hash
    // ::touch_develop::micro_bit::radioDefaultGroup = programHash();
    
    // repeat error 4 times and restart as needed
    // microbit_panic_timeout(4);

    delay(3000); // delay on start, so we have time to connect serial after flashing

    Serial.begin(9600);
    CircuitPlayground.begin();
    
    Serial.println("Start exec_binary()");
    
    #define PC(x)  pgm_read_word_near(pc + x)

    int16_t ver = PC(0);
    checkStr(ver == 0x4209, ":( Bad runtime version", ver);

    bytecode = (uint16_t*)PC(2);  // the actual bytecode is here
        Serial.print("bytecode = ");
    Serial.println((uint16_t)bytecode);

    Serial.print("Allocating globals: ");
    Serial.println(getNumGlobals());
    
    globals = allocate(getNumGlobals());

    // just compare the first word
    checkStr(BYTECODE_WORD(0) == 0x8E70 &&
             (uint16_t)templateHash() == (uint16_t)PC(4),
             ":( Failed partial flash",0);


    Serial.print("Red LED ON-START");
    redLED_test(true);
    delay(1000);
    redLED_test(false);
    delay(1000);
    Serial.print("Red LED ON-END");

    // panic(7);
    uint16_t startptr = (uint16_t)bytecode;
    startptr += 48; // header
    
    Serial.print("startptr = ");
    Serial.println((uint16_t)startptr);

    startptr >>= 1;
    ((uint16_t (*)())startptr)();

#ifdef DEBUG_MEMLEAKS
    pxt::debugMemLeaks();
#endif

    Serial.println("done");

    return;
  }

  void start()
  {
    exec_binary((int16_t*)functionsAndBytecode);
  }

}  

// vim: ts=2 sw=2 expandtab
