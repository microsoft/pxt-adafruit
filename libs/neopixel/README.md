# NeoPixel driver

This library provides a driver for various Neo Pixel LED strips, 
see https://www.adafruit.com/category/168

NeoPixels consist of a number of RGB LEDs, every one of them controlled
separately.  

## Basic usage

```blocks
// Create a NeoPixel driver - specify the number of LEDs:
let strip = neopixel.create(DigitalPin.P0, 24)

// set pixel colors
strip.setPixelColor(0, 255, 255, 255) // white
strip.setPixelColor(1, 255, 0, 0)     // red
strip.setPixelColor(2, 0, 255, 0)     // green
strip.setPixelColor(3, 0, 0, 255)     // blue

// send the data to the strip
strip.show()
```

Use `strip.setBrigthness()` to lower the brightness (it's maxed out by default).

Use `strip.shift()` or `strip.rotate()` to shift the lights around.

## Example: Using accelerometer to control colors

This little program will let the position of the microbit control the color of the first LED.
This first LED will then get shifted further away every 100ms.

```blocks
let strip = neopixel.create(DigitalPin.P0, 24)
while (true) {
    let x = input.acceleration(Dimension.X) / 2
    let y = input.acceleration(Dimension.Y) / 2
    let z = input.acceleration(Dimension.Z) / 2
    strip.setPixelColor(0, x, y, -z);
    strip.shift(1);
    strip.show();
    basic.pause(100);
}
```
