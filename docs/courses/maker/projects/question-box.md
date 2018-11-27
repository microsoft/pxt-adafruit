# Question Box Project

## Description

This fun project takes inspiration from Jack-in-the-Box type toys and games. The lid of this box pops up when the correct copper tape touch input is pressed. Quiz your friends on a topic, then associate lights and sounds with different answers. Making the servo lever raise the lid presents a great chance to solve a mechanical engineering challenge. Bling up the interior with reflective material to add to the lights’ effect.

https://www.youtube.com/watch?v=IcfwETgB5cM

## Time Required

| Hours |
|-|
| ![1 to 2 hours on a 4 hour time scale](/static/courses/maker/projects/common/1-to-2-hours.png) |
<br/>
Approximately 2 hours.

## Academic Tie-in Ideas

* **Any Subject**: create quiz questions for any subject of study! Students can create question boxes for their peers in another class. Likewise, students could quiz parents at an open house or other event.

## Materials

See the [Maker Tools and Techniques](/courses/maker/general/maker-tools-techniques) chapter for more details on materials.

* Cardboard box – square cube at least 2.5 inches on a side works best
* Flat cardboard for the base
* Popsicle stick
* Glue gun and glue sticks
* Cardboard cutter, craft pen knife or scissors
* Paper clip or wire
* Masking tape
* Copper tape
* 180-degree servo motor
* Male to alligator clip connectors
* Drill
* Wire cutter
* Pencil and ruler
* Decorative materials – colored pens/markers, glitter, colored paper, stickers, feathers, googly eyes, etc. 
* Light diffuser materials – aluminum foil, crinkled clear plastic, or tissue paper for the inside of the box

## Making

### Plan your box

* Use a pre-made box if you can, for example https://www.amazon.com/dp/B01N8YTJ70.
* Otherwise, you can cut a box out from a flat piece of cardboard.
* The height needs to be at least 2.5 inches to accommodate the alligator clips.
* You can also use a rectangular shoebox with an attached lid.

### Position the box

* Position the box where you will want it on a flat piece of cardboard.
* Allow room in front of the box for the copper tape strips and any writing or images you will want.
* Allow room in the back of the box for an object that the servo motor will sit on.
* Consider whether you will need a spot for the battery pack as well.
* Trace the outline of the box in pencil on the cardboard base.
* Apply hot glue on the inside of the pencil tracing so you can position and glue down the box.

![Position the box on the base](/static/courses/maker/projects/question-box/qb-making1.jpg)

### Cut holes in the box

* Use an Xacto pen knife, or sharp scissors.
* Cut 3 holes in the back of the box for the Male to Alligator clip wires.
* Cut 4 holes in the front of the box for the Copper Tape.
* Cut 1 hole in the side for the micro USB cable.

![Back holes for the servo motor wires, and side hole for the micro USB cable](/static/courses/maker/projects/question-box/qb-making2.jpg)

![Front holes for copper tape](/static/courses/maker/projects/question-box/qb-making3.jpg)

### Insert Circuit Playground Express board into the box

* Don’t stick this down onto the box yet, as you will be still working with it.
* Thread the micro USB cable through the hole in the side of the box and attach to the Circuit Playground Express.
* You can also attach a battery pack to the Circuit Playground Express and insert into the box if you wish, or you can just run off the computer power from the USB cable.

### Attach Copper Tape

* Leaving the copper tape’s backing on, insert a strip in one of the openings.
* Remove only the last quarter inch or so of backing and stick it to one of the CPX pins that you plan to program. 
* Remember, the capacitive pins are **A1** – **A7** on the Circuit Playground Express.
* Take care that the copper tape doesn’t touch any other pin or any other piece of copper tape.
* Trim the end, then repeat for all openings.
* Add the question and answer choices to the front part of the base.
* Unpeel a short section of copper tape backing and stick the tape down near the answers.

![Thread copper tape through holes in the front of the box](/static/courses/maker/projects/question-box/qb-making4.jpg)

![Copper tape attached to Circuit Playground pins](/static/courses/maker/projects/question-box/qb-making5.jpg)

![Display question and answers on the front](/static/courses/maker/projects/question-box/qb-making6.jpg)

### Attach Servo motor wires

* Connect the alligator clips to the **GND**, **VOUT**, and **A1** Pin on the Circuit Playground Express.
* Thread the wires out through the holes in the back of the box.
* Connect the male ends of the wires into the servo motor connector wires.
* You will want to make sure you are connecting the correct wires:
>* Brown = Ground (**GND**)
>* Red = Power (**VOUT**) 
>* Orange = Signal/Data (Pin **A1**)

![Connect the Servo Motor wires to the correct connectors on the Circuit Playground Express](/static/courses/maker/projects/question-box/servo-connection.jpg)

### Build the lever to lift the box lid

* Drill a hole in the end of a popsicle stick. Take care to apply almost no pressure as you drill so that the wood doesn’t split.
* Hot glue the arm section of the servo horn to the other end of the popsicle stick.

![Glue servo horn to one end of the popsicle stick](/static/courses/maker/projects/question-box/qb-making7.jpg)

### Build the stand for the Servo Motor

* Either build another box or find other materials to place the servo on behind the box.
* The servo needs to be about ¾ of an inch higher than the box lid.
* Do not glue the servo stand down yet. 
* Apply masking tape to the bottom of the servo and hot glue the servo to the box stand, making sure the horn will be able to travel back and forth freely.
* Insert the servo horn on the stick and rotate it so that the maximum angle is pointing in the direction towards the box lid and the popsicle stick is pushing slightly into the box lid. It should hit about the middle of the lid.
* Once the servo stand is positioned correctly, trace the bottom with a pencil and use the tracing as a guide to hot glue the servo stand down.

![Build a servo stand behind the box and position servo arm and popsicle stick](/static/courses/maker/projects/question-box/qb-making8.jpg)

### Attach the popsicle stick to the box lid

* Cut a section of wire or use a paperclip and thread it through the hole at the end of the popsicle stick.
* Bend the wire so that the ends are parallel to the edge of the box lid.
* Use some tape to affix the wire to the edge of the box lid. The taped ends should be as near the box lip as possible. 
* After connecting, gently rotate the servo arm back to test the hinging action of the wire.

![Using a piece of wire, attach the end of the popsicle stick to the box lid](/static/courses/maker/projects/question-box/qb-making9.jpg)

### Decorate your Box

* Use colored pens or markers or other decorative items to decorate your box.
* Print out your quiz question and possible answers on pieces of paper, and tape down to the base in front of the box – assigning one answer to each strip of copper tape.
* Use aluminum foil, crinkled clear plastic, tissue paper or other stuffing material to the inside of the box to diffuse and enhance the CPX light display.

![Use light diffusing material on the inside of the box](/static/courses/maker/projects/question-box/qb-making10.jpg)

## Coding

See [Coding the Circuit Playground Express](/courses/maker/general/coding) for more information.

In our example, the copper tape is connected to the Circuit Playground Express pins **A4**, **A5**, **A6**, and **A7**. So, we’ll need to code responses each time the copper tape connected to one of these capacitive pins is touched.

1. From the Input Toolbox drawer, drag out four ``||input:on button click||`` blocks onto the Workspace.
2. Using the drop-down menu in each of the ``||input:on button click||`` blocks, change the value from ``button A`` to:
* Pin **A4**
* Pin **A5**
* Pin **A6**
* Pin **A7**

![Pin choices for on click blocks](/static/courses/maker/projects/question-box/qb-code1.png)

In our example, the response for Pin **A6** is the only correct answer, so let’s code incorrect responses for Pins **A4**, **A5**, and **A7**.

3. From the ``||music:MUSIC||`` Toolbox drawer, drag out three ``||music:play sound||`` blocks and drop them into the ``||input:on pin click||`` blocks for Pins **A4**, **A5**, and **A7**.
4. In the ``||music:play sound||`` blocks, use the drop-down menu to select the ``wawawawaa`` sound effect.
5. From the ``||light:LIGHT||`` Toolbox drawer, drag out three ``||light:set all pixels||`` blocks and drop them into the  ``||input:on pin click||`` blocks for Pins **A4**, **A5**, and **A7**.

Code for wrong answers:

```blocks
input.pinA4.onEvent(ButtonEvent.Click, function () {
    music.playSound(music.sounds(Sounds.Wawawawaa))
    light.setAll(0xff0000)
})
input.pinA5.onEvent(ButtonEvent.Click, function () {
    music.playSound(music.sounds(Sounds.Wawawawaa))
    light.setAll(0xff0000)
})
// This is the correct answer
input.pinA6.onEvent(ButtonEvent.Click, function () {

})
input.pinA7.onEvent(ButtonEvent.Click, function () {
    music.playSound(music.sounds(Sounds.Wawawawaa))
    light.setAll(0xff0000)
})
```
If someone touches the correct answer for Pin **A6**, we want to reward them with some fun sounds and animations, as well as open the box!

6. From the ``||music:MUSIC||`` Toolbox drawer, drag out two ``||music:play sound||`` blocks and drop them into the ``||input:on pin click||`` block for Pin **A6**.
7. In the ``||music:play sound||`` blocks, use the drop-down menu to select ``magic wand`` and ``power up`` sound effects.
8. From the ``||light:LIGHT||`` Toolbox drawer, drag out two ``||light:show animation||`` blocks and drop them into the ``||input:on pin click||`` block for Pin **A6**, one on each side of the two ``||music:play sound||`` blocks.
9. In the Show Animation blocks, use the drop-down menus to select ``sparkle`` and ``rainbow`` animations, and set the duration to 2 seconds (`2000` ms).

To activate the servo motor, we’ll use some special servo motor blocks in our code. 

10. In the Toolbox, click on the **Advanced** tab to display more Toolbox categories.
11. Click on **Extensions** at the bottom of the Toolbox.

![Advanced toolbox categories](/static/courses/maker/projects/question-box/advanced-toolbox.png)

12. In the **Extensions** page, click on the **Servo** library.

![Extenstions dialog](/static/courses/maker/projects/question-box/extensions.png)

13. This will add a new ``||servos:SERVOS||`` category to the Toolbox.

![Servo blocks toolbox drawer](/static/courses/maker/projects/question-box/servo-blocks.png)

14. From the ``||servos:SERVOS||`` Toolbox drawer, drag out a ``||servos:set servo||`` block onto the Workspace and drop it into the ``||input:on pin click||`` block for Pin **A6**. This will move the servo motor that is connected to the Circuit Playground on Pin **A1** by `90` degrees, thereby opening the lid of the box.

```blocks
input.pinA4.onEvent(ButtonEvent.Click, function () {
    music.playSound(music.sounds(Sounds.Wawawawaa))
    light.setAll(0xff0000)
})
input.pinA5.onEvent(ButtonEvent.Click, function () {
    music.playSound(music.sounds(Sounds.Wawawawaa))
    light.setAll(0xff0000)
})
// This is the correct answer
input.pinA6.onEvent(ButtonEvent.Click, function () {
    music.playSound(music.sounds(Sounds.MagicWand))
    light.showAnimation(light.sparkleAnimation,2000)
    music.playSound(music.sounds(Sounds.PowerUp))
    light.showAnimation(light.rainbowAnimation,2000)
    servos.A1.setAngle(90)
})
input.pinA7.onEvent(ButtonEvent.Click, function () {
    music.playSound(music.sounds(Sounds.Wawawawaa))
    light.setAll(0xff0000)
})
```

Now let’s add some code to reset our box and close the lid when we clap.

15. From the ``|input:INPUT||`` Toolbox drawer, drag out an ``||input:on loud sound||`` block onto the Workspace.
16. From the ``|light:LIGHT||`` Toolbox drawer, scroll to the bottom and drag out a ``|light:clear||`` block onto the Workspace, and drop it into the ``||input:on loud sound||`` block.
17. From the ``||servos:SERVOS||`` Toolbox drawer, drag out a ``||servos:set servo||`` block onto the Workspace and drop it into the ``||input:on loud sound||`` block 
18. In the ``||servos:set servo||`` block, change the angle to `0` degrees.

You will most likely need to experiment with different values for the servo motor angles to get the box lid to open and close properly.

Final Program:

```blocks
input.pinA4.onEvent(ButtonEvent.Click, function () {
    music.playSound(music.sounds(Sounds.Wawawawaa))
    light.setAll(0xff0000)
})
input.pinA5.onEvent(ButtonEvent.Click, function () {
    music.playSound(music.sounds(Sounds.Wawawawaa))
    light.setAll(0xff0000)
})
// This is the correct answer
input.pinA6.onEvent(ButtonEvent.Click, function () {
    music.playSound(music.sounds(Sounds.MagicWand))
    light.showAnimation(light.sparkleAnimation,2000)
    music.playSound(music.sounds(Sounds.PowerUp))
    light.showAnimation(light.rainbowAnimation,2000)
    servos.A1.setAngle(90)
})
input.pinA7.onEvent(ButtonEvent.Click, function () {
    music.playSound(music.sounds(Sounds.Wawawawaa))
    light.setAll(0xff0000)
})
input.onLoudSound(function () {
    light.clear()
    servos.A1.setAngle(0)
})
```

## Variations and Challenges

There are several different variations to this Question Box Project:

* Instead of having one right answer, have the box open and have different light and sound combinations depending on the input pressed.
* Collaborate on a series of question boxes and see who can get all the correct answers.
* Add other servos to the surface and have them wave something to help celebrate the right answer or convey other ideas.
* Try engineering a different way to use a servo to open and close the box.
* Use a variable to randomize which copper tape opens the lid, then design a game around it or incorporate it into another game. For example, spaces on a board game might the player to visit The Box of Doom. If you’re unlucky enough to open it, move your piece back five spaces or suffer some other penalty (or reward!). 

```package
servo
```