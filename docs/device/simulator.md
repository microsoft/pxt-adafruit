# @extends

### #example

```sim
let accel = 0
let level = 0
let temp = 0
input.buttonB.onEvent(ButtonEvent.Click, function () {
	
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
	
})
temp = input.temperature(TemperatureUnit.Celsius)
level = input.lightLevel()
accel = input.acceleration(Dimension.Y)
```