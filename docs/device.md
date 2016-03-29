# Device

All the bits and pieces that make up your BBC micro:bit

![](/static/mb/device-0.png)

### Lights

### What are the red lights on the front?

The red lights are [LEDs](/microbit/device/screen) (light emitting diodes) and form a 5 x 5 grid. They can be set to on/off and the brightness can be controlled.

### What is the yellow light on the back of the micro:bit?

It is the status LED. It flashes yellow when the system wants to tell the user that something has happened.

### Buttons

### What are the buttons for?

Buttons A and B are a form of input. They detect when the button is being pressed. When you press one of the buttons, it completes an electrical circuit. The micro:bit can detect either of its two buttons being pressed and un-pressed and be programmed to act on that or send the information to another device.

Button R on the back of the micro:bit is a system button. It has different uses.  When you have downloaded and run your code onto your micro:bit, press Button R to restart  and run your program from the beginning.

When you plug in your micro:bit, it should appear as MICROBIT. If you accidentally hold down the reset button as you’re plugging in your micro:bit, the micro:bit will appear as a MAINTENANCE drive instead of MICROBIT. This is known as maintenance mode.**

To continue programming your micro:bit YOU MUST unplug your USB and reconnect it. Check that the drive now shows as MICROBIT.

**Use with caution. If you click on the drive while it shows as MAINTENANCE, you can see which version of firmware you have running on your micro:bit. Firmware on your micro:bit should be up-to-date already. You can find the version of firmware in the 'version.txt' file on the micro:bit. Further information on the firmware can be found here:

https://developer.mbed.org/platforms/Microbit/#firmware

### Compass

### Why is there a compass on the micro:bit?

The compass can detect magnetic fields such as the Earth’s magnetic field. As the micro:bit has this compass, it is possible to detect the direction it is moving in. The micro:bit can detect where it is facing and movement in degrees. This data can be used by the micro:bit in a program or be sent to another device.

### Accelerometer

### Why is there an accelerometer on the micro:bit?

There is a an accelerometer on your micro:bit which detects changes in the micro:bit’s speed. It converts analogue information into digital form that can be used in micro:bit programs. Output is in milli-g. The device will also detect a small number of standard actions e.g. shake, tilt and free-fall.

### PINS

### What are the rings labelled 0, 1, 2 on the bottom edge of the micro:bit?

These are labels for the input/output pins P0, P1, P2, which you can attach external sensors to such as thermometers or moisture detectors. The pins can be a form of input or output. You can read more about large and small pins [here](/microbit/device/pins).

### How do I connect the micro:bit to my computer?

It can be connected to your computer or device with a micro USB. Data can be sent and received between the micro:bit and the computer so programs can be downloaded from Windows and Macs onto the micro:bit via this USB data connection. You can read more information on how to run scripts on your micro:bit [here](/microbit/device/usb), and about the error messages you might get [here](/microbit/device/error-codes).

### Batteries

### How do I power my micro:bit?

When your micro:bit  is connected to your computer with the micro USB, it doesn’t need another power source.  When your micro:bit isn’t connected to your computer, tablet or mobile, you will need 2 x AAA 1.5 V batteries to power it.

### 3V GND

### What are the rings labelled 3V and GND?

The pins labelled 3V and GND are the power supply pins. You can attach an external device such as a motor to these and power it using the battery or USB.

### What is a Bluetooth Low Energy Antenna?

You will see this labelled BLE ANNTENA on the back of your micro:bit. It is for a messaging service, built for the Internet of Things so that devices can talk to each other. The micro:bit is a peripheral device which can talk to a central device like a smart phone or tablet that has Bluetooth Low Energy (BLE). The micro:bit can send signals and receive signals from a central device so another BLE device can control the micro:bit or the micro:bit can control another BLE device.

### What is Bluetooth Low Energy?

Bluetooth wireless technology was developed as an alternative to data cables and allowed wireless communication between devices such as PCs, smartphones and tablets. Bluetooth® Smart or Bluetooth Low Energy is a power-friendly version of Bluetooth wireless technology.

### What is the Internet of Things?

The Internet of Things (IoT) was first talked about more than 15 years ago, when it was speculated that objects and people would be able to connect wirelessly over the internet.  Objects can be detected and controlled remotely, allowing greater integration between the physical and computer based world.  It will let you to remotely control your alarm system, thermostat or lights in your home. It has many applications in different fields including manufacturing, health and fitness, consumer electronics and the home.

### Technical Information

The micro:bit has been designed to be a bare-board micro controller for use by children aged 11-12. The device has been through extensive safety and compliance testing to the following standards:

### Safety

IEC 60950-1:2005 (Second Edition) + Am 1:2009 + Am 2:2013

### EMC

EN 55032: 2012

EN 55024: 2010

EN 55022:2010

EN 301 489-1 V1.9.2 (2011-09)

EN 301 489-17 V2.2.1 (2012-09)

### Radio Spectrum

ETSI EN 300 328 V1.9.1 (2015-02)

EN 62479:2010

### Chemical

Restriction of Hazardous Substances (RoHS) 2011/65/EU Annex II article 4(1)

EN71-3:2013 + A1:2014 - Migration of certain elements.

Analysis of the 163 substances of very high concern (SVHC) on the Candidate List for authorization, concerning Regulation (EC) No. 1907/2006 as published on the European Chemicals Agency (ECHA) website.

![](/static/mb/device-1.jpg)

The micro:bit device features Bluetooth Low Energy radio. The radio on the device operates in the following frequencies:

Frequency Range: 2402MHz to 2480MHz

Bluetooth Version: V4.0 Bluetooth Low Energy

### Declaration of Conformity

The document can be downloaded by clicking here for the [Declaration of Conformity](https://microbit0.blob.core.windows.net/pub/hkeghjes/declaration-of-conformity.pdf)

