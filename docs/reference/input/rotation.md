# Rotation

Find how much the micro:bit is tilted in different directions.

```sig
input.rotation(Rotation.Roll);
```

## ~hint

The BBC micro:bit has a part called the **accelerometer** that can
check how the micro:bit is moving.

## ~

### Parameters

* which direction you are checking: `Rotation.Pitch` (up and down) or `Rotation.Roll` (left and right)

### Returns

* a [number](/reference/types/number) that means how much the microbit is tilted in the direction you say, from `0` to `360` degrees

### Example: micro:bit leveler

This program helps you move the BBC micro:bit until it is level.  When
it is level, the micro:bit shows a smiley.

If you are running this program in a browser, you can tilt the
micro:bit with your mouse.


```blocks
let pitch = 0;
basic.forever(() => {
    pitch = input.rotation(Rotation.Pitch);
    let roll = input.rotation(Rotation.Roll);
    if (Math.abs(pitch) < 10 && Math.abs(roll) < 10) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            `);
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `);
        }
	});
```

### See also

[acceleration](/reference/input/acceleration), [compass-heading](/reference/input/compass-heading)

