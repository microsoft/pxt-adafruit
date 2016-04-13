# compass activity

Display the direction that the micro:bit is facing using the compass 

### ~avatar avatar

Welcome! This guided tutorial will show you how to program a script that displays the direction the micro:bit is pointing. Let's get started!

### ~

Create a loop that will continuously update the reading of the compass.


```blocks
basic.forever(() => {
    
})
```

Store the reading of the micro:bit in a variable called `degrees`.

```blocks
basic.forever(() => {
    let degrees = input.compassHeading()
})
```

If `degrees` is less than `45`, then the compass heading is mostly pointing toward North. Display `N` on the micro:bit.

```blocks
basic.forever(() => {
    let degrees = input.compassHeading();
    if (degrees < 45) {
        basic.showString("N");
    }
});
```

If `degrees` is less than 135, the micro:bit is mostly pointing East. Display `E` on the micro:bit.


```blocks
basic.forever(() => {
    let degrees = input.compassHeading();
    if (degrees < 45) {
        basic.showString("N");
    }
    else if (degrees < 135) {
        basic.showString("E");
    }
});
```

If `degrees` is less than 225, the micro:bit is mostly pointing South. Display `S` on the micro:bit.


```blocks
basic.forever(() => {
    let degrees = input.compassHeading();
    if (degrees < 45) {
        basic.showString("N");
    }
    else if (degrees < 135) {
        basic.showString("E");
    }
    else if (degrees < 225) {
        basic.showString("S");
    }
});
```


If none of these conditions returned true, then the micro:bit must be pointing West. Display `W` on the micro:bit.

```blocks
basic.forever(() => {
    let degrees = input.compassHeading();
    if (degrees < 45) {
        basic.showString("N");
    }
    else if (degrees < 135) {
        basic.showString("E");
    }
    else if (degrees < 225) {
        basic.showString("S");
    }
    else {
        basic.showString("W");
    }
});
```

### ~avatar avatar

Excellent, you're ready to continue with the [challenges](/lessons/compass/challenges)!

### ~

