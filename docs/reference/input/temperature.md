# Temperature

Get the ambient temperature (degree Celsius °C). The temperature is inferred from the the surface temperature of the various chips on the micro:bit.

```sig
input.temperature();
```

### Returns

* [Number](/microbit/reference/types/number) - temperature in degree Celsius °C.

### How does it work?

The BBC micro:bit does not have a dedicated temperature sensor. Instead, the temperature provided is actually the temperature of the silicon die on the main CPU. As the processor generally runs cold though (it is a high efficiency ARM core), the temperature is a good approximation of the ambient temperature... you might warm up if you give the processor a lot of work to do though, and don't [sleep](/microbit/reference/basic/pause)!

The temperature sensor has a high precision, but isn't trimmed for accuracy. In other words, it can sense changes in temperature very well, but there may be (and probably is) base line offset. i.e. it might return 20 degrees when it's actually 17, but it would return 21 when it is 18 etc.

### Example: micro:bit thermometer

The following example uses the `temperature` and the `show number` to display the room temperature.

```sig
basic.forever(() => {
    let temp = input.temperature()
    basic.showNumber(temp)
})
```

### Lessons

### See also

[compass-heading](/microbit/reference/input/compass-heading), [acceleration](/microbit/reference/input/acceleration)

