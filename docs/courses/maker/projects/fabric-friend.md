# Fabric Friend Project

## Description

In this project, students will design and create their own “Fabric Friend” using sewing, circuitry, and coding. Creating a stuffed critter of some kind is a great fabric arts project for students 8 years and up. Once you have sewn the Fabric Friend, you can find a variety of fun and challenging ways to code it to respond to the world.

![Electronic Interactive Fabric Friend](/static/courses/maker/projects/fabric-friend/fabric-friend.jpg)

## Safety Tips

Making and using a Fabric Friend is great fun for older kids but be sure to keep this toy away from young children and pets since they could be harmed by chewing on or ingesting the battery or other electronic components.

## Time required

2-4 hours – time will vary depending upon the complexity of the creation and the skill level of the creators.

## Academic Tie-ins

* **Science**: create fabric friends that are cells, fungi, planets, or other curriculum-related entities.
* **History**: make an object, character or symbol from the past.
* **Literature**: make an object that’s important to the plot or character of a story, stitch key words or names from the story onto the fabric friend.
* **Performing Arts**: make an electronic prop that can be used in a play, or dance performance.

## Materials

See the [Maker Tools and Techniques](/courses/maker/general/maker-tools-techniques) chapter for more details on materials.

* 2-4 Flora NeoPixels – https://www.adafruit.com/product/1260
* Conductive 2 or 3-ply thread – https://www.adafruit.com/product/641
* Alligator clip wires for testing – https://www.adafruit.com/product/3447
* Normal sewing thread
* Sewing needle
* Clear nail polish
* Scissors
* Fabric of choice – felt works well and is easy to work with (for example – https://www.amazon.com/flic-flac-30cmx20cm-Assorted-Nonwoven-Patchwork/dp/B01IQN7NZW)
* Stuffing material – like cotton balls, or fiber fill (for example – https://www.amazon.com/Fairfield-PF20B-Poly-Fil-Premium-20-Ounce/dp/B00TH2E3PA)

### Optional

* Fabric scissors – these are helpful!
* Embroidery thread – for additional embellishment
* Fabric glue – to hold NeoPixels down for sewing, or for other embellishments
* Fabric pen or tailor’s chalk

## Making

Plan your fabric friend

* Sketch your plan on a piece of paper first, and be sure that the narrowest parts of the creation will still allow stuffing.
* You should also have an idea of where the Circuit Playground Express and NeoPixels will be placed.

![Draw the design for your creature on paper first](/static/courses/maker/projects/fabric-friend/friend-making1.jpg)

* It’s important to also plan for where the battery pack will go. In your hand? Clipped to a loop?
* Lithium ion polymer (Lipo) batteries can often be tucked inside a small pocket that you create in the project. See the Maker Tools and Techniques chapter to learn more about Lipo batteries.

![Lipo batteries are smaller and more portable than alkaline battery packs](/static/courses/maker/projects/fabric-friend/friend-making2.jpg)

Cut out the front and back sides

* Cut out the paper plan, trace it onto the material, and cut out two versions.
* A fabric pen will fade away after an hour or so (or with rubbing).
* You can use a regular marker pen as well, but just be sure to cut inside or outside of the markings so they won’t show.

![Cut out design from fabric](/static/courses/maker/projects/fabric-friend/friend-making3.jpg)

Match the two sides of the Fabric Friend

* If the two sides of the friend don’t quite match, you can mark extra material on one, then trim it off.

![Match the front and back of your Fabric Friend](/static/courses/maker/projects/fabric-friend/friend-making4.jpg)

We’re almost ready to plan the sewing and wiring. First, let’s review how the components will need to be connected.

Here is a look at a Flora NeoPixel:

* On the one side, with a small minus sign, is the negative tab
* Opposite, with a plus sign, is the positive
* And in the middle with arrows is the signal line

![Positive, Negative and the Signal/Data connectors on the Flora NeoPixel](/static/courses/maker/projects/fabric-friend/friend-making5.jpg)

The Circuit Playground Express has three GND (ground) pins to connect to the minus / negative tabs on the NeoPixels:

![Ground (GND) connectors on the Circuit Playground Express connect to the Negative (-) pins](/static/courses/maker/projects/fabric-friend/friend-making6.jpg)

The Circuit Playground Express has three power pins (two 3.3V and one VOUT) to connect to the plus / positive tabs on the NeoPixels:

![Power (3.3V or VOUT) connectors on the Circuit Playground Express connect to the Positive (+) pins](/static/courses/maker/projects/fabric-friend/friend-making7.jpg)


The Signal or Data connectors are pins **A0** – **A7** on the Circuit Playground Express. This diagram shows how you might sew conductive thread from the Circuit Playground Express to NeoPixels:

![You will need to connect Ground, Power, and Signal pins from the Circuit Playground Express to the Flora NeoPixels](/static/courses/maker/projects/fabric-friend/friend-making8.jpg)

Sketch your proposed wiring on paper first. Remember that none of the lines of conductive thread can touch each other, so make sure you leave plenty of space between the wires.

![Sketch out your wiring diagram on paper first](/static/courses/maker/projects/fabric-friend/friend-making9.jpg)

Wiring tips:

* If you are planning to wire several NeoPixels together in a chain, the Ground and Power lines should connect all the way from the originating power or GND pin on the Circuit Playground Express to every positive or negative loop on the NeoPixels. If you have to start a new piece of conductive thread on the needle, try to make this transition at the eyelet of the NeoPixel so you can loop it through a number of times and get a good contact between old and new thread.
* In contrast, the middle signal/data thread needs to stop and start on either side of the NeoPixel so the signal travels through the light.
* Position the Flora NeoPixels so that the signal arrows are in the middle, and all pointing outward. In the example below I am using the A1 pin for this.

![Use a single thread to connect Ground and Power connectors, but start and stop the thread for the Signal/Data wiring between each Flora NeoPixel](/static/courses/maker/projects/fabric-friend/friend-making10.jpg)

![Be sure the arrows on the NeoPixels point away from the Circuit Playground Express](/static/courses/maker/projects/fabric-friend/friend-making11.jpg)

![The yellow signal thread runs from a pin like A1 and stops at one side of the NeoPixel and resumes on the other. This allows the signal to pass through the NeoPixel and give directions](/static/courses/maker/projects/fabric-friend/friend-making12.jpg)

Test with Alligator Clip Wires

* When you have drawn a plan that seems promising, test it with alligator clip wires 
* Make all the connections as you expect to make them with conductive thread, do your coding, and test. It’s much better to work out problems at this stage than after having invested time into sewing the lines incorrectly. 
* Remember that the colors of alligator clip wires don’t matter in terms of functionality (they are all the same inside), but color coordinating helps keep you organized

![Test your lights using alligator clip wires before sewing the connections](/static/courses/maker/projects/fabric-friend/friend-making13.jpg)

Transfer your Wiring Diagram onto the Fabric cutout

* Copy your wiring diagram from paper to the fabric 
* Mark the position of the Circuit Playground Express and the Flora NeoPixels 
* Use a fabric pen or tailor’s chalk if you have it
* If you use a regular pen, make the markings on the inside so they don’t show

Sew on the Circuit Playground Express

* Using normal sewing thread, secure the Circuit Playground Express to your material 
* Use some of the pin connectors that you won’t need for the conductive thread to secure the board to the material

![Position the Circuit Playground Express on the Fabric](/static/courses/maker/projects/fabric-friend/friend-making14.jpg)

* To knot thread off, you can run the needle through a stitch on the back side 
* Run the needle back through the resulting loop, repeat this process several times, and you will knot off the line

![Tying off the thread in the back](/static/courses/maker/projects/fabric-friend/friend-making15.jpg)

Sewing the connections

* Now that you have the Circuit Playground Express securely fastened to the fabric, it’s time to use conductive thread to make the electrical connections 
* Using the wiring diagram as a guide, sew connections between the Power, Ground, and Signal pin connectors * A simple running stitch works well 
* Take care that none of the lines of conductive thread touch each other 
* Also remember to end a line of stitching at the middle of a NeoPixel and resume with new thread on the other side

![Stop and start sewing the signal thread connections to the NeoPixels](/static/courses/maker/projects/fabric-friend/friend-making16.jpg)

You can use a single line of stitches that begin and end at eyelets on the hardware.

![Single stitches](/static/courses/maker/projects/fabric-friend/friend-making17.jpg)

You can also use a double line of stitches. This is more work but makes a more reliable connection.

* Sew to one piece of hardware, then back to the other. 
* At the eyelets, loop around the hole about three times, then run a stitch in through the loops, then go through the eyelet one more time. 
* It’s vital that there be a solid connection at the eyelets.

![Double stitches](/static/courses/maker/projects/fabric-friend/friend-making18.jpg)

Tying off

* Once you sew back to the starting place, you can use the tail you left sticking out to easily tie several knots 
* Add a dab of clear nail polish to help prevent it from unraveling

![Tying off thread in the back](/static/courses/maker/projects/fabric-friend/friend-making19.jpg)

The end result of either the single line of stitches or a double one should be lines of thread that make strong connections and that don’t touch.

![Strong connections are critical](/static/courses/maker/projects/fabric-friend/friend-making20.jpg)

For more on working with conductive thread and NeoPixels see a great video by Becky Stern of Adafruit:

https://youtu.be/eGtGoPhjmcc
<br/>

Also, you can read more about it at: [Sewing more pixels](https://learn.adafruit.com/flora-rgb-smart-pixels/add-more-pixels).

![Finished sewn connections](/static/courses/maker/projects/fabric-friend/friend-making21.jpg)

Sewing Tips:

* Try to keep the stitches fairly close together, and don’t pull them too tight 
* Be certain the lines of stitching don’t touch each other 
* A fabric pen can help you sew straight, and fabric glue can keep NeoPixels in place (though keep glue in the middle of them only, not on the outside connector pins) 
* Loop the conductive thread snugly about 3-4 times around each eyelet pin on the Circuit Playground Express and the NeoPixels. It’s vital that there be a good connection between thread and pin. 
* When you end a sewing session, flip the material over, trim any tails of the conductive thread knots, and apply a dab of clear nail polish to them. This will help prevent them from unravelling. Let them dry before your next session.

![Clear nail polish helps keep the conductive thread from unravelling](/static/courses/maker/projects/fabric-friend/friend-making22.jpg)

Refer to the Sewing section of the [Maker Tools and Techniques](/courses/maker/general/maker-tools-techniques) chapter for more sewing tips and tricks. 

Sew the two pieces of fabric together

* Using normal sewing thread, sew the front and back of the Fabric Friend together 
* Leave an opening to stuff with filling 
* In this example, the quadropus legs were sewn first because they would be the most difficult to stuff with fill 

Stuff with filling

* Using your fill material, gently push filling into the opening of your Fabric Friend 
* If your fabric friend has small appendages, like the legs of this quadropus, stuff them first 
* You can use a pencil to help push fill into a narrow leg

![Use a pencil to stuff filling in hard-to-reach places](/static/courses/maker/projects/fabric-friend/friend-making23.jpg)

Find a home for the battery pack

* You can sew a simple pocket on your Fabric Friend to place the battery pack 
* You can also put the battery inside your Fabric Friend, just keep in mind you won’t be able to access it, so you’ll need to disconnect the battery cable to turn off the lights

![Battery pocket side view](/static/courses/maker/projects/fabric-friend/friend-making24.jpg)

![Battery pocket back view](/static/courses/maker/projects/fabric-friend/friend-making25.jpg)

Close the opening 
* After you have finished stuffing your Fabric Friend, sew the opening closed 
* When you knot off the thread, do it inside the two pieces of fabric so that the knot won’t be visible 
* Push the needle through one layer, then exit through that same layer leaving a loop, then come back in through the loop. This will create a knot. Do that several times, and you’ll have knotted off the thread.

![Sew the opening closed](/static/courses/maker/projects/fabric-friend/friend-making26.jpg)

![Knot off the end of the thread](/static/courses/maker/projects/fabric-friend/friend-making27.jpg)


To hide the tail, run the needle and thread through the body of the Fabric Friend. Compress it a little, then snip the thread. The tail will be hidden inside.

![Hide the tail of the thread inside](/static/courses/maker/projects/fabric-friend/friend-making28.jpg)

## Coding