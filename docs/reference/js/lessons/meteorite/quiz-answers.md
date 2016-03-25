# meteorite quiz answers

create the game meteorite #LED #number #math #acceleration #docs

## Name

## Directions

This is the answer key for the [meteorite quiz](/microbit/lessons/meteorite/quiz)

## 1. Write the code that sets up the position variables of meteorite 1. (Hint: look inside the function "initialize game".)

<br/>

```
meteorite_1X = Math.random(5)
meteorite_1Y = -4
```

## 2. Write the code that plots the initial position of the ship. (Hint: look inside the function "initialize game".)

<br/>

```
led.plot(shipLeftX, 4)
led.plot(shipLeftX + 1, 4)
```

## 3. Write the code that will detect if a meteorite 1 collided with the ship. (Hint: look inside the function "move meteorite 1".

<br/>

```
if (meteorite_1X == 4 && (shipLeftX == meteorite_1X || shipLeftX + 1 == meteorite_1X)) {
    gameOver()
}
```

## 4. Write the code that increase the difficulty by making the game run faster. 

<br/>

```
pauseDifficulty = (pauseDifficulty * 49) / 50
```

## 5. Write the code that moves the ship left.

<br/>

```
led.unplot(shipLeftX + 1, 4)
shipLeftX = shipLeftX - 1
led.plot(shipLeftX, 4)
```

## 6. Write the code that moves the ship right. 

<br/>

```
led.unplot(shipLeftX, 4)
shipLeftX = shipLeftX + 1
led.plot(shipLeftX + 1, 4)
```

## 7. Write the function that checks if moving the ship resulted in a collision with meteorite 1.

<br/>

```
if (shipLeftX == meteorite_1X && meteorite_1Y == 4) {
    gameOver()
}
```

## 8. Write the code that flashes all the LEDs thee times to create the effect of a crash. (Hint: look at the function "game over".) 

<br/>

```
led.plotAll()
for (let i = 0; i < 3; i++) {
    led.fadeIn(400)
    led.fadeOut(400)
}
```

