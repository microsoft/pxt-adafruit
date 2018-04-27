# Coding for your reaction game 

## ~avatar avatar 
Using the infrared signalling on the @boardname@, let's create a game to play with a friend! 
## ~ 

## Duration: ~10 minutes 

## Concepts

* Infrared communication
* RGB color values

## Blocks

```cards
network.onInfraredPacketReceived( ({ receivedNumber }) =>  {})
network.infraredSendNumber(0)
light.rgb(0, 0, 0)
```

## Step 1: Make the transmit color variables

First, we need make some numbers to represent colors. We will send the color numbers as RGB values to other boards as infrared messages.

1. Open [MakeCode](@homeurl@) in your web browser.
2. Go to ``||loops:LOOPS||`` and pull out and ``||loops:on start||`` block.
3. In ``||variables:VARIABLES||``, click the **make a variable...** button.
4. Give the new variable the name of ``rgbRed``.
5. Back in ``||variables:VARIABLES||`` you'll see a ``||variables:set rgbRed to||`` block. Drag that out into the ``||loops:on start||`` block.
6. Repeat steps **3** to **5** to make another variable that we'll name ``rgbYellow``.

```blocks
let rgbRed = 0
let rgbYellow = 0
```

### Set the RGB values

1. Let's make an RGB value for **Red**. Go to ``||light:LIGHT||`` and get a ``||light:red green blue||`` block and replace the `0` in ``||variables:set rgbRed to||`` with it.
2. Set the values for ``green`` and ``blue`` to `0`. This RGB value has only red light.
3. Repeat step **1** for our **Yellow** value and put a ``||light:red green blue||`` block into ``||variables:set rgbYellow to||``.
4. This time, set just the value for ``blue`` to `0`. The combination of red and green light makes the yellow color.

```blocks
let rgbRed = light.rgb(255, 0, 0)
let rgbYellow = light.rgb(255, 255, 0)
```

## Step 2: Program the buttons to send colors

1. Pull out an ``||input:on button A click||`` from ``||input:INPUT||``.
2. From ``||light:LIGHT||``, drag a ``||light:set all pixels to||`` block and place it inside the ``||input:on button A click||``.
3. From ``||network:NETWORK||``, drag a ``||network:infrared send number||`` block and place it below the ``||light:set all pixels to||`` block inside the ``||input:on button A click||``.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.setAll(0xff0000)
    network.infraredSendNumber(0)
})
```

### Build the block

1. Change the color in ``||light:set all pixels||`` to ``green``.
2. From ``||variables:VARIABLES||``, drag the ``||variables:rgbRed||`` block and place it inside the ``||network:infrared send number||``.

The ``||network:infrared send number||`` block allows the board to communicate with another @boardname@ using its infrared sensors. When it is programmed to send the color red, the signal will be transmitted by infrared to another waiting board.

```blocks
let rgbRed = light.rgb(255, 0, 0)
let rgbYellow = light.rgb(255, 255, 0)
input.buttonA.onEvent(ButtonEvent.Click, () => {
    light.setAll(0x00ff00)
    network.infraredSendNumber(rgbRed)
})
```

### Add more buttons and on shake

Now, let's repeat the previous steps to make two more button blocks. This time we're going to change it up a little bit! Change the buttons of the two new blocks to **B** and **A+B**. Oh yeah, pull out an ``||input:on shake||`` block too.

```blocks
input.buttonB.onEvent(ButtonEvent.Click, function () {
    light.setAll(0xff0000)
    network.infraredSendNumber(0)
})
input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    light.setAll(0xff0000)
    network.infraredSendNumber(0)
})
input.onGesture(Gesture.Shake, function () {
	
})
```

### Build the block

1. Inside the ``||input:on button B click||``, change ``||light:set all pixels||`` to ``violet``.
2. From ``||variables:VARIABLES||``, drag a ``||variables:rgbYellow||`` block and place it inside the ``||network:infrared send number||``.

```blocks
let rgbRed = light.rgb(255, 0, 0)
let rgbYellow = light.rgb(255, 255, 0)
input.buttonB.onEvent(ButtonEvent.Click, () => {
    light.setAll(0x8a2be2)
    network.infraredSendNumber(rgbYellow)
})
```

### Build the block

1. Inside the ``||input:on button A+B click||``, change ``||light:set all pixels||`` to ``white``.
2. Here, we want to send the color **Black**. Since black is no light at all, the RGB value is just `0`. So, we can use the `0` that's already inside the ``||network:infrared send number||``.

```blocks 
input.buttonsAB.onEvent(ButtonEvent.Click, () => {
    light.setAll(0xffffff)
    network.infraredSendNumber(0x000000)
})
```

### Build the block

1. From ``||light:LIGHT||``, drag a ``||light:set all pixels to||`` block and place it inside the ``||input:on shake||`` block.
2. Change ``||light:set all pixels||`` to ``blue``.

```blocks 
input.onGesture(Gesture.Shake, () => {
    light.setAll(0x0000ff)
})
```

## Step 3: Setup the events to receive infrared messages

Now that you've programmed your @boardname@ to send over infrared, we need to program it to receive infrared messages with the RGB color values sent from other boards. 

1. From ``||network:NETWORK||``, drag an ``||network:on infrared received||`` block to your editor. 
2. From ``||light:LIGHT||``, drag a ``||light:set all pixels to||`` block and place it inside the ``||network:on infrared received||`` block. 

```blocks 
network.onInfraredPacketReceived( ({ receivedNumber }) => {
    light.setAll(0xff0000)
})
```

### Build the block

1. From ``||variables:VARIABLES||``, drag out a ``||variables:receivedNumber||`` block and replace the red color block inside the ``||light:set all pixels to||`` block. 

```blocks
network.onInfraredPacketReceived( ({ receivedNumber }) => {
    light.setAll(receivedNumber)
})
```

And now you're done! Download the code to two @boardname@s and get ready to duel. Who has the fastest reaction time? Who will be able to change the other's colors? 
