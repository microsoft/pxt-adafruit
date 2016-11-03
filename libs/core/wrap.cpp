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
    X = 0,
    Y = 1,
    Z = 2  
};

enum Animation
{
    Rainbow,
    Sparkle
};

enum Drawing
{
    DrawRainbow
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

/**
 * Well known colors
 */
enum Color {
    //% block=red blockIdentity=light.color
    Red = 0xFF0000,
    //% block=orange blockIdentity=light.color
    Orange = 0xFFA500,
    //% block=yellow blockIdentity=light.color
    Yellow = 0xFFFF00,
    //% block=green blockIdentity=light.color
    Green = 0x00FF00,
    //% block=blue blockIdentity=light.color
    Blue = 0x0000FF,
    //% block=indigo blockIdentity=light.color
    Indigo = 0x4b0082,
    //% block=violet blockIdentity=light.color
    Violet = 0x8a2be2,
    //% block=purple blockIdentity=light.color
    Purple = 0xFF00FF,
    //% block=white blockIdentity=light.color
    White = 0xFFFFFF
};

enum TemperatureUnit {
    Celsius,
    Fahrenheit
};


/**
* Sensors
*/
//% color=#FE49C9 weight=99
namespace sensors
{
/**
* Gets a value indicating if the left button is pressed.
*/
//% blockId="leftButton" block="%b|button pressed?" weight=40
//% weight=85
boolean button(Button b)
{
    if (b == Button::Left) return CircuitPlayground.leftButton();
    else return CircuitPlayground.rightButton();
}


/**
* Reads the number of taps
*/
//% blockId="getAccelTap" block="taps"
//% weight=84
uint8_t taps() {
    return CircuitPlayground.getAccelTap();
}

/**
* Reads the light level between 0 and 1023.
*/
//% blockId="lightSensor" block="light level"
//% weight=80
uint16_t lightLevel()
{
    return CircuitPlayground.lightSensor();
}

/**
* Reads the accelerometer's Motion
* @param axis the axis of rotation. X is aligned with the buttons, Y going accross the buttons, Z perpendicular to the board.
*/
//% blockId="motion" block="motion %axis"
//% weight=82
int motion(MotionAxis axis) {
    switch(axis) {
        case MotionAxis::Y: return CircuitPlayground.motionY();
        case MotionAxis::Z: return CircuitPlayground.motionZ();
        default: return CircuitPlayground.motionX();
    }
}

/**
* Reads the sound level between 0 and 1023.
*/
//% blockId="soundSensor" block="sound"
//% weight=60
uint16_t sound()
{
    return CircuitPlayground.soundSensor();
}

/**
* Gets a value indicating if the slide switched is on.
*/
//% blockId="slideSwitch" block="slide switch"
//% weight=55
boolean slideSwitch()
{
    return CircuitPlayground.slideSwitch();
}

/**
* Reads the capacitiy of a specific pin
* @param pin the number of the pin
* @param samples
*/
//% blockId="readCap" block="sense touch at pin %pin"
//% weight=50
uint16_t readCap(CapacityPin pin, uint16_t samples = 10)
{
    return CircuitPlayground.readCap((uint8_t)pin, samples);
}

void setAccelRange(lis3dh_range_t range) {
    CircuitPlayground.setAccelRange(range);
}

void setAccelTap(uint8_t c, uint8_t clickthresh) {
    CircuitPlayground.setAccelTap(c, clickthresh);
}

/**
* Reads the temperature.
*/
//% blockId="temperatur" block="temperature %unit"
int temperature(TemperatureUnit unit) {
    if (unit == TemperatureUnit::Celsius)
        return CircuitPlayground.temperature();
    else return CircuitPlayground.temperatureF();
    //TODO: should return float
}

}


/**
* Functions for music / audio
*/
//% color=#FF7D7D weight=75
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
* Show a preset drawing. eg: Rainbow
*/
//% blockId="showDrawing" block="show %drawing"
//% weight=95
void showDrawing(Drawing drawing)
{

}

/**
* Rotate the pixels forward.
* @param offset number of pixels to rotate forward, eg: 1
*/
//% blockId="rotate" block="rotate pixels by %offset"
//% weight=95
void rotate(uint8_t offset = 1)
{

}

/**
* Just turn on/off the red #13 LED
* @param on a value to turn on/off the LED, eg: true
*/
//% weight=90
//% blockId="redled" block="red led %on"
void redLED(boolean on)
{
    CircuitPlayground.redLED(on);
}

/**
* Sets the RGB color on a pixel
*/
//% weight=85 blockGap=8
//% blockId="setPixelColor" block="set pixel %p|to color %c=pixelcolor"
void setPixelColor(uint8_t p, uint32_t c)
{
    CircuitPlayground.setPixelColor(p, c);
}

/**
* Sets the RGB color on a pixel
*/
//% weight=85 blockGap=8
//% blockId="setPixelColorRgb" block="set pixel %p|to color %c=pixelcolor"
void setPixelColorRgb(uint8_t p, uint16_t r, uint16_t g, uint16_t b)
{
    CircuitPlayground.setPixelColor(p, r, g, b);
}

/**
* Clear pixels
*/
//% weight=84 blockGap=8
//% blockId="clearPixels" block="clear pixels"
void clearPixels()
{
    CircuitPlayground.clearPixels();
}

/**
* Sets the neopixel brightness
* @param Desired brightness. eg: 255
*/
//% weight=80
//% blockId="setBrightness" block="set brightness %b"
//% advanced=true
void setBrightness(uint16_t brightness)
{
    CircuitPlayground.setBrightness(brightness);
}

/**
* Color wheel
*/
//% blockId="colorWheel" block="color wheel %x"
//% weight=10 blockGap=8
//% advanced=true
uint32_t colorWheel(uint8_t x)
{
    return CircuitPlayground.colorWheel(x);
}


/**
* Converts RGB channels into a color
*/
//% blockId="rgb" block="red %r|green %g|blue %b"
//% weight=9
//% advanced=true
uint32_t rgb(uint8_t r, uint8_t g, uint8_t b)
{
    return r >> 16 | g >> 8 | r;
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