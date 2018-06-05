# Making the Fabric Friend

## @description Maker Project for creating a fabric figure attached to the @boardname@.

## ~avatar avatar

Make your Fabric Friend with some cloth, NeoPixels, and your @boardname@

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

Sketch your proposed wiring on paper. Remember that none of the lines of conductive thread can touch each other. The **GND** pins can service multiple NeoPixels, as can the **3.3V** and **VOUT** for power. The Flora NeoPixels have arrows on them, and these should point away from the @boardname@. Connect **3.3V** to the positive side of the NeoPixel on the right, a pin from **A0** - **A7** in the center, and **GND** to the negative on the left. 

![Place CPX and NeoPixels on trace outline](/static/cp/projects/fabric-friend/place-cpx-neopixels.jpg)

If you are planning a number of NeoPixels in a chain, the **GND** and **3.3V** / VOUT lines should connect all the way from the originating power or **GND** pin to every positive or negative loop on the NeoPixels. If you have to start a new piece of conductive thread on the needle, try to make this transition at the eyelet of the NeoPixel so you can loop it through a number of times and get a good contact between old and new thread. The middle signal thread will stop and start on either side of the NeoPixel (see below).

![Plan the NeoPixel wire connections](/static/cp/projects/fabric-friend/neopixel-wire-plan.jpg)

Be sure the arrows on the NeoPixels point away from the @boardname@.

![Draw arrows away from CPX](/static/cp/projects/fabric-friend/neopixel-wire-direction.jpg)

This view shows how the yellow signal thread that runs from a pin like **A0**, **A1**, etc. stops at one side of the NeoPixel and resumes on the other. This allows the signal to pass through the NeoPixel and give directions. 

![NeoPixel signal direction](/static/cp/projects/fabric-friend/neopixel-signal-direction.jpg)

When you have drawn a plan that seems promising, test it with alligator clip wires. Make all the connections as you expect to make them with conductive thread, do your coding, and test. It’s much better to work out problems at this stage than after having invested time into sewing the lines incorrectly. Remember that the colors of alligator clip wires don’t matter in terms of functionality (they are all the same inside), but color coordinating helps keep you organized.

![Test CPX connections](/static/cp/projects/fabric-friend/test-connections.jpg)

## Sew on your board

Using traditional thread, secure the @boardname@ to your material. Use some of the pin tabs that you won’t need for the conductive thread. 

![Sew the CPX to the fabric](/static/cp/projects/fabric-friend/sew-on-cpx.jpg)

To knot thread off, you can run the needle through a stitch on the back side.

![Stitch through the backside](/static/cp/projects/fabric-friend/stitch-thru-backside.jpg)

Run the needle back through the resulting loop, repeat this process several times, and you will knot off the line. 

![Run the needle through the loop on back](/static/cp/projects/fabric-friend/needle-thru-loop.jpg)

## Sew on the NeoPixels

Now that you have the @boardname@ securely fastened to the fabric, it’s time to use conductive thread to make the electrical connections. Using the wiring diagram you drew earlier as a guide, sew connections between the power, **GND**, and signal pin tabs. A simple running stitch works well. Take care that none of the lines of conductive thread touch each other. Also remember to end a line of stitching at the middle of a NeoPixel and resume with new thread on the other side. 

![Stitch on a NeoPixel](/static/cp/projects/fabric-friend/stitch-on-neopixel.jpg)

You can use a single line of stitches that begin and end at eyelets on the hardware.

![A line of stitches](/static/cp/projects/fabric-friend/line-of-stitches.jpg)

You can also use a double line of stitches. This is more work but makes a more reliable connection. If using this method, start sewing an inch or two away from the hardware, then sew to it, leaving a tail of thread hanging out of your first stitch.

![Double line of stitches](/static/cp/projects/fabric-friend/double-stitch-line.jpg)

Sew to one piece of hardware, then back to the other. At the eyelets, loop around the hole about three times, then run a stitch in through the loops, then go through the eyelet one more time. It’s vital that there be a solid connection at the eyelets.

![Eyelet stitch connection](/static/cp/projects/fabric-friend/eyelet-stitch.jpg)

Once you sew back to the starting place, you can use the tail you left sticking out to easily tie several knots. Add a dab of clear nail polish to help prevent it from unraveling. 

![Tie off ends of thread](/static/cp/projects/fabric-friend/tie-off-thread.jpg)

The end result of either the single line of stitches or a double one should be lines of thread that make strong connections and that don’t touch.

![Lines of thread don't touch](/static/cp/projects/fabric-friend/non-touching-thread.jpg)

For more on working with conductive thread and NeoPixels see a great video by [Becky Stern](https://www.adafruit.com/beckystern) of Adafruit:

https://learn.adafruit.com/flora-rgb-smart-pixels/add-more-pixels

![Face of fabric friend with CPX and NeoPixels](/static/cp/projects/fabric-friend/friend-face.jpg)

### ~ hint

**Sewing tips**

* Try to keep the stitches fairly close together, and don’t pull them too tight. 
* Be certain the lines of stitching don’t touch each other. 
* A fabric pen can help you sew straight, and fabric glue can keep NeoPixels in place (though keep glue in the middle of them only, not the sew tabs).
* Loop the conductive thread snugly about four times around each eyelet pin on the @boardname@ and the NeoPixels. It’s vital that there be a good connection between thread and pin. 
* When you end a sewing session, flip the material over, trim any tails of the conductive thread knots, and apply a dab of clear nail polish to them. This will help prevent them from unravelling. Let them dry before your next session. 

![Put nail polish over the thread](/static/cp/projects/fabric-friend/polish-over-thread.jpg)

### ~

## Put the two pieces together

Sew the two pieces of fabric together. In the example Fabric Friend, the quadropus legs were sewn first because they would be the most difficult to stuff with fill. Sew and stuff them. 

The whip stitch and the back stitch are two common ways of joining material. You have the option to join the two halves while reversed, then turn them inside out to stuff. This method makes most of the stitching invisible, but it is trickier and is not a good idea for beginners. If you do reverse your work, be sure to allow a big enough opening at the end to get the Circuit Playground Express itself out of the reversed inside. The sample quadropus was not reversed. 

First, knot off your thread. See the video at **1:41** for tips on that and more:

https://www.youtube.com/watch?v=hbYOFt85KjQ&t=320s 
<br/>

When starting to join two pieces of fabric, begin inside one of them. That way, the knot is hidden. 

![Start the stitch inside the two pieces](/static/cp/projects/fabric-friend/start-stitch-inside.jpg)

### The back stitch

This is a “one step forward, half a step back” stitch. You make a stitch, then come back to start the next stitch in the middle of the previous one. This forms a tight line of stitches that holds all kinds of fill well. 

One step forward: 

![The forward step of the back stitch](/static/cp/projects/fabric-friend/back-stitch-forward.jpg)

Half a step back:

![Half a step back of the stitch](/static/cp/projects/fabric-friend/back-stitch-half.jpg)

### The whip stitch

Come up through both pieces of material, then over the outside and back up again. Here, it would be up through red then yellow, then outside yellow and red, then back up through red then yellow.

![Whip stitch example](/static/cp/projects/fabric-friend/whip-stitch.jpg)

If your fabric friend has small appendages, like the legs of this quadropus, stuff them before you keep going. Also, sew a simple pocket inside for your battery. Keep in mind that with the stuffing, it will tighten up. 

## Stuffing and battery

Here, a pencil helps push fill into a narrow leg. The battery pocket has also been sewn in. 

![Push in the fill with a pencil](/static/cp/projects/fabric-friend/pencil-push-fill.jpg)

Here’s a view of the end result with the battery pocket sewn to the purple (back) side.

![Battery pocket](/static/cp/projects/fabric-friend/battery-pocket.jpg)

View from back of battery pocket.

![Battery pocket on the back](/static/cp/projects/fabric-friend/battery-pocket-back.jpg)

The thread has run out here, so it’s time to knot off the thread, and that’s best done inside the two pieces of fabric so that the knot won’t be visible. Push the needle through one layer, then exit through that same layer leaving a loop, then come back in through the loop. This will create a knot. Do that several times, and you’ll have knotted off the thread.

![Loop knot to tie off thread](/static/cp/projects/fabric-friend/loop-knot.jpg)

Stuff tricky parts of your Fabric Friend early, and leave a gap of at least two inches to insert the remaining fill. 

![Gap left open to add fill](/static/cp/projects/fabric-friend/gap-for-fill.jpg)

## Final Stitch

When you get to the end of your seam, use the method of leaving a loop in a stitch, then coming back through that loop with your needle to form a knot. Several of those will close up the seam. 

![Loop stitch at end of seam](/static/cp/projects/fabric-friend/loop-stitch.jpg)

To hide the tail, run the needle and thread through the body of the Fabric Friend. Compress it a little, then snip the thread. The tail will be hidden inside.

![Hide the tail of the thread](/static/cp/projects/fabric-friend/hide-the-tail.jpg)

## ~button /projects/wearable-neopixels/code

NEXT: Start coding!

## ~