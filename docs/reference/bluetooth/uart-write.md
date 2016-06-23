# UART Write 

### ~hint
![](/static/bluetooth/Bluetooth_SIG.png)

For another device like a smartphone to use any of the Bluetooth "services" which the micro:bit has, it must first connect to the micro:bit.

### ~

The [Bluetooth UART service](start-uart-service.md) allows another device such as a smartphone to exchange any data it wants to with the micro:bit, in small chunks. 

With the Bluetooth UART service running, this block allows a micro:bit to send data to a Bluetooth connected device.

```sig
bluetooth.uartWrite("");
```

### Example: Starting the Bluetooth UART service and then sending "HELLO" whenever button A is pressed and another device has connected over Bluetooth

```blocks
let connected = 0;
bluetooth.onBluetoothConnected(() => {
    basic.showString("C");
    connected = 1;
});
bluetooth.onBluetoothDisconnected(() => {
    basic.showString("D");
    connected = 0;
});
bluetooth.startUartService();
input.onButtonPressed(Button.A, () => {
    if (connected == 1) {
        bluetooth.uartWrite("HELLO");
    }
});
```

### Video - UART service guessing game

https://www.youtube.com/watch?v=PgGeWddMAZ0

### Advanced
 
For more advanced information on the micro:bit Bluetooth UART service including information on using a smartphone, see the [Lancaster University micro:bit runtime technical documentation](http://lancaster-university.github.io/microbit-docs/ble/uart-service/)

### See also

[Bluetooth SIG](https://www.bluetooth.com), [Bluetooth on micro:bit resources](http://bluetooth-mdw.blogspot.co.uk/p/bbc-microbit.html)

```package
microbit-bluetooth
```
