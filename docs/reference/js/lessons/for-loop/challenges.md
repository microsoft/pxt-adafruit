# looper challenges

These challenges will allow you to create a counter from 0-5 and then from 5-0. #docs

### Challenge 0

Welcome! This [guided tutorial](/microbit/bcvgkf) will assist you with the following activity:

```
for (let i = 0; i < 6; i++) {
    led.showNumber(i, 150)
    basic.pause(2000)
}
```

### Challenge 1

Go through the loop faster by changing the length of the pause. This is the line you will be editing: `basic->pause(2000)`

```
for (let i1 = 0; i1 < 6; i1++) {
    basic.showNumber(i1, 150)
    basic.pause(500) // ***
}
```

### Challenge 2

Now, let's count down from 5 instead of counting up to 5. Change the line `basic->show number(i, 150)` to `basic->show number(5 - i, 150)`.

```
for (let i2 = 0; i2 < 6; i2++) {
    basic.showNumber(5 - i2, 150) // ***
    basic.pause(2000)
}
```

### Challenge 3

Have the number count up in 2's from zero. It should go: 0, 2, 4, 6, 8, 10.

