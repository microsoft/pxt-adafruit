# Change Score By

The code below shows a simple game where the user gets to press the button ``A`` as much times as possible and the score will display on the screen.

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
