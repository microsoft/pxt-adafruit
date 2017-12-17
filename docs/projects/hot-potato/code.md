# Code

## ~avatar avatar

Make your @boardname@ a hot potato

## ~

Let's build some code for animation and music in the @boardname@ which is, of course, our hot potato. We'll make it work so that when the animation the player holding the hot potato is **out!!!**.

## Duration: ~45 minutes

## Step 1

The hot potato game needs a trigger to start. Let's use ``||input:on button A click||``. When button **A** is clicked the hot potato game starts. 

We want the hot potato game to run for a random length of time. Let's create a variable `delay` which holds the amount of time the game runs for. It's somewhere from 500 to 2000 milliseconds, which is actually from 1/2 second up to 2 seconds of time. You can fine tune this variable if you want shorter or long times. See [variables](/blocks/variables/var) and [random](/blocks/math) to learn how `delay` gets its value.

```blocks
let delay = 0
input.buttonA.onEvent(ButtonEvent.Click, () => {
    delay = 500 + Math.randomRange(0, 1501)
})
```

## Step 2

An animation and some music will go inside the ``||loops:while||`` loop. When the ``||loosp:while||`` loop completes, the player holding the hot potato is out. Our variable `delay` is reduced by 50 for every iteration of the loop. The game runs until `delay` is less than or equal to zero.

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

Let's put the music and animation inside the ``||loops:while||`` loop. Add music using a ``||music:playTone||`` block for `1/4` beat. Add the `rainbow` animation using the ``||light:showAnimation||`` block. 

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

You see that we use the `delay` variable in the ``||light:show animation||`` block, right? This is the number of milliseconds the animation is shows for. The value in the variable `delay` is constantly getting smaller and smaller. Because of this, you will notice that the ``||loops:while||`` loop seems to run faster and faster as the game nears the end. By this time your potato tosses will need to happen really fast!

Try this out in the simulator.

## Last step

Now add a `theater chase` animation and `wawawawaa` sound for when the game ends (the ``||loops:while||`` loop finishes). You can change the animation or sound using the drop down selection in their blocks.

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

If you need to raise the volume of the speaker, add this extra block to your project.

```blocks
music.setVolume(100);
```

OK, the hot potato game is ready to play. Download this code to your hot potato built from @boardname@ (we made the potato in [Make](../make)). Gather your friends in a circle and try it out!
