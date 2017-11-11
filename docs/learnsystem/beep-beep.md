# Beep Beep

Source: https://learn.adafruit.com/circuit-playground-beep-beep

## Starting point

```blocks
input.leftButton.onEvent(ButtonEvent.Down, () => {
    light.onboardStrip().showColor(16737792)
    pins.A8.playTone(700, 750)
    light.clear()
    light.onboardStrip().show()
})
input.rightButton.onEvent(ButtonEvent.Down, () => {
    light.onboardStrip().showColor(16737792)
    pins.A8.playTone(700, 750)
    light.clear()
    light.onboardStrip().show()
    loops.pause(250)
    light.onboardStrip().showColor(16737792)
    pins.A8.playTone(700, 750)
    light.clear()
    light.onboardStrip().show()
})
```

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
        light.onboardStrip().showColor(color)
        pins.A8.playTone(note, duration);
        light.clear();
        light.onboardStrip().show();
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
input.leftButton.onEvent(ButtonEvent.Down, indicateYes);
input.rightButton.onEvent(ButtonEvent.Down, indicateNo);
```