
//% color="#B4009E" weight=99 icon="\uf192"
namespace input {
}

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