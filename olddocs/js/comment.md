# Comment

A note in code.

### @parent js/statement
 

A comment is a line of code that contains text, usually an explanation or a note. All comments are ignored during script execution.

### Block

Right click on any block and add a comment

### Touch Develop syntax

To insert a comment in a Touch Develop script:

1. Click a line in your script.

2. Click `+`.

3. Click `// comment` and then type some text (your comment).

### ~hint 

To find out how to insert comments using the Blocks editor, see [the Blocks editor](/blocks/editor).

### ~

### Sample function with comments

This function has comments that describe the purpose of the function:

```
/**
 * // square function :
 * // returns the square of the input parameter x
 * @param x TODO
 */
export function square(x: number) : number {
    return x * x
}
```

### Commenting out code

During the debugging process, you may want to comment out a section of your code so that it doesn't run.

To comment out a block of code:

1. Click the first line of code that you want to comment out.

2. Press and hold the Shift key, and then press the Down arrow key to select a block of code.

3. In the block editing window, scroll down to **surround with** and click `comment out`. This adds an [if](/reference/logic/if) statement around your code, like this:

```
if (false) {
    // the commented code here...
}
```

When you want to uncomment your code, click the `if false then` statement in your code, and then click `uncomment`.

### Library and function comments

* Use [comments](/js/comment) at the beginning of a library to describe the  library
* Use [comments](/js/comment) at the beginning of a [function](/js/function) to describe a function. The comment will appear in the help area of the Touch Develop editor when you insert the function

### See also

[markdown syntax](/js/markdown), [Touch Develop editor](/js/editor), [Block editor](/blocks/editor)

