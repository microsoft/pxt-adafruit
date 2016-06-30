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

# Function parameters

You might have noticed that the call `showString` above takes one value, 
the string to be scrolled on the LED screen. There is a second (optional)
parameter that controls the speed of the the scroll. Try this:

```typescript
basic.showString("Hello!",50)
```

You might have noticed that the function list above shows all
the available parameters for each function. 


```typescript
basic.showString("Hello!")
basic.showLeds(`
    . # . # .
    . . . . .
    . . # . .
    # . . . #
    . # # # .
    `)
basic.pause(1000)
basic.clearScreen()
basic.showString("Goodbye!")
basic.showLeds(`
    . # . # .
    . . . . .
    . . . . .
    . # # # .
    # . . . #
    `)
basic.pause(1000)
basic.clearScreen()
```