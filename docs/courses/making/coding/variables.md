# Variables

We can think of a variable as being like a plastic bin in a classroom that can hold crafting supplies. You could label a bin “glue sticks” and put ten inside. At the beginning of class, you might walk around the room, and once every two seconds as you hand them out, you remove a glue stick until the bin has zero glue sticks in it. Forty-five minutes later, you can then collect the glue sticks at the rate of one every two seconds until the bin has ten in it again.

![Collection bins](/static/courses/making/coding/collecting-bins.jpg)

The variable bin goes from ten down to zero after 20 seconds, then it pauses for 45 minutes, and then it goes from zero up to ten in 20 seconds. You could label the “glue sticks” bin with “pencils,” and while it would serve the same functional purpose of holding glue sticks, it would be confusing. The best practice is to label the variable with what it actually contains rather than with a label that is humorous or vague.

Let us take the example of controlling the intensity of the NeoPixels displayed on the Circuit Playground Express with a variable.  Our goal is to fade the NeoPixels on and off by using a variable. Click on the Variables drawers and then Make a Variable. We will create a variable called “intensity.” It’s like making a plastic bin and labeled it “intensity.”

![Make a variable button](/static/courses/making/coding/make-a-variable.jpg)

![New variable dialog](/static/courses/making/coding/new-variable-dialog.jpg)

To begin with, we’ll put `0` in the intensity bin. That means that we need an “On Start Set” loop from the Loops drawer, and we will set ``intensity`` to `0`. Variables need to be told what they hold. It’s like having a bin labelled “pencils” and having zero pencils in the bin to start with.

```blocks
let intensity = 0
```

Next, let’s pick an input to start our program, such as ``||input:on button A click||``. Inside that input, we’ll need to set the color of the NeoPixels and we’ll need a ``||light:set bightness||`` block as well (the initial default value will be `20`).

```blocks
let intensity = 0
input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.setAll(0xff0000)
    light.setBrightness(20)
})
```

Now, if we click on the ``||variables:VARIABLES||`` drawer again, we can pull out the ``intensity`` variable block and drag that into the ``||light:set Brightness||`` block where it will replace the default value of `20`. We want the intensity of the NeoPixels to increase from zero, so let’s also drag out a ``||variables:change intensity by||`` block and place that after the ``||light:set brightness||`` block.

```blocks
let intensity = 0
input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.setAll(0xff0000)
    light.setBrightness(intensity)
    intensity += 1
})
```

If you press button **A** on the Simulator now, first all NeoPixels will know they should be red, then the brightness will be set to whatever is in the ``intensity`` variable (which right now is zero), and then that zero will change by `1`, so the brightness will be set to `1`. The max brightness of the NeoPixels is 255, so you won’t even be able to see a brightness value of just 1. Back to the pencil bin metaphor, it’s like we have an empty bin and then immediately put just one pencil in it. Let’s increase that to something more impressive.

Back in the ``||loops:LOOPS||`` drawer, pull out a ``||loops:pause||`` block, place it after the ``||variables:change intensity by||`` block, and type in the number `50` instead of the default 100 ms. Also drag out a ``||loops:repeat 4 times||`` loop. If you hover in the space between the blue ``||light:set all pixels to||`` and the ``||light:set brightness||`` blocks, a gray version of the ``||loops:repeat||`` loop will open up, and you can let it encircle the other three blocks. Type ``100`` instead of the default of `4` in the ``||loops:repeat 4 times||``.

![Drag and place a repeat loop](/static/courses/making/coding/drag-repeat-loop.gif)

```blocks
let intensity = 0
input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.setAll(0xff0000)
    for (let i = 0; i < 100; i++) {
        light.setBrightness(intensity)
        intensity += 1
        pause(50)
    }
})
```

Now, press button **A** in the Simulator. The NeoPixels will be told their color is red, then they will be set at whatever number is in the “intensity” variable (which initially is zero). Next, the “intensity” variable will grow by one. Then, after a 50 ms pause, the process will repeat for a total of 100 times, with the “intensity” variable growing by one each time. The empty pencil bin will have one pencil dropped in every 50 ms until it contains 100 pencils.

```blocks
let intensity = 0
input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.setAll(0xff0000)
    for (let i = 0; i < 4; i++) {
        light.setBrightness(intensity)
        intensity += 1
        pause(50)
    }
    music.playSound(music.sounds(Sounds.PowerUp))
    for (let i = 0; i < 4; i++) {
        light.setBrightness(intensity)
        intensity += -1
        pause(50)
    }
})
```

Finally, let’s fade the NeoPixels back off. Right click / alt click / control click / two finger tap on the Repeat block. This will call up a menu that lets you duplicate whatever is in the loop.

![Duplicate the repeat loop](/static/courses/making/coding/copy-repeat-loop.gif)

Place that second Repeat 100 Times loop and the three blocks it contains below the first loop. To fade the lights back off, we’ll want to Change “intensity” by -1 this time. To mark the point when the NeoPixels begin their fade, go to the Music drawer in the Toolbox and drag a Play Sound Power Up block in-between the two loops.


Building this program gives some insight into how variables work. They are like the storage bins that let you collect, disburse, and control data.


