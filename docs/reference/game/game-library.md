# Game Library

The game library supports simple single-player time-based games. The player has a **sprite**, number of **lives** and a **score**. The game has a sprite, number of **levels** and a **countdown clock**.  The general goal of a game will be to move the sprite and achieve a top score before time runs out or the number of lives goes to zero.

The code below shows a simple game where the user gets to press the button ``A`` as much times as possible in 10 seconds.

```blocks
input.onButtonPressed(Button.A, () => {
    game.addScore(1)
})
game.startCountdown(10000)
```

### [Create sprite](/reference/game/create-sprite)

Create sprite with x, y coordinates and returns a LED Sprite. Create a new LED sprite.

![](/static/mb/create-sprite-0.png)

```
export function createSprite(x: number, y: number) : micro_bitSprites.LedSprite
```

### [Move](/reference/game/move)

Sprite move by a certain number

![](/static/mb/game-library/move-0.png)

```
export function move(_this: micro_bitSprites.LedSprite, leds: number)
```

### [Turn](/reference/game/turn)

Rotates a sprite to the right by a certain number of degrees

![](/static/mb/game-library/turn-0.png)

```
export function turnRight(_this: micro_bitSprites.LedSprite, degrees: number)
```

Rotates a sprite to the left by a certain number of degrees

```
export function turnLeft(_this: micro_bitSprites.LedSprite, degrees: number)
```

### [Change](/reference/game/change)

Sprite will change the x position by this number

![](/static/mb/change-0.png)

```
export function changeXBy(_this: micro_bitSprites.LedSprite, x: number)
```

Sprite will change the y position by this number

```
export function changeYBy(_this: micro_bitSprites.LedSprite, y: number)
```

### [Set](/reference/game/set)

Sprite will change the x position by this number

```
export function setX(_this: micro_bitSprites.LedSprite, x: number)
```

Sprite will change the y position by this number

![](/static/mb/change-0.png)

```
export function changeYBy(_this: micro_bitSprites.LedSprite, y: number)
```

### [If on edge, bounce](/reference/game/if-on-edge-bounce)

Sprite - If the sprite is on the edge, the sprite will bounce

![](/static/mb/game-library/if-on-edge-bounce-0.png)

```
export function ifOnEdge_Bounce(_this: micro_bitSprites.LedSprite)
```

### [Change score by](/reference/game/change-score-by)

When a player achieves a goal, you can increase the game score

* add score points to the current score

![](/static/mb/game-library/pic1.png)

```
export function addScore(points: number)
```

### [Score](/reference/game/score)

* set the current score to a particular value.

```
export function setScore(value: number)
```

* get the current score value

![](/static/mb/game-library/pic2.png)

```
export function score() : number
```

### [Countdown](/reference/game/start-countdown)

If your game has a time limit, you can start a countdown in which case `game->current time` returns the remaining time.

* start a countdown with the maximum duration of the game in milliseconds.

![](/static/mb/game-library/pic3.png)

```
export function startCountdown(ms: number)
```

### [Game over](/reference/game/game-over)

If the `life` reaches zero or the time expires (see countdown), the game enters the **game over** mode. When the game is over, `game->is running` returns false

* check if the game still running.

```
let running = game.isRunning()
```

You can also end the game by calling the `game -> game over` function:

![](/static/mb/game-library/pic0.png)

```
game.gameOver()
```
