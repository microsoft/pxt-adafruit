# Coding the Confetti Box 

### ~avatar avatar 
Using the microphone (sound sensor) and code, let's make the confetti box drop a
surprise on your friend!
### ~ 

### Duration: ~25 minutes 

## What's in the code?

### Concepts
* Sensors (Sound)
* Pixels
* Pin functions (servo)

### Blocks

```cards
music.powerUp.play()
light.showRing("red red red red red red red red red red")
pins.A2.servoWrite(180)
pause(0)
``` 
## Let's code it!

### ``|Step 1|`` - Testing the servo

1. Open [MakeCode](@homeurl@) in your web browser.
2. From **PINS**, drag out a ``||pins:servo write||`` block, and place it inside a ``||loops:forever||`` loop to change the position of the servo. Make sure you set the pin to ``A1``. The servo can only turn between 0° and 180°, so try playing around with values inside that range and watch the servo turn. To close the door, a value of about 180° should work. Also, to open the door, a value of about 90° should work well.
3. Connect the @boardname@ to your computer with the USB cable and click **Download**. Follow the instructions to move the code to your @boardname@.

```blocks
forever(function () {
    pins.A1.servoWrite(90)
})
```

### ``|Step 2|`` - Sound sensing

1. In **LOGIC**, find the ``||logic:if then else||`` block. Drag the block and place it inside a ``||loops:forever||`` loop. Also from **LOGIC** grab a comparison, ``||logic:0 < 0||``, block and set it to the greater than symbol. Finally, from **INPUT** take a ``||input:sound level||`` block and place it inside the comparison block. 

2. From **LIGHT** drag two ``||light:show ring||`` blocks into the workspace. Place one block into the ``||logic:if||`` part and the other into the ``||logic:else||`` part of the ``||logic:if then else||`` statement. Customize the neopixel lights however you like, but make sure the rings are different from each other.

3. Input a value in the comparison block to compare the sound value to. Then move your code to the @boardname@. Try making some noise and see if you observe the lights changing. Experiment by comparing different sound level values.

```blocks
forever(function () {
    if (input.soundLevel() > 18) {
        light.showRing(
        "red red red red red red red red red red"
        )
    } else {
        light.showRing(
        "green green green green green green green green green green"
        )
    }
})
```

### ``|Step 3|`` - Putting it together

1. From **PINS** drag two ``||pins:servo write||`` blocks into the workspace. Place one ``||pins:servo write||`` block into the ``||logic:if||`` part and the other into the ``||logic:else||`` part of the ``||logic:if then else||`` statement.
2. The door should open when a loud sound is heard, so set one ``||pins:servo write||`` block to turn the servo to 180° (closing the door) and the other to 90° (opening the door). 
3. Adding a ``||loops:pause||`` block will give the servo enough time to rotate when a sound is heard, so drag a ``||loops:pause||`` block into the ``||logic:if||`` part of the ``||logic:if then else||`` statement as well.
4. Download the code to your @boardname@ and try clapping. You should see the lights changing colors and your door opening and closing.

```blocks
forever(function () {
    if (input.soundLevel() > 18) {
        light.showRing(
        "red red red red red red red red red red"
        )
        pins.A1.servoWrite(90)
        pause(1000)
    } else {
        pins.A2.servoWrite(180)
        light.showRing(
        "green green green green green green green green green green"
        )
    }
})
```
### ``|Step 4|`` - Play a tone

For extra effect, you can play a tone when the loud sound is detected. In **MUSIC** the ``||music:play sound||`` block lets you to choose from a variety of premade tunes. Pick one and try it out! Place it in the ``||logic:if||`` part of the ``||logic:if then else||`` statement.

Download the code again to the @boardname@ to add some flare!

```blocks
forever(function () {
    if (input.soundLevel() > 18) {
        light.showRing(
        "red red red red red red red red red red"
        )
        pins.A1.servoWrite(90)
        music.powerDown.playUntilDone()
        pause(1000)
    } else {
        pins.A2.servoWrite(180)
        light.showRing(
        "green green green green green green green green green green"
        )
    }
})
```

## Good work!

You’ve finished! Fill your box with confetti, tissue paper, or another light-weight material. Then, place it above a door or window and wait for your unsuspecting victim to enter. When they do, clap loudly and watch as confetti spills down onto them. PRANKED!
