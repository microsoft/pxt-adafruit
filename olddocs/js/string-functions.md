# String Functions

string-related functions.

### @parent javascript/language

The following string related functions are available in Touch Develop for the @boardname@:

* **equals** - find out if two strings are the same
* **at** - get a character within a string
* **concat** - combine two strings
* **count** - get the number of characters in a string
* **substring** - get a portion of a string
* **to character code** - converts a character into a character code
* **to number** - converts a string into a number

Select a string variable in the [Touch Develop editor](/js/editor) to see the following string functions:

```
/* placeholder */
```

### ~hide

```
let str = "hi"
```

### ~

### equals

find out if two strings are the same

#### Syntax

[String](/types/string) `->` **equals** (other : [String](/types/string)) *returns* [Boolean](/types/boolean)

#### Parameters

* other - [String](/types/string); a string

#### Example

the following code does something if `str` = "Hi":

```
if (str == "Hi") {
    // add code to do something here
}
```

### at

get a character within a string, using the specified index

#### Syntax

[String](/types/string) `->` **at** (index: [Number](/types/number)) *returns* [String](/types/string)

#### Parameters

* index- [Number](/types/number); the character number within a string (0 returns the first character)

#### Example

The following code gets the first character from the `str` string and stores it in the `first char` variable:

```
let firstChar = str[0]
```

### The `||` operator

To combine two strings you can use the string concatenation operation `||` as shown below:

```
let s = "abc" + "def"
let evaluatesToTrue = s == "abcdef"
```

NOTE: position the cursor outside of the string quotes, right after the string, for the || operator to appear in the keyboard.

### concat

combine two strings; like the concat operator (`||`)

#### Syntax

[String](/types/string) `->` **concat** (other : [String](/types/string)) *returns* [String](/types/string)

#### Parameters

* other- [String](/types/string); a string

#### Example

The following code combines two strings and displays the string on screen:

```
str = "Hi "
str = str.concat("there")
basic.showString(str, 100)
```

### count

get the number of characters in a string

#### Syntax

[String](/types/string) `->` **count** *returns* [Number](/types/number)

#### Example

The following example gets the length of the `str` variable and stores it in the `x` variable:

```
let x = str.length
```

### Substring

get a portion of a string, using a starting point and length

#### Syntax

[String](/types/string) `->` **substring** (start : [Number](/types/number), length : [Number](/types/number)) *returns* [String](/types/string)

#### Parameters

* start - [Number](/types/number); the starting character number (0 is the first character number in a string)
* length - [Number](/types/number); the string length

#### Example

The following code gets characters 6, 7, and 8 from the `str` string:

```
let asubstring = str.substr(5, 3)
```

### to character code

converts the first character of a string into a character code number (unicode)

#### Syntax

[String](/types/string) `->` **to character code** *returns* [Number](/types/number)

#### Example

The following code converts the first character of `str` into a character code and stores the code in `x`:

```
x = str.toCharacterCode()
```

### to number

converts a string into a number

#### Syntax

[String](/types/string) `->` **to number** *returns* [Number](/types/number)

#### Example

The following code converts `str` into a number and stores it in `x`:

```
x = parseFloat(str)
```

### See also

[string](/types/string), [number](/types/number), [show string](/reference/basic/show-string)

