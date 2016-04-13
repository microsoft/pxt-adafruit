# spinner activity

create an arrow that randomly points to a player. #docs

To create a new script, go to the [Create Code](/create-code) page and tap *New Project* under **Touch Develop**.

Let's begin by adding an `input->on shake` condition to know when the BBC micro:bit is shaken.

```
input.onGesture(Gesture.Shake, () => {
})
```

Now let's randomly generate a number from 0 to 3 so that we can randomly display an arrow in a given direction.

```
input.onGesture(Gesture.Shake, () => {
    let randomArrow = Math.random(4)
})
```

Now let's handle each of the cases by displaying the appropriate arrow. (Let's display an up arrow if `random arrow` is 0.

```
input.onGesture(Gesture.Shake, () => {
    let randomArrow1 = Math.random(4)
    if (randomArrow1 == 0) {
        basic.showLeds(`
. . # . .
. # # # .
# # # # #
. . # . .
. . # . .
`, 400)
    }
})
```

Now let's handle the rest of the cases for `random arrow`.

```
input.onGesture(Gesture.Shake, () => {
    let randomArrow2 = Math.random(4)
    if (randomArrow2 == 0) {
        basic.showLeds(`
. . # . .
. # # # .
# # # # #
. . # . .
. . # . .
`, 400)
    } else if (randomArrow2 == 1) {
        basic.showLeds(`
. . # . .
. . # . .
# # # # #
. # # # .
. . # . .
`, 400)
    }
    else if (randomArrow2 == 2) {
        basic.showLeds(`
. . # . .
. . # # .
# # # # #
. . # # .
. . # . .
`, 400)
    }
    else if (randomArrow2 == 3) {
        basic.showLeds(`
. . # . .
. # # . .
# # # # #
. # # . .
. . # . .
`, 400)
    }
})
```

### ~avatar avatar

Excellent, you're ready to continue with the [challenges](/lessons/spinner/challenges)!

### ~

