# digital pet challenges

Coding challenges for the digital pet tutorial. 

## Before we get started

Complete the following guided tutorial:

* [tutorial](/lessons/digital-pet/tutorial)

At the end of the tutorial, click `keep editing`. Your code should look like this:

```
basic.forever(() => {
    if (input.buttonIsPressed("A")) {
        setSleep()
        basic.pause(5000)
    } else {
        setAwake()
    }
})
```

### Challenge 1

Now let's feed the pet! Add an **ELSE IF** statement that checks if button `B` is pressed. Click on the **ELSE** and type **IF** next to it to get the **ELSE IF**.

```
basic.forever(() => {
    if (input.buttonIsPressed("A")) {
        setSleep()
        basic.pause(5000)
    } else if (input.buttonIsPressed("B")) {

    }
    else {
        setAwake()
    }
})
```

### Challenge 2

Now we want to show your eating pet! Let's create a function called `set eat` that will do create an image. Store that image in a variable and then show it.

```
export function setEat() {
    let img = images.createImage(`
. # . # .
. . # . .
. . # . .
. # . # .
. . # . .
`)
    img.showImage(0)
}
```

Once you create the function `set eat`, call it in the **ELSE IF** statement that checks if button `B` is pressed.

```
basic.forever(() => {
    if (input.buttonIsPressed("A")) {
        setSleep()
        basic.pause(5000)
    } else if (input.buttonIsPressed("B")) {
        setEat()
    }
    else {
        setAwake()
    }
})
```

### Challenge 3

Have your pet tell you when it is going to sleep! Do this inside of the **IF** statement that checks if button `A` is pressed before you call the function `set sleep`.

```
basic.forever(() => {
    if (input.buttonIsPressed("A")) {
        basic.showString("I am going to sleep.", 150) // ***
        setSleep()
        basic.pause(5000)
    } else if (input.buttonIsPressed("B")) {
        setEat()
    }
    else {
        setAwake()
    }
})
```

### Challenge 4

Now, how about we keep track of how many times our pet eats? Add a global variable  called `feed` that keeps track of how many times you feed your pet. If button `B` is pressed, increment `feed` by one.  Add a condition `on shake` to check your total.

```
feed = 0 // ***
basic.forever(() => {
    if (input.buttonIsPressed("A")) {
        basic.showString("I am going to sleep.", 150)
        setSleep()
        basic.pause(5000)
    } else if (input.buttonIsPressed("B")) {
        feed = feed + 1 // ***
        setEat()
    }
    else {
        setAwake()
    }
})
input.onGesture(Gesture.Shake, () => {
    basic.showNumber(feed, 150) // ***
}) // ***
```

### Challenge 5

Program your pet to say that it is hungry after 60 seconds.

**Hint**: use `input->running time`

