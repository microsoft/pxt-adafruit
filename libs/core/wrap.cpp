#include <Adafruit_CircuitPlayground.h>

enum Button
{
    //% block=left
    Left = 1, //CPLAY_LEFTBUTTON,
    //% block=right
    Right = 2 //CPLAY_RIGHTBUTTON
};

enum MotionAxis
{
    X,
    Y,
    Z   
}

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

enum CapacityPin
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

enum TemperatureUnit {
    Clecius,
    Fahrenheit
}


/**
* Sensors
*/
//% color=#FE49C9 weight=99
namespace sensors
{

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
//% blockId="lightSensor" block="light"
uint16_t light()
{
    return CircuitPlayground.lightSensor();
}

/**
* Gets a value indicating if the left button is pressed.
*/
//% blockId="leftButton" block="%b|button pressed?" weight=40
boolean button(Button b)
{
    if (b == Button::Left) return CircuitPlayground.leftButton();
    else return CircuitPlayground.rightButton();
}

/**
* Reads the capacitiy of a specific pin
* @param pin the number of the pin
* @param samples
*/
//% blockId="readCap" block="read capacity at pin %pin"
uint16_t readCap(CapacityPin pin, uint16_t samples = 10)
{
    return CircuitPlayground.readCap((uint8_t)pin, samples);
}

/**
* Reads the accelerometer's Motion
*/
//% blockId="motion" block="motion %axis"
int motion(MotionAxis axis) {
    switch(axis) {
        case Motion::Y: return CircuitPlayground.motionY();
        case Motion::Z: return CircuitPlayground.motionZ();
        default: return CircuitPlayground.motionX();
    }
}


void setAccelRange(lis3dh_range_t range) {
    CircuitPlayground.setAccelRange(range);
}

void setAccelTap(uint8_t c, uint8_t clickthresh) {
    CircuitPlayground.setAccelTap(c, clickthresh);
}

/**
* Reads the number of taps
*/
//% blockId="getAccelTap" block="taps"
uint8_t getAccelTap() {
    return CircuitPlayground.getAccelTap();
}


/**
* Reads the temperature.
*/
//% blockId="temperatur" block="temperature %unit"
int temperature(TemperatureUnit unit) {
    if (unit == TemperatureUnit::Celcius)
        return CircuitPlayground.temperature();
    else return CircuitPlayground.temperatureF();
    //TODO: should return float
}

/**
* Reads the sound level between 0 and 1023.
*/
//% blockId="soundSensor" block="sound"
uint16_t sound()
{
    return CircuitPlayground.soundSensor();
}

}


/**
* Functions for music / audio
*/
//% color=#FFA702 weight=75
namespace music
{

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

}

/**
* Functions to manipulate neopixels
*/
//% color=#00a7e9 weight=50
namespace light
{
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
//% advanced=true
namespace serial {
/**
* Serial print
*/
//% 
void print(uint16_t code) {
    Serial.println(code);
}
}