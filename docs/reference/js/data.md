# Global Variables

How to define and use global variables.

### @parent js/language

A variable is a place where you can store data so that you can use it later in your code. A *global* variable is accessible from every point in your code.

### Block Editor

In the Block Editor, all variables are global. See [Block Editor](/blocks/editor) for info on creating global variables in a Block Editor script.  The following block is used to set (assign) global variable's value:

![](/static/mb/antenna-0.png)

The block below retrieves (gets) the current value of a global variable:

![](/static/mb/data-0.png)

### Touch Develop

In Touch Develop variables are either [global](/js/data) or [local](/reference/variables/var). Variables have a name, a [type](/js/types), and value:

* the *name* is how you'll refer to the variable
* the *type* refers to the kind of value a variable can store
* the *value* refers to what's stored in the variable

[Global variables](/js/data) are variables that are available throughout your script. Unlike [local variables](/reference/variables/var), global variables are accessible across functions and in nested code blocks.

### Create a global variable

To create a new global variable:

1. In the Touch Develop [editor](/js/editor), click `script` (to the right of the search box).

2. Click `+` **add new**.

3. Click `data->` **data** and then choose a [type](/js/types).

4. Enter a name for your global variable and click **OK**.

### Set and use a global variable

To use a global variable that you've declared (using steps above):

1. In the Touch Develop [editor](/js/editor), click `data-> ` **data** or `data->` + *variable name*.

2. Click `:=` (assignment).

2. Click on the right-side of `:=` and type or click what you want to store in the variable.

Your code should look something like this:

// global number variable

```
counter = 2
```

// global string variable

```
name2 = "Mike"
```

// global boolean variable

```
bool = true
```

(for info on creating image variables, see [Image](/reference/image/image))

Once you've defined a variable and set it's initial value, use the variable's name whenever you need what's stored in the variable. For example, the following code gets the value stored in the global `counter` variable and shows it on the screen:

```
basic.showNumber(counter, 100)
```

To change the contents of a variable use the [assignment operator](/reference/variables/assign) `:=`. The following code increments `counter` by 10:

```
counter = counter + 10
```

### Promote, demote, and extract

To **promote** a local variable to a global variable:

* select the local variable name and click `promote to data`. The [var](/reference/variables/var) keyword changes to the data symbol `data->`.

To **demote** a global variable to a local variable:

* select the global variable name and click `demote to var`

To **extract** the content of a global variable to a local variable:

* select the global variable name and click `extract to var`

### See your global variables

To see a list of the global variables in your script:

* click `script` (along the top) and scroll down to the **vars** heading

### Lessons

[counter](/lessons/counter), [rotation animation](/lessons/rotation-animation), [digital pet](/lessons/digital-pet), [offset image](/lessons/offset-image)

### See also

[local variables](/reference/variables/var), [types](/js/types), [assignment operator](/reference/variables/assign)

