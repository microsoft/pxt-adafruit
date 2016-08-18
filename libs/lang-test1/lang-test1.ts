//
// Note that this is supposed to run from command line.
// Do not use anything besides basic.pause, control.inBackground, console.log
//

//% shim=pxtrt::panic
function panic(code2: number): void { }

function msg(s: string): void {
    //console.log(s)
    //basic.pause(50);
}

function assert(cond: boolean, msg_: string) {
    if (!cond) {
        console.log("ASSERT: " + msg_);
        panic(45);
    }
}

console.log("Starting...")
basic.showNumber(0);

testBuffer()
testBufferShiftRotate()

basic.showNumber(2);
console.log("ALL TESTS OK")


function bufferIs(b: Buffer, a: number[]) {
    assert(b.length == a.length, "bis-len")
    for (let i = 0; i < a.length; ++i) {
        if (a[i] != b[i]) {
            assert(false, `bufferIs: buf[${i}]:${b[i]} != ${a[i]}`)
        }
    }
}

function testBuffer() {
    let b = pins.createBuffer(3);
    assert(b[0] == 0, "buf0");
    assert(b[1] == 0, "buf0");
    assert(b[2] == 0, "buf0");
    assert(b[-100000] == 0, "bufM");
    assert(b[100000] == 0, "bufM");

    b[0] = 42;
    bufferIs(b, [42, 0, 0]);
    b[2] = 41;
    bufferIs(b, [42, 0, 41]);

    b.rotate(1)
    bufferIs(b, [0, 41, 42]);
    b.rotate(-2)
    bufferIs(b, [41, 42, 0]);
    b.shift(1)
    bufferIs(b, [42, 0, 0]);
    b.rotate(9)
    bufferIs(b, [42, 0, 0]);
    b.rotate(-9)
    bufferIs(b, [42, 0, 0]);

    b.fill(4);
    bufferIs(b, [4, 4, 4]);

    b.fill(12, 1, 1);
    bufferIs(b, [4, 12, 4]);

    b.fill(13, 1, -1);
    bufferIs(b, [4, 13, 13]);

    b.fill(100, -1, -1);
    bufferIs(b, [4, 13, 13]);

    b.shift(-1)
    bufferIs(b, [0, 4, 13]);
}


function testBufferShiftRotate() {
    let b = pins.createBuffer(5);

    function initb() {
        for (let i = 0; i < b.length; ++i) {
            b[i] = i;
        }
    }
    function assertb(ex: number[]) {
        bufferIs(b, ex)
    }

    initb()
    assertb([0, 1, 2, 3, 4])

    //shifting
    initb()
    b.shift(-1);
    assertb([0, 0, 1, 2, 3])

    initb()
    b.shift(-1, 0, 3);
    assertb([0, 0, 1, 3, 4])

    initb()
    b.shift(-1, 1, 3);
    assertb([0, 0, 1, 2, 4])

    initb()
    b.shift(1)
    assertb([1, 2, 3, 4, 0])

    initb()
    b.shift(1, 1, 3)
    assertb([0, 2, 3, 0, 4])

    //rotating
    initb()
    b.rotate(-1);
    assertb([4, 0, 1, 2, 3])

    initb()
    b.rotate(-1, 0, 3);
    assertb([2, 0, 1, 3, 4])

    initb()
    b.rotate(-1, 1, 3);
    assertb([0, 3, 1, 2, 4])

    initb()
    b.rotate(2)
    assertb([2, 3, 4, 0, 1])

    initb()
    b.rotate(1, 1, 3)
    assertb([0, 2, 3, 1, 4])

}
