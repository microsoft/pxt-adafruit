# Pulses and triggers


## Pulsed output

### On and off pulse

```blocks
pins.A1.digitalWrite(false)
input.buttonA.onEvent(ButtonEvent.Click, function () {
    pins.A1.digitalWrite(true)
    pause(2000)
    pins.A1.digitalWrite(false)
})
```

## Clock signal

Clock signals were discussed earlier in the [digital input](/learnsystem/pins-tutorial/digital-input/pin-events#clock-signals) section. Clock singals are regular pulses that alternate between high and low.

![Clock signal pulses](/static/cp/learn/pins-tutorial/digital-output/clock-signal.jpg)

A clock signal is output at a pin by writing a high level for half of the clock period and then writing a low level for the other half of the clock period. The following code will generate a clock signal on pin **A1** with a period of 10 milliseconds. The high and low pulses have a width of 5 milliseconds each.

```blocks
forever(function () {
    pins.A1.digitalWrite(true)
    pause(5)
    pins.A1.digitalWrite(false)
    pause(5)
})
```

```blocks
let clockCount = 0
pins.A6.onEvent(PinEvent.Fall, function () {
    if (clockCount < 100) {
        clockCount += 1
    } else {
        clockCount = 0
    }
    light.graph(clockCount, 100)
})
forever(function () {
    pins.A1.digitalWrite(true)
    control.waitMicros(1)
    pins.A1.digitalWrite(false)
    control.waitMicros(1)
})
```

## Triggers

![Pulse train triggers](/static/cp/learn/pins-tutorial/digital-output/pulse-train.jpg)

### Experiment: Trigger pulse

---

1. Connect an alligator clip lead to the **A1** pin.
2. Connect the other end of the lead to the **A6** pin.
3.  Download the following code to the board:

```blocks
forever(function () {
    pins.A1.digitalWrite(true)
    pins.A1.digitalWrite(false)
    pause(500)
})
let pixelNum = 0

pins.A6.onEvent(PinEvent.Rise, function () {
    light.clear()
    if (pixelNum > 9) {
        pixelNum = 0
    } else {
        pixelNum += 1
    }
    light.setPixelColor(pixelNum, 0xff0000)
})
```

## Some Example

```blocks
let delay = 0
pins.A6.onEvent(PinEvent.Rise, function () {
    light.setAll(0xb09eff)
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    delay += -100
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    delay += 100
})
pins.A6.onEvent(PinEvent.Fall, function () {
    light.clear()
})
delay = 1000
forever(function () {
    pins.A1.digitalWrite(true)
    pause(delay)
    pins.A1.digitalWrite(false)
    pause(delay)
})
```