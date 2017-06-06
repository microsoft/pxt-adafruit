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

Use the color palette to select a color and change the color of each pixel. To do this, first pick a color you want from the
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

Now, let's make a police siren from our animation! From the `Loops` drawer, place a ``||forever||`` block anywhere in the workspace.

```blocks
loops.forever(() => {
    light.showRing(
        `blue blue blue blue blue red red red red red`
    )
    light.showRing(
        `red red red red red blue blue blue blue blue`
    )
})
loops.forever(() => {
});
```

### Step 4

From the `Music` drawer, draw a ``||play sound until done||`` block and place it inside the newly added ``||forever||`` block.

```blocks
loops.forever(() => {
    light.showRing(
        `blue blue blue blue blue red red red red red`
    )
    light.showRing(
        `red red red red red blue blue blue blue blue`
    )
})
loops.forever(() => {
    music.playSoundUntilDone(music.sounds(Sounds.Siren))
});
```

### Step 5

Click on the field inside the ``||play sound||`` block and change it to the ``Siren`` sound.

### Step 6

Click ``|Download|`` to transfer your code to the @boardname@.

### Step 7

Awesome! Congratulations on completing your first challenge on the @boardname@.
