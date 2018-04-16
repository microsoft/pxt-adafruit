# Coding the light monster

## ~avatar avatar
Using the sensitivity of the light sensor and code, let's make the light monster's jaw move!
## ~

## Duration: ~15 minutes

## Concepts
* Sensors (light)
* Pixels
* Pin functions (servo)

## Blocks

```cards 
light.graph(input.lightLevel(),0)
pins.A2.servoWrite(180)
Math.map(input.lightLevel(),0,0,0,0)
pause(0)
``` 

## Step 1: Coding the servo pin connection

1. Open @homeurl@ in your web browser. 
2. From **LIGHT**, drag a **graph of** block, and place it inside a **forever** loop. 

```blocks 
forever(() => {
    light.graph(0, 0)
})
```

### Build the Block...

From **INPUT** drag a **light level** into the **graph of** block.

```blocks 
forever(() => {
    light.graph(input.lightLevel(), 0)
})
```

From **PINS**, drag a **servo write pin to** block and place it inside the forever loop. 

```blocks 
forever(() => {
    light.graph(input.lightLevel(), 0)
    pins.A1.servoWrite(180)
})
```

### Build the block...

1. Change the value of the pin to ``A2``.
2. From **MATH** drag out **map** and place it inside the value for the servo pin to write. 
3. Change the value of `from high` to ``255``.
4. Change the value of `to high` to ``255``.

```blocks 
forever(() => {
    light.graph(input.lightLevel(), 0)
    pins.A2.servoWrite(Math.map(
        input.lightLevel(), 
        0,
        255, 
        0,
        255
    ))
})
```
## Step 2: Calibrating the servo motor 

If you download the code now, and shine light on the circuit playground, you will see the servo moter turn in a large arc. 
Let's try changing the values of the position of the servo motor so that your monster's jaw will open and close in a reasonable distance! 

### Build the block...

1. Change the value of to low to ``50``.

```blocks 
forever(() => {
    light.graph(input.lightLevel(), 0)
    pins.A2.servoWrite(Math.map(
        input.lightLevel(), 
        0,
        255, 
        50,
        255
    ))
})
```

This limits the distance the motor will move. So, whenever light shines on the circuit playground, the monster's mouth will open and close by a smaller amount. 

## Step 3: Adding a pause loop to the function 

The **pause loop** placed in the forever loop causes the code to wait for a short time. This keeps the monster's mouth from twitching too much. Let's try using a pause! 

From **LOOPS** drag a **pause (ms)** block into the bottom of the forever loop. 

```block
pause(100)
```

### Build the block...

1. Change the value of pause to ``400``.

```blocks
forever(() => {
    light.graph(
    input.lightLevel(), 
    0
    )
    pins.A2.servoWrite(Math.map(
        input.lightLevel(), 
        0, 
        255, 
        0, 
        255
    ))
    pause(400)
})
```

## Step 4: Give it a try!

Download the code to @boardname@ and try shining a light on it. Take the light away and see what happens too.

**Good work! Now your project is complete and ready to show off. Have fun playing with your new monster!** 
 
