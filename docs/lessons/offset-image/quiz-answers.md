# offset image quiz answers

shift an image horizontally across the display with offset.

This is the answer key for the [offset image quiz](/microbit/lessons/offset-image/quiz).

## 1. What is a 'if, then, else statement' ? 

<br/>

An if-then statement will run a block of code if the condition specified is true. The statement will run the "else" block of code if that condition is false.

## 2. Consider the message

Write the line of code that that will create the message "Push button A" (Hint: This message appears `if` the offset is equal -4 then the BBC micro:bit will state "Push Button A").

<br/>

```
if (offset == -4) {
    basic.showString("Push Button A", 150)
}
```

## 3. Consider the following image

![](/static/mb/lessons/offset-image-0.png)

When with this image be displayed?

<br/>

When the offset is NOT equal to -4 then the BBC micro:bit will show the image above.

## 4. Consider the following image

![](/static/mb/lessons/offset-image-1.png)

Write the two lines of code that cause the `variable` offset to increase by one when button `A` is pressed.

<br/>

```
input.onButtonPressed(Button.A, () => {
    offset = offset + 1
})
```

