# Change Score By

The game library #docs

The game library supports simple single-player time-based games. The player will ** add points to score**.

## Block Editor

The code below shows a simple game where the user gets to press the button ``A`` as much times as possible and the score will display on the screen.

![](/static/mb/change-score-by-0.png)

## Touch Develop

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

* get the current score value

```
export function score() : number
```

### Lessons

[bop it](/lessons/bop-it) | [game of chance](/lessons/game-of-chance) | [game counter](/lessons/game-counter)

