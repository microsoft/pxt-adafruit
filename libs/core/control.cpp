#include "pxt.h"


/**
* Runtime and event utilities.
*/
//% weight=70 color="#BEAA07"
namespace control {
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
