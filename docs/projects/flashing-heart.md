# Flashing Heart

## Step 1

Place the ``||show leds||`` block and paint a heart.

```block
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .`
    );
```

## Step 2

Click ``|Download|`` to transfer your code in your @boardname@!

## Step 3

Place another ``||show leds||`` block under the heart to make it blink.

```block
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .`);
basic.showLeds(`
    . # . # .
    # . # . #
    # . . . #
    . # . # .
    . . # . .`);
```

## Step 4

Place the blocks inside the ``||forever||``
to repeat the animation.

```block
basic.forever(() => {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .`
        );
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .`);
})
```

## Step 5

Click ``|Download|`` to transfer your code in your @boardname@!

## Step 6

Place more ``||show leds||`` blocks to create your own animation.

```block
basic.forever(() => {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .`
        );
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .`);
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .`);
})
```

## Step 7

Click ``|Download|`` to transfer your code in your @boardname@!
