# runaway pacman quiz answers

create a game that is inspired by the classic arcade game Pac Man #LED #number #math #acceleration #docs

## Name

## Directions

Use this activity document to guide your work in the [runaway pacman tutorial](/microbit/lessons/runaway-pacman/tutorial)

Answer the questions while completing the tutorial. Pay attention to the dialogues!

## 1. Write the the method name created that will set up the game board.

<br/>

```
initializeState()
```

## 2. Write the the method name created that will draw the player and the monster(s)

<br/>

```
redraw()
```

## 3. Write the code that keeps track of how long a player has been playing. (Don't include any if statements.)

<br/>

```
basic.forever(() => {
    levelTime = levelTime + 12
    basic.pause(12)
})
```

## 4. Write the code that will reset the time and continue playing if we have been eaten.

<br/>

```
if ( ! playing) {
    levelTime = 0
    playing = true
}
```

## 5. Write 'If statement' that will determine if the player has been playing for more than 5 seconds.

<br/>

```
if (levelTime >= 5000) {
}
```

## 6. Suspend the game if we are advancing to the next level. (Hint: this requires setting a variable to true.) 

<br/>

```
gameSuspended = true
```

## 7. Write the code to add a monster. (Hint: look in the function "add monster".)

<br/>

```
let m = new Entity()
monsters.push(m)
totalMonsters = totalMonsters + 1
```

## 8. Write the code that will restart the time to 0 after you begin the next level.

<br/>

```
levelTime = 0
```

## 9. Write the code that makes the player go either North or East when button 'A' is pressed.

<br/>

```
input.onButtonPressed("A", () => {
    let temp = math.abs(person.dirX) * (-1)
    // {stcode}
    // MACRO: stcode
    person.dirX = math.abs(person.dirY) * (-1)
    // {stcode}
    // MACRO: stcode
    person.dirY = temp
})
```

## 10. Write the code that makes the player go either South or West when button 'B' is pressed.

<br/>

```
input.onButtonPressed("B", () => {
    let temp1 = math.abs(person.dirX)
    // {stcode}
    // MACRO: stcode
    person.dirX = math.abs(person.dirY)
    // {stcode}
    // MACRO: stcode
    person.dirY = temp1
})
```

