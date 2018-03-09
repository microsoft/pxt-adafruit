# Activity: Installing a program

**@boardname@ activity:** Installing a Microsoft MakeCode Program on the @boardname@

**Objective:** Learn how to download programs from the MakeCode tool.

**Overview:** Students will create a simple program in Microsoft MakeCode and download it to their @boardname@ using a USB cable.

For this activity, students will each need a @boardname@, a micro-USB cable, a computer, and a battery pack.

Open a browser window to [makecode.com](https://makecode.com), and select the @boardname@ code editor

From the top left corner of the screen, select the **Projects** Menu, and click on **Import File**.  Select the file that you saved on your computer in the previous step.

The program should look like the following in MakeCode. It shows different colors and plays sounds:

```blocks
loops.forever(function () {
    light.showRing(
    `red red red red red black black black black black`
    )
    music.playTone(262, music.beat(BeatFraction.Half))
    light.showRing(
    `black black black black black blue blue blue blue blue`
    )
    music.playTone(494, music.beat(BeatFraction.Half))
})
```

## Tour of MakeCode

* **Simulator**	 - on the left side of the screen, you will see a virtual @boardname@ that will show what your program will look like running on a @boardname@. This is helpful for debugging, and instant feedback on program execution.
* **Toolbox** - in the middle of the screen, there are a number of different categories, each containing a number of blocks that can be dragged into the programming workspace on the right. 
* **Workspace** - on the right side of the screen is the Programming Workspace where you will create your program.  Programs are constructed by snapping blocks together in this area.

The color of the blocks identifies their category. All of the blocks that make up the program above come from the **Light** Toolbox category, which is light blue.

## Downloading a MakeCode program to the @boardname@

To download the file to your @boardname@, you must connect it to your computer’s USB port using a micro-USB cable. The @boardname@ will draw power from your computer through the USB connection, or you can connect an optional battery pack so it can function even after it is unplugged from the computer. 

Click on the **Download** button and follow closely the instructions on the screen.
