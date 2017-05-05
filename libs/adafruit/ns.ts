
//% color="#B4009E" weight=99 icon="\uf192"
namespace input {
}

namespace light {

    /**
     * Shows a pattern of colors on the pixel ring
     */
    //% blockId="neopixel_show_ring_colors" block="show ring |%array"
    //% weight=100 blockGap=8
    //% parts="neopixel" 
    //% array.fieldEditor="lights" 
    //% defaultInstance=light.pixels blockExternalInputs="true"
    export function showRing(colors: number[], interval: number = 400) {
        const strip = light.pixels;
        const n = Math.min(strip.length(), colors.length);
        const bf = strip.buffered();
        strip.setBuffered(true);
        for(let i = 0; i < n; i++) {
            strip.setPixelColor(i, colors[i])
        }
        strip.show();
        strip.setBuffered(bf);
        loops.pause(interval);
    }
}