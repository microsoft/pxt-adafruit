# Hot Potato

Add your @boardname@ to update an older but popular game!

**Source:** https://learn.adafruit.com/circuit-playground-hot-potato

Use these MakeCode blocks and JavaScript in this learn project.

## Code for: Play Melody

**Source:** https://learn.adafruit.com/circuit-playground-hot-potato/playing-a-melody

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    music.setTempo(40)
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(196, music.beat(BeatFraction.Eighth))
    music.playTone(196, music.beat(BeatFraction.Eighth))
    music.playTone(220, music.beat(BeatFraction.Quarter))
    music.playTone(196, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
})
```

## Code for: Stop Melody 1

Source: https://learn.adafruit.com/circuit-playground-hot-potato/stopping-a-melody

```typescript
/********************************************************************
 * Musical Notes via https://www.arduino.cc/en/Tutorial/ToneMelody  *
 ********************************************************************/

const NOTE_B0 = 31;
const NOTE_C1 = 33;
const NOTE_CS1 = 35;
const NOTE_D1 = 37;
const NOTE_DS1 = 39;
const NOTE_E1 = 41;
const NOTE_F1 = 44;
const NOTE_FS1 = 46;
const NOTE_G1 = 49;
const NOTE_GS1 = 52;
const NOTE_A1 = 55;
const NOTE_AS1 = 58;
const NOTE_B1 = 62;
const NOTE_C2 = 65;
const NOTE_CS2 = 69;
const NOTE_D2 = 73;
const NOTE_DS2 = 78;
const NOTE_E2 = 82;
const NOTE_F2 = 87;
const NOTE_FS2 = 93;
const NOTE_G2 = 98;
const NOTE_GS2 = 104;
const NOTE_A2 = 110;
const NOTE_AS2 = 117;
const NOTE_B2 = 123;
const NOTE_C3 = 131;
const NOTE_CS3 = 139;
const NOTE_D3 = 147;
const NOTE_DS3 = 156;
const NOTE_E3 = 165;
const NOTE_F3 = 175;
const NOTE_FS3 = 185;
const NOTE_G3 = 196;
const NOTE_GS3 = 208;
const NOTE_A3 = 220;
const NOTE_AS3 = 233;
const NOTE_B3 = 247;
const NOTE_C4 = 262;
const NOTE_CS4 = 277;
const NOTE_D4 = 294;
const NOTE_DS4 = 311;
const NOTE_E4 = 330;
const NOTE_F4 = 349;
const NOTE_FS4 = 370;
const NOTE_G4 = 392;
const NOTE_GS4 = 415;
const NOTE_A4 = 440;
const NOTE_AS4 = 466;
const NOTE_B4 = 494;
const NOTE_C5 = 523;
const NOTE_CS5 = 554;
const NOTE_D5 = 587;
const NOTE_DS5 = 622;
const NOTE_E5 = 659;
const NOTE_F5 = 698;
const NOTE_FS5 = 740;
const NOTE_G5 = 784;
const NOTE_GS5 = 831;
const NOTE_A5 = 880;
const NOTE_AS5 = 932;
const NOTE_B5 = 988;
const NOTE_C6 = 1047;
const NOTE_CS6 = 1109;
const NOTE_D6 = 1175;
const NOTE_DS6 = 1245;
const NOTE_E6 = 1319;
const NOTE_F6 = 1397;
const NOTE_FS6 = 1480;
const NOTE_G6 = 1568;
const NOTE_GS6 = 1661;
const NOTE_A6 = 1760;
const NOTE_AS6 = 1865;
const NOTE_B6 = 1976;
const NOTE_C7 = 2093;
const NOTE_CS7 = 2217;
const NOTE_D7 = 2349;
const NOTE_DS7 = 2489;
const NOTE_E7 = 2637;
const NOTE_F7 = 2794;
const NOTE_FS7 = 2960;
const NOTE_G7 = 3136;
const NOTE_GS7 = 3322;
const NOTE_A7 = 3520;
const NOTE_AS7 = 3729;
const NOTE_B7 = 3951;
const NOTE_C8 = 4186;
const NOTE_CS8 = 4435;
const NOTE_D8 = 4699;
const NOTE_DS8 = 4978;

///////////////////////////////////////////////////////////////////////////////
// Circuit Playground Stop Melody 1
//
// Author: Carter Nelson
// MIT License (https://opensource.org/licenses/MIT)
//
// Modified from:
// Adafruit Circuit Playground - Theme Song    Support Open Source, buy at Adafruit
//   2016-08-12 Version 1  by Mike Barela for Adafruit Industries
const melody = [                            // specific notes in the melody
    NOTE_E7, NOTE_E7, 0, NOTE_E7,
    0, NOTE_C7, NOTE_E7, 0,
    NOTE_G7, 0, 0, 0,
    NOTE_G6, 0, 0, 0,

    NOTE_C7, 0, 0, NOTE_G6,
    0, 0, NOTE_E6, 0,
    0, NOTE_A6, 0, NOTE_B6,
    0, NOTE_AS6, NOTE_A6, 0,

    NOTE_G6, NOTE_E7, NOTE_G7,
    NOTE_A7, 0, NOTE_F7, NOTE_G7,
    0, NOTE_E7, 0, NOTE_C7,
    NOTE_D7, NOTE_B6, 0, 0,

    NOTE_C7, 0, 0, NOTE_G6,
    0, 0, NOTE_E6, 0,
    0, NOTE_A6, 0, NOTE_B6,
    0, NOTE_AS6, NOTE_A6, 0,

    NOTE_G6, NOTE_E7, NOTE_G7,
    NOTE_A7, 0, NOTE_F7, NOTE_G7,
    0, NOTE_E7, 0, NOTE_C7,
    NOTE_D7, NOTE_B6, 0, 0
];
const numNotes = melody.length; // Number of notes in the melody

const noteDurations = [     // note durations
    12, 12, 12, 12,
    12, 12, 12, 12,
    12, 12, 12, 12,
    12, 12, 12, 12,

    12, 12, 12, 12,
    12, 12, 12, 12,
    12, 12, 12, 12,
    12, 12, 12, 12,

    9, 9, 9,
    12, 12, 12, 12,
    12, 12, 12, 12,
    12, 12, 12, 12,

    12, 12, 12, 12,
    12, 12, 12, 12,
    12, 12, 12, 12,
    12, 12, 12, 12,

    9, 9, 9,
    12, 12, 12, 12,
    12, 12, 12, 12,
    12, 12, 12, 12,
];

input.buttonA.onEvent(ButtonEvent.Click, function () {
    const numNotesToPlay = Math.randomRange(0, numNotes);
    int noteToPlay = 0;
    for (let thisNote = 0; thisNote < numNotesToPlay; thisNote++) { // play notes of the melody
        // to calculate the note duration, take one second divided by the note type.
        const noteDuration = 1000 / noteDurations[thisNote];
        music.playTone(melody[thisNote], noteDuration);

        // to distinguish the notes, set a minimum time between them.
        //   the note's duration + 30% seems to work well:
        const pauseBetweenNotes = noteDuration / 3;
        loops.pause(pauseBetweenNotes);

      // increment and check note counter
      noteToPlay++;
      if (noteToPlay >= numNotes) noteToPlay = 0;        
    }
});
```

## Code for: Stop Melody 2

```typescript
/********************************************************************
 * Musical Notes via https://www.arduino.cc/en/Tutorial/ToneMelody  *
 ********************************************************************/

const NOTE_B0 = 31;
const NOTE_C1 = 33;
const NOTE_CS1 = 35;
const NOTE_D1 = 37;
const NOTE_DS1 = 39;
const NOTE_E1 = 41;
const NOTE_F1 = 44;
const NOTE_FS1 = 46;
const NOTE_G1 = 49;
const NOTE_GS1 = 52;
const NOTE_A1 = 55;
const NOTE_AS1 = 58;
const NOTE_B1 = 62;
const NOTE_C2 = 65;
const NOTE_CS2 = 69;
const NOTE_D2 = 73;
const NOTE_DS2 = 78;
const NOTE_E2 = 82;
const NOTE_F2 = 87;
const NOTE_FS2 = 93;
const NOTE_G2 = 98;
const NOTE_GS2 = 104;
const NOTE_A2 = 110;
const NOTE_AS2 = 117;
const NOTE_B2 = 123;
const NOTE_C3 = 131;
const NOTE_CS3 = 139;
const NOTE_D3 = 147;
const NOTE_DS3 = 156;
const NOTE_E3 = 165;
const NOTE_F3 = 175;
const NOTE_FS3 = 185;
const NOTE_G3 = 196;
const NOTE_GS3 = 208;
const NOTE_A3 = 220;
const NOTE_AS3 = 233;
const NOTE_B3 = 247;
const NOTE_C4 = 262;
const NOTE_CS4 = 277;
const NOTE_D4 = 294;
const NOTE_DS4 = 311;
const NOTE_E4 = 330;
const NOTE_F4 = 349;
const NOTE_FS4 = 370;
const NOTE_G4 = 392;
const NOTE_GS4 = 415;
const NOTE_A4 = 440;
const NOTE_AS4 = 466;
const NOTE_B4 = 494;
const NOTE_C5 = 523;
const NOTE_CS5 = 554;
const NOTE_D5 = 587;
const NOTE_DS5 = 622;
const NOTE_E5 = 659;
const NOTE_F5 = 698;
const NOTE_FS5 = 740;
const NOTE_G5 = 784;
const NOTE_GS5 = 831;
const NOTE_A5 = 880;
const NOTE_AS5 = 932;
const NOTE_B5 = 988;
const NOTE_C6 = 1047;
const NOTE_CS6 = 1109;
const NOTE_D6 = 1175;
const NOTE_DS6 = 1245;
const NOTE_E6 = 1319;
const NOTE_F6 = 1397;
const NOTE_FS6 = 1480;
const NOTE_G6 = 1568;
const NOTE_GS6 = 1661;
const NOTE_A6 = 1760;
const NOTE_AS6 = 1865;
const NOTE_B6 = 1976;
const NOTE_C7 = 2093;
const NOTE_CS7 = 2217;
const NOTE_D7 = 2349;
const NOTE_DS7 = 2489;
const NOTE_E7 = 2637;
const NOTE_F7 = 2794;
const NOTE_FS7 = 2960;
const NOTE_G7 = 3136;
const NOTE_GS7 = 3322;
const NOTE_A7 = 3520;
const NOTE_AS7 = 3729;
const NOTE_B7 = 3951;
const NOTE_C8 = 4186;
const NOTE_CS8 = 4435;
const NOTE_D8 = 4699;
const NOTE_DS8 = 4978;

const melody = [                            // specific notes in the melody
    NOTE_E7, NOTE_E7, 0, NOTE_E7,
    0, NOTE_C7, NOTE_E7, 0,
    NOTE_G7, 0, 0, 0,
    NOTE_G6, 0, 0, 0,

    NOTE_C7, 0, 0, NOTE_G6,
    0, 0, NOTE_E6, 0,
    0, NOTE_A6, 0, NOTE_B6,
    0, NOTE_AS6, NOTE_A6, 0,

    NOTE_G6, NOTE_E7, NOTE_G7,
    NOTE_A7, 0, NOTE_F7, NOTE_G7,
    0, NOTE_E7, 0, NOTE_C7,
    NOTE_D7, NOTE_B6, 0, 0,

    NOTE_C7, 0, 0, NOTE_G6,
    0, 0, NOTE_E6, 0,
    0, NOTE_A6, 0, NOTE_B6,
    0, NOTE_AS6, NOTE_A6, 0,

    NOTE_G6, NOTE_E7, NOTE_G7,
    NOTE_A7, 0, NOTE_F7, NOTE_G7,
    0, NOTE_E7, 0, NOTE_C7,
    NOTE_D7, NOTE_B6, 0, 0
];

const noteDurations = [     // note durations
    12, 12, 12, 12,
    12, 12, 12, 12,
    12, 12, 12, 12,
    12, 12, 12, 12,

    12, 12, 12, 12,
    12, 12, 12, 12,
    12, 12, 12, 12,
    12, 12, 12, 12,

    9, 9, 9,
    12, 12, 12, 12,
    12, 12, 12, 12,
    12, 12, 12, 12,

    12, 12, 12, 12,
    12, 12, 12, 12,
    12, 12, 12, 12,
    12, 12, 12, 12,

    9, 9, 9,
    12, 12, 12, 12,
    12, 12, 12, 12,
    12, 12, 12, 12,
];

///////////////////////////////////////////////////////////////////////////////
// Circuit Playground Stop Melody 1
//
// Author: Carter Nelson
// MIT License (https://opensource.org/licenses/MIT)
//
// Modified from:
// Adafruit Circuit Playground - Theme Song    Support Open Source, buy at Adafruit
//   2016-08-12 Version 1  by Mike Barela for Adafruit Industries
///////////////////////////////////////////////////////////////////////////////
input.buttonA.onEvent(ButtonEvent.Click, function () {
    const numNotes = melody.length;
    const numNotesToPlay = numNotes + Math.randomRange(0, 2 * numNotes);
    let noteToPlay = 0;
    for (let thisNote = 0; thisNote < numNotesToPlay; thisNote++) { // play notes of the melody
        // to calculate the note duration, take one second divided by the note type.
        const noteDuration = 1000 / noteDurations[thisNote];
        music.playTone(melody[thisNote], noteDuration);

        // to distinguish the notes, set a minimum time between them.
        //   the note's duration + 30% seems to work well:
        const pauseBetweenNotes = noteDuration / 3;
        loops.pause(pauseBetweenNotes);

        noteToPlay++;
        if (noteToPlay >= numNotes)
            noteToPlay = 0;
    }
});
```

## Hot potato full source

**Source:** https://learn.adafruit.com/circuit-playground-hot-potato/hot-potato-code
