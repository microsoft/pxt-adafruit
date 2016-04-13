# digi yoyo challenges

Coding challenges for the digi yoyo. 

## Before we get started

Complete the following guided tutorial:

* [tutorial](/lessons/digi-yoyo/tutorial)

At the end of the tutorial, click `keep editing`. Your code should look like this:

```
let count = 0
while (count < 10) {
    basic.pause(1000)
    basic.showNumber(count, 150)
    count = count + 1
}
```

### Challenge 1

How about we create a counter that counts backwards from 10 to 1? Let's add a while loop that executes only when `count` is greater than 0.

```
let count1 = 0
while (count1 < 10) {
    basic.pause(1000)
    basic.showNumber(count1, 150)
    count1 = count1 + 1
}
while (count1 > 0) {
}
```

### Challenge 2

### @video td/videos/digi-yoyo-1-2

Inside of the while loop, let's add `pause->(1000)` so that we have a pause between each number as it's counting down. Also, let's show `count`!

```
let count2 = 0
while (count2 < 10) {
    basic.pause(1000)
    basic.showNumber(count2, 150)
    count2 = count2 + 1
}
while (count2 > 0) {
    basic.pause(1000) // ***
    basic.showNumber(count2, 150) // ***
}
```

* Run the code to see if it works as expected.

### Challenge 3

Now, we need `count` to decrease by one after the BBC micro:bit has displayed the value of `count`.

We can do this by adding this line:

`count := count - 1`

