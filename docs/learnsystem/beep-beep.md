# Beep Beep

Speak your answer to a question with a _beep beep_ device.

**Source:** https://learn.adafruit.com/circuit-playground-beep-beep

Use these MakeCode blocks and JavaScript in this learn project.

## Code for: Starting point

**Source:** https://learn.adafruit.com/circuit-playground-beep-beep/starting-point

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.setAll(0xFF6600)
    music.playTone(700, music.beat(BeatFraction.Half))
    light.clear()
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    light.setAll(0xFF6600)
    music.playTone(700, music.beat(BeatFraction.Half))
    light.clear()
    loops.pause(250)
    light.setAll(0xFF6600)
    music.playTone(700, music.beat(BeatFraction.Half))
    light.clear()
})
```

## Code for: Refactoring 4

**Source:** https://learn.adafruit.com/circuit-playground-beep-beep/refactor-4

```typescript
///////////////////////////////////////////////////////////////////////////////
// Circuit Playground Yes No v4
//
// One beep (left button) = Yes
// Two beeps (right button) = No
//
// Author: Carter Nelson
// MIT License (https://opensource.org/licenses/MIT)

const PIXEL_COLOR = 0xFF6600;

///////////////////////////////////////////////////////////////////////////////
function lightsBeeps(repeats: number, note: number, duration: number, color: number) {
    for (let n = 0; n < repeats; n++) {
        light.setAll(0xFF6600)
        music.playTone(700, music.beat(BeatFraction.Half))
        light.clear();
        if (repeats > 1) loops.pause(duration / 2);
    }
}

///////////////////////////////////////////////////////////////////////////////
function indicateYes() {
    lightsBeeps(1, 700, 750, PIXEL_COLOR);
}

///////////////////////////////////////////////////////////////////////////////
function indicateNo() {
    lightsBeeps(2, 700, 500, PIXEL_COLOR);
}

///////////////////////////////////////////////////////////////////////////////
input.buttonA.onEvent(ButtonEvent.Click, indicateYes);
input.buttonB.onEvent(ButtonEvent.Click, indicateNo);
```
