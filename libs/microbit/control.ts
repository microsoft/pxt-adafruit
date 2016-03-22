namespace control {
    /**
     * Schedules code that run in the background.
    //% help=control/in-background shim=micro_bit::runInBackground
     */
    export function inBackground(body: Action): void { }

    /**
     * Resets the BBC micro:bit.
     */
    //% weight=1 shim=uBit.reset async help=control/reset
    export function reset() : void { }
}
