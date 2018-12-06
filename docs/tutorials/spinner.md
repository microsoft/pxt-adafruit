# Spinner

Create a spinner for choosing a random number between 1 and 10!

### Step 1

Drag an ``||on shake||`` block onto the workspace.

```blocks
input.onGesture(Gesture.Shake, () => {
})
```

### Step 2

Next, create a variable named "delay" and set it equal to 0. This variable will control the delay at each step of the spinner.

```blocks
let delay = 0
input.onGesture(Gesture.Shake, () => {
    delay = 0
})
```

### Step 3

Create another variable named "times" and drag it below the delay block. This variable will control how long the spinner spins.

```blocks
let delay = 0
let times = 0
input.onGesture(Gesture.Shake, () => {
    delay = 0
    times = 0
})
```

### Step 4

Use the ``||random||`` and ``||+||`` blocks to set "times" to a random number between 50 and 59

```blocks
let delay = 0
let times = 0
input.onGesture(Gesture.Shake, () => {
    delay = 0
    times = Math.random(10) + 50
})
```

### Step 5

Now add a ``||repeat||`` block and use the "times" variable to set how many times it runs.

```blocks
let delay = 0
let times = 0
input.onGesture(Gesture.Shake, () => {
    delay = 0
    times = Math.random(10) + 50
    for (let i = 0; i < 5; i++) {

    }
})
```


### Step 6

Within the ``||repeat||`` block, drag a ``||photon forward||`` block to add the spin effect.

```blocks
let delay = 0
let times = 0
input.onGesture(Gesture.Shake, () => {
    delay = 0
    times = Math.random(10) + 50
    for (let i = 0; i < 5; i++) {
        light.pixels.photonForward(1)
    }
})
```

### Step 7

Next, use the ``||play tone||`` and ``||random||`` blocks to play a random tone at each step.

```blocks
let delay = 0
let times = 0
input.onGesture(Gesture.Shake, () => {
    delay = 0
    times = Math.random(10) + 50
    for (let i = 0; i < 5; i++) {
        light.pixels.photonForward(1)
        music.playTone(Math.random(501), music.beat(BeatFraction.Half))
    }
})
```

### Step 8

Drag the "delay" variable into the "beat" section of the ``||play tone||`` block to control how long the note plays.

```blocks
let delay = 0
let times = 0
input.onGesture(Gesture.Shake, () => {
    delay = 0
    times = Math.random(10) + 50
    for (let i = 0; i < 5; i++) {
        light.pixels.photonForward(1)
        music.playTone(Math.random(501), delay)
    }
})
```

### Step 9

To make the spinner slow down over time, use a ``||variable change||`` block to change the "delay" variable by 5.

```blocks
let delay = 0
let times = 0
input.onGesture(Gesture.Shake, () => {
    times = Math.random(10) + 50
    delay = 0
    for (let i = 0; i < times; i++) {
        light.pixels.photonForward(1)
        music.playTone(Math.random(501), delay)
        delay += 5
    }
})
```

### Step 10

You now have a working spinner. Enjoy!