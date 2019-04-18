# Troubleshooting downloads from the Mac

## Step 1: Check your cable

Make sure that your @boardname@ is connected to your computer with a micro USB cable and that it's switched to [bootloader mode](https://learn.adafruit.com/adafruit-circuit-playground-express?view=all#step-1-bootloader-mode). You should see a **@driveDisplayName@** drive appear in Windows Explorer when it's connected.

![@driveDisplayName@ drive](/static/cp/device/windows-cplayboot-drive.png)

**If you see the @driveDisplayName@ drive go on to step 2**.

If you don't see the drive:

* Make sure that the USB cable is working.
>Does the cable work on another computer? If not, find a different cable to use. Some cables may only provide a power connection and don't actually transfer data.
* Try another USB port on your computer.
* Follow all the instructions in [Step 1: Bootloader mode](https://learn.adafruit.com/adafruit-circuit-playground-express?view=all#step-1-bootloader-mode) of the @boardname@ overview page.

## Step 2: Check your bootloader version

It's possible that the bootloader version on the @boardname@ needs an update. Let's check:

1. Go to the **@driveDisplayName@** drive.
2. Open the **INFO_UF2.TXT** file.

![](/static/cp/device/cp-drive-contents.png)

The first line will tell you the bootloader's version number. It should say something like ``UF2 Bootloader v1.23.0``, containing the version number.

![](/static/cp/device/info-uf2-txt.png)

**If you are on MAC 14.0.2 or higher and the version is less than v1.23.0**, you **NEED** to update your @boardname@. Go to **Step 3** and follow the upgrade instructions.

If the version is **v2.4.0**, or higher, then **you have the right bootloader**. You can try posting a question on the [Adafruit support forum for Circuit Playground Express](https://forums.adafruit.com/viewforum.php?f=58). Here, you can **skip the rest of these steps**.

## Step 3: Upgrade the firmware

1. Put your @boardname@ into **bootloader Mode**. To do this, follow the directions in [Step 1: Bootloader mode](https://learn.adafruit.com/adafruit-circuit-playground-express?view=all#step-1-bootloader-mode) of the @boardname@ overview page.
2. Download the latest bootloader uf2 file from this page: [Updating the Bootloader](https://learn.adafruit.com/adafruit-circuit-playground-express?view=all#updating-the-bootloader). Click the button for **Circuit Playground Express** to get the correct file.
![](/static/cp/device/latest-bootloader-download.png)<br/>
3. Drag and drop the file you just downloaded onto the **@driveDisplayName@** drive.
4. When the copy finishes, the LED will go off and the @boardname@ resets. You will see the **@driveDisplayName@** drive reappear shortly.
5. The upgrade is complete! You can open the **INFO_UF2.TXT** file to check and see that the bootloader version changed to the match the version of the `uf2` file you copied.

### ~hint

If needed, the Adafruit website has additional instructions on how to set your device into [bootloader mode](https://learn.adafruit.com/adafruit-circuit-playground-express?view=all#step-1-bootloader-mode) and how to [update the bootloader](https://learn.adafruit.com/adafruit-circuit-playground-express?view=all#updating-the-bootloader).

### ~

## Step 4: Final check

Try to [manually copy your program onto the device](https://learn.adafruit.com/adafruit-circuit-playground-express?view=all#step-2-compile-and-download). Try this program if you don't have one in the editor already.

```blocks
forever(function () {
    light.showAnimation(light.rainbowAnimation, 500)
})
```