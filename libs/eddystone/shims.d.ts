// Auto-generated. Do not edit.


    /**
     * Support for Eddystone beacons
     */
    //% color=#0082FB weight=19
declare namespace eddystone {

    /**
     * Advertise an Eddystone URL
     * @param url the url to transmit. Must be no longer than the supported eddystone url length
     * @param power power level between 0 and 7, e.g.: 7
     * @param connectable true to keep bluetooth connectable for other services, false otherwise
     */
    //% blockId=eddystone_advertise_url block="eddystone advertise url %url|power %powerLevel" shim=eddystone::advertiseUrl
    function advertiseUrl(url: string, power: number, connectable: boolean): void;

    /**
     * Stops advertising Eddystone end points
     */
    //% blockId=eddystone_stop_advertising block="eddystone stop advertising" shim=eddystone::stopAdvertising
    function stopAdvertising(): void;
}

// Auto-generated. Do not edit. Really.
