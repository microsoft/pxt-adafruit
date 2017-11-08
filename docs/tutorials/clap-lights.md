# Clap Lights

## Step 1 @fullscreen

Drag a ``||input:on loud sound||`` block in the workspace. It will run the nested code when
a clap is detected by the microphone.

```blocks
input.onLoudSound(function () {
})
```

## Step 2

Drag a ``||light:set all||`` block to set all the light to white.


```blocks
input.onLoudSound(function () {
    light.setAll(0xffffff)
})
```

## Step 3

Click ``|Download|`` to transfer your code to the @boardname@. Try clapping to see if the lights turn on!

## Step 4

Drag a ``||loops:pause||`` block to wait 2 seconds, and a ``||light:clear||`` block to turn of the lights after that.

```blocks
input.onLoudSound(function () {
    light.setBrightness(255)
    light.setAll(0xffffff)
    loops.pause(2000)
    light.clear()
})
```

## Step 3

Click ``|Download|`` to transfer your code to the @boardname@. Try clapping to see if the lights turn on
and turn off after a while.

## Step 8

Awesome! Congratulations on completing this challenge on the @boardname@.
