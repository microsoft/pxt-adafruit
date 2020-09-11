# About

Welcome to the **Microsoft MakeCode** editor for the **@boardname@**!

## Circuit Playground Express

Check out the awesome hardware spec at **[Adafruit.com](https://www.adafruit.com/product/3333)**.

![@boardname@ image](/static/cp/cpx-about.jpg)

### ~ alert

#### There are three Circuit Playground boards

Heads up! This editor only works for the Circuit Playground **Express**, not the **Classic** or **Bluefruit**.

### ~

## Programming: [Blocks](/blocks) or [JavaScript](/javascript)

You can program the @boardname@ using [Blocks](/blocks) or [JavaScript](/javascript) in your web browser:

### Blocks

```block
input.buttonA.onEvent(ButtonEvent.Click, () => {
    light.showRing(`blue blue blue blue blue blue blue blue blue blue`)
})
```

### JavaScript

```typescript
input.buttonA.onEvent(ButtonEvent.Click, () => {
    light.showRing(`blue blue blue blue blue blue blue blue blue blue`)
})
```

The editor works in most [modern browsers](/browsers) without needing any installation. Once loaded in
the browser, it works while you're [offline](/offline) too.

## [Compile and Flash: Your Program!](/device/usb)

When you have your code ready, you connect your @boardname@ to a computer via a USB cable 
**then press the reset button** so it appears as a mounted drive (named **CPLAYBOOT**). 

Compilation into machine code from [Blocks](/blocks) or [JavaScript](/javascript) happens in the browser. You save the binary 
program to a **.uf2** file. You then copy the file to the **CPLAYBOOT** drive, which flashes the device with the new program.

## Simulator: Test Your Code

You can run your code using the **@boardname@** simulator, all within the confines of a web browser. 
The simulator has support for the LED pixels, buttons, as well as the accelerometer, light sensor,
temperature sensor, and digital I/O pins.

```sim
forever(() => {
    light.showAnimation(light.rainbowAnimation, 1000)
})
```

## Adafruit Daily Newsletter

Keep up with news about the @boardname@ and read about new projects and ideas in the **MakeCode** section of the [Adafruit Daily](http://makecode.adafruitdaily.com) newsletter.

```package
light
```
