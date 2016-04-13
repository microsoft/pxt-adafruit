# strobe light quiz answers

Learn how to create a blinking images with a for loop.

This is the answer key for the [strobe light quiz](/lessons/strobe-light/quiz).

## 1. What is a for loop?

Answers will vary. In general, for loop refers to the code that repeats for a fixed number of times. We specify the LED using x, y coordinates.

## 2. Consider the following code

```blocks
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        led.plot(i, j)
    }
}
```

If the rectangle below represents a board that is 5 LEDs wide and 5 LEDs tall, place an X approximately where the LED is lighted. Explain why the LED is lighted there.

![](/static/mb/lessons/cascade-0.png)

This code turns on specific LED. Plot turns on the specified LED on the LED screen. We specify the LED using x, y coordinates. The code lights on the LEDs

``x`` - the x coordinate or horizontal position (0,1,2,3,4)

``y`` - the y coordinate or vertical position (0,1,2,3,4)

## 3. Consider the following code

```blocks
for (let i1 = 0; i1 < 3; i1++) {
    for (let j1 = 0; j1 < 3; j1++) {
        led.plot(i1, j1)
    }
}
```

If the rectangle below represents a board that is 5 LEDs wide and 5 LEDs tall, place an X approximately where the LED is lighted. Explain why the LED is lighted there.

![](/static/mb/lessons/cascade-1.png)

This code turns on specific LED. Plot turns on the specified LED on the LED screen. We specify the LED using x, y coordinates.

``x`` - the x coordinate or horizontal position (0,1,2)

``y`` - the y coordinate or vertical position (0,1,2)

## 4. Consider the following code

```blocks
for (let i2 = 0; i2 < 2; i2++) {
    for (let j2 = 0; j2 < 2; j2++) {
        led.plot(i2, j2)
    }
}
```

If the rectangle below represents a board that is 5 LEDs wide and 5 LEDs tall, place an X approximately where the LED is lighted. Explain why the LED is lighted there.

![](/static/mb/lessons/cascade-2.png)

This code turns on specific LED. Plot turns on the specified LED on the LED screen. We specify the LED using x, y coordinates.

``x`` - the x coordinate or horizontal position (0,1)

``y`` - the y coordinate or vertical position (0,1)

