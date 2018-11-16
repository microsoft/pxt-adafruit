# Circuit Playground Express Crown

## Description

Making an interactive crown is a fun way to celebrate a birthday, Halloween, a cultural event, the hundredth day of school, or any other noteworthy occasion. The Circuit Playground Express makes a great centerpiece, and head movements can trigger sound and light reactions. In the [Variations and Challenges](/courses/maker/projects/crown#variations-and-challenges) section, you’ll also see ideas for turning the crown into a communication tool.

https://www.youtube.com/watch?v=KvW-YwoTUVk

## Time Required
| Hours |
|-|
| ![1.5 hour time scale](/static/courses/maker/projects/common/1-5-hours.png) |

## Academic tie-in ideas

* History: celebrate your individual family history and background by creating a culture crown.
* Literature: represent a theme from a novel, like identity in society, or the hero’s journey in a symbolic crown.
* Music: collaborate with several friends to perform a piece of music that is triggered by your synchronized head movements.

## Materials

_See the [Maker Tools and Techniques](/courses/maker/general/maker-tools-techniques) chapter for more details on materials._

* Cardboard or Poster Board 
* Cardboard cutters or scissors 
* Duct tape or packing tape 
* Glue gun and hot glue to affix decorations 
* Decorative items – colored paper, markers/pens, feathers, pipe cleaners, plastic utensils, old CD’s, pieces of fabric, jewels, glitter, etc. 

## Making

* Use piece of string, a piece of paper, or anything similar to find the circumference of your head at hat level. 
* Transfer that length to your piece of cardboard or poster board, and use a straightedge to draw the main band of the crown 1-3 inches wide. 
* Be sure to leave a couple of extra inches in circumference so that you can eventually tape the overlap to secure the crown.
* Either free-hand or using objects to trace, add to the profile of the crown. You can look online to find a [silhouette](https://www.bing.com/images/search?q=crown+silhouette) you like. 
* Make sure to leave a space for mounting the Circuit Playground Express board.

![Crown silloute trace on cardboard](/static/courses/maker/projects/crown/crown-making1.jpg)

![Crown silloute trace on cardboard](/static/courses/maker/projects/crown/crown-making2.png)

* Keep in mind that you’ll want to tape the battery pack to the inside of your crown, behind the Circuit Playground Express board, so allow an area of cardboard that is large and high enough for that.
* Cut out the crown.

![Crown cutout of cardboard](/static/courses/maker/projects/crown/crown-making3.jpg)

* If you are using thick cardboard, try bending it every half inch or so, in order to help it conform to your head.
* Attach the Circuit Playground Express board to the front of your crown by looping a piece of tape to the back of the board.

![Loop of tape stuck on back of board](/static/courses/maker/projects/crown/crown-making4.jpg)

* Attach the battery pack to the Circuit Playground Express, and tape the battery pack on the inside of the crown.
* Depending on where you mount the battery pack, you may need to cut a small hole so you can feed the battery pack’s wire through to the Circuit Playground Express.

![Battery pack taped to the inside of the posterboard crown](/static/courses/maker/projects/crown/crown-making5.jpg)

![Battery pack taped to the inside of the cardboard crown](/static/courses/maker/projects/crown/crown-making6.jpg)

* Keep in mind that you’ll want access to the micro USB port on your Circuit Playground Express board in order to download and update your code, so don’t cover that part up.
* Plan the placement of your decorations.
* Hot glue your decorations on, and add drawings, glitter, pipe cleaners, or whatever else your crown needs.
* Keep in mind that when you form the crown in a circle, the glue may not hold long horizontal items, so you may want to use rubber bands or zip ties that anchor in a pair of holes in the crown.
* Form the crown into a circle and use tape to secure the two ends together. Double-check the fit before using a lot of tape.

![Tape the ends of the crown together](/static/courses/maker/projects/crown/crown-making7.jpg)

![Finished crown project](/static/courses/maker/projects/crown/crown-making8.jpg)

## Coding

See [Coding the Circuit Playground Express](/courses/maker/general/coding) for more information.

Inputs like tilt up, down, left, and right are a perfect way to trigger different sound and light outputs for our crown. 
1. Open the ``||loops:LOOPS||`` Toolbox drawer.
2. Drag an ``||loops:on start||`` block to the Workspace.
3. Open the ``||light:LIGHT||`` Toolbox drawer .
4. Drag a ``||light:show ring||`` block under the ``||loops:on start||`` block.
5. Create a custom light design by picking different colors to show using the color wheel in the center of the ``||light:show ring||`` block, and then clicking on a round light in the outside edge.

```blocks
light.showRing(
`orange red white pink purple blue green yellow orange red`
)
```

6. From the ``||input:INPUT||`` Toolbox drawer, drag two ``||input:on shake||`` blocks to the Workspace .
7. In the ``||input:on shake||`` blocks, use the drop-down menu to select ``Tilt Left`` and ``Tilt Right``.

![Gesture selections](/static/courses/maker/projects/crown/crown-code2.png)

8. Open the ``||music:MUSIC||`` Toolbox drawer.
9. Drag 2 ``||music:play sound||`` blocks to the Workspace.
10. Drop one in each of the ``||input:on tilt||`` blocks.
11. In the ``||music:play sound||`` blocks, use the drop-down menu to select different sounds to play.

![Play sound selectons](/static/courses/maker/projects/crown/crown-code3.png)

12. Test in the Simulator by moving your mouse left and right over the board to simulate tilting left and right.

![Board tilt left and right](/static/courses/maker/projects/crown/crown-code4.png)

13. Optional – From the ``||music:MUSIC||`` Toolbox drawer, use the ``||music:set volume||`` block to make it louder. 
Now let’s add some light animations! 
14. Open the ``||light:LIGHT||`` Toolbox drawer, and drag two ``||light:show animation||`` blocks to the Workspace.
15. Drop one in each of the ``||input:on tilt||`` blocks.
16. Using the first drop-down menu in the ``||light:show animation||`` blocks, select a different animation to show.
17. Using the second drop-down menu in the ``||light:show animation||`` block, change the duration to 2 seconds (2000 milliseconds).

![Animation time selections](/static/courses/maker/projects/crown/crown-code5.png)

To reset our crown back to the original lights after we tilt it, let’s add some code for when we press button **A** on our Circuit Playground Express.

18. From the ``||input:INPUT||`` Toolbox drawer, drag a ``||input:button click||`` block onto the Workspace.
19. Right-click on the ``||light:show ring||`` block that is currently in our ``||loops:on start||`` block, and select **Duplicate**.

![Duplicate block selection in menu](/static/courses/maker/projects/crown/crown-code6.png)

20. Drag and drop the copy of our ``||light:show ring||`` block into the ``||input:button click||`` block 

Your final program should look similar to this:

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.showRing(
    `orange red white pink purple blue green yellow orange red`
    )
})
input.onGesture(Gesture.TiltLeft, function () {
    music.playSound(music.sounds(Sounds.PowerUp))
    light.showAnimation(light.rainbowAnimation, 500)
})
input.onGesture(Gesture.TiltRight, function () {
    music.playSound(music.sounds(Sounds.PowerDown))
    light.showAnimation(light.theaterChaseAnimation, 500)
})
light.showRing(
`orange red white pink purple blue green yellow orange red`
)
```

### Variations and Challenges

#### Create infrared communication between Crowns

Different head tilts can send a friend’s crown different IR messages to trigger lights and sounds. Here’s an example of this:

```blocks
network.onInfraredReceivedNumber(function (num) {
    if (num == 1) {
        music.playSound(music.sounds(Sounds.Siren))
        light.showAnimation(light.sparkleAnimation, 2000)
    } else {
        music.playSound(music.sounds(Sounds.MagicWand))
        light.showAnimation(light.rainbowAnimation, 2000)
    }
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.showRing(
    `orange red white pink purple blue green yellow orange red`
    )
})
input.onGesture(Gesture.TiltRight, function () {
    network.infraredSendNumber(1)
    music.playSound(music.sounds(Sounds.PowerDown))
    light.showAnimation(light.theaterChaseAnimation, 500)
})
input.onGesture(Gesture.TiltLeft, function () {
    network.infraredSendNumber(2)
    music.playSound(music.sounds(Sounds.PowerUp))
    light.showAnimation(light.colorWipeAnimation, 500)
})
music.setVolume(256)
light.showRing(
`orange red white pink purple blue green yellow orange red`
)
```

#### Build empathy and teamwork

Take this communication challenge even further by having partners create their own navigation signals (maybe ``power up`` means go forward, ``Middle C`` means turn right, etc.). The guide partners are told a secret destination, and they must steer the other partner to it while walking behind and only using head tilt-triggered sounds. Great empathy-building activity. 

#### Incorporate a servo motor

Cut an opening for a servo motor on your crown, or else glue it to the front. What will you make wag back and forth up there? For more information on using Servo motors, see the [Coding](/courses/maker/general/coding/servos) and [Maker Tools and Techniques](/courses/maker/general/maker-tools-techniques) chapters.
