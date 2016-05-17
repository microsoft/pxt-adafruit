# Documentation

```sim
basic.forever(() => {
  basic.showString("DOCS ");
})
input.onButtonPressed(Button.A, () => {
    led.stopAnimation();
    basic.showLeds(`
. . . . .
. # . # .
. . . . .
# . . . #
. # # # .`);
});
input.onButtonPressed(Button.B, () => {
    led.stopAnimation();
    basic.showLeds(`
. # . # .
# . # . #
# . . . #
. # . # .
. . # . .`);
});
``` 

* **[getting started](/getting-started)**   
* Browse the [API reference](/reference)
* Learn more about the [device](/device)
* Get started with [lessons](/lessons)
* Follow up with the [release notes](/release-notes)

### Developers

* Learn about [packages](/packages) (possibly using C++ or ARM thumb)
