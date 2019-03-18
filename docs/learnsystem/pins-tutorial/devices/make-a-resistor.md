# Make a Graphite Resistor

To test out the pins on the @boardname@ we'll make our own carbon graphite resistor.

![Graphite and paper resistor](/static/cp/learn/pins-tutorial/make-a-resistor/graphite-resistor.jpg)

## Resistors

A resistor is an electical component that controls the "flow" of current in a circuit. Think of it like a faucet that controls the flow of water so that just the right amount comes out. Many resistors are made from carbon because it has a moderate amount of conductivity. Resistors are manufactured with different amounts of resistance. Some have a fixed amount of resistance and others have a variable amount. A variable resister is also called a _potentiometer_.

Resistance is measured in units of _ohms_. Perhaps you've heard of Ohm's Law:

* **Voltage** = **Current** \* **Resistance**, or **V** = **I** \* **R**
* **Current** = **Voltage** / **Resistance**, or **I** = **V** / **R**
* **Resistance** = **Voltage** / **Current**, or **R** = **V** / **I**

With the @boardname@, we'll often use it's supply voltage for our projects and experiments. This is **3.3V** and there are [some pins](https://learn.adafruit.com/adafruit-circuit-playground-express/pinouts#power-pads-4-3) that give us this voltage. If we were using a 10k ohm resistor with this supply voltage, then we'd draw a current of **I** = 3.3V / 10,000 ohms = 0.33 milliamps from the board.

## Input resistor

A low current resistior has a high amount of resistance. High resistance is needed when connecting pins for input. We can create a low current resistor by making a thin layer of graphite on a piece of paper.

### Materials

* Piece of paper (a note card works really well)
* Sharpened #2 pencil
* (3) Alligator clip leads
* Measuring ruler

### Draw the Resistor

To make a resistor, we just simply draw it on paper! Get your piece of paper (or notecard) and mark out a **4.0 cm x 0.5 cm** rectangle near the edge of the paper with the #2 pencil.

![Size of the resistor on the paper](/static/cp/learn/pins-tutorial/make-a-resistor/resistor-size.jpg)

Also, make some marks to measure the distance along the rectangle.

![Shape of the resistor on the paper](/static/cp/learn/pins-tutorial/make-a-resistor/resistor-rectangle.jpg)

Now, fill in the rectangle with the pencil. Make sure the entire rectangle is completely filled with none of the paper underneath is showing. When entire rectangle is completely dark and shiny you'll have a good and consistant coverage of graphite for conductivity.

![Fill in the resistor rectangle](/static/cp/learn/pins-tutorial/make-a-resistor/resistor-fill.jpg)

Get two alligator clip leads and attach them to either end of the resistor rectangle. Make sure the clips have a good "bite" over the graphite at each end. Our resistor is now ready to use!

![Attach alligator clips to the resistor](/static/cp/learn/pins-tutorial/make-a-resistor/clip-to-resistor.jpg)

### How Much Resistance?

The graphite from a #2 pencil lead will give you somewhere between **5k ohms** and **40k ohms** of resistance per centimenter. If you have a multimeter available, test your resistor and see how much resistance it has. A multimeter isn't necessary but we're curious to see how much resistance the graphite resistor gives. In our example, we have about **29k ohms** across 4.0 centimeters which means there's a good coverage of graphite. This is good value for resistance since it keeps the current draw from the @boardname@ to a safe and small amount.

![Measure the resistance with a multimeter](/static/cp/learn/pins-tutorial/make-a-resistor/multimeter-test.jpg)

### Variable Resistance

You might guess that if one of the clips is moved into the rectangle then resistance will change. That's right, it will decrease. We'll use that fact to help with some of our experiments.

![Measure the variable resistance](/static/cp/learn/pins-tutorial/make-a-resistor/variable-resistance.jpg)

## Output resistor #output-resistor

A high current resistor has a low amount of resistance. A resistor with a low amount of resistance is used with a pin output circuit. We can use graphite again but this time we need more of it to allow a larger amount of current to flow. Fortunately, we can again use a #2 pencil for this.

### Materials

* (4) #2 pencils
* (3) Alligator clip leads
* Pencil sharpener
* Wire cutter or scissors
* Tape or rubber band

### Pencil resistor

A common experiment for pin output is powering an LED. With a **3.3V** output voltage for the board, a safe amount of resistance to control current through an LED is about 80 ohms. Due to the thickness and length of the graphite, the resistance of the lead in a #2 pencil from one end to the other is about 20 - 30 ohms. If we connect 4 pencils together in series we can make a resistor that will keep the output current for an LED at to a safe amount.

### Sharpen the pencil ends

Find 4 full length #2 pencils. If they have and eraser on one end, cut off the eraser part with a wire cutter or scissors.

![Cut off pencil eraser end](/static/cp/learn/pins-tutorial/devices/cutoff-eraser.jpg)

Sharpen both ends of each pencil so that a nice amount of lead is showing.

![Sharpen pencil](/static/cp/learn/pins-tutorial/devices/sharpen-pencil.jpg)

### Connect the pencils

Now, connect the pencils in a series using 3 alligator clip leads. Use one alligator clip lead to connect each pencil end with the end of another.

![Pencils connected with alligator clips](/static/cp/learn/pins-tutorial/devices/connect-pencils.jpg)

### Test the resistance

If you have a multimeter available, turn it on and set it to the lowest range for measuring ohms. Connect the test leads to each end of the pencil resistor. What do you see for a resistance value?

![Multimeter test for resistance](/static/cp/learn/pins-tutorial/devices/test-resistance.jpg)

If your measurement less 80 ohms, then add another pencil to the series. If the ohms measured is more than 130 ohms, you can remove one of the pencils in the resistor series.

### Bundle the resistor

Use some tape or a rubber band to bundle the resistor like you see in the picture below. Make sure you stagger the ends a little to keep the alligator clips from touching each other.

![Pencil resistor bundle](/static/cp/learn/pins-tutorial/devices/resistor-bundle.jpg)

You can quickly try out the resistor with an [LED](https://www.adafruit.com/category/90
) by [connecting](/learnsystem/pins-tutorial/devices/led-connections) them in series between the **3.3V** and **GND** pins on the board.

![Test the resistor with an LED](/static/cp/learn/pins-tutorial/devices/led-resistor-test.jpg)

### ~ hint

If you're using your resistor for a classroom project or with a group of friends, make just one pencil resistor and share it with others.

### ~

