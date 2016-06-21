# Bluetooth Accelerometer Service 

![](/static/bluetooth/Bluetooth_SIG.png)

The Bluetooth accelerometer service allows another device such as a smartphone to wirelessly receive data from the micro:bit's accelerometer. An accelerometer detects motion. More precisely, it measures acceleration in one or more of three directions which we call X, Y and Z. 

Using the Bluetooth accelerometer service you could, for example, create a smartphone application which makes a loud noise whenever your micro:bit (or the important thing you've attached it to) is moved. Or you could use your micro:bit to control the movement of a cartoon character in a game on your smartphone just by tilting the micro:bit in the direction you want the character to move in.     

No additional code is needed on the micro:bit to use the Bluetooth accelerometer service from another device.

~~~~sig
bluetooth.startAccelerometerService();
~~~~

### Example: Starting the Bluetooth accelerometer service

The following code shows the Bluetooth accelerometer service being started:

~~~~blocks
bluetooth.startAccelerometerService();
~~~~

### Video - Accelerometer service demo - Starts at 0:18

[![micro:bit Bluetooth demo video](/static/bluetooth/microbit_accelerometer.png)](
    http://www.youtube.com/watch?v=aep_GVowKfs "Click to launch YouTube video"
    )

### Advanced
 
For more advanced information on the micro:bit Bluetooth accelerometer service including information on using a smartphone, see the [Lancaster University micro:bit runtime technical documentation](http://lancaster-university.github.io/microbit-docs/ble/accelerometer-service/)

### See also

[Bluetooth SIG](https://www.bluetooth.com)

[Bluetooth on micro:bit resources](http://bluetooth-mdw.blogspot.co.uk/p/bbc-microbit.html)

