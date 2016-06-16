# Getting started

## ~avatar

Are you ready to build cool BBC micro:bit programs?

Here are some challenges for you. Arrange the blocks in the editor
to make real programs that work!

## ~

### Happy face

There are three blocks in the editor (the area to the left).
Arrange them to look like this:

```blocks
basic.forever(() => {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
});
```

When you run this program, you will see a smiley face, then a blank
screen, then a smiley again -- it never stops! (That's because of the
``forever`` block.)

Click **Compile** to move your program to the BBC micro:bit!

### Happy unhappy face

Draw an unhappy face instead of the blank screen.  Click on the dots
in the second ``show leds`` block until it matches the blocks below.
Now you have an **animation** (cartoon) that shows a happy face,
then an unhappy one, then a happy one again, forever (or until
you turn off your micro:bit)!

```blocks
basic.forever(() => {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
});
```
Click **Compile** to move your program to the BBC micro:bit!

### Your turn!

Pile up more ``show leds`` blocks to create your animation! Create an
animation with at least 5 pictures.  What does this animation show?

```blocks
basic.forever(() => {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        . . . # #
        `)
    basic.showLeds(`
        . . . . .
        # . # . .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . . .
        # . . . #
        . # # # .
        `)
});
```
Click **Compile** to move your program to the BBC micro:bit!

#### ~hint

You can find the ``show leds`` block in the **Basic** part of the editor.

#### ~

### Button A and button B

This program will show the word **ANTEATER** on the LED
screen when you press button `A`.

```blocks
input.onButtonPressed(Button.A, () => {
    basic.showString("ANTEATER");
});
```

#### ~hint

The ``showString`` block can show letters, numbers, and punctuation
on the micro:bit screen.

#### ~

Now try to unscramble these blocks in the editor so that the micro:bit
shows **BANANA** when you press button `B`.

```shuffle
input.onButtonPressed(Button.B, () => {
    basic.showString("BANANA");
});
```
#### ~hint

You can find the letter `B` by clicking the letter `A` on the
``onButtonPressed`` block.

#### ~

Click **Compile** to move your program to the BBC micro:bit!

#### Your turn!

Can you combine these blocks so your program shows your real name
instead of **ANTEATER** when you press `A`, but _your secret agent
name_ instead of **BANANA** when you press `B`?

### Shake

You can find when someone is shaking the BBC micro:bit by checking its
**accelerometer** (it finds whether the micro:bit is speeding up or
slowing down).

Unscramble these blocks in the editor to show a frownie when someone
shakes the micro:bit. (Ouch!)

```shuffle
input.onGesture(Gesture.Shake, () => {
    basic.showLeds(`
. . . . .
. # . # .
. . . . .
. # # # .
# . . . #`);
});
```
Click **Compile** to move your program to the BBC micro:bit!

### Pins

You can also use the pins as buttons.  (The pins are the holes in the
metal stripe at the bottom of the micro:bit board.)  For example, hold
the ``GND`` button with one hand and touch the ``0`` pin (called
``P0``) with your other hand to tell the micro:bit you're pressing it.

Unscramble the blocks in the editor to show a heart when you touch
pin ``P0``.

```shuffle
input.onPinPressed(TouchPin.P0, () => {
    basic.showLeds(`
. # . # .
# . # . #
# . . . #
. # . # .
. . # . .`);
});
```
Click **Compile** to move your program to the BBC micro:bit!

## ~hint

Try this experiment: find a friend and hold hands. Touch the ``GND``
pin while your friend presses the ``P0`` pin. You should see the
heart! The electric current is going through your bodies and across
your handshake to make it happen!

## ~

## The amazing coin flipper

### ~avatar avatar

Are you trying to choose whether to play soccer or go to the movies
instead, or which toppings to have on your pizza?  Build a coin
flipping machine with the BBC micro:bit to choose for you!

### ~

Here are the blocks to make your coin flipper.  When you press button
`B`, the coin flipper will show either `H` for heads or `T` for tails
on the LED screen.

```blocks
input.onButtonPressed(Button.B, () => {
    if (Math.randomBoolean()) {
        basic.showString("H");
    } else {
        basic.showString("T");
    }
});
```
### ~hint

The ``pick random true or false`` block randomly tells the ``if``
block `true` or `false`.  If the ``pick`` block picked `true`, the
``if`` block shows the letter `H`. Otherwise, it shows the letter `T`.

That's it!

### ~

### Keeping score

#### ~avatar

To keep track out of how many guesses you've won,
add these blocks to your coin flipper:

#### ~

```blocks
input.onButtonPressed(Button.A, () => {
    game.addScore(1);
});
input.onButtonPressed(Button.AB, () => {
    basic.showNumber(game.score());
});
```

These blocks mean that if you press button `A`, you will add `1` to
your score, and if you press `A` and `B` together, the micro:bit will
show your score.

When you're done, your coin flipping program should look like this:

```blocks
input.onButtonPressed(Button.B, () => {
    if (Math.randomBoolean()) {
        basic.showString("H");
    } else {
        basic.showString("T");
    }
});
input.onButtonPressed(Button.A, () => {
    game.addScore(1);
});
input.onButtonPressed(Button.AB, () => {
    basic.showNumber(game.score());
});
```

Flip until your thumbs get tired!

## Let's play Rock Paper Scissors!

### ~avatar avatar

Build a Rock Paper Scissors game with the BBC micro:bit!  You can play
the game with a friend who has it on a micro:bit.  You can also play
it with friends who are just using their hands.  (The game is built
like a coin flipper, but with three choices instead of two.)

### ~

## Step 1: Getting started

We want the micro:bit to choose rock, paper, or scissors when you
shake it.  Try creating an ``on shake`` block so when you shake the
micro:bit, it will run part of a program.

Clear up the blocks and add the blocks below.

```blocks
input.onGesture(Gesture.Shake, () => {
    
})
```

Next, when you shake the micro:bit, it should pick a random number from `0` to `2`
and store it in the variable `item`.

Add a ``set`` block with a variable. Then add a ``pick random`` block,
and store the random number in the variable,
like this:

```blocks
input.onGesture(Gesture.Shake, () => {
    let item = Math.random(3)
})

```

### ~hint
No one can predict random numbers. That's what makes them great for Rock Paper Scissors!
### ~

Each possible number these blocks can make (`0`, `1`, or `2`) means a different picture.
We will show the right picture for that number on the LED screen.


## Step 2: Picking paper

Put an ``if`` block after the ``let`` block that checks whether
`item` is `0`. Make sure the ``if`` block has an ``else if`` part
and an ``else`` part.

Next, add a ``show leds`` block that shows a
picture of a piece of paper:

```blocks
input.onGesture(Gesture.Shake, () => {
    let item = Math.random(3)
    if (item == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (false) {

    } else {

    }
})
```

## Step 3: A random rock

Now we are going to add a new picture for the micro:bit to show
when another random number comes up.

Make the ``else if`` part check if the variable `item` is `1`.
Then add a ``show leds`` block with a picture of a rock.

```blocks
input.onGesture(Gesture.Shake, () => {
    let item = Math.random(3)
    if (item == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (item == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {

    }
})
```

## Step 4: Suddenly scissors

Add a ``show leds`` block with a picture of scissors to the ``else`` part:

```blocks
input.onGesture(Gesture.Shake, () => {
    let item = Math.random(3)
    if (item == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)

    } else if (item == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})

```

### ~hint

You don't need to check if `item` is `2` because `2` is the only number left out of `0`, `1`, and `2`.
That's why you can use an ``else`` instead of an ``else if``.

### ~

Your game is ready!

Click **Compile** to move your program to the BBC micro:bit!

Have fun!

## Step 5: Are you the greatest?

Here is a way you can make your Rock Paper Scissors game better.
When button ``A`` is pressed, 
the micro:bit will add `1` to your score.

Open the ``Game`` drawer, and then add the block ``change score by 1`` to your program,
like this:

```blocks
input.onButtonPressed(Button.A, () => {
    game.addScore(1)
})

```

## Step 6: Prove you're the greatest!

After your micro:bit can add `1` to the score, show how many wins you have.

```blocks
input.onButtonPressed(Button.A, () => {
    game.addScore(1)
    basic.showString("WINS:")
    basic.showNumber(game.score())
})
```
## Step 7: Staying honest

Success! Your micro:bit can track wins!
But what about losses? 
Use the ``Game`` drawer to subtract `1` from your score when you press button `B`. 

Here are all the blocks you will need:

```shuffle
input.onButtonPressed(Button.B, () => {
    game.addScore(-1)
    basic.showString("LOSSES:")
    basic.showNumber(game.score())
})
```
Click **Compile** to move your program to the BBC micro:bit!


# Want to do more?

There are [10 great projects](/projects) waiting for you.
