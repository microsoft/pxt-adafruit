# On Bluetooth Connected 

![](/static/bluetooth/Bluetooth_SIG.png)

For another device like a smartphone to use any of the Bluetooth "services" which the micro:bit has, it must first connect to the micro:bit. This block starts an [event handler](/reference/event-handler) which in this case will run when something connects to your micro:bit using Bluetooth.

You could use this event handler to display a letter "C" on the micro:bit LED grid so you know you have a Bluetooth connection. Or you might want to send some data you've been accumulating to your smartphone as soon as it connects to your micro:bit. Maybe you've been using the accelerometer in your micro:bit to count your steps for example. Using this event handler you could send the accumulated step count to your phone when it establishes a Bluetooth connection.     

~~~~sig
bluetooth.onBluetoothConnected(() => {
});
~~~~

### Example: Displaying "C" when another device connects to the micro:bit over Bluetooth

~~~~blocks
bluetooth.onBluetoothConnected(() => {
    basic.showString("C");
});
~~~~

### Video - on Bluetooth connected

[![micro:bit Bluetooth demo video](/static/bluetooth/microbit_on_connected.png)](
    http://www.youtube.com/watch?v=HyBcsD9Eh6I "Click to launch YouTube video"
    )

### See also

[Bluetooth SIG](https://www.bluetooth.com)

[Bluetooth on micro:bit resources](http://bluetooth-mdw.blogspot.co.uk/p/bbc-microbit.html)

