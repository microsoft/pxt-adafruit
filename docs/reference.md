# Reference

### @section full

### ~column 

### Basic

[show number](/microbit/reference/basic/show-number)

~~~~block
basic.showNumber(2)
~~~~

[show string](/microbit/reference/basic/show-string)

~~~~block
basic.showString('Hello!')
~~~~

[show LEDs](/microbit/reference/basic/show-leds)

~~~~block
basic.showLeds(`. . . . . 
. # . # . 
. . . . . 
# . . . # 
. # # # .`)
~~~~

[clear screen](/microbit/reference/basic/clear-screen)

~~~~block
basic.clearScreen()
~~~~

[forever](/microbit/reference/basic/forever)

~~~~block
basic.forever(() => { })
~~~~

[pause](/microbit/reference/basic/pause)

```block
basic.pause(200)
```

### Input

[on button pressed](/microbit/reference/input/on-button-pressed)

```block
input.onButtonPressed(Button.A, () => {})
```

[on pin pressed](/microbit/reference/input/on-pin-pressed)

```block
input.onPinPressed(TouchPin.P0, () => {})
```

[on shake](/microbit/reference/input/on-shake)

![](/static/mb/blocks/contents-22.jpg)

[on logo up](/microbit/reference/on-logo-up)

![](/static/mb/on-logo-up-0.jpg)

[on logo down](/microbit/reference/on-logo-down)

![](/static/mb/on-logo-down-0.jpg)

[on screen up](/microbit/reference/on-screen-up)

![](/static/mb/on-screen-up-0.jpg)

[on screen down](/microbit/reference/on-screen-down)

![](/static/mb/on-screen-down-0.jpg)

[button is pressed](/microbit/reference/button-is-pressed)

![](/static/mb/button-is-pressed-0.png)

[compass heading](/microbit/reference/compass-heading)

![](/static/mb/compass-heading-0.png)

[temperature](/microbit/reference/temperature)

![](/static/mb/temperature-0.png)

[acceleration](/microbit/reference/input/acceleration)

![](/static/mb/acceleration-0.png)

[rotation](/microbit/reference/rotation)

![](/static/mb/rotation-0.png)

[magnetic force](/microbit/reference/magnetic-force)

![](/static/mb/magnetic-force-0.png)

[running time](/microbit/reference/running-time)

![](/static/mb/running-time-0.png)

### Loops

[for](/microbit/reference/loops/for)

```block
for(let i = 0;i<5;i++) {}
```

[repeat](/microbit/reference/loops/repeat)

![](/static/mb/blocks/contents-0.png)

[while](/microbit/reference/loops/while)

```block
while(true) {}
```

[forever](/microbit/reference/basic/forever)

```block
basic.forever(() => {})
```



### ~

### ~column 

### Logic

[if](/microbit/reference/logic/if)

```block
if(false) {
}
```

[Boolean](/microbit/reference/types/boolean) values: *true*; *false*

```block
true
false
```

Boolean binary operators: *and* (conjunction); *or* (disjunction)

```block
true && false;
true || false;
```

Boolean negation operator

```block
!true
```

Comparison operators (=, !=, <, >, <=, >=)

```block
0 == 0;
1 !- 0;
0 < 1;
1 > 0;
0 <= 1;
1 >= 0;
```

### Variables

[Assign](/microbit/reference/variables/assign) (set) a variable's value

```block
let x = 0;
```

Get a variable's value

```block
let x = 0;
x;
```

[Change](/microbit/reference/variables/change-var) a variable's value

```block
let x = 0;
x+=1;
```

### Math

[Numeric](/microbit/reference/types/number) values: 0, 1, 2, ...

```block
0;
1;
2;
```

Arithmetic binary operation (+, -, *, /)

```block
0+1;
0-1;
1*2;
3/4;
```

Absolute value

```block
Math.abs(-5);
```

Minimum/maximum of two values

```block
Math.min(0, 1);
Math.max(0, 1);
```

Random value

```block
Math.random(5);
```

### LED

[plot](/microbit/reference/led/plot)

```block
led.plot(2,2)
```

[unplot](/microbit/reference/led/unplot)

```block
led.unplot(2,2)
```

[point](/microbit/reference/point)

```block
led.point(2,2)
```

[brightness](/microbit/reference/brightness)

```block
led.brightness()
```

[set brightness](/microbit/reference/set-brightness)

```block
led.setBrightness(255)
```

[stop animation](/microbit/reference/stop-animation)

```block
led.stopAnimation()
```

[plot bar graph](/microbit/reference/led/plot-bar-graph)

```block
led.plotBarGraph(0, 1023)
```

### Game

[create sprite](/microbit/reference/game/create-sprite)

![](/static/mb/create-sprite-0.png)

[move](/microbit/reference/game/move)

![](/static/mb/game-library/move-0.png)

[turn](/microbit/reference/game/turn)

![](/static/mb/game-library/turn-0.png)

[change](/microbit/reference/game/change)

![](/static/mb/change-0.png)

[set](/microbit/reference/game/set)

![](/static/mb/blocks/contents-21.png)

[reports](/microbit/reference/reports)

![](/static/mb/game-library/position-0.png)

[touching](/microbit/reference/touching)

![](/static/mb/game-library/touching-0.png)

[touching edge](/microbit/reference/touching-edge)

![](/static/mb/game-library/touching-edge-0.png)

[if on edge, bounce](/microbit/reference/logic/if-on-edge-bounce)

![](/static/mb/game-library/if-on-edge-bounce-0.png)

[change score by](/microbit/reference/change-score-by)

![](/static/mb/game-library/pic1.png)

[score](/microbit/reference/score)

![](/static/mb/game-library/pic2.png)

[start countdown](/microbit/reference/start-countdown)

![](/static/mb/game-library/pic3.png)

[game over](/microbit/reference/game-over)

![](/static/mb/game-library/pic0.png)

### Music

[play tone](/microbit/reference/play-tone)

![](/static/mb/play-tone-0.jpg)

[ring tone](/microbit/reference/ring-tone)

![](/static/mb/ring-tone-0.jpg)

[rest](/microbit/reference/rest)

![](/static/mb/rest-0.jpg)

[tempo](/microbit/reference/tempo)

![](/static/mb/tempo-0.jpg)

[set tempo](/microbit/reference/set-tempo)

![](/static/mb/change-tempo-0.jpg)

[change tempo](/microbit/reference/music/set-tempo)

![](/static/mb/change-tempo-by-0.jpg)

### Comments

[comment](/microbit/reference/comment)

### Images

[show image](/microbit/reference/show-image)

![](/static/mb/show-image-0.png)

[scroll image](/microbit/reference/scroll-image)

![](/static/mb/scroll-image-0.png)

[create image](/microbit/reference/create-image)

![](/static/mb/create-image-0.png)


### ~

### ~column 

### Pins

[digital read pin](/microbit/reference/pins/digital-read-pin)

![](/static/mb/digital-read-pin-0.png)

[digital write pin](/microbit/reference/pins/digital-write-pin)

![](/static/mb/digital-write-pin-0.png)

[analog read pin](/microbit/reference/pins/analog-read-pin)

![](/static/mb/analog-read-pin-0.png)

[analog write pin](/microbit/reference/pins/analog-write-pin)

![](/static/mb/blocks/contents-23.png)

[analog set period](/microbit/reference/pins/analog-set-period)

![](/static/mb/analog-set-period-0.png)

[servo write pin](/microbit/reference/pins/servo-write-pin)

![](/static/mb/servo-write-pin-0.png)

[servo set pulse](/microbit/reference/pins/servo-set-pulse)

![](/static/mb/servo-set-pulse-0.png)

[map](/microbit/reference/map)

![](/static/mb/map-0.png)


## Devices

Functions in this category require to be connected to a remote device.

[tell camera to](/microbit/reference/devices/tell-camera-to)

![](/static/mb/tell-camera-to-0.png)

[tell remote control to](/microbit/reference/devices/tell-remote-control-to)

![](/static/mb/tell-remote-control-to-0.png)

[raise alert to](/microbit/reference/devices/raise-alert-to)

![](/static/mb/raise-alert-to-0.png)

[on notified](/microbit/reference/on-notified)

![](/static/mb/on-notified-0.png)

[on gamepad button](/microbit/reference/on-gamepad-button)

![](/static/mb/on-gamepad-button-0.png)

[on notified](/microbit/reference/on-notified)

![](/static/mb/on-notified-0.png)

[signal strength](/microbit/reference/signal-strength)

![](/static/mb/blocks/contents-24.png)

[on signal strength changed](/microbit/reference/on-signal-strength-changed)

![](/static/mb/blocks/contents-25.png)

### ~

