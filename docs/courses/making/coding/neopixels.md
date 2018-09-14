# NeoPixel Strips

You can attach strips of NeoPixels to **VOUT** / **3.3V**, **GND**, and a pin from **A0** - **A7**, then enjoy long light displays. Adafruit sells NeoPixel strips that end in Alligator clips, which makes projects with the @boardname@ easy to get going.

https://www.youtube.com/watch?v=uLBVGegMdmc 
<br/>

First, attach the red clip to **VOUT** / **3.3V**, the white to a pin, and black to **GND**.

![NeoPixel strip connected to board](/static/courses/making/coding/neopixel-connect.jpg)

Next, you’ll need an ``||loops:on start||`` block. Make a variable called ``mainStrip`` or something similar, then find ``||light:create strip on pin A1 with pixels||`` in the ``||light:NEOPIXEL||`` drawer of the Toolbox.

![NeoPixel blocks in toolbox](/static/courses/making/coding/neopixel-blocks.jpg)

The ``||light:create strip on with pixels||`` lozenge lets you define for the @boardname@ what will be happening at the pin you specify. You’ll enter the number of pixels your strip has.

## Activities for NeoPixel Strips

Try the code below. It tells the @boardname@ that there is a 30 pixel-long strip on **A1**, and then it instructs the board to continuously show the rainbow animation on those 30 pixels.

```blocks
let mainStrip: light.NeoPixelStrip = null
mainStrip = light.createStrip(pins.A1, 30)
forever(function () {
    mainStrip.showAnimation(light.rainbowAnimation, 500)
})
```

You can run animations this way, but you can also define chunks of NeoPixels as units that act together.

![Smaller NeoPixel strips inside a bigger strip](/static/courses/making/coding/neopixel-substrip.jpg)

This code first defines the main strip of 30 pixels, and then it defines a section of that main strip as a sub-group named ``traveler``. Remember that strips of pixels are zero-indexed, so the first five pixels are actually numbers 0 - 4 (if I wanted a second set of five pixels, I might name it ``traveler2``, and its range would be “from 5 with 5 pixels”). The ``||loops:forever||`` loop here just has all pixels rotate by one every 35 ms. This makes the five pink pixels appear to travel along the green background.

```blocks
let traveler: light.NeoPixelStrip = null
let mainStrip: light.NeoPixelStrip = null
mainStrip = light.createStrip(pins.A1, 30)
traveler = mainStrip.range(0, 5)
mainStrip.setAll(0x00ff00)
traveler.setAll(0xff0080)
forever(function () {
    mainStrip.move(LightMove.Rotate, 1)
    pause(35)
})
```

Here is some more sample code for a strip of 30 NeoPixels in length. Inside ``||loops:on start||`` it defines the fact that there will be 30 NeoPixels at pin **A1**. It then creates six variables called ``sub1`` - ``sub6``. Each of these states where the range it controls starts and how many NeoPixels are in that range (again, remember that it is zero-indexed, so the first five pixels will be 0-4, the next five 5-9, etc.). The ``||loops:on start||`` block ends by giving each range of NeoPixels a color to start with. Next, the ``||loops:forever||`` loop just advances each pixel by one, pauses for 20 ms, then advances the pixels again. Because the @boardname@ knows the strip is 30 pixels long, it starts the process over from the correct spot.

```blocks
let strip = light.createStrip(pins.A1, 30)
let sub1 = strip.range(0, 5)
let sub2 = strip.range(5, 5)
let sub3 = strip.range(10, 5)
let sub4 = strip.range(15, 5)
let sub5 = strip.range(20, 5)
let sub6 = strip.range(25, 5)
sub1.setAll(0xff8000)
sub2.setAll(0xffff00)
sub3.setAll(0x00ff00)
sub4.setAll(0x00ffff)
sub5.setAll(0x7f00ff)
sub6.setAll(0xff0080)
forever(function () {
    strip.move(LightMove.Rotate, 1)
    pause(20)
})
```

![Lighted NeoPixel strip in a coil](/static/courses/making/coding/neopixel-strip-coil.jpg)

The following code adds a twist to the code above. It includes a variable, here called ``fade``, which helps control the brightness of the NeoPixels. One ``||loops:forever||`` loop rotates the NeoPixels by one every 100 ms, and the other ``||loops:forever||`` loop makes the brightness of the NeoPixels grow from `0` to `200`, and then dim back down again. If you want to play with this code, remember that the maximum brightness is `255`. Change the rate of your glowing on / fading off by pausing for more or less time and by changing the value of the variable by smaller or larger amounts.

```blocks
let strip = light.createStrip(pins.A1, 30)
let sub1 = strip.range(0, 5)
let sub2 = strip.range(5, 5)
let sub3 = strip.range(10, 5)
let sub4 = strip.range(15, 5)
let sub5 = strip.range(20, 5)
let sub6 = strip.range(25, 5)
let fade = 0
sub1.setAll(0xff8000)
sub2.setAll(0xffff00)
sub3.setAll(0x00ff00)
sub4.setAll(0x00ffff)
sub5.setAll(0x7f00ff)
sub6.setAll(0xff0080)
fade = 0
forever(function () {
    strip.move(LightMove.Rotate, 1)
    pause(100)
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

Here are a couple of fun ways to take advantage of the @boardname@ sensors. Use the ``||light:strip graph up to||`` block to make input from sound, acceleration, or another sensor visual. Remember that the ``||light:strip graph up to||`` block acts like a fraction. The numerator in the example is the ``||input:sound level||`` input lozenge. The denominator has been raised from 30, the actual total of NeoPixels on the strip, to 60 in order to make it less sensitive.

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

In this example, acceleration in the X axis (ie, tilting the @boardname@) is the numerator that controls how many NeoPixels are lit up. Acceleration is measured in milligravities (1/1000 of a gravity), so we can use 1000 as the denominator for the graph fraction.

```blocks
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.A1, 30)
forever(function () {
    strip.graph(input.acceleration(Dimension.X), 1000)
})
```