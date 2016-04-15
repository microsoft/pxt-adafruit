# Show Number

Show a number on the [LED screen](/device/screen), one digit at a time (scrolling from left to right)

~~~~sig
basic.showNumber(2, 150)
~~~~

### Parameters

* value - a [Number](/reference/types/number)
* (optional) interval (ms) - [Number](/reference/types/number); the time (in milliseconds) before scrolling by one LED; the larger the number, the slower the scroll

### ~

To display the number 10:

~~~~blocks
basic.showNumber(10)
~~~~

To display the number stored in the `x` variable:

~~~~blocks
let x = 1
basic.showNumber(x)
~~~~

### Example: count to 5

This example uses a [for](/reference/loops/for) loop to show numbers ``1`` through ``5`` on the screen:

~~~~blocks
for (let i = 0; i < 5; i++) {
    basic.showNumber(i + 1)
    basic.pause(200)
}
~~~~

### Other show functions

* use [show string](/reference/basic/show-string) to show a string on the screen
* use [show animation](/reference/basic/show-animation) to show a series of images on the screen

### Lessons

* [lucky 7](/lessons/lucky-7)

### See also

[show string](/reference/basic/show-string), [show animation](/reference/basic/show-animation), [Number](/reference/types/number), [math library](/reference/math)

