# Light Box Project

# Description

This project opens up possibilities for the maker from pure art, to art-infused representations of science, history, literature, second language study, etc. The Circuit Playground Express provides backlighting for drawings done on tracing paper or other semi-transparent paper. People can work alone, in teams, or even on a large group installation. Make a sketch to help explore ideas for construction. How might the light colors, sequence, etc. impact the meaning of the whole piece?

https://www.youtube.com/watch?v=S7xUFisT7wk
<br/>

## Time Required

| Hours |
|-|
| ![2.0 hour time scale](/static/courses/maker/projects/common/2-0-hours.png) |

## Academic tie-in ideas

* Literature: represent a character’s evolution, depict key settings or show important symbols from a novel’s plot.
* History: show important scenes around an event, depict disparate views of the same historical event, or convey a representative story.
* Science: illustrate how a process develops, show evolutionary adaptations, convey data from a study, or illustrate geological events.
* Language study: depict different tenses of the same verb, tell a character’s story.
* Music: Associate tones or short pieces of music with each image or with the project as a whole.
* Physical Education: Illustrate the key components of a pitch / kick / shot / play.

## Materials

See the Maker Tools and Techniques Chapter for more details on materials

* Cardboard box (about 2.5-5 inches deep – a modified shoebox works well for this) or flat cardboard
* Glue gun and hot glue (if making your own box or enclosure from cardboard
* Craft pen knife (for example – https://www.amazon.com/gp/product/B000V1QV7O)
* Tracing paper
* Tape
* Pen

## Making

1. Make or find a small box that is about 2.5-5 inches deep.
2. Attach a Circuit Playground Express to the middle of the inside of the box with a loop of tape.
3. Keep in mind that you’ll want access to the micro USB jack for updating code, and you may also want to use the JST battery connector. So cut holes in the box for access as needed.
4. To control which lights illuminate which images, fabricate an X-shaped divider with notches on the bottom that fit over the Circuit Playground Express. Two notched pieces of thin cardboard that are slotted together will probably work well. You could also divide it into thirds instead of fourths if desired.

![Dividing box into fourths](/static/courses/maker/projects/light-box/lb-making1.jpg)

5. Leave the dividers’ ends a bit long so that you can fold them, and then hot glue or tape them to the box’s sides. Be sure that they fit well on the Circuit Playground Express before you commit with glue.
6. You may need to reduce light bleed between compartments by adding masking tape.
7. Using white cardboard or lining the compartments with white paper will help bounce more light to your images.
8. Cut out the images you have drawn on tracing paper, but be sure to leave margins so that the cutouts are bigger than the holes you will make.
9. Once the divider is in place, plan the holes in the lid for each compartment that your images will go in. Use the cut out images to guide you in planning holes that are slightly smaller.

![Dividing box into fourths](/static/courses/maker/projects/light-box/lb-making2.jpg)

10. Cut the openings. You may wish to trace the lid onto black paper to create a uniform surface for the display side of your box’s lid. Painting the lid at this point is another option.

![Dividing box into fourths](/static/courses/maker/projects/light-box/lb-making3.jpg)

11. Tape the cutout drawings over each opening from the inside.

![Dividing box into fourths](/static/courses/maker/projects/light-box/lb-making4.jpg)

![Light box drawings](/static/courses/maker/projects/light-box/light-box-drawings.png)

## Coding

See [Coding the Circuit Playground Express](/courses/maker/general/coding) for more information.

The ``||light:show ring||`` block will let you control the colors and sequences for the different compartments’ exposures. You should create your own light designs – Will some lights flash? Will they all be lit for the same duration? How will color choices create mood and meaning?

Here’s an example of a light box animation program. First, we will use a variable to control how bright the NeoPixels are. We can call it anything, but let’s call it ``Fade`` since it will be fading the lights off, and later making them glow back on.

1. Go to the ``||variables:VARIABLES||`` drawer in the Toolbox, click on Make a Variable, and then name your variable ``Fade``. 
2. Now, in the ``||loops:LOOPS||`` drawer, find a ``||loops:repeat 4 times||`` and place it inside a ``||loops:forever||`` loop.
3. In the ``||light:LIGHT||`` drawer, find a ``||light:set brightness||`` block and put that inside the ``||loops:repeat 4 times||``.

```block
forever(function () {
    for (let i = 0; i < 4; i++) {
        light.setBrightness(20)
    }
})
```

Next, let’s make use of the variable we made.

1. From the ``||variables:VARIABLES||`` drawer, drag a ``||variables:Fade||`` variable block and drop it in the number spot in the ``||light:set brightness||`` block.
2. From the ``||light:LIGHT||`` drawer, insert a ``||light:show ring||`` block, and make the lights in the four quadrants four different colors.

```blocks
let Fade = 0
forever(function () {
    for (let i = 0; i < 4; i++) {
        light.setBrightness(Fade)
        light.showRing(
        `yellow yellow black purple purple blue blue black red red`
        )
    }
})
```

The maximum brightness of the NeoPixels is 255, so we’ll start at that maximum brightness at the start of our program and slowly fade out.

3. From the ``||loops:LOOPS||`` Toolbox drawer, drag an ``||loops:on start||`` block onto the Workspace.
4. From the Variables Toolbox drawer, drag a ``||variables:set Fade to||`` variable block onto the Workspace and place in the ``||loops:on start||`` block
5. Assign the value of `255` to our ``Fade`` variable.

```blocks
let Fade = 0
```

To make the lights fade, we will repeatedly decrease the variable ``Fade`` a little bit over time.

6. From the ``||loops:LOOPS||`` Toolbox drawer, drag a ``||loops:pause||`` block onto the Workspace and drop it after the ``||light:show ring||`` block.
7. Set the ``||loops:pause||`` block value to a small number, like `40` milliseconds.
8. From the ``||variables:VARIABLES||`` Toolbox drawer, drag a ``||variables:change Fade by||`` variable block onto the Workspace and drop it after the ``||loops:pause||`` block.
9. We want it to fade a little bit at a time, so let’s change the value in the  ``||variables:change Fade by||`` variable block to `-10`.
10. In the ``||loops:repeat||`` block, change the repeated value from `4` to `25` times. That way, the value will go from `255`, the lights’ maximum, down to `5`, nearly completely off.

```blocks
let Fade = 0
Fade = 255
forever(function () {
    for (let i = 0; i < 25; i++) {
        light.setBrightness(Fade)
        light.showRing(
        `yellow yellow black purple purple blue blue black red red`
        )
        pause(40)
        Fade += -10
    }
})
```

Next, we can light up each quadrant in turn. Here, the color choices and durations can contribute to the meaning of the images. Be sure to put a ``||loops:pause||`` block after each ``||light:show ring||`` so that the program lights the NeoPixels and then waits for the specified pause before moving on.

11. From the ``||light:LIGHT||`` Toolbox drawer, drag and drop four ``||light:show ring||`` blocks into our program and turn on the correct light colors for each quadrant.
12. From the ``||loops:LOOPS||`` Toolbox drawer, drag and drop four ``||loops:pause||`` blocks and place them after each of the ``||light:show ring||`` blocks. Select 2 seconds (`2000` ms) as a ``||loops:pause||`` value.
Finally, to make the process start over again, we need to reset the variable ``Fade`` to `255`. After that, it will loop back up and start the process over again.
13. From the ``||variables:VARIABLES||`` Toolbox drawer, drag a ``||variables:set Fade to||`` variable block and place at the very end of our program in the ``||loops:forever||`` loop.
14. Set the `Fade` variable value to `255`.

```blocks
let Fade = 0
Fade = 255
forever(function () {
    for (let i = 0; i < 25; i++) {
        light.setBrightness(Fade)
        light.showRing(
        `yellow yellow black purple purple blue blue black red red`
        )
        pause(40)
        Fade += -10
    }
    light.showRing(
    `black black black black black black black black red red`
    )
    pause(2000)
    light.showRing(
    `black black black black black blue blue black black black`
    )
    pause(2000)
    light.showRing(
    `black black black purple purple black black black black black`
    )
    pause(2000)
    light.showRing(
    `yellow yellow black black black black black black black black`
    )
    pause(2000)
    Fade = 255
})
```

## Variations and Challenges

To create a more visually stunning light box, you can use other tools to create your light box project – like a 3D printer, a programmable paper cutter, or a laser cutter to create elements of the box and/or translucent screen.

This is an example of a 3D-printed enclosure printed with translucent filament

![Filament variation #1](/static/courses/maker/projects/light-box/variation1.jpg)

This is an example of a Circuit Playground Express enclosure 3D-printed in translucent filament with a hand-drawn image in a 3D-printed cover, printed in black filament.

https://www.youtube.com/watch?v=KClpFfA0O-I
<br/>

This is a project based on the author Virginia Woolf, drawn on a computer, exported as a SVG file, and cut on a programmable paper cutter.

![Virginia Woolfe, view inside light box](/static/courses/maker/projects/light-box/virginia-woolf2.jpg)

https://www.youtube.com/watch?v=NS1ZIx1qcAE
<br/>

Other ways you might extend this project include:

* Collaborate: Create a larger box with multiple compartments. Each compartment has its own Circuit Playground Express and own maker. Each maker codes the light sequence. Coordinate the compartments? Activate them all with IR?
* Glow: The ``Fade`` variable was used to make the main ``||light:show ring||`` fade off; add code to make it get brighter.
* Make an awning: Create an awning or surround for the display’s face to help darken it and make the lights more visible.
* Incorporate sound: Enhance the mood and meaning of each drawing or of the overall project by programming your Circuit Playground Express to play music.
* Use a servo: Rotate a reveal pie wedge on a servo motor with the Circuit Playground Express back-lighting the scene. Time the light sequence and servo together.
* Use a controller: Use another Circuit Playground Express to activate the display (or perhaps different displays) with inputs like light level, tilt, sound, or touch.