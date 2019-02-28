# Digital Input

Digital input is where a pin will detect the presence of a voltage level that is either "high" or "low". When you read a digital pin in your program, these voltage levels are given to you as the [boolean](/types/boolean) values of ``true`` for high and ``false`` for low.

![Pins on edge of board](/static/cp/learn/pins-tutorial/digital-input/digital-input-header.jpg)

## Logic Level

What the level of high or low is depends on where the microcontroller on the @boardname@ has set the voltage _threshold_ for each. This is somewhere near the supply voltage for high (the voltage at the **3.3V** pin) and near ground voltage for low (the voltage at **GND** pin, or **0V**). Also, a digital input is interpreted as a binary value of `1` for high and `0` for low. Multiple digital inputs are often combined in digital electronics to read larger values of binary numbers. Here's the relationship between input voltage, logic value, and binary value:

Voltage | Logic | Binary
-|-|-
0 v | false | 0
3.3 v | true | 1

## Materials

You'll need a few things to perform the mini experiments for the following sections. 

* (3) [Alligator clip leads](https://www.adafruit.com/product/1008)
* [ON/OFF switch](https://www.adafruit.com/product/3221) (optional)
* [Pushbutton switch](https://www.adafruit.com/product/3101) (optional)
* [Variable resistor](https://www.adafruit.com/product/562) - use you own [graphite resistor](/learnsystem/pins-tutorial/make-a-resistor)

## Topics

```codecard
[{
  "name": "Read a Pin",
  "description": "Learn about digital inputs.",
  "url":"/learnsystem/pins-tutorial/digital-input/read-pin",
  "imageUrl":"/static/cp/learn/pins-tutorial/digital-input/read-pin-thumb.jpg"
}, {
  "name": "Input States",
  "description": "Learn about digital output.",
  "url":"/learnsystem/pins-tutorial/digital-input/input-states",
  "imageUrl":"/static/cp/learn/pins-tutorial//digital-input/input-states-thumb.jpg"
}, {
  "name": "Pin Events",
  "description": "Learn about analog input.",
  "url":"/learnsystem/pins-tutorial/digital-input/pin-events",
  "imageUrl":"/static/cp/learn/pins-tutorial/digital-input/pin-events-thumb.jpg"
}]
```
