# Making a fabric friend

## @description Maker Project for creating a fabric figure attached to the @boardname@.

## ~avatar avatar

Make some clothing to light up with NeoPixels and your @boardname@

## ~
## Duration

The time required will vary depending upon the complexity of the creation and the skill level of the creators. Two hours is probably a bare minimum to create a creature.

## Materials 

* Flora NeoPixels
* Conductive 2 or 3-ply thread
* Normal sewing thread 
* Small needle
* Scissors
* Fabric of choice. Felt works well and is easier to work with.
* Stuffing material, like fiber fill
* Clear nail polish
* Alligator clip wires

### Optional

* Fabric scissors (helpful!)
* Embroidery thread (for additional embellishment) 
* Fabric glue (to hold NeoPixels down for sewing)
* Fabric pen or tailor’s chalk

## Plan it!

Plan your friend. Sketch your plan, and be sure that the narrowest parts of the creation will still allow stuffing.You should also have an idea of where the @boardname@ and NeoPixels will be placed. 

![Sketch of the figure's outline](/static/cp/projects/fabric-friend/plan-sketch.jpg)

It’s important to also plan for where the battery pack will go. In your hand? Clipped to a loop? Lithium ion polymer (lipo) batteries can often be tucked inside a small pocket that you create in the project.

![LiPo battery connected to board](/static/cp/projects/fabric-friend/lipo-battery.jpg)

Cut out the paper plan, trace it onto the material, and cut out two versions. A fabric pen will fade away after an hour or so (or with rubbing). You can use a marking pen as well, but just be sure to cut inside the markings.

![Cut the figure and trace on fabric](/static/cp/projects/fabric-friend/cut-and-trace.jpg)

If the two sides of the friend don’t quite match, you can mark extra material on one, then trim it off.

![Trim both sides of fabric to match](/static/cp/projects/fabric-friend/trim-both-sides.jpg)

Sketch your proposed wiring on paper. Remember that none of the lines of conductive thread can touch each other. The GND pins can service multiple NeoPixels, as can the 3.3V and VOUT for power. The Flora NeoPixels have arrows on them, and these should point away from the Circuit Playground Express. Connect 3.3V to the positive side of the NeoPixel on the right, a pin from A0-A7 in the center, and GND to the negative on the left. 

![Place CPX and NeoPixels on trace outline](/static/cp/projects/fabric-friend/place-cpx-neopixels.jpg)

If you are planning a number of NeoPixels in a chain, the GND and 3.3V / VOUT lines should connect all the way from the originating power or GND pin to every positive or negative loop on the NeoPixels. If you have to start a new piece of conductive thread on the needle, try to make this transition at the eyelet of the NeoPixel so you can loop it through a number of times and get a good contact between old and new thread. The middle signal thread will stop and start on either side of the NeoPixel (see below).

![Plan the NeoPixel wire connections](/static/cp/projects/fabric-friend/neopixel-wire-plan.jpg)

Be sure the arrows on the NeoPixels point away from the @boardname@.

![Draw arrows away from CPX](/static/cp/projects/fabric-friend/neopixel-wire-direction.jpg)

This view shows how the yellow signal thread that runs from a pin like A0, A1, etc. stops at one side of the NeoPixel and resumes on the other. This allows the signal to pass through the NeoPixel and give directions. 

![NeoPixel signal direction](/static/cp/projects/fabric-friend/neopixel-signal-direction.jpg)

When you have drawn a plan that seems promising, test it with alligator clip wires. Make all the connections as you expect to make them with conductive thread, do your coding, and test. It’s much better to work out problems at this stage than after having invested time into sewing the lines incorrectly. Remember that the colors of alligator clip wires don’t matter in terms of functionality (they are all the same inside), but color coordinating helps keep you organized.

![Test CPX connections](/static/cp/projects/fabric-friend/test-connections.jpg)

## Sew on @boardname@

Using traditional thread, secure the Circuit Playground Express to your material. Use some of the pin tabs that you won’t need for the conductive thread. 

![Sew the CPX to the fabric](/static/cp/projects/fabric-friend/sew-on-cpx.jpg)

To knot thread off, you can run the needle through a stitch on the back side.

![Stitch through the backside](/static/cp/projects/fabric-friend/stitch-thru-backside.jpg)

Run the needle back through the resulting loop, repeat this process several times, and you will knot off the line. 

![Run the needle through the loop on back](/static/cp/projects/fabric-friend/needle-thru-loop.jpg)

Now that you have the Circuit Playground Express securely fastened to the fabric, it’s time to use conductive thread to make the electrical connections. Using the wiring diagram you drew earlier as a guide, sew connections between the power, GND, and signal pin tabs. A simple running stitch works well. Take care that none of the lines of conductive thread touch each other. Also remember to end a line of stitching at the middle of a NeoPixel and resume with new thread on the other side. 

![Stitch on a NeoPixel](/static/cp/projects/fabric-friend/stitch-on-neopixel.jpg)

You can use a single line of stitches that begin and end at eyelets on the hardware.

![A line of stitches](/static/cp/projects/fabric-friend/line-of-stitches.jpg)

You can also use a double line of stitches. This is more work but makes a more reliable connection. If using this method, start sewing an inch or two away from the hardware, then sew to it, leaving a tail of thread hanging out of your first stitch.

![Double line of stitches](/static/cp/projects/fabric-friend/double-stitch-line.jpg)

Sew to one piece of hardware, then back to the other. At the eyelets, loop around the hole about three times, then run a stitch in through the loops, then go through the eyelet one more time. It’s vital that there be a solid connection at the eyelets.

![Eyelet stitch connection](/static/cp/projects/fabric-friend/eyelet-stitch.jpg)

Once you sew back to the starting place, you can use the tail you left sticking out to easily tie several knots. Add a dab of clear nail polish to help prevent it from unraveling. 

![Eyelet stitch connection](/static/cp/projects/fabric-friend/eyelet-stitch.jpg)

Once you sew back to the starting place, you can use the tail you left sticking out to easily tie several knots. Add a dab of clear nail polish to help prevent it from unraveling. 

![Tie off ends of thread](/static/cp/projects/fabric-friend/tie-off-thread.jpg)

The end result of either the single line of stitches or a double one should be lines of thread that make strong connections and that don’t touch.

![Lines of thread don't touch](/static/cp/projects/fabric-friend/non-touching-thread.jpg)

For more on working with conductive thread and NeoPixels see a great video by Becky Stern of Adafruit: 
https://learn.adafruit.com/flora-rgb-smart-pixels/add-more-pixels
