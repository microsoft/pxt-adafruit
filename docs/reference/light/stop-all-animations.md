# stop All Animations

Stop the pixel animation showing right now and any other animations ready to show.

```sig
light.stopAllAnimations()

```

## Example

Show the ``rainbow`` aninmation for 10 seconds on start. If the ``A`` button
is pressed before 10 seconds is over, stop the ``rainbow``.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function() {
    light.stopAllAnimations();
})

light.showAnimation(light.rainbowAnimation, 500);
```

## See Also

[``||show animation||``](/reference/light/show-animation)

```package
circuit-playground
```
