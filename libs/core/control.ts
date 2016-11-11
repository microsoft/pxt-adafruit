/**
* Runtime and event utilities.
*/
//% weight=90 color="#EEDA47"
//% advanced=true
namespace control {

    /**
     * Display specified error code and stop the program.
     */
    //% shim=pxtrt::panic
    export function panic(code: number) { }

}

/*
let anim = 0
while (true) {
    if (sensors.button(Button.Left)) {
        light.showAnimation(anim)
    } else if (sensors.button(Button.Right)) {
        serial.print(anim)
        light.clearPixels()
        if (anim == 5)
            anim = 0
        else 
            anim++
        control.delay(300)
    }
}
*/

/*
while (true) {
    if (sensors.button(Button.Left)) {
        let i = 9;
        let v = 255
        while (i >= 0) {
            light.setPixelColorRgb(i, v, 255 - v, v)
            i = i - 1
            v = v - 25
        }
    } else if (sensors.button(Button.Right)) {
            light.clearPixels()
    }
}
*/

/*
// procedure call with argument 
let i = 0
let k = 0
serial.print(i)
function doit(j: number) {
    serial.print(j)
    light.clearPixels()
    for(i=0; i<j; i++) {
        // serial.print(i)
        light.setPixelColorRgb(i, 200, 0 , 0)
    }
}

while (true) {
    if (sensors.button(Button.Left)) {
        doit(k)
        if (k == 10)
            k = 0
        else
            k++
    } else if (sensors.button(Button.Right)) {
        light.clearPixels()
    }
}


function doit(j: number) {
    serial.print(j)
    light.clearPixels()
    for(let i=0; i<j; i++) {
        // serial.print(i)
        light.setPixelColorRgb(i, 200, 0 , 0)
    }
}

let k = 0
while (true) {
    if (sensors.button(Button.Left)) {
        doit(k)
        if (k == 10)
            k = 0
        else
            k++
    } else if (sensors.button(Button.Right)) {
        light.clearPixels()
    }
}

*/