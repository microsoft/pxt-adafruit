# Coding the Rube Goldberg box

### ~avatar avatar 
Use a force sensor to trigger a servo that drops a rolling weight. The weight hits a button which starts a fan, blowing out confetti everywhere.
### ~ 

### Duration: ~25 minutes 

## What's in the code?

### Concepts

* Force sensors (input)
* Buttons (input)
* Pin functions (servo)
* Pixels (light)

### Blocks

```cards
pins.A1.analogRead()
light.showRing("red red red red red red red red red red")
pins.A2.servoWrite(180)
pause(0)
``` 
## Let's code it!

### ``|Step 1|`` - Get the logic setup

First, we'll set up some code to get us started.

1. Open [MakeCode](@homeurl@) in your web browser.
2. From **LOOPS** drag a ``||loops:forever||`` loop out.
3. In **LOGIC** grab a ``||logic:if then else||`` block and put it in the ``||loops:forever||`` block.
4. Again, from **LOGIC**, pull out the ``||logic:0 < 0||`` conditional and replace ``true`` in the condition for the ``||logic:if then else||`` block.
5. Change the condition from ``<`` to ``>``.

```blocks
forever(function () {
    if (0 > 0) {

    } else {

    }
})
```
### ``|Step 2|`` - Respond to the force sensor

Ok, let's do something when the force sensor is pressed. How about lighting the pixels?
1. Get a ``||pins:analog read pin||`` from **PINS** and put it on the left side of the ``>`` in the ``||logic:if then else||``. 
2. Change the ``0`` on the right to ``100``.
3. Change the ``A0`` to ``A1`` in the ``||pins:analog read pin||`` block.

```blocks
forever(function () {
    if (pins.A1.analogRead() > 100) {
    	
    } else {
    	
    }
})
```

Now, we'll add two different pixel patterns to show when the force sensor is pressed and not pressed.

1. Go into **LIGHT** and get a ``||light:show ring||``. Put it in the first part of the ``||logic:if then else||`` block.
2. Get another ``||light: show ring||`` and put it in the second part of the ``||logic:if then else||`` block.
3. Make each ``||light: show ring||`` display a different pattern of colors.

```blocks
forever(function () {
    if (pins.A1.analogRead() > 100) {
        light.showRing("yellow white blue green blue pink red green yellow pink")
    } else {
        light.showRing("red red red red red red red red red red")	
    }
})
```

Download the code to your @boardname@ and press the force sensor. Did you see the lights change?

### ``|Step 3|`` -  Controlling the servo

Right, time to make the servo turn so the rolling weight will drop.

1. Get a ``||pins:servo write pin||`` from **PINS** and put it below your first ``||light:show ring||`` inside the ``||logic:if||``.
2. Get another ``||pins:servo write pin||`` and put it under the second ``||light:show ring||`` inside the ``||logic:else||``.
3. Change the ``A0`` in both ``||pins:servo write pin||`` blocks to ``A3``.
4. Change the ``0`` in the first ``||pins:servo write pin||`` to say ``180``.

```blocks
forever(function () {
    if (pins.A1.analogRead() > 100) {
        light.showRing("yellow white blue green blue pink red green yellow pink")
        pins.A3.servoWrite(180)
    } else {
        light.showRing("red red red red red red red red red red")
        pins.A3.servoWrite(0)	
    }
})
```

### ``|Step 4|`` - Reset the box for the next drop (optional)

So that you can keep running the prank over again, let's have the box reset itself to have the weight held up again. Ok, this step is a little more involved...

1. Pull out a ``||loops.pause||`` block from **LOOPS** and place it under the last ``||pins:servo write pin||``.
2. Change the time to ``3000`` milliseconds. This gives the weight some time to roll down before the holder comes back.

3. In **LOOPS**, find ``||loops:on start||`` and pull it out onto the workspace somewhere. Go to **VARIABLES** and drag a ``||variables:set to||`` into ``||loops:on start||``. Rename the variable from ``item`` to ``reset``. Go into **LOGIC** and pick up a ``true``. Drag it over to the ``||variables:set to||`` and replace the ``0`` with it.
4. Get an ``||logic:if then||`` block and put it in the ``||logic:if||`` part of the outer ``||logic:if then else||``.
5. Get another ``||variables:set to||`` and put it in the new ``||logic:if then||``. Go to the dropdown and change the variable name to ``reset``. This time get a ``false`` from **LOGIC** and stick it in this ``||variables:set to||``.
6. Finally, drag the ``||light:show ring||`` and ``||pins:servo write pin||`` into the inner  ``||logic:if then||``.
7. Duplicate the ``||variables:set to||`` from the ``||loops:on start||`` loop and place it inside the ``||logic:else||`` part of the outer ``||logic:if then else||``.

```blocks
let reset = true;
forever(function () {
    if (pins.A1.analogRead() > 100) {
        if (reset) {
            light.showRing("yellow white blue green blue pink red green yellow pink")
            pins.A3.servoWrite(180)
            reset = false;
        }
    } else {
        light.showRing("red red red red red red red red red red")
        pins.A3.servoWrite(0)	
        pause(3000)
        reset = true;
    }
})
```

## Good work!

You’ve finished! Download the code to your @boardname@. Now, set the weight on top of the chute an fill up the box with the confetti. Ready to PRANK!
