# love meter activity

create a love meter with the BBC micro:bit #docs

### ~avatar avatar

### @video td/videos/love-meter-0

Welcome! This tutorial will help you create a love meter with the BBC micro:bit. Let's get started!

### ~

To create a new script, go to the [Create Code](/microbit/create-code) page and tap *New Project* under **Touch Develop**.

Begin by registering an event with `input->on pin pressed(PO)` to know when someone is holding pin ``P0`` and pin ``Gnd``.

```
input.onPinPressed(TouchPin.P0, () => {
})
```

We are going to create a meter that displays a random number from 0 to 10. We use ``11`` as `math->random(n)` returns a number between ``0`` and ``n-1``.

```
input.onPinPressed(TouchPin.P0, () => {
    let x = Math.random(11)
})
```

Finally, let's show that number on the micro:bit.

```
input.onPinPressed(TouchPin.P0, () => {
    let x_ = Math.random(11)
    basic.showNumber(x_, 150)
})
```

### ~avatar avatar

Excellent, you're ready to continue with the [challenges](/microbit/lessons/love-meter/challenges)!

### ~

