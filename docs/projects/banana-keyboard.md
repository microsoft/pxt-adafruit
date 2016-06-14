# banana keyboard activity 

build a banana keyboard 

# micro:bit banana keyboard

![](/static/mb/lessons/banana-keyboard-0.png)

In this project, you will build your own music player micro:bit banana keyboard from household fruit. Project duration: 15 minutes.

## Materials

* micro:bit, battery holder and 2 AAA batteries
* Bananas
* Orange
* Crocodile clips

## Steps

### Step 1

![](/static/mb/lessons/banana-keyboard-1.png)

Using the 1st crocodile clip, connect the end of the crocodile clip onto GND pin on the micro:bit.

### Step 2

![](/static/mb/lessons/banana-keyboard-2.png)

![](/static/mb/lessons/banana-keyboard-3.png)

Using the 2nd crocodile clip, connect the end of the crocodile clip onto the 0 pin on the micro:bit.

### Step 3

![](/static/mb/lessons/banana-keyboard-4.png)

Using the 1st crocodile clip, connect the second end of the crocodile clip onto based of the headphone jack.

### Step 4

![](/static/mb/lessons/banana-keyboard-5.png)

![](/static/mb/lessons/banana-keyboard-6.png)

Using the 2nd crocodile clip, connect the second end of the crocodile clip onto tip of the headphone jack.

### Step 5

![](/static/mb/lessons/banana-keyboard-7.png)

Using the 3rd crocodile clip, connect the end of the crocodile clip onto the 1st crocodile clip already clipped onto GND.

### Step 6

![](/static/mb/lessons/banana-keyboard-8.png)

![](/static/mb/lessons/banana-keyboard-9.png)

Using the 3rd crocodile clip, connect the unattached end of the crocodile clip onto the orange.

### Step 7

![](/static/mb/lessons/banana-keyboard-10.png)

Using the 4th crocodile clip, connect the end of the crocodile clip onto pin 1 on the micro:bit.

### Step 8

![](/static/mb/lessons/banana-keyboard-11.png)

Using the 4th crocodile clip, connect the unattached end of the crocodile clip onto the banana.

### Step 9

![](/static/mb/lessons/banana-keyboard-12.png)

Your banana keyboard is ready!

### Step 10

Connect your micro:bit to your computer using your USB cable and run this script:
```blocks
let sound = music.noteFrequency(Note.C);
input.onPinPressed(TouchPin.P1, () => {
    for (let i = 0; i < 5; i++) {
        sound = sound + 25;
        music.playTone(sound, music.beat(BeatFraction.Sixteenth));
    }
});
```

Tap your banana instrument to play sound against... the fruit!


### ~avatar boothing

Excellent, you're ready to continue with the [challenges](/projects/banana-keyboard-challenges)!

### ~
