# Shake

You can find when someone is shaking the BBC micro:bit by checking its
**accelerometer** (it finds whether the micro:bit is speeding up or
slowing down).

Unscramble these blocks in the editor to show a frownie when someone
shakes the micro:bit. (Ouch!)

```shuffle
input.onGesture(Gesture.Shake, () => {
    basic.showLeds(`
. . . . .
. # . # .
. . . . .
. # # # .
# . . . #`);
});
```
Click **Compile** to move your program to the BBC micro:bit!

### ~button /getting-started/coin-flipper
NEXT: COIN FLIPPER GAME
### ~
