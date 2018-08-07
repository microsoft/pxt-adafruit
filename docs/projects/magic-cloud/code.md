# Coding the Cloud
## @description @boardgame@ cloud: coding challenge

## ~ avatar avatar 

Program the Adafruit to make it light up blue and play Twinkle Twinkle Little Star!

## ~

**Concepts**

* Neopixels
* Light
* Brightness
* Music 

## Duration ~ 30 minutes

## Step 1: Setting up the Neopixels 

Clip the **GND** wire to the **GND** pin on the Adafruit. Clip the **DO** wire to the **A1** pin on the Adafruit. Clip the **5V** wire to the **VOUT** pin on the Adafruit.

![wires](/static/cp/projects/magic-cloud/wires.jpg)

## Step 2: Coding the Neopixels

Open [MakeCode](@homeurl@) in your web browser.

From ``||loops:LOOPS||``, drag out a ``||loops:on start||``. From ``||light:LIGHT||``, click on ``||light:NEOPIXEL||`` from the drop down menu. Drag out a ``||light:set strip to||``, ``||light:strip set all pixels to||``, and ``||light:strip set brightness 0||``  and place them under the ``||loops:on start||``. Keep clicking on the + on the ``||light:set strip to||`` and type in 30. For ``||light:strip set all pixels to||``, change the color to blue. For ``||light:strip set brightness 0||``, type in 200.

```blocks
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.A1, 30)
strip.setAll(0x007fff)
strip.setBrightness(200)
```
## Step 3: Coding the Adafruit to Light Up

From ``||light:LIGHT||``, drag out a ``||light:show ring||`` and drag it into the ``||loops:forever||``. Turn everything to blue. From ``||light:LIGHT||`` drag out a ``||light:set brightness 0||`` and place that into the ``||loops:forever||``. Type in 200 instead of 0. 

```blocks
forever(function () {
    light.showRing(
    `blue blue blue blue blue blue blue blue blue blue`
    )
    light.setBrightness(200)
})
```

## Step 3: Music

From ``||music:MUSIC||``, drag out ``||music:set volume||`` and place it in the ``||loops: on start||``. Type in 155.

```blocks
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.A1, 30)
strip.setAll(0x007fff)
strip.setBrightness(200)
music.setVolume(155)
```

In ``||music:MUSIC||``, drag out ``||music:play sound power up||`` and put it in ``||loops:on start||``. Click on the **ADVANCED** drop down menu and go to ``||text:TEXT||``. Drag out a ``||text:" "||`` and place it in the ``||music:play sound power up||`` where it says ``||music:power up||``. In the blank box, type in the notes, rests, and beats of _Twinkle Twinkle Little Star_ : 

![notes](/static/cp/projects/magic-cloud/notes.jpg)

Make sure to type in the note first, then the octave (in this case, itll always be 4), then a : following how many beats you want it to play for. Here is an example:

``` blocks
music.playSound("c4:2")
```

After you type in one note, follow that up by a rest. Type in r:2 afterwards, like this:

```blocks
music.playSound("c4:2 r:2 ")
```

Keep typing in the notes on the sheet one by one, with the rests. Experiment with the rests and beats until you get the perfect song!

## Complete

You have now finished coding your Adafruit! 
Download all the code to your @boardname@ and start making your cloud!

### ~button /projects/magic-cloud/make
NEXT: Start making!
### ~