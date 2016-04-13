# While

Repeat code in a loop while a condition is true.

### @parent blocks/language
 

Repeat code while a [Boolean](/reference/types/boolean) `condition` is true.

### ~hide

```
let condition = false
```

### ~

### Block Editor

![](/static/mb/string-0.png)

The while loop has a *condition* that evaluates to a [Boolean](/reference/types/boolean) value. After the `do` keyword, add the code that you want to run while the `condition` is `true`. The while loop concludes with `end while`.

The condition is tested before any code runs. Which means that if the condition is false, the code inside the loop doesn't execute.

### Example: diagonal line

The following example uses a while loop to make a diagonal line on the LED screen (points `0, 0`, `1, 1`, `2, 2`, `3, 3`, `4, 4`).

// index is set to 4

![](/static/mb/blocks/var-10.png)

// subtract 1 from `index` each time through loop

### Lessons

[rotation animation](/lessons/rotation-animation)

### See also

[on button pressed](/reference/input/on-button-pressed), [for](/reference/loops/for), [if](/blocks/if), [forever](/reference/basic/forever)

