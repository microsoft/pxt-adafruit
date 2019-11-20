# Make

Here's the beautiful necklace you're going to make!

![Finished Necklace](/static/cp/projects/beaded-necklace/make-splash.jpg)

Use the materials listed and follow the construction steps to create this fashion wonder.

## Materials

![Materials needed](/static/cp/projects/beaded-necklace/materials.jpg)

### Materials List

* 1 Adafruit Circuit Playground Express (https://www.adafruit.com/product/3333)
* 1 micro USB cable (not pictured, i.e. https://www.amazon.com/gp/product/B019C0BB9C)
* 1 small lipo battery (https://www.adafruit.com/product/1578) – note, these are rechargeable, so you may also want to invest in a charger for your battery too (https://www.adafruit.com/product/259)
* 4 Flora NeoPixels (https://www.adafruit.com/product/1260)
* Thin copper wire (I used 26 gauge https://www.amazon.com/gp/product/B000IJYRKW)
* Wire cutters (i.e. https://www.amazon.com/Hakko-CHP-170-Micro-Cutter/dp/B00FZPDG1K)
* Tweezers or needle nose pliers (i.e. https://www.amazon.com/SE-LF01-Professional-Quality-Needle/dp/B001BQF1AQ) 
* 3 strands (40 beads each) of beads – I used 6mm glass beads 
* Ribbon – to tie the ends of the necklace 
* Double-sided tape – to tape on the battery pack

Note: I also use a piece of fabric on top of my working surface so that my beads don’t roll around too much.

## Make your wires

* With the wire cutters, cut the following pieces of copper wire:

>* (6) pieces of 7 inch (18 cm) wire - these will be used for Power (**3.3V**) and Ground (**GND**), and for the end loop of our necklace 
>* (4) pieces of 3 inch (7.5 cm) wire – these will be used for the signal or the data

![Roll and pieces of wire](/static/cp/projects/beaded-necklace/copper-wire.jpg)

## Loop the wires through the pins

* Loop the ends of 4 of the long pieces of wire around the following pins on the Circuit Playground Express. When looking at the board with the battery port at the top:

>* **GND** on the top right (1 o’clock) 
>* **3.3V** on the right (3 o’clock) 
>* **VOUT** on the top left (11 o’clock)
>* **GND** on the left (9 o’clock)

![Pins used for the necklace](/static/cp/projects/beaded-necklace/cpx-pins.jpg)

* When you’re looping the ends around the pins, wrap them around securely at least twice to form a good connection. Use the pliers to pull the ends tight and twist any extra length around the wire.

<WireLoop1.jpg>

<WireLoop2.jpg>

<4wires.jpg>

* Now loop the ends of 2 of the short pieces of wire around the following pings on the Circuit Playgrounds Express:

* A6 
* A1

<CPXpinsA1A6.jpg>

* Use the pliers to loop the wire around the pin holes at least twice tightly to form a secure connection

<6wires.jpg>

* Thread 3 beads on the A1 and A6 wires 
* Thread 6 beads on the Ground and Power wires

Note: Bend the wires so your beads don’t fall off while you’re working

<6WireBeads.jpg>

Now, attach the wires to the Flora NeoPixels.

* First loop the end of the A6 wire to the Signal In à pin on the Flora

<A6Flora.jpg>

* Use the pliers to loop the wire around the pin hole at least twice tightly to form a secure connection 
* Use the wire cutters to clip off any excess wire 
* Connect the GND wire at the top right to the – pin on the top of the Flora 
* And connect the 3.3V wire at the right to the + Pin on the bottom of the Flora 
* Use the pliers to loop the wire around the pin holes at least twice tightly to form a secure connection. But do not cut the wires.

<RightSideFlora.jpg>

* Now loop the end of the A1 wire to the Signal In à pin on the Flora 
* Use the pliers to loop the wire around the pin holes at least twice tightly to form a secure connection 
* Use the wire cutters to clip off any excess wire 
* Connect the VOUT wire at the top left to the + Pin on the top of the Flora 
* And connect the GND wire at the left to the – Pin on the bottom of the Flora 
* Use the pliers to loop the wire around the pin holes at least twice tightly to form a secure connection. But do not cut the wires.

<BothSidesFlora.jpg>

Now is a good time to test that your lights are connected correctly and working. 

* Connect your Circuit Playground Express to your computer by inserting one end of the micro USB cable into the silver port on the board, and the other end of the USB cable into your computer. 
Note – Be careful not to touch the wires while the Circuit Playground Express is plugged in, and make sure your wires aren’t crossed over each other. 
* If the lights don’t immediately all turn green, press and release the Reset button in the middle of the board to turn all the lights green

<GreenLights.jpg>

* Open this program (https://makecode.com/_MtgXgUKHhX1o) in your browser, and click Edit 
* Then click on the Download button to download the code to your Circuit Playground Express 
* Copy the circuitplayground-NecklaceTest.uf2 file from your Downloads folder to the CPLAYBOOT drive on your computer

<Download.jpg>

You should see all your lights turn pink. If you don’t, check the connections to make sure the wires are securely looped around the pin holes. Also check that the right pins are connected.

<NecklaceTest.jpg>

* Disconnect your Circuit Playground Express from the computer 
* Add 1 more Flora NeoPixel to each side of your necklace following the previous pattern: 3 beads for the Signal wire, and 6 beads for Ground and Power wires. 
* You will need to use the last 2 short pieces of wire to connect the 2 Flora NeoPixels together via the **Signal Out -->** and **Signal In -->** pins.

<SecondFlora.jpg>

* This time, use the wire cutters to cut off the excess wire from the Ground and Power wires as well.

<TrimWire.jpg> 

<4Floras.jpg>

* Using the last 2 pieces of long copper wire, string each of them through the last hole on the 2 outer Flora NeoPixels

<OuterWires.jpg>

* Loop the wire around the pin hole once just to ensure it stays in place 
* String about 10 beads on each side of the wire 
* And loop the ends of the wire around itself to form a closed circle 
* Don’t worry if there’s a section of bare wire exposed – we’ll attach the ribbon there

<WireLoop.jpg> 

<FinalBeaded.jpg>

* Cut 2 lengths of about 20 inches of ribbon 

<Ribbon.jpg>

* Fold ribbon in half and loop around the end of the beaded copper wire 
* Tie in a knot to ensure the ribbon won’t fall off.

<RibbonKnot1.jpg> 

<RibbonKnot2.jpg> 

<RibbonKnot3.jpg>

* Attach the lipo battery cable to the battery port on the Circuit Playground Express. Note that the battery connection does fit in one way – with the groove at the top

<Battery.jpg>

* Using a piece of tape, tape down the battery cable to the back of the Circuit Playground Express so a minimum of the battery cable is showing 

<BatteryCable.jpg>

* Using a piece of double-side sticky tape, affix the lipo battery to the back of the Circuit Playground Express, positioning it to hide the wires 

<BatteryTape.jpg>

Necklace Back: 

<NecklaceBack.jpg>

* To test that all 4 Flora NeoPixels are working correctly, connect your Circuit Playground Express to your computer via the micro USB cable 
* Open back up the same NecklaceTest program you were using before in MakeCode 
* This time, change the number of pixels on each of the A1 and A6 light strips to 2 (instead of 1)

```blocks
let Anim: light.NeoPixelAnimation = null
let LeftLights = light.createStrip(pins.A1, 2)
let RightLights = light.createStrip(pins.A6, 2)
light.setBrightness(100)
LeftLights.setBrightness(100)
RightLights.setBrightness(100)
```

<NecklaceTest.png> 

* Click the Download button to download the program to your Circuit Playground Express. 
* All 4 Flora NeoPixel lights should be lighting up pink!

![Front view of necklace](/static/cp/projects/beaded-necklace/necklace-front.jpg)

* If you don’t see all 4 NeoPixels lighting up, check the connections to make sure the wires are securely looped around the pin holes, and that the correct pins are connected
