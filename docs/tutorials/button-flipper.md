# Button flipper

## Step 1

Drag out a ``||input:on button A click||`` block to add code that runs when button **A** is pressed.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
})
```

## Step 2

Grab an ``||logic:if then else||`` block and put it inside the ``||input:on button A click||``. We'll use this, along with a random number, to decide if you're going to win or lose.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (true) {
    } else {
    }
});
```

## Step 3

Go over to **LOGIC** again and get a ``||logic:0 < 0||`` comparison block. Use it to replace the `true` condition in the ``||logic:if then else||`` block.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (0 < 0) {
    } else {
    }
})
```

## Step 4

In the **MATH** toolbox drawer, pull out a ``||math:pick random||`` block and place it into the first slot of the ``||logic:0 < 0||`` block. In the second slot, type `5`.

This picks a random number between 0 and 10. If the number is less than 5 it will run the code in the ``||logic:if||`` part of our ``||logic:if then else||`` block. But, if it's 5 or greater, it will run the code in the ``||logic:else||`` part of our ``||logic:if then else||`` block.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (Math.randomRange(0, 10) < 5) {
    } else {
    }
})
```

## Step 5

Drag the ``||music:play sound||`` and ``||light:show animation||`` blocks out to create the win and lose effects. You can pick the sounds and animations. Be creative!

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (Math.randomRange(0, 10) < 5) {
        music.playSound(music.sounds(Sounds.PowerUp))
        light.showAnimation(light.sparkleAnimation, 2000)
    } else {
        music.playSound(music.sounds(Sounds.Wawawawaa))
        light.showAnimation(light.runningLightsAnimation, 2000)
    }
})
```

## Step 6

Click ``|Download|`` to transfer your code to the @boardname@. Press button **A** to try your luck...

## Step 7

Awesome! Congratulations on completing this challenge on the @boardname@.
