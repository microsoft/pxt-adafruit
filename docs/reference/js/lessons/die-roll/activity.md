# die roll activity

Create a die on the BBC micro:bit 

To create a new script, go to the [Create Code](/microbit/create-code) page and tap *New Project* under **KindScript**.

Let's create a condition for when the BBC micro:bit is shaken.

```
input.onGesture(Gesture.Shake, () => {
})
```

We need to show a random value from 1 to 6 on our die. So let's make a local variable called **roll**.

```
input.onGesture(Gesture.Shake, () => {
    let roll = Math.random(6)
})
```

We need a condition for if **roll** is 5. We will show a `6` if **roll** is 5 because **roll** has a range from 0 to 5. We can use `Show LEDs` to display the side of a die that shows 6.

```
input.onGesture(Gesture.Shake, () => {
    let roll1 = Math.random(6)
    if (roll1 == 5) {
        basic.showLeds(`
. # . # .
. . . . .
. # . # .
. . . . .
. # . # .
`, 400)
    }
})
```

Let's use an `else if` condition for if **roll** is 4. If **roll** is 4 we can show 5 dots on the die.

```
input.onGesture(Gesture.Shake, () => {
    let roll2 = Math.random(6)
    if (roll2 == 5) {
        basic.showLeds(`
. # . # .
. . . . .
. # . # .
. . . . .
. # . # .
`, 400)
    } else if (roll2 == 4) {
        basic.showLeds(`
. . . . .
. # . # .
. . # . .
. # . # .
. . . . .
`, 400)
    }
})
```

Now we need to repeat the same steps for if **roll** is 3. If **roll** is 3 we will show `4` on the die. Let's also repeat these steps to show the 3, 2, and 1 on the die. We are almost done with our die!

```
input.onGesture(Gesture.Shake, () => {
    let roll3 = Math.random(6)
    if (roll3 == 5) {
        basic.showLeds(`
. # . # .
. . . . .
. # . # .
. . . . .
. # . # .
`, 400)
    } else if (roll3 == 4) {
        basic.showLeds(`
. . . . .
. # . # .
. . # . .
. # . # .
. . . . .
`, 400)
    }
    else if (roll3 == 3) {
        basic.showLeds(`
. . . . .
. # . # .
. . . . .
. # . # .
. . . . .
`, 400)
    }
    else if (roll3 == 2) {
        basic.showLeds(`
# . . . .
. . . . .
. . # . .
. . . . .
. . . . #
`, 400)
    }
    else if (roll3 == 1) {
        basic.showLeds(`
. . . . .
. # . . .
. . . . .
. . . # .
. . . . .
`, 400)
    }
    else {
        basic.showLeds(`
. . . . .
. . . . .
. . # . .
. . . . .
. . . . .
`, 400)
    }
})
```

### ~avatar avatar

Excellent, you're ready to continue with the [challenges](/microbit/lessons/die-roll/challenges)!

### ~

