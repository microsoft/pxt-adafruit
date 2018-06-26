# Coding and Using Servo Motors

https://www.youtube.com/watch?v=cofElsolYk4 
<br/>

There are two main kinds of servo motors. The most common is a standard servo, and it can rotate an arm from 0 - 180 degrees. You might program it to start at 70 degrees, pause for 2 seconds, the move to 110 degrees, pause for 2 seconds, and then repeat. There are also continuous rotation servos. These will spin in either direction or will stop. In either case, servos will come with little attachment arms called horns, as well as tiny screws to hold the horns on. In many cases, the horn will stay put on the servo without needing a screw. However, if your project will put some stress on the horn, use the smallest screw to hold it (see the [Maker Tools and Techniques](/courses/making/maker-tools-techniques) chapter for more on hot gluing servo horns). You can also buy wheels to attach to servo motors, and those usually will require screws.

![Different servo horns](/static/courses/making/coding/servo-horns.jpg)

The body of a servo has three wires coming out: brown or black for the negative, red for positive (these complete the electrical circuit) and a white or yellow wire that carries the signal. This signal wire is the one telling the servo what degree to move to, or what direction and speed to run at.

![Connecting the servo to board](/static/courses/making/coding/servo-connect.jpg)

To attach a servo to the @boardname@, you’ll need alligator clip to male connector wires. These wires are interchangeable, but color-coding them as best you can will make connecting them to the proper pins on the @boardname@ easier.

Connect the male ends to the black receivers at the end of the servo’s wires. These will usually stay in place, but a little masking tape can provide insurance if desired.

Clip the alligator clips onto the pins of the @boardname@. The black or brown wire should connect to a **GND** (ground) pin, the red wire should ideally connect to the **VOUT** pin for optimal performance (though the two **3.3V** pins will also be able to power a servo). The white or yellow signal wire should connect to either pin **A1** or **A2**.

## Standard 180 Degree Servos

If you’re using a standard 180 degree servo, it’s handy to calibrate its range of motion. Move the horn as far as it will go in one direction. In the sequence pictured, the servo horn on the popsicle stick has gone farther than desired. We can disconnect it, then reattach so that its range of motion starts at one extreme while flat, travels to 90 degrees in the middle, then goes to the other extreme. We won’t know which extreme is `0` degrees and which is `180` until we begin experimenting with the code, but now we’re ready.

To test your 180 degree servo’s motion, get three ``||input:on button click||`` blocks from the ``||input:INPUT||`` drawer, and set them to `A`, `B`, and `A+B` clicks. Then, click on **Advanced** in the Toolbox to reveal more drawers, including ``||pins:PINS||``. Scroll down in ``||pins:PINS||`` to find the ``||pins:servo write pin||`` block. Place one of these in each of the ``||input:on button click||`` inputs.

![Servo blocks in Pins drawer](/static/courses/making/coding/servo-blocks.jpg)

Once you have the ``||pins:servo write pin||`` blocks in place, change the values to `0`, `90`, and `180`. You will now be able to test where one extreme of the servo’s motion is, what the midpoint of motion is, and the other extreme.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    pins.A1.servoWrite(0)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    pins.A1.servoWrite(90)
})
input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    pins.A1.servoWrite(180)
})
```

These 180 degree servos move at a fixed speed, and they need a pause in-between the ``||pins:servo write pin||`` blocks that is long enough to let them travel. For example, if my servo is programmed to repeatedly go from `10` degrees to `170` and then back again, I need to use code like this with pauses that give the horn time to travel between destinations.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    for (let i = 0; i < 10; i++) {
        pins.A1.servoWrite(10)
        pause(1000)
        pins.A1.servoWrite(170)
        pause(1000)
    }
})
```

## Continuous Rotation Servos    

The setup of continuous rotation servo motors is the same as for standard servos above. The coding uses the same blocks from the ``||pins:PINS||`` drawer under **Advanced** in the Toolbox, and you put in values from `0` to `180`. However, the key difference is that `0` moves the servo at full speed continuously in one direction, `90` (or a number close to it) stops the servo, and `180` moves the servo in the opposite direction. The closer the number is to `90`, the slower the servo will turn.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    pins.A1.servoWrite(180)
    pause(5000)
    pins.A1.servoWrite(90)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    pins.A1.servoWrite(0)
    pause(5000)
    pins.A1.servoWrite(90)
})
```

You may have to experiment to find out what number near `90` stops your servo.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    pins.A1.servoWrite(89)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    pins.A1.servoWrite(90)
})
input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    pins.A1.servoWrite(91)
})
```