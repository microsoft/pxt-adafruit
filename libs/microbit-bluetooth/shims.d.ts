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
     * Register code to run when the micro:bit is connected to over Bluetooth
     * @param body Code to run when a Bluetooth connection is established
     */
    //% help=bluetooth/on-bluetooth-connected
    //% blockId=bluetooth_on_connected block="on bluetooth connected" shim=bluetooth::onBluetoothConnected
    function onBluetoothConnected(body: () => void): void;

    /**
     * Register code to run when a bluetooth connection to the micro:bit is lost
     * @param body Code to run when a Bluetooth connection is lost
     */
    //% help=bluetooth/on-bluetooth-disconnected
    //% blockId=bluetooth_on_disconnected block="on bluetooth disconnected" shim=bluetooth::onBluetoothDisconnected
    function onBluetoothDisconnected(body: () => void): void;

    /**
     *  Starts the Bluetooth UART service
     */
    //% help=bluetooth/start-uart-service
    //% blockId=bluetooth_start_uart_service block="bluetooth|uart|service" blockGap=8 shim=bluetooth::startUartService
    function startUartService(): void;
}

// Auto-generated. Do not edit. Really.
