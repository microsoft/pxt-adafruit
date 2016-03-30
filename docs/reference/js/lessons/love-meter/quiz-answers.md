# love meter quiz answers

The answers to the love meter quiz. #LED #screen  #variables #docs

This is the answer key for the [love meter quiz](/microbit/lessons/love-meter/quiz).

## 1. What does on pin pressed ("P0") do?

<br/>

It's a method that runs code when the user holds the GND pin with a finger of one hand and presses pin P0, completing a circuit.

## 2. Create a condition for on pin pressed ("P1").

```
input.onPinPressed(TouchPin.P1, () => {
})
```

## 3. What does this line of code generate?

```
let x = Math.random(10)
```

<br/>

It generates a random number between 0 and 9 then stores that number in a variable.

## 4. Why do you have to add 1 to variable x?

```
x = x + 1
```

<br/>

You have to add 1 if you want to generate a random number between 1 and 10 .

## 5. Why do you have to hold ground (GND) to make this work on the BBC micro:bit?

<br/>

You have told GND to complete the circuit.

