//% color=270 weight=34
namespace radio {
    /**
     * Broadcasts a number over radio to any connected micro:bit in the group.
     */    
    //% help=radio/send-number
    //% weight=60
    //% blockId=radio_datagram_send block="send number %MESSAGE" blockGap=8
    export function sendNumber(value: number) : void { 
        sendNumbers(value, 0, 0, 0);
    }
}
