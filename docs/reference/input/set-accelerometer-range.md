# Set Accelerometer Range

Set up the part of the micro:bit that measures
[acceleration](/reference/input/acceleration) (how much the microbit
is speeding up or slowing down), in case you need to measure high
or low acceleration.

### Parameters

* the biggest number of gravities of acceleration you will be
  measuring (either 1G, 2G, 4G, or 8G).  Any bigger numbers will be
  ignored by your micro:bit, both when you are picking a number of
  gravities, and when you are measuring acceleration.

### Example

This program says the highest acceleration that your micro:bit
will measure is 4G. Then it measures acceleration from side to side
until you stop the program.

```blocks
input.setAccelerometerRange(AcceleratorRange.FourG);
basic.forever(() => {
    basic.showNumber(input.acceleration(Dimension.X));
});
```

#### ~hint

This program does not work in the simulator, only in a micro:bit.

#### ~

### See Also

[compass heading](/reference/input/compass-heading),
[light level](/reference/input/light-level)
