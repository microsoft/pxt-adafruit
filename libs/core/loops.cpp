#include "pxt.h"


/**
 * Repeat code constructs
 */
//% color=120
namespace loops {

    void forever_stub(void *a) {
      while (true) {
        runAction0((Action)a);
        fiber_sleep(20);
      }
    }

    /**
     * Repeats the code forever in the background. On each iteration, allows other codes to run.
     * @param body code to execute
     */
    //% help=loops/forever weight=55 blockGap=8
    //% blockId=forever block="forever" icon="\uf01e"
    void forever(Action a) {
      if (a != 0) {
        incr(a);
        create_fiber(forever_stub, (void*)a);
      }
    }
}
