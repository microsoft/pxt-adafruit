# Device

## Get the @boardname@

You can start out coding the @boardname@ using the [simulator](/device/simulator) or, get the real board here: [@boardname@](https://www.adafruit.com/product/3333).

## USB connection

When you plug in your @boardname@ with a [USB](/device/usb) cable, it will appear as new storage device called ``@drivename@``.

## Powering your @boardname@

When your @boardname@ is connected to your computer with the micro USB, it doesn’t need another power source. If it's not connected to your computer, tablet or mobile, you will need 3 x AAA 1.5 V batteries to power it.

The pins labeled **3.3V** and **GND** are the power supply pins. 
You can attach an external device such as a motor to these and power it using the battery or USB.
 
If you want, you can also buy the [base kit](https://www.adafruit.com/product/3517) which includes a battery pack and batteries.

## Drivers and bootloader

For Windows users, to fully use the USB connection, you may need to install a driver. See the [Windows driver installation](https://learn.adafruit.com/adafruit-circuit-playground-express/adafruit2-windows-driver-installation) page at https://www.adafruit.com.

Updates for the bootloader are found here: [Updating the bootloader](https://learn.adafruit.com/adafruit-circuit-playground-express/adafruit2-uf2-bootloader-details#updating-the-bootloader)

### ~hint
**Advanced users**

The bootloader is the "system software" for your @boardname@. If you need to update it to fix a problem or use a new feature, read the section on [updating the bootloader](https://learn.adafruit.com/adafruit-circuit-playground-express/adafruit2-uf2-bootloader-details#updating-the-bootloader) in the [bootloader](https://learn.adafruit.com/adafruit-circuit-playground-express/adafruit2-uf2-bootloader-details) page at https://www.adafruit.com.

### ~

## Device errors

Your @boardname@ may encounter a situation that prevents it from running your code. The system software that runs the programs on your board may notify you that an error occurred. These errors are called _panic_ codes and are numbers displayed in the pixels on the board. See the [Error codes](/device/error-codes) page for the types of errors that could happen on the @boardname@.

## Learn more

Take a look at the complete [overview](https://learn.adafruit.com/adafruit-circuit-playground-express/overview) of the @boardname@.