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

#### Plan your fabric friend

* Sketch your plan on a piece of paper first, and be sure that the narrowest parts of the creation will still allow stuffing.
* You should also have an idea of where the Circuit Playground Express and NeoPixels will be placed.

![Draw the design for your creature on paper first](/static/courses/maker/projects/fabric-friend/friend-making1.jpg)

* It’s important to also plan for where the battery pack will go. In your hand? Clipped to a loop?
* Lithium ion polymer (Lipo) batteries can often be tucked inside a small pocket that you create in the project. See the Maker Tools and Techniques chapter to learn more about Lipo batteries.

![Lipo batteries are smaller and more portable than alkaline battery packs](/static/courses/maker/projects/fabric-friend/friend-making2.jpg)

### Cut out the front and back sides

* Cut out the paper plan, trace it onto the material, and cut out two versions.
* A fabric pen will fade away after an hour or so (or with rubbing).
* You can use a regular marker pen as well, but just be sure to cut inside or outside of the markings so they won’t show.

![Cut out design from fabric](/static/courses/maker/projects/fabric-friend/friend-making3.jpg)

### Match the two sides of the Fabric Friend

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

#### Wiring tips:

* If you are planning to wire several NeoPixels together in a chain, the Ground and Power lines should connect all the way from the originating power or GND pin on the Circuit Playground Express to every positive or negative loop on the NeoPixels. If you have to start a new piece of conductive thread on the needle, try to make this transition at the eyelet of the NeoPixel so you can loop it through a number of times and get a good contact between old and new thread.
* In contrast, the middle signal/data thread needs to stop and start on either side of the NeoPixel so the signal travels through the light.
* Position the Flora NeoPixels so that the signal arrows are in the middle, and all pointing outward. In the example below I am using the A1 pin for this.

![Use a single thread to connect Ground and Power connectors, but start and stop the thread for the Signal/Data wiring between each Flora NeoPixel](/static/courses/maker/projects/fabric-friend/friend-making10.jpg)

![Be sure the arrows on the NeoPixels point away from the Circuit Playground Express](/static/courses/maker/projects/fabric-friend/friend-making11.jpg)

![The yellow signal thread runs from a pin like A1 and stops at one side of the NeoPixel and resumes on the other. This allows the signal to pass through the NeoPixel and give directions](/static/courses/maker/projects/fabric-friend/friend-making12.jpg)

### Test with Alligator Clip Wires

* When you have drawn a plan that seems promising, test it with alligator clip wires 
* Make all the connections as you expect to make them with conductive thread, do your coding, and test. It’s much better to work out problems at this stage than after having invested time into sewing the lines incorrectly. 
* Remember that the colors of alligator clip wires don’t matter in terms of functionality (they are all the same inside), but color coordinating helps keep you organized

![Test your lights using alligator clip wires before sewing the connections](/static/courses/maker/projects/fabric-friend/friend-making13.jpg)

Transfer your Wiring Diagram onto the Fabric cutout

* Copy your wiring diagram from paper to the fabric 
* Mark the position of the Circuit Playground Express and the Flora NeoPixels 
* Use a fabric pen or tailor’s chalk if you have it
* If you use a regular pen, make the markings on the inside so they don’t show

### Sew on the Circuit Playground Express

* Using normal sewing thread, secure the Circuit Playground Express to your material 
* Use some of the pin connectors that you won’t need for the conductive thread to secure the board to the material

![Position the Circuit Playground Express on the Fabric](/static/courses/maker/projects/fabric-friend/friend-making14.jpg)

* To knot thread off, you can run the needle through a stitch on the back side 
* Run the needle back through the resulting loop, repeat this process several times, and you will knot off the line

![Tying off the thread in the back](/static/courses/maker/projects/fabric-friend/friend-making15.jpg)

### Sewing the connections

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

### Tying off

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

#### Sewing Tips:

* Try to keep the stitches fairly close together, and don’t pull them too tight 
* Be certain the lines of stitching don’t touch each other 
* A fabric pen can help you sew straight, and fabric glue can keep NeoPixels in place (though keep glue in the middle of them only, not on the outside connector pins) 
* Loop the conductive thread snugly about 3-4 times around each eyelet pin on the Circuit Playground Express and the NeoPixels. It’s vital that there be a good connection between thread and pin. 
* When you end a sewing session, flip the material over, trim any tails of the conductive thread knots, and apply a dab of clear nail polish to them. This will help prevent them from unravelling. Let them dry before your next session.

![Clear nail polish helps keep the conductive thread from unravelling](/static/courses/maker/projects/fabric-friend/friend-making22.jpg)

Refer to the Sewing section of the [Maker Tools and Techniques](/courses/maker/general/maker-tools-techniques) chapter for more sewing tips and tricks. 

### Sew the two pieces of fabric together

* Using normal sewing thread, sew the front and back of the Fabric Friend together 
* Leave an opening to stuff with filling 
* In this example, the quadropus legs were sewn first because they would be the most difficult to stuff with fill 

### Stuff with filling

* Using your fill material, gently push filling into the opening of your Fabric Friend 
* If your fabric friend has small appendages, like the legs of this quadropus, stuff them first 
* You can use a pencil to help push fill into a narrow leg

![Use a pencil to stuff filling in hard-to-reach places](/static/courses/maker/projects/fabric-friend/friend-making23.jpg)

### Find a home for the battery pack

* You can sew a simple pocket on your Fabric Friend to place the battery pack 
* You can also put the battery inside your Fabric Friend, just keep in mind you won’t be able to access it, so you’ll need to disconnect the battery cable to turn off the lights

![Battery pocket side view](/static/courses/maker/projects/fabric-friend/friend-making24.jpg)

![Battery pocket back view](/static/courses/maker/projects/fabric-friend/friend-making25.jpg)

### Close the opening

* After you have finished stuffing your Fabric Friend, sew the opening closed 
* When you knot off the thread, do it inside the two pieces of fabric so that the knot won’t be visible 
* Push the needle through one layer, then exit through that same layer leaving a loop, then come back in through the loop. This will create a knot. Do that several times, and you’ll have knotted off the thread.

![Sew the opening closed](/static/courses/maker/projects/fabric-friend/friend-making26.jpg)

![Knot off the end of the thread](/static/courses/maker/projects/fabric-friend/friend-making27.jpg)


To hide the tail, run the needle and thread through the body of the Fabric Friend. Compress it a little, then snip the thread. The tail will be hidden inside.

![Hide the tail of the thread inside](/static/courses/maker/projects/fabric-friend/friend-making28.jpg)

## Coding

See [Coding the Circuit Playground Express](/courses/maker/general/coding) for more information.

There are several different ideas you use to program you Fabric Friend. We’ll show you two – a Fabric Friend with predictive power, and one that you must feed to keep happy. 

### Fortune-Telling Quadropus

First, let’s code a Fabric Friend with predictive powers, kind of like a Magic Eight Ball. We’ll use a randomly chosen variable to select what face the Fabric Friend will make upon the input of On Shake. The responses might be positive, negative, or confused. See this video demo:

https://www.youtube.com/watch?v=-sgF1Fzbc9E

```blocks
let Right_Eye: light.NeoPixelStrip = null 
let Magic_8 = 0 
let Left_Eye: light.NeoPixelStrip = null 
input.onGesture(Gesture.Shake, function () { 
    Magic_8 = Math.randomRange(1, 3) 
    if (Magic_8 == 1) { 
        light.showRing(`black black black black black green green green green green`) 
        Left_Eye.setAll(0x00ff00) 
        Right_Eye.setAll(0x00ff00) 
        music.playSound(music.sounds(Sounds.MagicWand)) 
        pause(2000) 
    } else if (Magic_8 == 2) { 
        light.showRing(`purple purple purple purple purple black black black black black`) 
        Left_Eye.setAll(0x7f00ff) 
        Right_Eye.setAll(0x7f00ff) 
        music.playSound(music.sounds(Sounds.PowerDown)) 
        pause(2000) 
    } else { 
        light.showRing(`blue black black black blue orange blue orange orange orange`) 
        Left_Eye.setAll(0x0000ff) 
        Right_Eye.setAll(0xff8000) 
        music.playSound(music.sounds(Sounds.Wawawawaa)) 
        pause(2000) 
    } 
    light.setAll(0x00ffff) 
    Left_Eye.showAnimation(light.sparkleAnimation, 2000) 
    Right_Eye.showAnimation(light.sparkleAnimation, 2000) 
}) 
Left_Eye = light.createStrip(pins.A1, 1) 
Right_Eye = light.createStrip(pins.A3, 1) 
light.setAll(0x00ffff) 
Left_Eye.showAnimation(light.sparkleAnimation, 2000) 
Right_Eye.showAnimation(light.sparkleAnimation, 2000)
```

### The Very Hungry Quadropus

Now let’s code a Fabric Friend who gets hungry and irritable over time, but who can be fed to regain happiness and composure.

https://youtu.be/amhDOy34m7g

1. From the Variables Toolbox drawer, click on the Make a Variable button to make 3 variables 
2. Name them as follows: 
· Left Eye 
· Right Eye 
· Hunger 
3. From the Loops Toolbox drawer, drag an On Start block onto the Workspace 
4. From the Variables Toolbox drawer, drag out three Set blocks, and place them into the On Start block 
5. Using the drop-down menu in the Set blocks, change the variables to Left Eye, Right Eye and Hunger 
6. From the NeoPixel Toolbox drawer, drag out two Create Strip blocks onto the Workspace and place one each into the Left Eye and Right Eye Set variable blocks replacing the 0 
7. Using the drop-down menus in the two Create Strip blocks, set them to the Pins that you will be using to connect to your Flora NeoPixels (for example A4 and A7) 
8. In the two Create Strip blocks, change the value of the Pixels to 1 (there is only 1 light on each of your Flora NeoPixels)

```blocks
let Hunger: number = 0
let Right_Eye: light.NeoPixelStrip = null 
let Left_Eye: light.NeoPixelStrip = null
Left_Eye = light.createStrip(pins.A4, 1) 
Right_Eye = light.createStrip(pins.A7, 1)
Hunger = 0
```

Now that we have our Variables set up, let’s make sure we can reset our Quadropus’ hunger value. 
9. From the Input Toolbox drawer, drag an On Button A Click block onto the Workspace 
10. From the Variables Toolbox drawer, drag a Set variable block onto the Workspace and drop into the On Button Click block 
11. In the Set variable block, use the drop-down menu to select the ‘Hunger’ variable

```blocks
let Hunger: number = 0
let Right_Eye: light.NeoPixelStrip = null 
let Left_Eye: light.NeoPixelStrip = null
Left_Eye = light.createStrip(pins.A4, 1) 
Right_Eye = light.createStrip(pins.A7, 1)
Hunger = 0
input.buttonA.onEvent(ButtonEvent.Click, function () {
	Hunger = 0
})
```

Next, let’s set the value for Hunger – when we feed the Quadropus the Hunger value should go down. And we can use the Light sensor on the Circuit Playground Express to tell if we bring food up to the Quadropus’ mouth – the light will get dark. 
12. From the Loops Toolbox drawer, drag a Forever loop onto the Workspace 
13. From the Logic Toolbox drawer, drag three If blocks onto the Workspace and place them in the Forever loop 
14. From the Logic Toolbox drawer, drag three Comparison blocks into the If blocks 
Build your program to look like the following:

```block
forever(function () {
    if (input.lightLevel() < 25) {
        Hunger += -3
    }
    if (Hunger > 0) {
        Hunger = 0
    }
    if (Hunger < 0) {
        Hunger = 22
    }
})
```

* The first If statement will check if the light level goes beneath 25 (or whatever value works for the room you’re in), then subtract 3 from the Hunger variable. This way, when you put food to the Fabric Friend’s mouth, you can dim the light hitting the sensor and feed it. 
* The second If statement checks if the Hunger variable goes below zero, then Set the Hunger to zero. This is useful because otherwise you might have Hunger become -30 accidentally, and it would take a long time for the variable to get back to positive numbers. 
* Likewise, the last If statement prevents the variable from getting too large as time goes on and resets it down to 22 

Now we need to evaluate what to show when our Quadropus is feeling different levels of Hunger, and also increase the Hunger value as time goes on.

15. From the Loops Toolbox drawer, drag out another Forever loop and drop onto the Workspace 
16. From the Logic drawer, you’ll need an If Then Else block, and click on the plus “+” sign to add a blank slot for every facial expression you want your fabric friend to have 
17. From the Logic Toolbox drawer, drag comparison blocks into the If Then Else block to evaluate the different levels of Hunger. 
If you want to evaluate a range of values – for example, if Hunger is between 14 and 18, then use the Boolean AND block with 2 comparison blocks. 
Finally, we need a way for the variable Hunger to change. 
18. From the Loops Toolbox drawer, drag a Pause block at the end of the If Then Else block and set the value to 1 second (1000 ms) 
19. From the Variables Toolbox drawer, drag a Change variable block onto the Workspace and drop after the Pause block. 
That way, every second the variable will get bigger. For 13 seconds, the first statement of the If Then Else will be true. Then, for seconds 14-17 the second statement will be the true one. And so on.


Finally, it’s time to make facial expressions for each of the Fabric Friend’s states of mind. Be sure to pay attention to where the mini USB port and the JST battery connector are on the simulator so you can orient your smiles, frowns, etc. correctly. 
20. From the Light Toolbox drawer, drag Show Ring blocks to each of the If, Else If and Else clauses to set the lights of the Circuit Playground Express 
21. From the NeoPixel Toolbox drawer, drag Strip Set all Pixels blocks to each of the If, Else If and Else clauses to set the lights of the NeoPixels

Your final program may look like this:

```blocks
let Right_Eye: light.NeoPixelStrip = null 
let Hunger = 0 
let Left_Eye: light.NeoPixelStrip = null 
input.buttonA.onEvent(ButtonEvent.Click, function () { 
    Hunger = 0 
}) 
Left_Eye = light.createStrip(pins.A4, 1) 
Right_Eye = light.createStrip(pins.A7, 1) 
Hunger = 0 
forever(function () { 
    if (Hunger < 14) { 
        light.showRing(`black black black black black orange orange orange orange orange`) 
        Left_Eye.setAll(0xff8000) 
        Right_Eye.setAll(0xff8000) 
    } else if (Hunger >= 14 && Hunger < 18) { 
        light.showRing(`black black black black black black orange orange orange black`) 
        Left_Eye.setAll(0xff8000) 
        Right_Eye.setAll(0xff8000) 
        pause(100) 
        Left_Eye.setAll(0xff0000) 
        Right_Eye.setAll(0xff0000) 
        pause(100) 
        Left_Eye.setAll(0xff8000) 
        Right_Eye.setAll(0xff8000) 
    } else if (Hunger >= 18 && Hunger < 22) { 
        light.showRing(`black black black black black blue blue blue blue blue`) 
        Left_Eye.setAll(0xff0000) 
        Right_Eye.setAll(0xff0000) 
        pause(100) 
        light.showRing(`blue blue blue blue blue black black black black black`) 
        pause(100) 
    } else { 
        music.playSound(music.sounds(Sounds.Siren)) 
        light.showRing(`blue blue blue blue blue black black black black black`) 
        Left_Eye.setAll(0x00ff00) 
        Right_Eye.setAll(0x7f00ff) 
        pause(Math.randomRange(100, 200)) 
        Left_Eye.setAll(0xff0000) 
        pause(100) 
        Right_Eye.setAll(0x007fff) 
        Left_Eye.setAll(0xffffff) 
        pause(Math.randomRange(100, 200)) 
        Right_Eye.setAll(0xff00ff) 
        pause(100) 
    } 
    pause(1000) 
    Hunger += 1 
}) 
forever(function () { 
    if (input.lightLevel() < 25) { 
        Hunger += -3 
    } 
    if (Hunger < 0) { 
        Hunger = 0 
    } 
    if (Hunger > 30) { 
    Hunger = 22 
    } 
}) 
```
https://makecode.com/_LKK44DbMTLy6 

## Variations and Challenges

There is a lot of freedom with this project to create your own interactions, light designs, and sound effects. Some ideas might be: 
* Instead of hungry, how about making a fabric friend who gets sleepy when it gets dark? 
* How about making the fabric friend randomly express an emotion periodically and require soothing of some kind? Use the accelerometer or motion sensor to detect when it gets petted. 
* What about a fabric friend who needs you to applaud it? Use the sound sensor to design an audio interaction
