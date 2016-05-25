# Send String

Broadcasts a string data packet to other micro:bits connected via ``radio``.

## Important Security Consideration

The functions in the ``radio`` namespace allow the BBC micro:bit to communicate with other micro:bits.

This API does not contain any form of encryption, authentication or authorization. It's purpose is solely for use as a teaching aid to demonstrate how simple communications operates, and to provide a sandpit through which learning can take place.

For serious applications, BLE should be considered a substantially more secure alternative.

```sig
radio.sendString("Hello world!")
```

### Parameters

* msg - a string to be transmitted.

### Examples

Broadcasts the provided string to other micro:bits.

```blocks
input.onButtonPressed(Button.A, () => {
    radio.sendString("Mr. Watson, come here, I want to see you.")
})
```

### See also

[receive string](/reference/radio/receive-string), [on data received](/reference/radio/on-data-received)
