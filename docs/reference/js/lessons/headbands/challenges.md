# headbands challenges

These challenges will teach you how to create a fun charades game to play with your friends. #docs

## Before we get started

Complete the following guided tutorial:

* [tutorial](/microbit/lessons/headbands/tutorial)

At the tend of the tutorial, click `keep editing`. Your code should look like this:

```
coll = (<string[]>[])
coll.push("puppy")
coll.push("clock")
coll.push("night")
coll.push("cat")
coll.push("cow")
input.onLogoUp(() => {
    let index = Math.random(coll.length)
    let word = coll[index]
    basic.showString(word, 150)
})
input.onScreenDown(() => {
    game.addScore(1)
})
game.startCountdown(30000)
```

### Challenge 1

Let's add more words for the player to act out! But first, we need to increase the time in one round to give the player more time get through all the words. Let's change the `game->start countdown` statement.

```
// **. . .**
game.startCountdown(60000) // ***
```

* Run your code to see if it works as expected

### Challenge 2

Now let's add 5 more words to our list of charade words. Right above the the line `word:=coll->at(index)` add 5 lines that say `coll->add("")`. In this example, we will add the words **bicycle, telephone, sun, car, and ant** but you can add whatever words you like.

```
// . . .
coll.push("puppy")
coll.push("clock")
coll.push("night")
coll.push("cat")
coll.push("cow")
coll.push("bicycle") // ***
coll.push("telephone") // ***
coll.push("sun") // ***
coll.push("car") // ***
coll.push("ant") // ***
// . . .
```

* Run your code to see if it works as expected.

### Challenge 3

Remove a life using `game->remove life` when the screen is down using the `input->on screen down` event.

### Challenge 4

The collection has a function `random` that returns a random element. Update your code to use this function instead of using `math->random`.

### Challenge 5!

Play the game and try guessing all these words in less than 2 minutes!

