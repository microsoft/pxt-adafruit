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
Let's use an `if` block inside our button A click logic to only increase the time if it is below 10 - otherwise, we won't increase the time anymore.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, () => {
    if (time < 10) {
        light.pixels.photonForward(1)
        time += 1
    }
})
```

## Step 3

We can now increase the time delay, but there are only 10 pixels on the board, so we'll want to limit the time to 10.
Let's use an `if` block inside our button A click logic to only increase the time if the time is below 10 - otherwise, we won't increase the time.

Drag an `if` block to the code, and move your existing button A code inside the newly placed `if`.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, () => {
    if (time < 10) {
        light.pixels.photonForward(1)
        time += 1
    }
})
```

## Step 4

We are now ready to code the countdown. Let's make it so the countdown starts when you clap your hands!
Drag an [`on loud sond`](https://makecode.adafruit.com/reference/input/on-loud-sound) block to your project.

```blocks
input.onLoudSound(() => {
    
})
```

Several things will happen when the stopwatch is counting down. The first one is that the photon will start travelling backwards and erasing the pixels.
For that, we need to `flip` the photon, and set it to `eraser` mode.

```blocks
input.onLoudSound(() => {
    light.pixels.photonFlip()
    light.pixels.setPhotonMode(PhotonMode.Eraser)
})
```

## Step 5

The next thing that happens during the countdown is that the remaining time slowly decreases until it reaches 0.
We will want to show that the time is decreasing by turning off the pixels one by one.

We will use a `repeat loop` for that, inside which we'll move the photon by `1` each time.
We need to repeat this once for each second that was added to our `time` variable.

```blocks
input.onLoudSound(() => {
    light.pixels.photonFlip()
    light.pixels.setPhotonMode(PhotonMode.Eraser)
    for (let i = 0; i < time; i++) {
        light.pixels.photonForward(1)
    }
})
```

## Step 6

If you try the program now, you'll 


```blocks
input.onLoudSound(() => {
    light.pixels.photonFlip()
    light.pixels.setPhotonMode(PhotonMode.Eraser)
    for (let i = 0; i < time; i++) {
        music.playTone(262, 300)
        loops.pause(700)
        light.pixels.photonForward(1)
    }
    light.pixels.clear()
    for (let i = 0; i < 3; i++) {
        music.playTone(523, 100)
        loops.pause(100)
        music.playTone(523, 100)
        light.pixels.showAnimation(light.animation(LightAnimation.Sparkle), 700)
    }
})
```






The hot potato game needs a trigger to start. Let's use [button A](https://makecode.adafruit.com/reference/input/button/on-event). When button A is clicked the hot potato game starts. 

We need hot potato game to run for a random duration. Let's create a variable `delay` which holds the amount of time the game runs. It is anywhere between 500 to 2000. You can fine tune this variable based on your need. See [variables](https://makecode.adafruit.com/blocks/variables/var) and [random](https://makecode.adafruit.com/blocks/math) for reference.

```blocks
let delay = 0
input.buttonA.onEvent(ButtonEvent.Click, () => {
        delay = 500 + Math.random(1501)
})
```


## Step 2


Animation and music goes inside the [while](https://makecode.adafruit.com/blocks/loops/while) loop and when the `while` loop complets, player is out. Variable `delay` is reduced by 50 for every iteration of the loop. Game runs until the `delay` is less than or equal zero.

```blocks
let delay = 0
input.buttonA.onEvent(ButtonEvent.Click, () => {
    delay = 500 + Math.random(1501)
    while (delay > 0) { 
        delay += -50
    }
})

```

## Step 3

Let's add music and animation inside the `while` loop. Add music using [playTone](https://makecode.adafruit.com/reference/music/play-tone) block for 1/4 beat. Add rainbow animation using the [showAnimation](https://makecode.adafruit.com/reference/light/show-animation) block. 

```blocks
let delay = 0
input.buttonA.onEvent(ButtonEvent.Click, () => {
    delay = 500 + Math.random(1501)
    while (delay > 0) {
        music.playTone(262, music.beat(BeatFraction.Quarter))                
        light.pixels.showAnimation(light.animation(LightAnimation.Rainbow), delay)
        delay += -50
    }
})
```
Notice the use of the `delay` variable in the `show animation` block. This is a amount of milliseconds the animation is shown. The variable `delay` is constantly reducing. Hence you get the feeling of while loop executing faster and faster as the game nears the end.

Try this out in the simulator.

## Last step

Now add a `theater chase` animation and `wawawawaa` playSound once the game ends (completes the while loop). You can change the animation and playSound using the drop down selection in these blocks.

```blocks
let delay = 0
input.buttonA.onEvent(ButtonEvent.Click, () => {
    delay = 500 + Math.random(1501)
    while (delay > 0) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        light.pixels.showAnimation(light.animation(LightAnimation.Rainbow), delay)
        delay += -50
    }
    music.playSound(music.sounds(Sounds.Wawawawaa))    
    light.pixels.showAnimation(light.animation(LightAnimation.TheaterChase), 2500)
})

```

If you need to raise the volume of the speaker add the following block to your project

```blocks
music.setVolume(100);
```

Hot potato game is ready to be played. Download this code to your hot potato built from @boardname@ (See Make) and try it out with your friends in a circle.
