# Set Brightness

Sets the brightness of the [LED screen](/microbit/device/screen).

```sig
led.setBrightness(121)
```

### Parameters

* value : [Number](/microbit/reference/types/number) - the brightness of the LED screen expressed as a number between 0 and 255

### Example: change brightness

The following example sets the screen brightness to 100% (255), turns on LED `2, 2`, waits for a second and then sets the screen brightness to 50% (127):

```blocks
led.setBrightness(255)
led.plot(2, 2)
basic.pause(1000)
led.setBrightness(127)
```

### Lessons

[night light](/microbit/lessons/night-light)

### See also

[brightness](/microbit/reference/led/brightness), [fade in](/microbit/reference/led/fade-in), [fade out](/microbit/reference/led/fade-out), [LED screen](/microbit/device/screen)

