# Remote LEDs

The Circuit Playground Express is fitted with an infrared transmitter and receiver. Using two Circuit Playground Express boards, it's possible for one to remotely control the other. In this tutorial, waving (shaking) the board will send an infrared message. When received by the other board, an animation will display on the pixel LEDs.

## Step 1

Inside an ``||input:on shake||`` block from the ``Input`` drawer, add an ``||network:infrared send number||`` block. When shaken, the Circuit Playground Express will send an infrared signal to trigger an action on a receiving board.

```blocks
input.onGesture(Gesture.Shake, function () {
    network.infraredSendNumber(0)
})
```

## Step 2

The receiving board needs code that plays an animation. First, drag out an ``||network:on infrared received||`` block. Inside it, add a ``||light:show animation||`` and set it to the animation of your choice. It's also a good idea to set the duration to something longer, like ``1`` second.

```blocks
network.onInfraredReceivedNumber(function () {
    light.showAnimation(light.rainbowAnimation, 1000)
})
```

## Step 3

Drag a ``||light:set all pixels to||`` block below it and select ``black`` for color, this turns them off.

```blocks
network.onInfraredReceivedNumber(function () {
    light.showAnimation(light.rainbowAnimation, 1000)
    light.setAll(0x000000)
})
```

## Step 4

It's done! Click on ``|Download|`` and test it out. After downloading the code to two Circuit Playground Expresses, wave one board at the other and see the LEDs shine!

## Step 5 @unplugged

Everything may be working just fine, but there are other possible actions to transmit with infrared. The infrared signal is capable of sending any number to the other board. Using the two buttons on the Circuit Playground Express, it's possible to set a duration value and show that value as a graph on the LEDs. Then, that duration, in seconds, can be sent and the other board receiving the number can show the animation for the specified amount of time. Click ``|Finish|`` and get started!
