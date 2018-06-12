# The basics of working in the MakeCode environment

The MakeCode environment is divided into three basic sections:

* the Simulator,
* the blocks Toolbox, and 
* the coding Workspace

![What's included in the MakeCode environment](/static/courses/making/coding/makecode-env.jpg)

## Simulator

On the left is the Simulator, which will simulate what your program will look like running on the actual hardware. It is interactive and can simulate inputs you might like to use in your program – like button presses, shakes, tilts, light exposure, temperature level, and sound volume. Note that the indicators for shake, light, sound, etc. will only appear if you’re using blocks for those inputs in your program. The Simulator can then simulate outputs like changing the lights and playing sounds. The buttons in the toolbar below the Simulator let you stop/start the Simulator, refresh, slow down, control volume, and make full screen.

![Circuit Playground Express simulator](/static/courses/making/coding/simulator.jpg)

To make the Simulator appear and disappear, press the arrow in the far bottom left-hand corner of your screen.

![Hide simulator button](/static/courses/making/coding/hide-sim-button.jpg)

## Toolbox

In the middle is the blocks Toolbox. Clicking on a category or “drawer” reveals the blocks available within that drawer. You can then click and drag individual blocks to the Workspace area on the right. Sometimes the Toolbox drawer contains more blocks than can be seen in your screen, so you can scroll down in an open drawer to reveal more blocks.  If you know what block you want, but can’t remember the category, you can use the Search field at the top of the Toolbox to look for certain blocks.

![Blocks toolbox](/static/courses/making/coding/toolbox.jpg)

Notice that clicking on the black “advanced” drawer at the bottom of the Toolbox reveals more Toolbox drawer options below.

![Advanced blocks toolbox](/static/courses/making/coding/advanced-toolbox.jpg)

Another service the blocks Toolbox performs is as a trash can. Drag unwanted blocks from the Workspace on the right, and drop them in the trash can that appears in the blocks Toolbox.

![Drag a block to the trash can](/static/courses/making/coding/drag-to-trash.gif)

## Workspace

On the right is the coding Workspace. This is where you will drag and drop blocks from the Toolbox to create your program. Many blocks may initially appear grayed-out.  This indicates that the block won’t run because it needs to be inside an input or loop.

![Disabled show ring block](/static/courses/making/coding/disabled-block.gif)

In MakeCode, certain block types will start program execution.  These blocks have a top and bottom enclosure – they look a bit like a mouth where other blocks can fit in between.

```block
input.buttonA.onEvent(ButtonEvent.Click, function () {
	
})
input.onLoudSound(function () {
	
})
forever(function () {
	
})
network.onInfraredReceivedNumber(function (num) {
	
})
input.onGesture(Gesture.Shake, function () {

})
```

You will need to place other blocks inside these “mouth” blocks in order for them to be enabled and run.

```block
loops.forever(function () {
    light.showRing(
    "red red red red red red red red red red"
    )
})
```

You can think of the input and loop blocks that are needed to make other blocks active as answering the question, “when?” When you do want to run this code? The input and loop blocks answer that question with responses like, “on button click” or “on loud sound” or “forever.”

Note that once blocks are joined together, they can only be separated by dragging the lower block off the bottom of the one you want to separate it from. For example, if you want to remove the “set all pixels to red” block, you will first need to drag the block right below it down and out. Then, set that series of blocks in the gray of the Workspace, click and drag the “set all pixels to red” block to the trash can, and then reinsert the blocks you had temporarily set aside. Selecting and dragging a block in a sequence will select and drag all the blocks below it.

![Drag and disconnect blocks](/static/courses/making/coding/drag-off-blocks.gif)

Finally, in the bottom-right corner of the Workspace are the all-important undo and redo buttons, as well as plus and minus signs that let you enlarge and shrink your blocks of code to optimize how you view them.

![Undo/redo and zoom in/out buttons](/static/courses/making/coding/undo-redo-zoom.jpg)
