# prank wifi quiz answers

create a fake wifi app to trick your friends.

## Name

## Directions

Use this activity document to guide your work in the [prank WiFi activity](/lessons/prank-wifi/activity)

Answer the questions while completing the tutorial. Pay attention to the dialogues!

## 1. Write the lines of code that takes the absolute value of the accelerations with respect to the x, y and z axis and stores the values as Local Variables

<br/>

```blocks
let xAccel = Math.abs(input.acceleration(Dimension.X))
let yAccel = Math.abs(input.acceleration(Dimension.Y))
let zAccel = Math.abs(input.acceleration(Dimension.Z))
```

<br/>

## 2. Write the lines of code that add all the accelerations together to get the total acceleration and stores the value as a Local Variable called "sum"

<br/>

<br/>

```blocks
let xAccel = Math.abs(input.acceleration(Dimension.X))
let yAccel = Math.abs(input.acceleration(Dimension.Y))
let zAccel = Math.abs(input.acceleration(Dimension.Z))
let sum = xAccel + yAccel + zAccel
```

<br/>

## 3. Write the 'If statement' used if the sum of the acceleration value is less than 1400 milli-gravitys. Then write the code that will plot an image of the fake amount of WiFi if the acceleration in this 'If statement'

<br/>

```blocks
let xAccel = Math.abs(input.acceleration(Dimension.X))
let yAccel = Math.abs(input.acceleration(Dimension.Y))
let zAccel = Math.abs(input.acceleration(Dimension.Z))
let sum = xAccel + yAccel + zAccel
if (sum < 1400) {
    basic.showLeds(`
. . . . .
. . . . .
. . # . .
. # # . .
# # # . .
`)
}
```

<br/>

## 4. Write tje 'If statement' used if the sum of the acceleration value is greater than 1400 milli-gravitys but less than 1680 milli-gravitys. Then write the code that will plot an image of the fake amount of WiFi inside this 'If statement'

<br/>

<br/>

```blocks
let xAccel = Math.abs(input.acceleration(Dimension.X))
let yAccel = Math.abs(input.acceleration(Dimension.Y))
let zAccel = Math.abs(input.acceleration(Dimension.Z))
let sum = xAccel + yAccel + zAccel
if (sum >= 1400 && sum < 1680) {
    basic.showLeds(`
. . . . .
. . . # .
. . # # .
. # # # .
# # # # .
`)
}
```

## 5. Write the code to display this specific image on the device

![](/static/mb/lessons/prank-wifi-0.png)

<br/>

<br/>

```blocks
let xAccel = Math.abs(input.acceleration(Dimension.X))
let yAccel = Math.abs(input.acceleration(Dimension.Y))
let zAccel = Math.abs(input.acceleration(Dimension.Z))
let sum = xAccel + yAccel + zAccel
if (sum >= 1680) {
    basic.showLeds(`
. . . . .
. . . . .
. . . . .
. . . . .
# . . . .
`)
}
```

