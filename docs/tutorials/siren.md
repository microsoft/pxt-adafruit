# Siren

## Step 1 @fullscreen

Place the ``||light:show ring||`` block inside a ``||loops:forever||`` block to show a ring of pixels on the board.

```blocks
forever(() => {
    light.showRing(
    `red red red red red red red red red red`
    )
})
```

## Step 2 @fullscreen

Use the color palette to select a color. You pick one of the colors from the middle of the ring. Go around the ring and touch each pixel to change them to this color. Let's use `blue` for now.

```blocks
forever(() => {
    light.showRing(
    `blue blue blue blue blue blue blue blue blue blue`
    )
})
```

## Step 3 @fullscreen

Ok, we'll add another ring to make an animation. Drag another ``||light:show ring||`` block and place it right under the first one.

```blocks
forever(() => {
    light.showRing(
        `blue blue blue blue blue blue blue blue blue blue`
    )
    light.showRing(
        `red red red red red red red red red red`
    )
})
```

## Step 4 @fullscreen

Now, let's make a police siren from our animation! From the `Loops` drawer, place a ``||loops:forever||`` block anywhere in the workspace.

```blocks
forever(() => {
    light.showRing(
        `blue blue blue blue blue blue blue blue blue blue`
    )
    light.showRing(
        `red red red red red red red red red red`
    )
})
forever(() => {
});
```

## Step 5 @fullscreen

From the `Music` drawer, drag out a ``||music:play sound until done||`` block and place it inside the newly added ``||loops:forever||`` block.
Click on the part of the ``||light:play sound||`` block that shows the name of the sound. Change it to the ``Siren`` sound.

```blocks
forever(() => {
    light.showRing(
        `blue blue blue blue blue blue blue blue blue blue`
    )
    light.showRing(
        `red red red red red red red red red red`
    )
})
forever(() => {
    music.playSoundUntilDone(music.sounds(Sounds.Siren))
});
```

## Step 6 @unplugged

Click ``|Download|`` to transfer your code to the @boardname@.

## Step 7 @unplugged

Awesome! Congratulations on completing this challenge on the @boardname@.
