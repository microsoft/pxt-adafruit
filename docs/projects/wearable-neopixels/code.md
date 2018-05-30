# Coding the wearable NeoPixels

## @description @boardname@ wearable NeoPixels: coding activity

## ~avatar avatar

Create effects and animations for the pixels on your clothing.

## ~

**Block categories used:**

* Pixels
* Animations
* Input sensors (Shake)


## Duration: 25 minutes

## Create a pixel strip

Open [MakeCode](@homeurl@) in your web browser.

Go to the ``||variables:VARIABLES||`` drawer and create a variable called ``strip``. Find the ``||variables:set strip to 0||`` block and place it inside an ``||loops:on start||`` loop in your Workspace.

In ``||light:LIGHT||``, go to the ``||light:NEOPIXEL||`` drawer below it and drag a ``||light:create strip on A1||`` block from out and replace the `0` in ``||variables:set strip to 0||`` with it.

What this does is tell the @boardname@ that there is a strip of pixels attached to a particular pin. Change the pin `A1` to whichever pin you plan to use, and replace `24` with the actual number of lights you’re using.

```blocks
let strip = light.createStrip(pins.A1, 24)
```
## Create another strip if needed

If you have strips of NeoPixels coming off of two pins, go to the ``||variables:VARIABLES||`` drawer and make another variable called ``strip2`` or something similar. 

```blocks
let strip = light.createStrip(pins.A1, 7)
let strip2 = light.createStrip(pins.A4, 7)
```

Now you can decide how you want your lights to behave. You might want them in a ``||loops:forever||`` loop, constantly displaying. Motion activation is another fun input to use. Whatever you choose, be sure to select your light blocks from the ``||light:NEOPIXEL||`` drawer, and if you are using more than one strip, be sure to use the dropdown menu to select the correct strip (``strip`` vs ``strip2``). 

## Pixel effects

Here are some examples. Just be sure that you’re getting your blocks from the ``||light:NEOPIXEL||`` drawer, not the ``||light:LIGHT||`` drawer right above it. 

### Purple flash to animation

This code has the strip display the rainbow animation for two seconds, then turn all NeoPixels purple for one second in a ``||loops:forever||`` loop.

```blocks
let strip = light.createStrip(pins.A1, 7)
forever(function () {
    strip.showAnimation(light.rainbowAnimation, 2000)
    strip.setAll(0x7f00ff)
})
```

### Sparkle and shake

This code uses a ``||loops:forever||`` loop to have the @boardname@ itself continuously display a sparkle animation. ``|loops:on start||``, it sets the strip to purple. ``||input:on shake||``, the NeoPixels in the strip are cleared (go blank), and then display the sparkle animation for three seconds, and then they go back to purple. 

```blocks
let strip: light.NeoPixelStrip = null
input.onGesture(Gesture.Shake, function () {
    strip.clear()
    strip.showAnimation(light.rainbowAnimation, 1000)
    strip.setAll(0x7f00ff)
})
strip = light.createStrip(pins.A1, 7)
strip.setAll(0x7f00ff)
forever(function () {
    light.showAnimation(light.sparkleAnimation, 500)
})
```

### Sparkle in the dark

This code makes the lights respond to light levels. It says, “If the light level is greater than 30, set the NeoPixel strip to blue. Else, if the light level is 30 or lower, turn off all the blue NeoPixels, show a Sparkle animation on them for three seconds, turn them orange for half a second, and keep doing that loop while the light level is 30 or lower.”

```blocks
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.A1, 7)
forever(function () {
    if (input.lightLevel() > 30) {
        strip.setAll(0x0000ff)
    } else {
        strip.showAnimation(light.sparkleAnimation, 2000)
        strip.setAll(0xff8000)
        pause(500)
    }
})
```

### Fade a color

This code makes use of a variable to create a slow strobing effect where the lights glow on and fade off (see the [Coding](#) chapter for more on variables). The variable ``brightness`` is initially `50`. The ``||loops:forever||`` loop sets all the NeoPixels in the Forever loop to pink, and then the first Repeat Loop sets the brightness of those pink NeoPixels to whatever is currently in the variable ``brightness``, which initially is `50`. It then adds one to the ``brightness`` variable, and loops around and repeats the process 200 times. By the end of that first loop, the brightness of the NeoPixels has gone from `50`, somewhat dim, to `250`, almost the maximum. The next loop repeats the process in reverse to fade the NeoPixels back off. The result is a glowing and fading effect.

```blocks
let brightness = 0
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.A1, 7)
brightness = 50
forever(function () {
    strip.setAll(0xff00ff)
    for (let i = 0; i < 200; i++) {
        strip.setBrightness(brightness)
        brightness += 1
    }
    for (let i = 0; i < 200; i++) {
        strip.setBrightness(brightness)
        brightness += -1
    }
})
```

### Strobe a color

This code is similar to the the one above, except that the Brightness variable is being changed by `4` instead of `1`. The loops only repeat `25` times instead of `200` because they are changing the variable ``brightness`` by `4` rather than by `1`. The bigger jump in brightness results in more of a strobing effect rather than fading and glowing.

```blocks
let brightness = 0
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.A1, 7)
brightness = 50
forever(function () {
    strip.setAll(0xff00ff)
    for (let i = 0; i < 25; i++) {
        strip.setBrightness(brightness)
        brightness += 4
    }
    for (let i = 0; i < 25; i++) {
        strip.setBrightness(brightness)
        brightness += -4
    }
})
```

You can also set the ``brightness`` variable to zero in the ``||loops:on start||`` block in order to have the NeoPixels turn completely off at one point in the loop. Just keep in mind that the brightness range is 0 - 255, so it wouldn’t make sense to use numbers outside that range.

## Good work!

Chose one of the effects here and show off your new NeoPixel fashion!
