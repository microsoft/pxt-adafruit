#include "pxt.h"


/**
 * Provides access to basic device functionality.
 */
//% color=#0078D7 weight=100
namespace basic {

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
    //% help=basic/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever" icon="\uf01e"
    void forever(Action a) {
      if (a != 0) {
        incr(a);
        create_fiber(forever_stub, (void*)a);
      }
    }

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=basic/pause weight=54
    //% async block="pause (ms) %pause"
    //% blockId=device_pause icon="\uf110"
    void pause(int ms) {
      fiber_sleep(ms);
    }
}
