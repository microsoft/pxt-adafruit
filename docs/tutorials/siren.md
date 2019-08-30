# Siren

## Step 1

Go over to ``||input:INPUT||``, get the ``||input:on shake||`` block, and put it on the Workspace. Find a ``||light:show ring||`` block and place it inside ``||input:on shake||``.

```blocks
input.onGesture(Gesture.Shake, function () {
    light.showRing(
    `red red red red red red red red red red`
    )
})
```

## Step 2

Use the color palette to select a color. You pick one of the colors from the middle of the ring. Go around the ring and touch each pixel to change them to this color. Let's use `blue` for now.

```blocks
input.onGesture(Gesture.Shake, function () {
    light.showRing(
    `blue blue blue blue blue blue blue blue blue blue`
    )
})
```

## Step 3

Ok, we'll add another ring to make an animation. Drag another ``||light:show ring||`` block and place it right under the first one.

```blocks
input.onGesture(Gesture.Shake, function () {
    light.showRing(
        `blue blue blue blue blue blue blue blue blue blue`
    )
    light.showRing(
        `red red red red red red red red red red`
    )
})
```

## Step 4

Now, let's make the lights flash! Go to ``||loops:LOOPS||`` and grab the ``||loops:repeat||`` block. Drag it over your two ``||light:show ring||`` blocks until it surrounds them inside the ``||input:on shake||``.

```blocks
input.onGesture(Gesture.Shake, function () {
    for (let i = 0; i < 4; i++) {
        light.showRing(
        `blue blue blue blue blue blue blue blue blue blue`
        )
        light.showRing(
        "red red red red red red red red red red"
        )
    }
})
```

## Step 5

Hey, let's add some sound! From the ``||music:MUSIC||`` drawer, drag out a ``||music:play sound||`` block and place it just before the ``||loops:repeat||`` loop block. 

```blocks
input.onGesture(Gesture.Shake, function () {
    music.baDing.play()
    for (let i = 0; i < 4; i++) {
        light.showRing(
        `blue blue blue blue blue blue blue blue blue blue`
        )
        light.showRing(
        "red red red red red red red red red red"
        )
    }
})
```

## Step 6

Click on the part of the ``||music:play sound||`` block that shows the name of the sound. Change it to the ``siren`` sound. Oh, and finally, put a ``||light:clear||`` at the end of ``||input:on shake||``.

```blocks
input.onGesture(Gesture.Shake, function () {
    music.siren.play()
    for (let i = 0; i < 4; i++) {
        light.showRing(
        `blue blue blue blue blue blue blue blue blue blue`
        )
        light.showRing(
        "red red red red red red red red red red"
        )
    }
    light.clear()
})
```

## Step 7

Click ``|Download|`` to transfer your code to the @boardname@.

## Step 8 @unplugged

Awesome! Congratulations on completing this challenge on the @boardname@.
