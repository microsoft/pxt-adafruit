# Score

The game library #docs

The game library supports simple single-player games. The player has a **score**.

## Block Editor

The code below shows a simple game where the user gets to press the button ``A`` and adds 1 point to score that will be displayed on the BBC micro:bit screen

![](/static/mb/game-library/add-point-to-score-0.png)

## Touch Develop

The code below shows a simple game where the user gets to press the button ``A`` as much times as possible in 10 seconds.

```
input.onButtonPressed("A", () => {
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

[bop it](/microbit/lessons/bop-it) | [game of chance](/microbit/lessons/game-of-chance) | [game counter](/microbit/lessons/game-counter)

