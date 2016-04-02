# transformers quiz answers

Use functions to return values.

This is the answer key for the [transformers quiz](/microbit/lessons/transformers/quiz).

## 1. What is a 'function'?

A function is a unit of code that performs a specific task and returns a result.

## 2. Write the line of code to create a number variable called "x" is equal to 5.

<br/>

```
let x = 5
```

## 3. Write the line of code to create a condition for 'on button pressed ("A")'

<br/>

```
input.onButtonPressed(Button.A, () => {
})
```

## 4. Write the steps to create a function.

<br/>

Click on `script`, then `add new`, and select `function`.

## 5. Create a function called double that will double whatever input parameter is passed into it.

<br/>

```
export function double(n: number) : number {
    let r: number
    return n * 2
    return r
}
```

## 6. Consider the following directions

Call the `function` that doubles the variable **x**. (The `function` is going to return the doubled value after it is called). Assign the new value (10) to a variable which we will call `doubled`.

<br/>

```
let doubled = double(x)
```

## 7. Refer to Question 6

Write the code to call the function that doubles our new `variable` doubled. Assign the new value 20 to a variable we will call doubled twice.

<br/>

```
let doubleTwice = double(doubled)
```

