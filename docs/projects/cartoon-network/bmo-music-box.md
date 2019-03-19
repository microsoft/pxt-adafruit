# BMO Music Box

**The BMO Music Box from [Adventure Time](https://www.cartoonnetwork.com/video/adventure-time/)!**

![Gumball, Darwin, and BMO](/static/cp/projects/cartoon-network/bmo-music-box/at-banner.jpg)

BMO is Finn and Jake's loyal, protective and helpful friend, who also happens to be a living video game console, portable electrical outlet, music player, and more! Create your own BMO Music box that will play different sounds and tempos when you move it around, or when the light changes around it.

![BMO cartoon character](/static/cp/projects/cartoon-network/bmo-music-box/bmo.jpg)

https://youtu.be/M1RwRYzcDYQ 
<br/>

## Prepare

### This project

**Level**: Medium<br/>
**Duration**: 60 minutes

### Materials

Collect the materials in the list before starting your project Make.

![Materials](/static/cp/projects/cartoon-network/bmo-music-box/materials.jpg)

* [Adafruit Circuit Playground Express Base Kit](https://www.adafruit.com/product/3517)
* Small cardboard box, or shoebox 
* Blue construction paper (or blue paint) 
* Piece of white paper 
* Black marker 
* Crayons, colored pencils or markers 
* Blue pipe cleaners 
* Tape or Glue 
* Scissors

## Make

### Step 1: Create BMO’s body

Use blue construction paper and tape/glue, or blue paint to cover the outside of the box completely in blue.

![Blue paper covering the box](/static/cp/projects/cartoon-network/bmo-music-box/make1.jpg)

### Step 2: Draw and attach BMO’s face and details

On the piece of white paper, draw outlines of BMO's face and controls. Color in BMO’s face, and controls using colored markers, pencils or crayons.

![Color the buttons and controls on the paper](/static/cp/projects/cartoon-network/bmo-music-box/make2.jpg)

Cut out and glue or tape the face and controls onto the blue box.

![Cutout the button and control shapes](/static/cp/projects/cartoon-network/bmo-music-box/make3.jpg)

![Glue the button and control shapes on the box](/static/cp/projects/cartoon-network/bmo-music-box/make4.jpg)

Using a black marker, make sure to add BMO’s side label and lines for his other slots.

![Glue the button and control shapes on the box](/static/cp/projects/cartoon-network/bmo-music-box/make5.jpg)

### Step 3: Attach BMO’s arms and legs

Using blue pipe cleaners, cut or bend 4 pieces to a good size for BMO’s arms and legs.

![Glue the button and control shapes on the box](/static/cp/projects/cartoon-network/bmo-music-box/make6.jpg)

Using one end of the scissors, poke holes in places on the box where arms and legs should be. Insert the pipe cleaners in the holes.

![Poke pipe cleaner holes in the box](/static/cp/projects/cartoon-network/bmo-music-box/make7.jpg)

### Step 4: Insert the batteries

Insert the batteries into the battery pack.

![Three batteries in the battery pack](/static/cp/projects/cartoon-network/bmo-music-box/make8.jpg)

### Step 5: Attach the Circuit Playground Express and battery pack

Use a small piece of tape and roll it inside out to form a loop so that the sticky side is on the outside. Place the tape on the back of the Adafruit Circuit Playground Express and stick onto the top of BMO.

![Tape rolled and stuck to back of the board](/static/cp/projects/cartoon-network/bmo-music-box/make9.jpg)

Attach the wire from the battery pack to the @boardname@.

![Battery pack wire connected to the board](/static/cp/projects/cartoon-network/bmo-music-box/make10.jpg)

Tape the battery pack onto the back of BMO. Be careful not to tape over the On/Off switch.

![Battery pack taped to the back of the box](/static/cp/projects/cartoon-network/bmo-music-box/make11.jpg)

### Complete!

Congratulations! You have made your own BMO!

Move on to the next step to code BMO.

## Code

Code BMO to play music – based on the how you’re moving him, and how much light he’s in.

### Concepts

* Accelerometer or motion sensor 
* Light sensor 
* Sounds

### Blocks

```cards
light.graph(0)
input.acceleration(Dimension.X)
input.lightLevel()
music.playTone(262, music.beat(BeatFraction.Half))
```

### Step 1: Make an animation using the Motion Sensor

The motion sensor, also called an “accelerometer”, measures motion (also called acceleration) along 3 dimensions:

* X-axis (left and right)
* Y-axis (forward and backward)
* Z-axis (up and down)

![Accelerometer located on the board](/static/cp/projects/cartoon-network/bmo-music-box/cpx-accelerometer.jpg)

The accelerometer is right in the middle of the @boardname@, under the **RESET** button. It uses values from negative -1023 to positive 1023. When the @boardname@ is laying flat, face up: X = 0, Y = 0, Z = -1023.

![Accelerometer axes directions](/static/cp/projects/cartoon-network/bmo-music-box/accelerometer-axes.png)

We will use the lights on our @boardname@ to show the values of the accelerometer when it's tilted left and right (along the X axis).

* Open [MakeCode](@homeurl@) in your web browser
* Click on **New Project**

![New Project button](/static/cp/projects/cartoon-network/bmo-music-box/new-project.png)

* Name your Project as **MusicBox** (note – you don’t need to click the **Save** button, just type the name)

![Project name window](/static/cp/projects/cartoon-network/bmo-music-box/project-name.png)

* From the ``||light:LIGHT||`` Toolbox drawer, drag out a ``||light:graph||`` block to the coding Workspace and drop it into the ``|loops:forever||`` block.

!['graph' block in the 'forever' loop](/static/cp/projects/cartoon-network/bmo-music-box/code1.png)

* From the ``||input:INPUT||`` Toolbox drawer, drag out an ``||input:acceleration||`` block and drop into the ``||light:graph||`` block replacing the `0`.

!['acceleration' block](/static/cp/projects/cartoon-network/bmo-music-box/code2.png)

Try moving your mouse left and right over the Simulator to see how the lights change as the @boardname@ moves.

![Simulator](/static/cp/projects/cartoon-network/bmo-music-box/simulator.gif)

Notice that a **Console** button also appears under the Simulator – if you click that you’ll see a graph view of the accelerometer values!

![Console view with graph](/static/cp/projects/cartoon-network/bmo-music-box/console.png)

### Step 2: Add music

* From the ``||loops:LOOPS||`` Toolbox drawer, drag out another ``||loops:forever||`` block onto the Workspace.
* **Note!** You may want to take this opportunity to mute your computer or the Simulator. Press the speaker icon under the Simulator to mute.

![Mute button in simulator](/static/cp/projects/cartoon-network/bmo-music-box/sim-mute.png)

* From the ``||music:MUSIC||`` Toolbox drawer, drag out a ``||music:play tone||`` block onto the Workspace and place in this ``||loops:forever||`` block.

!['play tone' block](/static/cp/projects/cartoon-network/bmo-music-box/code3.png)

Notice that this ``||music:play tone||`` block contains 2 fields – one for the note _pitch_, and one for the note _duration_.

### Step 3: Change music pitch based on light level

We want to change the pitch, or the note that’s being played, based on the light level (darker makes a lower note and brighter makes a higher note). The @boardname@ can play notes that are represented as frequency values (in Hertz).

Also, the @boardname@ measures how light or dark it is through a light level sensor (0 = completely dark and 255 = bright light).

![Light level sensor located on the board](/static/cp/projects/cartoon-network/bmo-music-box/light-sensor.png)

We want to map the light level values (0 - 255) to frequency values. We know that 300 MHz is about the frequency for the ``Middle D`` note, so let’s add `300` to our light level values.

* From the ``||math:MATH||`` Toolbox drawer, drag out an addition ``||math:0 + 0||`` operator block onto the Workspace and drop it into the first slot of the ``||music:play tone||`` block replacing ``Middle C``.

```block
forever(function () {
    music.playTone(0 + 0, music.beat(BeatFraction.Half))
})
```

* From the ``||input:INPUT||`` Toolbox drawer, drag the ``||input:light level||`` block onto the Workspace and drop it into the first slot of the ``||math:0 + 0||`` block replacing `0`.
* Type `300` into the second slot.

!['light level' block](/static/cp/projects/cartoon-network/bmo-music-box/code5.png)

### Step 4: Change music tempo based on motion

Now let’s change the tempo based on the motion of BMO. We know that acceleration uses values from -1023 to 1023. The tempo is the number of milliseconds that the tone lasts for, and these values are always positive (1000 milliseconds = 1 second). So, we’ll need to convert our accelerometer values to be all positive.

* From the ``||math:MATH||`` Toolbox drawer, drag out an ``||math:absolute of||`` value block onto the Workspace and drop it into the second slot of the ``||music:play tone||`` block replacing the ``1/2 beat``. 

```block
forever(function () {
    music.playTone(input.lightLevel() + 300, Math.abs(0))
})
```

* From the ``||input:INPUT||`` Toolbox drawer, drag the ``||input:acceleration||`` block into the ``||math:absolute of||`` value block.

Your final program may look something like this:

```blocks
forever(function () {
    light.graph(input.acceleration(Dimension.X))
})
forever(function () {
    music.playTone(input.lightLevel() + 300, Math.abs(input.acceleration(Dimension.X)))
})
```

### Step 5: Download

Once you’re happy with your program, click the **Download** button and follow the instructions to download the code to your @boardname@.

![Download dialog](/static/cp/projects/cartoon-network/jake-hotdog/download.png)

Disconnect the @boardname@ from the USB cable and turn on the batteries. Tilt BMO left and right, cover and expose BMO to the light - listen to the beautiful music!

Great work!
