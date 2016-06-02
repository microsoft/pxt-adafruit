# If

### @parent blocks/language
 

Conditionally run code depending on whether a [Boolean](/reference/types/boolean) condition is true or false.

```blocks
if(true) {
}
```

In the Block Editor, click on the dark blue gear icon (see above) to add an *else* or *if* to the current block.

### Example: adjusting screen brightness

```blocks
if(input.lightLevel()<100){
    led.setBrightness(255);
}
```

If the [light level](/input/light-level) is `< 100`, this code sets the brightness to `255`:

### Lessons

[love meter](/lessons/love-meter), [zoomer](/lessons/zoomer)

### See also

[while loop](/reference/loops/while), [for](/reference/loops/for), [boolean](/reference/types/boolean)

