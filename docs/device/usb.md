# Run Scripts on your micro:bit

How to compile, transfer, and run a script on your micro:bit.

While you're writing and testing your scripts, you'll mostly be running scripts in your browser by clicking the `PLay` button 
(see [run code in your browser](/device/simulator) for info about this).

Once your masterpiece is complete, you can compile your script and run it on your micro:bit.

## Requirements

You need the following things to transfer and run a script on your micro:bit:

* A-Male to Micro USB cable to connect your computer to your micro:bit. This is the same cable that is commonly used to connect a smart phone to a computer.
* a PC running Windows 7 of later, or a Mac running OS X 10.6 or later
* access to the Internet

## Step 1: Connect your micro:bit to your computer

First, connect the micro:bit:

1. Connect the small end of the USB cable to the micro USB port on your micro:bit.

2. Connect the other end of the USB cable to a USB port on your computer.

Your computer should recognise your micro:bit as a new drive. On computers running Windows, MICROBIT appears as a drive under Devices and drives. On a Mac it appears as a new drive under Devices.

Windows

![](/static/mb/device/usb-0.jpg)

Mac (picture bvabdbco)
WARN: unknown picture: bvabdbco:5x3

## Step 2: Compile your script

Next, compile your script:

1. Sign in to Touch Develop on your computer.

2. Open your script (find the script in **My Scripts** and click `Edit`).

3. Click `compile`. Your script is converted into a hex file that you can transfer and run on your micro:bit.

4. When prompted, choose to save the compiled file on your computer (or anywhere other than the micro:bit). Depending on which browser you are using, the download will adopt the download behaviour of that particular browser.

### Windows

** Chrome**

Your .hex file appears as a download at the bottom of the browser. Open up your windows file explorer. Your micro:bit appears as a drive called MICROBIT.

**Right click** on the download and select **show in folder**. Drag and drop the hex file from the download folder onto the MICROBIT drive.

Alternatively, you can drag and drop the downloaded hex file from the bottom of the browser onto the file explorer and onto the MICROBIT drive.

![](/static/mb/device/usb-1.jpg)

**Firefox**

A dialogue box will appear, asking whether you would like to open or save your hex file. Select **Save**, then **OK** and the file will appear in your downloads in the top right of your browser. Select the **blue arrow**, select the relevant file and drag and drop it onto your Windows Explorer and onto your MICROBIT drive.

![](/static/mb/device/usb-2.jpg)

![](/static/mb/device/usb-3.jpg)

**IE10**

Click on compile. You will see a message “Do you want to save this .hex file.” Select **Save**.

### Mac

** Safari**

When you select **compile** in Safari on Mac, your file will be downloaded to your downloads folder. Go to your downloads folder and open the file. In Safari the file will appear as unknown.txt rather than a named .hex file. Drag and drop it onto your MICROBIT drive.

![](/static/mb/device/usb-4.jpg)

**Firefox**

A dialogue box will appear, asking whether you would like to open or save your hex file. Select **Save** and **OK** and the file will then appear in your downloads in the top right of your browser.  Click on **Show in Finder** and the file will appear in your downloads folder. Select the file and drag and drop it onto your MICROBIT drive.

![](/static/mb/device/usb-5.jpg)

![](/static/mb/device/usb-6.jpg)

**Chrome**

When you select **compile** in Chrome, the file will be downloaded to the bottom of the browser in .hex format. Click on the small arrow and select **Show in Finder**. This will show the file in your download folder. Drag and drop the file onto your MICROBIT drive.

![](/static/mb/device/usb-7.jpg)

## Step 3: Transfer the file to your micro:bit

1. The file will transfer onto your micro:bit.

2. If you're using Windows, you can use **Send to** as described below.

3. The LED on the back of your micro:bit flashes during the transfer (which should only take a few seconds).

4. Once transferred, the code will run automatically on your micro:bit. To rerun your program, press the reset button on the back of your micro:bit. The reset button automatically runs the newest file on the micro:bit.

**Send to**: If you're using Windows you use *Send to* in File Explorer:

- In File Explorer, right-click on the hex file (created in Step 2 above), choose **Send to**, and then **MICROBIT**.

![](/static/mb/device/usb-8.jpg)

By copying the script onto the 'MICROBIT' drive, you have programmed it into the flash memory on the micro:bit, which means even after you unplug the micro:bit, your script will still run if the micro:bit is powered by battery.

## Troubleshooting

You can’t drag and drop more than one hex file at once onto your micro:bit. If you try to drag and drop a second hex file onto your micro:bit  before the first file has finished downloading, then the second file may fail in different ways.

When the first program has been written to the micro:bit, the drive will disengage. If you drag and drop a second file at this point it may not find the drive and the second write will fail.

The errors may look like this:

**Windows**

![](/static/mb/device/usb-9.jpg)

**Mac**

![](/static/mb/device/usb-10.png)

Or it may appear that there are two hex files on your micro:bit so the micro:bit won’t be able to run multiple files. To rectify this, unplug your micro:bit and plug it in again. Make sure that your micro:bit  appears as MICROBIT and not MAINTENANCE.

### See also

[Run code in a browser](/device/simulator)

