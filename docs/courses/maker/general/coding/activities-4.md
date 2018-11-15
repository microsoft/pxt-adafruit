# Activities for Variables and Network

## Activity: Twenty Questions

In the traditional game of Twenty Questions, one player thinks of a noun like parrot, watermelon, Thailand, or banjo. The second player gets to ask up to twenty yes or no questions in trying to guess the noun. You can limit the range of nouns to categories like musicians, things found in Hawaii, plants, or even topics relating to a school subject. For this Circuit Playground Express version, instead of answering the questions yes or no, the first player presses button **A** or **B** to send the second player a color and music note combination indicating yes or no. The right answer earns ``||input:on buttons A+B click||``, which is a celebratory light animation and sound sequence.

```blocks
network.onInfraredReceivedNumber(function (num) {
    if (num == 0) {
        music.playTone(784, music.beat(BeatFraction.Quarter))
        music.playTone(988, music.beat(BeatFraction.Quarter))
        music.playTone(880, music.beat(BeatFraction.Quarter))
        light.setAll(0xff8000)
    } else if (num == 1) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(196, music.beat(BeatFraction.Quarter))
        music.playTone(131, music.beat(BeatFraction.Whole))
        light.setAll(0x007fff)
    } else {
        light.showAnimation(light.rainbowAnimation, 500)
        music.playSoundUntilDone(music.sounds(Sounds.BaDing))
        music.playSoundUntilDone(music.sounds(Sounds.JumpUp))
        music.playSoundUntilDone(music.sounds(Sounds.JumpUp))
    }
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    network.infraredSendNumber(0)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    network.infraredSendNumber(1)
})
input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    network.infraredSendNumber(3)
})
```

## Activity: Twenty Questions and a Variable

Since this is a game of twenty questions and variables are good at keeping track of numbers, we can create a variable called ``Question Count`` (or something similar) and have it do the counting for us. An ``||loops:on start||`` loop sets our variable to zero, and it gives us a visual confirmation by also turning all NeoPixels to green. A ``||loops:forever||`` loop uses an ``||logic:if then||`` block to say, If the ``Question Count`` variable equals `21`, then play the ``Wawawaa`` sound, set all pixels to red, pause for two seconds, then reset the ``Question Count`` variable to zero and set all pixels to green. This will tell the players that the maximum number of allowed questions has been exceeded. Adding the ``||variables:change Question Count by 1||`` to the ``||network:on infrared received||`` loop will increment the ``Question Count`` variable for each turn of play. Duplicate the ``||variables:change Question Count by 1||`` block and insert in the ``||input:on button A click||`` and ``||input:on button B click||`` inputs to make it also happen on the device of the one who is answering the questions.

```blocks
let Question_Count = 0
input.buttonA.onEvent(ButtonEvent.Click, function () {
    network.infraredSendNumber(0)
})
network.onInfraredReceivedNumber(function (num) {
    if (num == 0) {
        music.playTone(784, music.beat(BeatFraction.Quarter))
        music.playTone(988, music.beat(BeatFraction.Quarter))
        music.playTone(880, music.beat(BeatFraction.Quarter))
        light.setAll(0xff8000)
        Question_Count += 1
    } else if (num == 1) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(196, music.beat(BeatFraction.Quarter))
        music.playTone(131, music.beat(BeatFraction.Whole))
        light.setAll(0x007fff)
        Question_Count += 1
    } else {
        light.showAnimation(light.rainbowAnimation, 500)
        music.playSoundUntilDone(music.sounds(Sounds.BaDing))
        music.playSoundUntilDone(music.sounds(Sounds.JumpUp))
        music.playSoundUntilDone(music.sounds(Sounds.JumpUp))
    }
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    network.infraredSendNumber(1)
})
input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    network.infraredSendNumber(3)
})
Question_Count = 0
light.setAll(0x00ff00)
forever(function () {
    if (Question_Count == 21) {
        music.playSound(music.sounds(Sounds.Wawawawaa))
        light.setAll(0xff0000)
        pause(2000)
        Question_Count = 0
        light.setAll(0x00ff00)
    }
})
```

## Activity: Tag

Here’s another fun game to play using the infrared send and receive feature. Divide groups into Blue and Red teams. Everyone’s code is the same, except that the Blue Team sends the number `1` and the Red Team sends `2`. When anyone’s Circuit Playground Express receives `1`, it turns them Blue, and receiving `2` turns them Red. Time a two minute round, then count to see which side has converted more members. If you use the ``||loops:pause||`` with a ``||math:pick random 0 to 2500||`` block to delay sending the signal, players will have to make themselves more vulnerable in order to make sure they send their signal. Be sure that players study their Circuit Playground Expresses to see where the IR send and receive units are (on either side of the central **Reset** button). No fair blocking your IR receiver!

Here is the code that Blue Team members might use.

![Tag game in simulator](/static/courses/maker/general/coding/tag1.jpg)

Red Team will have all the same code, except they will send a `2` instead of a `1`. 

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    pause(Math.randomRange(0, 2500))
    network.infraredSendNumber(2)
})
```

Looped tape can help keep the device secure to a battery pack. Specifying how players may hold the Circuit Playground Express is a good idea so that the IR send and receive units don’t get blocked.

Can you apply the counting variable used above in **Twenty Questions and A Variable** to this game of tag?
