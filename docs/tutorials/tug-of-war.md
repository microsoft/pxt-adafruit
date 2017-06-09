# Tug of war

Play a game with a friend to see who can mash buttons the fastest!

### Step 1

Let's start by creating two variables, one named "a" and one named "b".

### Step 2

Now lets use the ``on button click`` and ``change variable`` blocks to increment the "a" variable when the A button is pressed.

```blocks
let a = 0;
input.buttonA.onEvent(ButtonEvent.Click, () => {
    a += 1
})
```

### Step 3

Do the same thing for the "b" variable when the B button is pressed.

```blocks
let b = 0
let a = 0
input.buttonA.onEvent(ButtonEvent.Click, () => {
    a += 1
})
input.buttonB.onEvent(ButtonEvent.Click, () => {
    b += 1
})
```

### Step 4

Next, drag out an ``on start`` block and place a ``while`` loop inside it.

```blocks
let b = 0
let a = 0
input.buttonA.onEvent(ButtonEvent.Click, () => {
    a += 1
})
input.buttonB.onEvent(ButtonEvent.Click, () => {
    b += 1
})
while (true) {

}
```

### Step 5 @nohint

We want the game to keep going as long as both "a" and "b" are below 50.

```blocks
let b = 0
let a = 0
input.buttonA.onEvent(ButtonEvent.Click, () => {
    a += 1
})
input.buttonB.onEvent(ButtonEvent.Click, () => {
    b += 1
})
while (true) {

}
```

### Step 6

Try using the ``and`` and ``<`` blocks to create the end condition for the ``while`` loop.

```blocks
let b = 0
let a = 0
input.buttonA.onEvent(ButtonEvent.Click, () => {
    a += 1
})
input.buttonB.onEvent(ButtonEvent.Click, () => {
    b += 1
})
while (a < 50 && b < 50) {

}
```

### Step 7

Within the while loop, place an ``if else`` block. We will use this to show who is in the lead.

```blocks
let b = 0
let a = 0
input.buttonA.onEvent(ButtonEvent.Click, () => {
    a += 1
})
input.buttonB.onEvent(ButtonEvent.Click, () => {
    b += 1
})
while (a < 50 && b < 50) {
    if (false) {

    }
    else {

    }
}
```

### Step 8

Use the ``<`` block and ``set all pixels`` block to set the color to yellow if "a" is in the lead and blue if "b" is in the lead.


```blocks
let b = 0
let a = 0
input.buttonA.onEvent(ButtonEvent.Click, () => {
    a += 1
})
input.buttonB.onEvent(ButtonEvent.Click, () => {
    b += 1
})
while (a < 50 && b < 50) {
    if (a > b) {
        light.pixels.setAll(Colors.Yellow)
    } else {
        light.pixels.setAll(Colors.Blue)
    }
}
```

### Step 9

Finally, use ``play sound`` to play a sound when the game is over.


```blocks
let b = 0
let a = 0
input.buttonA.onEvent(ButtonEvent.Click, () => {
    a += 1
})
input.buttonB.onEvent(ButtonEvent.Click, () => {
    b += 1
})
while (a < 50 && b < 50) {
    if (a > b) {
        light.pixels.setAll(Colors.Yellow)
    } else {
        light.pixels.setAll(Colors.Blue)
    }
}
music.playSound(music.sounds(Sounds.PowerUp))
```