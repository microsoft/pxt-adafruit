# Map

Re-maps a number from one range to another. That is, a value of ``from low`` would get mapped to ``to low``, a value of ``from high`` to ``to high``, values in-between to values in-between, etc.

Does not constrain values to within the range, because out-of-range values are sometimes intended and useful. The `math->clamp` function may be used either before or after this function, if limits to the ranges are desired.

```sig
pins.map(0, 0, 4, 0, 1023);
```

### Parameters

* ``value``: [Number](/reference/types/number) - the value to map
* ``from low``: [Number](/reference/types/number)  - lower bound of the origin interval
* ``from high``: [Number](/reference/types/number)  - upper bound of the origin interval
* ``to low``: [Number](/reference/types/number)  - lower bound of the target interval
* ``to high``: [Number](/reference/types/number)  - upper bound of the target interval

## Example

Map the value read from the analog pin ``P0`` to an LED index between ``0`` and ``4``.

```blocks
let value1 = pins.analogReadPin(AnalogPin.P0)
let index = pins.map(value1, 0, 1023, 0, 4)
led.plot(0, index)
```

### See also

[analog read pin](/reference/pins/analog-read-pin)

