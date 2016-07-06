# Turn

Turn the sprite as much as you say in the direction you say.

### Parameters

* ``turn`` is a choice whether the sprite should turn **left** or **right**
* ``by`` is a [number](/reference/types/number) that means how much the sprite should turn.
  This number is in **degrees**, so a straight left or right turn is 90 degrees.

### Example


This program starts a sprite in the middle of the screen.
Next, the sprite turns toward the lower-right corner.
Finally, it moves two LEDs away to the corner.

```blocks
let item = game.createSprite(2, 2);
item.turn(Direction.Right, 45);
item.move(2);
```

### See also


[move](/reference/game/move),
[create sprite](/reference/game/create-sprite)
