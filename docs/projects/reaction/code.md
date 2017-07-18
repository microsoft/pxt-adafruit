# Coding for your reaction game 

### ~avatar avatar 
Using the infrared signalling on the @boardname@, let's create a game to play with a friend! 
### ~ 

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
2. From **LIGHT**, drag a **set all pixels to** block and place it inside an **on button A click** from **INPUT**
3. From **NETWORK**, drag a **infrared send number** block and place it below the **set all pixels to** block inside the **on button A click** 

```blocks 
input.buttonA.onEvent(ButtonEvent.Click, () => {
    light.pixels.setAll(Colors.Green)
    network.infraredSendNumber(Colors.Red)
})
```

### Build the Block 
1. Change **set all pixels** to ``green`` 
2. From **LIGHT**, drag a **red** block and place it inside the **infrared send number** 

The **infrared send number** block allows the circuit playground to communicate with another circuit playground via the infrared sensors that are attached on the playground. When it is programmed to send the color red, the signal will be transmitted via infrared to another waiting circuit playground. 

4. Repeat steps 2 and 3 to create another identical block to the one above. However, we're going to change this one up a little bit! 

```blocks 
input.buttonB.onEvent(ButtonEvent.Click, () => {
    light.pixels.setAll(Colors.Violet)
    network.infraredSendNumber(Colors.Yellow)
})
```

### Build the Block 
1. Change **set all pixels** to ``violet``
2. From **LIGHT**, drag a **red** block and place it inside the **infrared send number**. Use the dropdown to select the color ``yellow``! 

5. Repeat steps 2 and 3 to create yet another identical block to the two you have already. 

```blocks 
input.buttonsAB.onEvent(ButtonEvent.Click () => {
    light.pixels.setAll(Colors.White)
    network.infraredSendNumber(Colors.Black)
})
``` 

### Build the Block 
1. Change **set all pixels** to ``white`` 
2. From **LIGHT**, drag a **red** block and place it inside the **infrared send number**. Use the dropdown to select the color ``black``! 

6. From **LIGHT**, drag a **set all pixels to** block and place it inside an **on shake** from **INPUT** 

```blocks 
input.onGesture(Gesture.Shake, () => {
    light.pixels.setAll(Colors.Blue)
})
```

### Build the Block 
1. Change **set all pixels** to ``blue`` 


## Step 2: Setting up the receiving signals for the infrared signals sent 

Now that you've programmed your @boardname@ to send signals, we need to program the @boardname@ to receive these signals that are sent out from various boards. 

1. From **NETWORK**, drag an **on infrared received** block to your editor. 
2. From **LIGHT**, drag a **set all pixels to** block and place it inside the **on infrared received** block. 

```blocks 
network.onInfraredPacketReceived( ({ receivedNumber }) => {
    light.pixels.setAll(receivedNumber)
})
```

### Build the Block 
1. From **VARIABLES**, drag out a **receivedNumber** block and replace the **red** block inside the **set all pixels to** block. 


And now you're done! Download the code to two @boardname@s and get ready to duel. Who has the fastest reaction time? Who will be able to change the other's colors? 

