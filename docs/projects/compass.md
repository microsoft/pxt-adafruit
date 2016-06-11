![](/static/mb/projects/a5-compass.png)

Use the compass to determine which direction you are heading.

## Step 1

Continuously sample the compass heading and store in the variable `degrees`:

```blocks
let degrees = 0;
basic.forever(() => {
    degrees = input.compassHeading();
});
```

## Step 2

If the degrees is less than 45, we are heading North:

```blocks
let degrees = 0;
basic.forever(() => {
    degrees = input.compassHeading();
    if (degrees <= 45) {
        basic.showString("N");
    } else if (false) { } else { }
});
```

### Step 3

Otherwise, if the degrees is less than 135, we are heading East:

```blocks
let degrees = 0;
basic.forever(() => {
    degrees = input.compassHeading();
    if (degrees <= 45) {
        basic.showString("N");
    } else if (degrees <= 135) {
        basic.showString("E");
    } else { }
});
```

### Step 4

Otherwise, if the degrees is less than 225, we are heading East:

```blocks
let degrees = 0;
basic.forever(() => {
    degrees = input.compassHeading();
    if (degrees <= 45) {
        basic.showString("N");
    } else if (degrees <= 135) {
        basic.showString("E");
    } else if (degrees <= 225) {
        basic.showString("S");
    } else {
    }
});
```

### Step 5

Otherwise, we are heading west. 

```blocks
let degrees = 0;
basic.forever(() => {
    degrees = input.compassHeading();
    if (degrees <= 45) {
        basic.showString("N");
    } else if (degrees <= 135) {
        basic.showString("E");
    } else if (degrees <= 225) {
        basic.showString("S");
    } else {
        basic.showString("W");
    }
});
```