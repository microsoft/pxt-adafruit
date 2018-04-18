# @extends

## #example

```sim
let temp = input.temperature(TemperatureUnit.Celsius);
let level = input.lightLevel();
let accel = input.acceleration(Dimension.Y);
input.buttonA.onEvent(ButtonEvent.Click, function () {
    for (let i = 0; i < 2; i++) {
        let j = 0;
        while (j < 11) {
            if (j < 10) {
                light.setPixelColor(j, 0xffff00);
                pause(30);
            }
            if (j > 0) {
                light.setPixelColor(j - 1, 0x000000);
            }
            j++;
        }
    }
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    for (let k = 0; k < 2; k++) {
        light.setAll(0x00ff00);
        pause(200);
        light.setAll(0x000000);
        pause(200);
    }
})
```