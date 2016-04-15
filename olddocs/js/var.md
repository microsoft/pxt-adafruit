# Local Variables

How to define and use local variables.

### @parent language
 

A variable is a place where you can store and retrieve data. Variables have a name, a [type](/js/types), and value:

* *name* is how you'll refer to the variable
* *type* refers to the kind of data a variable can store
* *value* refers to what's stored in the variable

### `var` and `let` statement

The ``var`` keyword declares a global variables that is defined within the entire scope of the function. 
The ``let`` keyword defined a block-scoped variable, similarly to other languages like Java, C# or C.

For example, this code stores the number `2` in the `num1` variable:

* number variable
```blocks
let num1 = 2
```

* string variable
```blocks
let name = "Mike"
```

* boolean variable

```blocks
let bool = true
```

* image variable
```blocks
let img = images.createImage(`
. . # . .
. # # # .
# # # # #
. # # # .
. . # . .
`)
```

See [Image](/reference/image/image) for info on creating and using image variables.
### Using variables

Once you've defined a variable, just use the variable's name whenever you need what's stored in the variable. For example, the following code shows the value stored in `counter` on the LED screen:

```
let counter = 5;
basic.showNumber(counter, 100)
```

To change the contents of a variable use the assignment operator `:=`. The following code sets `counter` to 1 and then increments `counter` by 10:

```
let counter = 0;
counter = 1
counter = counter + 10
```

### Why use variables?

Variables help simplify your code. For example, instead of turning on LEDs one by one like this:

```
led.plot(0, 0)
led.plot(1, 1)
led.plot(2, 2)
led.plot(3, 3)
led.plot(4, 4)
```

You can use a variable (`i`) and a [for loop](/reference/loops/for) to plot the same series of points (`i` is incremented by 1, each time the loop repeats):

```
for (let i = 0; i < 5; i++) {
    led.plot(i, i)
}
```

### Local vs global variables

Local variables exist only within the function or block of code where they're defined. Local variables don't exist outside of where they're defined.  For example:

```
if (led.brightness() > 127) {
    let y = 1
    // `y` variable exists here
} else {
    // `y` variable does not exist here
}
```

Use **global variables** when you need to access a variable in nested code blocks or across multiple functions.

### Lessons

[guess the number](/lessons/guess-the-number), [digi yoyo](/lessons/digi-yoyo), [rock paper scissors](/lessons/rock-paper-scissors), [love meter](/lessons/love-meter)

### See also

[types](/reference/types), [assignment operator](/reference/variables/assign)

