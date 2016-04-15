# Write Line

Writes a string and a new line character (`\r\n`) to [serial](/device/serial).

```sig
serial.writeLine("");
```

### Example: streaming data

The following example constantly checks the [compass heading](/reference/input/compass-heading) and sends the direction to serial.

```blocks
basic.forever(() => {
    let heading = input.compassHeading()
    if (heading < 45) {
        serial.writeLine("N");
    } else if (heading < 135) {
        serial.writeLine("E");
    }
    else if (heading < 225) {
        serial.writeLine("S");
    }
    else {
        serial.writeLine("W");
    }
})
```

### See also

[serial](/device/serial), [write value](/reference/serial/write-value)

