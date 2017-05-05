
//% color="#B4009E" weight=99 icon="\uf192"
namespace input {
}

namespace light {

    //% blockId="neopixel_show_ring_colors" block="show ring |%array"
    //% weight=100 blockGap=8
    //% parts="neopixel" 
    //% array.fieldEditor="lights" 
    //% defaultInstance=light.pixels blockExternalInputs="true"
    export function showRing(colors: number[], interval: number = 400) {
        const strip : light.NeoPixelStrip = light.pixels;
        for(let i = 0; i < colors.length; i++) {
            strip.setPixelColor(i, light.colors(colors[i]))
        }
        strip.show();
        control.pause(interval);
    }
}