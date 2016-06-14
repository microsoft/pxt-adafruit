# Change Value

Set the value for local and global variables.

### @parent blocks/change-value

Change the value of a variable

```blocks
let x = 0
x += 1
```

### Declare a variable

Use the assignment operator to set the value of a [variable](/blocks/variables/var). Change the value of a variable from 0 to 1 using the change item block. Like this:

```blocks
let x = 0
x += 1
```

### Example

Use the assignment operator to set the value of a [variable](/blocks/variables/var). Change the value of a variable from 0 to 1 using the change item block. Then display the new value of the variable on the LED screen. Like this:

```blocks
let x = 0;
x += 1;
basic.showNumber(x);
```

### Notes

* You can use the assignment operator with variables of each of the supported [types](/reference/types).

### See also

[variable](/blocks/variables/var), [types](/reference/types)

