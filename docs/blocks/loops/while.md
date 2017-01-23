# While

Repeat code while a [Boolean](/blocks/logic/boolean) `condition` is true.

```block
while(true) {
}
```

The while loop has a *condition* that evaluates to a [Boolean](/blocks/logic/boolean) value. After the `do` keyword, add the code that you want to run while the `condition` is `true`. The while loop concludes with `end while`.

The condition is tested before any code runs. Which means that if the condition is false, the code inside the loop doesn't execute.

### Example: diagonal line

The following example uses a while loop to set pixels to red in backward order.

```blocks
input.leftButton.onEvent(ButtonEvent.Click, () => {
    let index = 9;
    while(index >= 0) {
        light.builtin.setPixelColor(index, light.colors(NeoPixelColors.Red))
        index--;
    }
})
```

### See also

[for](/blocks/loops/for)

