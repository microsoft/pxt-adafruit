# strobe light challenges

Coding challenges for the strobe light tutorial. #docs

## Before we get started

Complete the following guided tutorial:

* [tutorial](/microbit/lessons/strobe-light/tutorial)

At the end of the tutorial, click `keep editing`. Your code should look like this:

```
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        led.plot(i, j)
        basic.pause(200)
    }
}
```

### Challenge 1

### @video td/videos/strobe-light-1

Make the LEDs light up faster by changing the **pause** from 200 to 100 milliseconds:

```
for (let i1 = 0; i1 < 5; i1++) {
    for (let j1 = 0; j1 < 5; j1++) {
        led.plot(i1, j1)
        basic.pause(100) // ***
    }
}
```

* Run the code to see if it works as expected.

### Challenge 2

### @video td/videos/strobe-light-2

Make the board light up by rows instead of by columns by swapping the `i` and `j` variables in `led->plot(i, j)`.

```
for (let i2 = 0; i2 < 5; i2++) {
    for (let j2 = 0; j2 < 5; j2++) {
        led.plot(j2, i2) // ***
        basic.pause(100)
    }
}
```

* Run the code to see if it works as expected.

### Challenge 3

### @video td/videos/strobe-light-ultimate

Now that all the LEDs are lit up, let's make them turn off by reversing the strobe light pattern! You can use `led->unplot` to turn off a single LED.

```
for (let i3 = 0; i3 < 5; i3++) {
    for (let j3 = 0; j3 < 5; j3++) {
        led.plot(j3, i3)
        basic.pause(100)
    }
}
for (let k = 0; k < 5; k++) {
    for (let l = 0; l < 5; l++) {
        led.unplot(4 - l, 4 - k) // ***
        basic.pause(100) // ***
    }
}
```

