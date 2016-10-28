#include <Arduino.h>

#define NOT_A_PIN 0
#define NOT_A_PORT 0

#define PI 3.1415926535897932384626433832795
#define HALF_PI 1.5707963267948966192313216916398
#define TWO_PI 6.283185307179586476925286766559
#define DEG_TO_RAD 0.017453292519943295769236907684886
#define RAD_TO_DEG 57.295779513082320876798154814105
#define EULER 2.718281828459045235360287471352

enum class Pin
{
    //% block="RX #0"
    P0,
    //% block="TX #1"
    P1,
    //% block=SDA #2
    P2,
    //% block=SCL #3
    P3,
    //% block=#4 (Left Button)
    P4,
    //% block=#5 (Buzzer)
    P5,
    //% block=#6
    P6,
    //% block=X
    P7,
    //% block=X
    P8,
    //% block=#9
    P9,
    //% block=#10
    P10,
    //% block=#X
    P11,
    //% block=#12
    P12,
    //% block=#13
    P13,
    //% block=X
    P14,
    //% block=#17 (Neopixel)
    P17,
    //% block=#19 (Right Button)
    P19,
    //% block=#21 (Slide Switch)
    P21,
    //% block=#21 (Capsense Shared)
    P30,
    //% block=A0 (Thermistro)
    A0,
    //% block=A4 (Sound Sensor)
    A4,
    //% block=A5 (Light Sensor)
    A5
};

enum class PinMode
{
    PIN_INPUT = 0,
    PIN_OUTPUT = 1,
    PIN_INPUT_PULLUP = 2
};

enum class PulseValue
{
    PULSE_HIGH = 1,
    PULSE_LOW = 0
};

enum class PinType
{
    PIN_EXTERNAL = 0,
    PIN_DEFAULT = 1,
    PIN_INTERNAL = 3
    /*
    Values are different for each board:
    INTERNAL1V1
    INTERNAL2V56
    INTERNAL2V56_EXTCAP
    */
};

/**
* Arduino pin functions
*/
//% color=#00979C weight=50
namespace pins
{
    /**
     * Pin Mode
     * @param pin the number of the pin whose mode you wish to set
     * @param mode INPUT, OUTPUT, or INPUT_PULLUP
    */
    //% help=https://www.arduino.cc/en/Reference/PinMode
    //% blockId="arduino_pinMode" block="pin mode pin %pin| to %mode"
    void pinMode(Pin pin, PinMode mode)
    {
        //::pinMode(pin, mode);
    }

    /**
     * Digital Write
     * @param pin the number of the pin
     * @param value HIGH or LOW
    */
    //% help=https://www.arduino.cc/en/Reference/DigitalWrite
    //% blockId="arduino_digitalWrite" block="digital write %pin| to %state"
    void digitalWrite(Pin pin, PulseValue value)
    {
        //::digitalWrite(pin, value);
    }

    /**
     * Digital Read
     * @param pin the number of the pin
     * @param value HIGH or LOW
    */
    //% help=https://www.arduino.cc/en/Reference/DigitalRead
    //% blockId="arduino_digitalRead" block="digital read pin %pin"
    PulseValue digitalRead(Pin pin)
    {

    }


    /**
     * Analog Write
     * Writes an analog value to a pin. 
     * Can be used to light a LED at varying brightnesses or drive a motor at various speeds.
     * @param pin the pin to write to.
     * @param value the duty cycle: between 0 (always off) and 255 (always on).
     */
    //% help=https://www.arduino.cc/en/Reference/AnalogWrite weight=91
    //% blockId="arduino_analogWrite" block="analog write pin %pin| to %value"
    void analogWrite(Pin pin, uint8_t value) {
        
    }

    /**
     * Analog Read
     * Reads the value from the specified analog pin. 
     * @param pin the number of the analog input pin to read from (0 to 5 on most boards, 0 to 7 on the Mini and Nano, 0 to 15 on the Mega)
     */
    //% help=https://www.arduino.cc/en/Reference/AnalogRead weight=91
    //% blockId="arduino_analogRead" block="analog read pin %pin"
    PulseValue analogRead(Pin pin) {

    }

    /**
     * Analog Reference
     * Configures the reference voltage used for analog input (i.e. the value used as the top of the input range).
     * @param type which type of reference to use (DEFAULT, INTERNAL, INTERNAL1V1, INTERNAL2V56, or EXTERNAL).
     */
    //% help=https://www.arduino.cc/en/Reference/AnalogReference weight=91
    //% blockId="arduino_analogReference" block="analog reference type %type"
    void analogReference(PinType type) {

    }

    /**
     * Pulse In
     * Reads a pulse (either HIGH or LOW) on a pin.
     * @param pin the number of the pin on which you want to read the pulse. (int)
     * @param state type of pulse to read: either HIGH or LOW. (int)
     * @param timeout the number of microseconds to wait for the pulse to be completed: the function returns 0 if no complete pulse was received within the timeout. Default is one second.
     * @returns the length of the pulse (in microseconds) or 0 if no pulse is completed before the timeout
     */
    //% help=https://www.arduino.cc/en/Reference/PulseIn weight=91
    //% blockId="arduino_pulseIn" block="pulse in pin %pin| with state %state"
    int pulseIn(Pin pin, PulseValue state, int timeout = 1000000) {

    }

    /*
#define round(x)     ((x)>=0?(int)((x)+0.5):(int)((x)-0.5))
#define radians(deg) ((deg)*DEG_TO_RAD)
#define degrees(rad) ((rad)*RAD_TO_DEG)
#define sq(x) ((x)*(x))



    uint16_t makeWord(uint16_t w);
uint16_t makeWord(byte h, byte l);

#define word(...) makeWord(__VA_ARGS__)

*/

}

namespace math {
    /**
     * Random
     * The random function generates pseudo-random numbers.
     * @param max upper bound of the random value, exclusive, eg: 10
     * @returns a random number between min and max-1
     */
    //% help=https://www.arduino.cc/en/Reference/RandomSeed weight=91
    //% blockId="arduino_randomMax" block="random with max %max" icon="\uf1ec"
    int random(int max) {
        if (howbig == 0) {
            return 0;
        }
        return random() % howbig;
    }

    /**
     * Random
     * The random function generates pseudo-random numbers.
     * @param min lower bound of the random value, inclusive, eg: 0
     * @param max upper bound of the random value, exclusive, eg: 10
     * @returns a random number between min and max-1
     */
    //% help=https://www.arduino.cc/en/Reference/RandomSeed weight=91
    //% blockId="arduino_randomMinMax" block="random between %min| and %max" icon="\uf1ec"
    int random(int min, int max) {
        if (howsmall >= howbig) {
            return howsmall;
        }
        int diff = howbig - howsmall;
        return random(diff) + howsmall;
    }

    /**
     * Random Seed
     * Initializes the pseudo-random number generator, 
     * causing it to start at an arbitrary point in its random sequence. This sequence, while very int, and random, is always the same.
     * @param seed a number to generate the seed.
     */
    //% help=https://www.arduino.cc/en/Reference/RandomSeed weight=91
    //% blockId="arduino_randomSeed" block="random seed %seed" icon="\uf1ec"
    void randomSeed(int seed) {
        if (seed != 0) {
            srandom(seed);
        }
    }
}

namespace music {
    /**
     * Tone
     * Generates a square wave of the specified frequency (and 50% duty cycle) on a pin. 
     * A duration can be specified, otherwise the wave continues until a call to noTone().
     * The pin can be connected to a piezo buzzer or other speaker to play tones.
     * @param pin the pin on which to generate the tone
     * @param frequency the frequency of the tone in hertz
     * @param the duration of the tone in milliseconds (optional)
     */
    //% help=https://www.arduino.cc/en/Reference/Tone weight=90
    //% blockId="arduino_tone" block="tone on pin %pin| at frequency %frequency" icon="\uf025"
    void tone(Pin pin, int frequency, int duration = 1000) {
        
    }

    /**
     * No tone
     * Stops the generation of a square wave triggered by tone(). Has no effect if no tone is being generated.
     * @param pin the pin on which to stop generating the tone
     */
    //% help=https://www.arduino.cc/en/Reference/NoTone weight=91
    //% blockId="arduino_notone" block="no tone on pin %pin" icon="\uf025"
    void notone(Pin pin) {

    }    
}

/**
* Arduino control functions
*/
//% color=#00f000 weight=10
namespace control
{
    /**
     * Delay
     * Pauses the program for the amount of time (in miliseconds) specified as parameter.
     * (There are 1000 milliseconds in a second.)
     * @param ms the number of milliseconds to pause, eg: 1000
     */
    //% help=https://www.arduino.cc/en/Reference/Delay weight=91
    //% async blockId="arduino_delay" block="delay %ms| milliseconds"
    void delay(int ms) {
        delay(ms);
    }

    /**
     * Delay
     * Pauses the program for the amount of time (in microseconds) specified as parameter.
     * There are a thousand microseconds in a millisecond, and a million microseconds in a second.
     * @param us the number of microseconds to pause
     */
    //% help=https://www.arduino.cc/en/Reference/DelayMicroseconds weight=91
    //% async blockId="arduino_delayMicroseconds" block="delay %ms| microseconds"
    void delayMicroseconds(int us) {
        delayMicroseconds(us);
    }


    /**
     * Millis
     * Returns the number of milliseconds since the Arduino board began running the current program. 
     * This number will overflow (go back to zero), after approximately 50 days.
     */
    //% help=https://www.arduino.cc/en/Reference/Millis weight=91
    //% blockId="arduino_millis" block="millis" blockGap=8
    int millis() {
        return millis();
    }

    /**
     * Millis
     * Returns the number of microseconds since the Arduino board began running the current program.
     * This number will overflow (go back to zero), after approximately 70 minutes.
     */
    //% help=https://www.arduino.cc/en/Reference/Micros weight=91
    //% blockId="arduino_micros" block="micros" blockGap=8
    int micros() {
        return micros();
    }
}