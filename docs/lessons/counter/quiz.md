# counter quiz 

Learn how to create a counter with the BBC micro:bit button. 

## Name

## Directions

Use this activity document to guide your work in the [counter tutorial](/microbit/lessons/counter/activity).

Answer the questions while completing the tutorial. Pay attention to the dialogues!

## 1. What is a variable?

<br/>

## 2. Draw the stored value for the variable called count

```
let count = 0
```

![](/static/mb/empty-microbit.png)

<br/>

## 3. Draw which LEDs are ON after running this code and pressing button "A" once. Explain you chose to draw that number

```
let count_ = 0
input.onButtonPressed(Button.A, () => {
    count_ = count_ + 1
    basic.showNumber(count_, 100)
})
```

![](/static/mb/empty-microbit.png)

<br/>

## 4. Draw which LEDs are ON after running this code and pressing button "A" three times. Explain you chose to draw that number

```
count_ = 0
input.onButtonPressed(Button.A, () => {
    count_ = count_ + 1
    basic.showNumber(count_, 100)
})
```

![](/static/mb/empty-microbit.png)

<br/>

