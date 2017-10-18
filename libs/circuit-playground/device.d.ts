declare namespace pins {
    // pin-pads
    //% fixedInstance shim=pxt::getPin(2)
    const A0: PwmPin;
    //% fixedInstance shim=pxt::getPin(5)
    const A1: PwmPin;
    //% fixedInstance shim=pxt::getPin(6)
    const A2: PwmPin;
    //% fixedInstance shim=pxt::getPin(7)
    const A3: PwmPin;

    //% fixedInstance shim=pxt::getPin(35)
    const A4: PwmPin;
    //% fixedInstance shim=pxt::getPin(34)
    const A5: PwmPin;
    //% fixedInstance shim=pxt::getPin(41)
    const A6: PwmPin;
    //% fixedInstance shim=pxt::getPin(40)
    const A7: PwmPin;

    // Define aliases, as Digital Pins

    //% fixedInstance shim=pxt::getPin(35)
    const SCL: DigitalPin;
    //% fixedInstance shim=pxt::getPin(34)
    const SDA: DigitalPin;
    //% fixedInstance shim=pxt::getPin(41)
    const RX: DigitalPin;
    //% fixedInstance shim=pxt::getPin(40)
    const TX: DigitalPin;

    // Aliases for built-in components

    //% fixedInstance shim=pxt::getPin(28)
    const D4: DigitalPin; // A
    //% fixedInstance shim=pxt::getPin(14)
    const D5: DigitalPin; // B
    //% fixedInstance shim=pxt::getPin(15)
    const D7: DigitalPin; // Slide
    //% fixedInstance shim=pxt::getPin(55)
    const D8: DigitalPin; // Neopixel
    //% fixedInstance shim=pxt::getPin(8)
    const A10: PwmPin; // mic
    //% fixedInstance shim=pxt::getPin(11)
    const A8: PwmPin; // light
    //% fixedInstance shim=pxt::getPin(9)
    const A9: PwmPin;
}

declare namespace input {
    /**
     * Capacitive pin A1
     */
    //% block="pin A1" fixedInstance shim=pxt::getTouchButton(5)
    const pinA1: TouchButton;

    /**
     * Capacitive pin A2
     */
    //% block="pin A2" fixedInstance shim=pxt::getTouchButton(6)
    const pinA2: TouchButton;

    /**
     * Capacitive pin A3
     */
    //% block="pin A3" fixedInstance shim=pxt::getTouchButton(7)
    const pinA3: TouchButton;

    /**
     * Capacitive pin A4
     */
    //% block="pin A4" fixedInstance shim=pxt::getTouchButton(35)
    const pinA4: TouchButton;

    /**
     * Capacitive pin A5
     */
    //% block="pin A5" fixedInstance shim=pxt::getTouchButton(34)
    const pinA5: TouchButton;

    /**
     * Capacitive pin A6
     */
    //% block="pin A6" fixedInstance shim=pxt::getTouchButton(41)
    const pinA6: TouchButton;

    /**
     * Capacitive pin A7
     */
    //% block="pin A7" fixedInstance shim=pxt::getTouchButton(40)
    const pinA7: TouchButton;
}
