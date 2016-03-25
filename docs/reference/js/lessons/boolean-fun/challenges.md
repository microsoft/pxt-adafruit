# speed button challenges

This challenging script will create a game in which the user needs to press button A fast enough. You will get practice with using booleans in "if" statements. #docs

### Challenge 0

Welcome! This [guided tutorial](https://live.microbit.co.uk/td/lessons/speed-button/tutorial) will help you begin creating this game!

```
counter = 0
fastPress = false
input.onButtonPressed("A", () => {
    counter = counter + 1
})
```

### Challenge 1

We need to know when the user has hit button `A` 15 times. The user wins when he/she is able to accomplish this in less than 3500 milliseconds (3.5 seconds). We can check for both conditions by using an `and` operator. When using an `and` operator, both conditions need to be true in order for the condition to be true.

```
counter = 0
fastPress = false
input.onButtonPressed("A", () => {
    counter = counter + 1
    if (counter == 15 && input.runningTime() < 3500) {
    }
})
```

Next, if the user has won, let's set our boolean to true. This indicates that he or she has won.

```
counter = 0
fastPress = false
input.onButtonPressed("A", () => {
    counter = counter + 1
    if (counter == 15 && input.runningTime() < 3500) {
        fastPress = true // ***
    }
})
```

### Challenge 2

We want to set `fastPress` to false if the user was too slow. To do so, we need another condition to see if the user took more than 3500 milliseconds (3.5 seconds). In the `if` statement, set `fastPress` to false.

```
counter = 0
fastPress = false
input.onButtonPressed("A", () => {
    counter = counter + 1
    if (counter == 15 && input.runningTime() < 3500) {
        fastPress = true
    }
    if (counter == 15 && input.runningTime() > 3499) {
        fastPress = false // ***
    }
})
```

### Challenge 3

Now let's display if the user won or lost. To do so, we need to check the status of `fastPress` when the game is finished, and then show the correct message.

```
counter = 0
fastPress = false
input.onButtonPressed("A", () => {
    counter = counter + 1
    if (counter == 15 && input.runningTime() < 3500) {
        fastPress = true
    }
    if (counter == 15 && input.runningTime() > 3499) {
        fastPress = false
    }
    if (counter == 15 && fastPress) {
        basic.showString("YOU WIN!", 150) // ***
    }
    if (counter == 15 && ! fastPress) {
        basic.showString("TOO SLOW!", 150) // ***
    }
})
```

* Click the `run` button to see if the code runs properly.

### Challenge 4

Modify the code to change the difficulty level. Increasing the time will make it easier, while decreasing the time will make it harder. For example, changing the 3500 milliseconds to 4500 milliseconds will make the difficulty easier.

