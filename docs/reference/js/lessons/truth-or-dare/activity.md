# truth or dare activity

a multi-player game that forces each player to reveal a secret or something funny. #docs

To create a new script, go to the [Create Code](/create-code) page and tap *New Project* under **Touch Develop**.

Begin by plotting an "up-arrow" image, which will point to someone.

```
basic.showLeds(`
. . # . .
. # # # .
# # # # #
. . # . .
. . # . .
`, 400)
```

* Run your program and look at the arrow!

Now let's create a condition to know when button `A` is pressed so that we can display "truth" or "dare" on the BBC micro:bit.

```
basic.showLeds(`
. . # . .
. # # # .
# # # # #
. . # . .
. . # . .
`, 400)
input.onButtonPressed(Button.A, () => {
})
```

We want the BBC micro:bit to randomly choose whether to display "truth" or display "dare". We can use accomplish this by using `math->random(2)`.

```
basic.showLeds(`
. . # . .
. # # # .
# # # # #
. . # . .
. . # . .
`, 400)
input.onButtonPressed(Button.A, () => {
    let random = Math.random(2)
})
```

Now let's display the appropriate message for each scenario of `random`.

```
basic.showLeds(`
. . # . .
. # # # .
# # # # #
. . # . .
. . # . .
`, 400)
input.onButtonPressed(Button.A, () => {
    let random1 = Math.random(2)
    if (random1 == 0) {
        basic.showString("TRUTH", 150)
    } else {
        basic.showString("DARE", 150)
    }
})
```

* Run your program: Press button A!

Notice how the arrow didn't display again after pressing button `A`. Let's add a line of code that displays the arrow again.

```
basic.showLeds(`
. . # . .
. # # # .
# # # # #
. . # . .
. . # . .
`, 400)
input.onButtonPressed(Button.A, () => {
    let random2 = Math.random(2)
    if (random2 == 0) {
        basic.showString("TRUTH", 150)
    } else {
        basic.showString("DARE", 150)
    }
    basic.showLeds(`
. . # . .
. # # # .
# # # # #
. . # . .
. . # . .
`, 400)
})
```

* Run your program: Press button A!

### ~avatar avatar

Excellent, you're ready to continue with the [challenges](/lessons/truth-or-dare/challenges)!

### ~

