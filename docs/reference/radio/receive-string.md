# Receive String

Reads the next radio packet if any and returns the first string.

## Important Security Consideration

The functions in the ``radio`` namespace allow the BBC micro:bit to communicate with other micro:bits.

This API does not contain any form of encryption, authentication or authorization. It's purpose is solely for use as a teaching aid to demonstrate how simple communications operates, and to provide a sandpit through which learning can take place.

For serious applications, BLE should be considered a substantially more secure alternative.

```sig
radio.receiveString()
```

### Return value

* the first [string](/reference/types/string) of the packet if any. ```""``` otherwise.

### Examples

Read the string broadcasted by other micro:bits and display it.

```blocks
radio.onDataReceived(() => {
    basic.showString(radio.receiveString());
});
```

A simple program to send whether you are happy, or sad over ```radio```, using the A or B button to select an emotion.

```blocks
let data: string = "";
input.onButtonPressed(Button.A, () => {
    radio.sendString("H");
});
input.onButtonPressed(Button.B, () => {
    radio.sendString("S");
});
radio.onDataReceived(() => {
    data = radio.receiveString();
    if ("H" == data) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `);
    } else if ("S" == data) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `);
    } else {
        basic.showString("?");
    }
});
```

### See also

[send string](/reference/input/send-string), [on data received](/reference/radio/on-data-received)
