# Off-line support

The micro:bit pins.

## How to work offline

If you have loaded the web app at some time in the past (by clicking on "my scripts" from the home page), then if you later open the same browser (whether you are online or offline) and type in [https://codethemicrobit.com/](https://codethemicrobit.com/), you will be able to access all the features of the web app. Note that it is important to end the URL with "/".

## Save and load code using files

![](/static/mb/offline-0.png)

The micro:bit automatically saves and synchronises scripts for signed-in users through the cloud. We also decided to also support file save/load for offline support and sharing via email and other storage providers. Users are now able to import and export scripts as files. For example, they can simply email it or submit them in their classroom portal.

![](/static/mb/offline-1.png)

## The new in-browser compiler

The compilation from a script to ARM machine code is now done entirely in the browser  (read the [in depth story](https://www.touchdevelop.com/docs/touch-develop-in-208-bits) about building the compiler). The new compiler is used by the Block Editor, Touch Develop and Code Kingdoms to create a .hex file solely within the confines of your web browser (no Internet connection is needed). The micro:bit compilation process is shown below:

![](/static/mb/offline-2.png)

The C++ compiler is now only used to compile the micro:bit runtime - this is done offline by the micro:bit team and the pre-compiled runtime is linked with your compiled script in the browser.

Compiled .hex files can also be imported back into the web site. This make it easy for a teacher to review the source of a script by simply drag and dropping the file into the editor.

