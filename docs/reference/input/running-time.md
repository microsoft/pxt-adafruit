# Running Time

Get the number of milliseconds elapsed since the script began. 1,000 milliseconds = 1 second.

```sig
input.runningTime();
```

### Returns

* [Number](/microbit/reference/types/number)

### Example: elapsed time

This code gets the elapsed time since the start of the program execution and displays it on the screen.

```blocks
let now = input.runningTime()
basic.showNumber(now)
```

### Lessons

[speed button](/microbit/lessons/speed-button)

### See also

[show number](/microbit/reference/basic/show-number), [pause](/microbit/reference/basic/pause)

