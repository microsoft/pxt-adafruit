# rock paper scissors quiz

shift an image horizontally across the display with offset #offset #screen  #variables #docs

## Name

## Directions

Use this activity document to guide your work in the [rock paper scissors tutorial](/microbit/lessons/rock-paper-scissors/tutorial).

Answer the questions while completing the tutorial. Pay attention to the dialogues!

## 1. Describe what `offset` does? 

<br/>

## 2. Draw which LEDs are ON after running this code and the random number returned is 0

```blocks
let img = images.createImage(`
. . . . . # # # # # . . . . #
. # # # . # . . . # # # . # .
. # # # . # . . . # . # # . .
. # # # . # . . . # # # . # .
. . . . . # # # # # . . . . #
`)
let offset = Math.random(3) * 5
img.showImage(offset)
```

![](/static/mb/lessons/night-light-2.png)

<br/>

<br/>

## 3. Draw which LEDs are ON after running this code with an offset of 5. This would occur if the random number returned is 1.

```blocks
let img_ = images.createImage(`
. . . . . # # # # # . . . . #
. # # # . # . . . # # # . # .
. # # # . # . . . # . # # . .
. # # # . # . . . # # # . # .
. . . . . # # # # # . . . . #
`)
let offset_ = Math.random(3) * 5
img.showImage(offset)
```

![](/static/mb/lessons/night-light-2.png)

<br/>

<br/>

## 4. Draw which LEDs are ON after running this code with an offset of 10. This would occur if the random number returned is 2.

```blocks
let img_1 = images.createImage(`
. . . . . # # # # # . . . . #
. # # # . # . . . # # # . # .
. # # # . # . . . # . # # . .
. # # # . # . . . # # # . # .
. . . . . # # # # # . . . . #
`)
let offset_1 = Math.random(3) * 5
img.showImage(offset)
```

![](/static/mb/lessons/night-light-2.png)

<br/>

