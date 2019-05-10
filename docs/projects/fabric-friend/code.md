# Coding the Fabric Friends

## @description @boardname@ Fabric Friend: coding activity

## ~avatar avatar

Create effects and animations for your Fabric Friend.

## ~

**Block categories used:**

* Pixels
* Animations
* Input sensors (Shake)


## Duration: 25 minutes


## Magic Eight effect

First, let’s code a Fabric Friend with predictive powers, kind of like a Magic Eight Ball. We’ll use a randomly chosen variable to select what face the Fabric Friend will make upon the input of ``||on shake||``. The responses might be positive, negative, or confused.

https://www.youtube.com/watch?v=-sgF1Fzbc9E 
<br/>

### Create pixel strips for the eyes

Open [MakeCode](@homeurl@) in your web browser.

First, go to ``||variables:VARIABLES||`` and make variables called ``LeftEye`` and ``RightEye`` (or for as many eyes your friend has). You’ll also need a variable called ``Magic8``. Use the ``||variables:set variable||`` blocks to create strips for each eye with one pixel, and set ``Magic8`` to `1`.

```blocks
let Magic8 = 0
let RightEye: light.NeoPixelStrip = null
let LeftEye: light.NeoPixelStrip = null
LeftEye = light.createStrip(pins.A4, 1)
RightEye = light.createStrip(pins.A7, 1)
Magic8 = 1
```

### Stop sounds on shake

Next, let’s use an ``||input:on shake||`` input block to stop any sounds that might be playing and to set the variable. We’ll want the variable to be randomly assigned, so go to the ``||math:MATH||`` drawer in the Toolbox and find the ``||math:pick random||`` block.

```blocks
let Magic8 = 0
input.onGesture(Gesture.Shake, function () {
    music.stopAllSounds()
    Magic8 = Math.randomRange(1, 3)
})
```

### Make the Magic 8 loop

Next, let’s make the framework for the main ``||loops:forever||`` loop. From the ``||logic:LOGIC||`` drawer, you’ll need an ``||logic:if hen else||`` block, and click on the plus sign to add a blank slot for every facial expression you want your friend to have. For the first ``||logic:if||`` condition, find a comparison block in ``|logic:LOGIC||``, put the ``Magic8`` variable block on the left, and type a `1` on the right. The comparison should be the equals, ``=``. Do the same for the next two condition blocks, but have them equal `2` and `3`.

```blocks
let Magic8 = 0
forever(function () {
    if (Magic8 == 1) {
    	
    } else if (Magic8 == 2) {
    	
    } else if (Magic8 == 3) {
    	
    } else {
    	
    }
})
```

### Fill in the conditions

Now you can fill in the ``||logic:if then else||`` conditions with light and sound responses. When the Fabric Friend gets a shake, either a `1`, `2`, or `3` will be chosen. The sample code has a “yes” response, a “no” response, and an “unclear” response. Note a few aspects here. The ``||loops:pause 3000 ms||`` blocks are necessary to allow a little time to view and hear the response before the variable gets reset to zero. Resetting the variable ``Magic8`` to zero makes the ``||logic:if then else||`` choose the final ``||logic:else||`` condition, which here is meant to be a neutral or expectant expression. In between responses, the Fabric Friend will be expecting another fascinating question. 

```blocks
let Magic8 = 0
let RightEye: light.NeoPixelStrip = null
let LeftEye: light.NeoPixelStrip = null
LeftEye = light.createStrip(pins.A4, 1)
RightEye = light.createStrip(pins.A7, 1)
forever(function () {
    if (Magic8 == 1) {
        light.showRing(
        `black black black black black green green green green green`
        )
        LeftEye.setAll(0x00ff00)
        RightEye.setAll(0x00ff00)
        music.magicWand.play()
        pause(3000)
        Magic8 = 0
    } else if (Magic8 == 2) {
        light.showRing(
        `purple purple purple purple purple black black black black black`
        )
        LeftEye.setAll(0x7f00ff)
        RightEye.setAll(0x7f00ff)
        music.powerDown.play()
        pause(3000)
        Magic8 = 0
    } else if (Magic8 == 3) {
        light.showRing(
        `blue black black black blue orange blue orange orange orange`
        )
        LeftEye.setAll(0x0000ff)
        RightEye.setAll(0xff8000)
        music.wawawawaa.play()
        pause(3000)
        Magic8 = 0
    } else {
        light.setAll(0x00ffff)
        LeftEye.showAnimation(light.sparkleAnimation, 2000)
        RightEye.showAnimation(light.sparkleAnimation, 2000)
    }
})
```

## Make a hungry Friend

Now let’s code a Fabric Friend who gets hungry and irritable over time, but who can be fed to regain happiness and composure.

https://www.youtube.com/watch?v=L_21ZX2b9UE 
<br/>

### Create pixel strips for the eyes

First, go to ``||variables:VARIABLES||`` and make variables called ``LeftEye`` and ``RightEye`` (or, however many eyes your friend has). You’ll also need a variable called ``Hunger``. Use the ``||set variable||`` blocks to create strips for each eye with one pixel, and set ``Hunger`` to zero. Use an ``||input:on button A click||`` to be able to reset the ``Hunger`` variable to zero when you need to. 

```blocks
let Hunger = 0
let RightEye: light.NeoPixelStrip = null
let LeftEye: light.NeoPixelStrip = null
LeftEye = light.createStrip(pins.A4, 1)
RightEye = light.createStrip(pins.A7, 1)
Hunger = 0
input.buttonA.onEvent(ButtonEvent.Click, function () {
	Hunger = 0
})
```

### The hungry loop

Next, let’s make the framework for the main ``||loops:forever||`` loop. From the ``||logic:LOGIC||`` drawer, you’ll need an ``|logic:if then else||`` block, and click on the plus sign **(+)** to add a blank slot for every facial expression you want your friend to have. For the first ``||logic:if||`` condition, find a comparison block in ``||logic:LOGIC||``, put the ``Hunger`` variable block on the left, change the comparison to less than, and put a number on the right that will be the number of seconds the facial expression lasts for. For the ``||logic:else if||`` conditions, find an ``||logic:and||`` condition block in ``||logic:LOGIC||``, and within each of the ``||logic:and||`` blocks conditions, put in a comparison block. See below for how to change the comparisons. Finally, we need a way for the variable ``Hunger`` to change. Add a ``||loops:pause 1 second||`` (1000 ms) block outside of the end of the ``||logic:if then else||`` block, and put a ``||variables:change Hunger by 1||`` block. That way, every second the variable will get bigger. For `13` seconds, the first statement of the ``||logic:if then else||`` will be `true`. Then, for seconds `14` - `17` the second statement will be the true one, and so on.

```blocks
let Hunger = 0
Hunger = 0
forever(function () {
    if (Hunger < 14) {
    	
    } else if (Hunger >= 14 && Hunger < 18) {
    	
    } else if (Hunger >= 18 && Hunger < 22) {
    	
    } else {
    	
    }
    pause(1000)
    Hunger += 1
})
```
### Adjust hunger to light level

We’ll make a second ``||loops:forever||`` loop with three separate ``||logic:if then||`` blocks in it. The first one says, "If the light level goes beneath 25 (or whatever value works for the room you’re in), then subtract 3 from the Hunger variable". This way, when you put food to the Fabric Friend’s mouth, you can dim the light hitting the sensor and feed it. The second ``||logic:if then||`` block says, "If the Hunger variable goes below zero, Set Hunger to zero". This is useful because otherwise you might have ``Hunger`` become `-30` accidentally, and it would take a long time for the variable to get back to positive numbers. Likewise, the last ``||logic:if then||`` block prevents the variable from getting too large as time goes on. 

```blocks
let Hunger = 0
forever(function () {
    if (input.lightLevel() < 25) {
        Hunger += -3
    }
    if (Hunger < 0) {
        Hunger = 0
    }
    if (Hunger > 30) {
        Hunger = 22
    }
})
```

### Make some facial expressions

Finally, it’s time to make facial expressions for each of the Fabric Friend’s states of mind. Be sure to pay attention to where the mini USB port and the JST battery connector are on the simulator so you can orient your smiles, frowns, etc. correctly. 

```blocks
let Hunger = 0
let RightEye: light.NeoPixelStrip = null
let LeftEye: light.NeoPixelStrip = null
LeftEye = light.createStrip(pins.A4, 1)
RightEye = light.createStrip(pins.A7, 1)
Hunger = 0
forever(function () {
    if (Hunger < 14) {
        LeftEye.setAll(0xff8000)
        RightEye.setAll(0xff8000)
        light.showRing(
        `black black black black black orange orange orange orange orange`
        )
    } else if (Hunger >= 14 && Hunger < 18) {
        LeftEye.setAll(0xff8000)
        RightEye.setAll(0xff8000)
        pause(100)
        LeftEye.setAll(0xff0000)
        RightEye.setAll(0xff0000)
        pause(100)
        LeftEye.setAll(0xff8000)
        RightEye.setAll(0xff8000)
        light.showRing(
        `black black black black black black orange orange orange black`
        )
    } else if (Hunger >= 18 && Hunger < 22) {
        LeftEye.setAll(0xff0000)
        RightEye.setAll(0xff0000)
        light.showRing(
        `black black black black black blue blue blue blue blue`
        )
        pause(100)
        light.showRing(
        `blue blue blue blue blue black black black black black`
        )
        pause(100)
    } else {
        music.siren.play()
        LeftEye.setAll(0x00ff00)
        RightEye.setAll(0x7f00ff)
        pause(Math.randomRange(100, 200))
        LeftEye.setAll(0xff0000)
        pause(100)
        LeftEye.setAll(0x0000ff)
        RightEye.setAll(0xffffff)
        pause(Math.randomRange(100, 200))
        RightEye.setAll(0xff00ff)
    }
    pause(1000)
    Hunger += 1
})
```

## Variations and challenges

Instead of hungry, how about making a fabric friend who gets sleepy? How about making the fabric friend randomly express an emotion periodically and require soothing of some kind? 
