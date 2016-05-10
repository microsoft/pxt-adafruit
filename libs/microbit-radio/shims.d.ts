// Auto-generated. Do not edit.



    //% color=270 weight=34
declare namespace radio {

    /**
     * Broadcasts 4 numbers over radio to any connected micro:bit in the group.
     */
    //% help=radio/send-numbers
    //% weight=59
    //% blockId=radio_datagram_send_numbers block="send numbers|0: %VALUE0|1: %VALUE1|2: %VALUE2|3: %VALUE3" shim=radio::sendNumbers
    function sendNumbers(value_0: number, value_1: number, value_2: number, value_3: number): void;

    /**
     * Broadcasts a name / value pair along with the device serial number
     * and running time to any connected BBC micro:bit in the group.
     * @param name the field name (max 12 characters), eg: "data"
     * @param the numberic value
     */
    //% help=radio/stream-value
    //% weight=4
    //% blockId=radio_datagram_stream_value block="stream|value %name|= %value" shim=radio::streamValue
    function streamValue(name: string, number: number): void;

    /**
     * Reads a value sent with `stream value` and writes it
     * to the serial stream as JSON
     */
    //% help=radio/read-value-to-serial
    //% weight=3 shim=radio::readValueToSerial
    function readValueToSerial(): void;

    /**
     * Registers code to run when a packet is received over radio.
     */
    //% help=radio/on-data-received
    //% weight=50
    //% blockId=radio_datagram_received_event block="on data received" blockGap=8 shim=radio::onDataReceived
    function onDataReceived(body: () => void): void;

    /**
     * Reads a number at a given index, between ``0`` and ``3``, from the packet received by ``receive number``. Not supported in simulator.
     * @param index index of the number to read from 0 to 3. 1 eg
     */
    //% help=radio/received-number-at
    //% weight=45
    //% blockId=radio_datagram_received_number_at block="receive number|at %VALUE" blockGap=8 shim=radio::receivedNumberAt
    function receivedNumberAt(index: number): number;

    /**
     * Reads the next packet as a number from the radio queue.
     */
    //% help=radio/receive-number
    //% weight=46
    //% blockId=radio_datagram_receive block="receive number" blockGap=8 shim=radio::receiveNumber
    function receiveNumber(): number;

    /**
     * Gets the received signal strength indicator (RSSI) from the packet received by ``receive number``. Not supported in simulator.
     * namespace=radio
     */
    //% help=radio/received-signal-strength
    //% weight=40
    //% blockId=radio_datagram_rssi block="received signal strength" shim=radio::receivedSignalStrength
    function receivedSignalStrength(): number;

    /**
     * Sets the group id for radio communications. A micro:bit can only listen to one group ID at any time.
     * @ param id the group id between ``0`` and ``255``, 1 eg
     */
    //% help=radio/set-group
    //% weight=10
    //% blockId=radio_set_group block="set group %ID" shim=radio::setGroup
    function setGroup(id: number): void;

    /**
     * Change the output power level of the transmitter to the given value.
     * @param power a value in the range 0..7, where 0 is the lowest power and 7 is the highest, 7 eg
     */
    //% help=radio/set-transmit-power
    //% weight=9
    //% blockId=radio_set_transmit_power block="set transmit power %power" shim=radio::setTransmitPower
    function setTransmitPower(power: number): void;
}

// Auto-generated. Do not edit. Really.
