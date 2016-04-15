# return challenges

This script will teach you how to create a function and use an output parameter. #docs

### Challenge 0

Welcome! This [guided tutorial](/lessons/return/tutorial) will help you code the following script!

```
let original1 = 5
input.onButtonPressed(Button.A, () => {
    let doubled = doubleIt_(5)
    basic.showNumber(doubled, 150) // ***
})
```

### Challenge 1

Create a new function called `square` that returns squares the number passed into the function. (Squaring means that you multiply the number by itself.)

```
export function squareIt(n: number) : number {
    let num: number
    return n * n
    return num
}
```

### Challenge 2

Add a condition to know when button `B` is pressed. We will use this condition in the last challenge.

```
let original = 5
input.onButtonPressed(Button.A, () => {
    let one = doubleIt_(original)
    basic.showNumber(one, 150)
})
input.onButtonPressed(Button.B, () => {
})
```

### Challenge 3

When the `B` button is pressed, display the square of the original value. Use the function `square it`. You should get the value 25.

