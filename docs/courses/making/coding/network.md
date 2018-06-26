# Network

## Infrared send and receive

The blocks in the ``||network:NETWORK||`` drawer of the Toolbox are used to send and receive infrared signals so each @boardname@ can trigger one-another to do things. Like a TV remote, the infrared signals are very directional, so the sending and receiving @boardname@ need to be facing each other. The infrared signal is sending a number, so the receiving @boardname@ will always be looking for a number as an input.

When you use the ``||network:on infrared received||`` block, a variable called ``num`` is automatically created. There is never a need to change this variable name because it won’t have any impact on what is sent or received.

```block
network.onInfraredReceivedNumber(function() {

})
```

![The num variable already created](/static/courses/making/coding/num-variable.jpg)

If you start with an ``||network:infrared send number||`` block, no variable will be created.

```block
network.infraredSendNumber(0)
```

The key concept to remember with the infrared blocks is that they always send and receive a number. This can be a literal number that you type in the white lozenge-shaped field, but it can also be one of the color lozenges. The reason the color lozenges work is that they actually contain a numeric code representing the color.

Here is a ``||input:on button A click||`` input block sending a red color block.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    network.infraredSendNumber(Colors.Red)
})
```

Looking at those same two blocks in the JavaScript view (see below for details), we see that what the Red lozenge is actually sending is the numeric code for red, which is `16711680`.

![The number value for the color red](/static/courses/making/coding/color-number.jpg)

A sending @boardname@ could send any of the following: a lozenge like `red` or `orange`, or an actual typed number, like `1`.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    network.infraredSendNumber(Colors.Red)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    network.infraredSendNumber(Colors.Orange)
})
input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    network.infraredSendNumber(2)
})
```

If you want to use a lozenge rather than a typed number, find the color lozenges in the Light drawer of the Toolbox.

![Color blocks in the toolbox](/static/courses/making/coding/color-blocks.jpg)

Put the lozenge in an Infrared Send Number block, select a color, and put that block in an Input block.

![Choose a color from the dropdown list](/static/courses/making/coding/select-color.gif)

The receiving @boardname@ will need the ``||network:on infrared received||`` block. Again, there is never a need to change the variable ``num`` because doing so will not have an effect on anything. Instead, simply insert blocks for what you want to happen when the signal is received. The following code says, When an infrared number signal is received, turn all NeoPixels red, pause for 100 ms, then turn all NeoPixels to gray.

```blocks
network.onInfraredReceivedNumber(function (num) {
    light.setAll(0xff0000)
    pause(100)
    light.setAll(0x999999)
})
```

If you want the receiving @boardname@ to be able to respond different to different numbers it receives, use an ``||logic:if then else||`` conditional with comparison diamonds. The following code says, On receiving an infrared signal (number), If the number equals red (again, it’s actually a numeric code representing red), then turn all pixels red, or else if the number equals orange, the show the ``color wipe`` animation, and if it’s any other number, show the ``comet`` animation. If you only want things to happen for ``red`` and ``orange``, you can leave the third condition blank.

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

Again, the following code would work the exact same way as the code above. The only difference is that the sending @boardname@ would need to be sending `708` and `44` instead of `red` and `orange`.

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

Notice that when you start using ``||network:NETWORK||`` blocks, if you click on the top @boardname@ in the simulator, a second receiving unit rolls in from the side to show you the lights and sounds that will be triggered.

![Second board in simulator](/static/courses/making/coding/dual-sim.jpg)

Finally, it can be nice to have confirmation that you’ve sent the IR signal from the sending unit, so putting a different color block in for each ``||network:infrared send number||`` block helps you keep track. Take two @boardname@s and load this code onto both of them, but substitute your own sound and light choices.

```blocks
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
network.onInfraredReceivedNumber(function (num) {
    if (num == 0) {
        light.setAll(0xff0000)
        music.playSound(music.sounds(Sounds.PowerUp))
    } else if (num == 1) {
        light.setAll(0x007fff)
        music.playSound(music.sounds(Sounds.PowerDown))
    } else {
        light.setAll(0x00ff00)
        music.playSound(music.sounds(Sounds.JumpUp))
    }
})
```
