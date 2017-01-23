# Call a function

The simplest way to get started in JavaScript with your @boardname@ is to
call one of the @boardname@'s built-in JavaScript functions. Just like Blocks
are organized into categories/drawers, the @boardname@ functions are organized by
namespaces, with names corresponding to the drawer names.  The `light` namespace 
contains a number of helpful functions, such as:

```typescript
light.statusLED(true);
```

If you want to see all functions available in the `light` namespace, simply type `light`
followed by `.` and a list of all the functions will appear. 

Intellisense shows all the available parameters for a function. 

## Left and right parentheses, please!

Whenever you want to call a function, you give the name of the function
followed by `(` and ending with `)`. Inbetween the left and right
parentheses go the function arguments.  If a function has zero arguments, you still
need the parentheses in order to call the function. For example

```typescript
light.statusLED(true);
```

It's a syntax error to have a left parenthesis without the "closing" right parenthesis:

```typescript
light.statusLED(
```

### ~button /js/sequence
NEXT: Sequencing Commands
### ~
