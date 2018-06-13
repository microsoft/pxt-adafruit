# Loops

Loops are blocks that allow you to repeat, or somehow control the flow of your program. The loops we'll use for the projects in this book are ``||loops:on start||``, ``||loops:repeat||``, ``||loops:forever||``, and ``||loops:pause||``.

```blocks
for (let i = 0; i < 4; i++) {
	
}
forever(function () {
    pause(100)
})
```

The ``||loops:forever||`` loop is used when you want something to continuously happen while the @boardname@ is powered on. One concept that it’s helpful to remember is that you will usually want sensor data collection to be happening in a ``||loops:forever||`` loop. For example, if you put a ``||input:sound level||`` block in an ``||input:on button A click||``, the program will only check the sound level when button **A** is clicked. If you put the ``||input:sound level||`` block in a ``||loops:forever||`` loop, it will continuously check to see what sound level its registering is.

``||loops:pause||`` blocks can be a little confusing for beginners. A pause does not stop all activity. Instead, think of the ``||loops:pause||`` block as saying “do nothing new,” or, “keep doing what you’re already doing for the time I specify.” So code above, the lights are all red, and the pause block says, “wait for 1000 milliseconds before doing anything new. After 1000 ms, go on to the next block, which turns them green”.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.setAll(0xff0000)
    pause(1000)
    light.setAll(0x00ff00)
})
```

``||loops:on start||`` blocks are often useful for establishing a variable at the start of a program. See the [Variables](#) section for more.

The ``||loops:repeat 4 times||`` block will see plenty of use in many situations. It will run the blocks it contains in order and for the specified number of times.
