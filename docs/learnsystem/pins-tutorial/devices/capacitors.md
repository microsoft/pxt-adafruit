# Capacitors

A capacitor is a device that uses two conductive surfaces to store an electric charge. However, it has a gap between the two surfaces that insulates them from each other. The distance of the gap and the material in the gap (air, glass, mineral, etc.) isn't too much though to prevent the presence of an electric field that is strong enough to push on the charges in the surfaces.

### What makes a capacitor?

A simple capacitor uses two parallel plates of conductive material separated by an insulator. The insulator is called the _dielectric_ and is some material that will prevent electric current from passing through it. The ability for of an electric field to pass through the dielectric material is a given a meaurement value known as _**ε**_, called the _permittivity_. This along with the dimensions of the capacitor plates determine how much charge it can store. What matters is the area of the plates (_**A**_) and the distance between them (_**d**_). Here's an illustration of how the parts of a capacitor go together along with it's important measurments:

![Parts of a capacitor animation](/static/cp/learn/pins-tutorial/capacitive-touch/capacitor-device.gif)

The amount of capacitance (_**C**_) a capacitor has depends on the ability of the electric field to influence the charges on its plates, times the area of the conductive surface, divided by the distance between the plates.

`` C = ε * A / d``

Capacitance is measured in terms of _Farads (F)_. Most of the capacitors used in small, modern electronic circuits are in the **pico** Farad range. A picofarad is ``1 / 1000000000`` of a Farad.

## Electric field

At first, a capacitor has an equal amount of both positive and negative charge on each plate. The charges can't pass to the other plate due to the gap between them that insulates the plates from each other. The gap could be air or some other non-conductive material. Inside the gap, however, is an electric field (_**E**_) which directs the force from the battery to push an opposite electric charge to the plates.

![Capacitor electric field animation](/static/cp/learn/pins-tutorial/capacitive-touch/electric-field.gif)

## Charging

The presence of an electric field between these surfaces forces the charges on the plates to locate themselves closest to the direction of opposite charge. This happens until the capacitor plates are full of opposing charges. The diagram below shows a capacitor with two plates that are oppositely charged by a force of the voltage applied to them.

![Capacitor charging animation](/static/cp/learn/pins-tutorial/capacitive-touch/capacitor-charging.gif)

## RC time

In reality, a capacitor doesn't charge immediately. It takes time to charge due to some resistance to the current flowing to or from its plates. For any amount of voltage across the plates of a capacitor it will take some time until it becomes fully charged. Once the capacitor is fully charged, current will stop flowing to it because there's no more room to accept any new charges. A simple circuit to charge a capacitor is shown in the following diagram.

![RC circuit diagram](/static/cp/learn/pins-tutorial/capacitive-touch/rc-circuit.jpg)

A special value for a capacitor charging circuit is found by multiplying the amount of resistance to it by the capacitance. The result is a time value called the _RC time constant_. As an example, if the resistor is 20k Ohms and the capacitor is 20 pF (picofarads), the RC time constant is:

``20000 ohms * 2e-8 farads`` = ``4 microseconds``

Using the properties of charge time, we can determine that a capacitor will have more than 99% of its charge after 5 time constants, or `5 * RC` seconds. In this illustration, the first circuit diagram shows the moment the circuit is closed and current is flowing with 0 volts and a balanced charge on the capacitor. The second diagram shows a full charge and no current flowing after 5 RC time contants.

![RC circuit diagram charging](/static/cp/learn/pins-tutorial/capacitive-touch/rc-circuit-charging.jpg)


You will also notice that once the capacitor is fully charged and the current stops, the voltage across it is the same as the supply voltage that provided the charge. Using the values of resistance and capacitance mentioned in the earlier example, the capacitor would charge in 20 milliseconds:

`5 * RC` = ``5 * 4 microseconds`` = ``20 microseconds``

![RC circuit charging graph](/static/cp/learn/pins-tutorial/capacitive-touch/rc-charge-profile.jpg)

## Experiment: Simulate capacitor charging and discharging

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
Vin = Vc
for (let i = 0; i < 100; i++) {
    Vc = Vin * (e ** (t / (R * C)))
    t += -0.00001
    console.logValue("Vc", Vc)
    pause(100)
}
```