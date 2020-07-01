# Code

## ~avatar avatar

Write a program that will power up our gauntlets to deflect attacks when we raise our arms, and then turn off when we lower our arms.

## ~

## Attach USB cable

* Insert the small end of your USB cable into the silver port at one end of the @boardname@.
* Insert the big end of the USB cable into your computer.

![USB cable](/static/cp/projects/wonder-woman-gauntlets/usb-cable.jpg)

## Getting started

* Open a browser window to @homeurl@.
* Click on **New Project**.

![New Project button](/static/cp/projects/wonder-woman-gauntlets/new-project.png)

## Set the volume and brightness

* Click on the ``||loops:LOOPS||`` Toolbox drawer.
* Drag out an ``||loops:on start||`` block onto the workspace.

![Pull out on start block](/static/cp/projects/wonder-woman-gauntlets/on-start.png)

```blocks
```

* From the ``||music:MUSIC||`` Toolbox drawer, scroll down and drag out a ``||music:set volume||`` block and drop into the ``||loops:on start||`` block.

![Pull out set volume block](/static/cp/projects/wonder-woman-gauntlets/set-volume.png)

* In the ``||music:set volume||`` block, set the maximum volume of `255`.

![Maximum setting on volume slider](/static/cp/projects/wonder-woman-gauntlets/max-volume.png)

```blocks
music.setVolume(255)
```

* Click on the ``||light:LIGHT||`` Toolbox drawer, drag out a ``||light:set brightness||`` block and drop into the ``||loops:on start||`` block.
* In the ``||light:set brightness||`` block, set the maximum brightness of `255`.

![Pull out set brightness block](/static/cp/projects/wonder-woman-gauntlets/set-brightness.png)

```blocks
music.setVolume(255)
light.setBrightness(255)
```

## Play a Sound and Animation

* From the ``||input:INPUT||`` Toolbox drawer, drag an ``||input:on shake||`` block onto the Workspace.

![Pull out on shake block](/static/cp/projects/wonder-woman-gauntlets/on-shake.png)

* In the ``||input:on shake||`` block, click on the ``||input:shake||`` drop down menu and select ``||input:tilt down||``.

![Selecting tilt down](/static/cp/projects/wonder-woman-gauntlets/tilt-down.png)

* From the ``||music:MUSIC||`` Toolbox drawer, drag out a ``||music:play sound block||`` and drop into the ``||input:on tilt down||`` block.
* In the ``||music:play sound block||`` block, click on the drop-down menu to select a sound effect you want to play.

![Selecting magic wand sound](/static/cp/projects/wonder-woman-gauntlets/play-sound1.png)

* You can test out the different sounds in the @boardname@ simulator by moving your mouse towards the top.

![CPX simulator](/static/cp/projects/wonder-woman-gauntlets/simulator.png)

* From the ``||light:LIGHT||`` Toolbox drawer, drag out a ``||light:show animation||`` block and drop into the ``||input:on tilt down||`` block.

![Pull out show animation block](/static/cp/projects/wonder-woman-gauntlets/show-animation.png)

* In the ``||light:show animation||`` block, click on the animation design drop-down and select an animation to play. 
* In the ``||light:show animation||`` block, click on the ``500 ms`` drop-down menu and select 2 seconds (or 2000 milliseconds) as the duration to play the animation.

![Select time for show animation block](/static/cp/projects/wonder-woman-gauntlets/show-animation-menu.png)

## Turn off gauntlets

* From the ``||input:INPUT||`` Toolbox drawer, drag another ``||input:on shake||`` block onto the Workspace.

![Pull out on shake block](/static/cp/projects/wonder-woman-gauntlets/on-shake.png)

* In the ``||input:on shake||`` block, click on the ``||input:shake||`` drop down menu and select ``||input:tilt up||``.

![Selecting tilt up](/static/cp/projects/wonder-woman-gauntlets/tilt-down.png)

* From the ``||light:LIGHT||`` Toolbox drawer, scroll down, drag out a ``||light:clear||`` block and drop into the ``||input:on tilt up||`` block.

```blocks
input.onGesture(Gesture.TiltUp, function () {
    light.clear()
})
```

* From the ``||music:MUSIC||`` Toolbox drawer, drag out a ``||music:play sound||`` block and drop into the ``||input:on tilt up||`` block.
* In the ``||music:play sound||`` block, click on the drop-down menu to select a sound effect you want to play when your gauntlets turn off.

![Selecting jump down sound](/static/cp/projects/wonder-woman-gauntlets/play-sound2.png)

Your complete program should look similar to this: 

```blocks
music.setVolume(255)
light.setBrightness(255)
input.onGesture(Gesture.TiltDown, function () {
    music.magicWand.play()
    light.showAnimation(light.cometAnimation, 2000)
})
input.onGesture(Gesture.TiltUp, function () {
    light.clear()
    music.jumpDown.play()
})
```

## Test

In the @boardname@ Simulator window, test your project by moving your mouse up and down on the @boardname@. You should see the lights turn on and off and hear sounds play. 

![Program in simulator](/static/cp/projects/wonder-woman-gauntlets/simulator.gif)

## Download

Click the big pink **Download** button.

![Download button](/static/cp/projects/wonder-woman-gauntlets/download.png)

This will save your program as a file in the **Downloads** folder on your computer. Using your computer’s file explorer, open the **Downloads** folder, you should see a file there called `circuitplayground-Untitled.uf2`. This is your program. 

![Downloads folder](/static/cp/projects/wonder-woman-gauntlets/downloads-folder.png)

Now, check the @boardname@ board that is plugged into your computer via the USB cable, and make sure that all the lights are green. If they are not green, press and release the **RESET** button in the middle of the board until all the lights turn green. 

![Reset button on CPX](/static/cp/projects/wonder-woman-gauntlets/cpx-reset.png)

Using your computer’s file explorer, you should see the @boardname@ show up as a USB drive called **CPLAYBOOT**. Drag and drop (or copy and paste) your `circuitplayground-Untitled.uf2` program file from the **Downloads** folder into the **CPLAYBOOT** drive. 

![CPLAYBOOT drive](/static/cp/projects/wonder-woman-gauntlets/cplayboot.png)

That’s it! Congratulations on [Making](/projects/wonder-woman-gauntlets/make) and [Coding](#) your very own Wonder Woman indestructible Gauntlets.

![Wonder Woman Gauntlets demonstration](/static/cp/projects/wonder-woman-gauntlets/bracers-demo.gif)