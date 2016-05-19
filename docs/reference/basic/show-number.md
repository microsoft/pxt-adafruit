# Show Number

Show a number on the [LED screen](/device/screen). It will slide left if it has more than one digit.

~~~~sig
basic.showNumber(2, 150)
~~~~

### Parameters

* **value** is a [Number](/reference/types/number).
* **interval (ms)** is an optional [Number](/reference/types/number). It means the number of milliseconds before sliding the **value** left by one LED each time. Bigger intervals make the sliding slower.

### Examples:

To show the number 10:

~~~~blocks
basic.showNumber(10)
~~~~

To show the number stored in the `x` variable:

~~~~blocks
let x = 1
basic.showNumber(x)
~~~~

### Example: count to 5

This example uses a [for](/reference/loops/for) loop to show numbers ``0`` through ``5`` on the screen:

~~~~blocks
for (let i = 0; i < 6; i++) {
    basic.showNumber(i)
    basic.pause(200)
}
~~~~

### Other show functions

* use [show string](/reference/basic/show-string) to show a [String](/reference/types/string) with letters on the screen
* use [show animation](/reference/basic/show-animation) to show a group of pictures on the screen, one after another

### Lessons

* [lucky 7](/lessons/lucky-7)

### See also

[show string](/reference/basic/show-string), [show animation](/reference/basic/show-animation), [Number](/reference/types/number), [math library](/reference/math)

