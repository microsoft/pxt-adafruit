# About

The [BBC micro:bit](https://www.microbit.co.uk) is a [pocket-size computer](/device) with 25 LEDs, Bluetooth and sensors that can be programmed by anyone.
The BBC micro:bit was made possible by [a number of partners!](https://www.microbit.co.uk/partners)

The micro:bit provides a fun introduction to programming and making – switch on, program it to do something fun – wear it, customize it.
Just like Arduino, the micro:bit can be connected to and interact with sensors, displays, and other devices. 

## Block Editor or JavaScript

The student can program the BBC micro:bit using a Block Editor or JavaScript.

```blocks
basic.showString("BBC micro:bit!");
```

## Compile and Flash

When a user has her code ready, she can connect her BBC micro:bit to a computer via a USB cable, so it appears as a mounted drive.

Compilation to the ARM thumb machine code happens in the browser.

The student is prompted to save the ARM binary program to a file, which she then simply drags to the micro:bit mounted drive, 
which flashes the micro:bit device with the new program.

## Simulator: Test Your Code
Before a student compiles her code for the micro:bit, she can run it using the micro:bit simulator, all within the confines of a web browser. 
The simulator has support for the LED screen, buttons, as well as compass, accelerometer, and digital I/O pins.

```sim
input.onButtonPressed(Button.A, () => {
    basic.showLeds(`
. . . . .
. # . # .
. . . . .
# . . . #
. # # # .`);
});
input.onGesture(Gesture.Shake, () => {
    basic.showLeds(`
. . . . .
. # . # .
. . . . .
. # # # .
# . . . #`);
});
``` 

To run a student's project in the web browser, KindScript compiles it into JavaScript, the scripting language built into all web browsers.

C++ and Touch Develop Libraries
The C++ micro:bit library, created at Lancaster University, provides access to the hardware functions of the micro:bit, as well as a set of helper functions (such as displaying a number/image/string on the LED screen). The Touch Develop micro:bit library mirrors the functions of the C++ library. When a Touch Develop script is compiled to C++, the calls to Touch Develop micro:bit functions are replaced with calls to the corresponding C++ functions.

Above, see the mapping from the Touch Develop "show number" function to its corresponding the C++ function.

## C++ Runtime

The C++ BBC micro:bit library, created at [Lancaster University](http://www.lancaster.ac.uk/), provides access to the hardware functions of the micro:bit, 
as well as a set of helper functions (such as displaying a number/image/string on the LED screen). 
The JavaScript micro:bit library mirrors the functions of the C++ library. 
When code is compiled to C++, the calls to JavaScript micro:bit functions are replaced with calls to the corresponding C++ functions.
