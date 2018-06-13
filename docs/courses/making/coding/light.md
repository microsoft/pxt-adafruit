# Light

The ``||light:show ring||`` block gives a representation of the ten multi-colored NeoPixel lights on the @boardname@. Click on one of the eight color wedges to select a color, then click on the circles representing lights on the board to turn that light the selected color. Click again or use the grey circle in the middle to turn the light off.

```blocks
forever(function () {
    light.showRing(
    `yellow blue yellow purple blue green green yellow red yellow`
    )
})
```

## Animations

``||light:show animation||`` offers six pre-programmed light animations that you can select with the drop-down menu. The “for 500 ms” time selection lets you pick how long the animation will run before moving on to the next block of code (if the animation is in a forever loop, then it will run continuously). MakeCode uses milliseconds (ms) to time events. With 1000 milliseconds in a second, 500 ms is half a second.

![Show animation dropdown](/static/courses/making/coding/fe-animation.jpg)

## Set color

``||light:set all pixels to||`` sets all the lights to a specific color. Click the color selector for a variety of color choices or look farther down the Light Toolbox drawer and find the “red green blue” block under the “Color” category. You can replace the color picker with the “red green blue” block to specify an RGB color value to display.

![Pixel color picker](/static/courses/making/coding/fe-color.jpg)

```blocks
light.setAll(light.rgb(132, 0, 64))
```

## Graph

The ``||light:graph||`` block lights up a fraction of the total possible lights. ``||light:graph 0 up to 10||`` would light zero of the ten lights. ``||light:graph 5 up to 10||`` would light five lights. Since the graph feature works like a fraction though, any two numbers that equal the fraction "1/2" will light up half the lights. So, .5 and 1, 1 and 2, 4 and 8, 25 and 50 all result in 5 of the 10 lights being turned on. Likewise, ``||light:graph 8 up to 10||`` and ``||light:graph 4 up to 5||`` would both light up eight of the lights. If you enter a fraction that doesn’t divide evenly into ten, like ``||light:graph 3 up to 7||``, the @boardname@ rounds up or down in determining how many NeoPixels to light.

```blocks
light.graph(5, 10)
```

```sim
light.graph(5, 10)
```

The most common use of the graph block is to display a sensor value using the lights. For example, if you drag in the acceleration block into the first slot of the Graph block, and change the maximum value to `1023` in the second slot of the ``||light:graph||`` block, the Circuit Playground will turn on lights depending on the acceleration values. Similarly, for sound, light or other sensor values, use the sensor lozenge block and whatever its highest possible value is (often 255) to light up NeoPixels that represent a fraction of the total.

```blocks
forever(function () {
    light.graph(input.acceleration(Dimension.X), 1023)
})

forever(function () {
    light.graph(input.soundLevel(), 255)
})
```

## Brightness

The ``||light:set brightness||`` block controls the brightness of the light blocks that follow it. The @boardname@ is impressively bright when at the max brightness of `255`, so you can dim the lights by choosing a lower value.

![Brightness slider](/static/courses/making/coding/fe-brightness.jpg)

## Photons

The Photon blocks give you more control in creating custom animations. You can “draw” with the photon using the blocks:

```cards
light.photonForward(0)
light.photonFlip()
light.setPhotonPosition(0)
light.setPhotonPenHue(0)
light.setPhotonMode(PhotonMode.PenUp)
```
<br/>

For example, this program will set the light colors, then the “photon” (bright white light) will continue to advance around the board clockwise, until button A is pressed when it will switch directions.

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

## Stopping animations

The ``||light:stop all animations||`` block stops animations currently running. This can be useful if you have an animation running, but you want something different to happen when, for example, the @boardname@ is tilted to one side. Without the ``||light:stop all animations||`` block, the first animation would have to conclude before the new one began.

```block
light.stopAllAnimations()
```

The ``||light:clear||`` block explicitly turns off all the lights.

```block
light.clear()
```

In this example, the rainbow animation shows at the beginning of our program. When the @boardname@ is tilted to the left, the rainbow animation will stop playing and the comet animation will start. When button **A** is clicked, the comet animation will stop playing and all the lights will be turned off.

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