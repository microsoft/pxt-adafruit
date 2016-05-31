# On Data Received

Registers code to run when a packet is received over ``radio``.

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

[receive number](/reference/radio/receive-number), [send number](/reference/radio/send-number), [set group](/reference/radio/set-group)

