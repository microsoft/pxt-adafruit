# Compass Heading

Get the compass heading of the micro:bit in degrees. Your micro:bit has a built-in **magnetometer** so it can your direction with respect to the North Magnetic Pole.

```sig
input.compassHeading();
```

### Returns

* [Number](/microbit/reference/types/number) - the heading in degrees (0 to 360 degrees). If the compass is calibrating, it returns ``-1003``.

## Simulator

Calibration does not work on the simulator.

### Example

The following code gets the compass heading and stores it in the `degrees` variable:

```blocks
let degrees = input.compassHeading()
```

### ~hint 

When running code with this function in a web browser, click and drag the on-screen compass needle to change heading.

### ~

### Example: compass

The following example gets the `compass heading` and then displays a letter depending on the value of `degrees`: N for north, E for East, S for South, and W for West.

```blocks
basic.forever(() => {
    let degrees = input.compassHeading()
    if (degrees < 45)
        basic.showString("N")
    else if (degrees < 135)
        basic.showString("E")
    else if (degrees < 225)
        basic.showString("S")
    else basic.showString("W")
})
```

### Calibration

On the first use of the compass, the **calibration** procedure will automatically start. The user must draw a circle with the device until it is fully calibrated.

An enclosure made from metal, or using in proximity of metal objects, might affect the accuracy of the reading and calibration.

During calibration, ``compass heading`` returns ``-1003``.

### Lessons

[compass](/microbit/lessons/compass)

### See also

[acceleration](/microbit/reference/input/acceleration)

