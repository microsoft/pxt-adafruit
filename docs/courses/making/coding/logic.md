# Logic

In computer science, “Conditionals” are branching logic expressions, like in this sentence:

```
“If <a condition is true>, then <do something>, else <do something different>.”
```

Or, in the form of "code" (pseudocode actually) instructions:

```
if <a condition is true>, then
    <do something>
else
    <do something different>
```

The ``||logic:if then else||`` block is very useful for many coding projects, and it actually relies on common sense logic we use in our everyday lives. I might say, “If the grocery store is open, I will go get eggs. Or else, we’ll have cereal for breakfast.” When checking the weather conditions in the morning, you might essentially think, “If weather forecast = rainy, bring an umbrella; else, don’t.”  Likewise, ``||logic:if then else||`` is used to check if a condition is true or not. For example, is the light level less than a certain amount? Or, is the sound level greater than a particular level? Or, is the @boardname@ being tilted beyond a certain point? If the condition is true, one thing happens, and if it is false, something else happens. Often you will want the ``||logic:if then else||`` block to be continuously checking to see if the condition is true or false, so it will need to go inside a ``||loops:forever||`` loop.

In this example, the program is saying, “If button A is being pressed, then show the rainbow animation and play the power up sound. If button **A** is not being pressed (ie, Else), then show the comet animation and play sound power down.” The ``||loops:forever||`` loop ensures that @boardname@ is continuously checking to see if the condition (button **A** is pressed) is true or not.

```blocks
forever(function () {
    if (input.buttonA.isPressed()) {
        light.showAnimation(light.rainbowAnimation, 500)
        music.playSoundUntilDone(music.sounds(Sounds.PowerUp))
    } else {
        light.showAnimation(light.cometAnimation, 500)
        music.playSoundUntilDone(music.sounds(Sounds.PowerDown))
    }
})
```

This code is only slightly different in that the input diamond says “was pressed”.

```blocks
forever(function () {
    if (input.buttonA.wasPressed()) {
        light.showAnimation(light.rainbowAnimation, 500)
        music.playSoundUntilDone(music.sounds(Sounds.PowerUp))
    } else {
        light.showAnimation(light.cometAnimation, 500)
        music.playSoundUntilDone(music.sounds(Sounds.PowerDown))
    }
})
```

In the first example, button **A** has to be held down for the condition to be true and for the rainbow animation and power up to play. In the second example, the If question is essentially asking, “Was button A ever pressed?”. That allows you to just press it once for the If condition to be true.

## Comparison and Boolean Blocks

These diamond-shaped blocks let you compare two things or evaluate true or false expressions. In Comparison blocks, you can use the drop-down menu to change between operators (equals, does not equal, less than, less than or equal to, greater than, and greater than or equal to).  These blocks are shaped like diamonds to help you know where you can place them in your program.

| | | |
|-|-|-|
|![Comparison blocks](/static/courses/making/coding/comparison-blocks.jpg)||![Comparison operator dropdown](/static/courses/making/coding/fe-comparison.jpg)|
