# Code

With the Necklace Test example code, we simply turned on all the lights of our necklace to one color. There are many different ways we can program our necklace lights. The loudness necklace (https://makecode.adafruit.com/tutorials/loudness-necklace) is one example where you can change the lights based on the sound level. In this project, we’ll program a few different animations to show on our necklace.

* If you don’t already have it open, go to https://makecode.adafruit.com/ 
* From the Home page, create New Project

<NewProject.jpg>

* At the bottom of the screen, name your project “Necklace” 

<NameProject.jpg>

First, we need to set up our 4 Flora NeoPixel lights as 2 strips of lights – connected to A1 on the left side, and connected to A6 on the right side.

* From the Loops Toolbox drawer, drag out an On Start block to the Workspace

<OnStart.png>

* Click on the Light Toolbox drawer, then click on the NeoPixel drawer underneath it 
* Drag out the first Set strip block onto the Workspace and drop into the On Start block 

<SetStrip.png>

* In the Set strip block, click on the strip drop-down menu, and select Rename variable...

<Rename.png>

* Type “LeftLights” as the variable name 
* In the Set block, change the number of pixels from 30 to 2

<Rename.png>

* Type "LeftLights" as the variable name 
* In the Set block, change the number of pixels from 30 to 2 

<2pixels.png> 

* Right-click on the Set block and select Duplicate from the context menu 
* Drag the duplicated Set block into the On Start block

<Duplicate.png>

* In the second Set block, click on the LeftLights drop-down menu, and select New variable… 

<NewVar.png>

* Type "RightLights" as the new variable name 
* In the second Set block, click on the A1 drop-down menu, and select A

<SetBlocks.png>

Now let’s set up 3 different light animations that will play when we press button A, button B, and buttons A and B together on our Circuit Playground Express.

* From the Input Toolbox drawer, drag out 3 On Button Click blocks onto the Workspace 
* Using the Button A drop-down menu, change two of the blocks to Button B and Button A+B 

<OnButton.png>

* In the Variables Toolbox drawer, click on the Make a Variable butto

<MakeAVariable.png>

* Type “Anim” as the new variable name. This will hold our light animation value. 
* From the Variables Toolbox drawer, drag 3 Set blocks onto the Workspace and drop one each into the On Button Click blocks 

<OnButtonSet.png>

* From the Light Toolbox drawer, scroll all the way down to the bottom and drag 3 animation value blocks (the block looks like a round rainbow circle) onto the Workspace and drop one each into the Set Anim blocks, replacing 0 
* For two of the animation value blocks, click on the drop-down menu to select a different animation

<SetAnimations.png>

Let’s add some logic to be able to play and stop our animations. We’ll use the value of the switch to determine this – when we move the switch to the right our animations will play, but when the switch is moved to the left we’ll stop the animations and turn off the lights. 

<Switch.png>

* From the Logic Toolbox drawer, drag an If Then Else block onto the Workspace and drop it into the Forever loop 

<IfThenElse.png>

* From the Input Toolbox drawer, scroll all the way down to the bottom and drag a Switch Right block onto the Workspace and drop into the If block, replacing True 

<IfSwitchRight.png>

* From the Light Toolbox drawer, drag a Show Animation block and drop into the top slot of the If Then block 
* From the Variables Toolbox drawer, drag an Anim variable value block and drop into the Show Animation block, replacing the default rainbow animation

<ShowAnimation.png>

* Click on the Light Toolbox drawer, then click on the NeoPixel drawer underneath it 
* Drag out 2 Strip Show Animation blocks and drop them into the top slot of the If Then block after the previous Show Animation block 
* In each of the Strip Show Animation blocks, click on the strip variable drop-down menu and select the LeftLights and RightLights variables

<LeftRightShowAnimation.png>

* From the Variables Toolbox drawer, drag 2 Anim variable value blocks and drop one each into the LeftLights/RightLights Show Animation blocks, replacing the default rainbow animation

<LeftRightShowAnim.png>

* From the Light Toolbox drawer, scroll to the bottom and drag a Clear block onto the Workspace. Drop into the Else slot. 
* Click on the Light Toolbox drawer, then click on the NeoPixel drawer underneath it 
* Drag out 2 Strip Clear blocks onto the Workspace and drop into the Else slot underneath the previous Clear block 
* In each of the Strip Clear blocks, click on the strip variable drop-down menu and select the LeftLights and RightLights variable

<ForeverBlock.png> 

Your final program should look something like the following:

<FinalProgram.png> https://makecode.com/_aiH5gihqxUfo

Test your program in the Simulator by pressing the A button, the B button and the A+B button to see the different animations play, and then moving the Switch to the left to turn off all the lights. Once you’re happy with your program, download it onto your necklace!

<NecklaceAnimation.mp4>