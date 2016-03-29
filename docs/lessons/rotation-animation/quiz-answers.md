# rotation animation quiz answers

Learn how to create a rotating image with a while loop. #image #loop  #while #docs

This is the answer key for the [rotation animation quiz](/microbit/lessons/rotation-animation/quiz).

## 1. What is a "global variable"?

Answers may vary. A global variable is a place where you can store data so that you can use it later in your code.

## 2. Consider the following directions

Write the code to create a **global variable** called `foo` that stores a boolean and initialize it to **false**.

```
rotating = true
```

## 3. Consider the following code

```
while (rotating) {
}
```

Explain what this line of code does.

<br/>

It is a **while** loop that will be executed only if the **global variable** called `rotating` is **true**.

## 4. Consider the following code

```
basic.showAnimation(`
# . . . . . . # . . . . . . # . . . . .
. # . . . . . # . . . . . # . . . . . .
. . # . . . . # . . . . # . . # # # # #
. . . # . . . # . . . # . . . . . . . .
. . . . # . . # . . # . . . . . . . . .
`, 400)
```

If the rectangle below represents the BBC micro:bit, shade the areas that will be displayed. Explain why that particular area is shaded.

![](/static/mb/lessons/rotation-animation-0.png)

![](/static/mb/lessons/rotation-animation-1.png)

![](/static/mb/lessons/rotation-animation-2.png)

![](/static/mb/lessons/rotation-animation-3.png)

Show animation will show a series of image frames on the LED screen, pausing the specified time (400 milliseconds) after each frame

