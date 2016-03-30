# line of fire quiz answers

create a game that relies on precise instincts and timing reflexes #LED #number #math #acceleration #docs

## Name

## Directions

Use this activity document to guide your work in the [line of fire tutorial](/microbit/lessons/line-of-fire/tutorial)

Answer the questions while completing the tutorial. Pay attention to the dialogues!

## 1. Write the names of the two Global Variable used to store the mode of the game. Which of these variables is set to true when we are displaying the score?

<br/>

```
dotRunning = true
displayingStats = false
```

`displaying stats` is set to `true` when we are displaying the score.

## 2. Write the name of the Global Variable that represents the velocity and assign it to its initial value. Next, write the name of the Global Variable that represents the position of the dot and assign it to its initial value.

<br/>

```
dotX = 2
dotXVelocity = 1
```

## 3. Write the name of the two variables that keep track of the score, and assign them to their initial values.

<br/>

```
wins = 0
losses = 0
```

## 4. Write the For Loop that will plot the 'line of fire'.

<br/>

```
for (let i = 0; i < 5; i++) {
    led.plot(2, i)
}
```

## 5. If the dot is running, write the 'nested If statements' that will see when to change the direction by flipping the sign of the velocity. This occurs if the dot is on the edge of the board.

<br/>

**Questions 6-8 concern with moving the dot.**

## 6. Write the code to unplot the dot's current position. NOTE- if dotX was originally 2, then we must plot instead of unplot the dot's original position.

<br/>

Solution 1:

```
if (dotX == 2) {
    led.plot(dotX, 2)
} else {
    led.unplot(dotX, 2)
}
```

Alternative Solution:

```
if (dotX != 2) {
    led.unplot(dotX, 2)
} else {
    led.plot(dotX, 2)
}
```

## 7. Update its position variables by adding the velocity to the dot's current position.

<br/>

```
dotX = dotX + dotXVelocity
```

## 8.  Finally, plot the dot's new position.  NOTE- if dotX is now 2, then we must unplot instead of plot the dot's new position.

<br/>

Solution 1:

```
led.plot(dotX, 2)
if (dotX == 2) {
    led.unplot(dotX, 2)
}
```

Alternative Solution:

```
if (dotX == 2) {
    led.unplot(dotX, 2)
} else {
    led.plot(dotX, 2)
}
```

## 9. Write the code that plots and unplots the dot 10 times when button A is pressed. Pause for 60 milliseconds in between plotting and unplotting the dot. (Don't include any if statements, and don't worry about updating 'dot running'.)

<br/>

```
for (let j = 0; j < 10; j++) {
    led.plot(dotX, 2)
    basic.pause(60)
    led.unplot(dotX, 2)
    basic.pause(60)
}
```

## 10. Write the code that will display the score when button B is pressed. (Don't include any IF statements, and don't worry about updating 'dot running' and 'displaying stats'.)

<br/>

```
input.onButtonPressed(Button.B, () => {
    basic.showString("WINS", 150)
    basic.showNumber(wins, 150)
    basic.pause(500)
    basic.showString("LOSSES", 150)
    basic.showNumber(losses, 150)
    basic.pause(500)
})
```

