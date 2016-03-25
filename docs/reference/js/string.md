# String

a piece of text. #docs #String

### @parent js/language

A *String* is a sequence of characters. For the BBC micro:bit, ASCII character codes 32 to 126 are supported; letters, digits, punctuation marks, and a few symbols. All other character codes appear as a ? on the [LED screen](/microbit/device/screen).

### Declare a string

Use the [var statement](/microbit/reference/variables/var) and the [assignment operator](/microbit/reference/variables/assign) `:=` to declare a new *local* string variable. Like this:

```
let str = "this is a string"
```

To declare a string using the [Touch Develop editor](/microbit/js/editor):

1. Click `var` (on the Code Keyboard).

2. Type a name for your new string variable.

2. Click on the right side of the `:=` operator.

3. Type `"` (or click `"abc"`) and then type a string like `hello`.

4. Click the check mark.

Your code should look something like this:

```
let salutation = "Hello"
```

### The function `show string`

Use [show string](/microbit/reference/basic/show-string) to display a string on the [LED screen](/microbit/device/screen). If the string is multiple characters, the string scrolls right to left. The following example displays `Hello world!` on the micro:bit screen:

```
basic.showString("Hello world!", 100)
```

The first parameter of `show string` specifies the string, and the second parameter specifies the number of milliseconds between scrolling by one LED column - the larger the value, the slower the scroll will be.

### More string functions

Want to compare or concatenate strings? Check out the [string functions](/microbit/reference/types/string-functions).

### Global string variables

Unlike [local variables](/microbit/reference/variables/var), global variables are accessible across functions and in nested code blocks. To find out how to declare a global string variable, see [global variables](/microbit/js/data).

### Lessons

[letter up](/microbit/lessons/letter-up)

### See also

[local variables](/microbit/reference/variables/var), [global variables](/microbit/js/data), [string functions](/microbit/reference/types/string-functions), [Number](/microbit/reference/types/number), [show string](/microbit/reference/basic/show-string)

