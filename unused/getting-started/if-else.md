## If Then Else Statements

You may have noticed that there are different types of **if** blocks. 

In this challenge, you'll use an **if then else** block to toggle the red LED when the left button is pressed.

#### ~hint

Sometime's you will need to run code when none of the conditions are true. 

This is what the **else** part of an **if** block is for. If the condition is not met, code inside the **else** part will be run. 

#### ~

Let's show the red LED when the left button is pressed, and hide it when it is not pressed. You'll need the following blocks: 

```shuffle
sensors.button(Button.Left)
light.redLED(true)
if (true) {

} else {
    
}
while (true) {

}
```

Just like in the previous challenge, we will need to place our code inside a **while** block, so that it continiously checks if we meet our condition.

1. Drag a **while** block from the **Loops** drawer onto the workspace. 
2. Find the **if then else** block, and place it inside the **while** block. 
3. Drag the [button pressed?](/reference/sensors/button-pressed) block from the **Sensors** drawer, and place it in the **if** section of the **if then else** block.
4. Drag a [red LED](/reference/light/red-LED) block and place it inside the **then** section of the **if** block. Set it to **true**. 
5. Drag another [red LED](/reference/light/red-LED) block and place it inside the **else** part of the **if** block. Set this one to **false**. 
6. Tap on the left button in the simulator to test your code.

The red LED should turn off when you are no longer pressing the left button.

### ~button /getting-started/sensors
NEXT: Sensors
### ~