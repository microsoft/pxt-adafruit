# Start Countdown

The game library supports simple single-player time-based games. The general goal of a game will be to achieve a top score before time runs out of time.

## Block Editor

![](/static/mb/game-library/start-countdown-0.png)

## KindScript

The code below shows a simple game where the user gets to press the button ``A`` as much times as possible in 10 seconds.

```
input.onButtonPressed(Button.A, () => {
    game.addScore(1)
})
game.startCountdown(10000)
```

### Score

When a player achieves a goal, you can increase the game score

* add score points to the current score

```
export function addScore(points: number)
```

* set the current score to a particular value.

```
export function setScore(value: number)
```

* get the current score value

```
export function score() : number
```

### Countdown

If your game has a time limit, you can start a countdown in which case `game->current time` returns the remaining time.

* start a countdown with the maximum duration of the game in milliseconds.

```
export function startCountdown(ms: number)
```

### Lessons

[bop it](/lessons/bop-it) | [game of chance](/lessons/game-of-chance) | [game counter](/lessons/game-counter)

