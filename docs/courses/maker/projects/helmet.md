# Bike Helmet Prototype

# Description

In this project, students will prototype a bike helmet that has motion-activated turn signals. They get to make a model of a device that serves a practical function. Designing the helmet and then deciding on the best coding strategy and light patterns provide great problem-solving challenges. You can pair students up to interview each other on the requirements for an ideal bicycle helmet and work those features into their designs.

https://www.youtube.com/watch?v=sVPu5b6MszM 
<br/>
**Note**: This project is meant as a prototyping exercise only. The cardboard prototype should not be worn while bicycling, and the light system should not be attached to a real helmet for cycling use.

## Time required

| Hours |
|-|
| ![1.5 hours on a 4 hour time scale](/static/courses/maker/projects/common/1-5-hours.png) |
<br/>
About 1.5 hours 

## Academic Tie-ins

* **Community Service**: How do devices like these help people stay safe? What other applications might this device have in our community? What jobs might make use of this? 
* **Literature**: Design a hat or a costume that lights up for a character from a novel you are studying.
* **History**: Design a hat from a period of time (top-hat or cap) and discuss how a device like this might have been useful in the past (miners, soldiers, etc.).

## Materials

See the [Maker Tools and Techniques](/courses/maker/general/maker-tools-techniques) chapter for more details on materials.

* Cardboard
* Cardboard cutter or heavy-duty scissors
* Tape
* A NeoPixel strip. This .5 meter-long one with 30 NeoPixels from Adafruit works well: https://www.adafruit.com/product/3811
* Battery pack

## Making

There are different ways to make a bike helmet prototype out of cardboard. One idea is to review images of bike helmets as a class. The instructor may want to specify how closely the prototype should resemble an actual helmet. Making something that looks more like a crown or top hat is more immediately intuitive to middle school students, so the instructor should decide in advance what the parameters are.

To make this helmet prototype, think about the directions of the corrugations of your cardboard. The length of these pieces should be perpendicular to the corrugations in order to let them bend easily (see images).

First, either cut a long strip of cardboard that is 2-2.5 inches in width, or else measure someone’s head with a string, then cut a length of cardboard that is at least two inches longer than that – on average, this is about 22 + 2 inches long for adults. This will serve as the base of the helmet. Again, cut so that the corrugations help you bend the cardboard. Wrap tape several times around the ends of the cardboard to secure it at the proper circumference.

Second, cut three 13-inch lengths of 2-3”-wide cardboard perpendicular to the corrugations.

These pieces of cardboard will form the shell of the helmet. Note the orientation of the corrugations of the cardboard. They are perpendicular to the length, which will allow the cardboard to bend more easily.

![Helmet cardboard pieces](/static/courses/maker/projects/helmet/helmet-making1.jpg)

Third, continue using tape to secure the strips onto the base to form the shell of the helmet.

![Helmet strips taped together](/static/courses/maker/projects/helmet/helmet-making2.jpg)

The cardboard strips should overlap each other to form the shell. Have your students iterate on the design by doing user testing along the way – try fitting the helmet prototype on different students’ heads to refine the design and make adjustments.

![Cardboard strips overlapped making a shell](/static/courses/maker/projects/helmet/helmet-making3.jpg)

Fourth, use clear tape to attach the NeoPixel strip to the base of the helmet prototype. Three pieces of tape are sufficient. Take care to center the strip on the back of the base.

![NeoPixel strip attacthed to the base of the helmet](/static/courses/maker/projects/helmet/helmet-making4.jpg)

Fifth, use a piece of tape to attach a battery pack to the top of the helmet, and a piece of double-sided or looped tape to attach the Circuit Playground Express to the front of the helmet. Be sure to orient the **A1** pin on the Circuit Playground Express toward the alligator clips of the NeoPixel strip, and orient the JST battery connector upward. Pictured is a LiPo battery, but any battery pack works well.

![Board attacthed to the helmet with battery located on top, view 1](/static/courses/maker/projects/helmet/helmet-making5.jpg)

![Board attacthed to the helmet with battery located on top, view 2](/static/courses/maker/projects/helmet/helmet-making6.jpg)

## Coding

See [Coding the Circuit Playground Express](/courses/maker/general/coding) chapter for more information.

1. Open the ``||loops:LOOPS||`` Toolbox drawer and drag out an ``||loops:on start||`` block to the workspace.
2. Now, under the ``||light:NEOPIXEL||`` drawer, find the ``||light:set strip||`` block, and place it inside the ``||loops:on start||`` block. This will create a NeoPixel strip in our program.

![Neopixel strip blocks in the toolbox](/static/courses/maker/projects/helmet/neopixel-drawer.png)

```blocks
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.A1, 0)
```

3. Next, in the space where it says, ``||light:with 0 pixels||``, enter the number of pixels your LED strip has. In the example, the NeoPixel strip has 30 lights.

```blocks
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.A1, 30)
```

With this code, we are telling the Circuit Playground Express that it has a strip of 30 lights connected on pin **A1**.

4. Then, go to the ``||variables:VARIABLES||`` drawer and make two variables: ``right`` and ``left``. The automatically created variable ``strip`` will control the behavior of the entire strip, and ``left`` and ``right`` will help you control the left and right halves of the strip.

![Blocks in the VARIABLES drawer](/static/courses/maker/projects/helmet/variables-drawer.png)

Now, let’s define the lights you’ll use for the left and right turns.

5. From the ``||variables:VARIABLES||`` Toolbox drawer, pull out two ``||variables:set||`` variable blocks into the ``||loops:on start||`` block, and change them to the ``right`` and ``left`` variables.

```blocks
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.A1, 30)
let left = 0
let right = 0
```

6. From the NeoPixel drawer, drag 2 of the ``||light:strip range||`` lozenges inside each of the ``||variables:set right||`` and ``||variables:set left||`` blocks. These blocks will represent a range of lights from our NeoPixel strip.
In our example there are 30 total pixels, so the two sides will each have 15 pixels. The ``||variables:set right||`` block has a range that starts at zero (remember that the strips are zero-indexed, so the first 15 pixels will be from 0-14), and the ``||variables:set right||`` block has a range that starts at `15`.
7. In the right ``||light:range||`` block, type `0` into the first slot and `15` into the second slot.
8. In the left ``||light:range||`` block, type `15` into the first slot and `15` into the second slot.

```blocks
let left: light.NeoPixelStrip = null
let right: light.NeoPixelStrip = null
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.A1, 30)
right = strip.range(0, 15)
left = strip.range(15, 15)
```

Now let’s set all the lights on the Circuit Playground Express to yellow, and turn the NeoPixel strip lights to blue to serve as running lights.

9. From the ``||light:LIGHT||`` Toolbox drawer, drag a ``||light:set all pixels||`` block into the ``||loops:on start||`` block, and from the drop-down menu select the yellow color.
10. From the NeoPixel Toolbox drawer, drag a ``||light:strip set all pixels||`` block to the end of our program, and from the drop-down menu select the light blue color.

```blocks
let left: light.NeoPixelStrip = null
let right: light.NeoPixelStrip = null
let strip: light.NeoPixelStrip = null
strip = light.createStrip(pins.A1, 30)
right = strip.range(0, 15)
left = strip.range(15, 15)
light.setAll(0xffff00)
strip.setAll(0x00ffff)
```

It’s time to code the motion-activated light responses. When we tilt our head to the left, we want the left side of the strip to flash indicator lights, and when we tilt our head to the right, we want the right side of the strip to flash.

11. From the ``||input:INPUT||`` Toolbox drawer, drag out 2 ``||input:on shake||`` blocks onto the Workspace.
12. Using the drop-down menus in the ``||input:on shake||`` block, change one to ``tilt right``, and the other to ``tilt left``.

![On Tilt gesture input selections](/static/courses/maker/projects/helmet/on-tilt-inputs.png)

13. From the ``||loops:LOOPS||`` Toolbox drawer, drag out a ``||loops:repeat||`` loop and drop into the ``||input:on tilt right||`` block. Change the default number of times to repeat from` 4` to `15`.
14. From the NeoPixel Toolbox drawer, drag out a ``||light:strip set all pixels||`` block and drop into the ``||loops:repeat||`` loop. In the ``||light:set all pixels||`` block, use the drop-down menu to select the ``right`` variable.

```block
let right: light.NeoPixelStrip = null
input.onGesture(Gesture.TiltRight, function () {
    for (let i = 0; i < 15; i++) {
        right.setAll(0xff0000)
    }
})
```

15. Right click on the ``||light:set all pixels||`` block, and select **Duplicate** to make a copy of this block.

![Duplicate block context menu selection](/static/courses/maker/projects/helmet/duplicate-block.png)

16. Drag the copied block underneath, and change the color to dark blue.
17. From the ``||loops:LOOPS||`` Toolbox drawer, drag out 2 ``||loops:pause||`` blocks and drop them in between the ``||light:set all pixels||`` blocks – this will give the lights enough time to flash.

```block
let right: light.NeoPixelStrip = null
input.onGesture(Gesture.TiltRight, function () {
    for (let i = 0; i < 15; i++) {
        right.setAll(0xff0000)
        pause(100)
        right.setAll(0x007fff)
        pause(100)
    }
})
```

After we’re done flashing, we want to set all the lights back to light blue.

18. So right-click on one of the ``||light:set all pixels||`` blocks and select **Duplicate** again to make another copy.
19. This time, drag the copied block after the ``||loops:repeat||`` loop, and click on the color picker to select light blue.

```block
let right: light.NeoPixelStrip = null
input.onGesture(Gesture.TiltRight, function () {
    for (let i = 0; i < 15; i++) {
        right.setAll(0xff0000)
        pause(100)
        right.setAll(0x007fff)
        pause(100)
    }
    right.setAll(0x00ffff)
})
```

We’ll do the same thing for the ``tilt left``. Copy the blocks from the ``||input:on tilt right||`` block over to the ``||input:on tilt left||`` block. Use the variable drop-down menu to select the ``left`` variable this time.

```block
let left: light.NeoPixelStrip = null
input.onGesture(Gesture.TiltLeft, function () {
    for (let i = 0; i < 15; i++) {
        left.setAll(0xff0000)
        pause(100)
        left.setAll(0x007fff)
        pause(100)
    }
    left.setAll(0x00ffff)
})
```

Here is what your final code should look like:

```blocks
let left: light.NeoPixelStrip = null
let right: light.NeoPixelStrip = null
let strip: light.NeoPixelStrip = null
input.onGesture(Gesture.TiltRight, function () {
    for (let i = 0; i < 15; i++) {
        right.setAll(0xff0000)
        pause(100)
        right.setAll(0x007fff)
        pause(100)
    }
    right.setAll(0x00ffff)
})
input.onGesture(Gesture.TiltLeft, function () {
    for (let i = 0; i < 15; i++) {
        left.setAll(0xff0000)
        pause(100)
        left.setAll(0x007fff)
        pause(100)
    }
    left.setAll(0x00ffff)
})
strip = light.createStrip(pins.A1, 30)
right = strip.range(0, 15)
left = strip.range(15, 15)
light.setAll(0xffff00)
strip.setAll(0x00ffff)
```

## Variations and Challenges

Here are some ideas for how you can create some additional challenges or variations on this bicycle helmet prototype:

* Add a sound indicator. The helmet wearer can’t see what the lights are doing, so an audio cue that a right or left signal has been initiated might be helpful.
* Dial it in. Using an ``||logic:if then else||`` logic block can let you specify how far of a head tilt is needed to trigger the turn signal. (This gives good practice in more advanced computational thinking as well.) In the sample below, a tilt of greater than 500 mg (milligravities) turns on the left side, and a tilt of less than -500 mg turns on the right. Play with those two values until you find a tilt angle that works for you.
