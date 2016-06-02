# Set Transmit Power

Sets the transmitter power for ``radio`` communications.    
The power can be set to a value between 0 (-30dbm) and 7 (+4dbm).

## Range
   
At power level 7, in an open area without significant interference (coming from WiFi networks or other devices operating on the 2.4 GHz range), you can get a **range of over 70m**.   
 
Indoors (or with additional interference), range will be significantly reduced.

## Important Security Consideration

The functions in the ``radio`` namespace allow the BBC micro:bit to communicate with other micro:bits.

This API does not contain any form of encryption, authentication or authorization. It's purpose is solely for use as a teaching aid to demonstrate how simple communications operates, and to provide a sandpit through which learning can take place.

For serious applications, BLE should be considered a substantially more secure alternative.

```sig
radio.setTransmitPower(1)
```

### Parameters

* ``power`` -- a [number](/reference/types/number) between ``0`` and ``7``.

### Example

Sets the transmitter power to full power at 7.

```blocks
radio.setTransmitPower(7)
```

### See also

[receive number](/reference/radio/receive-number), [send number](/reference/radio/send-number), [on data received](/reference/radio/on-data-received)
