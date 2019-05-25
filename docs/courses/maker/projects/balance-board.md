# Balance Board Project 

## Description

This balance board project really puts the "physical" into physical computing! In this project, students will use the Circuit Playground Express to measure how much they can balance on a home-made skateboard. The Circuit Playground Express accelerometer will be used to measure the angles, and the lights and sounds will give feedback on how balanced or not you are.

The main objective for this project might be to challenge students to remain within 7 degrees of flat in either direction. But you can imagine adding a variety of other challenges to this project, like how long can students stay beyond 7 degrees? Or, can students remain between a minimum and maximum degrees on the balance board?

https://www.youtube.com/watch?v=J1ajRktxMVs

## Safety Tips

Please be sure to follow common-sense safety procedures when operating the balance board. While this activity is fairly safe, and the 3-foot length of board limits how much one can fall, younger riders should be carefully supervised while using the board.
* As students stand on the balance board, make sure they are standing with their feet separated in a wide stance – wider than their shoulder width.
* Conduct the balance board game on a surface with some traction – like a wood deck or a carpeted area. Polished stone, tile or other slick surface may make the PVC pipe slip out from below the board.

## Time Required

| Minutes |
|-|
| ![45 to 90 minutes on a 120 minute time scale](/static/courses/maker/projects/common/45-90-mins.png) |
<br/>
Approximately 45-90 minutes 

## Academic Tie-in Ideas

* **Music**: if you have several people with good balance, give each person two notes to play, one for each direction of tilt. See if you can play a segment of a song just through tilt inputs.
* **Physical Education**: balance and core strength are integral to most sports; design coded challenges that push the player to utilize those skills. Just staying balanced will be a great lower core workout for many people, and the surfers and skateboarders in the group will undoubtedly have ideas for advanced moves.

## Materials

See the Maker Tools and Techniques Chapter for more details on materials

* PVC pipe: A 12- or 14-inch long piece of PVC pipe with a 4.5-inch diameter. These are inexpensive, and your local hardware store will cut lengths of them for you.
* Wood board: A 3-foot long piece of wood that is 1-inch thick, and 10- or 12-inches wide. Again, your local hardware store can help cut this for you.
* Tape: to secure the Circuit Playground Express and battery pack to the board.

### Optional

* Grip tape: if you’re concerned about slipping, you can apply the grip tape to the PVC pipe to increase traction. For example – https://www.amazon.com/BooTaa-Skateboard-Waterproof-Rollerboard-Wheelchair/dp/B072NBCF4B

![Roll of grip tape](/static/courses/maker/projects/balance-board/grip-tape.jpg)

* Wood end stops: if you have a woodworking class at your school, you can get their help to affix small planks of wood at the ends of your balance board to add more stability to your board.

## Making

![Rob standing on a completed balance board](/static/courses/maker/projects/balance-board/balance-board.jpg)

For the basic balance board, there’s not much you need to do once you have the PVC pipe and the wood board! But you can challenge students to decorate the board with paint, markers, or stickers.

You will need to affix the Circuit Playground Express board and battery pack onto the exact middle of the balance board using duct tape. Loop a piece of tape onto itself to create a double-sided piece of tape to place on the back of the Circuit Playground Express board. Tape down the battery pack in a place where students won’t step on it.

Optionally, you can affix grip tape to the PVC pipe to increase the traction.

![Grip tape applied to PVC pipe](/static/courses/maker/projects/balance-board/grip-pvc-pipe.jpg)

Optionally, get the help of your woodworking shop to glue or screw wood end stops to your balance board.

![Wood end stops for the balance board](/static/courses/maker/projects/balance-board/wood-stops.jpg)

For more inspiration on making your own version, look online for [balance board](https://www.bing.com/images/search?q=balance+board).

## Coding

See [Coding the Circuit Playground Express](/courses/maker/general/coding) chapter for more information.

This project will primarily use the motion sensor, or the accelerometer of the Circuit Playground Express.

![Accelerometer on the circuit playground](/static/courses/maker/projects/balance-board/accelerometer.png)

The Circuit Playground Express’ accelerometer measures motion along 3 dimensions:

* X-axis (left and right)
* Y-axis (forward and backward)
* Z-axis (up and down)

![Acceleration axes](/static/courses/maker/projects/balance-board/accel-axes.jpg)

It measures these values from -1023 to +1023 milli g-force (which is 1/1000th of a g). For more information on g-forces, see this [article](https://en.wikipedia.org/wiki/G-force).

When the Circuit Playground is laying flat:

* X = 0
* Y = 0
* Z = -1023

In addition to measuring motion along an axis, the Circuit Playground Express can also measure rotational angles, called "pitch" and "roll". To understand pitch and roll, think of an airplane. A nose-up, tail-down motion (or the reverse) is pitch, while if one wing goes up and the other down, that is roll.

![Airplane pitch angle](/static/courses/maker/projects/balance-board/airplane-pitch.jpg)

![Airplane roll angle](/static/courses/maker/projects/balance-board/airplane-roll.jpg)

The balance board will only move in one axis, so you can pick either pitch or roll and orient the Circuit Playground Express on the board so that the JST battery connector and USB port are perpendicular or parallel to the board.

1. From the ``||logic:LOGIC||`` Toolbox drawer, drag and drop an ``||logic:if then else||`` block onto the workspace, and drop into the ``||loops:forever||`` loop.
2. On the ``||logic:if then else||`` block, click the plus icon **(+)** to create another ``||logic:else if||`` clause.

```block
forever(function () {
    if (true) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
```

3. From the ``||logic:LOGIC||`` Toolbox drawer, drag and drop two less than ``||logic:0 < 0||`` comparison blocks onto the workspace.
4. Drop one ``||logic:0 < 0||`` comparison block into the ``||logic:if||`` clause (replacing `true`).
5. Drop the other ``||logic:0 < 0||`` comparison block into the ``||logic:if else||`` clause.
6. In the first comparison block in the ``||logic:if||`` statement, click on the drop-down to change this to greater than ``||logic:0 > 0||``.

```block
forever(function () {
    if (0 > 0) {
    	
    } else if (0 < 0) {
    	
    } else {
    	
    }
})
```

7. From the ``||input:INPUT||`` Toolbox drawer, under the **More** category, drag and drop two ``||input:rotation||`` blocks onto the workspace.
8. Drop one of the ``||input:rotation||`` blocks into the first slot of the first comparison block in the ``||logic:if||`` statement.
9. Drop the other ``||input:rotation||`` block into the first slot of the second comparison block in the ``||logic:else if||`` statement.

```block
forever(function () {
    if (input.rotation(Rotation.Pitch) > 0) {
    	
    } else if (input.rotation(Rotation.Pitch) < 0) {
    	
    } else {
    	
    }
})
```

10. In the first comparison block in the ``||logic:if||`` statement, type the value `7` in the second slot.
11. In the second comparison block in the ``||logic:else if||`` statement, type the value `-7` in the second slot.
These two conditions will happen if the rotation is greater than `7` degrees or the rotation is less than `-7` degrees. This gives the board a total wobble distance of `14` degrees ( ``7 - (-7) = 14`` degrees) which is it's "balanced" range.

Now, let’s add some lights and sounds!

12. From the ``||light:LIGHT||`` Toolbox drawer, drag and drop two ``||light:set all pixels||`` blocks onto the Workspace.
13. Drop one ``||light:set all pixels||`` block under the ``||logic:if||`` clause.
14. Drop the other ``||light:set all pixels||`` block under the ``||logic:else if||`` clause.
15. Pick different colors to show in the ``||light:set all pixels||`` blocks.

```block
forever(function () {
    if (input.rotation(Rotation.Pitch) > 7) {
        light.setAll(0xff0000)
    } else if (input.rotation(Rotation.Pitch) < -7) {
        light.setAll(0x00ff00)
    } else {
    	
    }
})
```

16. From the ``||music:MUSIC||`` Toolbox drawer, drag and drop two ``||music:play sound||`` blocks onto the Workspace.
17. Drop one ``||music:play sound||`` block under the ``||light:set all pixels||`` block in the ``||logic:if||`` clause.
18. Drop the other ``||music:play sound||`` block under the ``||light:set all pixels||`` block in the ``||logic:else if||`` clause.
19. Pick different sound effects to play for each ``||music:play sound||`` block.

```block
forever(function () {
    if (input.rotation(Rotation.Pitch) > 7) {
        light.setAll(0xff0000)
        music.wawawawaa.play()
    } else if (input.rotation(Rotation.Pitch) < -7) {
        light.setAll(0x00ff00)
        music.siren.play()
    } else {
    	
    }
})
```

20. From the ``||loops:LOOPS||`` Toolbox drawer, drag and drop two ``||loops:pause||`` blocks onto the Workspace.
21. Drop one ``||loops:pause||`` block under the ``||music:play sound||`` block in the ``||logic:if||`` clause.
22. Drop the other ``||loops:pause||`` block under the ``||music:play sound||`` block in the ``||logic:else if||`` clause.
23. Using the drop-down menu in the ``||loops:pause||`` blocks, type in the value of `700` milliseconds.

```block
forever(function () {
    if (input.rotation(Rotation.Pitch) > 7) {
        light.setAll(0xff0000)
        music.wawawawaa.play()
        pause(700)
    } else if (input.rotation(Rotation.Pitch) < -7) {
        light.setAll(0x00ff00)
        music.siren.play()
        pause(700)
    } else {
    	
    }
})
```

Now in the case that the board is balanced (between `-7` and `7` degrees), we will stop all sounds and show a nice light animation.

24. From the ``||music:MUSIC||`` Toolbox drawer, drag and drop a ``||music:stop all sounds||`` block onto the Workspace, and place it in the ``||logic:else||`` clause.
25. From the ``||light:LIGHT||`` Toolbox drawer, drag and drop a ``||light:clear||`` block (at the bottom under the **More** category) onto the Workspace, and place it after the ``||music:stop all sounds||`` block.
26. From the ``||light:LIGHT||`` Toolbox drawer, drag and drop a ``||light:show animation||`` block onto the Workspace, and place it after the ``||light:clear||`` block 
27. Select a nice animation to play while the board is balanced.

```blocks
forever(function () {
    if (input.rotation(Rotation.Pitch) > 7) {
        light.setAll(0xff0000)
        music.wawawawaa.play()
        pause(700)
    } else if (input.rotation(Rotation.Pitch) < -7) {
        light.setAll(0x00ff00)
        music.siren.play()
        pause(700)
    } else {
        music.stopAllSounds()
        light.clear()
        light.showAnimation(light.sparkleAnimation, 500)
    }
})
```

This code is in a ``||loops:forever||`` loop to ensure that the Circuit Playground Express is continuously checking the accelerometer reading of pitch or roll. It is saying, "If the accelerometer reads more than 7 degrees of pitch, then turn all pixels red and make a WaWaWa sound." Note that the `700` millisecond pause is needed to let the music block play briefly before trying to play again immediately. "Else If the accelerometer reads less than negative 7 degrees of pitch, then turn all pixels green and make a Siren sound. Else, stop all sounds, clear all lights, then show the sparkle animation."

### Gamify

You can create a slightly more complicated version of this program that will add a gamification component to measure the time that a player is balanced. To do this, we will add a counter variable to our program to keep track of the player’s "up-time".
Start with the basic balance board program above.

1. Select the ``||variables:VARIABLES||`` Toolbox drawer, and click on the **Make A Variable** button.
2. Name this variable ``upTime``.
3. From the ``||input:INPUT||`` Toolbox drawer, drag and drop a ``||input:on button click||`` block onto the Workspace.
4. From the ``||variables:VARIABLES||`` Toolbox drawer, drag and drop a ``||variables:set||`` variable block onto the Workspace, and place into the ``||input:on button click||`` block.

```block
let upTime = 0 
input.buttonA.onEvent(ButtonEvent.Click, function () { 
    upTime = 0 
})
```

5. In the ``||loops:forever||`` loop, delete all the ``||light:LIGHT||`` and ``||music:MUSIC||`` blocks from our conditional statements.

```block
forever(function () {
    if (input.rotation(Rotation.Pitch) > 7) {
        pause(700)
    } else if (input.rotation(Rotation.Pitch) < -7) {
        pause(700)
    } else {

    }
})
```

6. From the ``||variables:VARIABLES||`` Toolbox drawer, drag and drop three ``||variables:change||`` variable blocks onto the Workspace.
7. Drag one ``||variables:change||`` variable block into the ``||logic:if||`` clause, and set the value to `-1`.
8. Drag another ``||variables:change||`` variable block into the ``||logic:else if||`` clause, and set the value to `-1`.
9. Drag the last ``||variables:change||`` variable block into the ``||logic:else||`` clause, and leave the value as `1`.

```block
let upTime = 0
forever(function () {
    if (input.rotation(Rotation.Pitch) > 7) {
        upTime += -1
        pause(700)
    } else if (input.rotation(Rotation.Pitch) < -7) {
        upTime += -1
        pause(700)
    } else {
        upTime += 1
    }
})
```

10. From the ``||loops:LOOPS||`` Toolbox drawer, drag and drop a ``||loops:pause||`` block onto the Workspace and place it in the ``||logic:else||`` clause (above the last ``||variables:change||`` variable block).
11. Set the time values of the first two ``||loops:pause||`` blocks to 2 seconds (`2000` milliseconds).
12. Set the value in the last ``||loops:pause||`` block to `4000` milliseconds.

```block
let upTime = 0
forever(function () {
    if (input.rotation(Rotation.Pitch) > 7) {
        upTime += -1
        pause(2000)
    } else if (input.rotation(Rotation.Pitch) < -7) {
        upTime += -1
        pause(2000)
    } else {
        pause(4000)
        upTime += 1
    }
})
```

Now let’s add a visual representation of the up-time of a player, and reward the player when a certain level is achieved.

13. From the ``||loops:LOOPS||`` Toolbox drawer, drag and drop a ``||loops:forever||`` loop onto the Workspace
14. From the ``||light:LIGHT||`` Toolbox drawer, drag and drop a ``||light:graph||`` block onto the Workspace and place in the new ``||loops:forever||`` loop.
15. Click on the plus icon **(+)** in the ``||light:graph||`` block to display the max value.
16. Type `10` as the maximum value to ``||light:graph||``.
17. From the ``||variables:VARIABLES||`` Toolbox drawer, drag and drop an ``||variables:upTime||`` variable block onto the Workspace and place in the ``||light:graph||`` block.

```block
let upTime = 0
forever(function () {
    light.graph(upTime, 10)
})
```

18. From the ``||logic:LOGIC||`` Toolbox drawer, drag and drop an ``||logic:if||`` block onto the Workspace and place under the ``||light:graph||`` block in the ``||loops:forever||`` loop.
19. From the ``||logic:LOGIC||`` Toolbox drawer, drag and drop an ``||logic:0 = 0||`` comparison block onto the Workspace, and place in the If block replacing `true`.
20. From the ``||variables:VARIABLES||`` Toolbox drawer, drag and drop an ``upTime`` variable block onto the Workspace and place in the first slot of the ``||logic:0 = 0||`` comparison block.
21. Type in the value `10` in the second slot of the ``||logic:0 = 0||`` comparison block.

```block
let upTime = 0
forever(function () {
    light.graph(upTime, 10)
    if (upTime == 10) {

    }
})
```

22. From the ``||loops:LOOPS||`` Toolbox drawer, drag and drop a ``||loops:repeat||`` loop onto the Workspace and place inside the ``||logic:if||`` clause.
23. From the ``||light:LIGHT||`` Toolbox drawer, drag and drop a ``||light:show animation||`` block onto the Workspace and place inside the ``||loops:repeat||`` loop.
24. From the ``||music:MUSIC||`` Toolbox drawer, drag and drop a ``||music:play sound until done||`` block onto the Workspace and place after the ``||light:show animation||`` block.

```block
let upTime = 0
forever(function () {
    light.graph(upTime, 10)
    if (upTime == 10) {
        for (let i = 0; i < 4; i++) {
            light.showAnimation(light.runningLightsAnimation, 500)
            music.powerUp.playUntilDone()
        }
    }
})
```

The final program will look like this:

```blocks
let upTime = 0 
input.buttonA.onEvent(ButtonEvent.Click, function () { 
    upTime = 0 
}) 
forever(function () { 
    if (input.rotation(Rotation.Pitch) > 7) { 
        upTime += -1 
        pause(500)
    } else if (input.rotation(Rotation.Pitch) < -7) { 
        upTime += -1 
        pause(500)
    } else { 
        pause(500)
        upTime += 1
    }
})
forever(function () {
    light.graph(upTime, 10)
    if (upTime == 10) {
        for (let i = 0; i < 4; i++) {
            light.showAnimation(light.runningLightsAnimation, 500)
            music.powerUp.playUntilDone()
        }
    }
})
```

In the ``||logic:if then else||`` block, the ``upTime`` variable decreases every time the board is tilted more than `7` degrees in either direction, but it increases by one after every four seconds of being balanced. The variable also controls the NeoPixels lit up by the ``||light:graph||`` block. Remember that the two numbers in the ``||light:graph||`` block act like the numerator and denominator of a fraction. You want `10` to be the denominator because there are ten NeoPixels. The button **A** click resets the variable ``upTime`` to zero to restart a new session.

## Variations and Challenges

Some ideas for different variations of the Balance Board game:

* Have the Photon effect spin in one direction if the board tilts one way, then other direction for the other tilt.
* Lower the allowed degrees of pitch or roll so the rider has to keep the board even more horizontal.
* Create Team challenges where players must take turns on the balance board and calculate the points of the team competing against other teams.