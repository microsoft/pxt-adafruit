# Analog Pitch

Emits a Pulse With Modulation (PWM) signal to the current pitch [pin](/microbit/device/pins). Use [analog set pitch pin](/microbit/reference/pins/analog-set-pitch-pin) to set the pitch pin.

```sig
pins.analogPitch(440, 300)
```

### Parameters

* `frequency` : [Number](/microbit/reference/types/number)
* `ms`: [Number](/microbit/reference/types/number)

### Example

```
pins.analogSetPitchPin("P0")
let frequency1 = 440
let duration = 1000
pins.analogPitch(frequency1, duration)
```

### Some common notes

* 440 = A4 on piano
* see [piano key frequencies ](https://en.wikipedia.org/wiki/Piano_key_frequencies) for more information

### See also

[micro:bit pins](/microbit/device/pins), [analog set period](/microbit/reference/pins/analog-set-period), [analog set pitch pin](/microbit/reference/pins/analog-set-pitch-pin)

