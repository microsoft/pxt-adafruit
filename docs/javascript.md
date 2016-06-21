# JavaScript

You can write micro:bit programs in a subset of [TypeScript](https://www.typescriptlang.org), a superset of JavaScript.
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
modern programming languages (for example, loops, lexically scoped variables,
functions, classes, lambdas).

We leverage TypeScript's [type inference](http://www.typescriptlang.org/docs/handbook/type-inference.html) so that
students need not specify types when clear from context.

## Supported language features

* top-level code in the file: "Hello world!" really is just `basic.showString("Hello world!")`
* [basic types](http://www.typescriptlang.org/docs/handbook/basic-types.html)
* [variable declarations](http://www.typescriptlang.org/docs/handbook/variable-declarations.html): `let`, `const`, and `var`
* [functions](http://www.typescriptlang.org/docs/handbook/functions.html) with lexical scoping and recursion

### User-defined types and modules

* [classes](http://www.typescriptlang.org/docs/handbook/classes.html) with fields, methods and constructors; `new` keyword
* [enums](http://www.typescriptlang.org/docs/handbook/enums.html)
* [namespaces](http://www.typescriptlang.org/docs/handbook/namespaces.html)  (a form of modules) 

### Control-flow constructs

* `if ... else if ... else` statements
* `while` and `do ... while` loops
* `for(;;)` loops (see below about `for ... in/of`)
* `break/continue`; also with labeled loops
* `switch` statement (on numbers only)
* `debugger` statement for breakpoints

### Expressions

* conditional operator `? :`; lazy boolean operators
* all arithmetic operators (including bitwise operators); note that in microcontroller targets
  all arithmetic is performed on integers, also when simulating in the browser
* strings (with a few common methods)
* [string templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) (`` `x is ${x}` ``)
* arrow functions `() => ...`
* array literals `[1, 2, 3]`


## Unsupported language features

We generally stay away from the more dynamic parts of JavaScript. 
Things you may miss and we may implement:

* exceptions (`throw`, `try ... catch`, `try ... finally`)
* `for ... of` statements
* object literals `{ foo: 1, bar: "two" }`
* method-like properties (get/set accessors)
* class inheritance

If there is something you'd like to see, please file an issue at [GitHub](http://github.com/microsoft/pxt/issues).