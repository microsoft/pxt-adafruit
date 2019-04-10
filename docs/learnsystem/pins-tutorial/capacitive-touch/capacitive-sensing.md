# Capacitive touch sensing

Capacitance is the ability of some material to receive an amount of electrical charge. The pins on some of the pins on your @boardname@ are designed to detect a change in capacitance of any conducting material connected to them. The contact area on board itself serves as conductive area for capacitive sensing.

## Human capacitor

Your body has some ability to accept an electric charge. In the past you may have shocked yourself when touching a metal object that has an electrical path to the ground. This is because something gave you a charge such as your clothing, a blanket, or maybe a furry pet. The person in the following picture is holding a fuzzy blanket. Rubbing the blanket creates a charge on their body. When they get ready to touch the knob on the door though, the charge quickly leaves their body and jumps to the door and zap!

![](/static/cp/learn/pins-tutorial/capacitive-touch/body-static-charge.jpg)

The surface of your body acts like one of the charge plates in a capacitor. A capacitor stores electric charge on two conductive surfaces when a voltage source is appled across it. The diagram below shows a capacitor with two plates that are oppositely charged by a force of the voltage applied to them.

![](/static/cp/learn/pins-tutorial/capacitive-touch/capacitor-diagram.jpg)

The charges can't pass to the other plate due to the gap between them that insulates the plates from each other. The gap could be air or some other non-conductive material. Inside the gap, however, is an electric field (*E*) which directs the force from the battery to push the electric charge to the plates. The charge that builds is shown by the *Q* symbol by each plate.

## How a touch is detected

When you begin to touch the surface of a pin or a conductor connected to a pin you change its capacitance. At the moment you come very near the pin (almost just touching it), the capacitance of the pin changes because your body has just provided and additional charge surface making a capacitor between you and the pin's conductive surface. The microcontroller can detect and measure this added capacitance. When you actuually touch the pin, the charge goes away and won't happen until you begin a new touch to the pin.

![](/static/cp/learn/pins-tutorial/capacitive-touch/touch-press.jpg)

## Experiment: Simulate a touch press on a pin

---

Pretend that you've created a 3 bit analog-to-digital converter (ADC). This means that you can measure input values from `0` to `7` relative to the voltage reference (_Vref_) which is 3.3 v on your board. Generate a _sawtooth_ signal and read it as input to your 3 bit ADC. The sawtooth signal increases in voltage by `0.1` volts every `100` milliseconds until it reaches `3.3` volts. The signal then drops back to `0` and repeats.

**Setup**: Copy the following code into the editor.

```blocks
let e = 2.71828
let R = 1500
let C = 0.0000001
let Vc = 0
let Vin = 3.3
let t = 0
for (let i = 0; i < 100; i++) {
    Vc = Vin * (1 - e ** (t / (R * C)))
    t += -0.00001
    console.logValue("Vc", Vc)
    pause(100)
}
t = 0
for (let i = 0; i < 100; i++) {
    Vc = Vin * (e ** (t / (R * C)))
    t += -0.00001
    console.logValue("Vc", Vc)
    pause(100)
}
```
