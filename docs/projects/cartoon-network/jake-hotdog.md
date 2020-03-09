# Jake the Hot Dog

![Jake the Dog with a fiddle](/static/cp/projects/cartoon-network/jake-hotdog/at-banner.jpg)

**From [Adventure Time](https://www.cartoonnetwork.com/video/adventure-time/)**

Jake is a shape-shifting dog who is Finn's best friend and adoptive brother in Adventure Time. Make your own Jake, and code a ‘hot potato’ or in this case Hot Dog game with him! In this game, players gather in a circle and pass Jake the Hot Dog around to each other while music plays. The player who is holding the Hot Dog is out when the music stops. They move out of the circle and the game continues. The game keeps going until only one player is left. Hot Dog is a fast-paced, high-pressure game. Are you Ready? Let’s toss Jake!

![Jake cartoon character](/static/cp/projects/cartoon-network/jake-hotdog/jake.png)

https://youtu.be/s9QNnYTeSVI
<br/>

### ~ hint

#### Flipgrid topic

This project is also a Flipgrid topic:

https://flipgrid.com/665fd293

### ~

## Prepare

### This project

**Level**: Medium<br/>
**Duration**: 60 minutes

### Materials

Collect the materials in the list before starting your project Make.

![Make materials](/static/cp/projects/cartoon-network/jake-hotdog/materials.jpg)

* [Adafruit Circuit Playground Express Base Kit](https://www.adafruit.com/product/3517)
* Brown construction paper (or brown paper bag works well)
* 1 piece white paper
* Brown packing tape, or brown duct tape
* Brown pipe cleaners 
* Black marker
* Black pom-pom (for nose)
* Regular glue, or hot glue/glue gun
* Scissors

## Make

### Step 1: Create Jake’s body

Decide what shape or size you want your Jake to be. Use as much brown paper as you need to bunch up into a ball that’s the approximate size for your Jake.

![Crumpled brown paper](/static/cp/projects/cartoon-network/jake-hotdog/make1.jpg)

Use the brown packing tape or brown duct tape to wrap around the ball of paper to keep the shape.

![Tape the brown paper to for the shape](/static/cp/projects/cartoon-network/jake-hotdog/make2.jpg)

### Step 2: Attach Jake’s arms and legs

Using brown pipe cleaners, cut or bend 4 pieces to the right size for Jake’s arms and legs.

![3 pipe brown cleaners](/static/cp/projects/cartoon-network/jake-hotdog/make3.jpg)

Using the scissors, poke holes in the places on Jake’s body where you think arms and legs should be. Insert the pipe cleaners.

![Pipe cleaners inserted into the shape](/static/cp/projects/cartoon-network/jake-hotdog/make4.jpg)

### Step 3: Make Jake’s face

On the piece of white paper, draw 2 circles for Jake’s eyes. Outline these circles in black marker, then cut them out with the scissors.

![Two eyes drawn as circles](/static/cp/projects/cartoon-network/jake-hotdog/make5.jpg)

Bend a pipe cleaner into fourths, twist in the middle and bend the ends down to create Jake’s mustache.

![Mustache make from a pipe cleaner](/static/cp/projects/cartoon-network/jake-hotdog/make6.jpg)

Using regular glue, or hot glue and a glue gun if you have it, glue Jake’s eyes, mustache and nose on.

![Glue on eyes, mustache and nose](/static/cp/projects/cartoon-network/jake-hotdog/make7.jpg)

### Step 4: Attach the @boardname@

Use a small piece of tape and roll it inside out to form a loop so that the sticky side is on the outside. Place the tape on the back of the @boardname@ and stick onto Jake’s tummy.

![Apply tape to the back of the board](/static/cp/projects/cartoon-network/jake-hotdog/make8.jpg)

### Step 5: Insert the batteries

Insert the batteries into the battery pack.

![3 batteries inserted into the battery pack](/static/cp/projects/cartoon-network/jake-hotdog/make9.jpg)

### Step 6: Attach battery pack

Attach the wire from the battery pack to the @boardname@.

![Battery pack connected to the board](/static/cp/projects/cartoon-network/jake-hotdog/make10.jpg)

Position the battery pack on Jake’s back. Use a tape, wrap it around Jake’s body and the battery pack, being careful not to tape over the On/Off switch on the battery pack.

![Attach battery to the back of Jake](/static/cp/projects/cartoon-network/jake-hotdog/make11.jpg)

### Complete!

Congratulations! You have made your own Jake the Dog! Move on to the next step to code Jake.

## Code

Code Jake to play the Hot Dog game with him. We’ll need to make him play some sounds for a random amount of time, before stopping to indicate that a player is out.

### Concepts

* Button pressed event 
* Variables 
* Loops 
* Sounds 
* Animations

### Blocks

```cards
input.buttonA.onEvent(ButtonEvent.Click, function () {})
Math.randomRange(0, 100)
music.playTone(262, music.beat(BeatFraction.Quarter))
while (true) {}
light.showAnimation(light.rainbowAnimation, 500)
let x = 0
```

### Step 1: Start the game when you press a Button

* Open [MakeCode](@homeurl@) in your web browser 
* Click on **New Project**

![New project button](/static/cp/projects/cartoon-network/jake-hotdog/new-project.png)

*  Name your Project as **HotDog** (note – you don’t need to click the Save button, just type the name)

![Project name window](/static/cp/projects/cartoon-network/jake-hotdog/project-name.png)

From the ``||input:INPUT||`` Toolbox drawer, drag out an ``||input:on button click||`` block to the coding Workspace (note – you can ignore or delete the existing ``||loops:forever||`` block on the workspace. Delete blocks by dragging them back over to the Toolbox menu).

!['button A click' block](/static/cp/projects/cartoon-network/jake-hotdog/code1.png)

* Now we need a variable to hold the random length of time that our game will play. In the ``||variables:VARIABLES||`` Toolbox drawer, click on the **Make a Variable** button. Name this variable ``delay``.

![Name a new variable dialog](/static/cp/projects/cartoon-network/jake-hotdog/code2.png)

* From the ``||variables:VARIABLES||`` Toolbox drawer, drag a ``||variables:set||`` variable block onto the Workspace and drop into the ``||input:on button click||`` block.

![A 'set' variable block](/static/cp/projects/cartoon-network/jake-hotdog/code3.png)

* We will set the delay in milliseconds (500ms = ½ second, 2000ms = 2 seconds). From the ``||math:MATH||`` Toolbox drawer, drag a ``||math:pick random||`` block onto the Workspace, and drop into the Set variable block replacing the `0`. Type `500`, and `2000` in the ``||math:pick random||`` block.

```block
let delay = 0
input.buttonA.onEvent(ButtonEvent.Click, function () {
    delay = Math.randomRange(300, 2000)
})
```

### Step 2: Add a loop to keep the game going

* From the ``||loops:LOOPS||`` Toolbox drawer, drag out a ``||loops:while||`` block onto the Workspace, and place after the ``||variables:set||`` variable block.

![Add the 'while' block](/static/cp/projects/cartoon-network/jake-hotdog/code5.png)

We want to keep the game in play until our delay variable runs out of time. From the ``||logic:LOGIC||`` Toolbox drawer, drag out a Comparison ``||logic:0 < 0||`` block to the coding Workspace, and drop it into the ``||loops:while||`` block replacing `true`.

![A comparison block insered into the 'while' block](/static/cp/projects/cartoon-network/jake-hotdog/code6.png)

* From the ``||variables:VARIABLES||`` Toolbox drawer, drag out a delay variable block and drop into the first slot of the ``||logic:0 < 0||`` block.
* Using the drop down menu of the ``||logic:0 < 0||`` block, change the operator to greater than (``>``).

![Use a greater than comparison](/static/cp/projects/cartoon-network/jake-hotdog/code7.png)

### Step 3: Add animation and music to our game loop

* From the ``||music:MUSIC||`` Toolbox drawer, drag out a ``||music:play tone||`` block onto the Workspace and drop into the ``||loops:while||`` loop.

![The 'play tone' block](/static/cp/projects/cartoon-network/jake-hotdog/code8.png)

* In the ``||music:play tone||`` block, use the drop-down menu to select ``1\4 beat``.

![Beat time selectiions](/static/cp/projects/cartoon-network/jake-hotdog/code9.png)

* From the ``||light:LIGHT||`` Toolbox drawer, drag out a ``|light:show animation||`` block to the coding Workspace, and drop it after the ``||music:play tone||`` block.

!['show animation' block](/static/cp/projects/cartoon-network/jake-hotdog/code10.png)

* From the ``||variables:VARIABLES||`` Toolbox drawer, drag out a delay variable block and drop into the ``||light:show animation||`` block replacing the `500`.

```block
let delay = 0
input.buttonA.onEvent(ButtonEvent.Click, function () {
    delay = Math.randomRange(300, 2000)
    while (delay > 0) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        light.showAnimation(light.rainbowAnimation, delay)
    }
})
```

### Step 4: Decrease the delay time on each loop

* From the ``||variables:VARIABLES||`` Toolbox drawer, drag a ``||variables:change||`` variable block onto the Workspace and drop after the ``||light:show animation||`` block.
* In the ``||variables:change||`` variable block, type `-50` as the value replacing the default value of `1`. This will decrease our delay time by `50` milliseconds each time.

![Add the 'change' variable block](/static/cp/projects/cartoon-network/jake-hotdog/code12.png)

### Step 5: End the game on a sound and animation

When our game loop ends, let’s add an ending sound and animation.

* From the ``||music:MUSIC||`` Toolbox drawer, drag out a ``||music:play sound||`` block onto the Workspace and drop after the ``||loops:while||`` loop.
* In the ``||music:play sound||`` block, use the drop-down menu to select the ``wawawawaa`` sound effect.

![Sound effect choices](/static/cp/projects/cartoon-network/jake-hotdog/code13.png)

* From the ``||light:LIGHT||`` Toolbox drawer, drag out a ``||light:show animation||`` block onto the Workspace and drop after the ``||music:play sound||`` block.
* In the ``||light:show animation||`` block, use the first drop-down menu to select the ``theatre chase`` animation, and use the second drop-down menu to select 2 seconds (`2000` milliseconds).

!['set volume` block with slider](/static/cp/projects/cartoon-network/jake-hotdog/code14.png)

### Step 6: Turn up the Volume!

* Final step! From the ``||loops:LOOPS||`` Toolbox drawer, drag out an ``||loops:on start||`` block onto the coding Workspace.
* From the ``||music:MUSIC||`` Toolbox drawer, drag out a ``||music:set volume||`` block to the coding Workspace, and drop it into the ``||loops:on start||`` block.
* In the ``||music:set volume||``  block, click on the number and change the value to `200`.

!['set volume` block with slider](/static/cp/projects/cartoon-network/jake-hotdog/code15.png)

Your final program may look something like this:

```blocks
let delay = 0
input.buttonA.onEvent(ButtonEvent.Click, function () {
    delay = Math.randomRange(300, 2000)
    while (delay > 0) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        light.showAnimation(light.rainbowAnimation, delay)
        delay += -50
    }
    music.wawawawaa.play()
    light.showAnimation(light.theaterChaseAnimation, 2000)
})
music.setVolume(200)
```

### Step 7: Download

Test your program in the Simulator by clicking button **A**.

![Simulator](/static/cp/projects/cartoon-network/jake-hotdog/simulator.gif)

Once you’re happy with your program, click the **Download** button and follow the instructions to download the code to your @boardname@.

![Download dialog](/static/cp/projects/cartoon-network/jake-hotdog/download.png)

Disconnect the @boardname@ from the USB cable, turn on the batteries, and press button **A** to start playing with Jake the Hot Dog!

Great work!