# Connecting LEDs

## LED polarity

LEDs are diodes which are elecronic devices that only allow current to go through them in one direction. This means that LEDs (and other diodes) have positive (+) and negative (-) sides to them. For an LED to work it needs to be connected to a voltage source with the correct side. The voltage supply side of the diode is the positive (+) side, this is called the _anode_. The negative side is called the _cathode_. 

![LED polarity diagram](/static/cp/learn/pins-tutorial/devices/led-polarity.jpg)

Because diodes are made of semiconductor material, they have a very specific voltage where they will turn on. If the supply voltage you're using is more than then turn on voltage, you need a resistor between one of the LED leads and the connection to either **GND** or the supply voltage.

## LED resistor

![LED with resisitor diagram](/static/cp/learn/pins-tutorial/devices/led-connection.jpg)

To make sure that the LED isn't damaged by too much current, the connection between it and the voltage supply needs a resistor. The amount of resistance needed depends on how much current the LED will use to be bright enough to see but not so much that it burns itself out. This is usually about 20 milliamps for most single color LEDs. To choose the right amount of resistance for the LED, you also need to know what its turn on voltage (Vf) is. A red LED uses the least amount of voltage to turn on, about 1.8 v while some blue LEDs need more than 3.0 v.

The way to decide how much resistance you need, you need to use Ohm's law for the current through the resistor. This current is the same amount that flows to the LED but the voltage across the resistor is different because the LED has a turn on voltage which you subtract from the supply voltage:

``Resistor Voltage = Supply Voltage - LED Turn On Voltage (Vf)``

To calculate the resistance needed for a 20 milliamp current for a red LED with Vf of 2.0 v:

``R = (3.3 volts - 2.0 volts) / 0.02 amps = 65 ohms``

Here's a small table of a few resistor choices for red LEDs with different Vf values:

Supply | Vf | R
- | - | -
3.3 v | 1.8 v| 75 Ω
3.3 v | 2.0 v | 65 Ω
3.3 v | 2.2 v | 55 Ω

## Related topics

[All about LEDs](https://learn.adafruit.com/all-about-leds)