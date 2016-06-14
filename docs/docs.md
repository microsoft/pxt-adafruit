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
* Get started with [projects](/projects)
* Learn more about the [device](/device)
* Browse the [API reference](/reference)
* Frequently Asked Question [faq](/faq)
* Follow up with the [release notes](/release-notes)

### Developers

* Learn about [packages](/packages) (possibly using C++ or ARM thumb)
