# Coding with NeoPixel Strips

You can attach strips of NeoPixels to **VOUT** / **3.3V**, **GND**, and a pin from **A0** - **A7**, then enjoy long light displays. Adafruit sells [NeoPixel strips that end in Alligator clips](https://www.adafruit.com/product/3811), which makes projects with the Circuit Playground Express easy to get going.

https://www.youtube.com/watch?v=uLBVGegMdmc
<br/>

First, attach the red clip to **VOUT** / **3.3V**, the white to a pin, and black to **GND**.

![Neopixel connections](/static/courses/maker/general/coding/neopixels.jpg)

Next, you’ll need an ``||loops:on start||`` block to setup your NeoPixel strip. 
Then, click on the ``||light:LIGHT||`` Toolbox drawer, you’ll notice there is a ``||light:NEOPIXEL||`` drawer that appears below it. Click on that and drag a ``||variables:set strip||`` block into your ``||loops:on start||`` block.

![Neopixel blocs in toolbox](/static/courses/maker/general/coding/neopixel-toolbox.png)

Click the plus sign **(+)** on the ``||light:create strip||`` lozenge twice to show the optional fields. This lets you define which Pin your NeoPixel strip will be connected to, and how many lights your strip has. In this example, I am connecting my NeoPixel strip to pin **A1** on my Circuit Playground Express, and my strip has 30 lights on it.

```blocks
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.A1, 30)
```

## Activities for NeoPixel Strips

Try the code below. It tells the Circuit Playground Express that there is a 30 pixel-long strip on **A1**, and then it instructs the board to continuously show the rainbow animation on those 30 pixels.

```blocks
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.A1, 30)
forever(function () {
    strip.showAnimation(light.rainbowAnimation, 500)
})
```

You can run animations this way, but you can also define chunks of NeoPixels as units that act together.

![30 pixel strip with a 5 pixel substrip](/static/courses/maker/general/coding/neopixel-strip2.jpg)

This code first defines the main strip of 30 pixels, and then it defines a section of that main strip as a sub-group named ``Traveler``. Remember that strips of pixels are zero-indexed, so the first five pixels are actually numbers 0-4. (If I wanted a second set of five pixels, I might name it ``Traveler2``, and its range would be “from 5 with 5 pixels”). The ``||loops:forever||`` loop here just has all pixels rotate by one every 35 ms. This makes the five pink pixels appear to travel along the green background.

```blocks
let Traveler: light.NeoPixelStrip = null
let Main_Strip: light.NeoPixelStrip = null
Main_Strip = light.createStrip(pins.A1, 30)
Traveler = Main_Strip.range(0, 5)
Main_Strip.setAll(0x00ff00)
Traveler.setAll(0xff00ff)
forever(function () {
    Main_Strip.move(LightMove.Rotate, 1)
    pause(35)
})
```

Here is some more sample code for a strip of 30 NeoPixels in length. ``||loops:on start||``, it defines the fact that there will be 30 NeoPixels at pin A1. It then creates six variables called ``Sub1`` - ``Sub6``. Each of these states where the range it controls starts and how many NeoPixels are in that range. Again, remember that it is zero-indexed, so the first five pixels will be 0-4, the next five 5-9, etc. The ``||loops:on start||`` block ends by giving each range of NeoPixels a color to start with. Next, the ``||loops:forever||`` loop just advances each pixel by one, pauses for 20 ms, then advances the pixels again. Because the Circuit Playground Express knows the strip is 30 long, it starts the process over from the correct spot.

```blocks
let Sub6: light.NeoPixelStrip = null
let Sub5: light.NeoPixelStrip = null
let Sub4: light.NeoPixelStrip = null
let Sub3: light.NeoPixelStrip = null
let Sub2: light.NeoPixelStrip = null
let Sub1: light.NeoPixelStrip = null
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.A1, 30)
Sub1 = strip.range(0, 5)
Sub2 = strip.range(5, 5)
Sub3 = strip.range(10, 5)
Sub4 = strip.range(15, 5)
Sub5 = strip.range(20, 5)
Sub6 = strip.range(25, 5)
Sub1.setAll(0xff8000)
Sub2.setAll(0xffff00)
Sub3.setAll(0x00ff00)
Sub4.setAll(0x00ffff)
Sub5.setAll(0x7f00ff)
Sub6.setAll(0xff00ff)
forever(function () {
    strip.move(LightMove.Rotate, 1)
    pause(20)
})
```

![Lighted NeoPixel strip in a coil](/static/courses/maker/general/coding/neopixel-strip3.jpg)

The following code adds a twist to the code above. It includes a variable called ``fade``, which helps control the brightness of the NeoPixels. One ``||loops:forever||`` loop rotates the NeoPixels by one every 100 ms, and the other ``||loops:forever||`` loop makes the brightness of the NeoPixels grow from `0` to `200`, and then dim back down again. If you want to play with this code, remember that the maximum brightness is `255`. Change the rate of your glowing on / fading off by pausing for more or less time and by changing the value of the variable by smaller or larger amounts.

```blocks
let Sub6: light.NeoPixelStrip = null
let Sub5: light.NeoPixelStrip = null
let Sub4: light.NeoPixelStrip = null
let Sub3: light.NeoPixelStrip = null
let fade = 0
let Sub2: light.NeoPixelStrip = null
let Sub1: light.NeoPixelStrip = null
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.A1, 30)
Sub1 = strip.range(0, 5)
Sub2 = strip.range(5, 5)
Sub3 = strip.range(10, 5)
Sub4 = strip.range(15, 5)
Sub5 = strip.range(20, 5)
Sub6 = strip.range(25, 5)
Sub1.setAll(0xff8000)
Sub2.setAll(0xffff00)
Sub3.setAll(0x00ff00)
Sub4.setAll(0x00ffff)
Sub5.setAll(0x7f00ff)
Sub6.setAll(0xff00ff)
fade = 0
forever(function () {
    strip.move(LightMove.Rotate, 1)
    pause(20)
})
forever(function () {
    for (let i = 0; i < 100; i++) {
        strip.setBrightness(fade)
        pause(20)
        fade += 2
    }
    for (let i = 0; i < 100; i++) {
        strip.setBrightness(fade)
        pause(20)
        fade += -2
    }
})
```

Here are a couple of fun ways to take advantage of the Circuit Playground Express’ sensors. Use the NeoPixel strip ``||light:graph||`` block to make input from sound, acceleration, or another sensor visual. Remember that the ``||light:graph||`` block acts like a fraction. The numerator in the example is the ``||input:sound level||`` input lozenge. The denominator has been raised from `30`, the actual total of NeoPixels on the strip, to `60` in order to make it less sensitive.

```blocks
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.A1, 30)
forever(function () {
    strip.graph(input.soundLevel(), 60)
})
```

Try the same idea, but now with the accelerometer controlling your pixels.

https://www.youtube.com/watch?v=yhPXdtDgdr8
<br/>

In this example, acceleration in the X axis (i.e., tilting the Circuit Playground Express) is the numerator that controls how many NeoPixels are lit up. Acceleration is measured in milligravities (1/1000 of a gravity), so we can use `1000` as the denominator for the graph fraction. 

```blocks
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.A1, 30)
forever(function () {
    strip.graph(input.acceleration(Dimension.X), 1000)
})
```
