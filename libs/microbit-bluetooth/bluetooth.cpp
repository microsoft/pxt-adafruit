#include "pxt.h"
#include "MESEvents.h"

using namespace pxt;
//% color=#0082FB weight=2
namespace bluetooth {
    /**
    *  Starts the Bluetooth IO pin service
    */
    //% help=bluetooth/io-pin-service
    //% blockId=bluetooth-io-pin-service block="bluetooth io pin service"
    void startIOPinService() {
        new MicroBitIOPinService(*uBit.ble, uBit.io);
    }
}
