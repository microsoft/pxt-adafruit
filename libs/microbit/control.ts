//% weight=1 color="#333333"
namespace control {
    /**
     * Schedules code that run in the background.
     */
    //% help=control/in-background shim=micro_bit::runInBackground
    //% blockId="control_in_background" block="run in background"
    export function inBackground(body: Action): void { }

    /**
     * Resets the BBC micro:bit.
     */
    //% weight=1 shim=uBit.reset async help=control/reset
    //% blockId="control_reset" block="reset"
    export function reset() : void { }
}
