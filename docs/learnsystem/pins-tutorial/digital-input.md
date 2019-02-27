# Digital Input

Digital input is where a pin will detect the presence of a voltage level that is either "high" or "low". When you read a digital pin in your program, these voltage levels are given to you as just the [boolean](/types/boolean) values of ``true`` for high and ``false`` for low.

## Logic Levels

What the level of high or low is depends on where the microcontroller on the @boardname@ has set the voltage _threshold_ for each. This is somewhere near the supply voltage for high (the voltage at the **3.3V** pin) and near ground voltage for low (the voltage at **GND** pin, or **0V**).

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
  "imageUrl":"/static/cp/learn/pins-tutorial/pin-event-high.jpg"
}, {
  "name": "Input States",
  "description": "Learn about digital output.",
  "url":"/learnsystem/pins-tutorial/digital-input/input-states",
  "imageUrl":"/static/cp/learn/pins-tutorial/pin-event-high.jpg"
}, {
  "name": "Pin Events",
  "description": "Learn about analog input.",
  "url":"/learnsystem/pins-tutorial/digital-input/pin-events",
  "imageUrl":"/static/cp/learn/pins-tutorial/pin-event-high.jpg"
}]
```
