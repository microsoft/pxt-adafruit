# If

### @parent blocks/language
 

Conditionally run code depending on whether a [Boolean](/blocks/logic/boolean) condition is true or false.

```blocks
if(true) {
}
```

Click on the dark blue gear icon (see above) to add an *else* or *if* to the current block.

### Example: random LED

When user presses the left button, turn on the status LED on or off randomly.

```blocks
input.leftButton.onEvent(ButtonEvent.Click, () => {
    let x = Math.random(5)
    if(x < 5) {
        light.statusLED(true);
    } else { 
        light.statusLED(false);
    }
})
```

### See also

[while loop](/blocks/loops/while), [for](/blocks/loops/for), [boolean](/blocks/logic/boolean)

