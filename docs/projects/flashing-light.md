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

Add a **pause** to wait after turning on / off the red LED.

```blocks
light.statusLED(true)
loops.pause(500)
light.statusLED(false)
loops.pause(500)
```

## Step 4

Put a [while loop](/blocks/loops/while) around it.

```blocks
while (true) {
    light.statusLED(true)
    loops.pause(500)
    light.statusLED(false)
    loops.pause(500)
}
```