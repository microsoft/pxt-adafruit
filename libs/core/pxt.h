#ifndef __PXT_H
#define __PXT_H

// #define DEBUG_MEMLEAKS 1

#pragma GCC diagnostic ignored "-Wunused-parameter"

//#define printf(...) uBit.serial.printf(__VA_ARGS__)
// #define printf(...)

#define intcheck(...) check(__VA_ARGS__)
//#define intcheck(...) do {} while (0)

#include <stdio.h>
//#include <string.h>
//#include <vector>
#include <stdint.h>

#ifdef DEBUG_MEMLEAKS
#include <set>
#endif

#include "ManagedString.h"
#include "ManagedBuffer.h"

#include <avr/pgmspace.h>

// extern MicroBit uBit;

namespace pxt {
  typedef uint16_t Action;
//  typedef uint16_t ImageLiteral;


  typedef enum {
    ERR_INVALID_BINARY_HEADER = 5,
    ERR_OUT_OF_BOUNDS = 8,
    ERR_REF_DELETED = 7,
    ERR_SIZE = 9,
  } ERROR;

  extern const uint16_t functionsAndBytecode[] PROGMEM;
  extern uint16_t *globals;
  extern uint16_t *bytecode;
  class RefRecord;

  // Utility functions
  //extern MicroBitEvent lastEvent;
  //void registerWithDal(int id, int event, Action a);
  void runInBackground(Action a);
  uint16_t runAction3(Action a, int arg0, int arg1, int arg2);
  uint16_t runAction2(Action a, int arg0, int arg1);
  uint16_t runAction1(Action a, int arg0);
  uint16_t runAction0(Action a);
  // Action mkAction(int reflen, int totallen, int startptr);
  void error(ERROR code, int subcode = 0);
  void exec_binary(uint16_t *pc);
  void start();
  void debugMemLeaks();
  // allocate [sz] words and clear them
  uint16_t *allocate(uint16_t sz);
  int templateHash();
  int programHash();
  int getNumGlobals();
  RefRecord* mkClassInstance(int vtableOffset);

  // The standard calling convention is:
  //   - when a pointer is loaded from a local/global/field etc, and incr()ed
  //     (in other words, its presence on stack counts as a reference)
  //   - after a function call, all pointers are popped off the stack and decr()ed
  // This does not apply to the RefRecord and st/ld(ref) methods - they unref()
  // the RefRecord* this.
  int incr(uint16_t e);
  void decr(uint16_t e);

  void panic(int code);
  void assert(bool cond, uint16_t code);

  inline void *ptrOfLiteral(int offset)
  {
    return &bytecode[offset];
  }

  //inline ImageData* imageBytes(int offset)
  //{
  //  return (ImageData*)(void*)&bytecode[offset];
  //}

  // Checks if object has a VTable, or if its RefCounted* from the runtime.
  inline bool hasVTable(uint16_t e)
  {
    return (*((uint16_t*)e) & 1) == 0;
  }

  inline void check(int cond, ERROR code, int subcode = 0)
  {
    if (!cond) error(code, subcode);
  }


  class RefObject;
#ifdef DEBUG_MEMLEAKS
  extern std::set<RefObject*> allptrs;
#endif

  typedef void (*RefObjectMethod)(RefObject *self);
  typedef void *PVoid;
  typedef void **PPVoid;

  const PPVoid RefMapMarker = (PPVoid)(void*)43;

  struct VTable {
    uint16_t numbytes;  // in the entire object, including the vtable pointer
    uint16_t userdata;
    PVoid *ifaceTable;
    PVoid methods[2]; // we only use up to two methods here; pxt will generate more
    // refmask sits at &methods[nummethods]
  };

  const int vtableShift = 2;

  // A base abstract class for ref-counted objects.
  class RefObject
  {
  public:
    uint16_t refcnt;
    uint16_t vtable;

    RefObject(uint16_t vt)
    {
      refcnt = 2;
      vtable = vt;
#ifdef DEBUG_MEMLEAKS
      allptrs.insert(this);
#endif
    }

    inline VTable *getVTable() {
      return (VTable*)(vtable << vtableShift);
    }

    void destroy();
    void print();

    // Call to disable pointer tracking on the current instance (in destructor or some other hack)
    inline void untrack() {
#ifdef DEBUG_MEMLEAKS
      allptrs.erase(this);
#endif
    }

    // Increment/decrement the ref-count. Decrementing to zero deletes the current object.
    inline void ref()
    {
      check(refcnt > 0, ERR_REF_DELETED);
      //printf("INCR "); this->print();
      refcnt += 2;
    }

    inline void unref()
    {
      //printf("DECR "); this->print();
      refcnt -= 2;
      if (refcnt == 0) {
        destroy();
      }
    }
  };

  typedef uint16_t (*ActionCB)(uint16_t *captured, uint16_t arg0, uint16_t arg1, uint16_t arg2);

  // A ref-counted collection of either primitive or ref-counted objects (String, Image,
  // user-defined record, another collection)
  class RefCollection
    : public RefObject
  {
  public:
    // 1 - collection of refs (need decr)
    // 2 - collection of strings (in fact we always have 3, never 2 alone)
    inline uint16_t getFlags() { panic(51); return 0; }
    inline bool isRef() { panic(51); return false; }
    inline bool isString() { panic(51); return false; }

    RefCollection(uint16_t f) : RefObject(f) { }

    inline bool in_range(int x) { panic(51); return false; }

    inline int length() { panic(51); return 0; }

    void destroy() { panic(51); }
    void print() { panic(51); }

    void push(uint16_t x) { panic(51); }
    uint16_t getAt(int x) { panic(51); return 0; }
    void removeAt(int x) { panic(51); }
    void setAt(int x, uint16_t y) { panic(51); }
    int indexOf(uint16_t x, int start) { panic(51); return 0; }
    int removeElement(uint16_t x) { panic(51); return 0; }
  };

  struct MapEntry {
    uint16_t key;
    uint16_t val;
  };

  class RefMap
    : public RefObject
  {
  public:
    RefMap() : RefObject(0) { }
    void destroy() { panic(51); }
    void print() { panic(51); }
    int findIdx(uint16_t key) { panic(51);; return 0; }
  };

  // A ref-counted, user-defined JS object.
  class RefRecord
    : public RefObject
  {
  public:
    RefRecord(uint16_t v) : RefObject(v) { }
    uint16_t ld(int idx) { panic(51); return 0; }
    uint16_t ldref(int idx) { panic(51); return 0; }
    void st(int idx, uint16_t v) { panic(51); }
    void stref(int idx, uint16_t v) { panic(51); }
  };

  // these are needed when constructing vtables for user-defined classes
  void RefRecord_destroy(RefRecord *r);
  void RefRecord_print(RefRecord *r);

  class RefAction;
  typedef uint16_t (*ActionCB)(uint16_t *captured, uint16_t arg0, uint16_t arg1, uint16_t arg2);

  // Ref-counted function pointer. It's currently always a ()=>void procedure pointer.
  class RefAction
    : public RefObject
  {
  public:
    // This is the same as for RefRecord.
    uint8_t len;
    uint8_t reflen;
    ActionCB func; // The function pointer
    // fields[] contain captured locals
    uint16_t fields[];

    void destroy();
    void print();

    RefAction();

    inline void stCore(int idx, uint16_t v)
    {
      //printf("ST [%d] = %d ", idx, v); this->print();
      intcheck(0 <= idx && idx < len, ERR_OUT_OF_BOUNDS, 10);
      intcheck(fields[idx] == 0, ERR_OUT_OF_BOUNDS, 11); // only one assignment permitted
      fields[idx] = v;
    }

    inline uint16_t runCore(int arg0, int arg1, int arg2) // internal; use runAction*() functions
    {
      this->ref();
      uint16_t r = this->func(&this->fields[0], arg0, arg1, arg2);
      this->unref();
      return r;
    }
  };

  // These two are used to represent locals written from inside inline functions
  class RefLocal
    : public RefObject
  {
  public:
    uint16_t v;
    void destroy();
    void print();
    RefLocal();
  };

  class RefRefLocal
    : public RefObject
  {
  public:
    uint16_t v;
    void destroy();
    void print();
    RefRefLocal();
  };
}

// The ARM Thumb generator in the JavaScript code is parsing
// the hex file and looks for the magic numbers as present here.
//
// Then it fetches function pointer addresses from there.
  
#define PXT_SHIMS_BEGIN \
namespace pxt { \
  const uint16_t functionsAndBytecode[] __attribute__((aligned(0x20))) PROGMEM = { \
    0x0801, 0x0801, 0x4242, 0x4242, 0x0801, 0x0801, 0xd83e, 0x8de9,

#define PXT_SHIMS_END }; }

#pragma GCC diagnostic ignored "-Wpmf-conversions"

#define PXT_VTABLE_TO_INT(vt)  ((uint16_t)(vt) >> vtableShift)
#define PXT_VTABLE_BEGIN(classname, flags, iface) \
const VTable classname ## _vtable \
  __attribute__((aligned(1 << vtableShift))) \
  = { \
  sizeof(classname), \
  flags, \
  iface, \
  { \
    (void*)&classname::destroy, \
    (void*)&classname::print,

#define PXT_VTABLE_END } };

#define PXT_VTABLE_INIT(classname) \
  RefObject(PXT_VTABLE_TO_INT(&classname ## _vtable))

#define PXT_VTABLE_CTOR(classname) \
  PXT_VTABLE_BEGIN(classname, 0, 0) PXT_VTABLE_END \
  classname::classname() : PXT_VTABLE_INIT(classname)

#define PXT_MAIN \
   void loop() {} \
   void setup() { pxt::start(); }

#define PXT_FNPTR(x)  (uint16_t)(void*)(x)

#endif

// vim: ts=2 sw=2 expandtab
