# Bluetooth Magnetometer Service 

![](/static/bluetooth/Bluetooth_SIG.png)

The Bluetooth magnetometer service allows another device such as a smartphone to wirelessly receive data from the micro:bit's magnetometer. The magnetometer measures the strength and direction of magnetic fields including the earth's and so it can be used as a digital compass and indicate the way the micro:bit is pointing relative to magnetic north.

Using the Bluetooth magnetometer service you could, for example, create a smartphone application which displays your direction of travel, updating it in real time.   

No additional code is needed on the micro:bit to use the Bluetooth magnetometer service from another device.

~~~~sig
bluetooth.startMagnetometerService();
~~~~

### Example: Starting the Bluetooth magnetometer service

The following code shows the Bluetooth magnetometer service being started:

~~~~blocks
bluetooth.startMagnetometerService();
~~~~

### Video - Magnetometer service demo

[![micro:bit Bluetooth demo video](/static/bluetooth/microbit_magnetometer.png)](
    http://www.youtube.com/watch?v=C_0VL4Gp4_U "Click to launch YouTube video"
    )

### Advanced
 
For more advanced information on the micro:bit Bluetooth magnetometer service including information on using a smartphone, see the [Lancaster University micro:bit runtime technical documentation](http://lancaster-university.github.io/microbit-docs/ble/magnetometer-service/)

### See also

[Bluetooth SIG](https://www.bluetooth.com)

[Bluetooth on micro:bit resources](http://bluetooth-mdw.blogspot.co.uk/p/bbc-microbit.html)

