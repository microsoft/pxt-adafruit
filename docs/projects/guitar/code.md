# Coding the Guitar

### @description Coding part of the @boardname@ air guitar project

## Step 1: Make an animation using the Motion Sensor

The motion sensor measures acceleration along 3 dimensions:

* X-axis (left and right)
* Y-axis (forward and backward)
* Z-axis (up and down)

It uses values from ``-1023`` to ``1023``. When the @boardname@ is laying flat, face up: ``X = 0, Y = 0, Z = -1023``

![Circuit Playground Accelerometer](/static/cp/projects/guitar/accelerometer.png)

Open **[MakeCode](@homeurl@)** in your web browser.

Go into the **Light** toolbox drawer, and click on the **More** subcategory.  Drag the ``||light:graph||`` block onto your programming workspace, and put it in the ``||loops:forever||`` loop.

```blocks
forever(() => {
    light.graph(
    0,
    0
    )
})
```
![Graph block](/static/cp/projects/guitar/graph-block.gif)

Now, in the **Input** toolbox drawer, drag the ``||input:acceleration||`` block into the first slot of the ``||light:graph||`` block. 

```blocks
forever(() => {
    light.graph(
    input.acceleration(Dimension.X),
    0
    )
})
```

![Acceleration block](/static/cp/projects/guitar/acceleration-block.gif)

Using the drop-down menu on the ``||input:acceleration||`` block, change to the `y` axis. Set the maximum value to ``1023`` by typing this number into the second slot of the ``||light:graph||`` block.

```blocks
forever(() => {
    light.graph(
    input.acceleration(Dimension.Y),
    1023
    )
})
```

## Step 2: Add Music

Open the **Loops** toolbox drawer, drag a ``||loops:forever||`` block onto the programming workspace.

In the **Music** toolbox drawer, drag the ``||music:play tone||`` block into the ``||loops:forever||`` loop.

```blocks
forever(() => {
    music.playTone(262, music.beat(BeatFraction.Half))
})
```
Now we want to change the pitch, or the note that's being played, based on the light level (darker makes a _lower_ note and brighter makes a _higher_ note).

The @boardname@ can play notes that are represented as frequency values (in [Hertz](https://en.wikipedia.org/wiki/Hertz)). Also, the @boardname@ measures how light or dark it is through a light level sensor ( `0` = completely dark and `255` = bright light.).

![Circuit Playground Light Sensor](/static/cp/projects/guitar/light-sensor.png)

We want to map the light level values (`0` - `255`) to frequency values. 300 MHz is about the frequency for the **Middle D** note, so let's add `300` to our light level values. 

Open the **Math** toolbox drawer, drag the ``||math:addition||`` block into the first slot of our ``||music:play tone||`` block.  
Then Open the **Input** toolbox drawer, drag the ``||light level||`` block into the the first value of our ``||math:addition||`` block, and type the value ``300`` into the second value.

```blocks
forever(() => {
    music.playTone(input.lightLevel() + 300, music.beat(BeatFraction.Half))
})
```

Now let's change the tempo based on the motion of our guitar. The motion sensor measures acceleration along 3 directions: X-axis (left and right), Y-axis (forward and backward), and the Z-axis (up and down).

Acceleration uses values from `-1023` to `1023`. The tempo is the number of milliseconds that the tone lasts for, and these values are always positive (1000 milliseconds = 1 second).

Go to the **Math** toolbox drawer, drag ``||math:absolute||`` value block into the second slot of our ``||music:play tone||`` block.

Open the **Input** toolbox drawer, drag the ``||input:acceleration||`` block into the ``||math:absolute||`` value block.

```blocks
forever(function () {
    light.graph(
    input.acceleration(Dimension.Y),
    1023
    )
})
forever(function () {
    music.playTone(input.lightLevel() + 300, Math.abs(input.acceleration(Dimension.Y)))
})
```

## Complete!

Download you code to the @boardname@. Now, it's time to play your guitar!

![Air guitar player](/static/cp/projects/guitar/guitar-in-action.jpg)
