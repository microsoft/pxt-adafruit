# Pins

Control currents in Pins for analog/digital signals, servos, i2c, ...

```cards
pins.digitalReadPin(DigitalPin.P0);
pins.digitalWritePin(DigitalPin.P0, 0);
pins.analogReadPin(AnalogPin.P0);
pins.analogWritePin(AnalogPin.P0, 1023);
pins.analogSetPeriod(AnalogPin.P0, 20000);
pins.map(0, 0, 1023, 0, 4);
pins.onPulsed(DigitalPin.P0, PulseValue.High, () => {
    
});
pins.pulseDuration();
pins.servoWritePin(AnalogPin.P0, 180);
pins.servoSetPulse(AnalogPin.P0, 1500);
pins.i2cReadNumber(0, NumberFormat.Int8LE);
pins.i2cWriteNumber(0, 0, NumberFormat.Int8LE);
pins.setPull(DigitalPin.P0, PinPullMode.PullDown);
pins.analogPitch(0, 0);
pins.analogSetPitchPin(AnalogPin.P0);
```
