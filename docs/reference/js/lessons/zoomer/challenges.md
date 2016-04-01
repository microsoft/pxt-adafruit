# zoomer challenges

Coding challenges for the zoomer tutorial.#acceleration.

## Before we get started

Complete the following [guided tutorial](/microbit/lessons/zoomer/tutorial) and your finished code should look like this:

```
basic.forever(() => {
    let az = input.acceleration("z")
    basic.showNumber(az, 150)
})
```

### Challenge 1

### @video td/videos/zoomer-2

We'll modify the code to display the `x` acceleration if the `A` button is pressed. For that, we need to store `input->acceleration(x)` in a new variable `ax` and use a `input->button is pressed(A)` to detect if the button is pressed.

```
basic.forever(() => {
    let az1 = input.acceleration("z")
    let ax = input.acceleration("x")
    if (input.buttonIsPressed("A")) {
        basic.showNumber(ax, 150) // ***
    } else {
        basic.showNumber(az1, 150) // ***
    }
})
```

* Run the code to see if it works as expected.

### Challenge 2

Display the `y` acceleration when `B` is pressed by adding another `if` statement using `input->button is pressed(B)`.

