# Making the NeoPixel garment

## @description Maker Project for making clothing with NeoPixels.

## ~avatar avatar

Make some clothing to light up with NeoPixels and your @boardname@

## ~
## Duration

The time required will vary greatly depending upon the scope of the project, the spacing of the NeoPixels, and the experience of the maker. The skirt in the example took about six hours to make.

## Materials 

* Flora NeoPixels
* Conductive 2 or 3-ply thread
* Normal sewing thread 
* Small needle
* Scissors
* Skirt or other garment of choice. The skirt in the example has tulle on the outer layers, which is great for diffusing the NeoPixels’ light.
* Clear nail polish

### Optional

* Fabric glue
* Fabric pen or tailor’s chalk

## Plan it!

Sketch your proposed wiring on paper. Remember that none of the lines of conductive thread can touch each other. The **GND** pins can service multiple NeoPixels, as can the **3.3V** and **VOUT** for power. The Flora NeoPixels have arrows on them, and these should point away from the @boardname@. Connect **3.3V** to the positive side of the NeoPixel on the right, a pin from **A0** - **A7** in the center, and **GND** to the negative on the left. 

If you are planning a number of NeoPixels in a chain, the **GND** and **3.3V** / **VOUT** lines should connect all the way from the originating power or **GND** pin to every positive or negative loop on the NeoPixels. If you have to start a new piece of conductive thread on the needle, try to make this transition at the eyelet of the NeoPixel so you can loop it through a number of times and get a good contact between old and new thread. The middle signal thread will stop and start on either side of the NeoPixel (see below). 

![Signal thread stops and stars at NeoPixel connections](/static/cp/projects/wearable-neopixels/middle-signal-thread.jpg)

Be sure the arrows on the NeoPixels point away from the @boardname@. 

![The arrow point away from the CPX](/static/cp/projects/wearable-neopixels/point-arrows-away.jpg)

**Important:** This view shows how the **yellow** signal thread that runs from a pin like **A0**, **A1**, etc. stops at one side of the NeoPixel and resumes on the other. This allows the signal to pass through the NeoPixel and give directions. 

![Signal thread breaks between NeoPixels](/static/cp/projects/wearable-neopixels/signal-thread-chain.jpg)

When you have drawn a plan that seems promising, test it with alligator clip wires. Make all the connections as you expect to make them with conductive thread, do your coding, and test. It’s much better to work out problems at this stage than after having invested time into sewing the lines incorrectly. Remember that the colors of alligator clip wires don’t matter in terms of functionality (they are all the same inside), but color coordinating helps keep you organized.

![Test the NeoPixels with alligator clips](/static/cp/projects/wearable-neopixels/test-with-clips.jpg)

## Sew on @boardname@

Using traditional thread, secure the @boardname@ to your material. Use some of the pin tabs that you won’t need for the conductive thread. Be sure to orient your @boardname@ so that the JST battery connection port is oriented toward where you plan to keep the battery. Also be sure to leave access to the micro USB port so that you can change your code if needed. This port can sometimes catch finer material like tulle, but a small piece of masking or packing tape solves the problem. 

![Sew on Circuit Playground through pin the port holes](/static/cp/projects/wearable-neopixels/cpx-sewn-on.jpg)

To knot thread off, you can run the needle through a stitch on the back side.

![Stitching on the backside of fabric](/static/cp/projects/wearable-neopixels/thread-backside.jpg)

Run the needle back through the resulting loop, repeat this process several times, and you will knot off the line. 

![Run through the loop and knot the thread](/static/cp/projects/wearable-neopixels/loop-and-knot.jpg)

## Stitch on the NeoPixels

Now that you have the @boardname@ securely fastened to the fabric, it’s time to use conductive thread to make the electrical connections. Using the wiring diagram you drew earlier as a guide, sew connections between the power (**3.3V**), ground (**GND**), and signal pin tabs. A simple running stitch works well. Take care that none of the lines of conductive thread touch each other. Also remember to end a line of stitching at the middle of a NeoPixel and resume with new thread on the other side. 

![Stitch the NeoPixel with signal thread](/static/cp/projects/wearable-neopixels/stitch-neopixel-signal.jpg)

You can use a single line of stitches that begin and end at eyelets on the hardware.

![Stitch from eyelet to eyelet](/static/cp/projects/wearable-neopixels/eyelet-to-eyelet.jpg)

You can also use a double line of stitches. This is more work but makes a more reliable connection. If using this method, start sewing an inch or two away from the hardware, then sew to it, leaving a tail of thread hanging out of your first stitch.

![Making a double stitch line](/static/cp/projects/wearable-neopixels/double-stitch-line.jpg)

Sew to one piece of hardware, then back to the other. At the eyelets, loop around the hole about three times, then run a stitch in through the loops, then go through the eyelet one more time. It’s vital that there's solid connection at the eyelets.

![Sew three loops around the eyelets](/static/cp/projects/wearable-neopixels/three-loop-eyelet.jpg)

Once you sew back to the starting place, you can use the tail you left sticking out to easily tie several knots. Add a dab of clear nail polish to help prevent it from unraveling. 

![Tie off thread with a knot](/static/cp/projects/wearable-neopixels/tie-off-knot.jpg)

The end result of either the single line of stitches or a double one should be lines of thread that make strong connections and that don’t touch.

![Separate thread lines not touching](/static/cp/projects/wearable-neopixels/separate-thread-lines.jpg)

## Sew the power connections

Sewing a simple pocket can be a good way to tuck away your battery pack. Lithium polymer (LiPo) batteries are often great for wearable projects since they come in various compact sizes and are rechargeable. 

![Sew up a battery pocket](/static/cp/projects/wearable-neopixels/battery-pocket.jpg)

Here you can see conductive thread running from the **3.3V** pin to the positive eyelet on the NeoPixel, another line running from pin **A4** to the center of the NeoPixel (arrows pointing away from the @boardname@), and a line running from a **GND** pin to the negative eyelet on the NeoPixel. 

![Stitch connections to the CPX](/static/cp/projects/wearable-neopixels/cpx-stitch-neopixel.jpg)

The positive and negative lines of thread each, respectively, form a continuous chain, but the signal line in the middle needs to stop and start on either side of the NeoPixel. 

![Stitch the power thread connections](/static/cp/projects/wearable-neopixels/power-thread-stitches.jpg)

For more on working with conductive thread and NeoPixels see a great video by Becky Stern of Adafruit:

https://learn.adafruit.com/flora-rgb-smart-pixels/add-more-pixels

Here’s another video resource:

https://www.youtube.com/watch?v=hbYOFt85KjQ&t=102s 
<br/>

## ~ hint

**Sewing tips**

* Try to keep the stitches fairly close together, and don’t pull them too tight.
* Be certain the lines of stitching don’t touch each other. 
* A fabric pen can help you sew straight, and fabric glue can keep NeoPixels in place (though keep glue in the middle of them only, not the sew tabs).
* Loop the conductive thread snugly about four times around each eyelet pin on the @boardname@ and the NeoPixels. It’s vital that there be a good connection between thread and pin. 
* When you end a sewing session, flip the material over, trim any tails of the conductive thread knots, and apply a dab of clear nail polish to them. This will help prevent them from unravelling. Let them dry before your next session. 

## ~

## ~button /projects/wearable-neopixels/code
NEXT: Start coding!
## ~
