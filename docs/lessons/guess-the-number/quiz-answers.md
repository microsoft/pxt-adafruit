# guess the number quiz answers

Learn how to generate a random number on the micro:bit. #math #random #docs

This is the answer key for the [guess the number quiz](/microbit/lessons/guess-the-number/quiz).

## 1. What is on button pressed?

Answers may vary. Generally, on button pressed run code when an input button is pressed. The micro:bit has two input buttons: A and B.

## 2. Consider the following directions

Write the line of code that creates a condition when the BBC micro:bit button A is pressed.

```
input.onButtonPressed(Button.A, () => {
})
```

## 3. Consider the following directions

Write the line of code that creates a **local variable** and a **random number**.

```
let randomNumber = Math.random(10)
```

## 4. Consider the following code

```
randomNumber = Math.random(10)
```

If the rectangle below represents the BBC micro:bit, shade the areas that will be displayed. Explain why that particular area is shaded.

![](/static/mb/lessons/guess-the-number-0.png)

The random number generator will return a number from 0 to the limit. However, not including the limit unless the limit is 0. So you can place an X to represent any single digit number.

