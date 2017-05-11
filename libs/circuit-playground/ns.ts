
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
        const n = strip.length();
        const bf = strip.buffered();
        strip.setBuffered(true);
        let tempColor = "";
        let pi = 0;
        for (let i = 0; i < array.length; i++) {
            const currChar = array.charAt(i);
            const isSpace = currChar == ' ' || currChar == '\n' || currChar == '\r';
            if (!isSpace)
                tempColor += currChar;

            if ((isSpace || i == array.length - 1) && tempColor) {
                strip.setPixelColor(pi++, parseColor(tempColor))
                tempColor = "";
                if (pi == n) {
                    strip.show();
                    loops.pause(interval);
                    pi = 0;
                }
            }
        }
        strip.setBuffered(bf);
    }

    function parseColor(color: string) {
        switch (color) {
            case "RED":
            case "red":
                return Colors.Red;
            case "GREEN":
            case "green":
                return Colors.Green;
            case "BLUE":
            case "blue":
                return Colors.Blue;
            case "WHITE":
            case "white":
                return Colors.White;
            case "ORANGE":
            case "orange":
                return Colors.Orange;
            case "PURPLE":
            case "purple":
                return Colors.Purple;
            case "YELLOW":
            case "yellow":
                return Colors.Yellow;
            case "PINK":
            case "pink":
                return Colors.Pink;
            default:
                return parseInt(color) || 0;
        }
    }
}