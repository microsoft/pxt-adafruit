# Simulator

The JavaScript simulator allows to test and execute most BBC micro:bit programs in the browser.
It allows to emulate sensor data or user interactions.

```sim
input.leftButton.onEvent(ButtonEvent.Click, () => {
});
input.rightButton.onEvent(ButtonEvent.Click, () => {
});
input.temperature(TemperatureUnit.Celsius)
input.lightLevel()
input.acceleration(Dimension.Y)
```