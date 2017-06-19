// Auto-generated. Do not edit.
declare namespace infrared {

    /**
     * Send data over IR.
     */
    //% parts="ir" shim=infrared::sendBuffer
    function sendBuffer(buf: Buffer): void;

    /**
     * Get most recent packet received over IR.
     */
    //% parts="ir" shim=infrared::currentPacket
    function currentPacket(): Buffer;

    /**
     * Run action after a packet is recieved over IR.
     */
    //% parts="ir" shim=infrared::onPacket
    function onPacket(body: () => void): void;

    /**
     * Run action after there's an error reciving packet over IR.
     */
    //% shim=infrared::onError
    function onError(body: () => void): void;
}

// Auto-generated. Do not edit. Really.
