# offset image challenges

Coding challenges for the offset image tutorial. #docs

## Before we get started

Complete the following guided tutorial:

* [tutorial](/microbit/lessons/offset-image/tutorial)

At the end of the tutorial, click `keep editing`. Your code should look like this:

```
offset = 0
basic.forever(() => {
    if (offset == -4) {
        basic.showString("Push button A", 150)
    }
    images.createImage(`
. . # . .
. . # . .
. . # . .
. # # # .
. . # . .
`).showImage(offset)
})
input.onButtonPressed("A", () => {
    offset = offset + 1
})
```

### Challenge 1

Create a condition for if button `B` is pressed. We want the image to move to the left when button `B` is pressed.

```
offset = 0
basic.forever(() => {
    if (offset == -4) {
        basic.showString("Push button A", 150)
    }
    images.createImage(`
. . # . .
. . # . .
. . # . .
. # # # .
. . # . .
`).showImage(offset)
})
input.onButtonPressed("A", () => {
    offset = offset + 1
})
input.onButtonPressed("B", () => {
    offset = offset - 1 // ***
}) // ***
```

* Run the code to see if it works as expected.

### Challenge 2

### @video td/videos/offset-image-2

Now we want to make sure that the button does not go off the screen to the right. Add a new line that checks to see if offset = 5 after button `A` is pressed.

If `offset = 5` then prompt the user to move the image to the left by displaying the text: "Push button B".

```
offset = 0
basic.forever(() => {
    if (offset == -4) {
        basic.showString("Push button A", 150)
    }
    if (offset == 5) {
        basic.showString("Press Button B", 150) // ***
    }
    images.createImage(`
. . # . .
. . # . .
. . # . .
. # # # .
. . # . .
`).showImage(offset)
})
input.onButtonPressed("A", () => {
    offset = offset + 1
})
input.onButtonPressed("B", () => {
    offset = offset - 1
})
```

* Run the code to see if it works as expected.

**Challenge 3**

Now make sure the image does not go off the left side and if it does, prompt the user to push button `A`.

