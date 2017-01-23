# About

Welcome to the code editor fo the **@boardname@**, a small computer board packaged with sensors and LEDs.

### ~ hint

Heads up! This editor only works for the Circuit Playground **Express**. The "non-Express" is not supported yet.

### ~

## Hardware

Check out **[Adafruit.com](https://adafruit.com/circuitplaygroundpxt)**.

![](/static/cp/CPlayExpressDiagram.jpg)

## Programming: [Blocks](/blocks) or [JavaScript](/javascript)

You can program the micro:bit using [Blocks](/blocks) or [JavaScript](/javascript) in your web browser via the [micro:bit APIs](/reference):

```block
input.leftButton.onEvent(ButtonEvent.Click, () => {
    light.builtin.showAnimationFrame(light.rainbowCycleAnimation())
})
```
```typescript
input.leftButton.onEvent(ButtonEvent.Click, () => {
    light.builtin.showAnimationFrame(light.rainbowCycleAnimation())
})
```

The editor work in [most modern browsers](/browsers), work [offline](/offline) once loaded and do not require any installation. 

## [Compile and Flash: Your Program!](/device/usb)

When you have your code ready, you connect your @boardname@ to a computer via a USB cable 
**then press the reset button** so it appears as a mounted drive (named **CPLAY**). 

Compilation to machine code from [Blocks](/blocks) or [JavaScript](/javascript) happens in the browser. You save the binary 
program to a *.uf2** file, which you then copy to the micro:bit drive, which flashes the device with the new program.

## Simulator: Test Your Code

You can run your code using the micro:bit simulator, all within the confines of a web browser. 
The simulator has support for the LED screen, buttons, as well as compass, accelerometer, and digital I/O pins.

```sim
control.forever(() => {
    light.builtin.showAnimationFrame(light.rainbowCycleAnimation())
})
```
