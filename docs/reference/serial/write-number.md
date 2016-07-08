# Serial Write Number

Write a number to the [serial](/device/serial) port.

```sig
serial.writeNumber(0);
```

### Parameters

* `number` is the [number](/reference/types/number) to write to the serial port

### Example

This program repeatedly writes a 10-digit number to the serial port.

```blocks
basic.forever(() => {
    serial.writeNumber(1234567890);
    basic.pause(5000);
});
```

### See also

[serial](/device/serial),
[serial write value](/reference/serial/write-value),
[serial write line](/reference/serial/write-line)
