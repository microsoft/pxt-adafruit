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
                light.setPixelColor(j, Colors.Yellow);
                pause(30);
            }
            if (j > 0) {
                light.setPixelColor(j - 1, Colors.Black);
            }
            j++;
        }
    }
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    for (let k = 0; k < 2; k++) {
        light.setAll(Colors.Green);
        pause(200);
        light.setAll(Colors.Black);
        pause(200);
    }
})
```