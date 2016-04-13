# minesweeper quiz answers

make a game to test your memory for placing a LED mine then finding the hidden LED mine.

## Name

## Directions

Use this activity document to guide your work in the [minesweeper  tutorial](/lessons/minesweeper/tutorial).

Answer the questions while completing the tutorial. Pay attention to the dialogues!

## 1. Write the code that randomly generates a number between 0 and 4 and stores that value in a global variable called 'mine x'.

<br />

```
mineX = Math.random(5)
```

## 2. Write the code to plot the point with coordinates of (select x, select y) as shown. Your code should apply the concept of `led->plot ( , )`

![](/static/mb/lessons/blink-1.png)

<br />

```
selectX = 0
selectY = 0
led.plot(selectX, selectY)
```

## 3. Write the code to plot the point with coordinates of (select x, select y) as shown. Your code should apply the concept of `led->plot ( , )`

![](/static/mb/lessons/blink-0.png)

<br />

```
selectX = 2
selectY = 2
led.plot(selectX, selectY)
```

## 4. How do you check if a dot is one away from given x and y coordinates?

<br />

<br />

```
if (mineX + 2 > selectX && selectX > mineX - 2 && mineY + 2 > selectY && selectY > mineY - 2) {
}
```

