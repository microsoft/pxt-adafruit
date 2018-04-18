# Coding for your reaction game 

## ~avatar avatar 
Using the infrared signalling on the @boardname@, let's create a game to play with a friend! 
## ~ 

## Duration: ~10 minutes 

## Concepts

* Infrared connection 

## Blocks

```cards
network.onInfraredPacketReceived( ({ receivedNumber }) =>  {})
network.infraredSendNumber(0)
```

## Step 1: Programming of initial colors for button pressing 

1. Open @homeurl@ in your web browser.
2. Pull out an **on button A click** from **INPUT**.
3. From **LIGHT**, drag a **set all pixels to** block and place it inside the **on button A click**.
4. From **NETWORK**, drag a **infrared send number** block and place it below the **set all pixels to** block inside the **on button A click**.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.setAll(0xff0000)
    network.infraredSendNumber(0)
})
```

### Build the block

1. Change **set all pixels** to ``green``.
2. From **LIGHT**, drag a **red** block and place it inside the **infrared send number**.
>The **infrared send number** block allows the circuit playground to communicate with another circuit playground via the infrared sensors that are attached on the playground. When it is programmed to send the color red, the signal will be transmitted via infrared to another waiting circuit playground.

```blocks 
input.buttonA.onEvent(ButtonEvent.Click, () => {
    light.setAll(0x00ff00)
    network.infraredSendNumber(0xff0000)
})
```

### Add more buttons and on shake

Now, let's repeat the previous steps to make two more button click blocks. However, this time we're going to change this one up a little bit! Change the buttons of the two new blocks to **B** and **A+B**. Oh yeah, pull out an **on shake** block too.

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

1. Inside the **on button B click**, change **set all pixels** to ``violet``.
2. From **LIGHT**, drag a **red** block and place it inside the **infrared send number**. Use the dropdown to change the color ``yellow``! 

```blocks 
input.buttonB.onEvent(ButtonEvent.Click, () => {
    light.setAll(0x8a2be2)
    network.infraredSendNumber(0xffff00)
})
```

### Build the block

1. Inside the **on button A+B click**, change **set all pixels** to ``white``.
2. From **LIGHT**, drag a **red** block and place it inside the **infrared send number**. Use the dropdown to select the color ``black``! 
3. From **LIGHT**, drag a **set all pixels to** block and place it inside an **on shake** from **INPUT**.


```blocks 
input.buttonsAB.onEvent(ButtonEvent.Click, () => {
    light.setAll(0xffffff)
    network.infraredSendNumber(0x000000)
})
```

### Build the block

1. From **LIGHT**, drag a **set all pixels to** block and place it inside the **on shake** block.
2. Change **set all pixels** to ``blue``.

```blocks 
input.onGesture(Gesture.Shake, () => {
    light.setAll(0x0000ff)
})
```

## Step 2: Setting up the receiving signals for the infrared signals sent 

Now that you've programmed your @boardname@ to send signals, we need to program the @boardname@ to receive these signals that are sent out from various boards. 

1. From **NETWORK**, drag an **on infrared received** block to your editor. 
2. From **LIGHT**, drag a **set all pixels to** block and place it inside the **on infrared received** block. 

```blocks 
network.onInfraredPacketReceived( ({ receivedNumber }) => {
    light.setAll(0xff0000)
})
```

### Build the block

1. From **VARIABLES**, drag out a **receivedNumber** block and replace the **red** block inside the **set all pixels to** block. 

```blocks
network.onInfraredPacketReceived( ({ receivedNumber }) => {
    light.setAll(receivedNumber)
})
```

And now you're done! Download the code to two @boardname@s and get ready to duel. Who has the fastest reaction time? Who will be able to change the other's colors? 


