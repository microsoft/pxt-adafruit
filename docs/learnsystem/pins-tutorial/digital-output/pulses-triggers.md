# Pulses and triggers

## On and off pulse

```blocks
pins.A1.digitalWrite(false)
input.buttonA.onEvent(ButtonEvent.Click, function () {
    pins.A1.digitalWrite(true)
    pause(2000)
    pins.A1.digitalWrite(false)
})
```

# Data pulses

```blocks

let data0 = [true, false, true]
let data1 = [false, false, true]
let data3 = [true, true, false]

let dataArray: boolean[][] = []

dataArray.push(data0)
dataArray.push(data1)
dataArray.push(data2)

for each
input.buttonA.onEvent(ButtonEvent.Click, function () {
    pins.A1.digitalWrite(true)
    pause(2000)
    pins.A1.digitalWrite(false)
})
```