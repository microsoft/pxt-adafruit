#include "pxt.h"
#include "MESEvents.h"

using namespace pxt;
//% color=156 weight=79
namespace bluetooth {
    /**
    *  Starts the Bluetooth IO pin service
    */
    //% help=reference/bluetooth/io-pin-service
    //% blockId=bluetooth-io-pin-service block="start io pin service"
    void startIOPinService() {
        new MicroBitIOPinService(*uBit.ble, uBit.io);
    }
}
