#include "pxt.h"
#include "neopixel.h"

namespace neopixel {

//%
DigitalPin defaultPin() {
    return lookupPin(PIN_NEOPIXEL);
}

//% parts="neopixel"
void sendBuffer(DigitalPin pin, Buffer buf) {
    neopixel_send_buffer(*pin, buf->payload, buf->length);
}

}
