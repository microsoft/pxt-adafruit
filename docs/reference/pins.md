# Pins

Use the pins for analog signals, digital signals, servos, and i2c.

```cards
pins.A1.digitalRead()
pins.A1.digitalWrite(false)
pins.A1.analogRead()
pins.A1.analogWrite(1023)
pins.A1.analogSetPeriod(20000)
pins.A1.servoWrite(180)
pins.A1.servoSetPulse(1500)
```

## I2C #i2c

```cards
pins.i2cReadNumber(0, NumberFormat.Int8LE, false)
pins.i2cWriteNumber(
0,
0,
NumberFormat.Int8LE,
false
)
pins.i2cWriteRegister(0, 0, 0)
```

## SPI #spi

```cards
pins.spiWrite(0);
pins.spiMode(3);
pins.spiFrequency(1000000);
pins.spiTransfer(null, null)
```