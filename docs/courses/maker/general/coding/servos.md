# Coding with Servo Motors

https://www.youtube.com/watch?v=cofElsolYk4 
<br/>

There are two main kinds of servo motors. The most common is a standard servo, and it can rotate an arm from 0-180 degrees. You might program it to start at 70 degrees, pause for 2 seconds, the move to 110 degrees, pause for 2 seconds, and then repeat. There are also continuous rotation servos. These will spin in either direction or will stop. In either case, servos will come with little attachment arms called horns, as well as tiny screws to hold the horns on. In many cases, the horn will stay put on the servo without needing a screw. However, if your project will put some stress on the horn, use the smallest screw to hold it.  See the Maker Tools and Techniques chapter for more on hot gluing servo horns. You can also buy wheels to attach to servo motors, and those usually will require screws. 

![](/static/courses/maker/general/coding/servo-motors.jpg)

The body of a servo has three wires coming out: brown or black for the negative, red for positive (these complete the electrical circuit) and a white or yellow wire that carries the signal. This signal wire is the one telling the servo what degree to move to, or what direction and speed to run at. 

![](/static/courses/maker/general/coding/servo-motor-connection.jpg)


To attach a servo to the Circuit Playground Express, you’ll need alligator clip to male connector wires. These wires are interchangeable, but color-coding them as best you can will make connecting them to the proper pins on the Circuit Playground Express easier. 

Connect the male ends to the black receivers at the end of the servo’s wires. These will usually stay in place, but a little masking tape can provide insurance if desired.

Clip the alligator clips onto the pins of the Circuit Playground Express. The black or brown wire should connect to a **GND** (ground) pin, the red wire should ideally connect to the **VOUT** pin for optimal performance (though the two **3.3V** pins will also be able to power a servo). The white or yellow signal wire should connect to either pin **A1** or **A2**. 

## Standard 180 Degree Servos

If you’re using a standard 180-degree servo, it’s handy to calibrate its range of motion. Move the horn as far as it will go in one direction. In the sequence pictured, the servo horn on the popsicle stick has gone farther than desired. We can disconnect it, then reattach so that its range of motion starts at one extreme while flat, travels to 90 degrees in the middle, then goes to the other extreme. We won’t know which extreme is 0 degrees and which is 180 until we begin experimenting with the code, but now we’re ready. 

To activate the servo motor, we’ll use some special servo motor blocks in our code.  
1.	In the Toolbox, click on the **Advanced** tab to display more Toolbox categories
2.	Click on Extensions at the bottom of the Toolbox
 

3.	In the Extensions page, click on the Servo library
 

4.	This will add a new Servos category to the Toolbox
 

5.	To test your 180-degree servo’s motion, get three ``||input:on button click||`` blocks from the ``||input:INPUT||`` drawer, and set them to **A**, **B**, and **A+B** clicks. 
6.	From the ``||servos:SERVOS||`` Toolbox drawer, drag out three ``||servos:set servo angle||`` blocks and place one of these in each of the ``||input:on button click||`` inputs. 
7.	In each of the``||servo:set servo angle||`` blocks, change the values to `0`, `90`, and `180`. 

You will now be able to test where one extreme of the servo’s motion is, what the midpoint of motion is, and the other extreme. 
 

These 180-degree servos move at a fixed speed, and they need a pause in between the ``||servos:set servo angle||`` changes that is long enough to let them travel. For example, if my servo is programmed to repeatedly go from 10 degrees to 170 and then back again, I need to use code like this with 1 second pauses that give the servo horn time to travel between destinations. 
 

## Continuous Rotation Servos

The setup of continuous rotation servo motors is the same as for standard servos above. The coding uses the Continuous Servo block from the Servos Toolbox drawer.  The key difference is that instead of setting the angle for the Servo arm to turn, you will be setting the speed and direction for the continuous servo motor.  Positive speed moves the servo motor in one direction, negative speed moves it in the opposite direction and 0 speed stops the motor.
 
