## Activities: Logic and Comparison

We will begin practicing with Logic and Comparison blocks by utilizing the @boardname@ light sensor input. You may need to adjust the light sensor number depending on the conditions where you’re working. Remember that the sensor’s scale is 0-255. In a classroom, the @boardname@s of students on one side of the room light be reading around `35` while on the other side nearer the windows, the reading might be closer to `50`.

Begin by dragging an ``||logic:if then else||`` block from the Logic drawing into a forever loop in the Workspace.

```blocks
forever(function () {
    if (true) {
    	
    } else {
    	
    }
})
```

Next, take out a comparison block. It actually doesn’t matter which one you select since the drop-down menu allows you select whichever kind of comparison you want to make. Let’s choose greater thant block, ``||logic:0 > 0||``.

```blocks
forever(function () {
    if (0 > 0) {
    	
    } else {
    	
    }
})
```

Next, from the ``||input:INPUT||`` drawer, scroll down to find the ``||input:light level||`` block. Place it on the left and type a fairly low number, like `10`, on the right. The program is now saying, “Forever check to see if the light level the sensor is reading is greater than 10”.

```blocks
forever(function () {
    if (input.lightLevel() > 10) {
    	
    } else {
    	
    }
})
```

Next, let’s put different blocks in the two conditions. The example code here now reads, “If the light sensor reading is greater than 10, keep the NeoPixels purple; else, play the sound Jump Up until it’s done and show the Color Wipe animation".

```blocks
forever(function () {
    if (input.lightLevel() > 10) {
        light.setAll(0x7f00ff)
    } else {
        music.playSoundUntilDone(music.sounds(Sounds.JumpUp))
        light.showAnimation(light.colorWipeAnimation, 500)
    }
})
```

There are a couple of aspects to note here. First, remember that when you introduce a light level input into a program on the Workspace, the Simulator automatically adds the ability to simulate that condition. Here, the half yellow / half gray circle acts like a slider. Slide the mid-point up or down to simulate different light conditions. To test in real life, load the program on a @boardname@. Cupping your hands over the device should shade it enough to trigger the “else” condition.

```sim
forever(function () {
    if (input.lightLevel() > 10) {
        light.setAll(0x7f00ff)
    } else {
        light.showAnimation(light.colorWipeAnimation, 500)
    }
})
```

A second aspect to note is that we want to play the sound until it finishes using:

```block
music.playSoundUntilDone(music.sounds(Sounds.JumpUp))
```
Instead of just:

```block
music.playSound(music.sounds(Sounds.JumpUp))
```

The reason is that if we just use ``||music:play sound jump up||``, the low light triggers the sound to play, but then the program immediately checks what the light level is again, finds it low, and triggers another ``||music:play sound jump up||`` before the first one has time to finish. This interruption keeps happening as long the light is low. When teaching students, a great problem-solving activity is having them start with ``||music:play sound jump up||`` (or any sound). Challenge them to describe the problem and experiment with solutions. Swapping the ``||music:play sound jump up until done||`` block is one solution, but a second solution involves putting a ``||loops:pause||`` block in after the music block. This gives the ``||music:play sound jump up||`` block time to finish.

```blocks
forever(function () {
    if (input.lightLevel() > 10) {
        light.setAll(0x7f00ff)
    } else {
        music.playSound(music.sounds(Sounds.JumpUp))
        pause(1000)
        light.showAnimation(light.colorWipeAnimation, 500)
    }
})
```

We will expand our work with conditionals to include booleans, and we will make use of the @boardname@ accelerometer. Like cell phones and tablet computers, the @boardname@ can tell if it’s being tilted or accelerated. This is a fun and useful input for many activities and projects.

As above, pull out a Forever loop into the Workspace and put an ``||logic:if then else||`` block inside. 

```blocks
forever(function () {
    if (true) {
    	
    } else {
    	
    }
})
```

For the next couple of steps, you’ll go to the ``||logic:LOGIC||`` drawer in the Toolbox to find comparison and Boolean blocks (diamond shaped). 

![Comparison blocks](/static/courses/making/coding/comparison-blocks-dual.jpg)

First, drop an ``||logic:or||`` block into the ``||logic:if then else||``.

```blocks
forever(function () {
    if (false || false) {
    	
    } else {
    	
    }
})
```

Next, place comparison blocks inside the two blank spots in the ``||logic:or||`` conditon. This can be a little tricky because sometimes the Workspace thinks you’re trying to replace the ``||logic:or||`` block with the comparison one. Hover over the target diamond opening until it becomes outlined in white. Release it, and repeat for the other diamond opening. 

![Drop a condition into comparison](/static/courses/making/coding/dropin-condition.gif)

Use the drop-down menu arrows to change the first comparison to “greater than” and the second to “less than.” 

```blocks
forever(function () {
    if (0 > 0 || 0 < 0) {
    	
    } else {
    	
    }
})
```

Now, go to the ``||input:INPUT||`` drawer of the Toolbox and scroll down to find the ``||input:rotation degree||`` block. Pitch, the default of this block, refers to tipping the @boardname@ side to side. Roll would be tipping the device forward and backward. Keep the setting on pitch, and change the values the pitch is being compared with to `15` and `-15`. 

```blocks
forever(function () {
    if (input.rotation(Rotation.Pitch) > 15 || input.rotation(Rotation.Pitch) < -15) {
    	
    } else {
    	
    }
})
```

Now, pick two different animations from the Light drawer to place in the ``||logic:if then else||``. Let’s read what this code is saying. First, it’s in a ``||loops:forever||`` loop, so it will be continuously checking the accelerometer for tilt. Second, here’s what the loop is saying: If the @boardname@ is tilted more than 15 degrees to one side or -15 degrees to the other, then show the “rainbow” animation. Else, show the “running lights” animation. This means that there are 30 degrees of tilt that will show the “running lights” animation, while anything else will show “rainbow.” The logic used here is, again, similar to what we might use in everyday life. “If the movie plays before 2 o’clock or if the movie plays after 8 o’clock, I can see it; else, I will have to miss it.”

```blocks
forever(function () {
    if (input.rotation(Rotation.Pitch) > 15 || input.rotation(Rotation.Pitch) < -15) {
        light.showAnimation(light.rainbowAnimation, 500)
    } else {
        light.showAnimation(light.runningLightsAnimation, 500)
    }
})
```

What if we want one animation for positive tilt, one for neutral tilt, and a third for negative tilt? Hit the plus sign on the ``||logic:if then else||`` block to add a third option. 

```blocks
forever(function () {
    if (true) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
```

Now, follow the directions above, but include three animations, one for greater than 15 degrees of tilt, one for less than negative 15 degrees of tilt, and one for anything in-between 15 and -15. Use the Simulator or download onto a device to see your code in action.

```blocks
forever(function () {
    if (input.rotation(Rotation.Pitch) > 15) {
        light.showAnimation(light.runningLightsAnimation, 500)
    } else if (input.rotation(Rotation.Pitch) < -15) {
        light.showAnimation(light.cometAnimation, 500)
    } else {
        light.showAnimation(light.sparkleAnimation, 500)
    }
})
```