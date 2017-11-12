# Beat Visualizer

Use the ``A`` button on your @boardname@ to follow a beat.

```blocks
let item = 0
input.buttonA.onEvent(ButtonEvent.Click, () => {
    light.graph(
    item,
    20
    )
    item = 0
})
loops.forever(() => {
    item += 1
    loops.pause(37)
})
```