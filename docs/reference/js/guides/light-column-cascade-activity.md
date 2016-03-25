# Light Column Cascade Worksheet

My script. #docs

**Challenge 0**

Great Job! You have completed the Light Column Cascade tutorial having a nested for loop that plots each individual LED by column adding a delay between lighting each LED.

```
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        led.plot(i, j)
        basic.pause(200)
    }
}
```

**Challenge 1**

Make the board light up faster by making the pause less time.

```
for (let i1 = 0; i1 < 5; i1++) {
    for (let j1 = 0; j1 < 5; j1++) {
        led1.plot(i1, j1)
        basic1.pause(100) // ***
    }
}
```

**Challenge 2**

Make the board light up by rows instead of by columns by changing the i to the y position and j to the x position.

```
for (let i2 = 0; i2 < 5; i2++) {
    for (let j2 = 0; j2 < 5; j2++) {
        led2.plot(j2, i2) // ***
        basic2.pause(100)
    }
}
```

