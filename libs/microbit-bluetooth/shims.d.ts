// Auto-generated. Do not edit.


    /**
     * Support for additional Bluetooth services.
     */
    //% color=#0082FB weight=20
declare namespace bluetooth {

    /**
     *  Starts the Bluetooth IO pin service.
     */
    //% help=bluetooth/start-io-pin-service
    //% blockId=bluetooth_start_io_pin_service block="bluetooth io pin service" blockGap=8 shim=bluetooth::startIOPinService
    function startIOPinService(): void;

    /**
     *  Starts the Bluetooth LED service
     */
    //% help=bluetooth/start-led-service
    //% blockId=bluetooth_start_led_service block="bluetooth led service" blockGap=8 shim=bluetooth::startLEDService
    function startLEDService(): void;

    /**
     *  Starts the Bluetooth temperature service
     */
    //% help=bluetooth/start-temperature-service
    //% blockId=bluetooth_start_temperature_service block="bluetooth temperature service" blockGap=8 shim=bluetooth::startTemperatureService
    function startTemperatureService(): void;

    /**
     *  Starts the Bluetooth magnetometer service
     */
    //% help=bluetooth/start-magnetometer-service
    //% blockId=bluetooth_start_magnetometer_service block="bluetooth magnetometer service" blockGap=8 shim=bluetooth::startMagnetometerService
    function startMagnetometerService(): void;

    /**
     *  Starts the Bluetooth accelerometer service
     */
    //% help=bluetooth/start-accelerometer-service
    //% blockId=bluetooth_start_accelerometer_service block="bluetooth accelerometer service" blockGap=8 shim=bluetooth::startAccelerometerService
    function startAccelerometerService(): void;

    /**
     *  Starts the Bluetooth button service
     */
    //% help=bluetooth/start-button-service
    //% blockId=bluetooth_start_button_service block="bluetooth button service" blockGap=8 shim=bluetooth::startButtonService
    function startButtonService(): void;

    /**
     *  Writes to the Bluetooth UART service buffer. From there the data is transmitted over Bluetooth to a connected device.
     */
    //% help=bluetooth/uart-write
    //% blockId=bluetooth_uart_write block="bluetooth uart write %data" blockGap=8 shim=bluetooth::uartWrite
    function uartWrite(data: string): void;

    /**
     *  Reads from the Bluetooth UART service buffer, returning its contents when the specified delimiter character is encountered.
     */
    //% help=bluetooth/uart-read
    //% blockId=bluetooth_uart_read block="bluetooth uart read %del=bluetooth_uart_delimiter_conv" blockGap=8 shim=bluetooth::uartRead
    function uartRead(del: string): string;

    /**
     * Returns the delimiter corresponding string
     */
    //% blockId="bluetooth_uart_delimiter_conv" block="%del"
    //% weight=1 shim=bluetooth::delimiters
    function delimiters(del: Delimiters): string;

    /**
     * Register code to run when the micro:bit is connected to over Bluetooth
     * @param body Code to run when a Bluetooth connection is established
     */
    //% help=bluetooth/on-bluetooth-connected weight=20
    //% blockId=bluetooth_on_connected block="on bluetooth connected" blockGap=8 shim=bluetooth::onBluetoothConnected
    function onBluetoothConnected(body: () => void): void;

    /**
     * Register code to run when a bluetooth connection to the micro:bit is lost
     * @param body Code to run when a Bluetooth connection is lost
     */
    //% help=bluetooth/on-bluetooth-disconnected weight=19
    //% blockId=bluetooth_on_disconnected block="on bluetooth disconnected" shim=bluetooth::onBluetoothDisconnected
    function onBluetoothDisconnected(body: () => void): void;
}

// Auto-generated. Do not edit. Really.
