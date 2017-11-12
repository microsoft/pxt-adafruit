# graph

Graph a number with the pixels on the pixel ring.

```sig
light.graph(0, 0);
```
The ``||light:graph||`` block turns your pixels into a lighted graph to display number values. The total pixels in the
strip make the range for the graph. If you have 20 pixels in your ring and you want to display a
value between `0` and `100`, each pixel lighted amounts to `5`. So, with this range, the value
of `45` will show as 10 pixels on the ring.

For each value, you set **high** as the top of the range and the pixels light up to the point of how
much **value** is a part of **high**.

Also, if use `0` for **high**, the graph will _auto scale_. That means that the largest number you use
in **value** will set the top of the range. This way you can use graph many times, like in a loop, to show
a bunch of numbers where you're not sure what the biggest one will be. Auto scale will reset itself, though, to the
current value if you haven't used ``||light:graph||`` in the last 10 seconds.

## Parameters

* **value**: a [number](/types/number) that is the value to show on the graph.
* **high**: a [number](/types/number) that is top number in the graph scale. A value of
`0` lets the graph auto scale.

#### ~hint
The ``||light:graph||`` block also writes the number from **value** to the serial port as a way to help you record
values.
#### ~

## Examples

### Graph of ten

Graph 10 values between 0 and 100 on the pixels.

```blocks
for (let i = 0; i <= 10; i++) {
    light.graph(i * 10, 100)
    loops.pause(500)
}
```
### Auto range graph

Graph the value of `1000`. Graph other values but let them auto scale when displayed.

```blocks
light.graph(1000, 0)
loops.forever(() => {
    light.graph(Math.randomRange(0, 1000), 0)
    loops.pause(500)
})
```

## See also

[``||set all||``](/reference/light/set-all)

```package
circuit-playground
```


