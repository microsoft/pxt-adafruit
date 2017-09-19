# @extends

## #eventorder

## ~hint
**Who goes first?**

All events are registered before the **onStart** block runs. Code in your events will run when:

* An _asynchronous_ operation occurs (such as an input received on the board).
* Other code currently running needs to wait for something.
* Another part of the program begins to wait in a **[pause](/reference/loops/pause)** block.

If your program has a **[forever](/reference/loops/forever)** loop or a **[runInBackground](/reference/control/run-in-background)** block, these will not start until after the code in **onStart** ends.

## ~
