# Code

With the [Necklace Test](/projects/beaded-necklace/make#test-all-lights) example code, we simply turned on all the lights of our necklace to one color. There are many different ways we can program our necklace lights. The [Loudness Necklace](/tutorials/loudness-necklace) is one example where you can change the lights based on the sound level. In this project, we’ll program a few different animations to show on our necklace.

* If you don’t already have it open, go to [MakeCode](@homeurl@).
* From the Home page, create **New Project**.

![New Project button](/static/cp/projects/beaded-necklace/new-project.jpg)

* At the bottom of the screen, name your project ``Necklace``.

![Project name](/static/cp/projects/beaded-necklace/name-project.jpg)

First, we need to set up our 4 Flora NeoPixel lights as 2 strips of lights – connected to **A1** on the left side, and connected to **A6** on the right side.

* From the ``||loops:LOOPS||`` Toolbox drawer, drag out an ``||loops:on start||`` block to the Workspace.

![on start block](/static/cp/projects/beaded-necklace/on-start.png)

* Click on the ``||light:LIGHT||`` Toolbox drawer, then click on the ``||light:NEOPIXEL||`` drawer underneath it. 
* Drag out the first ``||light:set strip||`` block onto the Workspace and drop into the ``||loops:on start||`` block.

![set strip block](/static/cp/projects/beaded-necklace/set-strip.png)

```blocks
let strip = light.createStrip(pins.A1, 30)
```

* In the ``||light:set strip||`` block, click on the strip drop-down menu, and select **Rename variable...**

![Rename strip variable](/static/cp/projects/beaded-necklace/rename.png)

* Type ``LeftLights`` as the variable name 
* In the ``||variables:set LeftLights||`` block, change the number of pixels from ``30`` to ``2``.

```blocks
let LeftLights = light.createStrip(pins.A1, 2)
```

* Right-click on the ``||variables:set LeftLights||`` block and select **Duplicate** from the context menu.

![Dupilcate set variable block](/static/cp/projects/beaded-necklace/duplicate.png)

* Drag the duplicated ``||variables:set LeftLights||`` block into the ``||loops:on start||`` block.
* In the second ``||variables:set LeftLights||`` block, click on the ``||variables:LeftLights||`` drop-down menu, and select **New variable...**

![Select new variable in block menu](/static/cp/projects/beaded-necklace/new-var.png)

* Type ``RightLights`` as the new variable name.
* In the ``||variables:set RightLights||`` block, click on the **A1** drop-down menu, and select **A6**.

```blocks
let LeftLights = light.createStrip(pins.A1, 2)
let RightLights = light.createStrip(pins.A6, 2)
```

Now let’s set up 3 different light animations that will play when we press button **A**, button **B**, and buttons **A** and **B** together on our @boardname@.

* From the ``||input:Input||`` Toolbox drawer, drag out (3) ``||input:on button click||`` blocks onto the Workspace.
* Using the ``||input:button A||`` drop-down menu, change two of the blocks to ``||input:button B||`` and ``||input:buttons A+B||``. 

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {})
input.buttonB.onEvent(ButtonEvent.Click, function () {})
input.buttonsAB.onEvent(ButtonEvent.Click, function () {})
```

* In the ``||variables:VARIABLES||`` Toolbox drawer, click on the ``|Make a Variable|`` button.

![Make a variable button](/static/cp/projects/beaded-necklace/make-a-variable.png)

* Type ``Anim`` as the new variable name. This will hold our light animation value. 
* From the ``||variables:VARIABLES||`` Toolbox drawer, drag (3) ``||variables:set Anim||`` blocks onto the Workspace and drop one each into the ``||input:on button click||`` blocks.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    Anim = 0
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    Anim = 0
})
input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    Anim = 0
})
```

* From the ``||light:LIGHT||`` Toolbox drawer, scroll all the way down to the bottom and drag (3) animation value blocks (the block looks like a round rainbow circle) onto the Workspace and drop one each into the ``||variables:set Anim||`` blocks, replacing the ``0``. 
* For two of the animation value blocks, click on the drop-down menu to select a different animation.

![Set the animations](/static/cp/projects/beaded-necklace/set-animations.png)

Let’s add some logic to be able to play and stop our animations. We’ll use the value of the switch to determine this – when we move the switch to the right our animations will play, but when the switch is moved to the left we’ll stop the animations and turn off the lights. 

![Slide switch on the board](/static/cp/projects/beaded-necklace/switch.png)

* From the ``||logic:LOGIC||`` Toolbox drawer, drag an ``||logic:if then else||`` block onto the Workspace and drop it into the ``||loops:forever||`` loop .

```blocks
forever(function () {
    if (true) {
    } else {
    }
})
```

* From the ``||input:INPUT||`` Toolbox drawer, scroll all the way down to the bottom and drag a ``||input:on switch right||`` block onto the Workspace and drop into the ``||logic:if||`` block, replacing ``||logic:true||``. 

```blocks
forever(function () {
    if (input.switchRight()) {
    } else {
    }
})
```

* From the ``||light:LIGHT||`` Toolbox drawer, drag a ``||light:show animation||`` block and drop into the top slot of the ``||logic:if then else||`` block.
* From the ``||variables:VARIABLES||`` Toolbox drawer, drag an ``||variables:Anim||`` variable value block and drop into the ``||light:show animation||`` block, replacing the default rainbow animation.


```blocks
let Anim: light.NeoPixelAnimation = null
forever(function () {
    if (input.switchRight()) {
        light.showAnimation(Anim, 500)
    } else {
    }
})
```

* Click on the ``||light:LIGHT||`` Toolbox drawer, then click on the ``||light:NEOPIXEL||`` drawer underneath it.
* Drag out (2) ``||light:strip show animation||`` blocks and drop them into the top slot of the ``||logic:if then else||`` block after the previous ``||light:show animation||`` block.
* In each of the ``||light:strip show animation||`` blocks, click on the strip variable drop-down menu and select the ``||variables:LeftLights||`` and ``||variables:RightLights||`` variables.

![Select the RightLights variable in animation block](/static/cp/projects/beaded-necklace/left-right-show-animation.png)

* From the ``||variables:VARIABLES||`` Toolbox drawer, drag (2) ``||variables:Anim||`` variable value blocks and drop one each into the ``||light:LeftLights show animation||`` and ``||light:RightLights show animation||`` blocks, replacing the default rainbow animation.

```blocks
let Anim: light.NeoPixelAnimation = null
let LeftLights = light.createStrip(pins.A1, 2)
let RightLights = light.createStrip(pins.A6, 2)
forever(function () {
    if (input.switchRight()) {
        light.showAnimation(Anim, 500)
        LeftLights.showAnimation(Anim, 500)
        RightLights.showAnimation(Anim, 500)
    } else {
    }
})
```

* From the ``||light:LIGHT||`` Toolbox drawer, scroll to the bottom and drag a ``||light:clear||`` block onto the Workspace. Drop into the ``||logic:else||`` slot.
* Click on the ``||light:LIGHT||`` Toolbox drawer, then click on the ``||light:NEOPIXEL||`` drawer underneath it.
* Drag out (2) ``||light:strip clear||`` blocks onto the Workspace and drop into the ``||logic:else||`` slot underneath the previous ``||light:clear||`` block.
* In each of the ``||light:strip clear||`` blocks, click on the strip variable drop-down menu and select the ``||variables:LeftLights||`` and ``||variables:RightLights||`` variable.

```blocks
let Anim: light.NeoPixelAnimation = null
let LeftLights = light.createStrip(pins.A1, 2)
let RightLights = light.createStrip(pins.A6, 2)
forever(function () {
    if (input.switchRight()) {
        light.showAnimation(Anim, 500)
        LeftLights.showAnimation(Anim, 500)
        RightLights.showAnimation(Anim, 500)
    } else {
        light.clear()
        LeftLights.clear()
        RightLights.clear()
    }
})
```

Your final program should look something like the following:

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    Anim = light.rainbowAnimation
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    Anim = light.cometAnimation
})
input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    Anim = light.colorWipeAnimation
})
let Anim: light.NeoPixelAnimation = null
let LeftLights = light.createStrip(pins.A1, 2)
let RightLights = light.createStrip(pins.A6, 2)
light.setBrightness(100)
LeftLights.setBrightness(100)
RightLights.setBrightness(100)
forever(function () {
    if (input.switchRight()) {
        light.showAnimation(Anim, 500)
        LeftLights.showAnimation(Anim, 500)
        RightLights.showAnimation(Anim, 500)
    } else {
        light.clear()
        LeftLights.clear()
        RightLights.clear()
    }
})
```

Test your program in the Simulator by pressing the **A** button, the **B** button and the **A+B** button to see the different animations play, and then moving the **Switch** to the left to turn off all the lights. Once you’re happy with your program, download it onto your necklace!

![Beaded necklace in action](/static/cp/projects/beaded-necklace/beaded-necklace.gif)
