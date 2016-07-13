# Stop Animation

Stop the animation that is playing and any animations that are waiting to
play.

```sig
led.stopAnimation()
```

### Example

This program...

```blocks
basic.showString("STOP ME! STOP ME! PLEASE, WON'T SOMEBODY STOP ME?");
input.onButtonPressed(Button.B, () => {
    led.stopAnimation();
});
'```
### See Also


