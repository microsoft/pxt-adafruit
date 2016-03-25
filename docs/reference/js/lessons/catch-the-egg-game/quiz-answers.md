# catch the egg game quiz answers

Programming a game of catch the egg using the accelerometer 

## Name

## Directions

Use this activity document to guide your work in the [catch the egg tutorial](/microbit/lessons/catch-the-egg-game/tutorial)

Answer the questions while completing the tutorial. Pay attention to the dialogues!

## 1. Write the data type for the global variables 'basket' and 'egg'.

<br/>

'Basket' and 'egg' are stored as **Number**.

## 2. Write the code to plot the initial position of the egg and the basket using the variables 'egg x', 'egg y', and 'basket x'. The code should arrange the egg and basket as shown below.

![](/static/mb/lessons/catch-the-egg-game-0.png)

<br/>

```
led.plot(eggX, eggY)
led.plot(basketX, 4)
```

## 3. Write the three lines of code that moves the egg down. (You need to unplot the egg's current position, update its position variables, and plot its new position.

<br/>

```
led.unplot(eggX, eggY)
eggY = eggY + 1
led.plot(eggX, eggY)
```

## 4. Write the code that calculates 'basket x' given the variable 'acc x'.

<br/>

```
let accX = input.acceleration("x")
basketX = 2 + Math.min(2, Math.max(-2, accX / 200))
```

Note: the first line of code in this answer is optional.

## 5. Write the code that resets the egg after it has fallen past the bottom of the BBC micro:bit.

<br/>

```
if (eggY > 4) {
    eggY = -1
    eggX = Math.random(5)
}
```

