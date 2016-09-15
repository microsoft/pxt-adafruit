# Troubleshooting Transfer

You can’t drag and drop more than one hex file at once onto your micro:bit. If
you try to drag and drop a second hex file onto your micro:bit  before the first
file has finished downloading, then the second file may fail in different ways.

When the first program has been written to the micro:bit, the drive will
disengage. If you drag and drop a second file at this point it may not find the
drive and the second write will fail.

The errors may look like this:

**Windows**

![](/static/mb/device/usb-windows-copy-file-error.jpg)

**Mac**

![](/static/mb/device/usb-osx-copy-file-error.png)

Or it may appear that there are two hex files on your micro:bit so the micro:bit
won’t be able to run multiple files. To rectify this, unplug your micro:bit and
plug it in again. Make sure that your micro:bit  appears as `MICROBIT` and not
`MAINTENANCE`.
