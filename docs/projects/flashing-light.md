# Flashing light

### ~avatar avatar

Use the red LED to show a flashing light on the @boardname@!

### ~

## Step 1


Use [red LED](/reference/light/status-led) and make your code look like this:

```blocks
light.statusLED(true)
```

## Step 2

Add another [red LED](/reference/light/status-led) and set it to false to turn it off.

```blocks
light.statusLED(true)
light.statusLED(false)
```

## Step 3

Add a [delay](/reference/control/pause) to wait after turning on / off the red LED.

```blocks
light.redLED(true)
control.pause(500)
light.redLED(false)
control.pause(500)
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