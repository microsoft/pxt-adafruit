# Seismograph Challenge 

Coding challenges for the seismograph. 


### ~avatar avatar

Engineering: In this project, you will build a remote control based on the seismograph micro:bit activity using a second micro:bit and micro USB cable. 

### ~

## What you'll need: 

* BBC micro:bits (2)
* micro USB cables (2) 
* Plate 
* Tape 
* Scissors

![](/static/mb/lessons/seis_challenge01.png)

## Before we get started

Complete the [seismograph](/lessons/seismograph/activity) activity and your code will look like this:

```blocks
basic.forever(() => {
    led.plotBarGraph(input.acceleration(Dimension.Strength) - 1023, 0);
});

```

### ~avatar avatar 
Computer Science: Welcome! The activity will teach you how to code the acceleration of the 1st micro:bit and to visualize the acceleration on the 2nd micro:bit. Let's get started!
### ~

# Computer Science Steps

## 1.
We want to simply detach the blocks from the recent activity. We will use blocks from the activity to create a brand new program to show the way micro:bit devices communicate through the BLE (Bluetooth low energy) radio. 

```shuffle
basic.forever(() => {
    led.plotBarGraph(input.acceleration(Dimension.Strength) - 1023, 0);
});

```

## 2. 
Let's measure `acceleration (mg)` and then `send number`. `Acceleration` is measured in **milli-gravities**, so a value of -1000 is equivalent to -1g or -9.81m/s^2. We will be able to get the acceleration value (g-force), in the specified "x" dimension. `Send number` will broadcast a number data packet to other micro:bits connected via radio.

We need add send number block found in the Radio drawer. We will attach send number to acceleration and subtract the gravity from acceleration strength.  

Your finished code will look like this:

```blocks
radio.sendNumber(input.acceleration(Dimension.Strength) - 1023);
```

## 3. 
We want to display the acceleration forever. In order to do so, we need a `forever` loop. A forever loop will repeat code in the background forever. We need attach forever loop to send number. 

Your finished code will look like this:

```blocks
basic.forever(() => {
    radio.sendNumber(input.acceleration(Dimension.Strength) - 1023);
});

```

## 4. 
We want to register code to run when a packet is received over radio. We can implement this code by adding `on data received`block found in the radio drawer.

Your finished code will look like this:

```blocks
basic.forever(() => {
    radio.sendNumber(input.acceleration(Dimension.Strength) - 1023);
});
radio.onDataReceived(() => {
});

```

## 5. 
Finally, we want to chart the acceleration. So we must first implement `plot bar graph`. `Plot Bar Graph` will display a vertical bar graph based on the value and high value. In order to transfer the receive the number from the 1st micro:bit, we must implement `receive number` to constantly display a vertical bar graph based on the value. Remember, the value will equal to the micro:bit's acceleration in the "x" direction.

Your finished code will look like this:

```blocks
basic.forever(() => {
    radio.sendNumber(input.acceleration(Dimension.Strength) - 1023);
});
radio.onDataReceived(() => {
    led.plotBarGraph(radio.receiveNumber(), 0);
});
```

### ~avatar avatar 
Science: Welcome! The activity will teach you how to chart the acceleration of the 1st micro:bit and to visualize the acceleration on the 2nd micro:bit. Let's get started!
### ~

# Science Steps

## 6. 
First, notice that moving the 1st micro:bit in the simulator in any direction, you will change the acceleration value of the 2nd micro:bit. Also, notice that by moving the micro:bit simulator, there is a changing acceleration value of the second micro:bit. Second, the flat colored horizontal line will start a waving line on the 2nd micro:bit to display the value of the strength as measured in milli-gravities. Finally, notice that the LED display will fluctate based on the movement of the 2nd micro:bit simulator.

![](/static/mb//lessons/seis_challenge02.png)

## 7. 
 
Connect the 2nd micro:bit to your computer using your USB cable. We should have two micro:bit devices attached to the computer. 

![](/static/mb/lessons/seismograph33.png)

## 8.

Click or tap the compile button for the seismograph program to run the program on the 1st micro:bit and 2nd micro:bit.

## 9. 

The black lines should appear directly beneath the colored lines. The black lines measure the micro:bit acceleration. And the colored lines measures micro:bit simulator acceleration.

![](/static/mb/lessons/seis_challenge05.png)

Run the acceleration experiment by vigarously moving the plate in any direction or move the object below the micro:bit (such as a table).

Every time the micro:bit moves in any direction, you generate data points that can be reviewed in Excel later. The more attempts to move the micro:bit, the more data to be reviewed in Excel.

![](/static/mb/lessons/seis_challenge04.png)

### ~
* Have fun reviewing your seismograph data and analyzing the acceleration with Excel.
* The first person and second person take shaking or moving the micor:bit in any direction while the other player charts the data on the micro:bit!
* Review and analyze the actual micro:bit device acceleration data on Excel


