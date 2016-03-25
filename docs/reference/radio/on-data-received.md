# On Data Received

Registers code to run when a packet is received over ``radio``.

## Important Security Consideration

The functions in the ``radio`` namespace allow the BBC micro:bit to communicate with other micro:bits.

This API does not contain any form of encryption, authentication or authorization. It's purpose is solely for use as a teaching aid to demonstrate how simple communications operates, and to provide a sandpit through which learning can take place.

For serious applications, BLE should be considered a substantially more secure alternative.

```sig
radio.onDataReceived(() => {})
```

### Parameters

* body - is an action

### Example

```blocks
basic.forever(() => {
    radio.sendNumber(input.acceleration(Dimension.X));
})
radio.onDataReceived(() => {
    led.plotBarGraph(radio.receiveNumber(), 1023);
})
```

### See also

[receive number](/microbit/radio/receive-number), [send number](/microbit/radio/send-number), [set group](/microbit/reference/radio/set-group)

