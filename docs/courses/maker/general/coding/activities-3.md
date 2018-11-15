# Activities for Logic and Comparison


We will begin practicing with ``||logic:LOGIC||`` and **Comparison** blocks by utilizing the Circuit Playground Express’ light sensor input. You may need to adjust the light sensor number depending on the conditions where you’re working. Remember that the sensor’s scale is 0-255. In a classroom, the Circuit Playground Expresses of students on one side of the room light be reading around 35 while on the other side nearer the windows, the reading might be closer to 50.

Begin by dragging an ``||logic:if then else||`` block from the ``||logic:LOGIC||`` Toolbox drawer into a ``||loops:forever||`` loop in the Workspace.

```block
forever(function () {
    if (true) {
    	
    } else {
    	
    }
})
```

Next, take out a comparison diamond. It actually doesn’t matter which one you select since the drop-down menu allows you select whichever kind of comparison you want to make. Let’s choose “greater than” or **&gt;**.


```block
forever(function () {
    if (0 > 0) {
    	
    } else {
    	
    }
})
```

Next, from the ``||input:INPUT||`` Toolbox drawer, scroll down to find the ``||input:light level||`` lozenge. Place it on the left and type a fairly low number, like `10`, on the right. The program is now saying, “Forever check to see if the light level the sensor is reading is greater than 10”.

```block
forever(function () {
    if (input.lightLevel() > 10) {
    	
    } else {
    	
    }
})
```

Next, let’s put different blocks in the two conditions. The example code here now reads, “If the light sensor reading is greater than 10, keep the NeoPixels purple; otherwise, play the sound jump up until it’s done and show the color wipe animation”.

```blocks
forever(function () {
    if (input.lightLevel() > 10) {
        light.setAll(0x7f00ff)
    } else {
        music.playSoundUntilDone(music.sounds(Sounds.JumpUp))
        light.showAnimation(light.rainbowAnimation, 500)
    }
})
```

There are a couple of aspects to note here. First, remember that when you introduce a ``||input:light level||`` input into a program on the Workspace, the Simulator automatically adds the ability to simulate that condition. Here, the half yellow / half gray circle on the Simulator acts like a slider. Slide the mid-point up or down to simulate different light conditions. To test in real life, load the program on a Circuit Playground Express. Cupping your hands over the device should shade it enough to trigger the “else” condition.

```sim
forever(function () {
    if (input.lightLevel() > 10) {
        light.setAll(0x7f00ff)
    } else {
        music.playSoundUntilDone(music.sounds(Sounds.JumpUp))
        light.showAnimation(light.rainbowAnimation, 500)
    }
})
```

A second aspect to note is that we used the ``||music:play sound until done||`` block rather than just the ``||music:play sound||`` block.

```block
music.playSound(music.sounds(Sounds.PowerUp))
```

```block
music.playSoundUntilDone(music.sounds(Sounds.PowerUp))
```

The reason is that if we just use ``||music:play sound||`` block, the low light triggers the sound to play, but then the program immediately checks what the light level is again, finds it low, and triggers another ``||music:play sound||`` before the first one has time to finish. This interruption keeps happening as long the light is low. When teaching students, a great problem-solving activity is having them start with the ``||music:play sound||`` block and challenge them to describe the problem and 
experiment with solutions. Swapping the ``||music:play sound until done||`` block is one solution, but a second solution involves putting a ``||loops:pause||`` block in after the music block. This gives the ``||music:play sound||`` block time to finish.

```blocks
forever(function () {
    if (input.lightLevel() > 10) {
        light.setAll(0x7f00ff)
    } else {
        music.playSoundUntilDone(music.sounds(Sounds.JumpUp))
        pause(1000)
        light.showAnimation(light.rainbowAnimation, 500)
    }
})
```

We will expand our work with conditionals to include Booleans (true and false values), and we will make use of the Circuit Playground Express’ accelerometer. Like cell phones and tablet computers, the Circuit Playground Express can tell if it’s being tilted or moved. This is a fun and useful input for many activities and projects.

As above, pull out a ``||loops:forever||`` loop into the Workspace and put an ``||logic:if then else||`` block inside.

```block
forever(function () {
    if (true) {
    	
    } else {
    	
    }
})
```

For the next couple of steps, you’ll go to the ``||logic:LOGIC||`` Toolbox drawer to find **Comparison** and **Boolean** diamond blocks.

![Comparison blocks in toolbox](/static/courses/maker/general/coding/comparison-boolean.jpg)

First, drop an ``||logic:or||`` diamond block into the ``||logic:if then else||`` block.

```block
forever(function () {
    if (false || false) {
    	
    } else {
    	
    }
})
```

Next, place **Comparison** blocks inside the two diamond emply slots of the ``||logic:or||`` diamond. This can be a little tricky because sometimes the Workspace thinks you’re trying to replace the ``||logic:or||`` diamond with the comparison one. Hover over the target diamond opening until it becomes outlined in white. Release it, and repeat for the other diamond.

![Drop a comparison into if then block](/static/courses/maker/general/coding/compare-block-drop.png)

Use the drop-down menu arrows to change the first comparison to “greater than” and the second to “less than.”

```block
forever(function () {
    if (0 > 0 || 0 < 0) {
    	
    } else {
    	
    }
})
```

Now, go to the ``||input:INPUT||`` drawer of the Toolbox and scroll down to find the ``||input:rotation degree||`` lozenge. Pitch, the default of this block, refers to tipping the Circuit Playground Express side to side. Roll would be tipping the device forward and backward. Keep the setting on pitch, and change the values the pitch is being compared with to `15` and `-15`.

```block
forever(function () {
    if (input.rotation(Rotation.Pitch) > 15 || input.rotation(Rotation.Pitch) < -15) {
    	
    } else {
    	
    }
})
```

Now, pick two different animations from the ``||light:LIGHT||`` Toolbox drawer to place in the ``||logic:if then else||``. Let’s read what this code is saying. First, it’s in a ``||loops:forver||`` loop, so it will be continuously checking the accelerometer for tilt. Second, here’s what the loop is saying: If the Circuit Playground Express is tilted more than 15 degrees to one side or -15 degrees to the other side, then show the “rainbow” animation. Else, show the “running lights” animation. This means that there are 30 degrees of tilt that will show the “running lights” animation, while anything else will show “rainbow.” The logic used here is, again, similar to what we might use in everyday life. “If the movie plays before 2 o’clock or if the movie plays after 8 o’clock, I can see it; else, I will have to miss it.”

```blocks
forever(function () {
    if (input.rotation(Rotation.Pitch) > 15 || input.rotation(Rotation.Pitch) < -15) {
        light.showAnimation(light.rainbowAnimation, 500)
    } else {
        light.showAnimation(light.runningLightsAnimation, 500)
    }
})
```

What if we want one animation for positive tilt, one for neutral tilt, and a third for negative tilt? Click on the plus sign **(+)** on the ``||logic:if then else||`` block to add a third option.

```block
forever(function () {
    if (input.rotation(Rotation.Pitch) > 15 || input.rotation(Rotation.Pitch) < -15) {
        light.showAnimation(light.rainbowAnimation, 500)
    } else if (false) {
    	
    } else {
        light.showAnimation(light.runningLightsAnimation, 500)
    }
})
```

Now, modify your code to include three animations, one for greater than 15 degrees of tilt, one for less than negative 15 degrees of tilt, and one for anything in-between 15 and -15. Use the Simulator or download your program onto a device to see your code in action.

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
