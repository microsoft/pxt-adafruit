# pong quiz answers

create the game Pong.

## Name

## Directions

Use this activity document to guide your work in the [pong tutorial](/lessons/pong/tutorial)

Answer the questions while completing the tutorial. Pay attention to the dialogues!

## 1. Create two variables that will keep track of the x-position and y-position of the ball, and assign the variables to their initial values.

<br/>

```
ballX = 2
ballY = 1
```

## 2. Create two variables that keeps track of the velocity (or the speed and direction) of the ball, and assign the variables to their initial values.

<br/>

```
ballXVelocity = 1
ballYVelocity = 1
```

## 3. Write the code that plots the initial position of the paddle and the ball.

<br/>

```
led.plot(0, paddleY)
led.plot(ballX, ballY)
```

## 4. Write the code that moves the paddle up when Button A is pressed. (Don't worry about setting 'game running' to true.)

<br/>

```
input.onButtonPressed(Button.A, () => {
    if (paddleNotUp()) {
        led.unplot(0, paddleY)
        paddleY = paddleY - 1
        led.plot(0, paddleY)
    }
})
```

## 5. Write the code that moves the paddle up when Button B is pressed. (Don't worry about setting 'game running' to true.)

<br/>

```
input.onButtonPressed(Button.A, () => {
    if (paddleNotDown()) {
        led.unplot(0, paddleY)
        paddleY = paddleY + 1
        led.plot(0, paddleY)
    }
})
```

## 6. Write the code to update the y-velocity. (Hint: look at the function "update y velocity".)

<br/>

```
if (ballY == 4 || ballY == 0) {
    ballYVelocity = (-1) * ballYVelocity
}
```

## 7. Write the code to move the ball. (Hint: look at the function "move ball".)

<br/>

```
led.unplot(ballX, ballY)
ballX = ballX + ballXVelocity
ballY = ballY + ballYVelocity
```

