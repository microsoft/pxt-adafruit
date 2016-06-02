# transformers challenges

Coding challenges for the transformers tutorial. #docs

## Before we get started

Complete the following guided tutorial:

* [tutorial](/lessons/transformers/tutorial)

At the end of the tutorial, click `keep editing`. Your code should look like this:

```
let inital = 5
input.onButtonPressed(Button.A, () => {
    let doubled1 = double(initial)
    basic.showNumber(doubled1, 150) // ***
})
```

### Challenge 1

Create a new function called `square` that returns the square of the number passed into the function.

(Squaring means that you multiply the number by itself)

```
export function square(n: number) : number {
    let num: number
    return n * n
    return num
}
```

### Challenge 2

Add a condition for when button `B` is pressed. We will use this condition in the last challenge.

```
initial = 5
input.onButtonPressed(Button.A, () => {
    let doubled = double(initial)
    basic.showNumber(doubled, 150)
})
input.onButtonPressed(Button.B, () => {
}) // ***
```

**Challenge 3**

When the `B` button is pressed, display the square of the initial value. Use the function `square`. You should get the value 25.

