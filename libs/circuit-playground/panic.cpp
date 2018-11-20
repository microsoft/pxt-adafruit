#include "pxt.h"
#include "neopixel.h"

static void showCode(int statusCode) {
    auto neoPin = LOOKUP_PIN(NEOPIXEL);
    if (!neoPin)
        return;

    int numNeopixels = getConfig(CFG_NUM_NEOPIXELS, 0);
    if (numNeopixels <= 0)
        return;
    int size = numNeopixels * 3;
    uint8_t neobuf[size];
    memset(neobuf, 0, size);

    for (int i = 0; i < 10; ++i) {
        if (i < numNeopixels)
            memcpy(&neobuf[i * 3], (statusCode & (1 << (9 - i))) ? "\x00\x04\x00" : "\x00\x00\x01", 3);
    }

    neoPin->setDigitalValue(0);
    target_wait_us(1000);

    neopixel_send_buffer(*neoPin, neobuf, size);
    target_disable_irq();
}

__attribute__((weak)) void target_panic(int statusCode) {
    target_disable_irq();
    DMESG("*** CODAL PANIC : [%d]", statusCode);
    showCode(statusCode);

#if DEVICE_DMESG_BUFFER_SIZE > 0
    while (1) {
    }
#else
    Serial pc(USBTX, USBRX);
    while (1) {
        pc.printf("*** CODAL PANIC : [%.3d]\n", statusCode);
        wait_ms(500);
    }
#endif
}
