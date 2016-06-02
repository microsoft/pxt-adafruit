# On Data Received

Run part of a program when the micro:bit receives a
[number](/reference/types/number) or [string](/reference/types/string) over ``radio``.

### Parameters

* **body** is the part of the program to run when the micro:bit receives information over ``radio``.

### Example

This program never stops.  It keeps sending numbers that says how
fast the micro:bit is slowing down or speeding up.  It also receives
numbers that say how fast nearby micro:bits are going. It
shows these numbers as a [bar graph](/reference/led/plot-bar-graph).

```blocks
basic.forever(() => {
    radio.sendNumber(input.acceleration(Dimension.X));
})
radio.onDataReceived(() => {
    led.plotBarGraph(radio.receiveNumber(), 1023);
})
```

### See also

[receive number](/reference/radio/receive-number),
[send number](/reference/radio/send-number), [set group](/reference/radio/set-group)

