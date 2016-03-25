# magic logo quiz answers

show an image that points up when the logo is up #logo #show #create #docs

## Name

## Directions

This is the answer key for the [magic logo quiz](/microbit/lessons/magic-logo/quiz)

Answer the questions while completing the tutorial. Pay attention to the dialogues!

## 1. Define 'on logo up' 

A function that will run code when the BBC micro:bit screen is facing up and vertically orientated.

<br/>

## 2. Consider the following directions

Write the condition that detects when the BBC micro:bit logo is facing up and vertically orientated.

<br/>

```
input.onLogoUp(() => {
})
```

<br/>

## 3. Consider the following animation

![](/static/mb/lessons/magic-logo-0.png)

Write the code to display a downward pointing arrow when the logo is down.

<br/>

```
input.onLogoDown(() => {
    basic.plotImage(`
. . # . .
. . # . .
# # # # #
. # # # .
. . # . .
`)
})
```

