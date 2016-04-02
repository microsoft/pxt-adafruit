# pong activity

Building a game of pong with sprites.

### ~avatar avatar

### @video td/videos/pong-0

Welcome! This tutorial will teach you how to build a simple pong game using sprites.

### ~

The game works as follow: the user moves a paddle on the left of the screen and a ball bounces on the other side. Let's start by creating the 2 sprites.

```
let paddle = game.createSprite(0, 2)
let ball = game.createSprite(4, 2)
```

Let's make the ball start with an angle.

```
ball.setDirection(-45)
```

The user will control the paddle by pressing ``A`` to go up and ``B`` to go down. Let's add ``on button pressed`` event handlers to do that.

```
input.onButtonPressed(Button.A, () => {
    paddle.changeYBy(-1)
})
input.onButtonPressed(Button.B, () => {
    paddle.changeYBy(1)
})
```

Let's add a ``forever`` loop to start the main game logic.

```
basic.forever(() => {
    // Leave the sprite on screen for a little while.
    basic.pause(400)
    // Let's move the ball in whatever direction it is currently going.
    ball.move(1)
    // The ball might be on the left side of the screen (``x = 0``), let's test for that.
    if (ball.x() == 0) {
        // Let's add a little pause to let the user know that the ball is on the side.
        basic.pause(400)
        // If the paddle is not at the same ``y`` coordinate, it missed the ball and we can trigger a game over. If not, we add a point to the score.
        if (paddle.y() != ball.y()) {
            game.gameOver()
        } else {
            game.addScore(1)
            basic.pause(500)
        }
    }
    // The ball moved and might be on a side, let's make sure it bounces.
    ball.ifOnEdge_Bounce()
    // If the ball is on the left side, slide it forward to change slightly the bouncing mechanics.
    if (ball.x() == 0) {
        ball.changeXBy(1)
    }
})
```

