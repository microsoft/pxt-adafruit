# Loops

Loops are blocks that allow you to repeat, or somehow control the flow of your program. The first four loops are the ones we will use for the projects in this course.

![Loops blocks in the toolbox](/static/courses/maker/general/coding/loops.jpg)

The ``||loops:forever||`` loop is used when you want something to continuously happen while the Circuit Playground Express is powered on. One concept that is helpful to remember is that you will usually want sensor data collection to be happening in a ``||loops:forever||`` loop. For example, if you put a ``||input:sound Level||`` lozenge in an ``||input:on button A click||`` block, the program will only check the sound level when button **A** is clicked. If you put the ``||input:sound Level||`` lozenge in a ``||loops:forever||`` loop, it will continuously check to see what sound level its registering is.

``||loops:pause||`` blocks can be a little confusing for beginners. Pause does not stop all activity. Instead, think of the pause block as saying “do nothing new,” or, “keep doing what you’re already doing for the time I specify.” So in the ``||light:show ring||`` example, the lights are all red, and the pause block says, “wait for 1000 milliseconds before doing anything new. After 1000 ms, go on to the next block, which turns them green.”

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.showRing(
    "red red red red red red red red red red"
    )
    pause(1000)
    light.showRing(
    `green green green green green green green green green green`
    )
})
```

``||loops:on start||`` blocks are often useful for establishing a variable at the start of a program. See the Variables section below for more information on using ``||variables:Variables||`` in your program.

The ``||loops:repeat||`` loop will see plenty of use in many situations. It will run the blocks it contains in order and for the specified number of times.
