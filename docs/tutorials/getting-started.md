# Getting started

### Step 1

Welcome, let's get started by making something everyone will notice! Place the ``||show ring||`` block inside a ``||forever||`` block to show a ring of pixels on the board.

```blocks
loops.forever(() => {
    light.showRing(
    `red red red red red red red red red red`
    )
})
```

### Step 2

Use the color palette to select a color. You pick one of the colors from the middle of the ring. Go around the ring and touch each pixel to change them to this color. Let's use `blue` for now.

```blocks
loops.forever(() => {
    light.showRing(
    `blue blue blue blue blue blue blue blue blue blue`
    )
})
```

### Step 3

Ok, we'll add another ring to make an animation. Drag another ``||show ring||`` block and place it right under the first one.

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

From the `Music` drawer, drag out a ``||play sound until done||`` block and place it inside the newly added ``||forever||`` block.

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

Click on the part of the ``||play sound||`` block that shows the name of the sound. Change it to the ``Siren`` sound.

### Step 6

Click ``|Download|`` to transfer your code to the @boardname@.

### Step 7

Awesome! Congratulations on completing your first challenge on the @boardname@.
