![](/static/mb/projects/a1-display.png)

Use the LEDs to display a flashing heart.

## Step 1

Use [show leds](/reference/basic/showLeds) and make your code look like this:

```blocks
basic.showLeds(`
. # . # .
# # # # #
# # # # #
. # # # .
. . # . .`);
```

## Step 2

Add a [pause](/reference/basic/pause) to wait and [clear screen](/reference/basic/clearScreen) to turn off the LEDs.

```blocks
basic.showLeds(`
. # . # .
# # # # #
# # # # #
. # # # .
. . # . .`);
basic.pause(500);
basic.clearScreen();
```

## Step 3

Put a [forever loop](/reference/basic/forever) around it.

```blocks
basic.forever(() => {
basic.showLeds(`
. # . # .
# # # # #
# # # # #d
. # # # .
. . # . .`);
basic.pause(500);
basic.clearScreen();
})
```

## Step 4

Add a [pause](/reference/basic/pause) to wait after clearing the screen.

```blocks
basic.forever(() => {
basic.showLeds(`
. # . # .
# # # # #
# # # # #
. # # # .
. . # . .`);
basic.pause(500);
basic.clearScreen();
basic.pause(500);
})
```

## Step 5

Add a second image of a broken heart. 


```blocks
basic.forever(() => {
basic.showLeds(`
. # . # .
# # # # #
# # # # #
. # # # .
. . # . .`);
basic.pause(500);
basic.clearScreen();
basic.pause(500);
basic.showLeds(`
. # . # .
# . # # #
# . . . #
. # # # .
. . # . .`);
basic.pause(500);
basic.clearScreen();
basic.pause(500);
})
```