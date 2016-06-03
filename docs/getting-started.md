# Getting started

## ~avatar

Are you ready to build cool BBC micro:bit programs?

Here are some challenges for you.  Unscramble the blocks in the editor
to make real programs that work!

## ~

### Happy face

There are three blocks in the editor (the area to the left).
They should look like this:

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

Now move your program from your computer to the BBC micro:bit!

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

Now move your program from your computer to the BBC micro:bit!

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

Now move your program from your computer to the BBC micro:bit!

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

### Tilting with gestures

You can also find when someone is tilting the micro:bit left or right,
face up or face down, and logo up or logo down (the logo is the yellow
oval picture at the top of the board). Tilting a micro:bit like this
is called a **gesture**.

Try to build a Rock Paper Scissors game where you tilt the micro:bit
left to show paper, right to show scissors, and down to show rock.

Unscramble these blocks in the editor and try this program on a real
micro:bit!

```shuffle
input.onGesture(Gesture.TiltLeft, () => {
    basic.showLeds(`
# # # # #
# . . . #
# . . . #
# . . . #
# # # # #`);
});
input.onGesture(Gesture.LogoDown, () => {
    basic.showLeds(`
. . . . .
. # # # .
. # # # .
. # # # .
. . . . .`);
});
input.onGesture(Gesture.TiltRight, () => {
    basic.showLeds(`
# # . . #
# # . # .
. . # . .
# # . # .
# # . . #`);
});
```

### Pins

You can also use the pins as buttons.  (The pins are the holes in the
metal stripe at the bottom of the micro:bit board.)  For example, hold
the ``GND`` button with one hand and touch the ``0`` pin (called
``P0``) with your other hand to tell the micro:bit you're pressing it.

Unscramble the blocks in the editor to show a smiley when you press
pin ``P0``.

```shuffle
input.onPinPressed(TouchPin.P0, () => {
    basic.showLeds(`
. . . . .
. # . # .
. . . . .
# . . . #
. # # # .`);
});
```

### Your turn!

Use the screen, buttons, gestures, and pins to make your own fun game
with the BBC micro:bit!  What about some of these?

* A backpack burglar alarm
* Daily news broadcaster for your class
* Animated jewelry
* A _complete_ animated cartoon
* A calculator
* A music box

These are all things you can make with the BBC micro:bit by itself.
Just think what you can do if you connect the micro:bit's pins to
extra parts like microphones and other **sensors**!

## Let's play Rock Paper Scissors!

### ~avatar avatar

```sim
input.onGesture(Gesture.Shake, () => {
    let img = Math.random(3)
    if (img == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)

    } else if (img == 1) {
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
Build a Rock Paper Scissors game with the BBC micro:bit!
You can play the game with a friend who has it on a micro:bit.
You can also play it with friends who are just using their hands.

## [START PROJECT](/#follow:/projects/rock-paper-scissors)

### ~


## Materials needed

* Your BBC micro:bit -- that's it!

## Step 1: Getting started

We want the micro:bit to choose rock, paper, or scissors when you
shake it.  Try creating an ``on shake`` block so when you shake the
micro:bit, it will run part of a program.

```blocks
input.onGesture(Gesture.Shake, () => {
    
})
```

Next, when you shake the micro:bit, it should pick a random number from `0` to `2`
and store it in the variable `weapon`. (This variable is named `weapon` because 
rock, paper, and scissors are the weapons you use to battle your friends!)

Add a ``set`` block with a variable. Then add a ``pick random`` block,
and store the random number in the variable,
like this:

```blocks
input.onGesture(Gesture.Shake, () => {
    let weapon = Math.random(3)
})

```

### ~hint
No one can predict random numbers. That's what makes them great for Rock Paper Scissors!
### ~

Each possible number these blocks can make (`0`, `1`, or `2`) means a different picture.
We will show the right picture for that number on the LED screen.


## Step 2: Picking paper

Put an ``if`` block after the ``let`` block that checks whether
`weapon` is `0`. Make sure the ``if`` block has an ``else if`` part
and an ``else`` part.

Next, add a ``show leds`` block that shows a
picture of a piece of paper:

```blocks
input.onGesture(Gesture.Shake, () => {
    let weapon = Math.random(3)
    if (weapon == 0) {
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

Make the ``else if`` part check if the variable `weapon` is `1`.
Then add a ``show leds`` block with a picture of a rock.

```blocks
input.onGesture(Gesture.Shake, () => {
    let weapon = Math.random(3)
    if (weapon == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)

    } else if (weapon == 1) {
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
    let weapon = Math.random(3)
    if (weapon == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)

    } else if (weapon == 1) {
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

You don't need to check if `weapon` is `2` because `2` is the only number left out of `0`, `1`, and `2`.
That's why you can use an ``else`` instead of an ``else if``.

### ~

Your game is ready! Have fun!

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

## Your turn!

How else can you make your game better?
Ever hear of [Rock Paper Scissors Spock Lizard](http://www.samkass.com/theories/RPSSL.html)?
