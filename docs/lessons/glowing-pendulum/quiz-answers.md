# glowing pendulum quiz answers

construct a pendulum that glows using acceleration #LED #number #math #acceleration #docs

## Name

## Directions

Use this activity document to guide your work in the [glowing pendulum tutorial](/microbit/lessons/glowing-pendulum/tutorial)

Answer the questions while completing the tutorial. Pay attention to the dialogues!

## 1. Why are you creating a 'forever' loop?

<br/>

We are creating a forever loop to constantly display the appropriate brightness on the LED display.

## 2. Write the line of code to measure the acceleration with respect to the "y" axis and store this value in a local variable called 'acceleration'.

<br/>

```
let acceleration = input.acceleration("y")
```

## 3. After storing the acceleration in a variable, write the code to take the absolute value of the acceleration, and store this value inside 'acceleration'.

<br/>

```
acceleration = math.abs(acceleration)
```

## 4. Write the code that uses the acceleration value from question #3 to set the brightness on the BBC micro:bit.

<br/>

```
acceleration = acceleration / 4
led.setBrightness(acceleration)
```

## 5. Write the code that tuns all the LEDs on (as the image displays below)

![](/static/mb/lessons/glowing-pendulum-1.png)

<br/>

```
led.plotAll()
```

