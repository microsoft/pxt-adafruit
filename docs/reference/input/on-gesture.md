# On Gesture

Start an [event handler](/reference/event-handler) (part of the
program that will run when something happens) This handler works when
you do a **gesture** (like shake, tilt, or drop the micro:bit).

```sig
input.onGesture(Gesture.Shake,() => {
})
```

## Example: random number

This program shows a number from `0` to `9` when you shake the micro:bit.

```blocks
input.onGesture(Gesture.Shake,() => {
    let x = Math.random(10)
    basic.showNumber(x, 100)
})
```

