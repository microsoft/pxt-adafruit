# Send Number

Broadcast a (name,number) pair to other micro:bits connected via ``radio``.

### Parameters

* name - a string to send
* num - a number to send.

### Simulator

This function only works on the micro:bit, not in browsers.

### Example: Broadcasting acceleration

This example broadcasts the value of your micro:bit's ``acceleration`` in the `x` direction 
(left and right) to other micro:bits.
This kind of program might be useful in a model car or model rocket.

```blocks
input.onButtonPressed(Button.A, () => {
    radio.sendValue("acc",input.acceleration(Dimension.X))
})
```

### See also

[receive number](/reference/radio/receive-number), [on data received](/reference/radio/on-data-received)

