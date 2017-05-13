# OO Blocks

This proposal stems from review of API choices we've made for Microbit, while
designing a new API for the SAMD-based boards. These
were highly influenced by the choices we made for Touch Develop, which aren't
necessarily the best choices for TypeScript API design.

## Pins

The current Microbit APIs in TS look like this:

```
pins.digitalWritePin(DigitalPin.P0, 0)
pins.analogWritePin(AnalogPin.P0, 1023)
input.onButtonPressed(Button.A, () => { ... })
```

Note that the first two say 'pin' three times, wheres the last one says
'button' twice, and adds 'input' for a good measure.
Moreover, the name `DigitalPin` is polluting global scope
(to avoid `pins.digitalWritePin(pins.DigitalPin.P0, 0)`).
Clearly, this is needlessly verbose. Thus, the proposal is
have something like this:

```
pins.P0.digitalWrite(0)
pins.P0.analogWrite(1023)
input.buttonA.onPressed(() => { ... })
```

That would lead to much nicer intellisense experience in TS - you start
with an object (a pin or a button) and the intellisense tells you what
you can do with it. For example, if the pin is only digital, and not analog,
then `analogWrite` wouldn't show (that is `AnalogPin` would be a subclass of `DigialPin`).

It's quite clear this looks better from a pure TS perspective, but
we also need to consider Blocks and conversion both ways.

The proposal is to leave blocks exactly as they are, that is something like:

```
digital write pin [P0] to [0]
analog write pin [P0] to [1023]
on button [A] pressed ...
```

Certain types, like `AnalogPin` and `DigitalPin`, are annotated with
`//% fixedInstances`. Arguments of such types are replaced with drop-downs in Blocks.
The contents of drop-downs is all global symbols annotated with `//% fixedInstance`
(these are two distinct annotations) with compatible return type.

The code would be something like this:

```
namespace pins {
  //% blockInstances=pins
  export class AnalogPin extends DigitalPin {
    //% ... block="analog write|pin %name|to %value"
    public analogWrite(value: number): void { ... }
  }

  //% fixedInstance
  export const P0: AnalogPin
  //% fixedInstance
  export const P1: AnalogPin
  // ...
  //% fixedInstance
  export const P12: DigitalPin
}
```

## Neopixels

We could then apply it also to current object-oriented APIs, like the Neopixel.
It looks like this:

```
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.showColor(NeoPixelColors.Red)
```

When converted into blocks this is really confusing. Instead, we could have
something like this:

```
namespace neopixel {
    //% blockAutoCreate
    export function create(pin = P0, size = 24, mode = RGB): Strip { ... }
    //% blockAutoInstance=strip
    export class Strip {
       setPin(...) { ... }
       setSize(...) { ... }
       ...
    }
}
```

This would instruct Blocks that if it needs an instance of a neopixel strip (because someone
is calling `neopixel show color [...]`), then it should add at the beginning of the
JavaScript program `let strip = neopixel.create()` and use the variable `strip` thereafter.
Note, that this initial assignment would be completely invisible in Blocks.

It requires that the creation function has some sensible defaults, and if there is need
to override them from Blocks, there need to be setter functions.

It also prevents using more than one neostrip in Blocks (but allow it in JS).

It also requires the block decompiler to recognize this pattern.

A simpler solution would be to have something like:

```
namespace neopixel {
    export let instance:Strip
    ...
}
```

Plus some compiler magic to initialize it (maybe make it into a getter).
However, this would look ugly in JavaScript - `neopixel.instance.showColor(...)`.


## Considerations

### Wording order

Consider `digital write pin [P0] to [0]`. It's a bit more similar to
`pins.digitalWritePin(DigitalPin.P0, 0)` than to
`pins.P0.digitalWrite(0)`. Not sure how kids would judge it.

### Monaco drawer

How does this apply to the text editor drawer we're adding?

We could still have `pins.digialWrite(...)` in there, and just fill
the default parameter, like `pins.P0.digitalWrite(...)`.

