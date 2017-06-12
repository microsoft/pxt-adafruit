# Code

### ~avatar avatar

Make a stopwatch out of your @boardname@

### ~

We'll now code the logic for your stopwatch.

## Duration: ~45 minutes

## Step 1

The stopwatch has two distinct phases - one when we're deciding how long the countdown will last for, and one when the stopwatch is performing the countdown.

Let's code the initial configuration.
We'll need to store the time in a `variable`, so go ahead and create a `variable` called `time`, and initialize it to `1` when the program starts.
We'll also use the [photon](https://makecode.adafruit.com/reference/light/photon-forward) to control the pixels, so move the photon by `0` to make it show up on the board.

```blocks
let time = 0
time = 1
light.pixels.photonForward(0)
```

## Step 2

Next, we want to be able to configure the delay of the stopwatch. Let's use [button A](https://makecode.adafruit.com/reference/input/button/on-event) for that.
When button A is clicked, we will change our `time` variable by `1`.

We also want a visual representation on how long the countdown will be, so we will move our photon forward by `1` to turn on the next pixel each time the button is clicked.

However, there are only 10 pixels on the board, so we'll want to limit the time to 10.
Let's use an `if` block inside our button A click logic to only increase the time if it is `smaller than 10` - otherwise, we won't increase the time anymore.

```blocks
let time = 0
input.buttonA.onEvent(ButtonEvent.Click, () => {
    if (time < 10) {
        light.pixels.photonForward(1)
        time += 1
    }
})
time = 1
light.pixels.photonForward(0)
```

## Step 3

We are now ready to code the countdown. Let's make it so the countdown starts when you clap your hands!
Drag an [`on loud sound`](https://makecode.adafruit.com/reference/input/on-loud-sound) block to your project.

Several things will happen when the stopwatch is counting down. First, the photon will start travelling backwards and erasing the pixels.
For that, we need to `flip` the photon, and set it to `eraser` mode, so go ahead and add that to the `on loud sound` event.

```blocks
let time = 0
input.onLoudSound(() => {
    light.pixels.photonFlip()
    light.pixels.setPhotonMode(PhotonMode.Eraser)
})
input.buttonA.onEvent(ButtonEvent.Click, () => {
    if (time < 10) {
        light.pixels.photonForward(1)
        time += 1
    }
})
time = 1
light.pixels.photonForward(0)
```

## Step 4

The next thing that happens during the countdown is that the remaining time slowly decreases until it reaches 0.
To indicate that the time is decreasing, we will turn off the pixels one by one.

We can use a `repeat loop` for that, inside which we'll move the photon by `1` each time.
We need to repeat this once for each second that was added to our `time` variable, so drag a `repeat` loop inside the loud sound logic,
and use our `time` variable as the repeat count. Once that is done, make the photon move by `1` inside the repeat loop.

```blocks
let time = 0
input.onLoudSound(() => {
    light.pixels.photonFlip()
    light.pixels.setPhotonMode(PhotonMode.Eraser)
    for (let i = 0; i < time; i++) {
        light.pixels.photonForward(1)
    }
})
input.buttonA.onEvent(ButtonEvent.Click, () => {
    if (time < 10) {
        light.pixels.photonForward(1)
        time += 1
    }
})
time = 1
light.pixels.photonForward(0)
```

## Step 5

If you run the stopwatch now and you set the time and clap your hands, you'll notice a small problem with our code: the time ticks down to 0 almost instantly!
That's not a very useful stopwatch. To make the time tick down slower, we'll need to add a `pause` before we move the photon.
Add a `700` ms pause inside the repeat loop, before the photon is moved.

Let's also add a sound effect when time ticks down. Drag a `play tone` block before the `pause` you just added.
You can leave the default note of `Middle C`. For the duration, drag a `number` block and set it to `300` - combined with our `pause`,
it will take exactly one second for a pixel to disappear.

```blocks
let time = 0
input.onLoudSound(() => {
    light.pixels.photonFlip()
    light.pixels.setPhotonMode(PhotonMode.Eraser)
    for (let i = 0; i < time; i++) {
        music.playTone(262, 300)
        loops.pause(700)
        light.pixels.photonForward(1)
    }
})
input.buttonA.onEvent(ButtonEvent.Click, () => {
    if (time < 10) {
        light.pixels.photonForward(1)
        time += 1
    }
})
time = 1
light.pixels.photonForward(0)
```

## Step 6

We're almost done! We just need some code to signal that the countdown is done.
Let's mimick the sound of an alarm clock.

Start off by adding a new `repeat loop` after your other repeat loop.
This new loop will repeat `3` times.
Next, drag two `play tone` blocks inside that new repeat loop, and add a `pause` of `100` ms between the two.
Alarm sounds are usually high pitched, so set the two `play tone` blocks to `High C`, and set their duration to `100` ms by dragging `number` blocks.

Finally, add a `show animation` block after the second `play tone`, to add some visual effects to the alarm.
Choose your favorite animation (`sparkle` works great), and set the duration to `700` ms.

```blocks
let time = 0
input.onLoudSound(() => {
    light.pixels.photonFlip()
    light.pixels.setPhotonMode(PhotonMode.Eraser)
    for (let i = 0; i < time; i++) {
        music.playTone(262, 300)
        loops.pause(700)
        light.pixels.photonForward(1)
    }
    for (let i = 0; i < 3; i++) {
        music.playTone(523, 100)
        loops.pause(100)
        music.playTone(523, 100)
        light.pixels.showAnimation(light.animation(LightAnimation.Sparkle), 700)
    }
})
input.buttonA.onEvent(ButtonEvent.Click, () => {
    if (time < 10) {
        light.pixels.photonForward(1)
        time += 1
    }
})
time = 1
light.pixels.photonForward(0)
```

Your stopwatch is ready to be used! Download this code to your wristband-mounted @boardname@ and use the A button to increase the time.
Then, when ready, clap your hands and watch the pixels tick down until time's up and the alarm rings!