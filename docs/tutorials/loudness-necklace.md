# Loudness Necklace

## Step 1

Drag a ``||light:graph||`` block into the ``||loops:forever||`` block.

The ``||light:graph||`` block turns on the lights based on the first number.

```blocks
loops.forever(function () {
    light.graph(0, 0)
})
```

## Step 2

Pull out a ``||input:sound level||`` block and put it in the first hole of ``||light:graph||`` to show lights based on the sound level.

```blocks
loops.forever(function () {
    light.graph(input.soundLevel(), 0)
})
```

## Step 3

The maximum sound level is ``255`` so set this number in the second hole of ``||light:graph||``.

``||light:graph||`` automatically sets how many lights turn on based on the value in the first hole. If you provide a second number though, it knows the maximum value and does a better job graphing.

```blocks
loops.forever(function () {
    light.graph(input.soundLevel(), 255)
})
```

## Step 3

Click ``|Download|`` to transfer your code to the @boardname@. Try singing and see the lights changing.

## Step 4

Awesome! Find a necklace and attach the @boardname@ to it. You'll be showing lights whenever you talk!