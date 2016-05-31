# Receive Number

Reads the next radio packet if any and returns the first number.

### Return value

* the first number [number](/reference/types/number) of the packet if any. `0` otherwise.

### Examples

Read the number broadcasted by other micro:bits.

```blocks
radio.onDataReceived(() => {
    led.plotBarGraph(radio.receiveNumber(), 1023);
})
```

### See also

[receive number](/reference/input/receive-number), [on data received](/reference/radio/on-data-received)

