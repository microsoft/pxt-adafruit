## Getting started
	• Go to https://m.pxt.io/
	• To create a new project, click new Project
Tap or click Blocks.

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

Once you are done coding, don't forget to run your code with the Play button.

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