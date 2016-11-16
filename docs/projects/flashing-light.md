# Flashing light

### ~avatar avatar

Use the red LED to show a flashing light on the @boardname@!

### ~

## Step 1


Use [red LED](/reference/light/red-LED) and make your code look like this:

```blocks
light.redLED(true)
```

## Step 2

Add another [red LED](/reference/light/red-LED) and set it to false to turn it off.

```blocks
light.redLED(true)
light.redLED(false)
```

## Step 3

Add a [delay](/reference/control/delay) to wait after turning on / off the red LED.

```blocks
light.redLED(true)
control.delay(500)
light.redLED(false)
control.delay(500)
```

## Step 4

Put a [while loop](/reference/loops/while) around it.

```blocks
while (true) {
    light.redLED(true)
    control.delay(500)
    light.redLED(false)
    control.delay(500)
}
```