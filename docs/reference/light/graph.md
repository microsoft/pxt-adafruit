# graph

Graph a number using the pixels on the pixel ring.

```sig
light.graph(0, 0);
```

The ``||light:graph||`` block turns the pixel ring into a lighted graph to display number values. When you graph values less than `10` the number of pixels that are turned on is the same as your value:

```blocks
light.graph(7, 10)
```

In this case, the _range_ of values you want to graph is `10` which match the total number of pixels on the board. If you wanted to graph values between `0` and `20`, each pixel now means a difference in value of `2` instead of `1`. To show a value of `10` when the range is `20`, 5 pixels will light up. This graph block shows the value of `10` when the range limit is `20`:

```block
light.graph(10, 20)
```

The pixel ring will have 5 pixels turned on since each pixel represents a change of `2` in value:

```sim
light.graph(10, 20)
```

## Auto scale

If you use `0` for **high** (or leave the parameter empty), the graph will _auto scale_. That means that the largest number you use in **value** will set the limit of the range. This way you can use ``||light:graph||`` many times, like in a loop, to show a bunch of numbers when you're not sure what the biggest one will be. As an example, let's graph the value of `10` once, then graph `100`. Graph `10` again and see how many pixels light up.

```blocks
light.graph(10)
pause(1000)
light.clear()
pause(1000)
light.graph(100)
pause(1000)
light.clear()
pause(1000)
light.graph(10)
```

The first two times a value is graphed, a new limit for the range is set. All the pixels are used to show both `10` and `100`. The next time `10` is graphed only one pixel is on because the last maximum value was `100` and that value set the range limit.

Auto scale will eventually reset and current **value** becomes the range limit if you haven't used ``||light:graph||`` in the last 10 seconds.

## Parameters

* **value**: a [number](/types/number) that is the value to show on the pixels.
* **high**: an optional high [number](/types/number) that is limit of the graphing range. A value of `0` lets the graph auto scale.

#### ~hint

The ``||light:graph||`` block also writes the number from **value** to the [serial](/reference/serial) port as a way to help you record
values.

#### ~

## Examples

### Graph of ten

Graph all 10 values between 1 and 10 on the pixels. Set the range limit to `10`.

```blocks
for (let i = 0; i <= 9; i++) {
    light.graph(i + 1, 10)
    pause(500)
}
```
### Accelerometer (g-meter)

Graph the acceleration of the board in the ``x`` direction on the pixels.

```blocks
forever(function () {
    light.graph(input.acceleration(Dimension.X))
})
``` 

### Sound meter

Show the loudness of sounds nearby on the pixels.

```blocks
forever(function () {
    light.graph(input.soundLevel())
})
```

### Auto range graph

Graph random values upto `1000`. Let them auto scale when displayed.

```blocks
forever(() => {
    light.graph(Math.randomRange(0, 1000))
    pause(500)
})
```

## See also

[set all](/reference/light/set-all)

```package
circuit-playground
```


