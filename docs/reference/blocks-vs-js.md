# From Block Editor to Touch Develop

#docs

The Block Editor and Touch Develop programming languages provide similar features, but are not identical in their functionality.  This presents a learning opportunity for teachers and students: to understand a few basic concepts and how they are expressed in different programming languages.  The objective is to make students better able to navigate the sea of programming languages they will encounter later.

## Concept 1: Inclusive and exclusive intervals

In mathematics, numeric intervals are a useful shorthand for expressing a sequence of numbers. For example, the notation [0,9] represents the sequence of ten numbers 0,1,2,3,4,5,6,7,8,9. This is known as an "inclusive" interval because the sequence includes the endpoints of the interval, namely 0 and 9.  On the other hand, the interval (0,9) represents the sequence of eight numbers 1,2,3,4,5,6,7,8 and is known as "exclusive".

In the interval notation, the brackets "[" and "]" represent inclusive endpoints and the parentheses "(" and ")" represent exclusive endpoints.  Brackets can be mixed and matched, so [0,9) represents the sequence of nine numbers 0,1,2,3,4,5,6,7,8 while (0,9] represents the sequence of nine numbers 1,2,3,4,5,6,7,8,9. Let's call the former interval "inclusive-exclusive" and the latter interval "exclusive-inclusive".

### Block Editor for loop uses a 0-based inclusive interval

Numeric intervals arise in the context of for loops, both in the Block Editor and Touch Develop. Here's a Block Editor for loop to draw a diagonal line from the top-left corner of the [LED screen](/device/screen) to the bottom-right corner. The loop iteration variable *i* ranges "from 0 to 4":

![](/static/mb/blocks/to-td-0.png)

What interval does "from 0 to 4" represent? The answer is the inclusive interval [0,4], meaning that the loop iteration variable `i` will take on the values 0,1,2,3,4 over the *five* iterations of the loop. Experiments have shown that the *inclusive internal* is most familiar to students with no previous programming experience.

### TouchDevelop for loop uses a 0-based inclusive-exclusive interval

To achieve the same result in Touch Develop, we write the for loop slightly differently because the upper bound of the 0-based loop is *exclusive* rather than inclusive:

```
for (let i = 0; i < 5; i++) {
    led.plot(i, i)
}
```

If we translated the Block Editor loop directly into Touch Develop, we would have:

```
for (let i1 = 0; i1 < 4; i1++) {
    led.plot(i1, i1)
}
```

which would result in the loop iteration variable taking on values in the interval [0,4), namely 0,1,2,3.

### ~hint 

The use of an exclusive upper-bound in for loops is standard practice in most programming languages. The basic reason for this is that with a 0-based inclusive lower bound, an exclusive upper bound U conveniently happens to be the length of the sequence represented by [0,U). This, of course, begs the question of why we count by starting with zero (0) in programming whereas we learn to count with one (1) in math.

### ~

## Concept 2: variable scope

A variable's *scope* is defined by two other concepts: its *lifetime* and *visibility*.  Imagine program execution like a timeline with each point in the timeline being a step in the program's execution.

* A variable's *lifetime* can be thought of as an interval [birth, death) in the program execution during which the variable exists and has a value. Within that interval of the program execution, we say the variable is *alive*.
* A variable is visible if its value can be read/written at a point in program execution. Visibility often is based on program structure and where the current point of program execution is. Imagine program structure like a house with only doors and no windows: if you are outside the house, you cannot see the objects (variables) inside the house - they are not visible to you even though they may exist; however, if you enter the house through the door, you can see the variables inside the house. The house itself may be divided into rooms, each of which defines another space in which certain variables are visible and others are not visible.

A variable is "in scope" at a program point if it is both alive and visible at that point. A variable is "not in scope" if it is not alive or if it is not visible.

### The Block Editor has variables with only global scope

In the Block Editor, all variables are *global* variables, which means that all variables are alive and visible during the entire program execution. Consider the following Block Editor program:

![](/static/mb/blocks/to-td-1.png)

This program will draw a diagonal line, wait for one second and then show the value of global variable `i`. What number will be shown on the LED screen? After the fifth iteration of the for loop, the value of variable `i` is 4. At the end of this iteration, the variable `i` is incremented and takes on the value 5. Since 5 is greater than the upper (inclusive) endpoint of 4, the loop terminates with the value of `i` at 5.

### Problems with global variables: unintended interference

The Block Editor program belows shows a problem with having only variables with global scope. The intent of the program below is fairly clear: if the user presses button A, slowly draw a diagonal line from top-left to lower-right; if the user presses button B, slowly draw a diagonal line from top-right to lower-left. Pressing both buttons should lead to an X being displayed on the screen.

![](/static/mb/blocks/to-td-2.png)

The problem with the above program is that we have two loops using the same global variable *i* as the loop iteration variable.  If the user first presses button A and then quickly presses button B, the loops execute concurrently, both reading and writing global variable *i* - this can cause unexpected results (in particular, you won't necessarily end up with an X displayed on the screen).  You can see this more clearly by pressing the convert button in the Block Editor and examining the Touch Develop code that implements the Block Editor semantics:

![](/static/mb/blocks/to-td-3.png)

### JavaScript has variables with both local and global scope

In Touch Develop, in contrast to the Block Editor, the for-loop iteration variable has scope that is local to the loop:

```
for (let i2 = 0; i2 < 5; i2++) {
    led.plot(i2, i2)
}
```

This means that:

1.  the loop iteration variable *i* comes into existence just before the loop begins and goes out of existence just after the loop terminates.

2. the variable `i` only is visible from the code that appears textually between the `do` and `end` keywords of the for loop (this is known as lexical scoping).

The value of the loop iteration variable is completely determined by the semantics of the for loop. As such, Touch Develop doesn't allow the programmer to overwrite the value of a loop iteration variable, as shown below:

```
for (let i3 = 0; i3 < 5; i3++) {
    led.plot(i3, i3)
    i3 = 42
}
```

### Why is local scope useful?

Local scope allows you to use the same variable name in different parts of a program without concern about interference (as with variables with global scope). Here's the Touch Develop program that implements the "X" program without interference:

```
input.onButtonPressed(Button.A, () => {
    for (let i4 = 0; i4 < 5; i4++) {
        led.plot(i4, i4)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, () => {
    for (let i5 = 0; i5 < 5; i5++) {
        led.plot(4 - i5, i5)
        basic.pause(1000)
    }
})
```

Even though the same variable name (i) appears in both loops, these are different variables, each with their own lifetime and visibility (as defined by the for-loop).

## Concept 3: static types

A variable has a *static type* if it holds the same kind of value (integer, string, Boolean) everywhere that it is in scope.  If a variable can hold values of different types at different program locations, then it does not have a static type.

### Block Editor blocks not plugged to an event will run

Blocks not plugged to an event will run. Blocks are running even if they are not inside of an `event`. As shown below, ``show string`` *Hello* will show a string on the LED screen one character at a time (scrolling from left to right).

![](/static/mb/blocks/to-td-4.png)

### Google's Blockly variables do not have static types

In Blockly, a variable can hold different types of values at different program locations. As shown below, the global variable *Count* can be first set to a number and later to a string:

![](/static/mb/blocks/to-td-5.png)

### Block Editor and Touch Develop variables have static types

In the Block Editor (based on Blockly) and Touch Develop, each variable has a static type. This means that some programs don't make sense, such as:

![](/static/mb/blocks/to-td-6.png)

