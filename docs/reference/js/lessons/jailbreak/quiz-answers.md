# jailbreak quiz answers

break out of a counting loop by pressing button "A" #break #string #variables #docs

This is the answer key for the [jailbreak quiz](/microbit/lessons/jailbreak/quiz).

## 1. What does a 'break' statement do to a 'loop' ?

Exit a while or for loop before the loop is complete.

## 2. Consider the following directions

Write the line of code that will initialize a number `variable` to 0. Then create a second `variable` that tells us when we should `break` out of the loop. Set the `break` to false.

```
count = 0
shouldBreak = false
```

## 3. Consider the following directions

Write the line of code to stop incrementing `count` when the button is pressed. (Hint: This will set `should break` to true).

```
input.onButtonPressed("A", () => {
    shouldBreak = true
})
```

## 4. Consider the following directions

Add an `if` statement to determine whether or not we should break out of the loop. Then include the message "I'm Out!" and a smiley face **image** displayed. This will happen right before you `break` from the `while` loop. **Do not include the break **

```
if (shouldBreak) {
    basic.showString("I'M OUT!", 150)
    images.createImage(`
. # . # .
. # . # .
. . . . .
# . . . #
. # # # .
`).showImage(0)
}
```

