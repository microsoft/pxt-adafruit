# Make a Graphite Resistor

To test out the pins on the @boardname@ we'll make our own carbon graphite resistor.

![Graphite and paper resistor](/static/cp/learn/pins-tutorial/graphite-resistor.jpg)

## Resistors

A resistor is an electical component that controls the "flow" of current in a circuit. Think of it like a faucet that controls the flow of water so that just the right amount comes out. Many resistors are made from carbon because it has a moderate amount of conductivity. Resistors are manufactured with different amounts of resistance. Some have a fixed amount of resistance and others have a variable amount. A variable resister is also called a _potentiometer_.

Resistance is measured in units of _ohms_. Perhaps you've heard of Ohm's Law:

* **Voltage** = **Current** \* **Resistance**, or **V** = **I** \* **R**
* **Current** = **Voltage** / **Resistance**, or **I** = **V** / **R**
* **Resistance** = **Voltage** / **Current**, or **R** = **V** / **I**

With the @boardname@, we'll often use it's supply voltage for our projects and experiments. This is **3.3V** and there are [some pins](https://learn.adafruit.com/adafruit-circuit-playground-express/pinouts#power-pads-4-3) that give us this voltage. If we were using a 10k ohm resistor with this supply voltage, then we'd draw a current of **I** = 3.3V / 10,000 ohms = 0.33 milliamps from the board.

## Materials

* Piece of paper (a note card works really well)
* Sharpened #2 pencil
* (3) Alligator clip leads
* Measuring ruler

## Draw the Resistor

To make a resistor, we just simply draw it on paper! Get your piece of paper (or notecard) and mark out a **4.0 cm x 0.5 cm** rectangle near the edge of the paper with the #2 pencil.

![Size of the resistor on the paper](/static/cp/learn/pins-tutorial/resistor-size.jpg)

Also, make some marks to measure the distance along the rectangle.

![Shape of the resistor on the paper](/static/cp/learn/pins-tutorial/resistor-rectangle.jpg)

Now, fill in the rectangle with the pencil. Make sure the entire rectangle is completely filled with none of the paper underneath is showing. When entire rectangle is completely dark and shiny yoy'll have a good and consistant coverage of graphite for conductivity.

![Fill in the resistor rectangle](/static/cp/learn/pins-tutorial/resistor-fill.jpg)

Get two alligator clip leads and attach them to either end of the resistor rectangle. Make sure the clips have a good "bite" over the graphite at each end. Our resistor is now ready to use!

![Attach alligator clips to the resistor](/static/cp/learn/pins-tutorial/clip-to-resistor.jpg)

## How Much Resistance?

The graphite from a #2 pencil lead will give you somewhere between **5k ohms** and **40k ohms** of resistance per centimenter. If you have a multimeter available, test your resistor and see how much resistance it has. A multimeter isn't necessary but we're curious to see how much resistance the graphite resistor gives. In our example, we have about **29k ohms** across 4.0 centimeters which means there's a good coverage of graphite. This is good value for resistance since it keeps the current draw from the @boardname@ to a safe and small amount.

![Measure the resistance with a multimeter](/static/cp/learn/pins-tutorial/multimeter-test.jpg)

## Variable Resistance

You might guess that if one of the clips is moved into the rectangle then resistance will change. That's right, it will decrease. We'll use that fact to help with some of our experiments.

![Measure the variable resistance](/static/cp/learn/pins-tutorial/variable-resistance.jpg)


