# About

Welcome to the **Microsoft MakeCode** editor for the **@boardname@**!

## ~ hint

Heads up! This editor only works for the Circuit Playground **Express**, not the **Classic**.

## ~

## Circuit Playground Express

Check out the awesome hardware spec at **[Adafruit.com](https://www.adafruit.com/product/3333)**.

![@boardname@ image](/static/cp/cpx-about.jpg)

## Programming: [Blocks](/blocks) or [JavaScript](/javascript)

You can program the @boardname@ using [Blocks](/blocks) or [JavaScript](/javascript) in your web browser:

```block
input.buttonA.onEvent(ButtonEvent.Click, () => {
    light.showRing(`blue blue blue blue blue blue blue blue blue blue`)
})
```
```typescript
input.buttonA.onEvent(ButtonEvent.Click, () => {
    light.showRing(`blue blue blue blue blue blue blue blue blue blue`)
})
```

The editor work in [most modern browsers](/browsers), work [offline](/offline) once loaded and do not require any installation. 

## [Compile and Flash: Your Program!](/device/usb)

When you have your code ready, you connect your @boardname@ to a computer via a USB cable 
**then press the reset button** so it appears as a mounted drive (named **CPLAYBOOT**). 

Compilation to machine code from [Blocks](/blocks) or [JavaScript](/javascript) happens in the browser. You save the binary 
program to a **.uf2** file, which you then copy to the **CPLAYBOOT** drive, which flashes the device with the new program.

## Simulator: Test Your Code

You can run your code using the **@boardname@** simulator, all within the confines of a web browser. 
The simulator has support for the LED screen, buttons, as well as compass, accelerometer, and digital I/O pins.

```sim
forever(() => {
    light.showAnimation(light.rainbowAnimation, 1000)
})
```

```package
light
```
