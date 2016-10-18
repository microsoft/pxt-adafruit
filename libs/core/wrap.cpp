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

/**
* Playground
*/
//% color=#FE49C9 weight=99
namespace playground
{
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
//% blockId="playTone" block="play tone at|freq (Hz) %frequency=noteFrequency|for (ms) %time"
void playTone(uint16_t frequency, uint16_t time)
{
    CircuitPlayground.playTone(frequency, time);
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
void setPixelColor(uint8_t p, uint8_t r, uint8_t g, uint8_t b)
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

/*

#include <Wire.h>
#include <SPI.h>

void setup() {
  Serial.begin(9600);
  Serial.println("Circuit Playground test!");

  CircuitPlayground.begin();
}


void loop() {
  // test Red #13 LED
  CircuitPlayground.redLED(HIGH);
  delay(100);
  CircuitPlayground.redLED(LOW);
  delay(100);


*/