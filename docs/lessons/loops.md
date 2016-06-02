# blocks - loops

An introduction to Loops for the Block Editor.

We may want to handle the user’s input multiple times or remain waiting for their input for a long time. We use loops to make sure that our code runs multiple times. These can be found in the **Loops** drawer.

### Forever loops

In the Variables tutorial we utilised a forever loop to create a counter:

![](/static/mb/blocks/lessons/blocks-conditions-2.png)

This allows our BBC micro:bit to wait for the user to do something forever, for example wait for the user to press the correct button as the example above shows. If you were creating a quiz, you may want to loop forever until the user presses the correct button or answers the question.

### Repeat Loops

Repeat loops allow code to happen a certain amount of times. You may want to create a quiz that only gives the user a few tries to get the correct answer, for example. The number can be changed to facilitate your code.

![](/static/mb/blocks/lessons/loops-0.png)

The code above will scroll the message, “Hello world” three times.

### While & Until loops

The ‘repeat while’ loop allows you to continue looping some code until a condition is met. The empty socket next to the while loop allows you to connect some Logic and construct a statement.

![](/static/mb/blocks/lessons/loops-1.png)

The code above will scroll the message, “Press it!”, while the user hasn’t pressed the button.

* Drag a `set item` block from the **Variables** drawer. Click the **down arrow** and click **New Variable**, and type "pressed". Drag a `0` block from **Maths** to set the variable **pressed** to 0.
* Drag a `repeat while` block from the **Loops** drawer and attach an `=` block from the **Logic** drawer. Drag `item` from the **Variables** drawer and click the **down arrow**, select ‘pressed’. Drag a `0` block from Maths and connect it to the other side of the equals. This will carry out the code until ‘pressed’ does not equal 0.
* Add a `show string` block from the **Basic** drawer and change the message to "Press it!"
* Add an `if` block from the **Logic** drawer, connect a `button pressed` block from the **Input** drawer, and add text from the **Basic** drawer. Change this to A to show we are waiting for button A.
* Inside the ‘do’ part of the if statement, add a `set` block from the Variables drawer, click the **down arrow** to change it to **pressed** and drag a `1` from the Maths drawer
* Lastly underneath the while loop, add another `show string` block and fill in the gaps.

Test the code above on actual hardware or on the simulator window.

We can also change the code in subtle ways to have a completely different effect:

![](/static/mb/blocks/lessons/loops-2.png)

This time we have to press the button three times to leave the while loop.

## Tip

You can press the arrow next to a word in a block to change it. For example, you can change Math functions or change a Logic statement.

### Count or for loops

A count loop allows you to loop a certain amount of times and to change a variable as you do so. For example, we can create a simple counting program:

![](/static/mb/blocks/lessons/loops-3.png)

The count loop will repeat a certain amount of times whilst changing a variable. You can click the arrow next to **i** to replace it with any of your own variables. So this program will display numbers 1 to 10.

This loop allows you to repeat code for the amount of times you want to without worrying about manually changing variables. You could use this for a counting program or a timer.

