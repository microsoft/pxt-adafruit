# Send Number

Broadcasts a number data packet to other micro:bits connected via ``radio``.

## Important Security Consideration

The functions in the ``radio`` namespace allow the BBC micro:bit to communicate with other micro:bits.

This API does not contain any form of encryption, authentication or authorization. It's purpose is solely for use as a teaching aid to demonstrate how simple communications operates, and to provide a sandpit through which learning can take place.

For serious applications, BLE should be considered a substantially more secure alternative.

```sig
radio.sendNumber(0)
```

### Parameters

* packet - a number to be transmitted.

### Examples

Broadcasts the value of ``acceleration`` x to other micro:bits.

```blocks
input.onButtonPressed(Button.A, () => {
    radio.sendNumber(input.acceleration(Dimension.X))
})
```

### See also

[receive number](/reference/radio/receive-number), [on data received](/reference/radio/on-data-received)

