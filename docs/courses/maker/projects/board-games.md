# Electronic Board Games 

## Description

This lesson gives students the opportunity to design their own board games. They can incorporate favorite elements from games they have played and dream up new features. Individual students or groups of students can create a self-contained game, or the entire class can separately make elements that combine to form one big game. Board games might be two dimensional creations, or you can push your cardboard maker skills to new heights by adding vertical elements and art. The coding aspect of making games can also be a great way to engage with math. See below for different ideas ranging from practicing math facts to working with probability. Students can play each other’s games and give feedback for peer review.

https://www.youtube.com/watch?v=s7dtwDFV5yI

## Time Required

| Hours |
|-|
| ![2 to 3 hours on a 4 houre time scale](/static/courses/maker/projects/common/2-to-3-hours.png) |
<br/>
The time required can vary greatly depending on the scope of the project. Students could draw a simple board game layout on paper, create some simple game rules, do some coding, and play their game, all in an hour or so. At the other end of the range, individuals or groups of students could make game elements with cardboard construction, found objects, and art. The construction plus coding could take 2-3 hours, with additional time for game play.

## Academic Tie-in Ideas

* **History**: Make a game that reflects class content. Players might work to collect Renaissance art and architecture, get a bill passed into law, or trade goods among North American Indian tribes. Understanding the course content becomes essential for both makers and players. 
* **Community Service, Social Studies**: Students can research a particular community, including positive and negative events that might impact members. They can then create a game meant to build empathy. For example, students learning about how food insecurity impacts a community could research the topic, then make a game that helps players understand the individuals impacted. 
* **Math**: Use the Circuit Playground Express as a dice that goes from 1 to 6 lights. Use addition, subtraction operators, or the random number generator to calculate points or spaces moved. Use the weighted color picker code, the probability pathways code, and variations on them to discuss and explain the math behind the probabilities of different outcomes. 
* **Science**: Make a game that reflects class content. Players might work to collect different kinds igneous, metamorphic, and sedimentary rocks, but look out for the earth’s slip-strike, normal, and thrust fault zones! 
* **Literature**: Different game stations can reflect key scenes in a novel. Or, create a game that is based on a choose-your-own-adventure-style story narrative, but instead of choosing which paths to take, put players in the hands of the Circuit Playground Express. 
* **Language study**: Create a game with playing cards and directions written in the language of study. Create a game whose setting focusses on a unit of vocabulary study (the bedroom, clothing, family relationships, etc.), draw or fabricate the vocabulary word items, and label them. 
* **Music**: Make a game in which to advance, you don’t roll dice but instead have the Circuit Playground Express randomly play one of five tones (Low E, Middle E, High E, etc.). Players practice recognizing the different tones. 

## Materials

See the [Making Tools and Techniques](/courses/maker/general/maker-tools-techniques) chapter for more details on materials.

### Minimum

* Paper
* Pen or pencils

### Larger project

* Cardboard
* Cardboard cutter or shears
* Colored pens, markers or paint
* Recycled materials or stones for the player pieces
* Decorative elements like feathers, glitter, ribbon, colored paper, etc.
* Glue gun and hot glue
* Tape

## Making

This is a great opportunity to let your maker’s mind run wild with creative cardboard implementations. As a teacher, you can require that the games or stations of the larger games have a 3-dimensional element. See the [Making Tools and Techniques](/courses/maker/general/maker-tools-techniques) chapter for more ideas.

In this Mythology-themed game element, Medusa faces off with the players when they come to the junction in the cardboard path. Shake the Circuit Playground Express to pick a color. Red makes you fall off a cliff and lose a turn, blue lets you proceed, and orange sends you backward. You can adjust the code to influence the probability of each outcome.

![Medusa game](/static/courses/maker/projects/board-games/medusa-game.jpg)

In this second Mythology-themed game element, the player enters the Cyclops Polyphemus’ cave as Odysseus. Like the hero, the player has to try to stab the giant’s eye (using either the light or sound sensor as input). The NeoPixels register how many sailors get eaten after failed attempts, and if it reaches ten you have to go back ten spaces.

![Cyclops game](/static/courses/maker/projects/board-games/cyclops-game.jpg)

On the back of the game, notice the gusset braces support vertical elements and also provide a nice spot to mount a battery pack.

![Back of Cyclops game](/static/courses/maker/projects/board-games/back-cyclops.jpg)

Notice also the decorative effect of cutting off the top sheet of cardboard linerboard to create texture for the board game.

![Front of Cyclops game](/static/courses/maker/projects/board-games/front-cyclops.jpg)

## Coding

See [Coding the Circuit Playground Express](/courses/maker/general/coding) chapter for more information.

### Circuit Playground Express Dice

Here’s a way to recreate a standard, six-sided dice with the Circuit Playground Express where a random number of lights from 1 to 6 will display when you shake it.

1. From the ``||input:INPUT||`` Toolbox drawer, drag a ``||input:on shake||`` block onto the Workspace.
2. From the ``||light:LIGHT||`` Toolbox drawer, drag a ``||light:show animation||`` block onto the Workspace and drop into the ``||input:on shake||`` block.
3. Using the drop-down menu in the ``||light:show animation||`` block, select the ``Comet`` animation.

```block
input.onGesture(Gesture.Shake, function () {
    light.showAnimation(light.cometAnimation, 500)
})
```

This adds a bit of suspense to when the dice will show the results. Next let’s select a random number and display that number of lights on the Circuit Playground Express.

4. Open the ``||variables:VARIABLES||`` Toolbox drawer, and click **Make a Variable...**.
5. Name your variable "value" or something similar. 
6. From the ``||variables:VARIABLES||`` Toolbox drawer, drag out a ``||variables:set value||`` block onto the Workspace and drop into the ``||input:on shake||`` block after the ``||light:show animation||`` block. 
7. From the ``||math:MATH||`` Toolbox drawer, drag a ``||math:pick random||`` block onto the Workspace and drop into the ``||variables:set value||`` block replacing `0`. 
8. Change the numbers in the ``||math:pick random||`` block to `1` and `6` representing the six different sides of the dice. 

```block
let value = 0
input.onGesture(Gesture.Shake, function () {
    light.showAnimation(light.cometAnimation, 500)
    value = Math.randomRange(1, 6)
})
```

9. From the ``|light:LIGHT||`` Toolbox drawer, drag a ``|light:graph||`` block onto the Workspace and drop after the ``||variables:set||`` block. 
10. Click the plus icon **(+)** on the ``|light:graph||`` block to display the maximum value to graph.
11. From the ``||variables:VARIABLES||`` Toolbox drawer, drag the ``||variables:value||`` variable block into the first slot of the ``||light:graph||`` block, and set the second value to `10` (the 10 lights on the Circuit Playground Express). If you graph up to `6`, the graph block is will treat `6` as the denominator, so you could get it lighting up 6/6 NeoPixels, which would be all of them. Instead, you want the max possible to be 6/10, or 6 NeoPixels.
12. From the ``||music:MUSIC||`` Toolbox drawer, drag a ``||music:play sound||`` block after the ``||light:graph||`` block and change the sound to "ba ding". 
13. From the ``||loops:LOOPS||`` Toolbox drawer, drag a ``||loops:pause||`` block after the ``||music:play sound||`` block and change the value to `3000` milliseconds to give players 3 seconds to read the results. 
14. Lastly, from the ``||light:LIGHT||`` Toolbox drawer, drag a ``||light:clear||`` block onto the Workspace and drop after the ``||loops:pause||`` block.

Final dice program: 

```blocks
let value = 0 
input.onGesture(Gesture.Shake, function () { 
    light.showAnimation(light.cometAnimation, 500) 
    value = Math.randomRange(1, 6) 
    light.graph(value, 10) 
    music.playSound(music.sounds(Sounds.BaDing)) 
    pause(3000) 
    light.clear() 
})
```

### Rock, paper, scissors game with scorekeeping

Here’s a fun twist on a classic game. You can incorporate this into a board game, or else just code and play on its own. Each player could have a Circuit Playground Express, or the players could share a board, or players could even just play after coding by using the Simulator. A shake of the board randomly picks rock, paper, or scissors, the **A** and **B** buttons keep track of the scores, and pressing **A** + **B** together displays the scores.

A demo and then video version of the written directions can be found here: 

https://youtu.be/2dF2XR2eUdA 

1. In the ``||variables:VARIABLES||`` Toolbox drawer, click the **Make a Variable...** button to make three variables called ``aScore``, ``bScore``, and ``RPS`` (or names similar to those to represent the two players’ scores and the random number). 
2. From the ``|input:INPUT||`` Toolbox drawer, drag an ``||input:on shake||`` block onto the Workspace. 
3. From the ``|light:LIGHT||`` Toolbox drawer, drag a ``||light:set all pixels||`` block into the ``||input:on shake||`` block. 
4. Using the drop-down menu, select the color ``Purple`` (or any color other than Blue, White or Red). 
5. From the ``||loops:LOOPS||`` Toolbox drawer, drag a ``||loops:pause||`` block after the ``||light:set all pixels||`` block and change the value to `200` milliseconds. 

```block
input.onGesture(Gesture.Shake, function () {
    light.setAll(0x7f00ff)
    pause(200)
})
```

6. From the ``||variables:VARIABLES||`` Toolbox drawer, drag a ``||variables:set||`` block into the ``||input:on shake||`` block after the Pause block. Using the drop-down menu in the ``||variables:set||`` block, select the ``RPS`` variable. 
7. From the ``||math:MATH||`` Toolbox drawer, drag a ``||math:pick random||`` block and drop into the ``||variables:set||`` block. 
8. Change the second value of the ``||math:pick random||`` block from `10` to `2`. This means our ``RPS`` variable can randomly contain the values `0`, `1`, or `2` – each corresponding to Rock, Paper, or Scissors. 

```block
let RPS = 0
input.onGesture(Gesture.Shake, function () {
    light.setAll(0x7f00ff)
    pause(200)
    RPS = Math.randomRange(0, 2)
})
```

9. From the ``||logic:LOGIC||`` Toolbox drawer, drag an ``||logic:if then else||`` block onto the Workspace and drop after the ``|variables:set||`` block.
10. Click the plus **(+)** symbol on the ``||logic:if then else||`` block to add an ``||logic:else if||`` clause.

```block
let RPS = 0
input.onGesture(Gesture.Shake, function () {
    light.setAll(0x7f00ff)
    pause(200)
    RPS = Math.randomRange(0, 2)
    if (true) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
```

11. From the ``||logic:LOGIC||`` Toolbox drawer, drag 2 equals ``||logic:0 = 0||`` comparison blocks onto the Workspace, and drop one into the ``||logic:if||`` clause replacing `true`, and drop the other one into the ``||logic:if||`` clause in the open slot.

```block
let RPS = 0
input.onGesture(Gesture.Shake, function () {
    light.setAll(0x7f00ff)
    pause(200)
    RPS = Math.randomRange(0, 2)
    if (0 == 0) {
    	
    } else if (0 == 0) {
    	
    } else {
    	
    }
})
```

12. From the ``||variables:VARIABLES||`` Toolbox drawer, drag 2 ``RPS`` variable blocks into the first slot of each of the equals Comparison blocks. NOTE: you need to line up the left edge of the blocks with the open slot to drop them into the correct one. 
13. Change the value in the second slot of the Else If comparison block to 1. We are evaluating whether the ``RPS`` variable holds `0`, `1`, or `2`. 

```block
let RPS = 0
input.onGesture(Gesture.Shake, function () {
    light.setAll(0x7f00ff)
    pause(200)
    RPS = Math.randomRange(0, 2)
    if (RPS == 0) {
    	
    } else if (RPS == 0) {
    	
    } else {
    	
    }
})
```

14. From the ``||light:LIGHT||`` Toolbox drawer, drag 3 ``||light:show ring||`` blocks into each slot of the ``||logic:if||``, ``||logic:else if||``, and ``||logic: else||`` block. 
15. Design the lights to represent a Rock, Paper, and Scissors. 
16. You can also add a different sound effect for each choice.

```block
let RPS = 0
input.onGesture(Gesture.Shake, function () {
    light.setAll(0x7f00ff)
    pause(200)
    RPS = Math.randomRange(0, 2)
    if (RPS == 0) {
        light.showRing(
        `black black black blue blue blue blue black black black`
        )
    } else if (RPS == 0) {
        light.showRing(
        `white white black white white white white black white white`
        )
    } else {
        light.showRing(
        `black red black red black red black black black red`
        )
    }
})
```

Now let’s look at the code for keeping scores.

* The code for ``||input:on button A click||`` says – On button A click, flash all pixels to orange for 200 ms (again, this is helpful because it visually confirms the button click has happened), then add 1 to the value of Player A’s score, then clear the NeoPixels (turn them off). 
* Player B’s code works the same way. 
* When you want to display the two players’ scores, press buttons **A** + **B** together. That code will take whatever number is currently in the ``aScore`` variable and graph it up to ten. It will pause for two seconds to give time to read the score, then do the same thing for ``bScore``. Finally, it will reset both variables to zero and turn all pixels red.

```block
let bScore = 0
let aScore = 0
let RPS = 0
input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.setAll(0xff8000)
    pause(200)
    aScore += 1
    light.clear()
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    light.setAll(0xff00ff)
    pause(200)
    bScore += 1
    light.clear()
})
input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    light.graph(aScore, 10)
    pause(2000)
    light.graph(bScore, 10)
    pause(2000)
    aScore = 0
    bScore = 0
    light.setAll(0xff0000)
})
```

Two players can use their own devices, or they can take turns with one device, or they can play in the Simulator if no devices are available. 

Final Rock Paper Scissors Program:

```blocks
let bScore = 0 
let RPS = 0 
let aScore = 0 
input.onGesture(Gesture.Shake, function () { 
    light.setAll(0x7f00ff) 
    pause(200) 
    RPS = Math.randomRange(0, 2) 
    if (RPS == 0) { 
        light.showRing(`black black black blue blue blue blue black black black`) 
        music.playSound(music.sounds(Sounds.JumpUp)) 
    } else if (RPS == 1) { 
        light.showRing(`white white black white white white white black white white`) 
        music.playSound(music.sounds(Sounds.JumpDown)) 
    } else { 
        light.showRing(`black red black red black red black black black red`) 
        music.playSound(music.sounds(Sounds.BaDing)) 
    } 
}) 
input.buttonA.onEvent(ButtonEvent.Click, function () { 
    light.setAll(0xff8000) 
    pause(200) 
    aScore += 1 
    light.clear() 
}) 
input.buttonB.onEvent(ButtonEvent.Click, function () { 
    light.setAll(0xff00ff) 
    pause(200) 
    bScore += 1 
    light.clear() 
}) 
input.buttonsAB.onEvent(ButtonEvent.Click, function () { 
    light.graph(aScore, 10) 
    pause(2000) 
    light.graph(bScore, 10) 
    pause(2000) 
    aScore = 0 
    bScore = 0 
    light.setAll(0xff0000) 
}) 
```

### Random color picker

This code uses a variable called ``colorPick`` to randomly pick one of four colors and then reset the display to off. This could be used for a Candyland-style game in which you advance to the next color that has been picked, or it could determine which path you take at a junction, as in the Medusa example above.

```blocks
let colorPick = 0 
input.onGesture(Gesture.Shake, function () { 
    colorPick = Math.randomRange(1, 4) 
    light.showAnimation(light.rainbowAnimation, 2000) 
    if (colorPick == 1) { 
        light.setAll(0x00ff00) 
    } else if (colorPick == 2) { 
        light.setAll(0x0000ff) 
    } else if (colorPick == 3) { 
        light.setAll(0xff00ff) 
    } else { 
        light.setAll(0xff8000) 
    } 
    pause(2000) 
    light.clear() 
}) 
```

### Weighted color picker 

This picker allows you to make some options more probable than others. Shaking the board results in three options when facing Medusa in the example: A 20% chance of getting red, which means falling off a cliff in terror and losing a turn; a 40% chance of getting orange and having to move backward five spaces, and a 40% chance of getting blue and getting to move forward unimpeded. The NeoPixels turn back to purple after a pause, and they flash off with the ``||light:clear||`` block after the ``||input:on shake||`` input. 

```block
let Pick = 0 
input.onGesture(Gesture.Shake, function () { 
    Pick = Math.randomRange(1, 10) 
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

Here’s an idea for a game element that can lead to interesting analysis and discussion of probability. The idea here is that Odysseus and ten of his crew are trying to escape the Cyclops Polyphemus’ cave. Odysseus tries to stab the Cyclops in the eye thereby triggering the light sensor on the Circuit Playground Express. A random number between `1` and `4` is selected: 
* If that number is `3` or less, then Polyphemus will devour a certain number of unlucky sailors and the amount of sailors eaten will be displayed on the neopixel lights. 
* If that number is `4`, then the NeoPixels show an animation indicating Odysseus has succeeded in blinding the inhospitable Cyclops and can now move ahead! 
If all 10 sailors get eaten, then the player loses a turn. Math students can work out the probabilities of each of the outcomes, and anyone can adapt the numbers and scenario to fit different game designs. 
The ``||input:on button A click||`` acts as a reset button for the game.

```blocks
let Sailors = 0
input.onLightConditionChanged(LightCondition.Dark, function () {
    Sailors = Math.randomRange(1, 4)
    if (Sailors <= 3) {
        light.graph(Sailors, 3)
    } else {
        light.showAnimation(light.theaterChaseAnimation, 2000)
        light.setAll(0x0000ff)
    }
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    Sailors = 0
    light.setAll(0x0000ff)
})
Sailors = 0
light.setAll(0x0000ff)
```

You can imagine a game in which a revolutionary, an animal, or a piece of legislation is facing tough odds like these.

## Variations and Challenges

Some ideas for different types of variations or additional board game challenges include:

* Get it moving: add a servo-powered element to your game. Maybe the servo arm points the way down the path the player has to travel. See the [Maker Tools and Techniques](/courses/maker/general/maker-tools-techniques) and the [Coding](/courses/maker/coding) chapters for more on using servo motors.
* Light it up: incorporate NeoPixel strips as decorations or game elements. See more in the [Coding](/courses/maker/coding) chapter on using neopixel strips in your code.
* Touch it: run copper tape from the capacitive touch pins on the Circuit Playground Express to make your game touch-interactive. See the [Maker Tools and Techniques](/courses/maker/general/maker-tools-techniques) chapter for more on working with copper tape.

Get ideas from some of the other published MakeCode game projects:

* [Lucky Wheel](/projects/lucky-wheel)
* [Hot Potato](/projects/hot-potato)
* [Reaction!](/projects/reaction )
