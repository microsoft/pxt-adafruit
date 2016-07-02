# Call a function

The simplest way to get started in JavaScript with your micro:bit is to
call one of the micro:bit's built-in JavaScript functions. Just like Blocks
are organized into categories/drawers, the micro:bit functions are organized by
namespaces.  The `basic` namespace contains a number of very helpful
functions:

```typescript
basic.showString("Hello!")
```

If you want to see all functions available in a namespace, simply type `basic`
followed by `.`; a list of all the functions will appear. 

![](/static/mb/js/basicFuns.png)

Continue typing to select one of the functions, or click on one of the functions
to select. You also narrow down the set of functions by typing, as below:

![](/static/mb/js/basicIntell.png)

## Function arguments

You might have noticed that the call `showString` above takes one argument, 
the string to be scrolled on the LED screen. There is a second (optional)
argunment that controls the speed of the scroll. Try this:

```typescript
basic.showString("Hello!",50)
```

If you don't give a value for an optional argument, where does its value
come from?

## Left and right parentheses, please!

Whenever you want to call a function, you give the name of the function
followed by `(` and ending with `)`. Inbetween the left and right
parentheses go the function arguments.  If a function has zero arguments, you still
need the parentheses. For example

```typescript
basic.clearScreen()
```

### ~button /js/sequence
NEXT: Sequencing Commands
### ~
