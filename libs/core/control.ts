/**
* Runtime and event utilities.
*/
//% weight=90 color="#BEAA07"
//% advanced=true
namespace control {

    /**
     * Display specified error code and stop the program.
     */
    // shim=pxtrt::panic
    export function panic(code: number) { }

    /**
     * Display specified error code and stop the program.
     */
    // shim=pxtrt::assert
    export function assert(cond: boolean, code: number) { }
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

//
// start tests
//

/*
var glb1: number;
var x: number;
var lazyAcc: number;
var sum: number;
var xyz = 12;


function testNums(): void {
    let x = 40 + 2;
    control.assert(x == 42, 1);
    x = 40 / 2;
    control.assert(x == 20, 2);
    let r = fib(15);
    control.assert(r == 987, 3);
    let x3 = doStuff(x, 2);
    control.assert(x3 == 10, 4);
    glb1 = 5;
    incrBy_2();
    control.assert(glb1 == 7, 5);
    incrBy_2();
    control.assert(glb1 == 9, 6);
    control.assert(Math.abs(-42) == 42, 7);
    control.assert(Math.abs(42) == 42, 8);
    control.assert(Math.sign(42) == 1, 9);
    testIf();
    control.assert((3 & 6) == 2, 10)
    control.assert((3 | 6) == 7, 11)
    control.assert((3 ^ 6) == 5, 12)
    control.assert((-10 >> 2) == -3, 13)
    // FAILS (16 bit only): control.assert((-10 >>> 20) == 4095, 14)
    control.assert((-10 << 2) == -40, 15)
    control.assert((10 << 2) == 40, 16)
    control.assert((10 >> 2) == 2, 17)
    control.assert((10 >>> 2) == 2, 18)
    control.assert(1000000 * 1000000 == -727379968, 19)
    control.assert(100000001 * 100000001 == 2074919425, 20)

    control.assert(105 % 100 == 5, 21)
}



function fib(p: number): number {
    if (p <= 2) {
        return p;
    }
    let p2 = p - 1;
    return fib(p2) + fib(p - 2);
}

function doStuff(x: number, x2: number): number {
    let x3 = x / x2;
    return x3;
}


function testIf(): void {
    let b = false;
    if (!b) {
        glb1 = 7;
    } else {
        control.assert(false, 21);
    }
    control.assert(glb1 == 7, 22);
    if (b) {
        control.assert(false, 23);
    } else {
        glb1 = 8;
    }
    control.assert(glb1 == 8, 24);
}


function incrBy_2(): void {
    glb1 = glb1 + 2;
}



function eqOp() {
    let x = 12
    control.assert((x += 10) == 22, 25)
    control.assert(x == 22, 26)
    x /= 2
    control.assert(x == 11, 27)

    let s = ("fo" + 1)
    let t = ("ba" + 2)
    s += t
    control.assert(s == "fo1b" + "a2", 28)
}

function testLazyOps(): void {
    lazyAcc = 0;
    if (incrLazyAcc(10, false) && incrLazyAcc(1, true)) {
        control.assert(false, 29);
    } else {
        control.assert(lazyAcc == 10, 30);
    }
    control.assert(lazyAcc == 10, 31);
    if (incrLazyAcc(100, true) && incrLazyAcc(1, false)) {
        control.assert(false, 32);
    } else {
        control.assert(lazyAcc == 111, 33);
    }
    lazyAcc = 0;
    if (incrLazyAcc(100, true) && incrLazyAcc(8, true)) {
        control.assert(lazyAcc == 108, 34);
    } else {
        control.assert(false, 35);
    }
    lazyAcc = 0;
    if (incrLazyAcc(10, true) || incrLazyAcc(1, true)) {
        control.assert(lazyAcc == 10, 36);
    } else {
        control.assert(false, 37);
    }
    control.assert(lazyAcc == 10, 38);
    if (incrLazyAcc(100, false) || incrLazyAcc(1, false)) {
        control.assert(false, 39);
    } else {
        control.assert(lazyAcc == 111, 40);
    }
    lazyAcc = 0;
    if (incrLazyAcc(100, false) || incrLazyAcc(8, true)) {
        control.assert(lazyAcc == 108, 41);
    } else {
        control.assert(false, 42);
    }
    lazyAcc = 0;
    if (incrLazyAcc(10, true) && incrLazyAcc(1, true) && incrLazyAcc(100, false)) {
        control.assert(false, 43);
    } else {
        control.assert(lazyAcc == 111, 44);
    }
    lazyAcc = 0;
    if (incrLazyAcc(10, true) && incrLazyAcc(1, true) || incrLazyAcc(100, false)) {
        control.assert(lazyAcc == 11, 45);
    } else {
        control.assert(false, 46);
    }

    lazyAcc = 0;
    control.assert((true ? incrLazyNum(1, 42) : incrLazyNum(10, 36)) == 42, 47)
    control.assert(lazyAcc == 1, 48);
    control.assert((false ? incrLazyNum(1, 42) : incrLazyNum(10, 36)) == 36, 49)
    control.assert(lazyAcc == 11, 50);
}

function incrLazyAcc(delta: number, res: boolean): boolean {
    lazyAcc = lazyAcc + delta;
    return res;
}

function incrLazyNum(delta: number, res: number) {
    lazyAcc = lazyAcc + delta;
    return res;
}

enum En {
    A,
    B,
    C,
    D = 4200,
    E,
}

enum En2 {
    D0 = En.D,
    D1,
    D2 = 1,
}


function testEnums() {
    let k = En.C as number
    control.assert(k == 2, 51)
    k = En.D as number
    control.assert(k == 4200, 52)
    k = En.E as number
    control.assert(k == 4201, 53)

    k = En2.D0 as number
    control.assert(k == 4200, 54)
    k = En2.D1 as number
    control.assert(k == 4201, 55)

    control.assert(switchA(En.A) == 7, 56)
    control.assert(switchA(En.B) == 7, 57)
    control.assert(switchA(En.C) == 12, 58)
    control.assert(switchA(En.D) == 13, 59)
    control.assert(switchA(En.E) == 12, 60)
    control.assert(switchA(-3 as En) == 12, 61)

    control.assert(switchB(En.A) == 7, 62)
    control.assert(switchB(En.B) == 7, 63)
    control.assert(switchB(En.C) == 17, 64)
    control.assert(switchB(En.D) == 13, 65)
    control.assert(switchB(En.E) == 14, 66)

    let kk = 1
    if (kk & En2.D2) {
    } else {
        control.assert(false, 67)
    }
    kk = 2
    if (kk & En2.D2) {
        control.assert(false, 68)
    }
}


function switchA(e: En) {
    let r = 12;
    switch (e) {
        case En.A:
        case En.B: return 7;
        case En.D: r = 13; break;
    }
    return r
}

function switchB(e: En) {
    let r = 33;
    switch (e) {
        case En.A:
        case En.B: return 7;
        case En.D: r = 13; break;
        case En.E: r = 14; break;
        default: return 17;
    }
    return r;
}

/*
serial.print(-10)
let v = (-10 >> 2)
serial.print(v)
control.assert((-10 >> 2) == -3, 13)


testNums();
light.setPixelColorRgb(0,0,200,0)
testIf();
light.setPixelColorRgb(1,0,200,0)
testLazyOps();
light.setPixelColorRgb(2,0,200,0)

testEnums();
light.setPixelColorRgb(3,0,200,0)
light.setPixelColorRgb(4,0,200,0)
*/
