enum ArrowNames {
    //% blockIdentity=light.arrowNumber block="North"
    North = 0,
    //% blockIdentity=light.arrowNumber block="North East"
    NorthEast,
    //% blockIdentity=light.arrowNumber block="East"
    East,
    //% blockIdentity=light.arrowNumber block="South East"
    SouthEast,
    //% blockIdentity=light.arrowNumber block="South"
    South,
    //% blockIdentity=light.arrowNumber block="South West"
    SouthWest,
    //% blockIdentity=light.arrowNumber block="West"
    West,
    //% blockIdentity=light.arrowNumber block="North West"
    NorthWest,
}

namespace light {

    /**
     * Shows an arrow on screen
     * @param direction the direction of the arrow
     * @param interval the amount of time (milliseconds) to show the icon. Default is 600.
     */
    //% weight=50
    //% blockId=light_show_arrow
    //% block="show %colour=colorNumberPicker|arrow %i=light_arrow_number"
    //% help=light/show-arrow
    export function showArrow(colour: number, direction: number, interval = 600) {
        let res = arrowImage(colour, direction)
        light.showRing(res, interval)
    }

    function arrowImage(colour: number, i: ArrowNames): string {
        switch (i) {
            // compass directions
            case ArrowNames.North: return `${colour} ${colour} black black ${colour} ${colour} black black ${colour} ${colour}`;
            case ArrowNames.NorthEast: return `black black black ${colour} black black black ${colour} ${colour} ${colour}`;
            case ArrowNames.East: return `black black ${colour} black black black ${colour} ${colour} ${colour} black`;
            case ArrowNames.SouthEast: return `black ${colour} black black black ${colour} ${colour} ${colour} black black`;
            case ArrowNames.South: return `${colour} black black ${colour} ${colour} ${colour} ${colour} black black ${colour}`;
            case ArrowNames.SouthWest: return `black black ${colour} ${colour} ${colour} black black black ${colour} black`;
            case ArrowNames.West: return `black ${colour} ${colour} ${colour} black black black ${colour} black black`;
            case ArrowNames.NorthWest: return `${colour} ${colour} ${colour} black black black ${colour} black black black`;
            default: return ``;
        }
    }

    //% weight=50 blockGap=8
    //% help=images/arrow-number
    //% blockId=light_arrow_number block="%arrow"
    //% shim=TD_ID blockHidden=1
    export function arrowNumber(arrow: ArrowNames): number {
        return arrow;
    }
}