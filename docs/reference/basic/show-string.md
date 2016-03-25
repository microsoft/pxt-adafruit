# Show String

Show a string on the [LED screen](/microbit/device/screen) one character at a time (scrolling from left to right).

```sig
basic.showString("Hello!")
```

### Parameters

* `text` - a [String](/microbit/reference/types/string)
* (optional) `ms` - [Number](/microbit/reference/types/number); the time (in milliseconds) before scrolling left by one LED; the larger the number, the slower the scroll

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

* use [show number](/microbit/reference/basic/show-number) to show a number on the screen
* use [show animation](/microbit/reference/basic/show-animation) to show a series of images on the screen

### Lessons

[answering machine](/microbit/lessons/answering-machine), [rock paper scissors](/microbit/lessons/rock-paper-scissors), [love meter](/microbit/lessons/love-meter), [digital pet](/microbit/lessons/digital-pet)

### See also

[String](/microbit/reference/types/string), [string functions](/microbit/reference/types/string-functions), [show number](/microbit/reference/basic/show-number), [show animation](/microbit/reference/basic/show-animation)

