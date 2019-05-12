# Digital output

Digital output happens on a pin when the an output voltage is set on it that is either at "high" or "low" level. When you write to a digital pin in your program, these voltage levels written by setting [boolean](/types/boolean) values of ``true`` for high and ``false`` for low.

![Pins on edge of board](/static/cp/learn/pins-tutorial/digital-output/digital-output-header.jpg)

## Logic levels

When a pin output level is high or low is depends on how the microcontroller on the @boardname@ sets the voltage level for each. This is somewhere near the supply voltage for high (the voltage at the **3.3V** pin) and near ground voltage for low (the voltage at **GND** pin, or **0V**). Also, when a digital output is for writing data, the output level means that a binary value of `1` is high and `0` is low. Multiple digital outputs are often combined in digital electronics to write larger values of binary numbers. Here's the relationship between output voltage, logic value, and binary value:

Voltage | Logic | Binary
-|-|-
0 v | false | 0
3.3 v | true | 1

## Experiments

There are several experiments to let you test out the concepts you learn in the digital output sections. You'll need a few things to in order to perform some of the experiments. 

* (4) [Alligator clip leads](https://www.adafruit.com/product/1008)
* [Red LED](https://www.adafruit.com/product/297)
* [Output resistor](https://www.adafruit.com/product/2892) - use you own [graphite resistor](/learnsystem/pins-tutorial/devices/make-a-resistor#output-resistor)

## Sections

```codecard
[{
  "name": "On and off signalling",
  "description": "Send out an on and off signal from a pin.",
  "url":"/learnsystem/pins-tutorial/digital-output/on-off-signal",
  "imageUrl":"/static/cp/learn/pins-tutorial/digital-output/on-off-thumb.jpg"
}, {
  "name": "Pulses and triggers",
  "description": "Make notification signals and trigger pin events.",
  "url":"/learnsystem/pins-tutorial/digital-output/pulses-triggers",
  "imageUrl":"/static/cp/learn/pins-tutorial//digital-output/pulses-triggers-thumb.jpg"
}, {
  "name": "Digital data",
  "description": "Send and receive binary numbers on the pins.",
  "url":"/learnsystem/pins-tutorial/digital-output/digital-data",
  "imageUrl":"/static/cp/learn/pins-tutorial/digital-output/digital-data-thumb.jpg"
}]
```
