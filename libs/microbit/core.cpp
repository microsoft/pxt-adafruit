#include "ksbit.h"
#include <limits.h>


namespace String_ {
    //%
    StringData *charAt(StringData *s, int pos) {
      return ManagedString((char)ManagedString(s).charAt(pos)).leakData();
    }

    //%
    int charCodeAt(StringData *s, int index) {
        return ManagedString(s).charAt(index);
    }

    //%
    StringData *concat(StringData *s, StringData *other) {
      ManagedString a(s), b(other);
      return (a + b).leakData();
    }

    //%
    int compare(StringData *s, StringData *that) {
        return strcmp(s->data, that->data);
    }

    //%
    int length(StringData *s) { return s->len; }

    //%
    StringData *fromCharCode(int code)
    {
      return ManagedString((char)code).leakData();
    }

    //%
    int toNumber(StringData *s) {
      return atoi(s->data);
    }

    //%
    StringData *mkEmpty()
    {
        return ManagedString::EmptyString.leakData();
    }

    //%
    StringData *substr(StringData *s, int start, int length)
    {
        if (length <= 0)
            return mkEmpty();
        if (start < 0)
            start = max(s->len + start, 0);
        length = min(length, s->len - start);
        ManagedString x(s);
        return x.substring(start, length).leakData();
    }
}


namespace Boolean_ {
    // Cache the string literals "true" and "false" when used.
    // Note that the representation of booleans stays the usual C-one.
    
    static const char sTrue[]  __attribute__ ((aligned (4))) = "\xff\xff\x04\x00" "true\0";
    static const char sFalse[] __attribute__ ((aligned (4))) = "\xff\xff\x05\x00" "false\0";

    //%
    StringData* toString(bool v)
    {
      if (v) {
        return (StringData*)(void*)sTrue;
      } else {
        return (StringData*)(void*)sFalse;
      }            
    }

    //%
    bool bang(bool v) { return !v; }
}

namespace Number_ {
    //%
    StringData* toString(int n)
    {
      return ManagedString(n).leakData();
    }

    // +, - and friends are handled directly by assembly instructions
    // The comparisons are here as they are more code-size efficient
    
    //%
    bool lt(int x, int y) { return x < y; }
    //%
    bool le(int x, int y) { return x <= y; }
    //%
    bool neq(int x, int y) { return x != y; }
    //%
    bool eq(int x, int y) { return x == y; }
    //%
    bool gt(int x, int y) { return x > y; }
    //%
    bool ge(int x, int y) { return x >= y; }

    // These in fact call into C runtime on Cortex-M0 
    //%
    int div(int x, int y) { return x / y; }
    //%
    int mod(int x, int y) { return x % y; }
}

namespace Math_ {
    //%
    int pow(int x, int y)
    {
      if (y < 0)
        return 0;
      int r = 1;
      while (y) {
        if (y & 1)
          r *= x;
        y >>= 1;
        x *= x;
      }
      return r;
    }
    
    //%
    int random(int max) {
      if (max == INT_MIN)
        return -microbit_random(INT_MAX);
      else if (max < 0)
        return -microbit_random(-max);
      else if (max == 0)
        return 0;
      else
        return microbit_random(max);
    }
    
    //%
    int sqrt(int x)
    {
      return ::sqrt(x);
    }
}

namespace Array_ {
    //%
    RefCollection *mk(uint32_t flags)
    {
      return new RefCollection(flags);
    }
    //%
    int length(RefCollection *c) { return c->length(); }
    //%
    void push(RefCollection *c, uint32_t x) { c->push(x); }
    //%
    uint32_t getAt(RefCollection *c, int x) { return c->getAt(x); }
    //%
    void removeAt(RefCollection *c, int x) { c->removeAt(x); }
    //%
    void setAt(RefCollection *c, int x, uint32_t y) { c->setAt(x, y); }
    //%
    int indexOf(RefCollection *c, uint32_t x, int start) { return c->indexOf(x, start); }
    //%
    int removeElement(RefCollection *c, uint32_t x) { return c->removeElement(x); }
}

// Import some stuff directly
namespace pxt {
  //%
  void registerWithDal(int id, int event, Action a);
  //%
  uint32_t runAction3(Action a, int arg0, int arg1, int arg2);
  //%
  uint32_t runAction2(Action a, int arg0, int arg1);
  //%
  uint32_t runAction1(Action a, int arg0);
  //%
  uint32_t runAction0(Action a);
  //%
  Action mkAction(int reflen, int totallen, int startptr);
  //%
  RefRecord* mkRecord(int reflen, int totallen);
  //%
  void debugMemLeaks();
  //%
  int incr(uint32_t e);
  //%
  void decr(uint32_t e);
  //%
  uint32_t *allocate(uint16_t sz);
  //%
  int templateHash();
  //%
  int programHash();
  //%
  void *ptrOfLiteral(int offset);
}

namespace pxtrt {
  //%
  uint32_t ldloc(RefLocal *r) {
    return r->v;
  }

  //%
  uint32_t ldlocRef(RefRefLocal *r) {
    uint32_t tmp = r->v;
    incr(tmp);
    return tmp;
  }

  //%
  void stloc(RefLocal *r, uint32_t v) {
    r->v = v;
  }

  //%
  void stlocRef(RefRefLocal *r, uint32_t v) {
    decr(r->v);
    r->v = v;
  }

  //%
  RefLocal *mkloc() {
    return new RefLocal();
  }

  //%
  RefRefLocal *mklocRef() {
    return new RefRefLocal();
  }

  // All of the functions below unref() self. This is for performance reasons -
  // the code emitter will not emit the unrefs for them.
 
  //%
  uint32_t ldfld(RefRecord *r, int idx) {
    auto tmp = r->ld(idx);
    r->unref();
    return tmp;
  }

  //%
  uint32_t ldfldRef(RefRecord *r, int idx) {
    auto tmp = r->ldref(idx);
    r->unref();
    return tmp;
  }

  //%
  void stfld(RefRecord *r, int idx, uint32_t val) {
    r->st(idx, val);
    r->unref();
  }

  //%
  void stfldRef(RefRecord *r, int idx, uint32_t val) {
    r->stref(idx, val);
    r->unref();
  }

  //%
  uint32_t ldglb(int idx) {
    check(0 <= idx && idx < numGlobals, ERR_OUT_OF_BOUNDS, 7);
    return globals[idx];
  }

  //%
  uint32_t ldglbRef(int idx) {
    check(0 <= idx && idx < numGlobals, ERR_OUT_OF_BOUNDS, 7);
    uint32_t tmp = globals[idx];
    incr(tmp);
    return tmp;
  }

  // note the idx comes last - it's more convenient that way in the emitter
  //%
  void stglb(uint32_t v, int idx)
  {
    check(0 <= idx && idx < numGlobals, ERR_OUT_OF_BOUNDS, 7);
    globals[idx] = v;
  }

  //%
  void stglbRef(uint32_t v, int idx)
  {
    check(0 <= idx && idx < numGlobals, ERR_OUT_OF_BOUNDS, 7);
    decr(globals[idx]);
    globals[idx] = v;
  }

  // Store a captured local in a closure. It returns the action, so it can be chained.
  //%
  RefAction *stclo(RefAction *a, int idx, uint32_t v)
  {
    //DBG("STCLO "); a->print(); DBG("@%d = %p\n", idx, (void*)v);
    a->stCore(idx, v);
    return a;
  }

  //%
  void panic(int code)
  {
    microbit_panic(code);
  }

  //
  // Debugger
  //

  //%
  uint32_t getNumGlobals() {
    return numGlobals;
  }

  //%
  void* getGlobalsPtr() {
    return globals;
  }
}
