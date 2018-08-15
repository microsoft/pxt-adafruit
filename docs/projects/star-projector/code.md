# Coding the Star Projector

## @description @boardname@ Star Projector: coding challenge

## ~avatar avatar

Program light patterns on the @boardname@ and make it spin with a servo.

## ~

**Concepts:**
  * Light
  * Brightness
  * Servos

## Duration: ~20 minutes

## Blocks

```cards
light.setBrightness(210)
light.setAll(0xffffff)
while(true) {}
```

## Step 1: Turn the lights on

Open [MakeCode](@homeurl@) in your web browser.

From ``||light:LIGHT||`` drag out a ``||light:set all pixels||`` block and place it inside an ``||loops:on start||`` block. Change the current color to one that you like.

```blocks
light.setAll(0xffffff)
```

## Step 2: Set the brightness

From ``||light:LIGHT||`` drag a ``||light:set brightness||`` block into the ``||loops:on start||`` right before the ``||light:set all pixels||`` block. Set the brightness to `210`.

```blocks
light.setBrightness(210)
light.setAll(0xffffff)
```

## Step 3: Make an angle variable

Go to ``||variables:VARIABLES||`` and make an new variable called ``angle``. Go back into ``||variables:VARIABLES||`` and pull out a ``||variables:set angle to||`` block. Put it in the ``||loops:on start||`` at the top. This variable will keep track of the servo's current rotation angle.

```blocks
let angle = 0
light.setBrightness(210)
light.setAll(0xffffff)
```

## Step 4: Make the servo rotation loops

Now, pull out two ``||loops:while||`` loops and put them into the ``||loops:forever||`` loop. We'll use ``||loops:while||`` loops to change the degree of servo rotation. Go to ``||logic:LOGIC||`` and find the ``||logic: 0 < 0||`` condition block. Pull it out and place in in the ``||loops:while||`` over the ``true`` condition. Do this for the second loop too but change the ``<`` in that condition to a ``>``.

```blocks
let angle = 0
light.setBrightness(210)
light.setAll(0xffffff)
forever(function () {
    while (0 < 0) {
    }
    while (0 > 0) {
    }
})
```

## Step 5: Add the angle check

The servo angle ranges from `0` to `180` and then back to `0` again. The `0` to `180` range will be in the first loop and the  `180` to `0` range will be in the other loop. Go to ``||variables:VARIABLES||`` and get the ``||variables:angle||`` block and place it in the left side of the condition for the first ``||loops:while||`` loop. Do this for the second loop too. In the first loop, change the `0` to `180` to set the rotation range limit.

```blocks
let angle = 0
light.setBrightness(210)
light.setAll(0xffffff)
forever(function () {
    while (angle < 180) {
    }
    while (angle > 0) {
    }
})
```

## Step 6: Adjust the servo rotation angles

We'll make the servo move through it's rotation range by `5` degrees at a time. Get two ``||variables:change angle by||`` blocks and put one in the first ``||loops:while||`` loop and and one it the other loop. Set the value in the first ``||variables:change angle by||`` to `5`. For the second ``||variables:change angle by||`` you need to replace the `0` with a ``||math:0 - 0||``. This is so we can use a negative value. Set the second `0` after the minus sign `-` to `5`.

```blocks
let angle = 0
light.setBrightness(210)
light.setAll(0xffffff)
forever(function () {
    while (angle < 180) {
        angle += 5
    }
    while (angle > 0) {
        angle -= 5
    }
})
```

## Step 7: Command the servo to rotate

The last thing to do is tell the servo to turn! We do that with the ``||pins:servo write pin||`` block. Get two of those from the ``||pins:PINS||`` drawer and put each one below the ``||variables:change angle by||`` blocks. Drag ``||variables:angle||`` variable blocks out and put them in each ``||pins:servo write pin||`` replacing the current angle values. To make the servo turn smoothly, put a ``||loops:pause||`` after each ``||pins:servo write pin||``. Set the time value to `200` milliseconds.

```blocks
let angle = 0
light.setBrightness(210)
light.setAll(0xffffff)
forever(function () {
    while (angle < 180) {
        angle += 5
        pins.A1.servoWrite(angle)
        pause(200)
    }
    while (angle > 0) {
        angle -= 5
        pins.A1.servoWrite(angle)
        pause(200)
    }
})
```

## Good work!

Download the program to the @boardname@ and test your code. Now, how about moving on to some crafting?

### ~button /projects/star-projector/make

NEXT: Start making!

### ~