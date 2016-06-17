```sim
basic.forever(() => {
  basic.showString("Hi!");
})
input.onButtonPressed(Button.A, () => {
    led.stopAnimation();
    basic.showLeds(`
. . . . .
. # . # .
. . . . .
# . . . #
. # # # .`);
});
input.onButtonPressed(Button.B, () => {
    led.stopAnimation();
    basic.showLeds(`
. # . # .
# . # . #
# . . . #
. # . # .
. . # . .`);
});
``` 
# About

The [BBC micro:bit](https://www.microbit.co.uk) is a [pocket-size computer](/device) with a 5x5 display of 25 LEDs, Bluetooth and sensors that can be programmed by anyone.
The BBC micro:bit was made possible by many [partners](https://www.microbit.co.uk/partners).

The micro:bit provides an easy and fun introduction to programming and making – switch on, program it to do something fun – wear it, customize it.
Just like Arduino, the micro:bit can be connected to and interact with sensors, displays, and other devices. 

## Hardware: The Device

Learn about about the [hardware components](/device) of the micro:bit to make the most of it!

## Programming: Blocks or JavaScript

The student can program the BBC micro:bit using [Blocks](/blocks) or [JavaScript](/javascript), via the [micro:bit APIs](/reference):

```blocks
basic.showString("Hi!");
```

## Compile and Flash: Your Program!

When a user has her code ready, she can connect her BBC micro:bit to a computer via a USB cable, so it appears as a mounted drive (named MICROBIT). 

Compilation to ARM thumb machine code from [Blocks](/blocks) or [JavaScript](/javascript) happens in the browser.

The student is prompted to save the ARM binary program to a file, which she then simply drags to the micro:bit mounted drive, 
which flashes the micro:bit device with the new program.

## Simulator: Test Your Code

Before a student compiles her code for the micro:bit, she can run it using the micro:bit simulator, all within the confines of a web browser. 
The simulator has support for the LED screen, buttons, as well as compass, accelerometer, and digital I/O pins.

## C++ Runtime

The [C++ BBC micro:bit runtime](http://lancaster-university.github.io/microbit-docs/), created at [Lancaster University](http://www.lancaster.ac.uk/), provides access to the hardware functions of the micro:bit, 
as well as a set of helper functions (such as displaying a number/image/string on the LED screen). 

The [micro:bit library](/reference) mirrors the functions of the C++ library. 
When code is compiled to ARM machine code, the calls to JavaScript micro:bit functions are replaced with calls to the corresponding C++ functions.

## Open Source

The editor for the BBC micro:bit is [open source](/open-source) on GitHub. Contributors are welcome!
