# Activities for Inputs, Light, and Music

Let’s start with a simple input and output example. From the Input Toolbox drawer, drag an “On Button A Click” block into the Workspace. Then, from the Light Toolbox drawer, drag two “Show Ring” blocks inside the “On Button A Click” block on the Workspace. The Simulator will go gray for a second while MakeCode processes these changes, and then it will show your program running. In the second “Show Ring” block, click on the green color wedge selector in the middle of the block, then click all of the circles to turn the lights green. 

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

![Simulator hide button](/static/courses/maker/general/coding/sim-hide-button.png)

If you press button A in the Simulator, the lights will turn red, then quickly turn green. There is a built-in pause of 20 milliseconds (ms), so if you don’t specify the length of pause, 20 ms is the default. After 20 ms, the lights in the Simulator will turn green. They will stay green because the code never tells them to turn off. Clicking button A in the Simulator will repeat the output of quick red, then green.

Let’s change this code a bit. First, go to the green Loops Toolbox drawer and drag a “Pause 100 ms” block out. Hover it over the place where the two “Show Ring” blocks meet until a yellow insertion line and a gray image of your block appears. Then, let go and the block will snap into place.

![Insert the pause block](/static/courses/maker/general/coding/insert-pause.png)

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

Click on button A in the Simulator, and you’ll now see that the red lights turn red for one second, then turn green.
