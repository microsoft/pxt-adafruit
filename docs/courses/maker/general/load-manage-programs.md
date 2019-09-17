# Loading and Managing Programs

The [MakeCode](https://makecode.com) programming environment works on a wide variety of browsers across different devices. You can use it on a PC, a Chromebook, and on Mac computers. In addition to the browser-based version, there is also a [MakeCode Windows 10 App](http://aka.ms/adafruitapp) which you can use on computers running Windows 10.

## Home Page

The [MakeCode Adafruit](@homeurl@) home page lists your recent work in the first row under My Projects. In this section, you can also click New Project to open a blank project. MakeCode automatically saves your work-in-progress in the browser’s cache, under the name of your project so it is a good idea to name each project something unique and descriptive. The home page also includes various tutorials and sample projects, as well as learning resources from Adafruit.

![Home page with galleries shown](/static/courses/maker/general/load-manage-programs/home-page.png)

When you’re working on a project, the pink **Download** button is at the bottom-left of the screen, and next to it is the box where you can name your program, along with a **Save** icon.

![Download button at bottom of window](/static/courses/maker/general/load-manage-programs/download-button.png)

## Saving programs

As mentioned above, MakeCode automatically saves your recent projects in the browser’s cached memory and puts a link to them on the Home Page. But if you are working on your project from 
multiple different computers, or sharing a computer with others, you may want a more reliable mechanism for saving your programs. Clicking the **Save** icon at the bottom of the screen next to your Project Name will save your project as a file on your computer – for example "MyCoolProject.uf2".

![Save button at bottom of window](/static/courses/maker/general/load-manage-programs/save-button.png)

You can open saved project files from the Home Page by clicking the **Import** button at the top right of the page.

![Import button on the home screen](/static/courses/maker/general/load-manage-programs/import-files.png)

## Downloading programs

The Circuit Playground Express can run independent of a computer by using a battery pack, or it can be powered when plugged into a USB port. In order to load your programs onto the Circuit Playground Express, it must be plugged into the USB port of the computer.

![The board connected to the computer with USB cable](/static/courses/maker/general/load-manage-programs/usb-cable.jpg)

To load a program you have created, connect a Micro-USB connector to your Circuit Playground Express, then plug in to your computer using a standard USB or a Type-C port. When you do this, the NeoPixels on your Circuit Playground Express will turn green, indicating that it is in reset mode and ready to receive a program. You can also press and release the small reset button that is in the middle of the Circuit Playground Express to put it in "reset" mode. 

Plugging the Circuit Playground Express back into a computer or pressing the **Reset** button in the center will put the board in reset mode with all NeoPixels green and the ``red`` Status light pulsing.

![The board reset with LEDs flashing](/static/courses/maker/general/load-manage-programs/cpx.jpg)

Once the lights are green, the Circuit Playground Express will show up as a USB drive on your computer called **CPLAYBOOT** and you can load a program onto it. If you’re using the browser on a Windows PC, Chromebook, or Mac, you just need to find the file and drag and drop it onto the Circuit Playground Express USB drive.

### Windows PC

Click the pink Download button. Depending on what browser you’re using, the downloaded file may automatically show up in your Downloads folder (Chrome, Firefox), or the browser may prompt you for what to do with this file (Edge, Internet Explorer). You will want to save the project file onto the Circuit Playground Express (**CPLAYBOOT**) drive. You can do this directly from the browser in Edge or IE, or if you’re using Chrome or Firefox, go to your Downloads folder in your File Explorer, find the .uf2 file you just created, and drag and drop it onto the **CPLAYBOOT** drive, and your program will load onto the board.

![Windows File Explorer with programs to copy](/static/courses/maker/general/load-manage-programs/windows-file-explorer.png)

### Chromebook

After clicking the pink **Download** button, there are two ways to find and load the resulting .uf2 file. First, you can click on "Show in Folder" in the notification box that pops up.

![Chromebook Download Manger view](/static/courses/maker/general/load-manage-programs/chromebook1.png)

Then, scroll until you find the highlighted .uf2 file, and drag and drop it onto the **CPLAYBOOT** drive. You may get an error message about improperly ejecting a disk, but you can disregard this.

![Drag file to CPLAYBOOT from My Drive](/static/courses/maker/general/load-manage-programs/chromebook2.png)

On Chromebooks, a second method is to use the Launcher circle button in your toolbar to find your Files app.

![Use find Launcher search to find the files](/static/courses/maker/general/load-manage-programs/chromebook3.png)

In your **Files** window, click on Recent to easily find the MakeCode .uf2 file you just saved. Then, drag and drop it onto **CPLAYBOOT**. You may get an error message about improperly ejecting a disk, but you can disregard this.

![Drag file to CPLAYBOOT from Recent Files](/static/courses/maker/general/load-manage-programs/chromebook4.png)

### Mac

Click the pink **Download** button, then go to your Finder and find the .uf2 file you just created. Drag and drop it onto the **CPLAYBOOT** drive, and your program will load.

![Drag file to CPLAYBOOT from Downloads on Mac](/static/courses/maker/general/load-manage-programs/mac-finder.png)

### Windows 10 app

If you are on a Windows 10 computer, and using the [MakeCode Windows 10 App](http://aka.ms/adafruitapp), then you simply have to click the pink **Download** button for your program to load correctly onto the board – you don’t need to worry about dragging and dropping files. 

Whichever system you use, you have the ability to find your programs on your MakeCode home page, or else to manage the MakeCode .uf2 files you generate in a folder system. In either case, giving your projects meaningful names is very helpful for finding them in the future.

## Sharing Projects

Another feature of MakeCode that makes saving and sharing projects easy is the **Share** button in the upper-left next to Home.

![Share button at top of window](/static/courses/maker/general/load-manage-programs/share-button.png)

Clicking the **Share** icon lets you publish and then generate a link for the project. This link can be emailed to students or collaborators.

![Share dialog window](/static/courses/maker/general/load-manage-programs/share-dialog.jpg)

Opening a MakeCode link gives a preview of the code, lets you play it with the Simulator, and you can click on **Edit** to fully open and work with the project.

![Shared project viewed from share link](/static/courses/maker/general/load-manage-programs/shared-project.jpg)

You can also move a program from the Circuit Playground Express back to the computer. This can be handy when you have the board but don’t have access to the program. To do so, plug the board into your computer, click on the **CPLAYBOOT** drive, then drag "CURRENT.UF2" into the Workspace of a MakeCode window. The program’s code will appear.

![Shared project viewed from share link](/static/courses/maker/general/load-manage-programs/opening-program-from-device.png)

## Troubleshooting

If a program does not seem to be running correctly, here are some things to try:

* Press the **Reset** button on the Circuit Playground Express, wait a few seconds, then press it a second time (or unplug it from the computer and then plug it back in).
* Reload the program onto the Circuit Playground Express.
* Make sure any devices attached to the Circuit Playground Express are connected correctly.
* Make sure the batteries are charged if you are using a battery pack to power the board.
* Try a different micro-USB cable. Some cables can only supply power and can’t also convey data
