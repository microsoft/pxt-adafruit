#include <Adafruit_CircuitPlayground.h>

enum class Button
{
    Left = 1, //CPLAY_LEFTBUTTON,
    Right = 2 //CPLAY_RIGHTBUTTON
};

enum Note
{
    //% blockIdentity=playground.noteFrequency
    C = 262,
    //% block=C#
    //% blockIdentity=playground.noteFrequency
    CSharp = 277,
    //% blockIdentity=playground.noteFrequency
    D = 294,
    //% blockIdentity=playground.noteFrequency
    Eb = 311,
    //% blockIdentity=playground.noteFrequency
    E = 330,
    //% blockIdentity=playground.noteFrequency
    F = 349,
    //% block=F#
    //% blockIdentity=playground.noteFrequency
    FSharp = 370,
    //% blockIdentity=playground.noteFrequency
    G = 392,
    //% block=G#
    //% blockIdentity=playground.noteFrequency
    GSharp = 415,
    //% blockIdentity=playground.noteFrequency
    A = 440,
    //% blockIdentity=playground.noteFrequency
    Bb = 466,
    //% blockIdentity=playground.noteFrequency
    B = 494
};

enum class CapacityPin
{
    //% block="RX #0"
    P0 = 0,
    //% block="TX #1"
    P1 = 1,
    //% block=SDA #2
    P2 = 2,
    //% block=SCL #3
    P3 = 3,
    //% block=#6
    P6 = 6,
    //% block=#9
    P9 = 9,
    //% block=#10
    P10 = 10,
    //% block=#12
    P12 = 12
};


/**
* Playground
*/
//% color=#FE49C9 weight=99
namespace playground
{
/**
* Begins the Circuit playground execution
*/
//% blockId="begin" block="begin"
boolean begin(uint8_t brightness = 20)
{
    return CircuitPlayground.begin(brightness);
}

/**
* Gets a value indicating if the slide switched is on.
*/
//% blockId="slideSwitch" block="slide switch"
boolean slideSwitch()
{
    return CircuitPlayground.slideSwitch();
}

/**
* Reads the light level between 0 and 1023.
*/
//% blockId="lightSensor" block="light sensor"
uint16_t lightSensor()
{
    return CircuitPlayground.lightSensor();
}

/**
* Reads the sound level between 0 and 1023.
*/
//% blockId="soundSensor" block="sound sensor"
uint16_t soundSensor()
{
    return CircuitPlayground.soundSensor();
}
/**
* Just turn on/off the red #13 LED
* @param on a value to turn on/off the LED, eg: true
*/
//% blockId="redled" block="red led %on"
void redLED(boolean on)
{
    CircuitPlayground.redLED(on);
}

/**
* Gets a value indicating if the left button is pressed.
*/
//% blockId="leftButton" block="left button" weight=40
boolean leftButton()
{
    return CircuitPlayground.leftButton();
}

/**
* Gets a value indicating if the right button is pressed.
*/
//% blockId="rightButton" block="right button" weight=39
boolean rightButton()
{
    return CircuitPlayground.rightButton();
}

/**
* Gets the frequency of a note.
* @param note the note name
*/
//% weight=50
//% blockId=noteFrequency block="%note"
//% shim=TD_ID
uint16_t noteFrequency(Note note)
{
    return note;
}

/**
* Plays a given tone
* @param frequency pitch of tone in Hz
* @param time duration of tone in ms.
*/
//% async blockId="playTone" block="play tone at|freq (Hz) %frequency=noteFrequency|for (ms) %time"
void playTone(uint16_t frequency, uint16_t time = 250)
{
    CircuitPlayground.playTone(frequency, time);
}

/**
* Reads the capacitiy of a specific pin
* @param pin the number of the pin
* @param samples
*/
//% blockId="readCap" block="read capacity at pin %pin"
uint16_t readCap(CapacityPin pin, uint16_t samples = 10)
{
    return CircuitPlayground.readCap(pin, samples);
}

/**
* Reads the accelerometer's Motion X
*/
//% blockId="motionX" block="motion X"
float motionX() {
    return CircuitPlayground.motionX();
}

/**
* Reads the accelerometer's Motion Y
*/
//% blockId="motionY" block="motion Y"
float motionY() {
    return CircuitPlayground.motionY();
}

/**
* Reads the accelerometer's Motion Z
*/
//% blockId="motionZ" block="motion Z"
float motionZ() {
    return CircuitPlayground.motionZ();
}

void setAccelRange(lis3dh_range_t range) {
    CircuitPlayground.setAccelRange(range);
}

void setAccelTap(uint8_t c, uint8_t clickthresh) {
    CircuitPlayground.setAccelTap(c, clickthresh);
}

uint8_t getAccelTap() {
    return CircuitPlayground.getAccelTap();
}


/**
* Reads the temperature.
*/
//% blockId="temperatur" block="temperature"
float temperature() {
    return CircuitPlayground.temperature();
}

float temperatureF() {
    return CircuitPlayground.temperatureF();
}

}


/**
* Functions to manipulate neopixels
*/
//% color=#00a7e9 weight=50
namespace neopixels
{
/**
* Clear pixels
*/
//% blockId="clearPixels" block="clear pixels"
void clearPixels()
{
    CircuitPlayground.clearPixels();
}
/**
* Sets the RGB color on a pixel
*/
//% blockId="setPixelColor" block="set pixel %p|to color %c"
void setPixelColor(uint8_t p, uint32_t c)
{
    CircuitPlayground.setPixelColor(p, c);
}
/**
* Sets the RGB color on a pixel
*/
//% blockId="setPixelColorRgb" block="set pixel %p|to red %c|green %g|blue %b"
void setPixelColorRgb(uint8_t p, uint8_t r, uint8_t g, uint8_t b)
{
    CircuitPlayground.setPixelColor(p, r, g, b);
}
/**
* Sets the neopixel brightness
*/
//% blockId="setBrightness" block="set brightness %b"
void setBrightness(uint16_t b)
{
    CircuitPlayground.setBrightness(b);
}

/**
* Color wheel
*/
//% blockId="colorWheel" block="color wheel %x"
uint32_t colorWheel(uint8_t x)
{
    return CircuitPlayground.colorWheel(x);
}
}

/**
* Functions to manipulate serial
*/
//% color=#00a700 weight=40
namespace serial {
/**
* Serial print
*/
//% blockId="print" block="print %code"
void print(uint16_t code) {
    Serial.println(code);
}
}