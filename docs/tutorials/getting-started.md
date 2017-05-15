# Getting started

### Step 1

Welcome, let's get started by making something everyone will notice! Place the ``||show ring||`` block in the ``||forever||`` slot to show a ring of pixels on the board.

```blocks
loops.forever(() => {
    light.showRing(
    `red red red red red red red red red red`
    )
})
```

### Step 2

Use the color palette to select a color for each pixel. To do this, first pick a color you want from the
palette (we'll choose `blue` here).
Then, then select a pixel in the ring and it will change to this color.

Change half of the pixels to `blue`.

```blocks
loops.forever(() => {
    light.showRing(
    `blue blue blue blue blue red red red red red`
    )
})
```

### Step 3

Ok, we'll add another ring to make an animation. Drag another ``||show ring||`` block and place it just beneath the first one.

```blocks
loops.forever(() => {
    light.showRing(
        `blue blue blue blue blue red red red red red`
    )
    light.showRing(
        `red red red red red blue blue blue blue blue`
    )
})
```

### Step 3

Now, let's make a police siren from our animation! Add a ``||play tone||`` block after every ``||show ring||`` block.

```blocks
loops.forever(() => {
    light.showRing(
        `blue blue blue blue blue red red red red red`
    )
    music.playTone(262, music.beat(BeatFraction.Half))
    light.showRing(
        `red red red red red blue blue blue blue blue`
    )
    music.playTone(262, music.beat(BeatFraction.Half))
})
```

### Step 4

Click on the ``Middle C`` block to adjust the tone to play. Change the first one to ``Middle A`` and the second one to ``High D``.

### Step 5

Click ``|Download|`` to transfer your code to the @boardname@.

### Step 6

Awesome! Congratulations on completing your first challenge on the @boardname@.
