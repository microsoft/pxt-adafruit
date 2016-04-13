# prank wifi app challenges

My script. #docs

## Before we get started

Complete the following guided tutorial:

* [tutorial](/lessons/prank-wifi-app/tutorial)

At the end of the tutorial, click `keep editing`. Your code should look like this:

```
basic.showString("Check Wifi", 150)
basic.forever(() => {
    let xAccel = math.abs(input.acceleration("x"))
    let yAccel = math.abs(input.acceleration("y"))
    let zAccel = math.abs(input.acceleration("z"))
    let sum = xAccel + yAccel + zAccel
    if (sum < 1400) {
        basic.plotImage(`
. . . . .
. . . . .
. . # . .
. # # . .
# # # . .
`)
    } else if (sum >= 1400 && sum < 1680) {
        basic.plotImage(`
. . . . .
. . . # .
. . # # .
. # # # .
# # # # .
`)
    }
    else if (sum >= 1680) {
        basic.plotImage(`
. . . . .
. . . . .
. . . . .
. . . . .
# . . . .
`)
    }
})
```

**Challenge 1**

What if wanted to show the maximum connectivity of wifi instead of just 1, 3, or 4 bars?

Let's start by changing the first **IF** statement to `if sum <1200`.

Edit this line: **if** sum <1400 **then**

Just click on the `1400` and backspace until you can add your own number of `1200`.

```
basic.showString("Check Wifi", 150)
basic.forever(() => {
    let xAccel1 = math.abs(input.acceleration("x"))
    let yAccel1 = math.abs(input.acceleration("y"))
    let zAccel1 = math.abs(input.acceleration("z"))
    let sum1 = xAccel1 + yAccel1 + zAccel1
    if (sum1 < 1200) {
        basic.plotImage(`
. . . . .
. . . . .
. . # . .
. # # . .
# # # . .
`)
    } else if (sum1 >= 1400 && sum1 < 1680) {
        basic.plotImage(`
. . . . .
. . . # .
. . # # .
. # # # .
# # # # .
`)
    }
    else if (sum1 >= 1680) {
        basic.plotImage(`
. . . . .
. . . . .
. . . . .
. . . . .
# . . . .
`)
    }
})
```

**Challenge 2**

Let's add an **IF** at the bottom of your code that checks to see if `sum >= to 1200` **and** if `sum <1400`

```
basic.showString("Check Wifi", 150)
basic.forever(() => {
    let xAccel2 = math.abs(input.acceleration("x"))
    let yAccel2 = math.abs(input.acceleration("y"))
    let zAccel2 = math.abs(input.acceleration("z"))
    let sum2 = xAccel2 + yAccel2 + zAccel2
    if (sum2 < 1200) {
        basic.plotImage(`
. . . . .
. . . . .
. . # . .
. # # . .
# # # . .
`)
    } else if (sum2 >= 1400 && sum2 < 1680) {
        basic.plotImage(`
. . . . .
. . . # .
. . # # .
. # # # .
# # # # .
`)
    }
    else if (sum2 >= 1680) {
        basic.plotImage(`
. . . . .
. . . . .
. . . . .
. . . . .
# . . . .
`)
    }
    if (sum2 >= 1200 && sum2 < 1400) {
        basic.plotImage(`
. . . . #
. . . # #
. . # # #
. # # # #
# # # # #
`) // ***
    }
})
```

**Challenge 3**

Now it's your turn! Be creative and change the Wifi meter images to your own wifi image you're sure will prank your friends by editing the lines that call `plot image()`.

