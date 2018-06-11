# Loading and Managing Your Programs

You can create, simulate, and download code on a wide variety of browsers on Windows, Chromebook, and Mac systems, and you can also use the MakeCode Windows App on a PC. When using the browser version, clicking either the pink Download button or else the Save icon will create and download a .uf2 file, which you then drag and drop onto the Circuit Playground Express drive. In the Windows App, the Download button loads the program on the device while the Save icon saves a copy to your PC. 

The MakeCode.Adafruit home page lists your work under My Projects. Click New Project to get started. When you save a project, it gets stored in the browser’s cache, so it will be available on that machine. The page also includes various tutorials and sample projects, as well as learning resources at the very bottom. 


When you’re working on a project, the pink Download button is at the bottom-left of the screen, and next to it is the box where you name your program, along with a Save disc icon. Downloading and Saving are essentially the same when using MakeCode in your browser. 


The Circuit Playground Express can run independent of a computer by using a battery pack that has a JST connector, or it can be powered when plugged into a USB port. However, to load your programs onto it, the board must be plugged into a computer. 

To load a program you have created, connect a Micro-USB connector to your Circuit Playground Express, then plug in to your computer using a standard USB or a Type-C port. When you do this, the NeoPixels on your Circuit Playground Express will turn green, indicating that it is in reset mode and ready to receive a program. You can also press the small reset button that is in the middle of the Circuit Playground Express to put it in reset mode. 

Plugging the Circuit Playground Express back into a computer or pressing the Reset button in the center will put the board in reset mode with all NeoPixels green and the red Status light pulsing.


Once the lights are green, you can load a program. If you’re using the browser on a Windows PC, Chromebook, or Mac, you just need to find the file and drag and drop it onto the Circuit Playground Express device. 

## Windows PC

Click the pink Download button or the Save icon, then go to your File Explorer and find the .uf2 file you just created. Drag and drop it onto the CPLAYBOOT drive, and your program will load. 


## Chromebook

After clicking the pink Download button or Save icon, there are two ways to find and load the resulting .uf2 file. First, you can click on Show in Folder in the box that pops up. 



Then, scroll until you find the highlighted .uf2 file, and drag and drop it onto CPLAYBOOT. You may get an error message about improperly ejecting a disk, but you can disregard this. 


On Chromebooks, a second method is to use the Launcher circle button in your toolbar to find your Files app. 


In your Files window, click on Recent to easily find the MakeCode .uf2 file you just saved. Then, drag and drop it onto CPLAYBOOT. You may get an error message about improperly ejecting a disk, but you can disregard this. 


## Mac

Click the pink Download button or the Save icon, then go to your Finder and find the .uf2 file you just created. Drag and drop it onto the CPLAYBOOT drive, and your program will load. 



Whichever system you use, you have the ability to find your programs on your MakeCode home page, or else to manage the MakeCode .uf2 files you generate in a folder system. In either case, giving your projects meaningful names is very helpful for finding them in the future. Users don’t need to make accounts. The projects created on a particular device are saved in the browser’s cache on that particular device in order to be available in the My Projects section.

Another feature of MakeCode that makes saving and sharing projects easy is the Share button in the upper-left next to Home.


Clicking the Share icon lets you publish and then generate a link for the project. This link can be emailed to users or collaborators. 


Opening a MakeCode link gives a preview of the code, lets you play it with the Simulator, and you can click on Edit to fully open and work with the project.


You can also move a program from the Circuit Playground Express back to the computer. This can be handy when you have the board but don’t have access to the program. To do so, plug the board into your computer, click on the CPLAYBOOT disc, then drag “CURRENT.UF2” into the Workspace of a MakeCode window. The program’s code will appear.


## Troubleshooting
If a program does not seem to be running correctly, here are some things to try:
Press the reset button on the Circuit Playground Express, wait a few seconds, then press it a second time. (Or unplug it from the computer and then plug it back in.) 
Reload the program onto the Circuit Playground Express.
Make sure any devices attached to the Circuit Playground Express are connected correctly.
Make sure the batteries are charged if you are using a battery pack to power the board. 
Try a different micro-USB cable. Some cables can only supply power and can’t also convey data.
