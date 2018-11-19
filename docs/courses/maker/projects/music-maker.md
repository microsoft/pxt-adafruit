# Music Maker Project 

## Description

In this project, students will create a Music Maker to play notes or entire songs using the Circuit Playground Express. The ``||music:play sound||`` block can be used with built-in preset sounds to make fun noises with the Circuit Playground Express when you press button **A** for example.

![The preset sounds for the Play Sound block](/static/courses/maker/projects/music-maker/play-sound-block.png)

But the small speaker on the Circuit Playground Express can go beyond playing these preset sounds. Music-minded makers can attach conductive copper tape to the seven capacitive touch pins and create their very own music players!

![Speaker on the Circuit Playground Express](/static/courses/maker/projects/music-maker/cp-express-speaker.jpg)

Capacitive touch means something that can detect when a conductive material touches it. A conductive material is something that can carry an electrical current, like a finger or copper tape. See these articles to learn more about [capacitive sensing](https://en.wikipedia.org/wiki/Capacitive_sensing), and electrical [conductivity](https://en.wikipedia.org/wiki/Electrical_conductor).

![Capacitive touch pins A1-A7 on the Circuit Playground Express](/static/courses/maker/projects/music-maker/cplay-express-pins.jpg)

In this project, students will assign note values to each capacitive touch pin on the Circuit Playground Express to be able to play different songs and melodies.

![Completed Music Maker Project](/static/courses/maker/projects/music-maker/music-maker-complete.jpg)

The music maker in this sample project played Camila Cabello’s song “Havana” on a buttom **A** click, and it also provided the six tones needed to play the song by hand. These were color-coded so that a player could tap the color sequence to play the song.

https://www.youtube.com/watch?v=vtQgtvtHRhA

## Time Required

| Hours |
|-|
| ![2.0 hour time scale](/static/courses/maker/projects/common/1-to-2-hours.png) |
<br/>
1-2 hours (more if the musical instrument is complex)

## Academic Tie-in Ideas

* Music: add a maker component to your music study by coding a music maker.
* Literature: create an instrument that plays a composition for a character or scene.
* History: play a piece of music from a certain time period that you are studying.

## Materials

See the [Maker Tools and Techniques](/courses/maker/general/maker-tools-techniques) chapter for more details on materials.

* Cardboard
* Cork to mount the Circuit Playground Express board (optional)
* Copper tape
* Glue gun and hot glue
* Cardboard cutter
* Colored pencils, pens, crayons
* Tape

## Making

The making of this project can range from the fairly simple to the very complex. In the sample project, two slices in the cardboard’s outer sheet let a triangle fold pop up. Hot glue secured it and a cork in place. The cork later had the Circuit Playground Express attached with packing tape.

![Fold in the cardboard and a cork to hold the board](/static/courses/maker/projects/music-maker/music-making1.jpg)

Be sure to plan for power and USB connectivity of your Circuit Playground Express. In this example, just below the cork, a small hole will accommodate the JST battery pack connector.

![A hole cut for the battery cable below the cork](/static/courses/maker/projects/music-maker/music-making2.jpg)

Copper tape is a bit tricky to work with. Only unpeel a few inches at a time to prevent it from sticking to itself. When you want to make a turn, first fold it back in the opposite direction of where you want to go. See the [Maker Tools and Techniques](/courses/maker/general/maker-tools-techniques) chapter for more tips and tricks.

![Stick copper tape onto the base of the Music Maker](/static/courses/maker/projects/music-maker/music-making3.jpg)

More examples of reverse fold, then forward fold to make turns.

![Examples of reverse fold and forward fold](/static/courses/maker/projects/music-maker/music-making4.jpg)

The copper tape can be inserted into the rings of pins **A1** - **A7**. It’s vital that the tape only touch that pin connector. Make sure it doesn’t touch another pin, or another strip of tape.

![Copper strips separated from each other](/static/courses/maker/projects/music-maker/music-making5.jpg)

Label each copper strip with the Note name (A – G) and you can color code these notes to create colored melodies to play!

![Music maker with labels for each note](/static/courses/maker/projects/music-maker/music-making6.jpg)

## Coding

See [Coding the Circuit Playground Express](/courses/maker/general/coding) chapter for more information When coding your Music Maker, you will find various helpful blocks in the ``||music:MUSIC||`` Toolbox drawer.

![Music blocks in toolbox drawer](/static/courses/maker/projects/music-maker/music-toolbox-drawer.png)

Use the ``||music:play tone||`` block to select a musical note and duration. Notice that there is a number value placed for the note value – this is the note frequency or pitch in hertz (Hz). For more information on audio frequency values, see this [article](https://en.wikipedia.org/wiki/Audio_frequency).

![Play tone block tone selections](/static/courses/maker/projects/music-maker/play-tone-block.png)

The sample code below uses the ``||music:play tone||`` block with six of the Circuit Playground Express pins, and it adds a different color to display for each tone. This setup allows you to play music by tapping conductive tape attached to each pin, and you can create a color guide to your music.

```blocks
input.pinA1.onEvent(ButtonEvent.Click, function () {
music.playTone(294, music.beat(BeatFraction.Half))
light.setAll(0xff0000)
})
input.pinA5.onEvent(ButtonEvent.Click, function () {
music.playTone(220, music.beat(BeatFraction.Half))
light.setAll(0xff00ff)
})
input.pinA2.onEvent(ButtonEvent.Click, function () {
music.playTone(330, music.beat(BeatFraction.Half))
light.setAll(0x00ff00)
})
input.pinA6.onEvent(ButtonEvent.Click, function () {
music.playTone(247, music.beat(BeatFraction.Whole))
light.setAll(0xffff00)
})
input.pinA3.onEvent(ButtonEvent.Click, function () {
music.playTone(349, music.beat(BeatFraction.Whole))
light.setAll(0x0000ff)
})
input.pinA7.onEvent(ButtonEvent.Click, function () {
music.playTone(262, music.beat(BeatFraction.Half))
light.setAll(0xff8000)
})
```

For more advanced musicians in the class, they can string together multiple ``||music:play tone||`` blocks to create their own songs. The sample below includes the composition of a portion of the song “Havana.”

```blocks
input.pinA1.onEvent(ButtonEvent.Click, function () { 
music.setTempo(100) 
music.playTone(262, music.beat(BeatFraction.Half)) 
music.playTone(330, music.beat(BeatFraction.Half)) 
music.playTone(330, music.beat(BeatFraction.Half)) 
music.playTone(262, music.beat(BeatFraction.Half)) 
music.playTone(262, music.beat(BeatFraction.Half)) 
music.playTone(220, music.beat(BeatFraction.Double)) 
music.rest(music.beat(BeatFraction.Half)) 
music.playTone(330, music.beat(BeatFraction.Half)) 
music.playTone(294, music.beat(BeatFraction.Half)) 
music.playTone(330, music.beat(BeatFraction.Half)) 
music.playTone(349, music.beat(BeatFraction.Half)) 
music.playTone(330, music.beat(BeatFraction.Half)) 
music.playTone(294, music.beat(BeatFraction.Half)) 
music.playTone(262, music.beat(BeatFraction.Half)) 
music.playTone(330, music.beat(BeatFraction.Half)) 
music.playTone(330, music.beat(BeatFraction.Half)) 
music.playTone(262, music.beat(BeatFraction.Half)) 
music.playTone(262, music.beat(BeatFraction.Half)) 
music.playTone(220, music.beat(BeatFraction.Double)) 
music.rest(music.beat(BeatFraction.Half)) 
music.playTone(330, music.beat(BeatFraction.Half)) 
music.playTone(294, music.beat(BeatFraction.Half)) 
music.playTone(330, music.beat(BeatFraction.Half)) 
music.playTone(294, music.beat(BeatFraction.Half)) 
music.playTone(262, music.beat(BeatFraction.Half)) 
music.playTone(330, music.beat(BeatFraction.Half)) 
music.playTone(247, music.beat(BeatFraction.Double))
})
```

## Variations and Challenges

One fun way to extend the challenge of the instrument is to form its shape as a real instrument, or else as something symbolic. For example, if you’re going to play a Woody Guthrie song about the Dust Bowl era, the body of the instrument could take the form of a family’s overloaded 1930’s truck.
