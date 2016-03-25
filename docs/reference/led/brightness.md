# Brightness

Set the brightness of the [LED screen](/microbit/device/screen).

```sig
led.brightness();
```

### Returns

* [Number](/microbit/reference/types/number) - returns the LCD screen brightness as a number from 0 to 255. A return value of 255 means the screen brightness is at 100% and 127 is about 50% brightness.

### Example: maximum brightness

If the screen brightness is < 100%, the following code sets the brightness to 100% (255):

```blocks
if (led.brightness() < 255) {
    led.setBrightness(255)
}
```

### See also

[set brightness](/microbit/reference/led/set-brightness), [fade in](/microbit/reference/led/fade-in), [fade out](/microbit/reference/led/fade-out)

