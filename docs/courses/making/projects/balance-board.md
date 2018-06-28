# Balance Board

https://www.youtube.com/watch?v=J1ajRktxMVs 
<br/>

This balance board really puts the “physical” into physical computing! The @boardname@ accelerometer is the input, and lights and sounds give feedback on how balanced or not you are. The basic premise might be to remain within 6 degrees of flat in either direction, but from there you can imagine other goals (like, how long can you stay beyond 6 degrees?). The making aspect is pretty straightforward, but the coding and physical fun are up for grabs.

Please be sure to follow common sense safety procedures. The 3 foot length of board limits how much one can fall, assuming you have a wider-than-should-width stance. The PVC may slip if used on a slick surface like polished concrete, so operate this on a safe location (and see below for traction ideas). Younger riders should be carefully supervised while using the board. Again, keep a wide stance to avoid the board slipping out.

## Academic tie-in ideas

Music: if you have several people with good balance, give each person two notes to play, one for each direction of tilt. See if you can play a segment of a song just through tilt inputs.

PE: balance and core strength are integral to most sports; design coded challenges that push the player to utilize those skills. Just staying balanced will be a great lower core workout for many people, and the surfers and skateboarders in the group will undoubtedly have ideas for advanced moves.

## Variations and Challenges

Have the Photon effect spin in one direction if the board tilts one way, then other direction for the other tilt.

Lower the allowed degrees of pitch or roll so the rider has to keep the board very horizontal.

Challenge those who are farther along with coding to create a variable, have the variable increase every few seconds the board is balanced, and light up an additional NeoPixel with the ``||light:graph||`` block (see below for sample code).

## Making

### Basic materials

* A 12”-14” piece of 4.5” PVC pipe. These are inexpensive, and your local hardware store will cut lengths of them for you.
* A 3’ piece of 1”x10” or 1”x12” wood.
* Packing or masking tape to secure the @boardname@ and battery pack.

Optional: 
* Grip tape: if you’re concerned about slipping, you can apply the kind of grip tape made to increase traction on surfaces like stairs. 
* Stops: 1x2 lengths of board can be added to the ends of the main board.

### Construction

Board without stops, pipe without tape

![Balance board concept with parts](/static/courses/making/projects/balance-board/balance-board-concept.jpg)

Traction tape: find this tape that’s used to increase traction on stairs at a hardward store and have it cut to length. 

![Roll of traction tape](/static/courses/making/projects/balance-board/traction-tape.jpg)

Traction tape applied to 4” pvc.

![Traction tape on pipe](/static/courses/making/projects/balance-board/traction-tape-pipe.jpg)

Here is a 1x2” board clamped to the main balance board. A large drill bit has been used to drill shallow holes that will allow the head of the screw to counter-sink into the board.

![Counter sink holes for screws](/static/courses/making/projects/balance-board/counter-sink-holes.jpg)

You will want to drill pilot holes for the screws. These should be about the diameter of the main body of the screw. It can be handy to apply tape to a drill bit so you can be sure to avoid over-drilling through your material. This tape shows the length of the screw.

![Tape drill bit for depth guage](/static/courses/making/projects/balance-board/screw-depth-guide.jpg)

Here is a pilot hole being drilled into the shallow counter-sink hole. Stop where the tape starts.

![Drill the pilot holes](/static/courses/making/projects/balance-board/pilot-hole.jpg)

Once you drive a screw into a pilot hole with a counter-sunk opening, it should be about flush with the board.

![Screw driven flush to board](/static/courses/making/projects/balance-board/flush-screw-attach.jpg)

## Coding

The @boardname@ accelerometer can measure “pitch” and “roll” and use them as inputs to trigger code. To understand pitch and roll, think of an airplane. A nose-up, tail-down motion (or the reverse) is pitch, while if one wing goes up and the other down, that is roll. The balance board will only move in one axis, so you can pick either pitch or roll and orient the @boardname@ on the board so that the JST battery connector and usb port are perpendicular or parallel to the board.

Coding this project is a great opportunity to use conditional ``||logic:if then else||`` statements from the ``||logic:LOGIC||`` drawer of the Toolbox. You’ll also need to scroll down in the ``||input:INPUT||`` drawer to find the ``||input:rotation degree pitch||`` lozenge.

```block
let pitch = input.rotation(Rotation.Pitch)
```

This lozenge will fit on one side of a comparison diamond to let the @boardname@ compare the actual reading of pitch / roll with a number of degrees you specify.

```block
if (0 == 0) {}
```

This code is in a ``||loops:forever||`` loop to ensure that the @boardname@ is continuously checking the accelerometer reading of pitch or roll. It is saying, “If the accelerometer reads more than 7 degrees of pitch, then turn all pixels red and make a sound for 700 ms (the 700 ms pause is needed to let the music block play briefly before trying to play again immediately). Else, if the accelerometer reads less than negative 7 degrees of pitch, then turn all pixels green and make a sound for 700 ms. Else, stop all sounds, clear all light, then show the sparkle animation."

```blocks
forever(function () {
    if (input.rotation(Rotation.Pitch) > 7) {
        light.setAll(0xff0000)
        music.playSound(music.sounds(Sounds.Wawawawaa))
        pause(700)
    } else if (input.rotation(Rotation.Pitch) < -7) {
        light.setAll(0x00ff00)
        music.playSound(music.sounds(Sounds.Siren))
        pause(700)
    } else {
        music.stopAllSounds()
        light.clear()
        light.showAnimation(light.sparkleAnimation, 500)
    }
})
```

This coding scheme has you create a variable. In the ``||logic:if then else||`` block, the ``upTime`` variable decreases every time the board is tilted more than 4 degrees in either direction, but it increases by one after every four seconds of being balanced. The variable also controls the NeoPixels lit up by the ``||light:graph||`` block. Remember that the two numbers in the ``||light:graph||`` block act like the numerator and denominator of a fraction. You want `10` to be the denominator because there are ten NeoPixels. If the variable ``upTime`` is the denominator, then when it increases or decreases by one, the number of NeoPixels lit up will change accordingly. The ``||input:on button A click||`` resets the variable ``upTime`` to zero to restart a new session.

```blocks
let upTime = 0
input.buttonA.onEvent(ButtonEvent.Click, function () {
    upTime = 0
})
forever(function () {
    if (input.rotation(Rotation.Pitch) > 9) {
        upTime += 1
        pause(2000)
    } else if (input.rotation(Rotation.Pitch) < -9) {
        upTime += -1
        pause(2000)
    } else {
        pause(4000)
        upTime += 1
    }
})
forever(function () {
    light.graph(upTime, 10)
    if (upTime == 10) {
        for (let i = 0; i < 4; i++) {
            music.playSound(music.sounds(Sounds.PowerUp))
            light.showAnimation(light.runningLightsAnimation, 1000)
        }
    }
})
```