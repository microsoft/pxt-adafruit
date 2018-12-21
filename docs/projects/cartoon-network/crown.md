# Ice King or Princess Bubblegum Crown

From **[Adventure Time](https://www.cartoonnetwork.com/video/adventure-time/)**!

![Adventure Time banner](/static/cp/projects/cartoon-network/crown/adventure-time.png)

Ice King is a menacing but largely misunderstood ice wizard whose crown is the source of his ice powers. Princess Bubblegum is the sovereign of the Candy Kingdom and a sentient piece of gum. Make your own Ice King or Princess Bubblegum crown that will light up and make sounds when you tilt your head!

![Ice King and Princess Bubblegum with crowns](/static/cp/projects/cartoon-network/crown/ice-king-princess-bubblegum.png)

![Completed crown project](/static/cp/projects/cartoon-network/crown/crown-project.gif)


**Level**: Easy<br/>
**Duration**: 30 minutes

## Materials

![Materials for Bubblegum crown make](/static/cp/projects/cartoon-network/crown/materials.jpg)

* [Adafruit Circuit Playground Express Base Kit](https://www.adafruit.com/product/3517)
* Yellow or gold poster board or thick cardstock paper (a cereal box with yellow construction paper also works well!). Should be at least 2 feet in length to fit around your head.
* Pencil, crayons, colored markers or paint
* Tape
* Scissors
* Glitter, jewels, stickers, feathers or other decorative items

## Make

### Step 1: Draw the silhouette of your crown

On your poster board, draw the top silhouette of the crown you are making. Make sure you leave room to position the Circuit Playground Express in the middle of your crown. Use these crown images to help you draw the ouline for your crown.

![Bubblegum crown silloute](/static/cp/projects/cartoon-network/crown/bubblegum-crown.jpg)

![Ice King crown silloute](/static/cp/projects/cartoon-network/crown/ice-king-crown.png)

![Ice King crown outline drawn on posterboard](/static/cp/projects/cartoon-network/crown/make1.jpg)

![Princess Bubblegum crown outline drawn on posterboard](/static/cp/projects/cartoon-network/crown/make2.jpg)

### Step 2: Cut out the Crown

Using scissors, cut out your crown from the poster board.

![Batteries placed in battery pack](/static/cp/projects/cartoon-network/crown/make3.jpg)

![Batteries placed in battery pack](/static/cp/projects/cartoon-network/crown/make4.jpg)

### Step 3: Attach the Circuit Playground Express

Use a small piece of tape and roll it inside out to form a loop so that the sticky side is on the outside. 
Place the tape in the center of your crown and affix the Circuit Playground Express onto it.

![Tape stuck on the center of the crown](/static/cp/projects/cartoon-network/crown/make5.jpg)

![Attach the board to the crown with the tape](/static/cp/projects/cartoon-network/crown/make6.jpg)

### Step 4: Attach the Battery Pack

Insert the batteries into the battery pack.

![Batteries placed in battery pack](/static/cp/projects/cartoon-network/crown/make7.jpg)

Using the wire, connect the battery pack to the Adafruit Circuit Playground Express.

![Battery pack connected to board](/static/cp/projects/cartoon-network/crown/make8.jpg)

Use a piece of tape to attach the battery pack to the back of the crown. Make sure you don’t tape over the On/Off switch on your battery pack.

![Battery pack taped to crown](/static/cp/projects/cartoon-network/crown/make9.jpg)

### Step 5: Decorate

Using crayons, colored markers, glitter, jewels or other materials, decorate your crown.

![Decorations drawn with a marker](/static/cp/projects/cartoon-network/crown/make10.jpg)

![A star sparkle drawn with a marker](/static/cp/projects/cartoon-network/crown/make11.jpg)

### Step 6: Tape the Crown closed

Wrap the poster board around your head to get the right size and tape the ends together.

![Ends of the crown taped together](/static/cp/projects/cartoon-network/crown/make12.jpg)

### Complete!

Congratulations! You have made your own Ice King or Princess Bubblegum Crown! Move on to the next section to code your crown.

## Code

Code your Crown to play a sound and show an animation when you tilt your head to the left or right.

### Concepts

* Motion Sensor, or Accelerometer (shake)
* Animation
* Pixels
* Sound

### Blocks

```cards
light.setAll(0xff8000)
light.showAnimation(light.theaterChaseAnimation, 2000)
music.playSound(music.sounds(Sounds.Wawawawaa))
input.onGesture(Gesture.Shake, function () {}) 
```

### Step 1: Turn on all lights red or blue

* Open [MakeCode](@homeurl@) in your web browser
* Click on **New Project**

![New Project button on Home Page](/static/cp/projects/cartoon-network/crown/new-project.png)

* Name your project as "Crown" (note – you don’t need to click the **Save** button, just type the name).

![Name the project as "Crown"](/static/cp/projects/cartoon-network/crown/project-name.png)

* From the ``||loops:LOOPS||`` Toolbox drawer, drag out an ``||loops:on start||`` block to the coding Workspace (note – you can ignore or delete the existing Forever block on the workspace. Delete blocks by dragging them back over to the Toolbox menu).

!['on start' block pulled from LOOPS drawer](/static/cp/projects/cartoon-network/crown/code1.png)

* From the ``||light:LIGHT||`` Toolbox drawer, drag out a ``||light:set all pixels||`` block to the Workspace, and drop it into the ``||loops:on start||`` block.

!['set all pixels' block in 'on start'](/static/cp/projects/cartoon-network/crown/code2.png)

* If you are making the Ice King crown, leave the default Red color. If you are making Princess Bubblegum’s crown, then in the ``||light:set all pixels||`` block, click on the color and select a Blue color.

![Color picker for `set all pixels` block](/static/cp/projects/cartoon-network/crown/code3.png)

### Step 2: Add two blocks for tilting your head left and right

* From the ``||input:INPUT||`` Toolbox drawer, drag out two ``||input:on shake||`` block onto the Workspace.

![Two 'on shake' blocks in workspace](/static/cp/projects/cartoon-network/crown/code4.png)

* In the ``||input:on shake||`` blocks, use the drop-down menus to select ``tilt right`` for one block and ``tilt left`` for the other.

![Gesture selection for 'on shake' block](/static/cp/projects/cartoon-network/crown/code5.png)

### Step 3: Play a Sound

* From the ``||music:MUSIC||`` Toolbox drawer, drag out two ``||music:play sound||`` blocks to the coding Workspace, and drop one each into the ``||input:on tilt left||`` and ``||input:on tilt right||`` blocks.

!['play sound' blocks inserted into the 'on tilt` blocks](/static/cp/projects/cartoon-network/crown/code6.png)

* In the ``||music:play sound||`` blocks, use the drop-down menus to select different sound effects. Note, you can test the sounds in the Simulator by moving your mouse over the left and right sides of the Circuit Playground Express.

### Step 4: Show an animation

* From the ``||light:LIGHT||`` Toolbox drawer, drag out two ``||light:show animation||`` blocks to the coding Workspace, and drop one each into the ``||input:on tilt left||`` and ``||input:on tilt right||`` blocks, right after the ``||music:play sound||`` blocks.
* In the ``||light:show animation||`` blocks, click on the animation drop-down menu to select your preferred animations.

Your final program may look something like this:

```blocks
light.setAll(0x00ffff)
input.onGesture(Gesture.TiltLeft, function () {
    music.playSound(music.sounds(Sounds.JumpUp))
    light.showAnimation(light.rainbowAnimation, 2000)
})
input.onGesture(Gesture.TiltRight, function () {
    music.playSound(music.sounds(Sounds.JumpDown))
    light.showAnimation(light.cometAnimation, 2000)
})
```

### Step 5: Download

Test your program in the Simulator by moving your mouse over the left and right sides of the board.

![Program running in the simulator](/static/cp/projects/cartoon-network/crown/simulator.gif)

Once you’re happy with your program, click the **Download** button and follow the instructions to download the code to your Adafruit Circuit Playground Express.

![Download window](/static/cp/projects/cartoon-network/crown/download.png)

Disconnect the Circuit Playground Express from the USB cable, turn on the batteries, put on your crown and try tilting your head to the left and right sides.

Great work!
