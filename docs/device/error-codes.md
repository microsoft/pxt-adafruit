# @extends

## #error-info

Your @boardname@ may encounter a situation that prevents it from running your code. The system software that runs the programs on your board may notify you that an error occurred. It will show this error as a binary number displayed on the pixel LEDs. These error numbers are called _panic_ codes. When an error happens that causes a panic code, your program will stop and you'll need to reset the board to start again.

A panic code is shown as a binary number where each pixel is a binary digit of the error code. A `blue` pixel means that the digit is `0` and a `red` pixel is a `1`. The first pixel (pixel 0) is the least significatn digit of the code. The panic code for `PANIC_CODAL_HARDWARE_CONFIGURATION_ERROR` is `90`, or `0001011010` in binary, so the pixel colors are:

Pixel | Color | Bit Value
-|-|-
0 | blue | 0
1 | red | 1
2 | blue | 0
3 | red | 1
4 | red | 1
5 | blue | 0
6 | red | 1
7 | blue | 0
8 | blue | 0
9 | blue | 0
<br/>

On the board they display like this:

```sim
forever(function () {
    light.setAll(0x0000ff)
    light.setPixelColor(1, 0xff0000)
    light.setPixelColor(3, 0xff0000)
    light.setPixelColor(4, 0xff0000)
    light.setPixelColor(6, 0xff0000)
    pause(2000)
    light.clear()
    pause(1000)
})
```