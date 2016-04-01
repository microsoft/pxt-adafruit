# bop it quiz answers

a game where you have to keep up with the commands.

## Name

## Directions

Use this activity document to guide your work in the [bop it tutorial](/microbit/lessons/bop-it/tutorial).

Answer the questions while completing the tutorial. Pay attention to the dialogues!

## 1. Write the code that will store the global variable named 'action' and returns a random number between 0 and 2

<br/>

```
action = Math.random(3)
```

## 2. Write the code that will display the string, "PUSH A" if the global variable called 'action' is equal to 0

<br />

```
if (action == 0) {
    basic.showString("PUSH A", 150)
}
```

## 3. Write the code that increments the score if button A is pressed when the global variable called 'action' is equal to 1

<br />

```
input.onButtonPressed(Button.A, () => {
    if (action == 0) {
        game.addScore(1)
    }
})
```

## 4. Write the code that will display the string "LOGO DOWN" if the global variable called 'action' is equal to 1

<br />

```
if (action == 1) {
    basic.showString("LOGO DOWN", 150)
}
```

## 5. Write the code that increments the score if the BBC micro:bit logo is tilted down when the global variable called 'action' is equal to 1

<br />

```
input.onLogoDown(() => {
    if (action == 1) {
        game.addScore(1)
    }
})
```

## 6. Write the code that will display the string "SHAKE" if the global variable called 'action' is equal to 2

<br />

```
if (action == 2) {
    basic.showString("SHAKE", 150)
}
```

## 7. Write the code that increments the score if the BBC micro:bit is shaken when the global variable called 'action' is equal to 2

<br/>

```
input.onLogoDown(() => {
    if (action == 1) {
        game.addScore(1)
    }
})
```

