# Capacitors

![CPX with capacitors](/static/cp/learn/pins-tutorial/devices/capacitors/header.jpg)

A capacitor is a device that uses two conductive surfaces to store an electric charge. However, it has a gap between the two surfaces that insulates them from each other. The distance of the gap and the material in the gap (air, glass, mineral, liquid, etc.) isn't too much though to prevent a strong enough electric field to push on electric charges to make them collect on the surfaces.

## What makes a capacitor?

A simple capacitor uses two parallel plates of conductive material separated by an insulator. The insulator is called the _dielectric_ and is some material that will prevent electric current from passing through it. The ability for of an electric field to pass through the dielectric material is a given a measurement value known as _**ε**_, called the _permittivity_. This along with the dimensions of the capacitor plates determine how much charge it can store. What matters is the area of the plates (_**A**_) and the distance between them (_**d**_). Here's an illustration of how the parts of a capacitor go together along with their important properties:

![Parts of a capacitor animation](/static/cp/learn/pins-tutorial/devices/capacitors/capacitor-device.gif)

The amount of capacitance (_**C**_) a capacitor has depends on the ability of the electric field to influence the charges on its plates, times the area of the conductive surface, divided by the distance between the plates.

`` C = ε * A / d``

Capacitance is measured in units of _Farads (F)_. Most of the capacitors used in small, modern electronic circuits are in the **microfarad (uF)** or **picofarad (pF)** range. A picofarad is really small, it's ``1 / 1000000000000`` of a Farad.

## Electric field #electric-field

At first, a capacitor has an equal amount of both positive and negative charge on each plate. The charges can't pass to the other plate due to the gap between them that insulates the plates from each other. The gap could be air or some other non-conductive material. Inside the gap, however, is an electric field (_**E**_) which directs the force from the battery to push an opposite electric charge to the plates.

![Capacitor electric field animation](/static/cp/learn/pins-tutorial//devices/capacitors/electric-field.gif)

## Charging

The presence of an electric field between these surfaces forces the charges on the plates to locate themselves closest to the direction of opposite charge. This happens until the capacitor plates are full of opposing charges. The illustration below shows a capacitor with two plates that are oppositely charged by a force of the voltage applied to them. Charges relocate and move to the plate in the direction of their attraction.

![Capacitor charging animation](/static/cp/learn/pins-tutorial/devices/capacitors/capacitor-charging.gif)

## RC time

In reality, a capacitor doesn't charge immediately. It takes time to charge due to some resistance to the current flowing to or from its plates. For any amount of voltage across the plates of a capacitor it will take some time until it becomes fully charged. Once the capacitor is fully charged, current will stop flowing to it because there's no more room to accept any new charges. A simple circuit to charge a capacitor is shown in the following diagram.

![RC circuit diagram](/static/cp/learn/pins-tutorial/devices/capacitors/rc-circuit.jpg)

A special value for a capacitor charging circuit is found by multiplying the amount of resistance to it by the capacitance. The result is a time value called the **RC time constant**. As an example, if the resistor is 20k Ohms and the capacitor is 200 pF (picofarads), the RC time constant is:

``20000 ohms * 2e-10 farads`` = ``4 microseconds``

Using the properties of charge time, we can determine that a capacitor will have more than 99% of its charge after 5 time constants, or `5 * RC` seconds. In this diagram, the first circuit shows the moment the circuit is closed. Current just starts flowing with 0 volts across the capacitor and it has a balanced charge. The second diagram shows a full charge and no current flowing after a period of 5 RC time constants.

![RC circuit diagram charging](/static/cp/learn/pins-tutorial/devices/capacitors/rc-circuit-charging.jpg)


You see in the second circuit diagram that once the capacitor is fully charged and the current stops, the voltage across it is the same as the supply voltage that provided the charge. Using the values of resistance and capacitance mentioned in the earlier example, the capacitor would charge in about 20 microseconds:

`5 * RC` = ``5 * 4 microseconds`` = ``20 microseconds``

The following graphs show how a capacitor charges and discharges over time:

![RC circuit charging graph](/static/cp/learn/pins-tutorial/devices/capacitors/rc-charge-profile.jpg)

A capacitor doesn't charge or discharge at the same rate as time goes on. The voltage across the capacitor follows a "natural" pattern over time until the capacitor is fully charged or discharged. You can tell from the graphs that the rate of charge or discharge really slows down as it approaches the ``5 * RC`` amount of time, in this case ``20 microseconds``.

A special number called _**e**_ is used to calculate the capacitor voltage at any particular moment after charging or discharging begins. This number is known as _Euler's Number_ and is used in math formulas to model behaviors of the natural world. The value of this number is approximately `2.71828` and, when combined with the _**R**_ and _**C**_ values in a charging circuit, it is used to find the voltage at the capacitor. The voltage across a capacitor is calculated using these formulas:

* Charging: ``Vc`` = ``Vin * (1 - e ** (t / (R * C)))``, where ``Vin`` is the voltage used to charge with
* Discharging: ``Vc`` = ``Vstart * (e ** (t / (R * C)))``, where ``Vstart`` is the voltage before discharge

## Experiment: Simulate charge and discharge

---

Using values for _**R**_ and _**C**_, along with Euler's number, you can chart the charge and discharge of a capacitor to see how it behaves over time. Also, multiples of the RC time constant can be matched to the voltage level to see when the capacitor is almost fully charged. For the model simulation, a value of ``20k ohms`` is used for _**R**_ and ``200pF`` is used for _**C**_. The charge and starting voltage is `3.3v`.

**Setup**: Copy the following code into the editor.

```blocks
let e = 2.71828
let R = 20000
let C = 2e-10
let Vc = 0
let Vin = 3.3
let t = 0
for (let i = 0; i < 75; i++) {
    Vc = Vin * (1 - e ** (t / (R * C)))
    t += -0.0000005
    console.logValue("Vc", Vc)
    pause(100)
}
t = 0
Vin = Vc
for (let i = 0; i < 75; i++) {
    Vc = Vin * (e ** (t / (R * C)))
    t += -0.0000005
    console.logValue("Vc", Vc)
    pause(100)
} 
```

**Test**: Run the code and switch to the data view to see the console output in the chart.

![Charge and discharge simulation](/static/cp/learn/pins-tutorial/devices/capacitors/charge-discharge-sim.jpg)

**Result**: The chart shows the charge and discharge patterns over `37.5` microseconds each. The graph shape shows how the "natural" charge and discharge rate works.

## Experiment: Charge detector

---

The charge level on a capacitor can be tracked by checking what voltage is currently on it. A digital output pin can serve as the charge source and an analog input pin can measure the voltage across the capacitor. The capacitor is charged through a resistor. In order to be able to watch the charge level change, the capacitor used is 100 uF and the resistor is from 10k ohms to 40 ohms. If you made your own [resistor](/learnsystem/pins-tutorial/devices/make-a-resistor#input-resistor), it will work well in this experiment.

### ~ hint

This experiment requires a capacitor that will charge to 100 microfarads (100uF). The best type capacitor to use is an [electrolytic capacitor](https://www.adafruit.com/product/2193). Since it's difficult to make your own capacitor that will hold that much charge, there are no instructions here on how to make one. You'll need to get one that's already made.

If a 20k ohm resistor is used with the 100 uF capacitor, the RC time constant is 2 seconds. The entire charge time then is 10 seconds over 5 time constants. Choosing a resistance value between 10k ohms and 40k ohms will give you plenty of time to watch how the capacitor charges and discharges.

### ~

**Materials**:

* (4) [Alligator clip leads](https://www.adafruit.com/product/4100)
* A [resistor](https://www.adafruit.com/product/2892) with a resistance value between 10k ohms and 40k ohms - use you own [graphite resistor](/learnsystem/pins-tutorial/devices/make-a-resistor#input-resistor)
* A [100uF capacitor](https://www.adafruit.com/product/2193)

**Setup**:

1. Connect one end of an alligator clip lead to the **(-)** lead of the capacitor (on some capacitors it's the shorter lead). Connect the other end of the alligator lead to the **GND** pin on the board.
2. Connect one end of different alligator clip lead to the **(+)** lead of the capacitor (on some capacitors it's the longer lead). Connect the other end of the alligator lead to one end of your resistor.
3. Get a third alligator clip lead and connect one end to the **(+)** lead of the capacitor also. Connect the other end of that alligator lead to the **A5** pin on the board.
4. Take one more alligator clip lead and clip it to the other end of your resistor. Clip the unconnected end of the alligator lead to the **A4** pin on the board.

![Connections for the experiment](/static/cp/learn/pins-tutorial/devices/capacitors/connections.jpg)

6. Download the following code to the board:

```blocks
pins.A4.digitalWrite(false)
input.buttonA.onEvent(ButtonEvent.Click, function () {
    pins.A4.digitalWrite(true)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    pins.A4.digitalWrite(false)
})
forever(function () {
    light.graph(pins.A5.analogRead(), 1010)
    pause(200)
})
```

**Test**: Press button **A** to charge the capacitor and watch the pixels light up to show charge level. Press button **B** to discharge the capacitor and watch the pixels turn off as the charge goes away.

**Optional Test**: Change the resistance value and repeat the test. Observe how the charge and discharge times are different from the first test.

![Charge percentage is shown on the pixels](/static/cp/learn/pins-tutorial/devices/capacitors/charging.gif)

**Result**: Pixels on the board will light up showing the level of charge on the capacitor. Each pixel represents another 10% of charge. Each pixel will take longer to light (or turn off when discharging) than the previous one as the charge rate slows down. The last pixel takes a much longer time to light up than the other pixels. This will relate to the time to charge the final 10% as seen in the flatten part of the graph from the previous experiment.
