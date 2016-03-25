# button challenges

My script. #docs

### Challenge 0

Howdy! This [guided tutorial](/microbit/rxqgzy) will help you complete this activity!

In this guide, you will learn how to use buttons and show text on the screen. Let's start by adding to respond **when the left button is pressed**.

```
input.onButtonPressed("A", () => {
})
```

All the code inside `input->on button pressed` runs when the button is pressed. Let's add the code to show some text.

```
input.onButtonPressed("A", () => {
    basic.showString("hello", 150)
})
```

### Challenge 1

Let's add an event handler for Button `B`.

```
input.onButtonPressed("A", () => {
    basic.showString("hello", 150)
})
input.onButtonPressed("B", () => {
})
```

### Challenge 2

Display `bye` when the `B` button is pressed.

```
input.onButtonPressed("A", () => {
    basic.showString("hello", 150)
})
input.onButtonPressed("B", () => {
    basic.showString("bye", 150)
})
```

### Challenge 3

Change the strings so that they display some other text. In order to do so, you will need to edit what is inside the quotation marks in `basic->show string`.

