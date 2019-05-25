# Network (Infrared send and receive)

The blocks in the Network drawer of the Toolbox are used to send and receive infrared signals so Circuit Playground Expresses can trigger one-another to do things. Infrared (IR) light is part of the light spectrum that people encounter in everyday life, but it is invisible to human eyes. For more information on Infrared light, there are some good articles online, and NASA has a great teaching resource: https://science.hq.nasa.gov/kids/imagers/ems/infrared.html.

Like a TV remote, the infrared signals are very directional, so the sending and receiving Circuit Playground Expresses need to be facing each other. The infrared signal is sending a number, so the receiving Circuit Playground Express will always be looking for a number as an input.

When you use the ``||network:on infrared received||`` block, a variable called ``num`` is automatically created. There is never a need to change this variable name because it won’t have any impact on what is sent or received.
 
```block
network.onInfraredReceivedNumber(function (num) {
	
})
```
 
![The 'num' variable in variables toolbox](/static/courses/maker/general/coding/variables-num.jpg)

If you start with an ``||network:infrared send number||`` block, no variable will be created.

```block
network.infraredSendNumber(0)
```

The key concept to remember with the Infrared blocks is that they always send and receive a number. This can be a literal number that you type in the white lozenge-shaped field, but it can also be one of the color lozenges. The reason the color lozenges work is that they actually contain a numeric code representing the color.

Here is a ``||input:on button A click||`` input block sending a ``Red`` color value. These color value blocks can be found in the ``||light:LIGHT||`` Toolbox drawer.
 
```block
input.buttonA.onEvent(ButtonEvent.Click, function () {
    network.infraredSendNumber(Colors.Red)
})
```

Looking at those same two blocks in the **JavaScript** view (see below for details), we see that what the Red lozenge is actually sending is the numeric code for red, which is `16711680`.

![Infrared send number in JavaScript](/static/courses/maker/general/coding/ir-send-color-js.png)

The receiving Circuit Playground Express will need the ``||network:on infrared received||`` block. Again, there is never a need to change the variable Num because doing so will not have an effect on anything. Instead, simply insert blocks for what you want to happen when the signal is received. The following code says, “When an infrared number signal is received, turn all NeoPixels red, pause for 100 ms, then turn all NeoPixels to gray”.

```block
network.onInfraredReceivedNumber(function (num) {
    light.setAll(0xff0000)
    pause(100)
    light.setAll(0x999999)
})
```

If you want the receiving Circuit Playground Express to be able to respond different to different numbers it receives, use an ``||logic:if then else||`` conditional with Comparison diamonds. The following code says, “On receiving an infrared signal (number), If the number equals red (again, it’s actually a numeric code representing red), then turn all pixels red, or else if the number equals orange, the show the Color Wipe animation, and if it’s any other number, show the Comet animation”. If you only want things to happen for ``Red`` and ``Orange``, you can leave the third condition blank.

```blocks
network.onInfraredReceivedNumber(function (num) {
    if (num == Colors.Red) {
        light.setAll(0xff0000)
    } else if (num == Colors.Orange) {
        light.showAnimation(light.rainbowAnimation, 500)
    } else {
        light.showAnimation(light.cometAnimation, 500)
    }
})
```

Again, the following code would work the exact same way as the code above. The only difference is that the sending Circuit Playground Express would need to be sending `708` and `44` instead of ``Red`` and ``Orange``.

```blocks
network.onInfraredReceivedNumber(function (num) {
    if (num == 708) {
        light.setAll(0xff0000)
    } else if (num == 44) {
        light.showAnimation(light.rainbowAnimation, 500)
    } else {
        light.showAnimation(light.cometAnimation, 500)
    }
})
```

Notice that when you start using ``||network:NETWORK||`` blocks, you will see two Circuit Playground Express boards show up in the Simulator to simulate sending and receiving values.

![Two boards showing in simulator](/static/courses/maker/general/coding/two-board-sim.jpg)

Finally, it can be nice to have confirmation that you’ve sent the IR signal from the sending unit, so putting a different color block in for each Infrared Send Number block helps you keep track. Take two Circuit Playground Expresses and load this code onto both of them, but substitute your own sound and light choices.
 
```blocks

network.onInfraredReceivedNumber(function (num) {
    if (num == 0) {
        light.setAll(0xff0000)
        music.powerUp.play()
    } else if (num == 1) {
        light.setAll(0x007fff)
        music.powerDown.play()
    } else {
        light.setAll(0x00ff00)
        music.jumpUp.play()
    }
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    network.infraredSendNumber(0)
    light.setAll(0xff0000)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    network.infraredSendNumber(1)
    light.setAll(0x007fff)
})
input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    network.infraredSendNumber(2)
    light.setAll(0x00ff00)
})
```
