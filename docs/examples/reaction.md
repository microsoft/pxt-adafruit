# Reaction

A two player game where you have to hit the button when the music stops.

```blocks
// game state: 
// 0 = countdown running
// 1 = countdown done
// 2 = player pushed button, stopped
let running = 2
input.pinA1.onEvent(ButtonEvent.Click, () => {
    // start countdown
    running = 0
    music.ringTone(988)
    light.pixels.showAnimation(light.animation(LightAnimation.Sparkle), 2000 + Math.randomRange(0, 2001))
    // check if the players haven't already touched a button
    // and finished the game
    if (running == 0) {
        // countdown over, stop sounds and light
        // wait for players input
        running = 1
        music.stopAllSounds()
        light.pixels.clear()
    }
})

// red player
input.pinA2.onEvent(ButtonEvent.Down, () => {
    if (running == 0) {
        // tapped too early, blue wins
        running = 2
        // stop animations and show blue
        light.pixels.stopAllAnimations()
        light.pixels.setAll(Colors.Blue)
        music.playSound(music.sounds(Sounds.PowerDown))
    } else if (running == 1) {
        // red wins
        running = 2
        light.pixels.setAll(Colors.Red)
        music.playSound(music.sounds(Sounds.PowerUp))
    }
})
input.pinA3.onEvent(ButtonEvent.Down, () => {
    if (running == 0) {
        // too early, red wins
        running = 2
        light.pixels.stopAllAnimations()
        light.pixels.setAll(Colors.Red)
        music.playSound(music.sounds(Sounds.JumpDown))
    } else if (running == 1) {
        // blue wins
        running = 2
        light.pixels.setAll(Colors.Blue)
        music.playSound(music.sounds(Sounds.JumpUp))
    }
})
```