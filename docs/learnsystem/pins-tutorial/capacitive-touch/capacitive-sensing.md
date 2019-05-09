# Capacitive touch sensing

Capacitance is the ability of some material to receive an amount of electrical charge. Some of the pins on your @boardname@ are designed to detect a change in capacitance of any conducting material connected to them. The contact area on board itself serves as conductive area for capacitive sensing.

![](/static/cp/learn/pins-tutorial/capacitive-touch/touch-press.jpg)


## Capacitors

Before we find out how your board uses capacitance to detect a pin touch, it's helpful to first understand how a capacitor works. A capacitor is a device that uses two conductive surfaces to store an electric charge. However, it has a gap between the two surfaces that insulates them from each other. The distance of the gap and the material in the gap (air, glass, mineral, etc.) isn't too much though to prevent the presence of an electric field that is strong enough to push on the charges in the surfaces.

### What makes a capacitor?

A simple capacitor uses two parallel plates of conductive material separated by an insulator. The insulator is called the _dielectric_ and is some material that will prevent electric current from passing through it. The ability for of an electric field to pass through the dielectric material is a given a meaurement value known as *ε*, called the _permittivity_. This along with the dimensions of the capacitor plates determine how much charge it can store. What matters is the area of the plates (*A*) and the distance between them (*d*). Here's an illustration of how the parts of a capacitor go together along with it's important measurments:

At first, a capacitor has an equal amount of both positive and negative charge on each plate and the The presence of an electric field (*E*) between these surfaces forces  diagram below shows a capacitor with two plates that are oppositely charged by a force of the voltage applied to them.

## Human capacitor

Your body has some ability to accept an electric charge. In the past you may have shocked yourself when touching a metal object that has an electrical path to the ground. This is because something gave you a charge such as your clothing, a blanket, or maybe a furry pet. The person in the following picture is holding a fuzzy blanket. Rubbing the blanket creates a charge on their body. When they get ready to touch the knob on the door though, the charge quickly leaves their body and jumps to the door and zap!

![](/static/cp/learn/pins-tutorial/capacitive-touch/body-static.gif)

The surface of your body acts like one of the charge plates in a capacitor. A capacitor stores electric charge on two conductive surfaces when a voltage source is appled across it.


## How a touch is detected

When you begin to touch the surface of a pin or a conductor connected to a pin you change its capacitance. At the moment you come very near the pin (almost just touching it), the capacitance of the pin changes because your body has just provided and additional charge surface making a capacitor between you and the pin's conductive surface. The microcontroller can detect and measure this added capacitance. When you actuually touch the pin, the charge goes away and won't happen until you begin a new touch to the pin.

![](/static/cp/learn/pins-tutorial/capacitive-touch/pin-capacitance.jpg)

![](/static/cp/learn/pins-tutorial/capacitive-touch/touch-capacitance.jpg)

![](/static/cp/learn/pins-tutorial/capacitive-touch/pin-touch.gif)

## Experiment: Touch a pin

---

Pretend that you've created a 3 bit analog-to-digital converter (ADC). This means that you can measure input values from `0` to `7` relative to the voltage reference (_Vref_) which is 3.3 v on your board. Generate a _sawtooth_ signal and read it as input to your 3 bit ADC. The sawtooth signal increases in voltage by `0.1` volts every `100` milliseconds until it reaches `3.3` volts. The signal then drops back to `0` and repeats.

**Setup**: Copy the following code into the editor.

```blocks
input.touchA1.onEvent(ButtonEvent.Click, function () {
    light.showAnimation(light.rainbowAnimation, 500)
    light.clear()
})
```