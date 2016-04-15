# Write Value

Writes name/value pair and a new line character (`\r\n`) to [serial](/device/serial).

```sig
serial.writeValue("x", 0);
```

### Example: streaming data

The sample below sends the temperature and light level every 10 seconds.

```blocks
basic.forever(() => {
    serial.writeValue("temp", input.temperature())
    serial.writeValue("light", input.lightLevel())
    basic.pause(10000);
})
```

### Plot bar graph does serial!

If you use the `led.plotBarGraph` function, it automatically writes the value to the serial as well.

```blocks
basic.forever(() => {
    led.plotBarGraph(input.lightLevel(), 255)
    basic.pause(10000);
})
```


### See also

[serial](/device/serial), [write line](/reference/serial/write-line)

