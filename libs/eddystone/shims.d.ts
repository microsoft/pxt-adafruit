// Auto-generated. Do not edit.


    /**
     * Support for Eddystone beacons
     */
    //% color=#0082FB weight=19
declare namespace eddystone {

    /**
     * Advertise an Eddystone URL
     */
    //% blockId=eddystone_advertise_url block="eddystone advertise url %url|power %powerLevel" shim=eddystone::advertiseUrl
    function advertiseUrl(url: string, powerLevel: number): void;

    /**
     * Stops advertising Eddystone end points
     */
    //% blockId=eddystone_stop_advertising block="eddystone stop advertising" shim=eddystone::stopAdvertising
    function stopAdvertising(): void;
}

// Auto-generated. Do not edit. Really.
