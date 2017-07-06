# Coding the Light Monster 

### ~avatar avatar 
Using the sensitivity of the light sensor and code, let's make the light monster's jaw move!
### ~ 

**Concepts:** 
    * Sensors (Light)

## Duration: ~15 minutes 

## Blocks 

```cards 
light.pixels.graph(input.lightLevel())
pins.A2.servoWrite()
Math.map(input.lightLevel())
loops.pause()
``` 

## Step 1: Coding the servo pin connection
Open @homeurl@ in your web browser. 

```blocks 
loops.forever(() => {
    light.pixels.graph()
})
```

From **LIGHT**, drag a **graph of** block, and place it inside a **forever** loop. 

```blocks 
loops.forever(() => {
    light.pixels.graph(
    input.lightLevel(),
    0
    )
})
```

**Build the Block** 
    * From **INPUT** drag a **light level** into the **graph of** block 

```blocks 
loops.foever(() => {
    light.pixels.graph(
    input.lightLevel(), 
    0
    )
    pins.servoWrite()
})
```

From **PINS**, drag a **servo write pin to** block and place it inside the forever loop. 

```blocks 
loops.foever(() => {
    light.pixels.graph(
    input.lightLevel(), 
    0
    )
    pins.servoWrite(Math.map(
        input.lightLevel(), 
        0,
        255,
        0,
        255
    ))
})
```

**Build the block** 
    * Change the value of the pin to A2 
    * From **MATH** drag out **map** and place it inside the value for the servo pin to write. 
    * Change the value of from high to **255** 
    * Change the value of to high to **255** 

## Step 2: Calibrating the servo motor 

If you were to run the code after downloading, you would notice the servo motor, after shining a light on the circuit playground, revolves around a large parameter. 
Let's try changing the values of the position of the servo motor so that your monster's jaw will open and close to a reasonable size! 

```blocks 
loops.forever(() => {
    light.pixels.graph(
    input.lightLevel(), 
    0
    )
    pins.servoWrite(Math.map(
        input.lightLeve(), 
        0,
        255, 
        50,
        255
    ))
})
```

**Build the block** 
    * Change the value of to low to **50** 

This change limits the value the motor can move to, so that whenever a light is shined on the circuit playground, the monster's mouth will open and close to a smaller size. 

## Step 3: Adding a pause loop to the function 

The **pause loop** allows the program, although in a forever loop, to create a small stop in the code. This allows less time for a twitch in the code to occur. 
Let's try using one! 

```blocks 
loops.pause()
```

From **LOOPS** drag a **pause (ms)** block into the forever loop. 

```blocks
loops.forever(() => {
    light.pixels.graph(
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
    loops.pause(400)
})
```

**Build the block** 
    * Change the value of pause to **400**. 

Download the code to @boardname@ and try shining a light on and off of it. 

## Good work!  

In the next page, you'll learn how to create the light monster to go along with the code you've written. Happy building! 

### ~button /projects/light-monster/make

NEXT: Make 

### ~ 
