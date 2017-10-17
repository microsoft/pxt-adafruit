# Making the Rube Goldberg box

### @description Maker Project for Rube Goldberg box for @boardname@

### ~avatar avatar

Let's make a Rube Goldberg machine that blows a confetti surprise at the end! 

### ~

### Duration: ~1 hour

## ``|Step 1|`` - Make the chute
**Goal:** We need a chute to drop a weight down to turn on the fan.<br/>
**Materials:** scrap cardboard, hot glue, scissors

1. With your scrap cardboard, measure and cut 3 rectangles that are all 10 inches long by 1.5 inches wide.
2. Hot glue the long edges together to form an open _chute_, so that your chute mimics a box without its fourth side. 
3. Cut one smaller square, about 1.5 inches by 1.5 inches, and glue it to the bottom of the chute.

![Parts for making the chute](/static/cp/projects/rube-goldberg/chute-parts.jpg)
**Parts for making the chute**

## ``|Step 2|`` - Attach your servo
**Goal:** The servo needs to hold the weight up and release the weight down the chute.<br/>
**Materials:** servo, popsicle sticks, hot glue, cylindrical weight

First, start by opening your servo package. Inside you will probably find multiple extensions for the servo. Choose the one that has only one arm.

![Glue the chute together](/static/cp/projects/rube-goldberg/glue-chute.jpg)
**Glue the chute together**

Cut 2 inches off a popsicle stick and hot glue it to the servo arm.

![Cut the servo stick](/static/cp/projects/rube-goldberg/servo-stick.jpg)
**Cut the servo stick**

Hot glue the servo to the right side of the chute. Cut a slit in the cardboard so the servo can rotate in and out.

![Attach the servo to the chute](/static/cp/projects/rube-goldberg/chute-to-servo.jpg)
**Attach the servo to the chute**

## ``|Step 3|`` - Add the pushbutton
**Goal:** When the weight drops, it will land on the pushbutton that turns on the fan.<br/>
**Materials:** chute, hot glue gun, button

Cut a small triangle in the bottom of the center piece of the chute.

![Pushbutton for the bottom of the chute](/static/cp/projects/rube-goldberg/push-button.jpg)
**Pushbutton for the bottom of the chute**

Slide the pushbutton (facing up) through the triangle hole and glue to the bottom of the chute. Try to keep it centered on the bottom piece.

![Glue the pushbutton to the bottom of the chute](/static/cp/projects/rube-goldberg/push-button-attach.jpg)
**Glue the pushbutton to the bottom of the chute**

Later, the chute is mounted (with a tilt) to have your metal cylinder fall from the top of the servo and roll down the chute. It pushes the pushbutton down when it stops at the bottom.

## ``|Step 4|`` - Attach your battery case and board
**Goal:** Attach the @boardname@ and battery case to the side of the chute.<br/>
**Materials:** chute, battery pack, @boardname@, hot glue

Use scissors to pry off the clip on the back of your battery pack. Remove any remaining tape too.

![Connect the battery pack](/static/cp/projects/rube-goldberg/battery-connect.jpg)
**Connect the battery pack**

1. Hot glue this side of the battery pack (opposite the on/off switch) to the upper left side of the chute.
2. Hot glue your @boardname@ on the other side, right below the switch with the battery connector on top.

![Attach the battery pack](/static/cp/projects/rube-goldberg/battery-attach.jpg)
**Attach the battery pack**

## ``|Step 5|`` - Set up the fan
**Goal:** Wire up the fan and connect its batteries.<br/>
**Materials:** jumper wires, alligator clips, fan, batteries for fan

**Note:** if the fan you’re using requires multiple batteries (if your fan needs more voltage to run than just one battery) you must connect them in series. To do so, use an alligator clip to connect the positive on one to the negative on the other (white alligator clip). Now one battery will be left with an open (+)(red) and the other with a (-)(green). These are the new power (positive) and ground (negative) terminals.

1. Find the two wires coming out of your fan. Connect the red one directly to the positive terminal on your battery using an alligator clip.
2. Connect the black wire to one of the two wires extending from your pushbutton (it doesn’t matter which one).
3. Connect the other wire from the pushbutton to the negative terminal on the battery.

![Connect the fan and batteries](/static/cp/projects/rube-goldberg/fan-setup.jpg)
**Connect the fan and batteries**

## ``|Step 6|`` - Connect the force sensor
**Goal:** Connect the force sensor so it will start the servo.<br/>
**Materials:** ribbons, force sensor, alligator clips, hot glue

1. First decorate the force sensor to disguise it. Have fun- be creative! Here we used ribbon bows.
2. Connect an alligator clip to each of the two connections

![force sensor parts](/static/cp/projects/rube-goldberg/force-sensor-parts.jpg)
**Force sensor parts**

![Connect clips to the force sensor](/static/cp/projects/rube-goldberg/force-sensor-connect.jpg)
**Connect alligator clips to the force sensor**

## ``|Step 7|`` - Connect the servo and force sensor

**Goal:** Connect the force sensor to operate the servo.<br/>
**Materials:** main chute, alligator clips, force sensor

1. Connect the black wire from the servo to the **GND** pin on the board.
2. Connect the red wire to the **3.3V** (power) pin on the board.
3. Connect the yellow wire to pin **A3**.
4. Connect one side of the force sensor to ground.
5. Connect the other side of the force sensor to pin **A1**.

![Connect the force sensor](/static/cp/projects/rube-goldberg/servo-sensor-connect-1.jpg)
**All the connections**

![Pin connections on the board](/static/cp/projects/rube-goldberg/servo-sensor-connect-2.jpg)
**Pin connections on the board**

![Connect the force sensor](/static/cp/projects/rube-goldberg/servo-sensor-connect-3.jpg)
**Tape the wires an clips to the chute**

## ``|Step 8|`` - Assembly
**Goal:** Put the chute, force sensor, and box together.<br/>
**Materials:** hot glue, electrical tape, scissors, large cardboard box, chute and attachments, popsicle stick

![Chute and box next to each other](/static/cp/projects/rube-goldberg/chute-and-box.jpg)
**The chute and box ready to go together**

First, open up the four corners of one side of the box and glue them out so they extend the box. Open up the back side of the box to make assembly easier, but don’t do anything with it quite yet.

![Box opening](/static/cp/projects/rube-goldberg/box-opening.jpg)
**Box opening**

Get the scissors, glue gun, and ruler ready.

![Tools for the chute](/static/cp/projects/rube-goldberg/tools-for-chute.jpg)
**Tools for the chute**

Carefully take the chute and place it inside the box. Glue the bottom of the chute to the bottom of the box. Then, take a popsicle stick, glue one side to the top of the chute, and the other to the top of the box. To make sure the weight falls the way you want it to, adjust the angle of the chute if you need to.

![Mount the chute in the box](/static/cp/projects/rube-goldberg/chute-mount.jpg)
**Mount the chute in the box**

Take the remaining part of the popsicle stick and glue it to the bottom of the chute. This will hold in the weight after it falls.

![Remainder of the stick](/static/cp/projects/rube-goldberg/cut-weight-stick.jpg)
**Remainder of the stick**

![Glue the weight keeper on](/static/cp/projects/rube-goldberg/glue-weight-stick.jpg)
**Glue on the weight keeper stick**

Cut a small hole in the side of the box, and pull the wires and force sensor through. Tape the wires in an appropriate place so the decorated force sensor can be centered.

![Tape on the force sensor](/static/cp/projects/rube-goldberg/attach-force-sensor.jpg)
**Tape on the force sensor**

Glue the fan near the back of the box to leave room for confetti.

![Glue on the fan](/static/cp/projects/rube-goldberg/close-box-end.jpg)
**Glue on the fan close to the back**

## ``|Step 9|`` - Decorate!
**Goal:** Cover the box in tissue paper and hide the wires.<br/>
**Materials:** tissue paper, electrical tape

Use tissue paper to cover the box. For a more discrete look, you can use electrical tape to tidy up the wires.

![Decorate the box](/static/cp/projects/rube-goldberg/decorate.jpg)
**Decorate!**

## Complete!
Congratulations! You have completed the Rube Goldberg prank box make challenge. 
Now, cut up the leftover tissue paper to make some confetti.

![Confetti](/static/cp/projects/rube-goldberg/confetti.jpg)
**Get some confetti**

Load your prank box with the confetti to get it ready!

![Load confetti into box](/static/cp/projects/rube-goldberg/load-confetti.jpg)
**Load the confetti into the box**

Ready to do some coding? OK, good...connect the @boardname@ to your computer to get started.

### ~button /projects/rube-goldberg/code

NEXT: Code 

### ~ 
