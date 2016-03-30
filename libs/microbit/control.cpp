#include "BitVM.h"

namespace control {
    void fiberDone(void *a)
    {
      decr((Action)a);
      release_fiber();
    }

    /**
     * Schedules code that run in the background.
     */
    //% help=control/in-background
    //% blockId="control_in_background" block="run in background" blockGap=8
    void inBackground(Action a) {
      if (a != 0) {
        incr(a);
        create_fiber((void(*)(void*))action::run, (void*)a, fiberDone);
      }
    }

    /**
     * Resets the BBC micro:bit.
     */
    //% weight=30 async help=control/reset
    //% blockId="control_reset" block="reset"
    void reset() { 
      uBit.reset(); 
    }
}
