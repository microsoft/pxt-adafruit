# Analog input

An analog input pin can read a voltage level that ranges from the supply voltage of your board 3.3 v (**3.3V**) down to 0 v (**GND**). The value returned to your program from reading the pin is not the actual voltage value but a number that is between `0` and `1023`. This is because the microcontroller on the board is a digital system and must convert the analog signal at an input pin to a digital number. The value representing the input voltage that is returned is _relative_ to the actual voltage level present at the pin.

```block
let inputValue = pins.A3.analogRead()
```
## Analog to digital

The microcontroller on the @boardname@ makes a digital number from the signal at an input pin using an analog-to-digital converter (ADC). The ADC reads the input voltage and makes a digital number to represent that amount of voltage.

### Input values and sample rate

In the diagram below, the chart on the left shows the voltage on pin **A1** changing over a short period of time. It's increasing in as time goes by. The chart on the left shows how the ADC reads and records the input voltage. The values that are charted each time the input is read look like stair steps. This is because the ADC can't record and remember an infinite amount of readings, so it takes a snapshot of what the input at one moment over an interval of time. The recorded snapshot is called a _sample_ and the number of intervals per second is called the _sample rate_.

![Analog input signal levels](/static/cp/learn/pins-tutorial/analog-input/read-signal.jpg)

The ADC on your board has a certain sample rate and you can't read values from an analog pin any faster than that. If you graph the analog input you read for multiple samples, the resulting chart will show an approximation of what actual input would be if it was recorded with a sample interval of zero. But of course, that's impossible to do with digital electronics!

### Reference voltage

An ADC needs to know what the maximum voltage it will be reading so it can set the range of voltage it will map to a binary value. The maximum voltage used to set the input range on your board is 3.3 v. This maximum value is called the _reference_ voltage, or _Vref_.

### Resolution

The range of values in which the ADC can represent an analog input is called its _resolution_. This is determined by how may bits of a binary number is uses to record the measurment of the analog signal. With a 10 bit resolution like what your board has, there are `1024` possible values to record using a range of `0` to `1023`. If the Vref is set at `3.3` then each value of the binary conversion number represents another ``3.3 / 1024`` = `0.0032` volts. A value of `546` returned from ``||pins:analog read pin||`` means that ``546 * 3.3 / 1024`` = `1.76` volts was present at the pin input.

The following table shows how many values are available for some common ADC resolutions.

Resolution | Minimum | Maximum | Total Values
-|-|-|-
8 bits | 0 | 255 | 256
**10 bits** | **0** | **1023** | **1024**
12 bits | 0 | 4095 | 4096
16 bits | 0 | 65535| 65536

### Code model

If we could represent an ADC as code (with a resolution of 10 bits and a _Vref_ of 3.3), it would work like this:

```block
let pinVoltage = 0
let adc = Math.round(Math.map(pinVoltage, 0, 3.3, 0, 1023))
```

### Experiment: Simulate an Analog-to-Digital converter

---

Pretend that you've created a 3 bit analog-to-digital converter (ADC). This means that you can measure input values from `0` to `7` relative to the voltage reference (Vref) which is 3.3 v on your board. Generate a _sawtooth_ signal and read it as input to your 3 bit ADC. The sawtooth signal increases in voltage by `0.1` volts every `100` milliseconds until it reaches `3.3` volts. The signal then drops back to `0` and repeats.

**Setup**: Copy the following code into the editor.

```blocks
let sawtooth = 0
forever(function () {
    if (sawtooth >= 3.3) {
        sawtooth = 0
    } else {
        sawtooth += 0.1
    }
    console.logValue("saw", sawtooth)
    pause(100)
})
forever(function () {
    console.logValue("saw-sample", Math.round(Math.map(sawtooth, 0, 3.3, 0, 7)))
    pause(25)
})
```

**Test**: Run the code and switch to the data view to see the console output in the chart.

![Analog to digial simulation](/static/cp/learn/pins-tutorial/analog-input/adc-sim.jpg)

**Result**: The graph in the chart shows the **clock** value switching from `0` to `3.3` and back again at a regular interval. 

---



s where a pin will detect the presence of a voltage level that is either "high" or "low". When you read a digital pin in your program, these voltage levels are given to you as the [boolean](/types/boolean) values of ``true`` for high and ``false`` for low.

![Pins on edge of board](/static/cp/learn/pins-tutorial/digital-input/digital-input-header.jpg)

## Logic levels

When a pin input level is high or low is depends on where the microcontroller on the @boardname@ has set the voltage _threshold_ for each. This is somewhere near the supply voltage for high (the voltage at the **3.3V** pin) and near ground voltage for low (the voltage at **GND** pin, or **0V**). Also, when a digital input is for reading data, the input level is interpreted as a binary value of `1` for high and `0` for low. Multiple digital inputs are often combined in digital electronics to read larger values of binary numbers. Here's the relationship between input voltage, logic value, and binary value:

Voltage | Logic | Binary
-|-|-
0 v | false | 0
3.3 v | true | 1

## Experiments

There are several experiments to let you test out the concepts you learn in the digital input sections. You'll need a few things to in order to perform some of the experiments. 

* (3) [Alligator clip leads](https://www.adafruit.com/product/1008)
* [ON/OFF switch](https://www.adafruit.com/product/3221) or a standard household light switch - (optional)
* [Pushbutton switch](https://www.adafruit.com/product/3101) or a doorbell pushbutton - (optional)
* [Variable resistor](https://www.adafruit.com/product/562) - use you own [graphite resistor](/learnsystem/pins-tutorial/make-a-resistor)

## Sections

```codecard
[{
  "name": "Read a pin",
  "description": "Read a digital pin to get a logic value.",
  "url":"/learnsystem/pins-tutorial/digital-input/read-pin",
  "imageUrl":"/static/cp/learn/pins-tutorial/digital-input/read-pin-thumb.jpg"
}, {
  "name": "Input states",
  "description": "Understand what the default input levels are.",
  "url":"/learnsystem/pins-tutorial/digital-input/input-states",
  "imageUrl":"/static/cp/learn/pins-tutorial//digital-input/input-states-thumb.jpg"
}, {
  "name": "Pin events",
  "description": "Programs are notified when something happens at a pin.",
  "url":"/learnsystem/pins-tutorial/digital-input/pin-events",
  "imageUrl":"/static/cp/learn/pins-tutorial/digital-input/pin-events-thumb.jpg"
}]
```