
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
     */
    //% blockId="neopixel_show_ring_colors" block="show ring |%array"
    //% weight=100
    //% array.fieldEditor="lights" 
    //% array.fieldOptions.onParentBlock=true
    //% blockExternalInputs="true"
    export function showRing(array: string, interval: number = 400) {        
        const strip = light.pixels;
        return strip.showColors(array, interval);
    }
}