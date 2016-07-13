# Touching

Reports true if sprite is touching specified sprite

```blocks
let matter = game.createSprite(2, 2);
let antimatter = game.createSprite(2, 2);
if (matter.isTouching(antimatter)) {
    basic.pause(500);
    basic.clearScreen();
    basic.showString("BOOM!");
}
```
