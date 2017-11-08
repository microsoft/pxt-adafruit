# Button flipper

## Step 1

Drag out a ``||input:on button A click||`` block to add code that runs when button ``A`` is pressed.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
})
```

## Step 2

Grab a ``||logic:if then else||`` block and put it inside the ``||input:on button A click||``. We'll use this to run some code based on a random value.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (false) {
    } else {
    }
});
```

## Step 3

Drag both a ``||logic:<||`` logic operator and a ``||Math:pick random||`` block and place them into the ``||logic:if||``.

The ``||Math:pick random 0 to 10||`` returns a random number between 0 and 10. If it is less than 5, you win. Otherwise, you loose, sorry.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (Math.randomRange(0, 10) < 5) {
    } else {
    }
})
```

## Step 4

Drag the ``||music:play sound||`` and ``||light:show animation||`` blocks out to create the win and loose effects. You can pick the sounds, colors, and animations. Be creative!

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (Math.randomRange(0, 10) < 5) {
        music.playSound(music.sounds(Sounds.PowerUp))
        light.showAnimation(light.sparkleAnimation, 2000)
    } else {
        music.playSound(music.sounds(Sounds.Wawawawaa))
        light.setAll(Colors.Red)
    }
})
```

## Step 5

Click ``|Download|`` to transfer your code to the @boardname@. Press ``A`` to try your luck...

## Step 6

Awesome! Congratulations on completing this challenge on the @boardname@.
