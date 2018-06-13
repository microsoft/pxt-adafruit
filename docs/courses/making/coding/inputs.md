# Inputs

An “input” is a way that a computer takes in information from the outside world.  An “output” is how a computer displays information to the outside world. So, an input on the Circuit Playground Express might be pressing button **A**, and the output might be turning all the lights orange. Let’s describe a number of useful inputs before using them to trigger outputs.

When you use a computer, you’re using inputs like key presses, mouse clicks, and maybe a touch screen. Apps on a tablet might respond to the input of tilting the tablet one direction or another, like when you go from landscape to portrait mode. The Circuit Playground Express has quite a few different input methods built into it. In addition to responding to button presses, it can sense motion, sound, light, touch, color, and temperature. Devices we frequently use like elevators, cell phones, automatic lights, thermostats, and car alarms also rely on these same inputs.

Let’s look at some of the input blocks available to us in MakeCode:

The most basic inputs are pressing buttons **A**, **B**, or **A+B** together.

```block
input.buttonA.onEvent(ButtonEvent.Click, function () {
	
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
	
})
input.buttonsAB.onEvent(ButtonEvent.Click, function () {
	
})
```

The ``||input:on shake||`` input block utilizes the accelerometer to detect motion. The drop-down menu reveals different options for movement of the @boardname@.

```block
input.onGesture(Gesture.Shake, function () {
	
})
```

![On Gesture field editor](/static/courses/making/coding/fe-on-gesture.jpg)

The ``||input:on loud sound||`` input triggers a response if the sound level goes above a certain point. Sound values can range from 0-255 where `0` is completely silent and `255` is the maximum volume. If you want, you can set the specific sound value which will trigger the “on loud sound” block.  Find the ``||input:set loud sound threshold||`` block at the bottom of the ``||input:Input||`` Toolbox drawer and use it to define what a loud sound is (say, above 50, for example). Put it in a green ``||loops:on start||`` loop to establish what the sound level will be that will trigger the code to run.

```blocks
input.onLoudSound(function () {
	
})
input.setLoudSoundThreshold(50)
```

The ``||input:on light dark||`` input triggers a response if the light level goes above or below a given point. Light level values can range of 0-255 where `0` is completely dark, and `255` is the maximum brightness.  If you want, you can set the specific light value which will trigger the ``||input:on light dark||`` or ``||input:on light bright||`` blocks. Find the ``||input:set light threshold||`` block at the bottom of the ``||input:Input||`` Toolbox drawer and use it to define how bright or dark you want it to be before the @boardname@ runs the code. For example, you might want code to run when the light level goes above `65`, so you would say, “set bright light threshold to 65”.

```blocks
input.onLightConditionChanged(LightCondition.Bright, function () {
	
})
input.setLightThreshold(LightCondition.Bright, 65)
```

``||input:On switch moved||`` can act as an on/off switch. Put your code in one, then put code to have everything switched off in the other. This is especially handy when accessing the battery pack’s on/off switch is difficult because of the way a project is constructed.

```blocks
input.onSwitchMoved(SwitchDirection.Right, function () {
    light.setAll(0xff0000)
})
input.onSwitchMoved(SwitchDirection.Left, function () {
    light.clear()
})
```

The ``||input:on temperature hot at degrees||`` block runs the code it contains when the temperature sensor reads whatever the selected value in celsius or fahrenheit is.

```blocks
input.onTemperatureConditionChanged(TemperatureCondition.Hot, 15, TemperatureUnit.Celsius, function () {
	
})
```

The diamond and lozenge-shaped input blocks can’t trigger code by themselves. Instead, they get plugged into other blocks, such as conditionals. The lozenge-shaped blocks like ``||input:sound level||`` and ``||input:light level||`` will input whatever sound level or light level your @boardname@ is currently reading through its sensors. So, the number represented by the lozenge will change as the conditions of your device change.

![Blocks that plug in](/static/courses/making/coding/plugin-blocks.jpg)
