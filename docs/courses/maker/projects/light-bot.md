# Light Bot Project

## Description

This Light Bot takes advantage of the light sensor on the Circuit Playground Express to create a simple obstacle-avoiding robotic vehicle. When it gets too close to a wall, the light sensor gets shaded and that input can direct the wheels to backup and alter course. This fun build involves a lot of experimenting with code to get wheel patterns and the light level correct.

https://youtu.be/ZQcCy6-9bGQ

## Time Required

| Hours |
|-|
| ![1 to 2 hours on a 4 hour time scale](/static/courses/maker/projects/common/1-to-2-hours.png) |
<br/>
1-2 hours for the basic build. You may also want to allocate more time for testing and experimentation. 

## Academic Tie-in Ideas

* **Science and Physics**: this is a great project to experiment with speed and velocity – experiment with different weights and inclines.
* **History & Social Studies**: explore the history of robots in society and their ethical implications, discuss possible applications of this type of robot to help people and the environment.
* **Literature**: personify your light bot as a character or an animal from a story.
* **Math**: calculate the speed and angle rotation of the servo motors.

## Materials

See the [Maker Tools and Techniques](/courses/maker/general/maker-tools-techniques) chapter for more details on materials.

* 2 continuous rotation servos (360-degrees)
* 2 servo wheels

This kit comes with both – https://www.amazon.com/Feetech-RCmall-Degree-Continuous-Rotation/dp/B077HZ6ZP8

* Male jumper cable to alligator clip connectors – https://www.adafruit.com/product/3448
* Sheet of cardboard (at least 12 inches square)
* Cardboard cutters
* Glue gun and glue sticks
* Construction paper
* Tape

## Making

1. Cut out the main chassis (body) of the vehicle. This will need to be long enough to accommodate the battery pack, Circuit Playground Express, and some spare room to work with. The chassis also needs to be wide enough for you to later create the awning portion that shades the CPX face. The pictured chassis is about 7-inches long by 4.5-inches wide. Notice that the back of the robot is a narrower width than the front.
2. Trace the outer half of the servos on the cardboard, then cut out notches for them on each side of the cardboard chassis towards the front of the robot.

![Cardboard chassis with notches for the servo motors](/static/courses/maker/projects/light-bot/lb-making1.jpg)

3. Create a reinforced bottom for the front of the robot.
Use another piece of cardboard and cut a rectangle the size of the front half of your robot.
4. Glue the rectangle under the front part of the chassis that has the servo motor cutouts.
5. Apply masking tape to the servos, orient them so their wires are facing rearward, and hot glue them in the notches you made.

![Servo motors affixed to the notches in the front of the robot](/static/courses/maker/projects/light-bot/lb-making2.jpg)

![Make sure the wires from the servo motors are pointing towards the rear of the robot](/static/courses/maker/projects/light-bot/lb-making3.jpg)

6. Construct a small stand about an inch from the front of the vehicle. This is where your CPX will be mounted. Be sure to make holes or notches for the battery wires.

![Cardboard stand to mount the Circuit Playground Express](/static/courses/maker/projects/light-bot/lb-making4.jpg)

7. Using hot glue, affix the stand to the front of the robot.

![Attach stand to front of robot](/static/courses/maker/projects/light-bot/lb-making5.jpg)

8. Using some tape, secure the battery pack and the Circuit Playground Express board to your vehicle. Think about how you want your Circuit Playground Express’ lights to display as well as maintaining access to the micro USB port for updating code when you position the board.

![Attach Circuit Playground Express board to the stand at the front of the robot](/static/courses/maker/projects/light-bot/lb-making6.jpg)

![Attach the battery pack to the back of the robot chassis](/static/courses/maker/projects/light-bot/lb-making7.jpg)

9. On each servo motor, connect the alligator clip to male connector wires. You will want to make sure you are connecting the correct wires:

* Brown = Ground (**GND**)
* Red = Power (**3.3V** or **VOUT**)
* Orange = Signal/Data (Pins **A1** and **A2**)

![Connect the Servo Motor wires to the correct connectors on the Circuit Playground Express](/static/courses/maker/projects/light-bot/servo-connection.jpg)

10. Using a piece of construction paper, create an awning to help shade the Circuit Playground Express when it runs into a wall and attach the piece of paper to the robot chassis with tape.

![Awning to shade the light sensor on the Circuit Playground Express](/static/courses/maker/projects/light-bot/lb-making8.jpg)

## Coding

See the [Coding the Circuit Playground Express](/courses/maker/general/coding) chapter for more information.

We’ll be using some ``||servos:Servos||`` motor blocks to code our Light Bot.

1. In the Toolbox, click on the **Advanced** tab to display more Toolbox categories.
2. Click on **Extensions** at the bottom of the Toolbox.

![Advanced toolbox categories](/static/courses/maker/projects/light-bot/advanced-toolbox.png)

3. In the **Extensions** page, click on the **Servo** library.

![Extensions dialog](/static/courses/maker/projects/light-bot/extensions.png)

4. This will add a new ``||servos:Servos||`` category to the Toolbox – we’ll be using the ``||servos:continuous servo||`` block for our program.

![Blocks in the Servos toolbox drawer](/static/courses/maker/projects/light-bot/servo-blocks.png)

In our program, we’ll also use the Switch on the Circuit Playground Express to turn off the servo motors.

![Switch on the Circuit Playground Express moves right and left](/static/courses/maker/projects/light-bot/cp-express-switch.jpg)

The ``||input:on switch moved left||`` block says:

* If the light level hitting the Circuit Playground Express’ light sensor is greater than `6`
>* Display a happy face of lights, and set the servo motors to move forward.
* Otherwise (if the light level drops below `6`).
>* Reverse the direction of the Servo motors for 1 second (`1000` ms).
>* Play a siren sound - ``||music:play sound siren||``.
>* Show an animation - ``||light:show animation||``.
>* Turn the vehicle by reversing one servo and making the other go forward for half a second (`500` ms).

Because the ``||input:on switch moved left||`` block acts like a ``||loops:forever||`` loop, it will be forever checking to see what the current light level reading is.

```blocks
input.onSwitchMoved(SwitchDirection.Left, function () {
    if (input.lightLevel() > 6) {
        light.showRing(
        `blue black orange orange orange orange orange orange black blue`
        )
        servos.A1.run(50)
        servos.A2.run(50)
    } else {
        servos.A1.run(-50)
        servos.A2.run(-50)
        pause(1000)
        light.showAnimation(light.runningLightsAnimation, 500)
        music.siren.playUntilDone()
        servos.A1.run(50)
        servos.A2.run(10)
        pause(500)
    }
})
input.onSwitchMoved(SwitchDirection.Right, function () {
    light.setAll(0x000000)
    servos.A1.run(0)
    servos.A2.run(0)
})
```

## Variations and Challenges

There are many different variations you can create to direct the movement of your robot. Here are a couple ideas:

* Randomization – challenge students who finish earlier to find a way to randomize the Light Bot’s backup response. Hint – use the ``||math:pick random||`` block in the ``||math:MATH||`` Toolbox drawer.
* Respond to Sound – Try driving your light bot in a square using the ``||input:on loud sound||`` block to program it to turn on that input. If you clap or shout every few seconds, will it travel a square path?

```package
servo
```
