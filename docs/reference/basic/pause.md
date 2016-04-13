# Pause

Pause program execution for the specified number of milliseconds. This function is helpful when you need to slow down your program's execution.

```sig
basic.pause(400)
```

### Parameters

* ``ms`` - the number of milliseconds that you want to pause (100 = 1/10 second, 1000 milliseconds = 1 second)

### Example: diagonal line

The following example code turns on LED `0, 0` thru `4, 4`, pausing 500 milliseconds after each LED. Without `pause`, the code would run so fast that you wouldn't see each individual LED turning on.

```blocks
for (let i = 0; i < 5; i++) {
    led.plot(i, i)
    basic.pause(500)
}
```

### Lessons

[blink](/lessons/blink), [lucky 7](/lessons/lucky-7), [smiley](/lessons/smiley), [flashing heart](/lessons/flashing-heart)

### See also

[while](/js/while), [running time](/reference/input/running-time), [for](/reference/loops/for)

