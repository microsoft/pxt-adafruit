# Analog to digital

The microcontroller on the @boardname@ makes a digital number from the signal at an input pin using an analog-to-digital converter (ADC). The ADC reads the input voltage and makes a digital number to represent that amount of voltage.

## Input values and sample rate

In the diagram below, the chart on the left shows the voltage on pin **A1** changing over a short period of time. It's increasing in as time goes by. The chart on the left shows how the ADC reads and records the input voltage. The values that are charted each time the input is read look like stair steps. This is because the ADC can't record and remember an infinite amount of readings, so it takes a snapshot of the input at one moment during an interval of time. The recorded snapshot is called a _sample_ and the number of intervals per second is called the _sample rate_.

![Analog input signal levels](/static/cp/learn/pins-tutorial/analog-input/read-signal.jpg)

The ADC on your board has a certain sample rate and you can't read values from an analog pin any faster than that. If you graph the analog input you read for multiple samples, the resulting chart will show an approximation of what actual input is. If sample interval was zero, the two graphs would be the same. A zero sample interval is quite impossible though using digital electronics!

## Reference voltage #reference-voltage

An ADC needs to know what the maximum voltage it will be reading is so it can set the range of voltage it will map to a binary value. The maximum voltage used to set the input range on your board is 3.3 v. This maximum value is called the _reference_ voltage, or _Vref_.

## Resolution

The range of values in which the ADC can represent an analog input is called its _resolution_. This is determined by how may bits of a binary number is used to record the measurement of the analog signal. With a 10 bit resolution, like what your board has, there are `1024` possible values to record using a range of `0` to `1023`. If the _Vref_ is set at `3.3` then each value of the binary conversion number represents another ``3.3 / 1024`` = `0.0032` volts. A value of `546` returned from ``||pins:analog read pin||`` means that ``546 * 3.3 / 1024`` = `1.76` volts was present at the pin input.

The following table shows how many values are available for some of the common ADC resolutions.

Resolution | Minimum | Maximum | Total Values
-|-|-|-
8 bits | 0 | 255 | 256
**10 bits** | **0** | **1023** | **1024**
12 bits | 0 | 4095 | 4096
16 bits | 0 | 65535| 65536

## Code model

If we could represent an ADC as code (with a resolution of 10 bits and a _Vref_ of 3.3), it would work like this:

```block
let pinVoltage = 0
let adc = Math.round(Math.map(pinVoltage, 0, 3.3, 0, 1023))
```

## Experiment: Simulate an Analog-to-Digital converter

---

Pretend that you've created a 3 bit analog-to-digital converter (ADC). This means that you can measure input values from `0` to `7` relative to the voltage reference (_Vref_) which is 3.3 v on your board. Generate a _sawtooth_ signal and read it as input to your 3 bit ADC. The sawtooth signal increases in voltage by `0.1` volts every `100` milliseconds until it reaches `3.3` volts. The signal then drops back to `0` and repeats.

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

**Result**: The first graph in the chart shows a smooth sawtooth input signal. The second graph plots only 1 of 8 values for any single input sample from the first chart. This is because the simulated ADC only has a 3 bit resolution which gives it a range of `0` - `7`.
