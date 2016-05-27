# looper challenges

Coding challenges for the looper tutorial. #docs

## Before we get started

Complete the following guided tutorial:

* [tutorial](/lessons/looper/tutorial)

At the end of the tutorial, click `keep editing`. Your code should look like this:

```
for (let i = 0; i < 6; i++) {
    basic.showNumber(i, 150)
    basic.pause(2000)
}
```

### Challenge 1

What if we want to count up to lucky number 7 instead? Let's do that by changing the ending value to `8` instead of `6`.

```
for (let i1 = 0; i1 < 8; i1++) {
    basic.showNumber(i1, 150) // ***
    basic.pause(2000)
}
```

* Run the program now to see your changes.

### Challenge 2

What about 9? Let's do that by changing the ending value to `10`.

```
for (let i2 = 0; i2 < 10; i2++) {
    basic.showNumber(i2, 150)
    basic.pause(2000)
}
```

* Run your code to see the new counter.

### Challenge 3

Now let's start counting from `3` instead! Our for loop will always start at `0` so we simply add `3` to the `i` variable when passing it to `basic->show number`.

```
for (let i3 = 0; i3 < 8; i3++) {
    basic.showNumber(i3 + 3, 150) // ***
    basic.pause(2000)
}
```

Run it on the simulator!

### Challenge 4

Now, let's **count down from 9**. Change the line `basic->show number(i + 3, 150)` to `basic->show number(9 - i, 150)`.

```
for (let i4 = 0; i4 < 10; i4++) {
    basic.showNumber(9 - i4, 150) // ***
    basic.pause(2000)
}
```

* Run the code to make sure it is doing what is expected.

### Challenge 5

After counting down from `9` let's show the string `BOOOM`!

