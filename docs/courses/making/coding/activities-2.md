# Activities: Loops

Let’s use a ``||loops:repeat||`` loop to make a siren.

1. From the ``||input:INPUT||`` Toolbox drawer, drag an ``|input:on shake||`` block onto the Workspace.  
2. From the ``||loops:LOOPS||`` Toolbox drawer, drag a ``||loops:repeat||`` loop onto the Workspace and place inside the ``||input:on shake||`` block.
3. From the ``||light:LIGHT||`` Toolbox drawer, drag 2 ``||light:show ring||`` blocks onto the Workspace and place them inside the ``||loops:repeat||`` loop.
4. Change the colors of the ``||light:show ring||`` block lights to flash blue and red like a siren.
5. From the ``||music:MUSIC||`` Toolbox drawer, drag a ``||music:play sound||`` block onto the Workspace and place inside the ``||input:on shake||`` block, above the ``||loops:repeat||`` loop.
6. In the ``||music:play sound||`` block, use the drop-down menu to change the sound to ``siren``.

```blocks
input.onGesture(Gesture.Shake, function () {
    music.playSound(music.sounds(Sounds.Siren))
    for (let i = 0; i < 4; i++) {
        light.showRing(
        `red red red red red blue blue blue blue blue`
        )
        light.showRing(
        `blue blue blue blue blue red red red red red`
        )
    }
})
```

Run the code blocks above and click the **SHAKE** button in the Simulator. You can preview the board's behavior.

Finally, practice using ``||loops:pause||`` blocks. Place one after each ``||light:show ring||``, and change the duration of the pauses. Press **SHAKE** again in the Simulator, and you will see how different pause durations affect the siren you have made.

```block
pause(100)
```

A final reminder on loops; if you are using sensor data, like from the sound, light, accelerometer, etc, then you probably want those blocks inside a ``||loops:forever||`` loop because you want the the @boardname@ to be continuously checking whether it is being tilted, what the sound level is, etc. It’s possible you may only want to check sensor data on a specific input, like if a button is pressed, but usually you’ll need a ``||loops:forever||`` loop.
