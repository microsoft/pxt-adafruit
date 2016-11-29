#include "pxt.h"
#include "Microbit.h"
#include "MicroBitEddystone.h"

using namespace pxt;

/**
* Support for Eddystone beacons
*/
//% color=#0082FB weight=19
namespace eddystone {
    const int8_t CALIBRATED_POWERS[] = {-49, -37, -33, -28, -25, -20, -15, -10};

    /**
    * Advertise an Eddystone URL
    */
    //% blockId=eddystone_advertise_url block="eddystone advertise url %url|power %powerLevel"
    void advertiseUrl(StringData* url, int powerLevel) {
        int power = CALIBRATED_POWERS[min(7, max(0, powerLevel))];
        ManagedString murl(url)
        uBit.bleManager.advertiseEddystoneUrl(murl, power, false);
    }

    /**
    * Stops advertising Eddystone end points
    */
    //% blockId=eddystone_stop_advertising block="eddystone stop advertising"
    void stopAdvertising() {
        uBit.bleManager.stopAdvertising();
    }
}
