# Loading and Managing Your Programs

You can create, simulate, and download code on a wide variety of browsers on Windows, Chromebook, and Mac systems, and you can also use the MakeCode Windows App on a PC. When using the browser version, clicking either the pink **Download** button or else the **Save** icon will create and download a .uf2 file, which you then drag and drop onto the @boardname@ drive. In the Windows App, the Download button loads the program on the device while the Save icon saves a copy to your PC.

The [MakeCode](@homeurl@) home page lists your work under **My Projects**. Click **New Project** to get started. When you save a project, it gets stored in the browser’s cache, so it will be available on that machine. The page also includes various tutorials and sample projects, as well as learning resources at the very bottom.

![MakeCode home page](/static/courses/making/load-manage-programs/home-page.jpg)

When you’re working on a project, the pink **Download** button is at the bottom-left of the screen, and next to it is the box where you name your program, along with a **Save** disc icon. Downloading and Saving are essentially the same when using MakeCode in your browser.

![Download and save buttons](/static/courses/making/load-manage-programs/download-save.jpg)

The @boardname@ can run independent of a computer by using a battery pack that has a JST connector, or it can be powered when plugged into a USB port. However, to load your programs onto it, the board must be plugged into a computer.

To load a program you have created, connect a Micro-USB connector to your @boardname@, then plug in to your computer using a standard USB or a Type-C port. When you do this, the NeoPixels on your @boardname@ will turn green, indicating that it is in reset mode and ready to receive a program. You can also press the small reset button that is in the middle of the @boardname@ to put it in reset mode.

Plugging the @boardname@ back into a computer or pressing the Reset button in the center will put the board in reset mode with all NeoPixels green and the red Status light pulsing.

![Plug in and reset the board](/static/courses/making/load-manage-programs/plugin-reset.jpg)

Once the lights are green, you can load a program. If you’re using the browser on a Windows PC, Chromebook, or Mac, you just need to find the file and drag and drop it onto the @boardname@ device.

## Windows PC

Click the pink Download button or the Save icon, then go to your **File Explorer** and find the ``.uf2`` file you just created. Drag and drop it onto the **@drivename@** drive, and your program will load.

![Program download file in Windows 10](/static/courses/making/load-manage-programs/windows10-files.jpg)

## Chromebook

After clicking the pink **Download** button or **Save** icon, there are two ways to find and load the resulting .uf2 file. First, you can click on **Show in Folder** in the box that pops up.

![Load uf2 file from show in folder dialog](/static/courses/making/load-manage-programs/show-in-folder.jpg)

Then, scroll until you find the highlighted ``.uf2`` file, and drag and drop it onto **@drivename@**. You may get an error message about improperly ejecting a disk, but you can disregard this.

![Find CDPLAYBOOT folder](/static/courses/making/load-manage-programs/cdplayboot-folder.jpg)

On Chromebooks, a second method is to use the Launcher circle button in your toolbar to find your Files app.

![Find file in Launcher](/static/courses/making/load-manage-programs/find-in-launcher.jpg)

In your Files window, click on Recent to easily find the MakeCode ``.uf2`` file you just saved. Then, drag and drop it onto **@drivename@**. You may get an error message about improperly ejecting a disk, but you can disregard this.

![Drag to CDPLAYBOOT folder](/static/courses/making/load-manage-programs/drag-to-cdplayboot-chrome.jpg)

## Mac

Click the pink **Download** button or the **Save** icon, then go to your Finder and find the ``.uf2`` file you just created. Drag and drop it onto the **@drivename@** drive, and your program will load.

![Drag to CDPLAYBOOT folder](/static/courses/making/load-manage-programs/drag-to-cdplayboot-mac.jpg)

Whichever system you use, you have the ability to find your programs on your MakeCode home page, or else to manage the MakeCode ``.uf2`` files you generate in a folder system. In either case, giving your projects meaningful names is very helpful for finding them in the future. Users don’t need to make accounts. The projects created on a particular device are saved in the browser’s cache on that particular device in order to be available in the **My Projects** section.

## Project sharing

Another feature of MakeCode that makes saving and sharing projects easy is the **Share** button in the upper-left next to Home.

![Share button](/static/courses/making/load-manage-programs/share-button.jpg)

Clicking the **Share** icon lets you publish and then generate a link for the project. This link can be emailed to users or collaborators.

![Share project dialog](/static/courses/making/load-manage-programs/share-project-dialog.jpg)

Opening a MakeCode link gives a preview of the code, lets you play it with the Simulator, and you can click on **Edit** to fully open and work with the project.

![Code preview from link](/static/courses/making/load-manage-programs/code-preview.jpg)

## Loading from your computer

You can also move a program from the @boardname@ back to the computer. This can be handy when you have the board but don’t have access to the program. To do so, plug the board into your computer, click on the **@drivename@** disc, then drag “CURRENT.UF2” into the Workspace of a MakeCode window. The program’s code will appear.

![Drag program file into workspace](/static/courses/making/load-manage-programs/drag-to-workspace.jpg)

## Troubleshooting

If a program does not seem to be running correctly, here are some things to try:

* Press the reset button on the @boardname@, wait a few seconds, then press it a second time (or, unplug it from the computer and then plug it back in).
* Reload the program onto the @boardname@.
* Make sure any devices attached to the @boardname@ are connected correctly.
* Make sure the batteries are charged if you are using a battery pack to power the board.
* Try a different micro-USB cable. Some cables can only supply power and can’t also convey data.
