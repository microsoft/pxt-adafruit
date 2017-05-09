
//% color="#B4009E" weight=99 icon="\uf192"
namespace input {
}

namespace light {

    /**
     * Shows a pattern of colors on the pixel ring
     */
    //% blockId="neopixel_show_ring_colors" block="show ring |%array"
    //% weight=100 blockGap=8
    //% array.fieldEditor="lights" array.fieldOptions.onParentBlock=true
    //% blockExternalInputs="true"
    export function showRing(array: string, interval: number = 400) {
        // split the colorArray into each of the colors
        let colors: number[] = [];
        let tempColor = "";
        for (let i = 0; i < array.length; i++) {
            let currChar = array.charAt(i);
            if (currChar == ' ') {
                colors.push(parseColor(tempColor))
                tempColor = "";
            } else {
                tempColor += currChar;
            }
        }
        if (tempColor != "") colors.push(parseColor(tempColor));

        const strip = light.pixels;
        const n = Math.min(strip.length(), colors.length);
        if (colors.length != n)
            return;
        const bf = strip.buffered();
        strip.setBuffered(true);
        for(let i = 0; i < n; i++) {
            const color = colors[i];
            strip.setPixelColor(i, color)
        }
        strip.show();
        strip.setBuffered(bf);
        loops.pause(interval);
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
                return 0;
        }
    }
}