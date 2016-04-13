# Local Variables

How to define and use local variables.

### @parent language

A variable is a place where you can store and retrieve data. Variables have a name, a [type](/blocks/types), and value:

* *name* is how you'll refer to the variable
* *type* refers to the kind of data a variable can store
* *value* refers to what's stored in the variable

### Var statement

Use the Block Editor variable statement to create a local variable and the [assignment operator](/reference/variables/assign) to store something in the variable.

For example, this code stores the number `2` in the `num1` variable:

![](/static/mb/blocks/var-0.png)

Here's how to define a variable in the Block Editor:

1. Click `variables`.

2. Change the default variable name if you like.

3. Drag a block type on the right-side of the [assignment operator](/reference/variables/assign) and click the down arrow to change the variable name.

The resulting code should look something like this:

// string variable

![](/static/mb/blocks/var-1.png)

// number variable

![](/static/mb/blocks/var-2.png)

// boolean variable

![](/static/mb/blocks/var-3.png)

// image variable

![](/static/mb/blocks/var-4.png)

See [Image](/blocks/image) for info on creating and using image variables.

The resulting code should look something like this:

![](/static/mb/blocks/var-5.png)

A variable is created for the number returned by the [brightness](/reference/led/brightness) function.

### Using variables

Once you've defined a variable, just use the variable's name whenever you need what's stored in the variable. For example, the following code shows the value stored in `counter` on the LED screen:

![](/static/mb/blocks/var-6.png)

To change the contents of a variable use the assignment operator. The following code sets `counter` to 1 and then increments `counter` by 10:

![](/static/mb/blocks/var-7.png)

### Why use variables?

Variables help simplify your code. For example, instead of turning on LEDs one by one like this:

![](/static/mb/blocks/var-8.png)

You can use a variable (`i`) and a [for loop](/reference/loops/for) to plot the same series of points (`i` is incremented by 1, each time the loop repeats):

![](/static/mb/blocks/var-9.png)

### Local variables

Local variables exist only within the function or block of code where they're defined. For example:

![](/static/mb/blocks/comment-0.png)

#### Notes

* You can use the default variable names if you'd like, however, it's best to use descriptive variable names. To change a variable name in the editor, select the down arrow next to the variable and then click "new variable".

### Lessons

[glowing pendulum](/lessons/glowing-pendulum), [love meter](/lessons/love-meter), [temperature](/lessons/temperature), [zoomer](/lessons/zoomer)

### See also

[types](/blocks/types), [assignment operator](/reference/variables/assign)

