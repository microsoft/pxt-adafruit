# Code

We will write a program that will power up our gauntlets to deflect attacks when we raise our arms, and then turn off when we lower our arms.

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

<Set Brightness.png>

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

* From the ``||light:LIGHT||`` Toolbox drawer, drag out a Show Animation block and drop into the ``||input:on tilt down||`` block.

* From the ``||light:LIGHT||`` Toolbox drawer, drag out a Show Animation block and drop into the On Tilt Down block.

<Show Animation.png>

· In the Show Animation block, click on the animation design drop-down and select an animation to play 
· In the Show Animation block, click on the 500 ms drop-down menu and select 2 seconds (or 2000 milliseconds) as the duration to play the animation 

<Show Animation Menu.png>

5. Turn off gauntlets

* From the Input Toolbox drawer, drag another On Shake block onto the workspace 

<On Shake.png>

· In the On Shake block, click on the Shake drop down menu and select Tilt Up 

<Tilt Up.png>

· From the Light Toolbox drawer, scroll down, drag out a Clear block and drop into the On Tilt Up block 

<Clear.png>

· From the Music Toolbox drawer, drag out a Play Sound block and drop into the On Tilt Up block 
· In the Play Sound block, click on the drop-down menu to select a sound effect you want to play when your gauntlets turn off 

<Play Sound 2.png>

![Selecting jump down sound](/static/cp/projects/wonder-woman-gauntlets/play-sound2.png)

Your complete program should look similar to this: 

<Bracers Code.png> https://makecode.com/_JyL3A7f0T46F 


6. Test 
In the Circuit Playground Express Simulator window, test your project by moving your mouse up and down on the Circuit Playground Express. You should see the lights turn on and off and the sounds play. 

<Simulator.gif> 
7. Download 
Click the big pink Download button. 

<Download.png> 
This will save your program as a file in the Downloads folder on your computer. Using your computer’s file explorer, open the Downloads folder, you should see a file there called circuitplayground-Untitled.uf2. This is your program. 

<Downloads folder.png> 
Now, check the Circuit Playground Express board that is plugged into your computer via the USB cable, and make sure that all the lights are green. If they are not green, press and release the Reset button in the middle of the board until all the lights turn green. 

<CPX reset.png> 
Using your computer’s file explorer, you should see the Circuit Playground Express show up as a USB drive called CPLAYBOOT. Drag and drop (or copy and paste) your circuitplayground-Untitled.uf2 program file from the Downloads folder into the CPLAYBOOT drive. 

<CPLAYBOOT.png> 

That’s it! Congratulations on Making and Coding your very own Wonder Woman indestructible Gauntlets