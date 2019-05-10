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
    light.showAnimation(light.sparkleAnimation, 2000 + Math.randomRange(0, 2001))
    // check if the players haven't already touched a button
    // and finished the game
    if (running == 0) {
        // countdown over, stop sounds and light
        // wait for players input
        running = 1
        music.stopAllSounds()
        light.clear()
    }
})

// red player
input.pinA2.onEvent(ButtonEvent.Down, () => {
    if (running == 0) {
        // tapped too early, blue wins
        running = 2
        // stop animations and show blue
        light.stopAllAnimations()
        light.setAll(0x0000ff)
        music.powerDown.play()
    } else if (running == 1) {
        // red wins
        running = 2
        light.setAll(0xff0000)
        music.powerUp.play()
    }
})
input.pinA3.onEvent(ButtonEvent.Down, () => {
    if (running == 0) {
        // too early, red wins
        running = 2
        light.stopAllAnimations()
        light.setAll(0xff0000)
        music.jumpDown.play()
    } else if (running == 1) {
        // blue wins
        running = 2
        light.setAll(0x0000ff)
        music.jumpUp.play()
    }
})
```