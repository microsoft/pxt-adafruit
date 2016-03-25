# compass quiz answers

Create an actual compass to show your direction: North, South, East, or West 

## Name

## Directions

Use this activity document to guide your work in the [compass tutorial](/microbit/lessons/compass/activity).

Answer the questions while completing the tutorial. Pay attention to the dialogues!

## 1. What is the purpose of the 'compass heading' block?

Gets the compass heading of the micro:bit in degrees

<br/>

## 2. Write the code that stores the compass heading into a local variable called 'degrees'. 

<br/>

```
let degrees = input.compassHeading()
```

## 3. Write the 'If statement' that will check if the device is mostly pointing North. Display 'N' on the micro:bit 

<br />

```
if (degrees < 45) {
    basic.showString("N", 150)
}
```

## 3. Write the 'If statement' that will check if the device is mostly pointing East. Display 'E' on the micro:bit 

<br />

```
if (degrees < 135) {
    basic.showString("E", 150)
}
```

## 3. Write the 'If statement' that will check if the device is mostly pointing South. Display 'S' on the micro:bit 

<br />

```
if (degrees < 225) {
    basic.showString("S", 150)
}
```

