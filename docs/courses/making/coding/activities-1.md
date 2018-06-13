## Activities: Inputs, Light, and Music

Let’s start with a simple input and output example. From the ``||input:INPUT||`` Toolbox drawer, drag an ``||input:on button A click||`` block into the Workspace. Then, from the ``||light:LIGHT||`` Toolbox drawer, drag two ``|light:show ring||`` blocks inside the ``||input:on button A click||`` block on the Workspace. The Simulator will go gray for a second while MakeCode processes these changes, and then it will show your program running. In the second ``||light:show ring||`` block, click on the green color wedge selector in the middle of the block, then click all of the circles to turn the lights green.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.showRing(
    "red red red red red red red red red red"
    )
    light.showRing(
    `green green green green green green green green green green`
    )
})
```

Remember: To make the Simulator appear and disappear, press the arrow in the far bottom left-hand corner.

![Hide simulator button](/static/courses/making/coding/hide-sim-button.jpg)

If you press button **A** in the Simulator, the lights will turn red, then quickly turn green. There is a built-in pause of 20 milliseconds, so if you don’t specify the length of pause, 20 ms is the default. After 20 ms, the lights in the Simulator will turn green. They will stay green because the code never tells them to turn off. Clicking button **A** in the Simulator will repeat the output of quick red, then green.

Let’s change this code a bit. First, go to the green ``||loops:LOOPS||`` Toolbox drawer and drag a ``||loops:pause 100 ms||`` block out. Hover it over the place where the two ``||light:show ring||`` blocks meet until a yellow insertion line and a gray image of your block appears. Then, let go and the block will snap into place.

![Insert a pause block](/static/courses/making/coding/insert-pause.gif)

Now that the pause block is in-between, click on the drop-down menu in the ``||loops:pause||`` block and change the value from 100 ms to 1 second, or 1000 milliseconds.

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

Click on button **A** in the Simulator, and you’ll now see that the red lights turn red for one second, then turn green.
