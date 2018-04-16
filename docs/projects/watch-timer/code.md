# Code

## ~avatar avatar

Make a watch timer with your @boardname@

## ~

Let's make the code to get your watch timer working.

## Duration: ~25 minutes

## Step 1

The watch timer has to do two things: (1) decide how long the countdown will last, (2) make the timer count down.

Let's code the time setting.
We need to store the time in a **variable**, so go ahead and create a variable called `time`. Initialize it to `1` when the program starts.
We want to use the [photon](https://makecode.adafruit.com/reference/light/photon-forward) to control the pixels, so move the photon by `0` to make it show up on the board.

```blocks
let time = 0
time = 1
light.photonForward(0)
```

## Step 2

Next, we want to have some amount of delay for the countdown. Let's use [button A](https://makecode.adafruit.com/reference/input/button/on-event) for that.
When button `A` is clicked, we'll change our `time` variable by `1`.

We also want a way to see how much time a countdown will takes, so let's move our photon forward by `1` to turn on the next pixel each time the button is clicked.

But, there are only 10 pixels on the board, so we have to limit the time to 10.
Let's use an **if** block inside our **button A click** block to increase the time only if it is smaller
than 10 (`time < 10`). If time is still at 10, we won't increase it if the button is clicked.

```blocks
let time = 0
input.buttonA.onEvent(ButtonEvent.Click, () => {
    if (time < 10) {
        light.photonForward(1)
        time += 1
    }
})
time = 1
light.photonForward(0)
```

## Step 3

We are now ready to code the countdown. Let's make it so the countdown starts when you clap your hands!
Drag an [**on loud sound**](https://makecode.adafruit.com/reference/input/on-loud-sound) block to your project.

Several things will happen when the timer is counting down. First, the photon will start traveling backwards and erasing the pixels.
For that, we need to `flip` the photon, and set it to `eraser` mode. Go ahead and add that to the **on loud sound** event.

```blocks
let time = 0
input.onLoudSound(() => {
    light.photonFlip()
    light.setPhotonMode(PhotonMode.Eraser)
})
input.buttonA.onEvent(ButtonEvent.Click, () => {
    if (time < 10) {
        light.photonForward(1)
        time += 1
    }
})
time = 1
light.photonForward(0)
```

## Step 4

The next thing that happens during the countdown is that the remaining time slowly decreases until it reaches 0.
To show that the time is decreasing, we will turn off the pixels one by one.

We can use a **repeat** loop with a photon inside which we'll move by `1` each time.
We need to repeat this once for each second that is added to our `time` variable, so drag a **repeat** loop inside the **on loud sound** block.
Use the `time` variable as the repeat count. Once that is done, make the photon move by `1` inside **repeat**.

```blocks
let time = 0
input.onLoudSound(() => {
    light.photonFlip()
    light.setPhotonMode(PhotonMode.Eraser)
    for (let i = 0; i < time; i++) {
        light.photonForward(1)
    }
})
input.buttonA.onEvent(ButtonEvent.Click, () => {
    if (time < 10) {
        light.photonForward(1)
        time += 1
    }
})
time = 1
light.photonForward(0)
```

## Step 5

If you run the watch timer now, set the time and clap your hands, you'll notice a small problem with our code: the time ticks down to 0 almost instantly!
That's not very useful for a timer. To make the time tick down slower, we need to add a **pause** before we move the photon.
Put a `700` ms pause inside the **repeat** loop, before the photon is moved.

Let's also add a sound effect as the time ticks down. Drag a **play tone** block before the **pause** you just added.
You can leave the default note of `Middle C`. For the duration, drag in a **number** block and set it to `300`.
This time combined with our **pause** time will cause a pixel to disappear in exactly one second.

```blocks
let time = 0
input.onLoudSound(() => {
    light.photonFlip()
    light.setPhotonMode(PhotonMode.Eraser)
    for (let i = 0; i < time; i++) {
        music.playTone(262, 300)
        pause(700)
        light.photonForward(1)
    }
})
input.buttonA.onEvent(ButtonEvent.Click, () => {
    if (time < 10) {
        light.photonForward(1)
        time += 1
    }
})
time = 1
light.photonForward(0)
```

## Step 6

Getting close now, we're almost done! We just need some code to signal that the countdown is finished.
Let's mimic the sound of an alarm clock.

Start off by adding a new **repeat** loop after your other repeat loop.
This new loop will repeat `3` times.
Next, drag two **play tone** blocks inside that new repeat loop, and add a pause time of `100` ms between the two.
Alarm sounds are usually high pitched, so set the two **play tone** blocks to `High C`. Set their duration to `100` ms using two more **number** blocks.

Finally, add a **show animation** block after the second **play tone** to make some visual effects for the alarm.
Choose your favorite animation (`sparkle` works great), and set the duration to `700` ms.

```blocks
let time = 0
input.onLoudSound(() => {
    light.photonFlip()
    light.setPhotonMode(PhotonMode.Eraser)
    for (let i = 0; i < time; i++) {
        music.playTone(262, 300)
        pause(700)
        light.photonForward(1)
    }
    for (let i = 0; i < 3; i++) {
        music.playTone(523, 100)
        pause(100)
        music.playTone(523, 100)
        light.showAnimation(light.sparkleAnimation, 700)
    }
})
input.buttonA.onEvent(ButtonEvent.Click, () => {
    if (time < 10) {
        light.photonForward(1)
        time += 1
    }
})
time = 1
light.photonForward(0)
```

Your watch timer is ready! Download this code to your wristband-mounted @boardname@ and use the **A** button to increase the time.
When you're ready, clap your hands and watch the pixels tick down until the time's up and the alarm rings!