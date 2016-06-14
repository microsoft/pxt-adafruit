#include "pxt.h"
#include "MESEvents.h"

using namespace pxt;
//% color=#0082FB weight=20
namespace bluetooth {
    /**
    *  Starts the Bluetooth IO pin service
    */
    //% help=bluetooth/start-io-pin-service
    //% blockId=bluetooth_start_io_pin_service block="bluetooth io pin service" blockGap=8
    void startIOPinService() {
        new MicroBitIOPinService(*uBit.ble, uBit.io);
    }

    /**
    *  Starts the Bluetooth LED service
    */
    //% help=bluetooth/start-led-service
    //% blockId=bluetooth_start_led_service block="bluetooth led service" blockGap=8
    void startLEDService() {
        new MicroBitLEDService(*uBit.ble, uBit.display);
    }

    /**
    *  Starts the temperature service
    */
    //% help=bluetooth/start-temperature-service
    //% blockId=bluetooth_start_temperature_service block="bluetooth temperature service" blockGap=8
    void startTemperatureService() {    
        new MicroBitTemperatureService(*uBit.ble, uBit.thermometer);        
    }

    /**
    *  Starts the magnetometer service
    */
    //% help=bluetooth/start-magnetometer-service
    //% blockId=bluetooth_start_magnetometer_service block="bluetooth magnetometer service" blockGap=8
    void startMagnetometerService() {    
        new MicroBitMagnetometerService(*uBit.ble, uBit.compass); 
    }

    /**
    *  Starts the accelerometer service
    */
    //% help=bluetooth/start-accelerometer-service
    //% blockId=bluetooth_start_accelerometer_service block="bluetooth accelerometer service" blockGap=8
    void startAccelerometerService() {
        new MicroBitAccelerometerService(*uBit.ble, uBit.accelerometer);        
    }
}
