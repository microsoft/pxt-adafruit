#include "pxt.h"
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
	* @param url the url to transmit. Must be no longer than the supported eddystone url length
	* @param power power level between 0 and 7, e.g.: 7
    * @param connectable true to keep bluetooth connectable for other services, false otherwise
    */
    //% blockId=eddystone_advertise_url block="eddystone advertise url %url|power %powerLevel"
    void advertiseUrl(StringData* url, int power, bool connectable) {
        int8_t level = CALIBRATED_POWERS[min(7, max(0, power))];
        uBit.bleManager.advertiseEddystoneUrl(ManagedString(url), level, connectable);
    }

    /**
    * Stops advertising Eddystone end points
    */
    //% blockId=eddystone_stop_advertising block="eddystone stop advertising"
    void stopAdvertising() {
        uBit.bleManager.stopAdvertising();
    }
}
