# Reference

## micro:bit

```namespaces
basic.showString("Hello!");
input.onButtonPressed(Button.A, () => {});
led.plot(0,0);
radio.sendNumber(0);
music.playTone(music.noteFrequency(Note.C), music.beat(BeatFraction.Whole));
game.createSprite(2,2);
pins.digitalReadPin(DigitalPin.P0);
serial.writeLine("Hello!");
control.inBackground(() => {});
```

## Language

### @section full

### ~column 

### Loops

[for](/microbit/reference/loops/for)

```block
for(let i = 0;i<5;i++) {}
```

[repeat](/microbit/reference/loops/repeat)

![](/static/mb/blocks/contents-0.png)

[while](/microbit/reference/loops/while)

```block
while(true) {}
```

[forever](/microbit/reference/basic/forever)

```block
basic.forever(() => {})
```

### ~

### ~column 

### Logic

[if](/microbit/reference/logic/if)

```block
if(false) {
}
```

[Boolean](/microbit/reference/types/boolean) values: *true*; *false*

```block
true
false
```

Boolean binary operators: *and* (conjunction); *or* (disjunction)

```block
true && false;
true || false;
```

Boolean negation operator

```block
!true
```

Comparison operators (=, !=, <, >, <=, >=)

```block
0 == 0;
1 !- 0;
0 < 1;
1 > 0;
0 <= 1;
1 >= 0;
```

### Variables

[Assign](/microbit/reference/variables/assign) (set) a variable's value

```block
let x = 0;
```

Get a variable's value

```block
let x = 0;
x;
```

[Change](/microbit/reference/variables/change-var) a variable's value

```block
let x = 0;
x+=1;
```
### ~

### ~column 


### Math

[Numeric](/microbit/reference/types/number) values: 0, 1, 2, ...

```block
0;
1;
2;
```

Arithmetic binary operation (+, -, *, /)

```block
0+1;
0-1;
1*2;
3/4;
```

Absolute value

```block
Math.abs(-5);
```

Minimum/maximum of two values

```block
Math.min(0, 1);
Math.max(0, 1);
```

Random value

```block
Math.random(5);
```
### Comments

[comment](/microbit/reference/comment)

### ~
