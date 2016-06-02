# Windows 10 App

## Features

The Windows 10 App provides all the existing features of [m.pxt.io](https://m.pxt.io) plus the following ones:

* **auto-upload**: the compiled .hex file is automatically deployed to all connected BBC micro:bits
* **serial piping**: all serial data sent by connected BBC micro:bit is automatically imported and analyzed in the editor.

## Installing the pre-release app

The following instructions allow to side-load the Windows 10 app. This is required until the app is in the store.
 
*	Search for “developer settings” in Windows 10 and put your computer in “Developer mode”. 
*	Download https://m.pxt.io/codemicrobit.appx and unzip it. **DO NOT try to install from a zipped folder.**
*	Open the extracted folder, right-click on `Add-AppDevPackage.ps1` and click on `Run with PowerShell`. Follow the prompts…

4) In order to communicate with the micro:bit via serial, you need to install the [ARM mbed driver](https://developer.mbed.org/handbook/Windows-serial-configuration).
