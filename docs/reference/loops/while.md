# While

### @parent blocks/language
 

Repeat code while a [Boolean](/reference/types/boolean) `condition` is true.

```blocks
while(true) {
}
```

The while loop has a *condition* that evaluates to a [Boolean](/reference/types/boolean) value. After the `do` keyword, add the code that you want to run while the `condition` is `true`. The while loop concludes with `end while`.

The condition is tested before any code runs. Which means that if the condition is false, the code inside the loop doesn't execute.

### Example: diagonal line

The following example uses a while loop to make a diagonal line on the LED screen (points `0, 0`, `1, 1`, `2, 2`, `3, 3`, `4, 4`).

```blocks
let index = 4;
while(index >= 0) {
    led.plot(index, index);
    index--;
}
```

### Lessons

[rotation animation](/lessons/rotation-animation)

### See also

[on button pressed](/reference/input/on-button-pressed), [for](/reference/loops/for), [if](/reference/logic/if), [forever](/reference/basic/forever)

