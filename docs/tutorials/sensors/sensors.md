## Step 1

Let's explore some of the sensors on the @boardname@, starting with the Motion Sensor. 
The Motion Sensor measures Acceleration along 3 dimensions: X-axis (left and right), Y-axis (forward and backward), and the Z-axis (up and down).
It uses values from -1023 to +1023.  When the @boardname@ is laying flat: X = 0, Y = 0, Z = -1023.

![Circuit Playground Accelerometer](/BoardAccelerometer.png)

## Step 2

Open the **Light** Toolbox drawer, and click on **More** subcategory.  Drag the ``||graph||`` block onto your programming Workspace, and put it in the ``||forever||`` loop.

```blocks
forever(() => {
    light.graph(
    0,
    0
    )
})
```
![Graph block](/graphblock.gif)

## Step 3

Open the **Input** Toolbox drawer, drag the ``||acceleration||`` block into the first slot of the ``||graph||`` block. 

```blocks
forever(() => {
    light.graph(
    input.acceleration(Dimension.X),
    0
    )
})
```
![Acceleration block](/accelerationblock.gif)

## Step 4

Set the maximum value to ``1023`` by typing this number into the second slot of the ``||graph||`` block.

```blocks
forever(() => {
    light.graph(
    input.acceleration(Dimension.X),
    1023
    )
})
```
![Graph Acceleration block](/graph-acceleration.png)

## Step 5

Test your program in the Simulator by moving the mouse across the @boardname@ from left to right. Now click ``|Download|`` to transfer your code to the @boardname@.  Next, you can try measuring acceleration along the Y and Z axis.

![Simulator Acceleration](/SimulatorAcceleration.gif)
![Hardware Acceleration](/HardwareAcceleration.gif)

## Step 6

Now let's look at the Light Sensor on the @boardname@.  
The @boardname@ measures how light or dark it is through a light level sensor where 0 = completely dark, and 255 = bright light.

![Circuit Playground Light Sensor](/BoardLightSensor.png)

## Step 7

From your existing Motion Sensor program, delete the ``||acceleration||`` block by dragging it to the Toolbox area.

![Delete block](/deleteacceleration.gif)

## Step 8

Open the **Input** Toolbox drawer, drag the ``||light level||`` block into the first slot of the ``||graph||`` block. 

```blocks
forever(() => {
    light.graph(
    input.lightLevel(),
    1023
    )
})
```
![Light level block](/lightlevelblock.gif)

## Step 9

Set the maximum value to ``255`` by typing this number into the second slot of the ``||graph||`` block.

```blocks
forever(() => {
    light.graph(
    input.lightLevel(),
    255
    )
})
```
![Graph Light level block](/graph-lightlevel.png)

## Step 10

Test your program in the Simulator by changing the light level meter. Now click ``|Download|`` to transfer your code to the @boardname@.

![Simulator Light Level](/SimulatorLightLevel.gif)
![Hardware Light Level](/HardwareLightLevel.gif)
