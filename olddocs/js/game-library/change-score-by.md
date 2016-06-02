# Change Score By

The game library supports simple single-player time-based games. The player will ** add points to score**.

```blocks
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

