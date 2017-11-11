### Base GPIO Test
```blocks
function set_gpio(state: boolean) {
    pins.A0.digitalWrite(state)
}

while (true) {
    set_gpio(true);
    set_gpio(false);
}
```

### Context Switch Test
```blocks
function set_gpio(state: boolean) {
    pins.A0.digitalWrite(state)
}

function high() {
    while (1) {
        set_gpio(true);
        loops.pause(0);
    }
}

function low() {
    while (1) {
        set_gpio(false);
        loops.pause(0);
    }
}

set_gpio(false);

control.runInBackground(high)
control.runInBackground(low)
```

### Event Bus Test Immediate

```blocks
const MESSAGEBUS_ID = 5000
const MESSAGEBUS_VALUE = 5000

function set_gpio(state: boolean) {
    pins.A0.digitalWrite(state)
}

function event_handler()
{
    set_gpio(false);
}

control.onEvent(MESSAGEBUS_ID, MESSAGEBUS_VALUE, event_handler, 
    DAL.MESSAGE_BUS_LISTENER_IMMEDIATE);

while (true) {
    set_gpio(true);
    control.raiseEvent(MESSAGEBUS_ID, MESSAGEBUS_VALUE)    
    loops.pause(10)
}
```

### Event Bus Test Normal
```blocks
const MESSAGEBUS_ID = 5000
const MESSAGEBUS_VALUE = 5000

function set_gpio(state: boolean) {
    pins.A0.digitalWrite(state)
}

function event_handler()
{
    set_gpio(false);
}

control.onEvent(MESSAGEBUS_ID, MESSAGEBUS_VALUE, event_handler);

while (true) {
    set_gpio(true);
    control.raiseEvent(MESSAGEBUS_ID, MESSAGEBUS_VALUE)    
    loops.pause(10)
}
```

### Recursive Fiber Test

```blocks
const FACTORIAL_N = 11
const THREADS_N = 4
let completionCount = 0;

function print_factorial(s: string) {
    serial.writeLine(s)
}

function factorial(n: number): number {
    let s = "Factorial depth: "
    s = s + n;

    print_factorial(s);

    loops.pause(10);
    return (n == 1) ? 1 : n * factorial(n - 1);
}

function factorial_fiber() {
    factorial(FACTORIAL_N);
    completionCount++;

    serial.writeLine("POP: " + completionCount)
}

serial.writeLine("HELLO");

control.deviceHeapPrint();

for (let i = 0; i < THREADS_N; i++)
    control.runInBackground(factorial_fiber);

while (completionCount != THREADS_N) {
    loops.pause(10)
}

control.deviceHeapPrint();

completionCount = 0;

for (let i = 0; i < THREADS_N; i++)
    control.runInBackground(factorial_fiber);

while (completionCount != THREADS_N) {
    loops.pause(10)
}

control.deviceHeapPrint();

serial.writeLine("OUT LAST")

while (true) { }
```

### for fun
```blocks
light.showRing(
`red yellow red yellow red red yellow red yellow red`
)
```