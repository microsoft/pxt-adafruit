# Coding the Circuit Playground Express: Types of Code Blocks 

MakeCode for the Circuit Playground Express is a great environment both for novice coders and for those wishing to further advance their understanding. The Simulator on the left can show you how your code will perform in many scenarios and loading your code on the device gives quick and satisfying confirmation. For those who are already comfortable with coding, there are many blocks to challenge your skills, and toggling between the blocks environment and the JavaScript they represent can add more challenges and extended learning. See below for more on bridging from MakeCode blocks to JavaScript. 

This chapter will first discuss and give practice exercises for the Toolbox drawers of “input,” “light,” and “music.” We will then work with “loops” and “logic.” Finally, we will use “network,” “variables,” “math,” “pins,” and “functions.” Reading about and practicing with these blocks and concepts will not only set you up to code all of the maker projects that follow, but it will also help you establish a foundation of coding principles that you can continue to build on. If you are new to coding, don’t worry if some aspects aren’t clear to you right away. Read, practice, then cycle back to the text. You will find that things become clearer the more you work with them. 

## Inputs

An “input” is a way that a computer takes in information from the outside world. An “output” is how a computer displays information to the outside world. So, an input on the Circuit Playground Express might be pressing button A, and the output might be turning all the lights orange. Let’s describe a number of useful inputs before using them to trigger outputs. 

When you use a computer, you’re using inputs like key presses, mouse clicks, and maybe a touch screen. Apps on a tablet might respond to the input of tilting the tablet one direction or another, like when you go from landscape to portrait mode. The Circuit Playground Express has quite a few different input methods built into it. In addition to responding to button presses, it can sense motion, sound, light, touch, color, and temperature. Devices we frequently use like elevators, cell phones, automatic lights, thermostats, and car alarms also rely on these same inputs. 

Let’s look at some of the input blocks available to us in MakeCode: 
The most basic inputs are pressing buttons A, B, or A and B together.

```block
input.buttonA.onEvent(ButtonEvent.Click, function () {})
input.buttonB.onEvent(ButtonEvent.Click, function () {})
input.buttonsAB.onEvent(ButtonEvent.Click, function () {})
```

The “On Shake” input block utilizes the Circuit Playground Express’ accelerometer to detect motion. The drop-down menu reveals different options for movement of the Circuit Playground Express.

```block
input.onGesture(Gesture.Shake, function () {})
```

![Gesture menu for onGesture event](/static/courses/maker/general/coding-the-cpx/on-gesture-menu.png)

The “On Loud Sound” input triggers a response if the sound level goes above a certain point. Sound values can range from 0-255 where 0 is completely silent and 255 is the maximum volume. If you want, you can set the specific sound value which will trigger the “On Loud Sound” block. Find the “Set Loud Sound Threshold” block at the bottom of the Input Toolbox drawer and use it to define what a loud sound is (say, above 50, for example). Put it in a green “On Start” loop to establish what the sound level will be that will trigger the code to run.

```blocks
input.onLoudSound(function () {
	
})
input.setLoudSoundThreshold(50)
```

The “On Light Dark” input triggers a response if the light level goes above or below a given point. Light level values can range of 0-255 where 0 is completely dark, and 255 is the maximum brightness. If you want, you can set the specific light value which will trigger the “On Light Dark” or “On Light Bright” blocks. Find the “Set Light Threshold” block at the bottom of the Input Toolbox drawer and use it to define how bright or dark you want it to be before the Circuit Playground Express runs the code. For example, you might want code to run when the light level goes above 65, so you would say, “Set Bright Light Threshold to 65.”

```blocks
input.onLightConditionChanged(LightCondition.Bright, function () {
	
})
input.setLightThreshold(LightCondition.Bright, 65)
```

“On Switch Moved” can act as an on/off switch. Put your code in one, then put code to have everything switched off in the other. This is especially handy when accessing the battery pack’s on/off switch is difficult because of the way a project is constructed.

```block
input.onSwitchMoved(SwitchDirection.Right, function () {
    light.setAll(0xff0080)
})
input.onSwitchMoved(SwitchDirection.Left, function () {
    light.clear()
})
```

The “On temperature Hot at Degrees” block runs the code it contains when the temperature sensor reads whatever the selected value in Celsius or Fahrenheit is.

```block
input.onTemperatureConditionChanged(TemperatureCondition.Hot, 15, TemperatureUnit.Celsius, function () {
	
})
```

The diamond and lozenge-shaped input blocks can’t trigger code by themselves. Instead, they get plugged into other blocks, such as conditionals. The lozenge-shaped blocks like “Sound Level” and “Light Level” will input whatever sound level or light level your Circuit Playground Express is currently reading through its sensors. So, the number represented by the lozenge will change as the conditions of your device change.

![Input value blocks](/static/courses/maker/general/coding-the-cpx/input-values.png)

## Light

The “Show Ring” block gives a representation of the ten multi-colored NeoPixel lights on the Circuit Playground Express. Click on one of the eight color wedges to select a color, then click on the circles representing lights on the board to turn that light the selected color. Click again or use the grey circle in the middle to turn the light off.

```block
forever(function () {
    light.showRing(
    `yellow blue yellow purple blue green green orange red orange`
    )
})
```

“Show Animation” offers six pre-programmed light animations that you can select with the drop-down menu. The “for 500 ms” time selection lets you pick how long the animation will run before moving on to the next block of code. If the animation is in a forever loop, then it will run continuously. MakeCode uses milliseconds (ms) to time events. With 1000 milliseconds in a second, 500 ms is half a second.

![Show animation selections](/static/courses/maker/general/coding-the-cpx/show-animation.png)

“Set All Pixels To” sets all the lights to a specific color. Click the color selector for a variety of color choices or look farther down the Light Toolbox drawer and find the “Red Green Blue” block under the “Color” category. You can replace the color picker with the “Red Green Blue” block to specify an RGB color value to display.

![Set pixel color choices](/static/courses/maker/general/coding-the-cpx/set-all-pixels.png)

The “Graph” block lights up a fraction of the 10 total possible lights on the Circuit Playground Express. Click on the plus (“+”) sign at the end of the block to show the maximum value to graph.

```block
light.graph(0)
light.graph(3, 10)
```

You can simply graph a value up to a maximum value – for example “Graph 3 up to 10” would light up 3 of the 10 NeoPixel lights. “Graph 5 up to 10” would light five lights. Since the graph feature works like a fraction, any two numbers that equal the fraction “½” will light up half the lights. So, Graph (5,10), (1,2), (25, 50) would all result in 5 of the 10 lights being turned on. If you enter a fraction that doesn’t divide evenly into ten, like “graph 3 up to 7,” the Circuit Playground Express rounds up or down in determining how many NeoPixels to light.

```blocks
light.graph(5, 10)
```

```sim
light.graph(5, 10)
```

The most common use of the Graph block is to display a sensor value using the lights. For example, if you drag in the acceleration block into the first slot of the Graph block, the Circuit Playground will turn on lights depending on the acceleration values. Similarly, for sound, light or other sensor values.

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

The “Set Brightness” block controls the brightness of the light blocks that follow it. The Circuit Playground Express is impressively bright when at the max brightness of 255, so you can dim the lights by choosing a lower value. 

![Set brightness slider](/static/courses/maker/general/coding-the-cpx/set-brightness.png)

The Photon blocks give you more control in creating custom animations. You can “draw” with the photon using blocks like Photon Pen Up/Down, Photon Move Forward, or Photon Flip to change direction.

```cards
light.photonForward(0)
light.photonFlip()
light.setPhotonPosition(0)
light.setPhotonPenHue(0)
light.setPhotonMode(PhotonMode.PenUp)
```
<br/>

For example, this program will set the light colors, then the “Photon” (bright white light) will continue to advance around the board clockwise, until button A is pressed when it will switch directions.

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

The “Stop All Animations” block stops animations currently running. This can be useful if you have an animation running, but you want something different to happen when, for example, the Circuit Playground Express is tilted to one side. Without the “Stop All Animations” block, the first animation would have to conclude before the new one began. 

```block
light.stopAllAnimations()
```

The “Clear” block explicitly turns off all the lights.

```block
light.clear()
```

In this example, the rainbow animation shows at the beginning of our program. When the Circuit Playground Express is tilted to the left, the rainbow animation will stop playing and the comet animation will start. When button A is clicked, the comet animation will stop playing and all the lights will be turned off.

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

## Music

The first two music blocks offer a variety of preset sound effects. The “Play Sound” block will play its sound but then simultaneously move on to activate the next block. For example, if you want to play the “jump down” sound effect and have the ten NeoPixels turn green at the same time, use the “Play Sound” block. But if you want the NeoPixels to turn green only after the sound effect has ended, use the “Play Sound Until Done” block.

```cards
music.playSound(music.sounds(Sounds.PowerUp))
music.playSoundUntilDone(music.sounds(Sounds.PowerUp))
```
<br/>

![Sound choices for playSound](/static/courses/maker/general/coding-the-cpx/play-sound-menu.png)

The “Stop All Sounds” block stops sounds currently running. This can be useful if you have a sound playing, but you want something different to play when, for example, the Circuit Playground Express is tilted to one side. Without the “Stop All Sounds” block, the first sound would have to conclude before the new one began.

```blocks
input.onGesture(Gesture.TiltRight, function () {
    music.stopAllSounds()
    music.playSound(music.sounds(Sounds.JumpUp))
})
music.playSound(music.sounds(Sounds.JumpUp))
light.setAll(0x00ff00)
```

The Music blocks also have various ways to play specific tones and control beat and tempo. You can compose entire songs or just have individual notes play in response to inputs you choose. The following is “Mary Had a Little Lamb” using the “Play Tone” and “Rest” blocks:

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    music.ringTone(494)
    music.rest(music.beat(BeatFraction.Eighth))
    music.ringTone(440)
    music.rest(music.beat(BeatFraction.Eighth))
    music.ringTone(392)
    music.rest(music.beat(BeatFraction.Eighth))
    music.ringTone(440)
    music.rest(music.beat(BeatFraction.Eighth))
    music.ringTone(494)
    music.rest(music.beat(BeatFraction.Eighth))
    music.ringTone(494)
    music.rest(music.beat(BeatFraction.Eighth))
    music.ringTone(494)
})
```

## Activities for Inputs, Light, and Music

Let’s start with a simple input and output example. From the Input Toolbox drawer, drag an “On Button A Click” block into the Workspace. Then, from the Light Toolbox drawer, drag two “Show Ring” blocks inside the “On Button A Click” block on the Workspace. The Simulator will go gray for a second while MakeCode processes these changes, and then it will show your program running. In the second “Show Ring” block, click on the green color wedge selector in the middle of the block, then click all of the circles to turn the lights green. 

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.showRing(
    "red red red red red red red red red red"
    )
    light.showRing(
    `green green green green green green green green green green`
    )
})
```

Remember: To make the Simulator appear and disappear, press the arrow in the far bottom left-hand corner.

![Simulator hide button](/static/courses/maker/general/coding-the-cpx/sim-hide-button.png)

If you press button A in the Simulator, the lights will turn red, then quickly turn green. There is a built-in pause of 20 milliseconds (ms), so if you don’t specify the length of pause, 20 ms is the default. After 20 ms, the lights in the Simulator will turn green. They will stay green because the code never tells them to turn off. Clicking button A in the Simulator will repeat the output of quick red, then green.

Let’s change this code a bit. First, go to the green Loops Toolbox drawer and drag a “Pause 100 ms” block out. Hover it over the place where the two “Show Ring” blocks meet until a yellow insertion line and a gray image of your block appears. Then, let go and the block will snap into place.

![Insert the pause block](/static/courses/maker/general/coding-the-cpx/insert-pause.png)

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.showRing(
    "red red red red red red red red red red"
    )
    pause(1000)
    light.showRing(
    `green green green green green green green green green green`
    )
})
```

Click on button A in the Simulator, and you’ll now see that the red lights turn red for one second, then turn green.
