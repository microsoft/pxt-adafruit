# Send Number

Broadcasts a number data packet to other micro:bits connected via ``radio``.

### Parameters

* packet - a number to be transmitted.

### Examples

Broadcasts the value of ``acceleration`` x to other micro:bits.

```blocks
input.onButtonPressed(Button.A, () => {
    radio.sendNumber(input.acceleration(Dimension.X))
})
```

### Light level sender

This example broadcasts the level of the light around it:

```blocks
radio.setGroup(99)
basic.forever(() => {
    let level = input.lightLevel()
    radio.sendNumber(level)
})
```

This example shows the light level from the sender (above):

```blocks
radio.setGroup(99)
basic.forever(() => {
    let level = radio.receiveNumber()
    basic.showNumber(level)
})
```

### Mailbot

This example takes the signal from the light level sender (above)
and shows a text string if the light level becomes much brighter.
You can put the light level sender in your mailbox and it will
tell you when someone opens the box. You can try this with a normal
box too, like a present.

```blocks
radio.setGroup(99)
let max = 0
basic.forever(() => {
    let level = radio.receiveNumber()
    if (level > max) {
        max = level
    }
    if (max > 10) {
        basic.showString("ALERT")
    }
})
```

### See also

[receive number](/reference/radio/receive-number), [on data received](/reference/radio/on-data-received)

