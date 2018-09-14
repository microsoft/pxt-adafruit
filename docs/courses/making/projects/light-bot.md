# Light Bot

https://www.youtube.com/watch?v=ZQcCy6-9bGQ&feature=youtu.be 
<br/>

This Light Bot takes advantage of the @boardname@ light sensor to create a simple obstacle-avoiding robotic vehicle. When it gets too close to a wall, the sensor gets shaded and that input can direct the wheels to backup and alter course. This fun build involves a lot of experimenting with code to get wheel patterns and the light level correct. 

## Variations and Challenges

Instead of just having one backup pattern, create two or three that are randomly chosen by a variable (see below for coding ideas).

Try driving your light bot in a square using the ``||input:on loud sound||`` block to program it to turn on that input. If you clap or shout every few seconds, will it travel a square path? 

## Making

### Basic materials

* 2 continuous rotation servos (not the 180 degree ones that come with the educators’ kit)
* Servo wheels
* Male to alligator clip connectors
* Battery pack
* Cardboard
* A cutter 
* Hot glue
* Tape

### Construction

Cut out the main chassis (body) of the vehicle. This will need to be long enough to accomodate the battery pack, CPX, and some spare room to work with. The chassis also needs to be wide enough for you to later create the awning portion that shades the CPX face. The pictured chassis is about 7” x 4.5”.

Trace the outer half of the servos on the cardboard, then cut out notches for them.

![Cutouts for notches to fit servos](/static/courses/making/projects/light-bot/servo-notches.jpg)

Trace the front couple of inches of the main chassis, then cut out a rectangular piece.

Glue the rectangle under the front part of the chassis that has the servo motor cutouts.

Apply masking tape to the servos, orient them so their wires are facing rearward, and hot glue them in the notches you made.

![Attach servos inside cutouts, close up](/static/courses/making/projects/light-bot/attach-servos1.jpg)

![Attach servos inside cutouts](/static/courses/making/projects/light-bot/attach-servos2.jpg)

Construct a small stand about a an inch from the front of the vehicle. This is where your CPX will be mounted. Be sure to make holes or notches for the battery pack wires.

![Mount for CPX board](/static/courses/making/projects/light-bot/board-mount1.jpg)

![Mount for CPX board sitting on chassis](/static/courses/making/projects/light-bot/board-mount2.jpg)

Using looped tape, secure the battery pack and @boardname@ to your vehicle. Think about how you want your @boardname@’ lights to display as well as maintaining access to the micro USB port for updating code.

![Attach board to chassis](/static/courses/making/projects/light-bot/board-mount-attach1.jpg)

![Attach board to chassis rear view](/static/courses/making/projects/light-bot/board-mount-attach2.jpg)

On each servo motor, connect the alligator clip to male connector wires. Then, for each servo motor, clip the alligator wires to **GND**, **3.3V**, and any pin, **A1** through **A7**.

Using cardboard or construction paper, create an awning to help shade the CPX when it runs into a wall and attach with tape (again, still maintaining access to the mini USB). Using tape to attach it will allow you to reposition if needed.

![Shade cover for board and chassis](/static/courses/making/projects/light-bot/shade-cover.jpg)

## Coding

Continuous rotation servos roll at full speed in one direction when set to `0`, full speed in the opposite direction when set to `180`, and are stopped at a number near `90` (you’ll have to experiment to find it). Since the servos are oriented opposite to each other, to go forward one servo will be at `0` and the other at `180`. To reverse, you’ll switch those numbers. To turn when going forward or backing up, you’ll try different combination. For example, `180` and `150` would cause a turn since one is moving forward quickly and the other is moving backward fairly quickly.

This sample code uses the ``||input:on switch moved||`` block to allow you to switch the servos off when needed. The ``||input:on switch moved left||`` block says, If the light level hitting the @boardname@ sensor is greater than `6`, show a face with ``||light:show ring||`` and set pins **A1** and **A2** to `1` and `180` (your orientation might be the reverse). Else (if the light level drops below 6), reverse the servos’ directions for 1 second, play a siren sound and show an animation, then turn the vehicle by reversing one servo and making the other go forward for half a second. Because the ``||input:on switch moved||`` block acts like a ``||loops:forever||`` loop, it will be forever checking to see what the current light level reading is.

```blocks
input.onSwitchMoved(SwitchDirection.Left, function () {
    if (input.lightLevel() > 6) {
        light.showRing(
        `blue black orange orange orange orange orange orange black blue`
        )
        pins.A2.servoWrite(1)
        pins.A1.servoWrite(180)
    } else {
        pins.A2.servoWrite(180)
        pins.A1.servoWrite(1)
        pause(1000)
        music.playSoundUntilDone(music.sounds(Sounds.Siren))
        light.showAnimation(light.runningLightsAnimation, 500)
        pins.A2.servoWrite(70)
        pins.A1.servoWrite(25)
        pause(500)
    }
})
input.onSwitchMoved(SwitchDirection.Right, function () {
    pins.A2.servoWrite(90)
    pins.A1.servoWrite(90)
    light.setAll(0x000000)
})
```

The instructor might challenge students who finish earlier to find a way to randomize the Light Bot’s backup response. The teacher might give this challenge and make sure they see the ``||math:pick random||`` lozenge in the ``||math:MATH||`` drawer.

Here are two ways to randomize the way the Light Bot responds to an obstacle. One creates a variable called ``randomPick`` and the other just uses a ``||math:pick random||`` lozenge to randomize both the backup path and duration. 

```blocks
let randomPick = 0
forever(function () {
    if (input.lightLevel() > 6) {
        pins.A1.servoWrite(180)
        pins.A2.servoWrite(0)
    } else {
        randomPick = Math.randomRange(1, 2)
        if (true) {
            pins.A1.servoWrite(0)
            pins.A2.servoWrite(180)
            pause(1000)
            pins.A1.servoWrite(0)
            pins.A2.servoWrite(110)
            pause(500)
        } else {
            pins.A1.servoWrite(0)
            pins.A2.servoWrite(180)
            pause(1000)
            pins.A1.servoWrite(80)
            pins.A2.servoWrite(170)
            pause(500)
        }
    }
})
```

```blocks
forever(function () {
    if (input.lightLevel() > 6) {
        pins.A1.servoWrite(180)
        pins.A2.servoWrite(0)
    } else {
        pins.A1.servoWrite(0)
        pins.A2.servoWrite(180)
        pause(Math.randomRange(700, 1000))
        pins.A1.servoWrite(Math.randomRange(0, 30))
        pins.A2.servoWrite(Math.randomRange(0, 50))
        pause(Math.randomRange(500, 1000))
    }
})
```

Here is code to try for turning the Light Bot into a Clap Bot. If the ``||input:sound level||`` is less than `40`, it will go straight, else if the sound level goes above `40`, one wheel will stop and the other will keep turning for half a second. The duration of the ``||loops:pause||`` block needed to form a right angle turn will vary depending on the bot. 

```blocks
forever(function () {
    if (input.soundLevel() < 40) {
        pins.A1.servoWrite(180)
        pins.A2.servoWrite(0)
    } else {
        pins.A1.servoWrite(180)
        pins.A2.servoWrite(90)
        pause(500)
    }
})
```
