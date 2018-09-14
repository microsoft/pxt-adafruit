# Calculator Parking Garage

https://www.youtube.com/watch?v=fdGwZeJ5ffg&feature=youtu.be 
<br/>

This project utilizes the @boardname@ infrared output to model real-world needs. The input of one @boardname@ light sensor being dimmed tells it to send an infrared signal to the other two. One raises and then later lowers a security gate, and the other @boardname@ adds a light to the NeoPixel display to indicate an additional car in the tally. When a car exits, the @boardname@ keeping count gets its light sensor dimmed, and that input tells it to turn off one NeoPixel so that the tally is accurate. Whether you build a garage or some other creation where infrared can be used to tally, move, or illuminate, you will get to plan, construct, and code like an engineer. This project is also a great opportunity to push your ingenuity with cardboard construction creativity.

## Variations and Challenges

What other kinds of processes would benefit from automation, wireless communication, and keeping a tally? Teams can use the design thinking process to identify a need, ideate and plan, get feedback from peers, then fabricate and model.

Work with the code below that tallies the total number of cars currently in the garage. Can you create a system that counts past ten? Maybe use a variable to make all the NeoPixels flash once for each count in the tens place. Twenty-six might be two orange flashes, then graphing six blue NeoPixels.

Use 3D printing, laser cutting, or other methods to fabricate cars or other features.

Push your cardboard construction skills by making a bridge between two towers or other ambitious elements.

## Making

### Basic materials

* Cardboard
* Hot glue gun
* Cardboard cutter
* 180 degree servo motor
* Alligator to male connector wires
* 3 - @boardname@

### Construction

Use sketches to help you plan your structure, and find images of interesting real buildings if you need more inspiration. Keep in mind that the @boardname@ broadcasting the the infrared signal will need to be facing the ones that receive it. Check signal reception before possibly obstructing the signal. The sample garage utilizes cardboard score bends and support flanges for the central tower, gusset triangles to support the second and third floors, and improvised stands for the recycled plastic pieces that two of the @boardname@ are taped to. See [Tools and Techniques](/courses/making/maker-tools-techniques) for more on working with cardboard.

![Top level of garage](/static/courses/making/projects/calculator-garage/garage-top-level.jpg)

![Center level of garage](/static/courses/making/projects/calculator-garage/garage-center-level.jpg)

![Bottom level of garage](/static/courses/making/projects/calculator-garage/garage-bottom-level.jpg)

Three key reminders: the @boardname@ sending the signal the gate needs to be positioned so that an incoming car dims its light. The servo motor serving as the security gate will require some experimenting to get the arm to be positioned correctly. Both the @boardname@ that operates the security gate and the one that keeps the count need to be facing the one sending the signal at the entrance gate.

## Coding

For this project we will need the gate entry @boardname@ to send an IR signal to a second device to trigger the gate to raise, and a signal to a third device to tell it to add a NeoPixel in order to keep the tally of cars in the garage. Let’s call these the **Send Unit**, the **Gate Unit**, and the **Tally Unit**.

Let’s start with the **Send Unit**. When a car drives to the garage entrance, the Send Unit will be positioned so that the light hitting it is dimmed by the car. This dimming will be the input that triggers the Send Unit to send its infrared signal to the Gate Unit and the Tally Unit. The ``||network:infrared send number||`` block either needs an actual number in it, or else one of the light lozenges (these lozenges contain the numeric code that represents the color, so it’s actually a number that’s being sent).

Here is some sample code utilizing the ``||input:light level||`` input, a conditional statement, and an infrared broadcast. Because the ``||input:light level||`` is in the ``||loops:forever||`` loop, the @boardname@ will be continuously measuring the light exposure. We can read this code as, “Set all NeoPixels to read. Forever check to see if the Light Level is less than 25. If the Light Level is less than 25, then pause briefly, send a signal with the number 1 in it, turn all NeoPixels to green, keep the NeoPixels green for 3 seconds, then turn the NeoPixels red again (assuming the light level is now 25 or higher)."

```blocks
light.setAll(0xff0000)
if (input.lightLevel() < 25) {
    pause(200)
    network.infraredSendNumber(1)
    light.setAll(0x00ff00)
    pause(3000)
}
```

Next is the **Gate Unit**. Its code will be in an ``||network:on infrared received||`` block. This block keeps the @boardname@ continuously looking for an infrared signal, which is always a number. When you introduce this block to the Workspace, a variable called ``num`` is automatically created. In the classroom setting, there could be various infrared numbers being broadcast, so we’ll use a conditional block to specify which number should trigger the code.

Here is some sample code. You will need to experiment with different values for the servo positions depending on how the servo is oriented. We can read this code as saying, "On start, turn all NeoPixels red. Then, continuously look out for infrared signals. If the infrared signal you receive is the number 1, then turn all NeoPixels green, raise the servo arm to 180 degrees, keep it there (pause) for 3 seconds, then lower the servo arm to 90 degrees and turn the lights red again."

```blocks
network.onInfraredReceivedNumber(function (num) {
    if (num == 1) {
        light.setAll(0x00ff00)
        pins.A1.servoWrite(180)
        pause(100)
        pins.A1.servoWrite(90)
        light.setAll(0xff0000)
    }
})
light.setAll(0xff0000)
```

Finally, we have the **Tally Unit**. This unit’s job is to keep count of the number of cars in the garage by adding or subtracting NeoPixels from the display. It will use the input of the infrared signal sent by the Gate Unit to raise the number of NeoPixels, and it will use the input of the light hitting it being dimmed by departing cars to subtract NeoPixels.

We’ll need to create a variable to store the whatever the current tally of cars is (remember that a variable is like a storage bin; we’ll start with an empty bin and then add to it). A name like ``Car_Tally`` for the variable will help remind us of what we’re storing in it.

We can read this code as saying, ``||loops:on start||``, set the variable ``Car_Tally`` to `0` (also set it to `0` in ``||input:on button A click||``). If an infrared signal number is received, and if that number equals 1, then increase the variable ``Car_Tally`` by `1`. Forever graph (light up) whatever number is in the ``Car_Tally`` variable up to `10` (remember that the graph block works like a fraction. So, if the ``Car_Tally`` variable rises to 3, for example, it will light up 3 of 10 NeoPixels). If the light level hitting the Tally Unit drops below `25`, then lower the variable ``Car_Tally`` by -1 (which will then affect the ``||light:graph Car Tally up to 10||`` block). Finally, forever check to see if the variable ``Car_Tally`` drops below `0`; if it does, then reset it to `0` (if somehow there is a misreading of the light input, we don’t want the garage to think it has negative cars in it).

```blocks
let Car_Tally = 0
input.buttonA.onEvent(ButtonEvent.Click, function () {
    Car_Tally = 0
})
network.onInfraredReceivedNumber(function (num) {
    if (num == 1) {
        Car_Tally += 1
    }
})
Car_Tally = 0
forever(function () {
    if (Car_Tally < 0) {
        Car_Tally = 0
    }
})
forever(function () {
    light.graph(Car_Tally, 10)
    if (input.lightLevel() < 25) {
        pause(1000)
        Car_Tally += -1
    }
})
```