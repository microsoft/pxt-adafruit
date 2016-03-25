# The Collections Library

#docs

A collection allows you to store an arbitrary number of elements. If you have a collection of numbers, you can add new numbers to the collection; remove numbers; check if a number is in there; iterate over all the numbers in the collection.

## Creation

A collection is created as follows. Note that we are providing the *type* of the elements that are meant to go in the collection.

```
let c = (<number[]>[])
```

At the moment, you can create collections of numbers, booleans, strings, and any of the object types that you defined.

**Important:** if your collection is a global variable, make sure you initialise it at the beginning of your script.

```
c = (<boolean[]>[])
```

Trying to use an uninitialised collection will crash the simulator, and display a sad face on the device.

## Adding and finding elements; counting

```
c.push(3)
```

The line above just added the number `3` to the collection. One can think of a collection as a list, where `add` appends the element at the end of the list.

At this stage, our collection has size `1`, meaning that the line below will display `1`.

```
basic.showNumber(c.length, 150)
```

We can add another number as follows.

```
c.push(5)
```

At this stage, the count of elements in the collection is `2`. We mentioned earlier that a collection is like a list: adding elements appends them at the end of the list. This means that, at this point in the program, the first element in the list is 3 (we added it earlier), and the second element in the list is 5 (we just added it).

```
basic.showNumber(c[0], 150)
```

Can you guess what the line above does? Remember that in computing, indexing starts at zero. This function takes the *first element* in the list. This means that the line above displays `3`.

We can ask questions such as: "what is the index of this element"? The line below displays `1`, meaning that the number `5` is first found at index `1` (it is the *second* element in the list).

```
basic.showNumber(c.indexOf(5, 0), 150)
```

## Iterating over the elements

A classic pattern consists in iterating over all the elements in the collection. Here's one way to do it:

```
for (let i = 0; i < c.length; i++) {
    basic.showString("The element at index " + i.toString() + " is " + c[i].toString(), 150)
}
```

The code above will first print `The element at index 0 is 3`, then `The element at index 1 is 5`.

## Modifying and removing elements

One can modify an existing collection using `set at`, which changes the element *at a given index*.

```
c[0] = 7
```

The line above modifies the collection `c` so that, after the line above, the first element of the collection is now `7`.

Removing elements can be done in two different ways. We can remove the *first occurrence* of an element.

```
c.remove(5)
```

This removes the first occurrence of `5` in the list. At this point in the program, our list now has just one element (at index 0). If we wish, we can use `remove at` to remove the element at a given index.

```
c.splice(0, 1)
```

Now, the collection is empty.

## Complete example

This program will record the current acceleration measured on `x` when you press `A`; when you press `B`, the program will print out all the acceleration values that were measured, then will clear the collection.

```
let accelerations = (<number[]>[])
input.onButtonPressed("A", () => {
    accelerations.push(input.acceleration("x"))
})
input.onButtonPressed("B", () => {
    for (let i1 = 0; i1 < accelerations.length; i1++) {
        basic.showString(accelerations[i1].toString(), 150)
    }
    accelerations.clear()
})
```

