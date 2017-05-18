
//% color="#d65cd6"
namespace input {
}

//% color="#F55D3E"
namespace music {

}

//% color="#00b295"
namespace control {

}

//% color="#EF2D56"
namespace pins {

}

//% color="#006E90"
namespace serial {

}

//% color="#40bf4a"
namespace loops {

}

//% color="#4c97ff"
namespace light {

    /**
     * Shows a pattern of colors on the pixel ring
     * @param colors a string describing the colors
     * @param interval the duration in milliseconds between frames, eg: 400
     */
    //% blockId="neopixel_show_ring_colors" block="show ring |%colors"
    //% weight=100
    //% colors.fieldEditor="lights" 
    //% colors.fieldOptions.onParentBlock=true
    //% blockExternalInputs="true" blockGap=8
    export function showRing(colors: string, interval: number = 400) {        
        const strip = light.pixels;
        return strip.showColors(colors, interval);
    }
}