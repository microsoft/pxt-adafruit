# Gondola Project

## Description

Constructing this gondola is a fun way to put a continuous servo motor to work. Run twine between two sturdy objects, then create a vehicle to traverse the gap. Part of the challenge is to balance the weight of the battery pack so that the arm the gondola hangs from is perpendicular to the ground. Students can shift the weight off to one side, or they can be challenged by engineering other solutions (think of the off-set arms that ski lifts often employ). Inputs like sound, infrared signal, or light can get the gondola in motion and can trigger other outputs, like light and sound sequences.

https://youtu.be/eZxoYGV4wBw

## Time required

| Hours |
|-|
| ![1.5 to 2.0 hours on a 4 hour time scale](/static/courses/maker/projects/common/1-5-to-2-0-hours.png) |
<br/>
About 1.5 - 2 hours.

## Academic tie-in ideas

* **Literature**: Create a figure to represent a literary character to ride your gondola. Use pauses, changes in speed, lights, sound, and your narration to convey the character’s development and journey over time.
* **Math / Physics**: Make gondolas with different diameter wheels; do you imagine some will travel faster than others? Why or why not? Explain your prediction, run tests, then explain your observed results.

## Materials

See the [Maker Tools and Techniques](/courses/maker/general/maker-tools-techniques) chapter for more details on materials.

* Cardboard
* Cardboard cutter
* Twine or string
* Glue gun and glue sticks
* A protractor, drawing compass, or other circular items about 2-4 inches in diameter (two of different sizes)
* Continuous rotation servo motor
* Alligator clips to male connectors

## Making

### Create the Gondola wheels

The gondola wheel will consist of two larger diameter cardboard circles that will act as guides. Sandwiched in-between will be a smaller wheel that will actually roll on the twine. Depending on the thickness of your twine and cardboard, you may need two small circles inside. The key is that that the larger circles be wide enough apart to not impair movement by grabbing onto the twine, but that they also not be so wide apart that there is a lot of play for the twine to wobble on.

1. Either trace circular objects or use a drawing compass to make circles on your cardboard. The outer guide circles might be 2.5 inches while the inner circle is 2 inches in diameter.

![Trace out the Gondola wheels](/static/courses/maker/projects/gondola/gondola-making1.jpg)

![Cut out the  Gondola wheels](/static/courses/maker/projects/gondola/gondola-making2.jpg)

2. Hot glue the three circles (or possibly four if you have two small inner ones) so that the larger ones sandwich the smaller, with everything centered.

### Create the arm of the Gondola 

3. Cut out the hanging arm of your gondola. An arm that is a rectangle of 1” x 10” should work well. You’ll want it to have some rigidity, so either trace the arm and cut a second one to glue on later, or else have popsicle sticks to glue onto it, or do both.

![Cut out your Gondola arm from cardboard](/static/courses/maker/projects/gondola/gondola-making3.jpg)

### Create a place for the Servo Motor on the arm

4. Before gluing the cardboard arms together, take your continuous rotation servo motor and trace its base about half an inch from one end of one cardboard arm. 
5. Using a craft knife, cut out the rectangle you have traced. Cut on or just outside the pencil lines so that you’re making an opening a bit bigger than the servo motor body. 
6. Don’t cut or trace the second hole yet. Instead, hot glue the two cardboard arms together. 
7. Cut the hole through the second cardboard arm using the first one as a guide. Waiting and cutting it this way helps ensure that the two openings are the same size and are aligned.

![Cut a hole for the servo motor in the Gondola arm](/static/courses/maker/projects/gondola/gondola-making4.jpg)

### Attach the Servo Motor

8. Insert the servo motor wires through the hole, then fit the servo body into the hole.

![Insert the servo motor into the arm of the Gondola - edge view](/static/courses/maker/projects/gondola/gondola-making5.jpg)

![Insert the servo motor into the arm of the Gondola - flat view](/static/courses/maker/projects/gondola/gondola-making6.jpg)

9. Wrap the servo motor with a layer of masking or painter’s tape. This will make extracting it from the glue at the end of the project easier.
10. Apply hot glue to the back of the servo motor where it meets the cardboard. Avoid getting hot glue on the wires and on the servo body itself. Also avoid touching the tip of the hot glue gun to the wires. (If you accidentally melt the plastic wire housing, be safe and discard that servo motor).

If you decide your cardboard arm may not be as stiff as you’d like, this is a good time to glue on a popsicle stick or two for added rigidity.

![Popsicle sticks to reinforce Gondola arm](/static/courses/maker/projects/gondola/gondola-making7.jpg)

### Attach the Servo Motor Arm/Horn

Many projects don’t require that you screw the servo motor horn into the servo, but the gondola will probably put enough strain on the horn that you want to secure it with a screw. Use the shorter screw that comes with your servo motor. It’s best to use the disk-shaped servo horn because it has the largest surface area for the hot glue.

![Servo arm attached](/static/courses/maker/projects/gondola/gondola-making8.jpg)

### Attach the Servo to the Gondola wheel

Apply a ring of hot glue to the center of one side of the cardboard wheel. Avoid getting it in the very center since this will get glue in the screw head and may make it difficult to operate later.

![Put glue on the Gondola wheel](/static/courses/maker/projects/gondola/gondola-making9.jpg)

Attach the horn and servo to the wheel. If you aren’t using the circular horn, just make sure that the servo motor screw is centered on the wheel and that it doesn’t contact the glue.

![Attach Gondola wheel to servo](/static/courses/maker/projects/gondola/gondola-making10.jpg)

Connect your servo motor to the Circuit Playground Express with three alligator clips to male connector wires, and connect the clips to the **GND**, **3.3V**, and **A1** pins. This is a good juncture at which to code the Circuit Playground Express since it is easier to connect it to your device before you attach things further. Skip ahead to the [Coding](/courses/maker/projects/gondola#coding) section, or else continue here before coding. 

### Attach Circuit Playground Express

Use a piece of looped tape to attach the Circuit Playground Express to the gondola arm. How you attach your battery pack will depend on the weight of the pack you’re using. It will need to be on the wheel side of the arm (not the side with the servo motor wires coming out). Try taping it onto the arm one way, then turn it perpendicular and tape it that way. Hang the wheel off your finger to test for balance. Does one battery orientation let the cardboard arm hang more vertically than the other?

![CPX attacthed to Gondola arm](/static/courses/maker/projects/gondola/gondola-making11.jpg)

You can also fabricate gusset braces and a small shelf to further offset the battery’s weight if that will help balance.

![Shelf and its brace glued to the Gondola arm](/static/courses/maker/projects/gondola/gondola-making12.jpg)

![Full Gondola arm with shelf](/static/courses/maker/projects/gondola/gondola-making13.jpg)

![Battery pack sitting on the shelf](/static/courses/maker/projects/gondola/gondola-making14.jpg)

Use tape to connect the battery pack and Circuit Playground Express to the gondola, and pins **A1** or **A2**, **GND**, and **VOUT** to the continuous servo.

Now, code, test, and iterate!

## Coding

See [Coding the Circuit Playground Express](/courses/maker/general/coding) chapter for more information.

This sample code first uses an ``||loops:on start||`` block and establishes what will constitute a “loud sound” by putting the threshold at `50`. Pick any value from 0-255 and experiment until you find the right one. When the ``||input:on loud sound||`` input happens, the code runs:

* First an animation plays for half a second.
* Then two magic wand sounds play.
* Followed by the ten lights turning green indicating that the Gondola is starting.
* At this point, the Gondola will move at `50` percent (%) speed in one direction for `10` seconds.
* Then it will stop, and the lights will turn red.
* Finally, it will return back to the starting point.

```blocks
input.onLoudSound(function () {
    light.showAnimation(light.theaterChaseAnimation,500)
    music.magicWand.play()
    music.magicWand.play()
    light.setAll(0x00ff00)
    servos.A1.run(50)
    pause(10000)
    light.setAll(0xff0000)
    servos.A1.run(0)
    pause(200)
    light.setAll(0x00ff00)
    servos.A1.run(-50)
    pause(10000)
})
input.setLoudSoundThreshold(50)
```

## Variations and Challenges

* Try making a gondola only out of items from the recycling bin. Can you replace the cardboard elements with found items? Be sure to keep the weight down though. 
* Can you use two servo motors to power the gondola? A T-shaped cardboard arm might help you mount the two servos with wheels.

```package
servo
```
