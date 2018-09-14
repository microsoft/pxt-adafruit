# Game Controllers

Designing your own board game lets you incorporate favorite elements from games you have played and also dream up new features of your own. Individuals or teams can create a self-contained game, or people can separately make elements that combine to form one big adventure. Games might be two dimensional creations, or you can push your cardboard maker skills to new heights by adding vertical elements and art. The coding aspect of making games can also be a great way to engage with math. See below for ideas ranging from practicing math facts to working with probability.

https://www.youtube.com/watch?v=s7dtwDFV5yI 

## Examples

In this Mythology-themed game element, Medusa faces off with the players when they come to the junction in the cardboard path. Shake the @boardname@ to pick a color. Red makes you fall off a cliff and lose a turn, blue lets you proceed, and orange sends you backward. You can adjust the code to influence the probability of each outcome.

![Medusa head game](/static/courses/making/projects/game-controllers/medusa-game.jpg)

In this second Mythology-themed game element, the player enters the Cyclops Polyphemus’ cave as Odysseus. Like the hero, the player has to try to stab the giant’s eye (using either the light or sound sensor as input). The NeoPixels register how many sailors get eaten after failed attempts, and if it reaches ten you have to go back ten spaces.

![Cyclops head game](/static/courses/making/projects/game-controllers/cyclops-game.jpg)

## Skills Gained

* Probability
* Conditionals

## Time Required

The time required can vary greatly. Students could draw a simple board game layout on paper, do some coding, and play their game, all in an hour or so. At the other range, individuals or pairs could make game elements  with cardboard construction, found objects, and art. The construction plus coding could take 2-3 hours, with additional time for game play.

## Academic Tie-in Ideas

**History:** Make a game that reflects class content. Players might work to collect Renaissance art and architecture, get a bill passed into law, or trade goods among Native American tribes. Understanding the course content becomes essential for both makers and players.

**Community Service, Social Studies**: Students can research a particular community, including positive and negative events that might impact members. They can then create a game meant to build empathy. For example, students learning about how food insecurity impacts a community could research the topic, then make a game that helps players understand the individuals impacted.

**Math:** Use the weighted color picker code, the probability pathways code, and variations on them. Discuss and explain the math behind the probabilities of different outcomes.

**Science:** Make a game that reflects class content. Players might work to collect different kinds igneous, metamorphic, and sedimentary rocks, but look out for the earth’s slip-strike, normal, and thrust fault zones!

**Literature:** Different game stations can reflect key scenes in a novel. Or, create a game that is based on a choose-your-own-adventure-style story narrative, but instead of choosing which paths to take, put players in the hands of the @boardname@.

**Language study:** Create a game with playing cards and directions written in the language of study. Create a game whose setting focusses on a unit of vocabulary study (the bedroom, clothing, family relationships, etc.), draw or fabricate the vocabulary word items, and label them.

**Music:** Make a game in which to advance, you don’t roll dice but instead have the @boardname@ randomly play one of five tones (Low E, Middle E, High E, etc.). Players practice recognizing their tones.

## Materials

### Minimum
* Paper
* Pen or pencils

### Larger projects

* Cardboard
* Recycled materials
* Other decorative elements
* Cardboard cutter
* Hot glue gun
* Drawing materials
* Masking or packing tape

## Making

This is a great opportunity to let your maker’s mind run with creative cardboard implementations. As a teacher, you can require that the games or stations of the larger game have a 3-dimensional element. See the [Maker Tools and Techniques](/courses/making/maker-tools-techniques) chapter for more ideas.

### Cardboard skills

![Contour frame one side](/static/courses/making/projects/game-controllers/contour-frame-one-side.jpg)

![Contour frame glued](/static/courses/making/projects/game-controllers/contour-frame-glued.jpg)

![Contour frame both sides](/static/courses/making/projects/game-controllers/contour-frame-both-sides.jpg)

![Contour surface](/static/courses/making/projects/game-controllers/contour-surface.jpg)

Here, gusset braces support vertical elements and also provide a nice spot to mount a battery pack.

![Gussets supporting cyclops game](/static/courses/making/projects/game-controllers/cyclops-game-gussets.jpg)


Here, the top sheet of linerboard has been sliced and peeled away to create texture.

![Peel liner layer for texture](/static/courses/making/projects/game-controllers/texture-peel.jpg)

## Coding 

### Standard die

Here’s a way to recreate a standard, six-sided die. The ``||light:show animation||`` block has a ``||math:pick andom 500 to 1200||`` lozenge from the ``||math:MATH||`` drawer for milliseconds in it just to add a little suspense. Then, the program sets the variable you make called ``Pick`` to a randomly-chosen 1-6 number. Next, we need to display that random number with a Graph block. However, remember that it has to be ``||light:graph Pick up to 10||``. If you graph up to `6`, the graph block is treating `6` as the denominator, so you could get it lighting up 6/6 NeoPixels, which would be all of them. Instead, you want the max possible to be 6/10, or 6 NeoPixels. A ``||loops:pause||`` block gives the players time to read the results, and then the board gets cleared.

```blocks
let Pick = 0
input.onGesture(Gesture.Shake, function () {
    light.showAnimation(light.rainbowAnimation, Math.randomRange(500, 1200))
    Pick = Math.randomRange(1, 6)
    light.graph(Pick, 10)
    pause(3000)
    light.clear()
})
```

### Rock, paper, scissors game with scorekeeping

Here’s a fun twist on a classic game. You can incorporate this into a board game, or else just code and play on its own. Each player could have a @boardname@, or the players could share a board, or players could even just play after coding by using the Simulator. A shake of the board randomly picks rock, paper, or scissors, the **A** and **B** buttons keep track of the scores, and pressing **A+B** together displays the scores. The coding builds on the core concept of the Color Picker code above.

A demo and then video version of the written directions:

https://www.youtube.com/watch?v=2dF2XR2eUdA
<br/>

Skip the demo and just view the coding directions:

https://youtu.be/2dF2XR2eUdA?t=1m52s 
<br/>

First, make variables called ``aScore``, ``bScore``, and ``RPS` (or names similar to those to represent the two players’ scores and the random pick).

![Variable blocks in toolbox](/static/courses/making/projects/game-controllers/variable-blocks.jpg)

A fun input to use for this is the ``||input:on shake||``. This code reads like:

"On shake, randomly set the variable RPS to either 0 or 1 or 2. If the variable RPS now contains the number 0, flash all pixels red for 200 ms (this is good to do so that if you get "rock" twice, you know that a pick has been made because you see the flash), then set the four bottom pixels to blue (symbolizing a rock). Else, if the RPS variable now contains the number 1, flash all pixels red for 200 ms then set the eight of the pixels to white (symbolizing paper). Else, if the RPS variable now contains any other number (that is, 2), flash all pixels red for 200 ms then set four pixels to red (symbolizing scissors)."

```blocks
let RPS = 0
input.onGesture(Gesture.Shake, function () {
    RPS = Math.randomRange(1, 2)
    if (RPS == 0) {
        light.setAll(0xff0000)
        pause(200)
        light.showRing(
        `black black black blue blue blue blue black black black`
        )
    } else if (RPS == 1) {
        light.setAll(0xff0000)
        pause(200)
        light.showRing(
        `white white black white white white white black white white`
        )
    } else {
        light.setAll(0xff0000)
        pause(200)
        light.showRing(
        `black red black red black red black black black red`
        )
    }
})
```

Now let’s look at the code for keeping scores. The code for ``||input:on button A click||`` says:

"On button A click, flash all pixels to orange for 200 ms (again, this is helpful because it visually confirms the button click has happened), then change whatever is in the variable "aPlayer" by one, then clear the NeoPixels (turn them off)."

Player B’s code works the same way. When you want to display the two players’ scores, press buttons **A+B** together. That code says:

"on pressing buttons A and B together, take whatever number is currently in the "aScore" variable and graph it up to ten (This means, use "aScore" as a numerator and 10 as the denominator. There are 10 possible NeoPixels to light up, but light up only as many as are in the "aScore" variable). Pause for two seconds to give time to count the score, then do the same thing for "bScore". Finally, reset both variables to zero and turn all pixels red."

```blocks
let bScore = 0
let aScore = 0
input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.setAll(0xff8000)
    pause(200)
    aScore += 1
    light.clear()
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    light.setAll(0xff00ff)
    pause(200)
    aScore += 1
    light.clear()
})
input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    light.graph(aScore, 10)
    pause(2000)
    light.graph(aScore, 10)
    pause(200)
    aScore = 0
    bScore = 0
    light.setAll(0xff0000)
})
```

Two players can use their own devices, they can take turns with one device, or they can play in the Simulator if no devices are available.

### Random color picker

This code uses a variable called ``colorPick`` to randomly pick one of four colors and then reset the display to off. This could be used for a Candyland-style game in which you advance to the next color that has been picked, or it could determine which path you take at a junction, as in the Medusa example above.

```blocks
let colorPick = 0
input.onGesture(Gesture.Shake, function () {
    colorPick = Math.randomRange(0, 4)
    if (colorPick == 1) {
        light.setAll(0xff0000)
    } else if (colorPick == 2) {
        light.setAll(0x00ff00)
    } else if (colorPick == 3) {
        light.setAll(0xff8000)
    } else {
        light.setAll(0x0000ff)
    }
    pause(3000)
    light.clear()
})
```

### Suspenseful color picker

You can add some suspense by having the color picker cycle through the potential colors a randomized number of times before the pick is made.

```blocks
let colorPick = 0
input.onGesture(Gesture.Shake, function () {
    for (let i = 0; i < Math.randomRange(3, 7); i++) {
        light.setAll(0xff0000)
        pause(100)
        light.setAll(0x00ff00)
        pause(100)
        light.setAll(0xff8000)
        pause(100)
        light.setAll(0x0000ff)
        pause(100)
    }
    colorPick = Math.randomRange(0, 10)
    if (colorPick == 1) {
        light.setAll(0xff0000)
    } else if (colorPick == 2) {
        light.setAll(0x00ff00)
    } else if (colorPick == 3) {
        light.setAll(0xff8000)
    } else {
        light.setAll(0x0000ff)
    }
    pause(3000)
    light.clear()
})
```

This code uses a rainbow animation to have a similar effect in terms of adding a little suspense.

```blocks
let colorPick = 0
input.onGesture(Gesture.Shake, function () {
    colorPick = Math.randomRange(0, 4)
    light.showAnimation(light.rainbowAnimation, 2000)
    if (colorPick == 1) {
        light.setAll(0xff0000)
    } else if (colorPick == 2) {
        light.setAll(0x00ff00)
    } else if (colorPick == 3) {
        light.setAll(0xff8000)
    } else {
        light.setAll(0x0000ff)
    }
    pause(3000)
    light.clear()
})
```

### Weighted color picker

This picker allows you to make some options more probable than others. Shaking the board results in three options when facing Medusa in the example: A 20% chance of getting red, which means falling off a cliff in terror and losing a turn; a 40% chance of getting orange and having to move backward five spaces, and a 40% chance of getting blue and getting to move forward unimpeded. The NeoPixels turn back to purple after a pause, and they flash off with the ``||light:clear||`` block after the ``||input:on shake||`` input.

```blocks
let Pick = 0
input.onGesture(Gesture.Shake, function () {
    Pick = Math.randomRange(0, 4)
    light.clear()
    pause(100)
    if (Pick <= 2) {
        light.setAll(0xff0000)
    } else if (Pick > 2 && Pick <= 6) {
        light.setAll(0xff8000)
    } else {
        light.setAll(0x007fff)
    }
    pause(3000)
    light.setAll(0x7f00ff)
})
```

### Probability pathways

Here’s an idea for a game element that can lead to interesting analysis and discussion of probability. The idea here is that Odysseus and ten of his crew are trying to escape the Cyclops Polyphemus’ cave. The initial “set pick to random 1-4” picks a number, and if that number is 3 or less, then Polyphemus will devour 1, 2, or 3 more unlucky sailors. Another neopixel lights up (is “graphed”) for each victim. Try to stab again and see if more sailors get eaten. If all 10 sailors get eaten, then the player loses a turn. If the ``||math:pick random 1 to 4||`` picks `4`, then the NeoPixels show an animation indicating Odysseus has succeeded in blinding the inhospitable Cyclops and can now move ahead. Math students can work out the probabilities of each of the outcomes, and anyone can adapt the numbers and scenario to fit different game designs. ``||input:on button A click||`` acts as a reset button.

```blocks
let LEDs = 0
let Pick = 0
light.setAll(0x0000ff)
LEDs = 0
input.buttonA.onEvent(ButtonEvent.Click, function () {
    LEDs = 0
    light.setAll(0x0000ff)
})
input.onLightConditionChanged(LightCondition.Dark, function () {
    Pick = Math.randomRange(0, 4)
    if (Pick <= 3) {
        LEDs += Math.randomRange(1, 3)
        light.graph(LEDs, 10)
    } else {
        light.showAnimation(light.rainbowAnimation, 2000)
        light.setAll(0x0000ff)
        LEDs = 0
    }
})
```

You can imagine a game in which a revolutionary, an animal, or a piece of legislation is facing tough odds like these.

## Variations and Challenges

**Get it moving:** add a servo-powered element to your game. Maybe the servo arm points the way down the path the player has to travel. See the [Maker Tools and Techniques](/courses/making/maker-tools-techniques#servo-motors) and the [Coding](/courses/making/coding) chapters for more on using servo motors.

**Light it up:** incorporate NeoPixel strips as decorations or game elements. See more in the Coding chapter on using strips.

**Touch it:** run copper tape from the capacitive touch pins on the @boardname@ to make your game touch-interactive. See the [Maker Tools and Techniques](/courses/making/maker-tools-techniques#copper-tape-techniques) chapter for more on working with copper tape. 
