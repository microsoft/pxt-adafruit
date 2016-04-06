# I2C FRAM driver

This library provides a driver for this FRAM part: https://www.adafruit.com/products/1895

The memory is accessed one byte at a time. The library provides a utility functions
to write an entire buffer.

## Reading/writing byte

```
let addr = 100
i2c_fram.writeByte(addr, 42)
let val = i2c_fram.readByte(addr)
console.log(`${addr}: ${val}`)
```

## Reading/writing a buffer

This code will log current time and acceleration in X axis every second.

```
let bufSz = 8
for (let addr = 0; addr < 0x8000; addr += bufSz) {
    let buf = pins.createBuffer(bufSz)
    buf.setNumber(NumberFormat.Int32LE, 0, input.runningTime())
    buf.setNumber(NumberFormat.Int32LE, 4, input.acceleration(Dimension.X))
    i2c_fram.writeBuffer(addr, buf)
    basic.pause(1000)
}
```
