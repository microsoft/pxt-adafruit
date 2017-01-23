# Assignment Operator

Use an equals sign to make a [variable](/blocks/variables/var) store the [number](/reference/types/number) 
or [string](/reference/types/string) you say.

When you use the equals sign to store something in a variable, the equals sign is called
an *assignment operator*, and what you store is called a *value*.

### Storing numbers in variables

This program makes the variable `index` equal `5` and sets the pixel at that index to red.

````blocks
let index = 5
light.builtin.setPixelColor(index, light.colors(NeoPixelColors.Red))
````

### Storing strings in variables

This program makes the variable `name` equal `Joe`.

````blocks
let name = "Joe"
````

### Notes

You can use the assignment operator with variables of 
every [type](/reference/types). A *type* is which kind of thing
a variable can store, like a number or string.

### See also

[variable](/blocks/variables/var), [types](/reference/types)

