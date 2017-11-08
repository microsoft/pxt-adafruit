# Loudness Necklace

## Step 1

Drag a ``||light:graph||`` block in the ``||loops:forever||`` block.

The ``||light:graph||`` block turns on the lights based on the first number.

```blocks
loops.forever(function () {
    light.graph(0, 0)
})
```

## Step 2

Drag a ``||input:sound level||`` block in the ``||light:graph||`` block to turn on lights based on the sound level.

```blocks
loops.forever(function () {
    light.graph(input.soundLevel(), 0)
})
```

## Step 3

The maximum sound level is ``255`` so set this number in the second hole of ``||light:graph||``.

``||light:graph||`` automatically adapts how many lights are on based on the value in the first hole. 
However, you can provide a second number so that it knows the maximum value and does a better job.

```blocks
loops.forever(function () {
    light.graph(input.soundLevel(), 255)
})
```

## Step 3

Click ``|Download|`` to transfer your code to the @boardname@. Try singing and see the lights changing.

## Step 4

Awesome! Pick a necklace and attach the @boardname@ to it, you'll be showing lights whenever you talk!