# blink challenges

Coding challenges for the blink tutorial #docs #challenges

## Before we get started

Complete the [blink](/microbit/lessons/blink/activity) activity and your code will look like this:

```
basic.forever(() => {
    led.plot(2, 2)
    basic.pause(200)
    led.unplot(2, 2)
    basic.pause(200)
})
```

### Challenge 1

### @video td/videos/blink-1

Let's display a "smiley face" on the screen! We'll start by plotting the eyes.

Add `led->plot (1,1)` and `led->plot(3,1)` under `led->plot(2,2)` ; then add `led->unplot(1,1)` and `led->unplot(3,1)` after pause. When you're ready, don't forget to run your code to try it out!

```
basic.forever(() => {
    led.plot(2, 2)
    led.plot(1, 1) 
    led.plot(3, 1) 
    basic.pause(200)
    led.unplot(2, 2)
    led.unplot(1, 1) 
    led.unplot(3, 1) 
    basic.pause(200)
})
```

### Challenge 2

### @video td/videos/blink-2

Let's add the code to plot the mouth by plotting and unplotting `(1,4)`, `(2,4)` and `(3,4)`.

```
basic.forever(() => {
    led.plot(2, 2)
    led.plot(1, 1)
    led.plot(3, 1)
    led.plot(1, 4) 
    led.plot(2, 4) 
    led.plot(3, 4) 
    basic.pause(200)
    led.unplot(2, 2)
    led.unplot(1, 1)
    led.unplot(3, 1)
    led.unplot(1, 4) 
    led.unplot(2, 4) 
    led.unplot(3, 4) 
    basic.pause(200)
})
```

### Challenge 3

### @video td/videos/blink-3

Let's keep using `led->plot` to convert the mouth into a smiley face.

```` bitmatrix
0 0 0 0 0
0 1 0 1 0
0 0 1 0 0
1 0 0 0 1
0 1 1 1 0
````

### Challenge 4

Let's make it blink a bit faster. To do so, we need to reduce the amount of time used in ``basic->pause`` to ``100`` milliseconds.

### Challenge 5

Create your own image by changing the coordinates in `led->plot`!

