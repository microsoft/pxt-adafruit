# Functions

Functions are the fundamental building block of programs. Here is the simplest
way to make a function that adds two numbers:

```ts
// Named function
function add(x : number, y : number) {
    return x + y;
}

basic.showNumber(add(1, 2))
```

### ~ hint
For the @boardname@, you must specify a [type](/js/types) for each function parameter. 
### ~ 

Functions can refer to variables outside of the function body.
When they do so, they're said to `capture` these variables.

```ts
let z = 100;

function addToZ(x: number, y: number) {
    return x + y + z;
}

basic.showNumber(addToZ(1, 2))
```

## Typing the function

Let's add a return type to our add function:

```ts
function add(x: number, y: number): number {
    return x + y;
}
```

TypeScript can figure the return type out by looking at the return statements, so you can optionally leave this off in many cases.

# Optional and Default Parameters

In TypeScript, the number of arguments given to a function has to match the number of parameters the function expects.

```ts-ignore
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // error, too few parameters
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right
```

In JavaScript, every parameter is optional, and users may leave them off as they see fit.
When they do, their value is `undefined`.
We can get this functionality in TypeScript by adding a `?` to the end of parameters we want to be optional.
For example, let's say we want the last name parameter from above to be optional:

```ts-ignore
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");                  // works correctly now
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right
```

Any optional parameters must follow required parameters.
Had we wanted to make the first name optional rather than the last name, we would need to change the order of parameters in the function, putting the first name last in the list.

In TypeScript, we can also set a value that a parameter will be assigned if the user does not provide one, or if the user passes `undefined` in its place.
These are called default-initialized parameters.
Let's take the previous example and default the last name to `"Smith"`.

```ts-ignore
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result4 = buildName("Bob", "Adams");         // ah, just right
```

Default-initialized parameters that come after all required parameters are treated as optional, and just like optional parameters, can be omitted when calling their respective function.
This means optional parameters and trailing default parameters will share commonality in their types, so both

```ts
function buildName(firstName: string, lastName?: string) {
    // ...
}
```

and

```ts
function buildName(firstName: string, lastName = "Smith") {
    // ...
}
```

share the same type `(firstName: string, lastName?: string) => string`.
The default value of `lastName` disappears in the type, only leaving behind the fact that the parameter is optional.

Unlike plain optional parameters, default-initialized parameters don't *need* to occur after required parameters.
If a default-initialized parameter comes before a required parameter, users need to explicitly pass `undefined` to get the default initialized value.
For example, we could write our last example with only a default initializer on `firstName`:

```ts-ignore
function buildName(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // error, too few parameters
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // okay and returns "Bob Adams"
let result4 = buildName(undefined, "Adams");     // okay and returns "Will Adams"
```

# Rest Parameters

Required, optional, and default parameters all have one thing in common: they talk about one parameter at a time.
Sometimes, you want to work with multiple parameters as a group, or you may not know how many parameters a function will ultimately take.
In JavaScript, you can work with the arguments directly using the `arguments` variable that is visible inside every function body.

In TypeScript, you can gather these arguments together into a variable:

```ts-ignore
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
```

*Rest parameters* are treated as a boundless number of optional parameters.
When passing arguments for a rest parameter, you can use as many as you want; you can even pass none.
The compiler will build an array of the arguments passed in with the name given after the ellipsis (`...`), allowing you to use it in your function.

The ellipsis is also used in the type of the function with rest parameters:

```ts-ignore
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
```

### ~button /js/types
NEXT: Types
### ~