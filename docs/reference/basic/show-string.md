# Show String

Show a string on the [LED screen](/device/screen) one character at a time (scrolling from left to right).

```sig
basic.showString("Hello!")
```

### Parameters

* `text` - a [String](/reference/types/string)
* (optional) `ms` - [Number](/reference/types/number); the time (in milliseconds) before scrolling left by one LED; the larger the number, the slower the scroll

### Examples:

To display Hello:

```blocks
basic.showString("Hello")
```

To display the content of a string variable:

```blocks
let s = "Hi"
basic.showString(s)
```

### Other show functions

* use [show number](/reference/basic/show-number) to show a number on the screen
* use [show animation](/reference/basic/show-animation) to show a series of images on the screen

### Lessons

[answering machine](/lessons/answering-machine), [rock paper scissors](/lessons/rock-paper-scissors), [love meter](/lessons/love-meter), [digital pet](/lessons/digital-pet)

### See also

[String](/reference/types/string), [string functions](/reference/types/string-functions), [show number](/reference/basic/show-number), [show animation](/reference/basic/show-animation)

