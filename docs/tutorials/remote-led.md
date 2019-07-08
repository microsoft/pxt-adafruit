# Remote LEDs

The Circuit Playground Express is fitted with an infrared transmitter and receiver. Using two Circuit Playground Expresses, it's possible for one to remotely control the other. In this tutorial, waving the device will send an infrared message, which, when received, will run an animation on the other.

## Step 1

Inside an ``||input:on shake||`` block from the ``Input`` drawer, add an ``||network:infrared send number||`` block. Upon being shaken, the Circuit Playground Express will send an infrared signal to trigger the other device.

```blocks
input.onGesture(Gesture.Shake, function () {
    network.infraredSendNumber(0)
})
```

## Step 2

There also needs to be a receiver that will play the animation. First, drag out an ``||network:on infrared received||`` block. Inside it, add a ``||light:show animation||`` and set it to the animation of your choice. It's also a good idea to set the duration to something longer, like 1 second.

```blocks
network.onInfraredReceivedNumber(function () {
    light.showAnimation(light.rainbowAnimation, 1000)
})
```

## Step 3

Drag a ``||light:set all pixels to||`` block below it and select the black color, which will turn them off.

```blocks
network.onInfraredReceivedNumber(function () {
    light.showAnimation(light.rainbowAnimation, 1000)
    light.setAll(0x000000)
})
```

## Step 4

It's done! Click on ``|Download|`` and test it out. After downloading the code to two Circuit Playground Expresses, wave one at the other, and see the LEDs shine!

## Step 5 @unplugged

Everything may be working, but there's a lot of missed potential. The infrared signal is capable of sending any number to the other device. Using the two buttons on the Circuit Playground Express, it's possible to set a duration, and show the current duration setting on the LEDs. Then, the duration in seconds can be sent and the other device can show the animation for the specified duration. Click ``|Finish|`` and get started!
