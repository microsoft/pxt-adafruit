# Code

## ~avatar avatar

Make your @boardname@ a hot potato

## ~

Let's build code for animation and music in the @boardname@ which is our hot potato. When the animation stops the player holding the hot potato is out.

## Duration: ~45 minutes

## Step 1

The hot potato game needs a trigger to start. Let's use [button A](/reference/input/button/on-event). When button **A** is clicked the hot potato game starts. 

We need hot potato game to run for a random duration. Let's create a variable `delay` which holds the amount of time the game runs. It is anywhere between 500 to 2000. You can fine tune this variable based on your need. See [variables](/blocks/variables/var) and [random](/blocks/math) for reference.

```blocks
let delay = 0
input.buttonA.onEvent(ButtonEvent.Click, () => {
    delay = 500 + Math.randomRange(0, 1501)
})
```

## Step 2

Animation and music goes inside the [while](/blocks/loops/while) loop and when the `while` loop complets, player is out. Variable `delay` is reduced by 50 for every iteration of the loop. Game runs until the `delay` is less than or equal zero.

```blocks
let delay = 0
input.buttonA.onEvent(ButtonEvent.Click, () => {
    delay = 500 + Math.randomRange(0, 1501)
    while (delay > 0) { 
        delay += -50
    }
})
```

## Step 3

Let's add music and animation inside the `while` loop. Add music using [playTone](/reference/music/play-tone) block for 1/4 beat. Add rainbow animation using the [showAnimation](/reference/light/show-animation) block. 

```blocks
let delay = 0
input.buttonA.onEvent(ButtonEvent.Click, () => {
    delay = 500 + Math.randomRange(0, 1501)
    while (delay > 0) {
        music.playTone(262, music.beat(BeatFraction.Quarter))                
        light.showAnimation(light.rainbowAnimation, delay)
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
    delay = 500 + Math.randomRange(0, 1501)
    while (delay > 0) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        light.showAnimation(light.rainbowAnimation, delay)
        delay += -50
    }
    music.playSound(music.sounds(Sounds.Wawawawaa))    
    light.showAnimation(light.theaterChaseAnimation, 2500)
})
```

If you need to raise the volume of the speaker add the following block to your project

```blocks
music.setVolume(100);
```

Hot potato game is ready to be played. Download this code to your hot potato built from @boardname@ (See Make) and try it out with your friends in a circle.
