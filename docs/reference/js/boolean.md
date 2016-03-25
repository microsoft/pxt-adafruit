# Boolean

true or false.

### @parent js/language

A Boolean has one of two possible values: `true`; `false`.  Boolean (logical) operators (*and*, *or*, *not*) take Boolean inputs and yields a Boolean value. Comparison operators on other types ([numbers](/microbit/reference/types/number), [strings](/microbit/reference/types/string)) yields a Boolean value.

### Block Editor

In the Block Editor, the following blocks represent the true and false Boolean values, which can be plugged in anywhere a Boolean value is expected:

![](/static/mb/boolean-0.png)

The next three blocks represent the three Boolean (logic) operators:

![](/static/mb/boolean-1.png)

The next six blocks represent comparison operators that yield a Boolean value. Most comparisons you will do involve [numbers](/microbit/reference/types/number):

![](/static/mb/boolean-2.png)

### Touch Develop

### ~hide

```
let condition = true
let condition2 = true
```

### ~

Boolean values and operators are often used with an [if](/microbit/reference/logic/if) or [while](/microbit/js/while) statement to determine which code will execute next. For example:

```
if (condition && condition2) {
    // This code runs if both `condition` and `condition2` are `true`
} else {
    // This code runs if either `condition` or `condition2` is `false`
}
```

### Functions that return a Boolean

Some functions return a Boolean value, which you can store in a Boolean variable. For example, the following code gets the on/off state of `point (1, 2)` and stores this in the Boolean variable named `on`. Then the code clears the screen if `on` is `true`:

```
let on = led.point(1, 2)
if (on) {
    basic.clearScreen()
}
```

### Boolean operators

Boolean operators take Boolean inputs and evaluate to a Boolean output:

### Conjunction: `A and B`

`A and B` evaluates to `true` if-and-only-if both A and B are true:

- `false and false` = `false`

- `false and true` = `false`

- `true and false` = `false`

- `true and true` = `true`

### Disjunction: `A or B`

`A or B` evaluates to `true` if-and-only-if either A is true or B is true:

- `false or false` = `false`

- `false or true` = `true`

- `true or false` = `true`

- `true or true` = `true`

### Negation: `not A`

`not A` evaluates to the opposite (negation) of A:

* `not false` = `true`
* `not true` = `false`

### Example

This example turns on LED `3 , 3`, if LEDs `1 , 1` and `2 , 2` are both on:

```
if (led.point(1, 1) && led.point(2, 2)) {
    led.plot(3, 3)
}
```

### Comparisons of numbers and strings

When you compare two Numbers, you get a Boolean value, such as the comparison `x < 5` in the code below:

```
let x = Math.random(10)
if (x < 5) {
    basic.showString("Low", 150)
} else {
    basic.showString("High", 150)
}
```

See the documentation on [Numbers](/microbit/reference/types/number) for more information on comparing two Numbers. You can also [compare strings](/microbit/reference/types/string-functions) using the `equals` function.

### Lessons

[rotation animation](/microbit/lessons/rotation-animation), [digi yoyo](/microbit/lessons/digi-yoyo), [love meter](/microbit/lessons/love-meter), [zoomer](/microbit/lessons/zoomer)

### See also

[if](/microbit/reference/logic/if), [while](/microbit/js/while), [number](/microbit/reference/types/number)

