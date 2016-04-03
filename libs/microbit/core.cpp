#include "ksbit.h"
#include <limits.h>

namespace StringMethods {

    /**
      * Returns the character at the specified index.
      * @param pos The zero-based index of the desired character.
      */
    //%
    StringData *charAt(StringData *s, int pos) {
      return ManagedString((char)ManagedString(s).charAt(pos)).leakData();
    }

    /** 
      * Returns the Unicode value of the character at the specified location.
      * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
      */
    //%
    int charCodeAt(StringData *s, int index) {
      return ManagedString(s).charAt(index);
    }

    /**
      * Returns a string that contains the concatenation of two or more strings.
      * @param other The string to append to the end of the string.  
      */
    //%
    StringData *concat(StringData *s, StringData *other) {
      ManagedString a(s), b(other);
      return (a + b).leakData();
    }

    /**
      * Determines whether relative order of two strings (in ASCII encoding).
      * @param that String to compare to target string
      */
    //%
    int compare(StringData *s, StringData *that) {
        return strcmp(s->data, that->data);
    }

    /** Returns the length of a String object. */
    //% property
    int length(StringData *s) {
        return s->len;
    }
}


namespace BooleanMethods {
    // Cache the string literals "true" and "false" when used.
    // Note that the representation of booleans stays the usual C-one.
    
    static const char sTrue[]  __attribute__ ((aligned (4))) = "\xff\xff\x04\x00" "true\0";
    static const char sFalse[] __attribute__ ((aligned (4))) = "\xff\xff\x05\x00" "false\0";

    /**
      * Returns a string representation of an object.
      */
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

namespace String_ {
    /**
      * Make a string from the given ASCII character code. 
      */
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
}

namespace NumberMethods {
    /**
      * Returns a string representation of a number.
      */
    //%
    StringData* toString(int n)
    {
      return ManagedString(n).leakData();
    }
}

namespace NumberImpl {
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
    /**
      * Returns the value of a base expression taken to a specified power. 
      * @param x The base value of the expression.
      * @param y The exponent value of the expression.
      */
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
    
    /** 
     * Returns a pseudorandom number between 0 and `max`. 
     */
    //%
    int random(int max) {
      if (max == INT_MIN)
        return -uBit.random(INT_MAX);
      else if (max < 0)
        return -uBit.random(-max);
      else if (max == 0)
        return 0;
      else
        return uBit.random(max);
    }
    
    /**
      * Returns the square root of a number.
      * @param x A numeric expression.
      */
    //%
    int sqrt(int x)
    {
      return ::sqrt(x);
    }
}

namespace ArrayImpl {
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
namespace kindscript {
  //%
  void registerWithDal(int id, int event, Action a);
  //%
  void runAction0(Action a);
  //%
  void runAction1(Action a, int arg);
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

namespace ksrt {
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
    uBit.panic(code);
  }
}



  namespace buffer {

    RefBuffer *mk(uint32_t size)
    {
      RefBuffer *r = new RefBuffer();
      r->data.resize(size);
      return r;
    }

    char *cptr(RefBuffer *c)
    {
      return (char*)&c->data[0];
    }

    int count(RefBuffer *c) { return c->data.size(); }

    void fill(RefBuffer *c, int v)
    {
      memset(cptr(c), v, count(c));
    }

    void fill_random(RefBuffer *c)
    {
      int len = count(c);
      for (int i = 0; i < len; ++i)
        c->data[i] = uBit.random(0x100);
    }

    void add(RefBuffer *c, uint32_t x) {
      c->data.push_back(x);
    }

    inline bool in_range(RefBuffer *c, int x) {
      return (0 <= x && x < (int)c->data.size());
    }

    uint32_t at(RefBuffer *c, int x) {
      if (in_range(c, x)) {
        return c->data[x];
      }
      else {
        error(ERR_OUT_OF_BOUNDS);
        return 0;
      }
    }

    void set(RefBuffer *c, int x, uint32_t y) {
      if (!in_range(c, x))
        return;
      c->data[x] = y;
    }
  }

  namespace bitvm_bits {
    RefBuffer *create_buffer(int size)
    {
      return buffer::mk(size);
    }
  }
