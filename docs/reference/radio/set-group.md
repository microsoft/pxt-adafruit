# Set Group

Sets the group id for ``radio`` communications. A micro:bit can only listen to one group ID at any time.

Unless specified, the group id is automatically inferred from the script source. Every script with the same exact source code with start with the same group id.

## Important Security Consideration

The functions in the ``radio`` namespace allow the BBC micro:bit to communicate with other micro:bits.

This API does not contain any form of encryption, authentication or authorization. It's purpose is solely for use as a teaching aid to demonstrate how simple communications operates, and to provide a sandpit through which learning can take place.

For serious applications, BLE should be considered a substantially more secure alternative.

```sig
radio.setGroup(1)
```

### Parameters

* ``id`` -- a [number](/microbit/number) between ``0`` and ``255``.

### Example

Sets the group to 128.

```blocks
radio.setGroup(128)
```

### See also

[receive number](/microbit/radio/receive-number), [send number](/microbit/radio/send-number), [on data received](/microbit/radio/on-data-received)

