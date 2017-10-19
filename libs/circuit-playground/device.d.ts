declare namespace pins {
    // pin-pads
    //% fixedInstance shim=pxt::getPin(PA02)
    const A0: PwmPin;
    //% fixedInstance shim=pxt::getPin(PA05)
    const A1: PwmPin;
    //% fixedInstance shim=pxt::getPin(PA06)
    const A2: PwmPin;
    //% fixedInstance shim=pxt::getPin(PA07)
    const A3: PwmPin;

    //% fixedInstance shim=pxt::getPin(PB03)
    const A4: PwmPin;
    //% fixedInstance shim=pxt::getPin(PB02)
    const A5: PwmPin;
    //% fixedInstance shim=pxt::getPin(PB09)
    const A6: PwmPin;
    //% fixedInstance shim=pxt::getPin(PB08)
    const A7: PwmPin;

    // Define aliases, as Digital Pins

    //% fixedInstance shim=pxt::getPin(PB03)
    const SCL: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PB02)
    const SDA: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PB09)
    const RX: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PB08)
    const TX: DigitalPin;

    // Aliases for built-in components

    //% fixedInstance shim=pxt::getPin(PA11)
    const A8: PwmPin; // light
    //% fixedInstance shim=pxt::getPin(PA09)
    const A9: PwmPin;
    //% fixedInstance shim=pxt::getPin(PA28)
    const D4: DigitalPin; // A
    //% fixedInstance shim=pxt::getPin(PA14)
    const D5: DigitalPin; // B
    //% fixedInstance shim=pxt::getPin(PA15)
    const D7: DigitalPin; // Slide
    //% fixedInstance shim=pxt::getPin(PB23)
    const D8: DigitalPin; // Neopixel

    //% fixedInstance shim=pxt::getPin(PA17)
    const D13: DigitalPin;
    //% fixedInstance shim=pxt::getPin(PA17)
    const LED: DigitalPin;

    //% fixedInstance shim=pxt::getPin(PA08)
    const A10: PwmPin; // mic
}

declare namespace input {
    /**
     * Capacitive pin A1
     */
    //% block="pin A1" fixedInstance shim=pxt::getTouchButton(PA05)
    const pinA1: TouchButton;

    /**
     * Capacitive pin A2
     */
    //% block="pin A2" fixedInstance shim=pxt::getTouchButton(PA06)
    const pinA2: TouchButton;

    /**
     * Capacitive pin A3
     */
    //% block="pin A3" fixedInstance shim=pxt::getTouchButton(PA07)
    const pinA3: TouchButton;

    /**
     * Capacitive pin A4
     */
    //% block="pin A4" fixedInstance shim=pxt::getTouchButton(PB03)
    const pinA4: TouchButton;

    /**
     * Capacitive pin A5
     */
    //% block="pin A5" fixedInstance shim=pxt::getTouchButton(PB02)
    const pinA5: TouchButton;

    /**
     * Capacitive pin A6
     */
    //% block="pin A6" fixedInstance shim=pxt::getTouchButton(PB09)
    const pinA6: TouchButton;

    /**
     * Capacitive pin A7
     */
    //% block="pin A7" fixedInstance shim=pxt::getTouchButton(PB08)
    const pinA7: TouchButton;
}

declare namespace input {
        /**
         * Left button.
         */
        //% indexedInstanceNS=input indexedInstanceShim=pxt::getButton
        //% block="button A" weight=95 fixedInstance
        //% shim=pxt::getButton(PA28,BUTTON_ACTIVE_HIGH_PULL_DOWN)
        const buttonA: Button;
    
        /**
         * Right button.
         */
        //% block="button B" weight=94 fixedInstance
        //% shim=pxt::getButton(PA14,BUTTON_ACTIVE_HIGH_PULL_DOWN)
        const buttonB: Button;
    
        /**
         * Left and Right button.
         */
        //% block="buttons A+B" weight=93 fixedInstance
        //% shim=pxt::getMultiButton(DEVICE_ID_BUTTON_AB,PA28,PA14,BUTTON_ACTIVE_HIGH_PULL_DOWN)
        const buttonsAB: Button;
    }
    
    