# the hat game quiz answers

The all famous Hat Game -- one of 3 hats has the ball, which is revealed at the beginning. The hats then swap with each other. You goal is to chose the hat with the ball after the hats have finished swapping. #LED #number #math #functions #return #docs

## Name

## Directions

Use this activity document to guide your work in the [the hat game tutorial](/microbit/lessons/the-hat-game/tutorial)

Answer the questions while completing the tutorial. Pay attention to the dialogues!

## 1. What is the name of the first function you created? What does it do?

<br/>

Initialize game() is the name of the first function. It helps set up the game state.

## 2. Write a for loop that plots the points (0, 2), (2, 2), and (4, 2).

<br/>

```
for (let i = 0; i < 3; i++) {
    led.plot(i * 2, 2)
}
```

## 3. How can you increase the difficulty of the game?

<br/>

Decrease the swap speed value. This will reduce the pause between each frame, and will thus make the game run faster.

## 4. Consider the following code

```
cupSelect = "LMR"
index = -1
```

Write the code that displays the next letter of the string in "cup select" when button A is pressed.

<br/>

<br/>

```
input.onButtonPressed("A", () => {
    index = index + 1
    if (index > 2) {
        index = 0
    }
    basic.showString(cupSelect[index], 150)
})
```

## 5. Write the line of code that shows the swapping animation of two hats swapping if hat 1 = 0 and hat 2 = 2.

<br/>

```
basic.showAnimation(`
. . . . . . . . . . # . . . . . # . . . . . # . . . . . # . . . . . # . . . . . . . . . .
. . . . . # . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . # . . . . .
# . # . # . . # . . . . # . . . . # . . . . # . . . . # . . . . # . . . . # . . # . # . #
. . . . . . . . . # . . . . . . . . . . . . . . . . . . . . . . . . . # . . . . . . . . .
. . . . . . . . . . . . . . # . . . # . . . # . . . # . . . # . . . . . . . . . . . . . .
`, 400)
```

## 6. Consider the following code

```
let not = Math.random(3)
```

Given the hat we are not going to swap, how can we calculate the other two hats that we are going to swap? Use these two values to call "swap hats()" with a swap speed of 50.

<br/>

```
swapHats(math.mod(not + 1, 3), math.mod(not + 2, 3), 50)
```

<br/>

