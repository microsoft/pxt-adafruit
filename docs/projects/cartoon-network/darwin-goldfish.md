# Darwin the Goldfish

**From [The Amazing World of Gumball](https://www.cartoonnetwork.com/video/gumball/index.html)!**

![Gumball and Darwin](/static/cp/projects/cartoon-network/darwin-goldfish/gumball-header.png)

Darwin used to be the family pet until he sprouted legs and became one of the Wattersons. He's innocent, naive and Gumball's best friend. Make your own Darwin that will light up and make sounds when you shake him! 

![Completed Darwin make](/static/cp/projects/cartoon-network/darwin-goldfish/darwin-project.gif)

**Level**: Easy<br/>
**Duration**: 30 minutes

## Materials

![Materials.jpg](/static/cp/projects/cartoon-network/darwin-goldfish/materials.jpg)

* [Adafruit Circuit Playground Express Base Kit](https://www.adafruit.com/product/3517)
* A Wooden craft stick / paint stirrer stick
* Paper
* Crayons, colored markers or paint
* Tape (masking, duct tape, or packing tape)
* Scissors

## Make

### Step 1: Print or draw Darwin

You can either print out the image below or draw your own on a piece of paper (click on the Darwin below to view the [full-size image](/static/cp/projects/cartoon-network/darwin-goldfish/darwin.png) and then print the page).

[![darwin thumbnail image](/static/cp/projects/cartoon-network/darwin-goldfish/darwin-thumb.png)](/static/cp/projects/cartoon-network/darwin-goldfish/darwin.png)

### Step 2: Cut out Darwin’s head and shoes

Using scissors, cut out Darwin’s head and then cut out his shoes.

![Make1.jpg](/static/cp/projects/cartoon-network/darwin-goldfish/make1.jpg)


![Make2.jpg](/static/cp/projects/cartoon-network/darwin-goldfish/make2.jpg)


### Step 3: Assemble Darwin

Tape Darwin’s head to the top of a wooden craft stick. Tape his shoes to the opposite end of the wooden craft stick. 

![Make1.jpg](/static/cp/projects/cartoon-network/darwin-goldfish/make3.jpg)

### Step 4: Color Darwin

Using crayons, colored markers or paint, color in Darwin’s body using orange, black, white and green.

![Make4.jpg](/static/cp/projects/cartoon-network/darwin-goldfish/make4.jpg)

### Step 5: Attach the Circuit Playground Express

Use a small piece of tape and roll it inside out to form a loop so that the sticky side is on the outside.

![Make5.jpg](/static/cp/projects/cartoon-network/darwin-goldfish/make5.jpg)

Place the tape over Darwin’s mouth, and use it to stick the Adafruit Circuit Playground Express onto the wooden craft stick.

![Make6.jpg](/static/cp/projects/cartoon-network/darwin-goldfish/make6.jpg)

Make sure the Circuit Playground Express is placed so that the battery connector is at the bottom, to make it easier to connect the battery pack. 

![Make7.jpg](/static/cp/projects/cartoon-network/darwin-goldfish/make7.jpg)

### Step 6: Attach the Battery pack

Insert the batteries into the battery pack. 

![Make8.jpg](/static/cp/projects/cartoon-network/darwin-goldfish/make8.jpg)

Using the wire, connect the battery pack to the Adafruit Circuit Playground Express. 

![Make9.jpg](/static/cp/projects/cartoon-network/darwin-goldfish/make9.jpg)

Use a piece of tape to attach the battery pack to the back of the wooden craft stick. Note – if your battery pack includes a clip on the back, you may consider removing that. 

![Make10.jpg](/static/cp/projects/cartoon-network/darwin-goldfish/make10.jpg)

Tape the battery wire to the back of the stick to hide it. 

![Make11.jpg](/static/cp/projects/cartoon-network/darwin-goldfish/make11.jpg)

### Complete!

Congratulations! You have made your own Darwin the Goldfish! 
Move on to the next step to code Darwin.

## Code

Code Darwin to play a sound and show an animation when you shake him.

### Concepts

* Motion Sensor, or Accelerometer (shake) 
* Animation 
* Pixels 
* Sound

### Blocks

```cards
light.setAll(0xff8000)
light.showAnimation(light.theaterChaseAnimation, 2000)
music.setVolume(200)
music.playSound(music.sounds(Sounds.Wawawawaa))
input.onGesture(Gesture.Shake, function () {})
```

### Step 1: Turn on all lights orange

* Open [MakeCode](@homeurl@) in your web browser 
* Click on **New Project**

![NewProject.png](/static/cp/projects/cartoon-network/darwin-goldfish/new-project.png)


* Name your Project: Call it ``Darwin`` (note – you don’t need to click the Save button, just type the name)

![ProjectName.png](/static/cp/projects/cartoon-network/darwin-goldfish/project-name.png)

* From the ``||loops:LOOPS||`` Toolbox drawer, drag out an ``||loops:on start||`` block to the coding Workspace (note – you can ignore or delete the existing ``||loops:forever||`` block on the workspace. Delete blocks by dragging them back over to the Toolbox menu) 

![Code1.png](/static/cp/projects/cartoon-network/darwin-goldfish/code1.png)

* From the ``||light:LIGHT||`` Toolbox drawer, drag out a ``||light:set all pixels||`` block to the Workspace, and drop it into the ``||loops:on start||`` block 

![Code2.png](/static/cp/projects/cartoon-network/darwin-goldfish/code2.png)

* In the ``||light:set all pixels||`` block, click on the color and select an Orange color 

![Code3.png](/static/cp/projects/cartoon-network/darwin-goldfish/code3.png)

### Step 2: Add an On Shake event

* From the ``||input:INPUT||`` Toolbox drawer, drag out an ``||input:on shake||`` block onto the Workspace 

![Code4.png](/static/cp/projects/cartoon-network/darwin-goldfish/code4.png)

### Step 3: Play a Sound

* From the ``||music:MUSIC||`` Toolbox drawer, drag out a ``||music:play sound||`` block to the coding Workspace, and drop it into the ``||input:on shake||`` block 
* In the ``||music:play sound||`` block, click on the drop-down menu to select a sound of your choice 

![Code5.png](/static/cp/projects/cartoon-network/darwin-goldfish/code5.png)

### Step 4: Turn up the Volume!

* From the ``||music:MUSIC||`` Toolbox drawer, drag out a ``||music:set volume||`` block to the coding Workspace, and drop it into the ``||loops:on start||`` block 
* In the ``||music:set volume||`` block, click on the number and change the value to `200`

![Code6.png](/static/cp/projects/cartoon-network/darwin-goldfish/code6.png)

### Step 5: Show an animation

* From the ``||light:LIGHT||`` Toolbox drawer, drag out a ``||light:show animation||`` block to the coding Workspace, and drop it into the ``||input:on shake||`` block, right after the ``||music:play sound||`` block
* In the ``||light:show animation||`` block, click on the animation drop-down menu to select your preferred animation

![Code7.png](/static/cp/projects/cartoon-network/darwin-goldfish/code7.png)

* In the ``||light:show animation||`` block, click on the number drop-down menu and select 2 seconds (`2000` milliseconds)

![Code8.png](/static/cp/projects/cartoon-network/darwin-goldfish/code8.png)

Your final program may look something like this:

```blocks
input.onGesture(Gesture.Shake, function () {
    music.playSound(music.sounds(Sounds.Wawawawaa))
    light.showAnimation(light.theaterChaseAnimation, 2000)
})
light.setAll(0xff8000)
music.setVolume(200)
```

### Step 6: Download

Test your program in the Simulator by clicking the **Shake** button. 

![Simulator.gif](/static/cp/projects/cartoon-network/darwin-goldfish/simulator.gif)

Once you’re happy with your program, click the **Download** button and follow the instructions to download the code to your Adafruit Circuit Playground Express. 

![Download.png](/static/cp/projects/cartoon-network/darwin-goldfish/download.png)

Disconnect the Circuit Playground Express from the USB cable, turn on the batteries, and try shaking Darwin.

Great work!
