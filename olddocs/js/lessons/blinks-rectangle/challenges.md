# rectangle explosion challenges

These challenges will allow you to make an exploding rectangle. #docs

**Challenge 0**

This [guided tutorial](https://test.microbit.co.uk/td/lessons/blinks-rectangle/tutorial) will help you show an animation forever!

First, let's make a small rectangle blink forever.

```blocks
basic.forever(() => {
    basic.showAnimation(`
. . . . . . . . . .
. # # # . . . . . .
. # # # . . . . . .
. . . . . . . . . .
. . . . . . . . . .
`, 400)
})
```

**Challenge 1**

Let's begin creating our explosion effect by adding another rectangle animation that displays a slightly larger rectangle after the first one.

```
basic.forever(() => {
    basic.showAnimation(`
. . . . . . . . . .
. # # # . . . . . .
. # # # . . . . . .
. . . . . . . . . .
. . . . . . . . . .
`, 400)
    basic.showAnimation(`
. . . . . . . . . .
# # # # # . . . . .
# # # # # . . . . .
# # # # # . . . . .
. . . . . . . . . .
`, 400) 
})
```

**Challenge 2**

To finalize our explosion effect, let's add a rectangle that is bigger than the last two we have created.

```
basic.forever(() => {
    basic.showAnimation(`
. . . . . . . . . .
. # # # . . . . . .
. # # # . . . . . .
. . . . . . . . . .
. . . . . . . . . .
`, 400)
    basic.showAnimation(`
. . . . . . . . . .
# # # # # . . . . .
# # # # # . . . . .
# # # # # . . . . .
. . . . . . . . . .
`, 400)
    basic.showAnimation(`
# # # # # . . . . .
# # # # # . . . . .
# # # # # . . . . .
# # # # # . . . . .
# # # # # . . . . .
`, 400) 
})
```

**Challenge 3**

If you notice, the rectangle explodes fairly slow. Let's make it explode faster by decreasing the intervals of the animation from 400 to 200.

