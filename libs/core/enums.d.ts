// Auto-generated. Do not edit.
declare namespace basic {
}


    declare enum PulseValue {
    //% block=high
    High = 4,  // DEVICE_PIN_EVT_PULSE_HI
    //% block=low
    Low = 5,  // DEVICE_PIN_EVT_PULSE_LO
    }


    declare enum PinPullMode {
    //% block="down"
    PullDown = 0,
    //% block="up"
    PullUp = 1,
    //% block="none"
    PullNone = 2,
    }


    declare enum NumberFormat {
    Int8LE = 1,
    UInt8LE = 2,
    Int16LE = 3,
    UInt16LE = 4,
    Int32LE = 5,
    Int8BE = 6,
    UInt8BE = 7,
    Int16BE = 8,
    UInt16BE = 9,
    Int32BE = 10,
    // UInt32,
    }
declare namespace serial {
}


    declare enum Dimension {
    //% block=x
    X = 0,
    //% block=y
    Y = 1,
    //% block=z
    Z = 2,
    //% block=strength
    Strength = 3,
    }


    declare enum Rotation {
    //% block=pitch
    Pitch = 0,
    //% block=roll
    Roll = 1,
    }


    declare enum AcceleratorRange {
    /**
     * The accelerator measures forces up to 1 gravity
     */
    //%  block="1g"
    OneG = 1,
    /**
     * The accelerator measures forces up to 2 gravity
     */
    //%  block="2g"
    TwoG = 2,
    /**
     * The accelerator measures forces up to 4 gravity
     */
    //% block="4g"
    FourG = 4,
    /**
     * The accelerator measures forces up to 8 gravity
     */
    //% block="8g"
    EightG = 8,
    }
declare namespace input {
}

// Auto-generated. Do not edit. Really.
