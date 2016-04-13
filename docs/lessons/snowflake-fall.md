# snowflake fall blocks lesson

design a blinking rectangle animation.

### @video td/videos/snowflake-fall-0

## Topic

Forever

## Quick Links

* [activity](/lessons/snowflake-fall/activity)
* [quiz](/lessons/snowflake-fall/quiz)
* [quiz answers](/lessons/snowflake-fall/quiz-answers)
* [challenges](/lessons/snowflake-fall/challenges)

## Prior learning/place of lesson in scheme of work

Learn how to show LEDs with a, `pause` to pause program execution for a specified amount of milliseconds. We will be learning how to show images using forever loop as well as simple commands, such as pause and show LEDs.

## Documentation

* **show LEDs** : [read more...](/reference/basic/show-leds)
* **pause** : [read more...](/reference/basic/pause)
* **forever** : [read more...](/reference/basic/forever)

```cards
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.forever(() => {})
```
