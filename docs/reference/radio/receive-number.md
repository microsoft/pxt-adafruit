# Receive Number

Reads the next radio packet if any and returns the first number.

## Important Security Consideration

The functions in the ``radio`` namespace allow the BBC micro:bit to communicate with other micro:bits.

This API does not contain any form of encryption, authentication or authorization. It's purpose is solely for use as a teaching aid to demonstrate how simple communications operates, and to provide a sandpit through which learning can take place.

For serious applications, BLE should be considered a substantially more secure alternative.

```sig
radio.receiveNumber()
```

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

[receive number](/input/receive-number), [on data received](/reference/radio/on-data-received)

