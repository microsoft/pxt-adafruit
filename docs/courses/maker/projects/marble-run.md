# Servo Marble Run 

## Description

Marble runs are a classic engineering challenge that are a great way to get any team planning and problem-solving. There are some great videos of amazing marble runs online that you can use to inspire your students. This version utilizes the Circuit Playground Express and one or more servos to assist your marble on its journey.

https://www.youtube.com/watch?v=UCCLy9mX_k0

## Time Required

| Hours |
|-|
| ![1 to 2 hours on a 4 hour time scale](/static/courses/maker/projects/common/1-to-2-hours.png) |
<br/>
1-2 hours depending on the complexity of the marble run.

## Academic Tie-in Ideas

* **History or Literature**: tell a story by adding art to the marble run so that it tells a character or a people’s journey.
* **Science**: Construct your run so that it shows how food goes through the digestive system, depicts the water cycle, illustrates a species’ migration, or demonstrates some other phenomenon.
* **Language study**: have your marble travel through art depicting the vocabulary you’re studying, then talk about the marble’s future, present, or past journey with the proper tenses.
* **Team building**: strengthen bonds between students who don’t know each other well by having them decide on a marble run theme and then each building a part of the run to help convey the theme.

## Materials

See the [Maker Tools and Techniques](/courses/maker/general/maker-tools-techniques) chapter for more details on materials.

* Large box or sheet of cardboard
* Cardboard tubes from toilet paper or paper towel rolls, or plastic tubes
* Cardboard cutter and/or scissors
* Tape
* Glue gun and glue sticks
* Popsicle sticks
* Basket or cup to catch the marble at the end of the run
* Marbles
* One or more servo motors (180-degree servos)
* 3 male to alligator clip connector cables

## Making

### Plan your Run

Marble runs are great because the sky is the limit on how you construct them. Plan your run by laying out the materials flat on the surface the way you anticipate attaching them. Tape them on with the cardboard flat first, then rotate vertically to test the marble as you go, so you can adjust as needed. When you have everything arranged the way you want it, use hot glue to more permanently affix the objects to the cardboard.

![Plan out your marble run on a flat piece of cardboard first](/static/courses/maker/projects/marble-run/marble-making1.jpg)

#### Some tips:

* If you use a large sheet of cardboard rather than a box, plan to make large gussets or notches at the base, so your cardboard can stand upright. Taping the cardboard to a wall is another option.
* Cardboard tubing cut in half lengthwise is very useful, but you could also use lengths of cardboard with gusset braces to make chutes.
* Remember that even a small downward incline will get the marble rolling. More than a few degrees of tilt on a ramp is probably too much.

### Construct the Servo Lifts

The servo lifts can be made with popsicle sticks glued to servo horns, plus a small cardboard basket to catch and carry the marble to the next ramp.

1. Fashion a little basket or box out of cardboard or thick construction paper that will hold the marble.
2. Glue it to one end of a popsicle stick.
3. On the other end of the popsicle stick, glue the servo horn/arm.

![Glue on the servo arm](/static/courses/maker/projects/marble-run/marble-making2.jpg)

4. Attach the popsicle stick with the basket onto the servo motor.

![Attach the popsicle stick](/static/courses/maker/projects/marble-run/marble-making3.jpg)

5. Glue the servo motor onto your marble run so that it will transport your marble from one chute to another.

![Glue the servo motor onto the marble run](/static/courses/maker/projects/marble-run/marble-making4.jpg)

6. Be ready to fabricate back-stops so the marble doesn’t overshoot when it rolls off of a ramp.

![Back stops](/static/courses/maker/projects/marble-run/marble-making5.jpg)

## Coding

See [Coding the Circuit Playground Express](/courses/maker/general/coding) chapter for more information.

You will need to program the servo motor to move when the marble falls into the servo basket. The simplest approach is to time the marble’s journey from the start of the run to the first servo, and then program the Circuit Playground accordingly. You can also choose to program a servo motor that is triggered by low light level, or a clap to move the marble from one ramp to another.

Here is a sample program with 2 servo motors – one at the beginning of the run to release the marble, and the second servo motor at 2.5 seconds into the run. The program triggers when the light sensor on the Circuit Playground Express gets dark:

```blocks
input.onLightConditionChanged(LightCondition.Dark, function () {
    light.showAnimation(light.rainbowAnimation, 500)
    music.playSound(music.sounds(Sounds.PowerUp)) 
    servos.A1.setAngle(0) 
    pause(2500)
    servos.A2.setAngle(90)
})
servos.A1.setAngle(120)
servos.A2.setAngle(180)
```

## Variations and Challenges

It’s easy to add more engineering challenges and complexity to your marble runs. Here are a few ideas:

* Add a spinning or seesaw element that only releases when several marbles have accrued.
* Challenge students to have the end point be higher than the starting point.
* Add some competition or gamification by seeing who can make a marble take the longest to drop the same distance.
* Employ other levers or obstructions for your marble to go through.
* Rather than making the servo activation timed, cut a hole in the cardboard backing, attach a Circuit Playground Express, and see if you can make a servo be triggered when the marble blocks the light sensor.

As well as cardboard, you can also use other materials to construct your marble run. Lego-style wall plates are great to build marble runs. Use zip ties or hot glue to attach the servos to Legos. Use normal Lego bricks and/or these 3D printable marble chutes to create your run:

* Lego marble chutes: https://www.thingiverse.com/thing:2699615
* Servo holder brick: https://www.thingiverse.com/thing:2813486

<br/>
https://youtu.be/-9rnsB1Mnc0

```package
servo
```