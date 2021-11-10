# Coding the Cloud

## @description @boardgame@ cloud: coding challenge

## ~ avatar avatar 

Program the @boardname@ to make it show a nice blue glow and play Twinkle Twinkle Little Star!

## ~

**Concepts**

* Neopixels
* Light
* Brightness
* Music 

## Duration ~ 30 minutes

## Step 1: Setting up the Neopixels 

Clip the **GND** wire to the **GND** pin on the board. Clip the **DO** wire to the **A1** pin and the **5V** wire to the **VOUT** pin on the board.

![wires](/static/cp/projects/musical-cloud/wires.jpg)

## Step 2: Coding the NeoPixels

Open [MakeCode](@homeurl@) in your web browser.

From ``||loops:LOOPS||``, drag out an ``||loops:on start||`` block. From ``||light:LIGHT||``, click on ``||light:NEOPIXEL||`` just below it. From there, drag out ``||light:set strip to||``, ``||light:strip set all pixels to||``, and ``||light:strip set brightness 0||``. Place them inside the ``||loops:on start||``.  Click on the **(+)** in the ``||light:set strip to||`` and type in `30`. For ``||light:strip set all pixels to||``, change the color to blue. For ``||light:strip set brightness||``, type in `200`.

```blocks
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.A1, 30)
strip.setAll(0x007fff)
strip.setBrightness(200)
```

## Step 3: Coding the @boardname@ to light up

From ``||light:LIGHT||``, drag out a ``||light:show ring||`` and put it into the ``||loops:forever||``. Turn everything to blue. From ``||light:LIGHT||`` drag out a ``||light:set brightness||`` and place it just below the ``||light:show ring||``. Type in `200` instead of `0` for brightness. 

```blocks
forever(function () {
    light.showRing(
    `blue blue blue blue blue blue blue blue blue blue`
    )
    light.setBrightness(200)
})
```

## Step 4: Create the song

From ``||music:MUSIC||``, get a ``||music:set volume||`` and place at the bottom of ``||loops: on start||``. Type in ``155`` for the volume level.

```blocks
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.A1, 30)
strip.setAll(0x007fff)
strip.setBrightness(200)
music.setVolume(155)
```

Go to ``||variables:VARIABLES||`` and click ``Make a Variable...``. Name your new variable ``twinkle``. Pull out the ``||variables:set twinkle to||`` and place it at the bottom of ``||loops:on start||``. Click **ADVANCED** and in ``||text:TEXT||``, get the ``""`` string block and place it in the ``||variables:set twinkle to||``.

```blocks
let strip: light.NeoPixelStrip = null
let twinkle = ""
strip = light.createStrip(pins.A1, 30)
strip.setAll(0x007fff)
strip.setBrightness(200)
music.setVolume(155)
twinkle = ""
```

In the blank string  `""` for ``||variables:twinkle||``, type in the notes, rests, and beats of the _Twinkle Twinkle Little Star_ song. 

The way to do this is to type in the note first, then the octave (in this case, it will always be 4), then a `:` symbol followed by how many beats you want it to play for. Here is an example:

```block
let twinkle = "c4:2"
```

After you type in one note, you can add a rest before another note plays. Type in `r:2` after your first note if you want a rest for 2 beats before the next note, like this:

```block
let twinkle = "c4:2 r:2 c4:2"
```

Keep typing in the notes one by one, with the rests. Experiment with the rests and beats until you get the perfect song! You don't have to use rests but they might make your song sound better. The first line of the song without any rests is this:

```block
let twinkle = "c4:1 c4:1 g4:1 g4:1 a4:1 a4:1 g4:2"
```

Here are all the notes and beats for the song: 

| | | | | | | |
|-|-|-|-|-|-|-|
| **TWINKLE** | | **TWINKLE** | | **LITTLE** | | **STAR** |
| `c4:1 c4:1` | | `g4:1 g4:1` | | `a4:1 a4:1` | | `g4:2` |
| **HOW I** | | **WONDER** | | **WHAT YOU** | | **ARE** |
| `f4:1 f4:1` | | `e4:1 e4:1` | | `d4:1 d4:1` | | `c4:2` |
| **UP ABOVE** | | **THE WORLD** | | **SO** | | **HIGH** |
| `g4:1 g4:1 f4:1` | | `f4:1 e4:1` | | `e4:1` | | `d4:2` |
| **LIKE A** | | **DIAMOND** | | **IN THE** | | **SKY** |
| `g4:1 g4:1` | | `f4:1 f4:1` | | `e4:1 e4:1` | | `d4:2` |
| **TWINKLE** | | **TWINKLE** | | **LITTLE** | | **STAR** |
| `c4:1 c4:1` | | `g4:1 g4:1` | | `a4:1 a4:1` | | `g4:2` |
| **HOW I** | | **WONDER** | | **WHAT YOU** | | **ARE** |
| `f4:1 f4:1` | | `e4:1 e4:1` | | `d4:1 d4:1` | | `c4:2` |

## Step 5: Play Music

Now, to play the song, you have to create a new melody. To do this, you have to switch from **Blocks** to **JavaScript**. So, click on the **JavaScript** tab to go to the JavaScript editor.

Below the last line of code, type ``let song = new music.Melody(twinkle)``. This makes a new ``||music:Melody||`` _object_ which we'll play the song from. So, add one more line of code at the end that says ``song.play()``.

```typescript
forever(function () {
    light.showRing(
    `blue blue blue blue blue blue blue blue blue blue`
    )
    light.setBrightness(200)
})
let strip: light.NeoPixelStrip = null
let twinkle = ""
strip = light.createStrip(pins.A1, 30)
strip.setAll(0x007fff)
strip.setBrightness(200)
music.setVolume(155)
twinkle = "c4:1 c4:1 g4:1 g4:1 a4:1 a4:1 g4:2"
let song = new music.Melody(twinkle)
song.play()
```

## Complete

You have now finished coding your musical cloud. Download all the code to your @boardname@ and start making your cloud sing!

### ~button /projects/musical-cloud/make

NEXT: Start making!

### ~
