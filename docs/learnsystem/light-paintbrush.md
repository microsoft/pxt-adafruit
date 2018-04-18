# Light Paintbrush

Paint with light in midair!

Source: https://learn.adafruit.com/lightpaint-cplay/

Use these code blocks in this learn project.

## Code for: Code the Light Paintbrush

```blocks
// ---------------------------------------------------------------------------
//Circuit Playground Light Paintbrush
// John Park
// for Adafruit Industries
//
// Use the Circuit Playground as a long exposure photography light paintbrush
// tilt to change color
// adjust brightness with the 10k potentiometer
//
/*      +X 
*       __
*      /  \  
* +Y  |    |  -Y
*      \__/
*      
*       -X
*/
//
// MIT license, check LICENSE for more information
//
//
// ---------------------------------------------------------------------------

let sensorValue = 0;
let brightVal = 20;

let X = 0;
let Y = 0;

let c = 0x00ff00;

forever(() => {
    sensorValue = pins.A10.analogRead();
    brightVal = Math.map(sensorValue, 0, 1023, 0, 225);

    X = input.acceleration(Dimension.X);
    Y = input.acceleration(Dimension.Y);

    if ((X >= 1023) && (Y < 1023)) {      //+x, -y = GREEN
        c = 0x00ff00;
    }
    else if ((X < 1023) && (Y < 1023)) { //-x, -y = BLUE
        c = 0x0000ff;
    }
    else if ((X >= 1023) && (Y >= 1023)) { //+x, +y = RED
        c = 0xff0000;
    }
    else if ((X < 1023) && (Y >= 1023)) {  //-x, +y = YELLOW
        c = 0xffff00;
    }
    light.setBrightness(brightVal);
    light.setAll(c);
})
```

## Continuing with MakeCode

This learn project continues but now uses MakeCode:

https://learn.adafruit.com/lightpaint-cplay/makecode-for-circuit-playground-express
