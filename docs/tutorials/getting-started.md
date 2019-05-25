# Getting started

## Step 1

Welcome, let's get started by making something everyone will notice! Place the ``||light:show ring||`` block inside a ``||loops:forever||`` block to show a ring of pixels on the board.

```blocks
forever(() => {
    light.showRing(
    `red red red red red red red red red red`
    )
})
```

## Step 2

Use the color palette to select a color. You pick one of the colors from the middle of the ring. Go around the ring and touch each pixel to change them to this color. Let's use `blue` for now.

```blocks
forever(() => {
    light.showRing(
    `blue blue blue blue blue blue blue blue blue blue`
    )
})
```

## Step 3

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

## Step 4

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

## Step 5

From the `Music` drawer, drag out a ``||music:play sound until done||`` block and place it inside the newly added ``||loops:forever||`` block.

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
    music.baDing.playUntilDone()
});
```

## Step 6

Click on the part of the ``||music:play sound||`` block that shows the name of the sound. Change it to the ``Siren`` sound.

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
    music.siren.playUntilDone()
});
```

## Step 7

Click ``|Download|`` to transfer your code to the @boardname@.

## Step 8

Awesome! Congratulations on completing your first challenge on the @boardname@.
