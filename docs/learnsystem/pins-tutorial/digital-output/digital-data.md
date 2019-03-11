# Digital data

## Parallel data

```blocks
let dataArray: boolean[][] = []
let dataItem: boolean[] = []
let data2: boolean[] = []
let data1: boolean[] = []
let data0: boolean[] = []
let dataIn = 0
data0 = [true, false, true]
data1 = [false, false, true]
data2 = [true, false, false]
dataArray.push(data0)
dataArray.push(data1)
dataArray.push(data2)
pins.A1.digitalWrite(false)
pins.A2.digitalWrite(false)
pins.A3.digitalWrite(false)
forever(function () {
    dataIn = 0
    pause(300)
    if (pins.A6.digitalRead()) {
        dataIn += 4
    }
    if (pins.A5.digitalRead()) {
        dataIn += 2
    }
    if (pins.A4.digitalRead()) {
        dataIn += 1
    }
    light.setPixelColor(dataIn, 0xff0000)
    pause(500)
    light.clear()
    pause(500)
})
forever(function () {
    pause(3000)
    if (dataArray.length > 0) {
        dataItem = dataArray.shift()
        pins.A1.digitalWrite(dataItem[0])
        pins.A2.digitalWrite(dataItem[1])
        pins.A3.digitalWrite(dataItem[2])
    } else {
        pins.A1.digitalWrite(false)
        pins.A2.digitalWrite(false)
        pins.A3.digitalWrite(false)
    }
})

```

```blocks
let dataArray: boolean[][] = []
let dataItem: boolean[] = []
let data2: boolean[] = []
let data1: boolean[] = []
let dataIn = 0
let data0: boolean[] = []
let data3: boolean[] = []


data0 = [true, false, true]
data1 = [false, false, true]
data2 = [true, false, false]
data3 = [true, true, true]
dataArray.push(data0)
dataArray.push(data1)
dataArray.push(data2)
dataArray.push(data3)

forever(function () {
    if (dataArray.length > 0) {
        dataItem = dataArray.shift()
        for (let bit of dataItem) {
            pins.A1.digitalWrite(bit)
            pins.A2.digitalWrite(true)
            pins.A2.digitalWrite(false)
            pause(300)
        }
        dataArray.push(dataItem)
    }
})
let digitalNum = 0
let bits = 0
pins.A5.onEvent(PinEvent.Rise, function () {
    if (bits > 2) {
        light.setPixelColor(digitalNum, 0xff0000)
        digitalNum = 0
        bits = 0
    } else {
        light.clear()
    }
    digitalNum = digitalNum * 2
    if (pins.A6.digitalRead()) {
        digitalNum += 1
    }
    bits += 1
})
```