# Gumball Room Sign

![Amazing World of Gumball banner](/static/cp/projects/cartoon-network/room-sign/awg-banner.jpg)

**From [The Amazing World of Gumball](https://www.cartoonnetwork.com/video/gumball/index.html)!**

Make sure everyone knows whose room it is, even at night with this Amazing World of Gumball glow-in-the-dark Room Sign that alerts you when it hears a noise outside your door.

![Completed Room Sign project](/static/cp/projects/cartoon-network/room-sign/room-sign-project.gif)

## Prepare

### This project

**Level**: Easy<br/>
**Duration**: 30 minutes

### Materials

Collect the materials in the list before starting your project Make.

![Project materials](/static/cp/projects/cartoon-network/room-sign/materials.jpg)

* [Adafruit Circuit Playground Express Base Kit](https://www.adafruit.com/product/3517)
* Small Chalkboard Sign – something like https://www.amazon.com/dp/B01LY8TVV7/
* Bright colored chalk markers – something like https://www.amazon.com/Crafty-Croc-Markers-Colored-Reversible/dp/B011KQVV3C/
* Color printer and paper
* Tape (masking, duct tape, or packing tape)
* Scissors
* Jewels, stickers, or other decorations

## Make

### Step 1: Print out the Amazing World of Gumball logo

You can either print out the image below, or draw your own rainbow on the chalkboard.

![Gumball Logo](/static/cp/projects/cartoon-network/room-sign/gumball-logo.png)

### Step 2: Cut out the Rainbow

If you’ve printed out the Rainbow, then using scissors, cut out The Amazing World of Gumball logo.

![Cutting out the printed Gumball logo](/static/cp/projects/cartoon-network/room-sign/make1.jpg)

### Step 3: Tape Rainbow onto Chalkboard

Tape The Amazing World of Gumball logo onto the chalkboard. Or draw your own Gumball Rainbow logo on the chalkboard.

![Gumball logo taped to the chalkboard piece](/static/cp/projects/cartoon-network/room-sign/make2.jpg)

### Step 4: Attach the @boardname@

Use a small piece of tape, roll it inside out to form a loop so that the sticky side is on the outside. Attach the tape to the back of the @boardname@ board and affix it to your Chalkboard.

![Back of the board with tape on in before attachment](/static/cp/projects/cartoon-network/room-sign/make3.jpg)

Make sure the @boardname@ is placed so that the battery connector is at the bottom, to make it easier to connect the battery pack.

![Gumball logo taped to the chalkboard piece](/static/cp/projects/cartoon-network/room-sign/make4.jpg)

### Step 5: Attach the Battery pack

Insert the batteries into the battery pack.

![3 batteries placed inside battery holder](/static/cp/projects/cartoon-network/room-sign/make5.jpg)

Using the wire, connect the battery pack to the @boardname@.

![Battery pack closed and connected to board](/static/cp/projects/cartoon-network/room-sign/make6.jpg)

Use a piece of tape to attach the battery pack to the back of the chalkboard. Note – if your battery pack includes a clip on the back, you may consider removing that. Make sure you don’t tape over the On/Off switch on your battery pack.

![Battery pack taped onto the back of chalkboard piece](/static/cp/projects/cartoon-network/room-sign/make7.jpg)

### Step 6: Write your name and decorate Chalkboard

Using the chalk markers, write your name on your Room Sign.

![Name written with a chalk marker on the chalkboard](/static/cp/projects/cartoon-network/room-sign/make8.jpg)

### Step 7: Decorate with jewels, stickers or your favorite Gumball characters! 

![More decorations on the chalkboard piece](/static/cp/projects/cartoon-network/room-sign/make9.jpg)

### Complete!

Congratulations! You have made your own Gumball Room Sign!

Move on to the next section to code your Room Sign.

## Code

Code your Room Sign to play a sound and show an animation when you clap, snap or make a loud sound.

### Concepts

* Sound Sensor
* Animation
* Buttons

### Blocks

```cards
input.onLoudSound(function () {})
music.playSound(music.sounds(Sounds.MagicWand))
light.showAnimation(light.rainbowAnimation, 500)
input.buttonA.onEvent(ButtonEvent.Click, function () {})
light.clear()
```

### Step 1: Add an On Loud Sound block

Open [MakeCode](@homeurl@) in your web browser.

* Click on **New Project**

![New project button on Home page](/static/cp/projects/cartoon-network/room-sign/new-project.png)

* Name your Project as **RoomSign** (note – you don’t need to click the **Save** button, just type the name). 

![Name of project in the project name box](/static/cp/projects/cartoon-network/room-sign/project-name.png)

* From the ``||input:INPUT||`` Toolbox drawer, drag out an ``||input:on loud sound||`` block onto the Workspace (note – you can ignore or delete the existing ``||loops:forever||`` block on the workspace. Delete blocks by dragging them back over to the Toolbox menu).

!['on loud sound' block in the workspace](/static/cp/projects/cartoon-network/room-sign/code1.png)

### Step 2: Play a Sound

* From the ``||music:MUSIC||`` Toolbox drawer, drag out a ``||music:play sound||`` block to the coding Workspace, and drop it into the ``||input:on loud sound||`` block.
* In the ``||music:play sound||`` block, click on the drop-down menu to select a sound of your choice. 

!['play sound' block sound choices](/static/cp/projects/cartoon-network/room-sign/code2.png)

### Step 3: Show an animation

* From the ``||light:LIGHT||`` Toolbox drawer, drag out a ``||light:show animation||`` block to the coding Workspace, and drop it into the ``||input:on loud sound||`` block, right after the ``||music:play sound||`` block.
* In the ``||light:show animation||`` block, click on the animation drop-down menu to select your preferred animation.

!['show animation' block choices](/static/cp/projects/cartoon-network/room-sign/code3.png)

* In the ``||light:show animation||`` block, click on the number drop-down menu and select 2 seconds (`2000` milliseconds).

![Choose the animation play time](/static/cp/projects/cartoon-network/room-sign/code4.png)

### Step 4: Turn off lights when you press a button

* From the ``||input:INPUT||`` Toolbox drawer, drag out an ``||input:on button A click||`` block onto the Workspace.

!['on button A click' block on workspace](/static/cp/projects/cartoon-network/room-sign/code5.png)

From the ``||light:LIGHT||`` Toolbox drawer, scroll down to find the ``||light:clear||`` block and drag out onto the Workspace, and drop into the ``||input:on button A click||`` block.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.clear()
})
input.onLoudSound(function () {
    music.playSound(music.sounds(Sounds.MagicWand))
    light.showAnimation(light.rainbowAnimation, 500)
})
```
### Step 5: Download

Test your program in the Simulator by changing the volume dial and clicking on button **A**.

![Simulator running the completed program](/static/cp/projects/cartoon-network/room-sign/simulator.gif)

Once you’re happy with your program, click the **Download** button and follow the instructions to download the code to your @boardname@.
