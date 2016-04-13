# zoomer quiz answers

Measure the acceleration on the micro:bit in the "z" direction.

This is the answer key for the [zoomer quiz](/lessons/zoomer/quiz).

## 1. What is 'acceleration'?

Acceleration is amount of force being applied to the BBC micro:bit in one of three specified directions.

## 2. Consider the following directions

Write the line of code to measure the acceleration and then store in it a variable.

<br/>

```blocks
let accX_ = input.acceleration("x")
```

Note: acceleration does not have be measured in the "x" direction. It can also be in the "y" or "z" direction.

## 3. Consider the following directions

After storing the acceleration in a variable, write the code to show acceleration on the BBC micro:bit as a number

<br/>

```blocks
let accX = input.acceleration("x")
basic.showNumber(accX, 150)
```

Note: make sure the same variable name ("acc x" in this case) is the same in both lines of code..

