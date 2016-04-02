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

namespace String {
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

    // The proper StringData* representation is already laid out in memory by the code generator.
    //%
    uint32_t mkLiteral(uint32_t lit)
    {
        return (uint32_t)getstr(lit);
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

namespace Math {
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
      RefCollection *r = new RefCollection(flags);
      return r;
    }

    //%
    int length(RefCollection *c) { return c->data.size(); }

    //%
    void push(RefCollection *c, uint32_t x) {
      if (c->flags & 1) incr(x);
      c->data.push_back(x);
    }

    inline bool in_range(RefCollection *c, int x) {
      return (0 <= x && x < (int)c->data.size());
    }

    //%
    uint32_t getAt(RefCollection *c, int x) {
      if (in_range(c, x)) {
        uint32_t tmp = c->data.at(x);
        if (c->flags & 1) incr(tmp);
        return tmp;
      }
      else {
        error(ERR_OUT_OF_BOUNDS);
        return 0;
      }
    }

    //%
    void removeAt(RefCollection *c, int x) {
      if (!in_range(c, x))
        return;

      if (c->flags & 1) decr(c->data.at(x));
      c->data.erase(c->data.begin()+x);
    }

    //%
    void setAt(RefCollection *c, int x, uint32_t y) {
      if (!in_range(c, x))
        return;

      if (c->flags & 1) {
        decr(c->data.at(x));
        incr(y);
      }
      c->data.at(x) = y;
    }

    //%
    int indexOf(RefCollection *c, uint32_t x, int start) {
      if (!in_range(c, start))
        return -1;

      if (c->flags & 2) {
        StringData *xx = (StringData*)x;
        for (uint32_t i = start; i < c->data.size(); ++i) {
          StringData *ee = (StringData*)c->data.at(i);
          if (xx->len == ee->len && memcmp(xx->data, ee->data, xx->len) == 0)
            return (int)i;
        }
      } else {
        for (uint32_t i = start; i < c->data.size(); ++i)
          if (c->data.at(i) == x)
            return (int)i;
      }

      return -1;
    }

    //%
    int removeElement(RefCollection *c, uint32_t x) {
      int idx = indexOf(c, x, 0);
      if (idx >= 0) {
        removeAt(c, idx);
        return 1;
      }

      return 0;
    }
}

namespace ActionImpl {
    //%
    Action mk(int reflen, int totallen, int startptr)
    {
      check(0 <= reflen && reflen <= totallen, ERR_SIZE, 1);
      check(reflen <= totallen && totallen <= 255, ERR_SIZE, 2);
      check(bytecode[startptr] == 0xffff, ERR_INVALID_BINARY_HEADER, 3);
      check(bytecode[startptr + 1] == 0, ERR_INVALID_BINARY_HEADER, 4);


      uint32_t tmp = (uint32_t)&bytecode[startptr];

      if (totallen == 0) {
        return tmp; // no closure needed
      }

      void *ptr = ::operator new(sizeof(RefAction) + totallen * sizeof(uint32_t));
      RefAction *r = new (ptr) RefAction();
      r->len = totallen;
      r->reflen = reflen;
      r->func = (ActionCB)((tmp + 4) | 1);
      memset(r->fields, 0, r->len * sizeof(uint32_t));

      return (Action)r;
    }

    //%
    uint32_t mkLiteral(uint32_t lit)
    {
        return (uint32_t)getstr(lit);
    }

    //%
    void run1(Action a, int arg)
    {
      if (hasVTable(a))
        ((RefAction*)a)->run(arg);
      else {
        check(*(uint16_t*)a == 0xffff, ERR_INVALID_BINARY_HEADER, 4);
        ((ActionCB)((a + 4) | 1))(NULL, NULL, arg);
      }
    }

    //%
    void run(Action a)
    {
      ActionImpl::run1(a, 0);
    }
}

namespace RecordImpl {
    //%
    RefRecord* mk(int reflen, int totallen)
    {
      check(0 <= reflen && reflen <= totallen, ERR_SIZE, 1);
      check(reflen <= totallen && totallen <= 255, ERR_SIZE, 2);

      void *ptr = ::operator new(sizeof(RefRecord) + totallen * sizeof(uint32_t));
      RefRecord *r = new (ptr) RefRecord();
      r->len = totallen;
      r->reflen = reflen;
      memset(r->fields, 0, r->len * sizeof(uint32_t));
      return r;
    }
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
    a->st(idx, v);
    return a;
  }

  //%
  uint32_t incr(uint32_t ptr) {
    bitvm::incr(ptr);
    return ptr;
  }

  //%
  void decr(uint32_t ptr) {
    bitvm::decr(ptr);
  }
}
