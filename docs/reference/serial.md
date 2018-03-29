# Serial

Reading and writing data over a serial connection.

## ~hint

The @boardname@ can read data from and write data to another computer or device with a serial connection using USB. To use serial communication between your board and MakeCode, you need the [MakeCode for Adafruit](https://www.microsoft.com/store/apps/9pgzhwsk0pgd) app for Windows 10 and a USB cable.

You can also write data to an output log with the [console](/reference/console) functions without having to use a serial connection.

## ~

```cards
serial.writeLine("");
serial.writeNumber(0);
serial.writeValue("x", 0);
serial.writeString("");
```

## Advanced

```cards
serial.writeBuffer(null);
```

## See Also

[write line](/reference/serial/write-line),
[write string](/reference/serial/write-string),
[write number](/reference/serial/write-number),
[write value](/reference/serial/write-value),
[write buffer](/reference/serial/write-buffer),
[console](/reference/console) 
