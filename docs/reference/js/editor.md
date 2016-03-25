# Touch Develop Editor

The Touch Develop editor. #docs #editor #scripts #compile #run #keyboard

### @parent js/contents
 

The Touch Develop editor is where you write and test your code. If you're new to Touch Develop, check out the [Touch Develop editor video](/microbit/getting-started/touchdevelop-editor).

To create a new Touch Develop script:

1. Go to the micro:bit website and click **Create Code** (along the top).

2. Under the Touch Develop editor heading, click **New project**.

3. Type a name for your script and click **create**.

An empty script with a [function](/microbit/js/function) called `main` is created.

## The Editor Menu Bar

The Touch Develop editor has a bar of options above the code area:

![](/static/mb/data-1.jpg)

* `my scripts` takes you back to a list of your scripts (My Scripts). The open script is automatically saved (in the cloud) when you leave the editor.
* `run` executes your script, showing you the results on the on-screen micro:bit device. See [run scripts in the browser](/microbit/js/simulator) for more about this.
* `compile` sends your script to an ARM compiler, which creates a file that you can run on your micro:bit. See [run scripts on your micro:bit](/microbit/device/usb) for more info.
* `undo` undoes changes that you made to your script.
* `search code...` search for functions in libraries such as the micro:bit library.
* `script` opens script options, where you can do things like publish and preview. See **script options** below.

Many of the above buttons aren't much use until you've written some code, so let's move on to the Code Keyboard.

## Code Keyboard

The Code Keyboard makes it easy to write code on a touch screen device or by using your mouse. You can also type code using your computer keyboard if you know what function or statement you want (see [Touch Develop documentation](/microbit/js/contents) for a complete list).

To open the Code Keyboard, click on a line of code:

![](/static/mb/data-2.jpg)

An on-screen keyboard appears, with buttons that vary depending on what's selected.

### Statements

The first row of the Code Keyboard has Touch Develop [statements](/microbit/js/statements) that you can insert into your code. These buttons are blue and include things like [var](/microbit/reference/variables/var), [if](/microbit/reference/logic/if), [for](/microbit/reference/loops/for) , and [while](/microbit/js/while). Click `more` to see additional statements.

### The BBC micro:bit, math, and code buttons

* `micro:bit`: click to see all the [micro:bit functions](/microbit/js/contents); click `more` to scroll left to right. The micro:bit functions are also grouped together behind the following category buttons: `basic`, `control`, `input`, `image`, `led`,  and`pins`
* `code`: click to access functions you've written (see [call a function](/microbit/js/call) for more info)
* `math`: click to see [math functions](/microbit/js/math); such as `abs` and `round`
* `bits`: click to see functions for bit-level manipulation of integers

### Editing code: add, copy, paste, and cut

In the coding area...

* **add**: to add a new line, click on a line and then click a **+** to add a new line above or below the current line
* **copy, paste, cut**: click on a line then click **copy** or **cut**. Then click on a new line, and click **paste**.

### Block editing

To copy, cut, or comment out a block of code (more than one line):

1. Click on a line of code.

2. Press and hold the `Shift` key, and then press the `Up arrow` or `Down arrow` key on your keyboard (this selects multiple lines).

3. Choose a block editing option like copy, cut, or [comment out](/microbit/js/comment).

### Script options

Click `script` (in the upper-right corner) to open the script options:

![](/static/mb/data-3.jpg)

Here you'll find options like...

* `script properties`: the script name, description, and whether or not the script is a library  (more info below)
* `publish`: share a script with other users by [publishing](/microbit/js/publishing) it
* `share`: share a link to a published script (see [publish as script](/microbit/js/publishing) for more info)
* `preview`: preview a documentation script
* `+` `add new`: add a new [function](/microbit/js/function), [global variable](/microbit/js/data), picture, or library to a script
* *code*: the functions in your script; click a function to open it in the editor
* *global vars*: the [global variables](/microbit/js/data) in your script; click a variable to go to that variable
* *libraries*: the libraries added to your script
* *art*: picture and video resources added to your script

### Script properties

To edit a script's properties, click `script` (in the upper-right corner), and then click the script name or script properties.

![](/static/mb/data-4.png)

* `name`: the script's name (60 character limit)
* `description`: a description of what your script does along with #hashtags for search (for example, #game or #maker). Hashtags are especially important if you publish your script (200 character limit).
* `this script is a library`: click this check box to turn a script into a library

### Comments

Comments are notes within your scripts. To learn how to insert comments into your scripts, see [Comments](/microbit/js/comment). You can format your comments using [markdown syntax](/microbit/js/markdown).

### Share your scripts

Share your scripts with other people by publishing them. See [publish a script](/microbit/js/publishing) for more info.

### See also

[publish a script](/microbit/js/publishing), [Touch Develop documentation](/microbit/js/contents)

