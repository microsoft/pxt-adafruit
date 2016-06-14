#include "pxt.h"
#include "MESEvents.h"

using namespace pxt;
//% color=#0082FB weight=20
namespace bluetooth {
    /**
    *  Starts the Bluetooth IO pin service
    */
    //% help=bluetooth/start-io-pin-service
    //% blockId=bluetooth_start_io_pin_service block="bluetooth io pin service"
    void startIOPinService() {
        new MicroBitIOPinService(*uBit.ble, uBit.io);
    }

    /**
    *  Starts the Bluetooth LED service
    */
    //% help=bluetooth/start-led-service
    //% blockId=bluetooth_start_led_service block="bluetooth led service"
    void startLEDService() {
        new MicroBitLEDService(*uBit.ble, uBit.display);
    }
}
