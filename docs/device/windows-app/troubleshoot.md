# Troubleshooting downloads from the Windows 10 App

### ~ avatar

Is the [Windows App](https://www.microsoft.com/store/apps/9pgzhwsk0pgd) not downloading your program properly? Let's try to figure out why!

### ~

## Step 1: Check your cable

Make sure that your @boardname@ is connected to your computer with a micro USB cable and that it is [switched to bootloader mode](https://learn.adafruit.com/adafruit-circuit-playground-express?view=all#step-1-bootloader-mode). You should see a **@driveDisplayName@** drive appear in Windows Explorer when it's connected.

![@driveDisplayName@ drive](/static/cp/device/windows-cplayboot-drive.png)

**If you can see the @driveDisplayName@ drive go to step 2**.

If you can't see the drive:
* Make sure that the USB cable is working.
>Does the cable work on another computer? If not, find a different cable to use. Some cables may only provide a power connection and don't actually transfer data.
* Try another USB port on your computer.
* Follow all the instructions in [Step 1: Bootloader mode](https://learn.adafruit.com/adafruit-circuit-playground-express?view=all#step-1-bootloader-mode) on the Adafruit website.

Is the cable good but you still can't see the **@driveDisplayName@** drive? Hmm, you might have a problem with your @boardname@. You can try posting a question on the [Adafruit support forum for Circuit Playground Express](https://forums.adafruit.com/viewforum.php?f=58). **Skip the rest of these steps**.

## Step 2: Check your bootloader version

It's possible that the bootloader version on the @boardname@ needs an update. Let's check:

1. Go to the **@driveDisplayName@** drive.
2. Open the **INFO_UF2.TXT** file.<br/>
![](/static/cp/device/cp-drive-contents.png)<br/>
3. The first line will indicate the bootloader's version number. It should say **UF2 Bootloader v\.\.\.**
![](/static/cp/device/info-uf2-txt.png)<br/>

If the version is **lesser than v1.23.0**, you **NEED** to update your @boardname@. Go to **Step 3** and follow the upgrade instructions.

If the version is **v1.23.0**, **v2.0.0** or higher, **you have the right bootloader**. You can try posting a question on the [Adafruit support forum for Circuit Playground Express](https://forums.adafruit.com/viewforum.php?f=58). **Skip the rest of these steps**.

## Step 3: Upgrade the firmware

1. Put your @boardname@ into **bootloader Mode**. To do this, follow the directions in [Step 1: Bootloader mode](https://learn.adafruit.com/adafruit-circuit-playground-express?view=all#step-1-bootloader-mode) on the Adafruit website.
2. **[Download the latest bootloader .uf2 file](https://learn.adafruit.com/adafruit-circuit-playground-express?view=all#updating-the-bootloader)** by clicking the button that says **Circuit Playground Express v\.\.\.**
![](/static/cp/device/latest-bootloader-download.png)<br/>
3. Drag and drop the file you just downloaded onto the **@driveDisplayName@** drive.
4. When the copy finishes, the LED will go off and the @boardname@ resets. You will see the **@driveDisplayName@** drive reappear shortly.
5. The upgrade is complete! You can open the **INFO_UF2.TXT** file to check and see that the bootloader version changed to the match the version of the `uf2` file you copied.

### ~hint

If needed, the Adafruit website has additional instructions on [how to set your device into bootloader mode](https://learn.adafruit.com/adafruit-circuit-playground-express?view=all#step-1-bootloader-mode) and how to [update the bootloader](https://learn.adafruit.com/adafruit-circuit-playground-express?view=all#updating-the-bootloader).

### ~

## Step 4: Wait for the driver updates

Once you've updated the bootloader, Windows will detect the updated device and install the drivers necessary to enable communication with the @boardname@. This step happens in the background and may take a minute or two.

## Step 5: Go back to the Windows app and try to download your program again

You may have to disconnect and reconnect your @boardname@ after the update to ensure that the app recognizes the device correctly.<br/>

If the app is still unable to flash your program onto the device, try to [manually copy your program onto the device](https://learn.adafruit.com/adafruit-circuit-playground-express?view=all#step-2-compile-and-download).

```blocks
forever(function () {
    light.showAnimation(light.rainbowAnimation, 500)
})
```