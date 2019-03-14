# Cup Lamp

![Finn and Jake at campfire](/static/cp/projects/cartoon-network/cup-lamp/at-banner.jpg)

**A Finn Cup Lamp from [Adventure Time](https://www.cartoonnetwork.com/video/adventure-time/)!**

Finn the Human is a fiery little kid with strong morals who lives in the Land of Ooo. Make your own Finn lamp out of a paper cup that will light up different colors.

![Completed Cup Lamp project](/static/cp/projects/cartoon-network/cup-lamp/cup-lamp-project.gif)

## Prepare

### This project

**Level**: Medium<br/>
**Duration**: 60 minutes

### Materials

![Project materials](/static/cp/projects/cartoon-network/cup-lamp/materials.jpg)

Collect the materials in the list before starting your project Make.

* [Adafruit Circuit Playground Express Base Kit](https://www.adafruit.com/product/3517)
* A paper coffee cup and top (12 oz size)
* Thin copper tape (similar to https://www.amazon.com/Bullet-Face-Double-Sided-Conductive-Electrical/dp/B01MR5DSCM)
* Printer and plain white paper
* Tape (masking, duct tape, or packing tape)
* Scissors
* Stickers, colored construction paper or other decorations for the lamp

## Make

### Step 1: Print out Templates (or draw) Finn’s outline

You can either print out the templates below, or draw your own on a piece of paper.

* [Cup Template #1](/static/cp/projects/cartoon-network/cup-lamp/template1.pdf)
* [Cup Template #2](/static/cp/projects/cartoon-network/cup-lamp/template2.pdf)

### Step 2: Cut out 4 strips, and Finn’s silhouette from the paper

Using scissors, cut two pieces of paper in half lengthways, along the drawn lines.

![Cutting paper in half with scissors](/static/cp/projects/cartoon-network/cup-lamp/make1.jpg)

Cut the inside of Finn’s head out, cut the inside of his hat out, and cut the rolling hills from the Land of Ooo out.

![Cutting the shapes out of the paper](/static/cp/projects/cartoon-network/cup-lamp/make2.jpg)

### Step 3: Assemble paper layers

Position all four strips of paper on top of each other creating a layered image of Finn in the Land of Ooo.

![Pieces layered together](/static/cp/projects/cartoon-network/cup-lamp/make3.jpg)

Tape the sides of the paper so they will stay together.

![Sides of layers taped together](/static/cp/projects/cartoon-network/cup-lamp/make4.jpg)

### Step 4: Cut out a hole in the paper cup

Cut a rectangular opening in the side of the coffee cup approximately 3 inches wide.

![Opening gut into the side of the cup](/static/cp/projects/cartoon-network/cup-lamp/make5.jpg)

### Step 5: Insert the paper in the cup

Roll the paper silhouette of Finn, and insert into the inside of the cup. Secure in place with some tape.

![Layers of the the silhouette rolled into the cup](/static/cp/projects/cartoon-network/cup-lamp/make6.jpg)

Trim the ends of the paper so they don’t stick out beyond the edge of the cup.

![Ends of the laayered silhouette trimmed off](/static/cp/projects/cartoon-network/cup-lamp/make7.jpg)

### Step 6: Connect the copper tape onto the Pins

Cut 6 strips of copper tape, each about 7 inches long. Keep the backing on the tape for now.

![6 pieces of copper tape cut](/static/cp/projects/cartoon-network/cup-lamp/make8.jpg)

Thread about an inch of each strip through the holes in the **A1** - **A6** pins on the @boardname@ – you may have to bend the copper tape lengthways to get it to fit through the holes. Make sure the backing of the copper tape is facing up.

![Copper tape theaded into the board's pin holes](/static/cp/projects/cartoon-network/cup-lamp/make9.jpg)

Carefully remove the backing from the end of the copper tape. You will have to cut the backing around the Pin holes – but be careful not to cut the copper tape. Fold the tape over itself through the pins to secure the connection to the @boardname@. Leave the copper tape backing on the external lengths of tape for now.

![Copper tape backing stripped to adhere](/static/cp/projects/cartoon-network/cup-lamp/make10.jpg)

![All of the pieces of copper tape attached](/static/cp/projects/cartoon-network/cup-lamp/make11.jpg)

### Step 7: Attach the Battery pack

Insert the batteries into the battery pack.

![3 batteries placed into the battery pack](/static/cp/projects/cartoon-network/cup-lamp/make12.jpg)

Thread the battery pack wire through the hole in the coffee cup lid and connect the battery pack to the @boardname@.

![Battery pack wires threaded through lid](/static/cp/projects/cartoon-network/cup-lamp/make13.jpg)

### Step 8: Attach the @boardname@

Use a small piece of tape, roll it inside out to form a loop so that the sticky side is on the outside. Attach the tape to the back of the @boardname@ board and attach it to the inside of the coffee cup lid. Leave the copper tape strips hanging outside the lid.

![Roll of tape on the back of board](/static/cp/projects/cartoon-network/cup-lamp/make14.jpg)

![The board attached to the inside of the lid](/static/cp/projects/cartoon-network/cup-lamp/make15.jpg)

### Step 9: Put the lid on the coffee cup

Note - We’ll be closing the lamp in this last step, so before you do this step, jump down to the [Coding](#code) part to load the code on your @boardname@.

Place the lid upside down on a surface. Carefully place the coffee cup part upside down over the lid, keeping the copper tape strips outside of the cup. Take care to avoid tearing the copper tape as you place the lid on the coffee cup, and make sure the copper tape strips aren’t touching each other.

Once the cup is secure, remove the rest of the backing from the copper tape and affix the strips of copper tape to the outside of the coffee cup. Trim the excess lengths of copper tape.

![Cup and lid together with copper tape stuck to sides](/static/cp/projects/cartoon-network/cup-lamp/make16.jpg)

### Complete!

Congratulations! You have made your own Finn Cup Lamp! Turn on the battery pack and press each of the copper tape switches to see your Lamp change color!

## Code #code

Code your Lamp to show different colors and animations when you press the different pins.

### Concepts

* Light
* Pixels
* Brightness
* Pins

### Blocks

```cards
input.pinA1.onEvent(ButtonEvent.Click, function () {})
light.setAll(0xff0000)
light.setBrightness(20)
```

### Step 1: Turn the lights different colors when you press a pin

* Open [MakeCode](@homeurl@) in your web browser
* Click on **New Project**

![New project button](/static/cp/projects/cartoon-network/cup-lamp/new-project.png)

* Name your Project as **CupLamp** (note – you don’t need to click the Save button, just type the name).

![Project name box](/static/cp/projects/cartoon-network/cup-lamp/project-name.png)

* From the ``||input:INPUT||`` Toolbox drawer, drag out an ``||input:on button click||`` block onto the Workspace (note – you can ignore or delete the existing ``||loops:forever||`` block on the workspace. Delete blocks by dragging them back over to the Toolbox menu).

![Project name box](/static/cp/projects/cartoon-network/cup-lamp/code1.png)

* Right-click on the ``||input:on button click||`` block, and select **Duplicate** to make a copy of this block. Do this 4 more times until you have 6 of these blocks on the Workspace.

![Duplicated 'on button click' blocks](/static/cp/projects/cartoon-network/cup-lamp/code2.png)

* In the ``||input:on button click||`` block, use the drop-down menu to select Pin **A1**.

![Input selections for 'on button click' block](/static/cp/projects/cartoon-network/cup-lamp/code3.png)

* Do this for all the ``||input:on button click||`` blocks, selecting Pins **A1** – **A6**.

```block
input.pinA1.onEvent(ButtonEvent.Click, function () {})
input.pinA2.onEvent(ButtonEvent.Click, function () { })
input.pinA3.onEvent(ButtonEvent.Click, function () { })
input.pinA4.onEvent(ButtonEvent.Click, function () { })
input.pinA5.onEvent(ButtonEvent.Click, function () { })
input.pinA6.onEvent(ButtonEvent.Click, function () { })
```

* From the ``||light:LIGHT||`` Toolbox drawer, drag out a ``||light:set all pixels||`` block to the Workspace, and drop it into the ``||input:on pin click||`` block.

!['set all pixels' placed into 'on pin click' block](/static/cp/projects/cartoon-network/cup-lamp/code5.png)

* Do this 5 more times so you have a ``||light:set all pixels||`` block in all of the ``||input:on pin click||`` blocks.
* In the ``||light:set all pixels||`` blocks, use the drop-down menu to select different colors for each pin.

![Color choices for 'set all pixels' block](/static/cp/projects/cartoon-network/cup-lamp/code6.png)

### Step 2: Set the Brightness

* From the ``||loops:LOOPS||`` Toolbox drawer, drag an ``||loops:on start||`` block onto the Workspace.

![The 'on start' block pulled out](/static/cp/projects/cartoon-network/cup-lamp/code7.png)

* From the ``||light:LIGHT||`` Toolbox drawer, drag out a ``||light:set brightness||`` block onto the Workspace and drop into the ``||loops:on start||`` block. Set the brightness value to `200`.

![Brightness slider for 'set brightness' block](/static/cp/projects/cartoon-network/cup-lamp/code8.png)

Your final program may look something like this:

```blocks
light.setBrightness(200)
input.pinA1.onEvent(ButtonEvent.Click, function () {
    light.setAll(0xff0000)
})
input.pinA2.onEvent(ButtonEvent.Click, function () {
    light.setAll(0xff8000)
})
input.pinA3.onEvent(ButtonEvent.Click, function () {
    light.setAll(0xffff00)
})
input.pinA4.onEvent(ButtonEvent.Click, function () {
    light.setAll(0x00ff00)
})
input.pinA5.onEvent(ButtonEvent.Click, function () {
    light.setAll(0x00ffff)
})
input.pinA6.onEvent(ButtonEvent.Click, function () {
    light.setAll(0x7f00ff)
})
```

### Step 6: Download

Test your program in the Simulator by clicking on each of the Pins **A1** – **A6** to see the colors change.

![Program running in simulator](/static/cp/projects/cartoon-network/cup-lamp/simulator.gif)

Once you’re happy with your program, click the **Download** button and follow the instructions to download the code to your @boardname@.

![Download window](/static/cp/projects/cartoon-network/cup-lamp/download.png)

Disconnect the @boardname@ from the USB cable, turn on the batteries, close the lid of the cup, and try pressing the copper tape to activate the colors on your lamp.

Great work!
