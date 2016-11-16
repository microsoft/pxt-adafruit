## If Then Statements

In this challenge, you'll use an **if** block to turn on the red LED when the left button is pressed.

#### ~hint

An **if** block takes in a **condition**. 

This condition needs to be true in order for the code inside the **if** block to run. 

#### ~

An **if** block is made up of two parts: 
- the **if** part, here you can place the check that you'd like to make.
- the **then** part, code inside the **then** part is only run if the **if** part is true.

Let's show the red LED when the left button is clicked. You'll need the following blocks:

```snippets
sensors.button(Button.Left)
light.redLED(true)
```

We will need to place our code inside a **while** block, so that it continiously checks if we have met our condition.

1. Drag a **while** block from the **Loops** drawer onto the workspace. 
2. Find the **if** block. Hint: Look inside the **Logic** drawer.
3. Drag an **if** block and place it inside the **while** block.
4. Find the **left button pressed?** block. Hint: Look inside the **Sensors** drawer.
5. Drag the **left button pressed?** block and connect it to the if statement, putting it in place of the **true** dropdown. 
6. Drag the **red LED** block and place it inside the **if** block. 
7. Tap on the left button in the simulator to test your code.

### ~button /getting-started/if-else
NEXT: Else
### ~