# charting activity

Measure the acceleration on the micro:bit in the "z" direction. 

### ~avatar avatar

To create a new script, go to the [Create Code](/microbit/create-code) page and tap `New Project` under `Block Editor`.

### ~

Welcome! This activity will teach how to use the 1st micro:bit to chart the second micro:bit's acceleration in the "x" direction. Let's get started!

Let's measure `acceleration (mg)` and then `send number`. `Acceleration` is measured in **milli-gravities**, so a value of -1000 is equivalent to -1g or -9.81m/s^2. We will be able to get the acceleration value (g-force), in the specified "x" dimension. `Send number` will broadcast a number data packet to other micro:bits connected via radio.

```blocks
radio.sendNumber(input.acceleration(Dimension.X));
```

We want to display the acceleration forever. In order to do so, we need a `forever` loop. A forever loop will repeat code in the background forever.

```blocks
basic.forever(() => {
    radio.sendNumber(input.acceleration(Dimension.X));
});


```

We want to register code to run when a packet is received over radio. We can implement this code by adding `on data received`.

```blocks
basic.forever(() => {
    radio.sendNumber(input.acceleration(Dimension.X))
})
radio.onDataReceived(() => {
    
})
```

Finally, we want to chart the acceleration. So we must first implement `plot bar graph`. `Plot Bar Graph` will display a vertical bar graph based on the value and high value. In order to transfer the receive the number from the 1st micro:bit, we must implement `receive number` to constantly display a vertical bar graph based on the value. Remember, the value will equal to the micro:bit's acceleration in the "x" direction.

```blocks
basic.forever(() => {
    radio.sendNumber(input.acceleration(Dimension.X))
})
radio.onDataReceived(() => {
    led.plotBarGraph(radio.receiveNumber(), 1023)
})

```


* Connect the first micro:bit to your computer using your USB cable and run the charting script on it.
* Connect the second micro:bit to your computer using your USB cable and run the charting script on it.
* The first person and second person take turns tilting the micro:bit in the "x" direction while the other player charts the data on the micro:bit!
