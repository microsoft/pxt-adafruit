# Loudness Necklace

## Step 1

Drag a ``||light:graph||`` block from the ``||light:LIGHT||`` toolbox category into the ``||loops:forever||`` block.

The ``||light:graph||`` block turns on the lights based on the first number.

```blocks
forever(function () {
    light.graph(0, 0)
})
```

## Step 2

Pull out a ``||input:sound level||`` block and put it in the first hole of ``||light:graph||`` to show lights based on the sound level.

```blocks
forever(function () {
    light.graph(input.soundLevel(), 0)
})
```

## Step 3

Click on the **(+)** symbol in ``||light:graph||`` and set the new value you see to the maximum sound level, which is ``255``.

The ``||light:graph||`` block automatically sets how many lights turn on based on the first value which is ``||input:sound level||``. If you provide a second number though, it knows the maximum possible value and does a better job graphing.

```blocks
forever(function () {
    light.graph(input.soundLevel(), 255)
})
```

## Step 4

Click ``|Download|`` to transfer your code to the @boardname@. Try singing and see the lights changing.

## Step 5

Awesome! Find a necklace and attach the @boardname@ to it. You'll be showing lights whenever you talk!

![light when loud](/static/cp/tutorials/loudness-necklace/loud-lights.gif)
