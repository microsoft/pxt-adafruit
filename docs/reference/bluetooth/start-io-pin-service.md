# Bluetooth IO Pin Service 

![](/static/bluetooth/Bluetooth_SIG.png)

The Bluetooth IO pin service makes it possible for another device such as a smartphone to communicate with other electronic 'things' connected to a micro:bit's edge connector. You could for example, use your smartphone to switch on or off a light which is connected to the micro:bit or your smartphone could receive data collected from a sensor connected to the micro:bit. In fact you could do both of these things at the same time since the Bluetooth IO pin service lets you interact with multiple 'pins' on the edge conector in different ways all at the same time. 

No additional code is needed on the micro:bit to use the Bluetooth IO pin service from another device. 

~~~~sig
bluetooth.startIOPinService();
~~~~

### Example: Starting the Bluetooth IO pin service

The following code shows the Bluetooth IO pin service being started:

~~~~blocks
bluetooth.startIOPinService();
~~~~

### Video - IO pin service demo starts at 3:49

[![micro:bit Bluetooth demo video](/static/bluetooth/microbit_pin_io.png)](
    http://www.youtube.com/watch?v=aep_GVowKfs "Click to launch YouTube video"
    )

### Advanced
 
For more advanced information on the micro:bit Bluetooth IO pin service including information on using a smartphone, see the [Lancaster University micro:bit runtime technical documentation](http://lancaster-university.github.io/microbit-docs/ble/iopin-service/)

### See also

[Bluetooth SIG](https://www.bluetooth.com)

[Bluetooth on micro:bit resources](http://bluetooth-mdw.blogspot.co.uk/p/bbc-microbit.html)

