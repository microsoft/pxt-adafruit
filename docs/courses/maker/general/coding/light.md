# Light

The ``||light:show ring||`` block gives a representation of the ten multi-colored NeoPixel lights on the Circuit Playground Express. Click on one of the eight color wedges to select a color, then click on the circles representing lights on the board to turn that light the selected color. Click again or use the grey circle in the middle to turn the light off.

```block
forever(function () {
    light.showRing(
    `yellow blue yellow purple blue green green orange red orange`
    )
})
```

``||light:show animation||`` offers six pre-programmed light animations that you can select with the drop-down menu. The "for 500 ms" time selection lets you pick how long the animation will run before moving on to the next block of code. If the animation is in a forever loop, then it will run continuously. MakeCode uses milliseconds (ms) to time events. With 1000 milliseconds in a second, 500 ms is half a second.

![Show animation selections](/static/courses/maker/general/coding/show-animation.png)

``||light:set all pixels to||`` sets all the lights to a specific color. Click the color selector for a variety of color choices or look farther down the ``||light:LIGHT||`` Toolbox drawer and find the ``||light:red green blue||`` block under the **Color** category. You can replace the color picker with the ``||light:red green blue||`` block to specify an RGB color value to display.

![Set pixel color choices](/static/courses/maker/general/coding/set-all-pixels.png)

The ``||light:graph||`` block lights up a fraction of the 10 total possible lights on the Circuit Playground Express. Click on the plus **(+)** sign at the end of the block to show the maximum value to graph.

```block
light.graph(0)
light.graph(3, 10)
```

You can simply graph a value up to a maximum value – for example ``||light:graph 3 up to 10||`` would light up 3 of the 10 NeoPixel lights. ``||light:gGraph 5 up to 10||`` would light five lights. Since the graph feature works like a fraction, any two numbers that equal the fraction "½" will light up half the lights. So, using ``||light:graph||`` with (5,10), (1,2), or (25, 50) would all result in 5 of the 10 lights being turned on. If you enter a fraction that doesn’t divide evenly into ten, like ``||light:graph 3 up to 7||``, the Circuit Playground Express rounds up or down in determining how many NeoPixels to light.

```blocks
light.graph(5, 10)
```

```sim
light.graph(5, 10)
```

The most common use of the ``||light:graph||`` block is to display a sensor value using the lights. For example, if you drag in the acceleration block into the first slot of the ``||light:graph||`` block, the Circuit Playground will turn on lights depending on the acceleration values. Similarly, for sound, light or other sensor values.

```block
loops.forever(function () {
    light.graph(input.acceleration(Dimension.X))
})
forever(function () {
    light.graph(input.acceleration(Dimension.Y))
})
forever(function () {
    light.graph(input.lightLevel())
})
forever(function () {
    light.graph(input.soundLevel())
})
```

The "``||light:set brightness||`` block controls the brightness of the light blocks that follow it. The Circuit Playground Express is impressively bright when at the max brightness of `255`, so you can dim the lights by choosing a lower value. 

![Set brightness slider](/static/courses/maker/general/coding/set-brightness.png)

The **Photon** blocks give you more control in creating custom animations. You can "draw" with the photon using blocks like ``||light:photon pen up||`` or ``||light:photon pen down||``, ``||light:photon forward||``, or ``||light:photon flip||`` to change direction.

```cards
light.photonForward(0)
light.photonFlip()
light.setPhotonPosition(0)
light.setPhotonPenHue(0)
light.setPhotonMode(PhotonMode.PenUp)
```
<br/>

For example, this program will set the light colors, then the "Photon" (bright white light) will continue to advance around the board clockwise, until button **A** is pressed when it will switch directions.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.photonFlip()
})
light.setPhotonPenHue(200)
forever(function () {
    light.photonForward(1)
    pause(200)
})
```

The ``||light:stop all animations||`` block stops animations currently running. This can be useful if you have an animation running, but you want something different to happen when, for example, the Circuit Playground Express is tilted to one side. Without the ``||light:stop all animations||`` block, the first animation would have to conclude before the new one began. 

```block
light.stopAllAnimations()
```

The "Clear" block explicitly turns off all the lights.

```block
light.clear()
```

In this example, the rainbow animation shows at the beginning of our program. When the Circuit Playground Express is tilted to the left, the rainbow animation will stop playing and the comet animation will start. When button **A** is clicked, the comet animation will stop playing and all the lights will be turned off.

```blocks
input.onGesture(Gesture.TiltLeft, function () {
    light.stopAllAnimations()
    light.showAnimation(light.cometAnimation, 5000)
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.stopAllAnimations()
    light.clear()
})
light.showAnimation(light.rainbowAnimation, 5000)
```
