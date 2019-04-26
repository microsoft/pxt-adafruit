
//% color="#d65cd6"
namespace input {
}

//% color="#F55D3E"
namespace music {

}

//% color="#1B998B"
namespace control {

}

//% color="#EF2D56"
namespace pins {

}

//% color="#006E90"
namespace serial {

}

//% color="#006E90"
namespace console {

}

//% color="#40bf4a"
namespace loops {

}

//% color="#4c97ff"
//% groups='["other", "Color", "Photon", "More"]'
namespace light {
    /**
     * Shows a pattern of colors on the pixel ring
     * @param colors a string describing the colors, eg: "red red red red red red red red red red"
     * @param interval the duration in milliseconds between frames, eg: 400
     */
    //% blockId="neopixel_show_ring_colors" block="show ring |%colors"
    //% weight=100
    //% help="light/show-ring"
    //% colors.fieldEditor="lights"
    //% colors.fieldOptions.onParentBlock=true
    //% colors.fieldOptions.decompileLiterals=true
    //% blockExternalInputs="true" blockGap=8
    export function showRing(colors: string, interval: number = 400) {
        const strip = light.pixels;
        return strip.showColors(colors, interval);
    }
}

// Temporary fix for i2c https://github.com/lancaster-university/codal-samd/issues/13
pins.LED.digitalWrite(false);