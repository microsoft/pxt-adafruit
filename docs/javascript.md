# JavaScript and TypeScript

Visit the cards below to starting programming JavaScript and TypeScript with the micro:bit:

```codecard
[{
  "name": "Calling",
  "url":  "/js/call"
},{
  "name": "Sequencing",
  "url":  "/js/sequence"
},{
  "name": "Variables",
  "url":  "/js/variables"
},{
  "name": "Operators",
  "url": "/js/operators"
},{
  "name": "Statements",
  "url": "/js/statements"
},{
  "name": "Functions",
  "url": "/js/functions"
},{
  "name": "Types",
  "url": "/js/types"
},{
  "name": "Classes",
  "url": "/js/classes"
}]
```

## More information on TypeScript

You can write micro:bit programs in a subset of [TypeScript](https://www.typescriptlang.org), which is a superset of JavaScript.
Many micro:bit programs, especially at the beginner's level, are just plain JavaScript. TypeScript introduces class-based 
object-oriented programming, such as:

```typescript
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
basic.showString(greeter.greet())
```

This site is meant for teaching programming first, and JavaScript second. For this
reason, we have stayed away from concepts that are specific to JavaScript (for
example, prototype inheritance), and instead focused on ones common to most
modern programming languages (lexically scoped variables, functions, classes).