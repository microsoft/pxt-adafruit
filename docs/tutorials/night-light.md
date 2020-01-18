# Night light

## Step 1

Drag the ``||light:set all pixels||`` block in the forever loop to set a new color on the LEDs.

```blocks
forever(function () {
    light.setAll(0x0000ff);
})
```

## Step 2

Drag a ``||loops:for||`` loop to repeat code **256** times!

Since we start counting at ``0``, we put ``255`` as the number of loops.

```blocks
forever(function () {
    light.setAll(0x0000ff);
    for (let index = 0; index <= 255; index++) {
    }
})
```

## Step 3

Drag a ``||light:set brightness||`` block and place the ``||variables:index||`` block from the Variables drawer
into the slot.

Index is a variable that changes on every ``||loops:for||`` iteration. It starts at ``0`` and goes to ``255``.

```blocks
forever(function () {
    light.setAll(0x0000ff);
    for (let index = 0; index <= 255; index++) {
        light.setBrightness(index)
    }
})
```

## Step 4

Drag a ``||loops:pause 20 ms||`` in the ``||loops:for||`` to slow down the animation.

Change that value in pause to slow down or speed up the glowing effect!

```blocks
forever(function () {
    light.setAll(0x0000ff);
    for (let index = 0; index <= 255; index++) {
        light.setBrightness(index)
        pause(20)
    }
})
```

## Step 5

Click ``|Download|`` to transfer your code to the @boardname@. It should glow once to full brightness.

## Step 6

Duplicate the ``||loops:for||`` loop under the original for loop.

```blocks
forever(function () {
    light.setAll(0x0000ff);
    for (let index = 0; index <= 255; index++) {
        light.setBrightness(index)
        pause(20)
    }
    for (let index = 0; index <= 255; index++) {
        light.setBrightness(index)
        pause(20)
    }
})
```

## Step 7

Using a Math block change ``index`` to ``255 - index`` in the ``||light:set brightness||`` block.

```blocks
forever(function () {
    light.setAll(0x0000ff);
    for (let index = 0; index <= 255; index++) {
        light.setBrightness(index)
        pause(20)
    }
    for (let index = 0; index <= 255; index++) {
        light.setBrightness(255 - index)
        pause(20)
    }
})
```

## Step 8

Click ``|Download|`` to transfer your code to the @boardname@. It should glow back and forth.

## Step 9

Find materials in your house that diffuse light, like styrofoam and wrap the @boardname@ in it. Plug it near your bed 
and enjoy the light show!

![night light glow](/static/cp/tutorials/night-light/night-glow.gif)
