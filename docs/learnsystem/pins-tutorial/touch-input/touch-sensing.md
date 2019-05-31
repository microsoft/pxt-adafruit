# Capacitive touch sensing

Capacitance is the ability of some material to receive an amount of electrical charge. Some of the pins on your @boardname@ are designed to detect a change in capacitance measured at the pin when conducting material connected to it. The contact area on board itself serves as part of the conductive area for capacitive sensing.

![](/static/cp/learn/pins-tutorial/capacitive-touch/touch-press.jpg)

## Changes in capacitance

ith it's important measurments:

At first, a capacitor has an equal amount of both positive and negative charge on each plate and the The presence of an electric field (*E*) between these surfaces forces  diagram below shows a capacitor with two plates that are oppositely charged by a force of the voltage applied to them.

## Human capacitor

Before we look at how touch is detected on the pins, let's see how your body acts like a capacitor.

Your body has some ability to accept an electric charge. In the past you may have shocked yourself when touching a metal object that has an electrical path to the ground. This is because something gave you a charge such as your clothing, a blanket, or maybe a furry pet. The person in the following picture is holding a fuzzy blanket. Rubbing the blanket creates a charge on their body. When they get ready to touch the knob on the door though, the charge quickly leaves their body and jumps to the door and zap!

![](/static/cp/learn/pins-tutorial/capacitive-touch/body-static.gif)

The surface of your body acts like one of the charge plates in a capacitor. A capacitor stores electric charge on two conductive surfaces when a voltage source is appled across it.


## How a touch is detected

When you begin to touch the surface of a pin or a conductor connected to a pin you change its capacitance. At the moment you come very near the pin (almost just touching it), the capacitance of the pin changes because your body has just provided and additional charge surface making a capacitor between you and the pin's conductive surface. The microcontroller can detect and measure this added capacitance. When you actuually touch the pin, the charge goes away and won't happen until you begin a new touch to the pin.

![](/static/cp/learn/pins-tutorial/capacitive-touch/pin-capacitance.jpg)

![](/static/cp/learn/pins-tutorial/capacitive-touch/touch-capacitance.jpg)

![](/static/cp/learn/pins-tutorial/capacitive-touch/pin-touch.gif)

### Capacitor charge and discharge

After a voltage is applied to a capacitor it takes time for it to charge completely. Similarly, when a charged capacitor is connected to a lower voltage, it takes some time for it to discharge. A capacitor charges and discharges over time following a pattern similar to the following graph.

![Capacitor charge and discharge pattern](/static/cp/learn/pins-tutorial/capacitive-touch/charge-discharge.jpg)

### Checking charge time

There are a few different methods to detect a pin touch but all of them use the idea of measuring charge time on the pin. A constant voltage, such as the supply voltage, is placed on the pin. The microcontroller measures the time it takes for the pin surface to reach a full charge. It remembers this as the charge time for when the pin is untouched. It may repeat this by charging and discharging the pin several times and then use an average of all the measured charge times. This is part of the process of touch _calibration_.

After calibration, the microcontroller might contunually charge and discharge the pin to see if the charge time ever changes by any significant amount. It first puts the supply voltage on the pin and waits until the pin surface is fully charged. Then, pin is then is discharged and the process repeats. In this chart, the pin is untouched and the charging voltage is shown red while the pin capacitive charge is graphed in black.

![](/static/cp/learn/pins-tutorial/capacitive-touch/charge-discharge-notouch.jpg)

If the pin capacitance increases by a large enough amount (like when you touch it with your finger), then the microcontroller will determine that the pin was touched and your program can be notified that a touch happened. The following chart shows that the charge time has increased and a the microcontroller can decide that a touch occurred.

![](/static/cp/learn/pins-tutorial/capacitive-touch/charge-discharge-touched.jpg)

## Experiment: Simulate a pin touch

---

Using an estimated value for pin capacitance of ``20`` picofarads, a charge and discharge cycle is simulated for pin **A1**. The charge level (``Vc`` graph) is plotted in Data Viewer along with the charging voltage (``Charge`` graph). A touch is detected when the charge time increases by `40` percent. To simulate a touch on pin **A1**, the total capacitance (variable ``C``) on the pin is increased by `100` picofarads in an ``||input:on touch||`` event when the pin in the simulator is pressed down. A touch and release are simulated by these blocks:

```block
input.touchA1.onEvent(ButtonEvent.Down, function () {
    C += 1e-10
})
input.touchA1.onEvent(ButtonEvent.Up, function () {
    C += -1e-10
})
```

The touch detection period is shown in a third graph call ``Touch``.

**Setup**: Copy the following code into the editor.

```blocks
input.touchA1.onEvent(ButtonEvent.Down, function () {
    C += 1e-10
})
input.touchA1.onEvent(ButtonEvent.Up, function () {
    C += -1e-10
})
let Vc = 0
let t = 0
let e = 2.71828
let R = 20000
let C = 2e-11
let Vin = 3.3
let detect = 7 * R * C
let detected = false
forever(function () {
    Vin = 3.3
    t = 0
    Vc = 0
    while (Vc < Vin * 99 / 100) {
        Vc = Vin * (1 - e ** (t / (R * C)))
        t += -0.0000005
        console.logValue("Vc", Vc)
        console.logValue("Charge", 3.3)
        if (detected) {
            console.logValue("Touch", 1)
        } else {
            console.logValue("Touch", 0)
        }
        pause(100)
    }
    if (t * -1 > detect) {
        detected = true
    } else {
        detected = false
    }
    t = 0
    Vin = Vc
    while (Vc > Vin * 1 / 100) {
        Vc = Vin * e ** (t / (R * C))
        t += -0.0000005
        console.logValue("Vc", Vc)
        console.logValue("Charge", 0)
        if (detected) {
            console.logValue("Touch", 1)
        } else {
            console.logValue("Touch", 0)
        }
        pause(100)
    }
    pause(100)
})
```

**Test**: Run the code in the simulator and switch to the data viewer (click on **Show console**) to see the console output in the chart. Let the program run for a few seconds to observe the charge / discharge pattern. Then, click and hold on the **A1** pin in the simulator for a few more seconds. Unclick the **A1** pin.

![Charge and discharge simulation](/static/cp/learn/pins-tutorial/capacitive-touch/touch-sim.jpg)

**Result**: The charge / discharge pattern shown in **Vc** graph will stretch over time while the **A1** pin is pressed. The **Touch** detection graph will show that a touch input is dectected when the charge time exceeds the regular charge time for the pin.
