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
