# Logic

In computer science, "Conditionals" are branching logic expressions, like "If &lt;a condition is true&gt;, then &lt;do something&gt;, else &lt;do something else&gt;"

The ``||logic:if then else||`` block is very useful for many coding projects, and it actually relies on common sense logic we use in our everyday lives. I might say, “If the grocery store is open, I will go get eggs. Or else, we’ll have cereal for breakfast.” When checking the weather conditions in the morning, you might essentially think, “If weather forecast = rainy, bring an umbrella; else, don’t.” Likewise, “if / then / else” is used to check if a condition is true or not. For example, is the light level less than a certain amount? Or, is the sound level greater than 50? Or, is the Circuit Playground Express being tilted beyond a certain point? If the condition is true, one thing happens, and if it is false, something else happens. Often you will want the “if / then / else” block to be continuously checking to see if the condition is true or false, so it will need to go inside a ``||loops:forever||`` loop.

In this example, the program is saying, “If button A is being pressed, then show the rainbow animation and play the power up sound. If button **A** is not being pressed (i.e., Else), then show the comet animation and play sound power down.” The ``||loops:forever||`` loop ensures that Circuit Playground Express is continuously checking to see if the condition (button **A** is pressed) is true or not.

```blocks
forever(function () {
    if (input.buttonA.isPressed()) {
        light.showAnimation(light.rainbowAnimation, 500)
        music.powerUp.playUntilDone()
    } else {
        light.showAnimation(light.cometAnimation, 500)
        music.powerDown.playUntilDone()
    }
})
```

This code is only slightly different in that the input diamond says “was pressed.”

```blocks
forever(function () {
    if (input.buttonA.wasPressed()) {
        light.showAnimation(light.rainbowAnimation, 500)
        music.powerUp.playUntilDone()
    } else {
        light.showAnimation(light.cometAnimation, 500)
        music.powerDown.playUntilDone()
    }
})
```

In the first example, button **A** has to be held down for the condition to be true and for the rainbow animation and power up to play. In the second example, the "If" question is essentially asking, “Was button A ever pressed?” That allows you to just press it once for the If condition to be true. 

## Comparison and Boolean Blocks 

These diamond-shaped blocks let you compare two things or evaluate true or false expressions. In **Comparison** blocks, you can use the drop-down menu to change between operators (equals, does not equal, less than, less than or equal to, greater than, and greater than or equal to). These blocks are shaped like diamonds to help you know where you can place them in your program. 

![Logic blocks in the toolbox](/static/courses/maker/general/coding/logic.jpg)

![Comparison operator selection](/static/courses/maker/general/coding/comparison.jpg)
