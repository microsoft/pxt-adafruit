#include "pxt.h"

/**
 * How to create the event.
 */
enum class EventCreationMode {
    /**
     * Event is initialised, and its event handlers are immediately fired (not suitable for use in interrupts!).
     */
    CreateAndFire = CREATE_AND_FIRE,
    /**
     * Event is initialised, and no further processing takes place.
     */
    CreateOnly = CREATE_ONLY,
};

/**
* Runtime and event utilities.
*/
//% weight=70 color="#BEAA07" icon="\uf110"
namespace control {
    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=basic/pause weight=54
    //% async block="pause (ms) %pause"
    //% blockId=device_pause
    void pause(int ms) {
      fiber_sleep(ms);
    }

    /**
     * Raises an event in the event bus.
     * @param src ID of the MicroBit Component that generated the event
     * @param value Component specific code indicating the cause of the event.
     * @param mode optional definition of how the event should be processed after construction.
     */
    //% weight=21 blockGap=12 blockId="control_raise_event" block="raise event|from %src|with value %value" blockExternalInputs=1
    //% mode.defl=CREATE_AND_FIRE advanced=true
    void raiseEvent(int src, int value, EventCreationMode mode) {
        DeviceEvent evt(src, value, (DeviceEventLaunchMode)mode);
    }

    /**
     * Raises an event in the event bus.
     * @param id the event compoent id
     * @param value the event value to match
     */
    //% weight=20 blockGap=8 blockId="control_on_event" block="on event|from %src|with value %value"
    //% blockExternalInputs=1 advanced=true
    void onEvent(int id, int value, Action handler) {
        registerWithDal(id, value, handler);
    }    

    /**
     * Resets the device.
     */
    //% weight=30 async help=control/reset blockGap=8
    //% blockId="control_reset" block="reset"
    void reset() {
      device.reset();
    }

    /**
    * Blocks the current fiber for the given microseconds
    * @param micros number of micro-seconds to wait. eg: 4
    */
    //% help=control/wait-micros weight=29
    //% blockId="control_wait_us" block="wait (µs)%micros" advanced=true
    void waitMicros(int micros) {
        wait_us(micros);
    }  

    /**
     * Schedules code that run in the background.
     */
    //% help=control/run-in-background blockAllowMultiple=1
    //% blockId="control_run_in_background" block="run in background" blockGap=8
    void runInBackground(Action a) {
      pxt::runInBackground(a);
    }      
}
