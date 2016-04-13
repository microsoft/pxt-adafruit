# Set Brightness

Sets the brightness of the [LED screen](/device/screen).

```sig
led.setBrightness(121)
```

### Parameters

* value : [Number](/reference/types/number) - the brightness of the LED screen expressed as a number between 0 and 255

### Example: change brightness

The following example sets the screen brightness to 100% (255), turns on LED `2, 2`, waits for a second and then sets the screen brightness to 50% (127):

```blocks
led.setBrightness(255)
led.plot(2, 2)
basic.pause(1000)
led.setBrightness(127)
```

### Lessons

[night light](/lessons/night-light)

### See also

[brightness](/reference/led/brightness), [fade in](/reference/led/fade-in), [fade out](/reference/led/fade-out), [LED screen](/device/screen)

