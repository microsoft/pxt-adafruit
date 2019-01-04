# Enchiridion

![Adventure Time bannner](/static/cp/projects/cartoon-network/enchiridion/at-banner.jpg)

**The Enchiridion from [Adventure Time](https://www.cartoonnetwork.com/video/adventure-time/)!**

The Enchiridion (which translates to "The Handbook" or "The Manual") is an ancient book with codes of conduct, guidelines, and other helpful information for heroes. The book also has magical powers that are unlocked by inserting the royal gems into their appropriate slots on the front cover of the book. Create your own Enchiridion and try to collect all the gems!

![The Enchiridion cover](/static/cp/projects/cartoon-network/enchiridion/enchiridion.jpg)

https://youtu.be/PezmgdB1kOE 
<br/>

## Prepare

### This project

**Level**: Medium<br/>
**Duration**: 60 minutes

### Materials

Collect the materials in the list before starting your project Make.

![Materials](/static/cp/projects/cartoon-network/enchiridion/materials.jpg)

* [Adafruit Circuit Playground Express Base Kit](https://www.adafruit.com/product/3517)
* Favorite hardcover book
* Brown grocery bag, or brown butcher paper
* Crayons, colored pencils, paint or colored markers
* Tape (clear, duct tape or packing tape will work)
* Scissors

## Make

### Step 1: Cover the book

If using a brown grocery bag, cut it along the side and cut out the bottom to open up as a flat piece of paper, and remove any handles.

![Prepare the paper from the bag](/static/cp/projects/cartoon-network/enchiridion/make1.jpg)

Use the brown bag or brown butcher paper to cover the outside cover of the book. To do this, mark the top and bottom edges of the book on the paper, then fold the paper to fit the height of the book.

![Top and bottom of cover marked on the bag](/static/cp/projects/cartoon-network/enchiridion/make2.jpg)

![Top and bottom edges folded](/static/cp/projects/cartoon-network/enchiridion/make3.jpg)

Wrap the paper around the book and fold and tape the ends around the front and back cover flaps. Depending on the size of your book, you may need to trim the ends if they are too long.

![Ends of the cover taped to top and bottom edge](/static/cp/projects/cartoon-network/enchiridion/make4.jpg)

### Step 2: Position and attach the @boardname@

Use a small piece of tape and roll it inside out to form a loop so that the sticky side is on the outside.

![Loop of tape stuck to back of board](/static/cp/projects/cartoon-network/enchiridion/make5.jpg)

Place the tape on the back of the @boardname@ and press the @boardname@ in the center of the front cover of the book. Make sure the battery pack port is at the bottom, and the USB port is at the top.

![The board attached to the front cover of book](/static/cp/projects/cartoon-network/enchiridion/make6.jpg)

### Step 3: Draw the book cover details

Draw a bigger circle around the @boardname@ (you may want to use a cup or a roll of duct tape to trace the outline of the circle). Inside the circle, draw the 6 royal gems and color them in.

![Draw gems around the board](/static/cp/projects/cartoon-network/enchiridion/make7.jpg)

!["Enchiridion" written on the cover](/static/cp/projects/cartoon-network/enchiridion/make8.jpg)

Draw a rectangle with curved corners around the whole thing. Then draw the sword, shields and any other details you would like, and color with colored pencils, crayons or markers.

![Sword and shields drawn on the cover](/static/cp/projects/cartoon-network/enchiridion/make9.jpg)

### Step 4: Insert the batteries and attach battery pack

Insert the batteries into the battery pack.

![3 batteries inserted into the battery pack](/static/cp/projects/cartoon-network/enchiridion/make10.jpg)

Attach the wire from the battery pack to the @boardname@.

![Wire from the battery pack connected to the board](/static/cp/projects/cartoon-network/enchiridion/make11.jpg)

Tape the battery pack onto the back of the book, being careful not to tape over the On/Off switch. If your battery pack includes a clip, you may want to remove that as well.

![The battery pack taped to the back of the book](/static/cp/projects/cartoon-network/enchiridion/make12.jpg)

### Complete!

Congratulations! You have made your own magical Enchiridion!

Move on to the next step to code your Enchiridion.

## Code

Code a “Collect the Gems” game on your Enchiridion – where you have to press the button to match the right gems in their places.

### Concepts

* Light
* Variables
* Booleans
* Conditionals

### Blocks

```cards
input.buttonA.onEvent(ButtonEvent.Click, function () {})
if (true) {}
let x = 0
light.showRing("")
light.pixelColor(0)
music.playSound("")
```

### Step 1: Create a Play variable

The first thing we’ll want to do is to create a variable to let us know if we are playing the game or not. This variable will only have two values – True or False.

* Open [MakeCode](@homeurl@) in your web browser 
* Click on **New Project**

![New project button](/static/cp/projects/cartoon-network/enchiridion/new-project.png)

*  Name your Project as **Enchiridion** (note – you don’t need to click the **Save** button, just type the name)

![Project name box](/static/cp/projects/cartoon-network/enchiridion/project-name.png)

* From the ``||loops:LOOPS||`` Toolbox drawer, drag out an ``||loops:on start||`` block to the coding Workspace 
* In the ``||variables:VARIABLES||`` Toolbox drawer, click on the **Make a Variable** button and name your variable``play``.

![Name the 'play' variable](/static/cp/projects/cartoon-network/enchiridion/code1.png)

From the ``||variables:VARIABLES||`` Toolbox drawer, drag out a ``||variables:set||`` variable block to the coding Workspace and drop it into the ``||loops:on start||`` block.

!['set' variable block](/static/cp/projects/cartoon-network/enchiridion/code2.png)

From the ``||logic:LOGIC||`` Toolbox drawer, under the **Boolean** subcategory, drag out a ``||logic:true||`` block and drop it into the ``||variables:set||`` block replacing the `0`.

!['true' logic block](/static/cp/projects/cartoon-network/enchiridion/code3.png)

### Step 2: Create color patterns

To play the game, we’ll flash different color patterns onto the @boardname@. One of these color patterns will match the magic gem colors on the Enchiridion.

The first thing we need to do is check that we are still playing the game.

* From the ``||logic:LOGIC||`` Toolbox drawer, drag out an ``||logic:if then||`` block and drop into the ``||loops:forever||`` block.

!['if then' logic block](/static/cp/projects/cartoon-network/enchiridion/code4.png)

From the ``||variables:VARIABLES||`` Toolbox drawer, drag out a ``||variables:play||`` variable block to the coding Workspace and drop it into the ``||logic:if then||`` block replacing `true`.

!['play' variable placed into 'if then'](/static/cp/projects/cartoon-network/enchiridion/code5.png)

* From the ``||light:LIGHT||`` Toolbox drawer, drag out 3 ``||light:show ring||`` blocks and place them inside the ``||logic:if then||`` block.

!['play' variable placed into 'if then'](/static/cp/projects/cartoon-network/enchiridion/code6.png)

* In the ``||light:show ring||`` blocks, click on the color wheel to select different colors and then click on the outside ring lights to change the lights to different colors. The middle grey color in the wheel turns the lights off. 

```block
let play = 0
forever(function () {
    if (play) {
        light.showRing(
        `black green white black blue yellow red black pink purple`
        )
        light.showRing(
        `red yellow orange black red white blue green red black`
        )
        light.showRing(
        `yellow pink black green black black purple black green blue`
        )
    }
})
```
* For the last ``||light:show ring||`` block, copy the color pattern below – this matches the gem colors on the Enchiridion: ``blue``, ``green``, ``off``, ``purple``, ``off``, ``off``, ``green``, ``off``, ``pink``, ``yellow``.

![Ring on the Enchiridion cover](/static/cp/projects/cartoon-network/enchiridion/enchiridion-ring.jpg)

```block
light.showRing(
        `yellow pink black green black black purple black green blue`
        )
```

### Step 3: Check for the matching gem colors

When a player presses the **A** button, we want to check if the current colors match the gem colors on the Enchiridion. If they don’t match, we continue playing the game. But if they do match, then we’ll stop playing the game and play a sound.

There are six gems on the Enchiridion, so we’ll need to check the colors in six different locations on the @boardname@. The light locations go from 0 – 9 counter-clockwise:

![Pixel locations on the board](/static/cp/projects/cartoon-network/enchiridion/cpx-pixels.png)

* From the ``||input:INPUT||`` Toolbox drawer, drag out a ``||input:on button click||`` block onto the Workspace.
* From the ``||logic:LOGIC||`` Toolbox drawer, drag out an ``||logic:if then||`` block and drop into the ``||input:on button click||`` block.
* From the ``||logic:LOGIC||`` Toolbox drawer, drag out an equals ``||logic:0 = 0||`` comparison block, and drop into the ``||logic:if then||`` block replacing the default `true`.

![Comparison block placed into 'if then' block](/static/cp/projects/cartoon-network/enchiridion/code8.png)

* In the ``||light:LIGHT||`` Toolbox drawer, scroll down to the **More** section and drag out a ``||light:pixel color||`` at block onto the Workspace, and drop it into the first slot of the ``||logic:0 = 0||`` comparison block replacing the `0`.

!['pixel color' placed into comparsion block](/static/cp/projects/cartoon-network/enchiridion/code9.png)

* From the ``||light:LIGHT||`` Toolbox drawer, in the **Color** section, drag out a ``||light:color||`` value block onto the Workspace and drop it into the second slot of the ``||logic:0 = 0||`` comparison block replacing the other `0`.
* In the ``||light:color||`` block, use the drop-down menu to select the ``yellow`` color.

![Color choices for the 'color' block](/static/cp/projects/cartoon-network/enchiridion/code10.png)

Now, we need to do the same thing to check the colors on the other five locations.

* Right-click (or long-press) on the ``||logic:if then||`` block to see the context menu appear. Click on **Duplicate** to make a copy of this block.

![Duplicate selection on block menu](/static/cp/projects/cartoon-network/enchiridion/code11.png)

* Drag this duplicated block inside the original ``||logic:if then||`` block.
* Do this 4 more times, so there are 6 total nested ``||logic:if then||`` blocks.

```block
input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (light.pixelColor(0) == Colors.Yellow) {
        if (light.pixelColor(0) == Colors.Yellow) {
            if (light.pixelColor(0) == Colors.Yellow) {
                if (light.pixelColor(0) == Colors.Yellow) {
                    if (light.pixelColor(0) == Colors.Yellow) {
                        if (light.pixelColor(0) == Colors.Yellow) {
                        	
                        }
                    }
                }
            }
        }
    }
})
```

* In each of the ``||light:pixel color at||`` blocks, change the location that you are checking, and in the ``||light:color||`` value block, use the drop-down menu to change the color that you’re checking:

>* Location 0 = Yellow 
* Location 1 = Pink 
* Location 3 = Green 
* Location 6 = Purple 
* Location 8 = Green 
* Location 9 = Blue

### Step 4: Stop playing when you match the gem colors

If all the colors match, then let’s stop play and also play a winning sound.

* From the ``||variables:VARIABLES||`` Toolbox drawer, drag out a ``||variables:set||`` variable block onto the Workspace and drop inside the ``||logic:if then||`` blocks.
* From the ``||logic:LOGIC||`` Toolbox drawer, under the **Boolean** subcategory, drag out a ``||logic:false||`` block and drop it into the ``||variables:set||`` block replacing the `0`.

```block
let play = false
input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (light.pixelColor(0) == Colors.Yellow) {
        if (light.pixelColor(1) == Colors.Pink) {
            if (light.pixelColor(3) == Colors.Green) {
                if (light.pixelColor(6) == Colors.Purple) {
                    if (light.pixelColor(8) == Colors.Green) {
                        if (light.pixelColor(9) == Colors.Blue) {
                            play = false
                        }
                    }
                }
            }
        }
    }
})
```

* From the ``||music:MUSIC||`` Toolbox drawer, drag out a ``||music:play sound||`` block onto the Workspace and drop inside the ``||logic:if then||`` blocks after the ``||variables:set||`` variable block.
* In the ``||music:play sound||`` block, use the drop-down menu to select the ``magic wand`` sound effect.

![Sound effect selections](/static/cp/projects/cartoon-network/enchiridion/code14.png)

### Step 5: Restart the game

* From the ``||input:INPUT||`` Toolbox drawer, drag out a ``||input:on button click||`` block onto the Workspace.
* In the ``||input:on button click||`` block, use the drop-down menu to select ``Button B``.

![Input button selections](/static/cp/projects/cartoon-network/enchiridion/code15.png)

* In the ``||loops:on start||`` block on the coding Workspace, right-click on the ``||variables:set||`` variable block and select **Duplicate** to make a copy of this block. 
* Drag this new copy of the ``||variables:set||`` variable block into the ``||input:on button B click||`` block.

```block
let play = false
input.buttonB.onEvent(ButtonEvent.Click, function () {
    play = true
})
```

Your final program may look something like this:

```blocks
let play = true
input.buttonB.onEvent(ButtonEvent.Click, function () {
    play = true
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (light.pixelColor(0) == Colors.Yellow) {
        if (light.pixelColor(1) == Colors.Pink) {
            if (light.pixelColor(3) == Colors.Green) {
                if (light.pixelColor(6) == Colors.Purple) {
                    if (light.pixelColor(8) == Colors.Green) {
                        if (light.pixelColor(9) == Colors.Blue) {
                            play = false
                            music.playSound(music.sounds(Sounds.MagicWand))
                        }
                    }
                }
            }
        }
    }
})
forever(function () {
    if (play) {
        light.showRing(
            `black green white black blue yellow red black pink purple`
        )
        light.showRing(
            `red yellow orange black red white blue green red black`
        )
        light.showRing(
            `yellow pink black green black black purple black green blue`
        )
    }
})
```

### Step 6: Test and Download

Try playing the game in the Simulator – click on button **A** whenever the Enchiridion gem color pattern shows up. If you correctly match the gems, the animation should stop and a sound effect plays. When you press button **B**, play should resume. You can add more difficulty to the game by adding more ``||light:show ring||`` color patterns.

![Simulator](/static/cp/projects/cartoon-network/enchiridion/simulator.gif)

Once you’re happy with your program, click the **Download** button and follow the instructions to download the code to your @boardname@.

![Download dialog](/static/cp/projects/cartoon-network/enchiridion/download.png)

Disconnect the @boardname@ from the USB cable, turn on the batteries, and try to collect all the gems and unleash the magical powers of the Enchiridion! 

Great work!