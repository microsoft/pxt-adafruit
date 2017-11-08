# Button Flipper

## Step 1

Drag a ``||input:on button A click||`` block to add code that runs when button ``A`` is pressed.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
})
```

## Step 2

Drag a ``||logic:if then else||`` block to run different code based on a random value.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (false) {
    } else {
    }
});
```

## Step 3

Drag a ``||logic:<||`` math operate and a ``||Math:pick random||`` block into the ``||logic:if||``.

``||Math:pick random 0 to 10||`` will return a random number between 0 and 10. If it is less than 5, you win otherwise you loose.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (Math.randomRange(0, 10) < 5) {
    } else {
    }
})
```

## Step 4

Drag ``||music:play sound||`` and ``||light:show animation||`` blocks to create the win/loose animations. Be creative!

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
