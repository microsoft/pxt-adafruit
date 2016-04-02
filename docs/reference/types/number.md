# Number

An integer number.

### @parent blocks/language

A *Number* is an integer such as `42` or `-42`. More precisely, a *Number* is a signed 32-bit integer (two's complement).

### Declare a number variable

Use the [var statement](/microbit/reference/variables/var) and the [assignment operator](/microbit/reference/variables/assign) declare a *local* number variable. Like this:

![](/static/mb/blocks/number-0.png)

### Arithmetic operators

The following arithmetic operators work on numbers and return a [Number](/microbit/reference/types/number):

*  addition: `1 + 3`
* subtraction: `1 - 3 `
* multiplication: `3 * 2`
* integer division: `7 / 3`
* modulo is available through the [math library](/microbit/blocks/math)

### Relational operators

The following relational operators work on numbers and return a [Boolean](/microbit/reference/types/boolean):

* equality: `(3 + 1) = 4`
* inequality: `3 != 4`
* less or equal than: `3 <= 4`
* less than: `3 < 4`
* greater or equal than : `4 >= 3`
* greater than: `4 > 3`

### Show number

The [show number](/microbit/reference/basic/show-number) function displays a number on the [LED screen](/microbit/device/screen). For example, this code displays the number 42:

![](/static/mb/blocks/number-1.png)

### Functions that return a number

Some functions return a number, which you can store in a variable. For example the following code gets the display brightness (using the [brightness function](/microbit/reference/led/brightness)) and stores the value in a variable named `brightness`:

![](/static/mb/blocks/number-2.png)

### Math functions

The [math library](/microbit/blocks/math) includes math related functions. In the [Block Editor](/microbit/blocks/editor), click `math` on the Code Keyboard to see the math functions. For example, the `absolute` function returns the returns the absolute value of input parameter `x`:

![](/static/mb/blocks/number-3.png)

### Lessons

[game counter](/microbit/lessons/game-counter), [love meter](/microbit/lessons/love-meter)

### See also

[math library](/microbit/blocks/math), [var](/microbit/reference/variables/var), [Boolean](/microbit/reference/types/boolean), [show number](/microbit/reference/basic/show-number)

