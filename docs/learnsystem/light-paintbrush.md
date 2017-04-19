# Light Paintbrush

Source: https://learn.adafruit.com/lightpaint-cplay/

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

let c = NeoPixelColors.Green;

control.forever(() => {
    sensorValue = pins.A10.analogRead();
    brightVal = Math.map(sensorValue, 0, 1023, 0, 225);

    X = input.acceleration(Dimension.X);
    Y = input.acceleration(Dimension.Y);

    if ((X >= 1023) && (Y < 1023)) {      //+x, -y = GREEN
        c = NeoPixelColors.Green;
    }
    else if ((X < 1023) && (Y < 1023)) { //-x, -y = BLUE
        c = NeoPixelColors.Blue;
    }
    else if ((X >= 1023) && (Y >= 1023)) { //+x, +y = RED
        c = NeoPixelColors.Red;
    }
    else if ((X < 1023) && (Y >= 1023)) {  //-x, +y = YELLOW
        c = NeoPixelColors.Yellow;
    }
    light.pixels.setBrightness(brightVal);
    light.pixels.showColor(c);
})
```