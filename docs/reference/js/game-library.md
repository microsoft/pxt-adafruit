# Game Library

The game library #docs

The game library supports simple single-player time-based games. The player has a number of **lives** and a **score**. The game has a number of **levels** and a **countdown clock**.  The general goal of a game will be to achieve a top score before time runs out or the number of lives goes to zero.

## Touch Develop

The code below shows a simple game where the user gets to press the button ``A`` as much times as possible in 10 seconds.

```
input.onButtonPressed("A", () => {
    game.addScore(1)
})
game.startCountdown(10000)
```

### [Countdown](/microbit/js/game-library/start-countdown)

If your game has a time limit, you can start a countdown in which case `game->current time` returns the remaining time.

* start a countdown with the maximum duration of the game in milliseconds.

```
export function startCountdown(ms: number)
```

### [Game over](/microbit/js/game-library/game-over)

If the `life` reaches zero or the time expires (see countdown), the game enters the **game over** mode. When the game is over, `game->is running` returns false

* check if the game still running.

```
export function isRunning() : boolean
```

Indicates if the game is display the game over sequence.

```
export function isGameOver() : boolean
```

You can also end the game by calling the `game -> game over` function:

```
export function gameOver()
```

### Score

When a player achieves a goal, you can increase the game score

[Add Point to Score](/microbit/js/game-library/add-point-to-score)

* add score points to the current score

```
export function addScore(points: number)
```

[Score](/microbit/js/game-library/score)

* set the current score to a particular value.

```
export function setScore(value: number)
```

* get the current score value

```
export function score() : number
```

### Life

Manage the player lives. When the life count reaches 0 or less, the game is over.

* remove one or more lives

```
export function removeLife(life: number)
```

* add lives

```
export function addLife(lives: number)
```

* set the life to a particular value

```
export function setLife(value: number)
```

* get the current life value

```
export function life() : number
```

### Levels

When the game increases in difficulty, you can increase the level and use that value in your game logic.

* increase the level by 1

```
export function levelUp()
```

* get the current level

```
export function level() : number
```

### Time

The game immediately starts tracking the time from the moment the device started.

* get the current time

```
export function currentTime() : number
```

You can start the time again by using `game->start stopwatch`.

* start the game timer

```
game.startStopwatch()
```

### Blink

Reports the blink duration of a `sprite` .

```
export function blink(_this: micro_bitSprites.LedSprite) : number
```

Sets the blink duration interval in milliseconds .

```
export function setBlink(sprite: micro_bitSprites.LedSprite, ms: number)
```

### Lessons

[bop it](/microbit/lessons/bop-it) | [game of chance](/microbit/lessons/game-of-chance) | [game counter](/microbit/lessons/game-counter)

