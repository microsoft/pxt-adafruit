# speed button quiz 

counter that keeps track of how many times button "A" has been pressed.

## Name

## Directions

Use this activity document to guide your work in the [speed button tutorial](/lessons/speed-button/activity).

Answer the questions while completing the tutorial. Pay attention to the dialogues!

## 1. What is a variable?

## 2. Draw which LEDs show the number being stored as a global variable called count

```blocks
let count = 0
```

![](/static/mb/empty-microbit.png)

## 3. Draw which LED is ON after running this code and pressing Button A twice. Explain why you chose to draw that number 

```blocks
let count = 0
input.onButtonPressed(Button.A, () => {
    count = count + 1
    basic.showNumber(count, 100)
})
```

![](/static/mb/empty-microbit.png)

<br/>

## 4. Draw which LED is ON after running this code and pressing Button A five times. Explain why you chose to draw that number.

```blocks
let count = 0
input.onButtonPressed(Button.A, () => {
    count = count + 1
    basic.showNumber(count, 100)
})
```

![](/static/mb/empty-microbit.png)

<br/>

