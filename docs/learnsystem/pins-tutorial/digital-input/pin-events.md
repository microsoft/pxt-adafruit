# Pin events

Instead of continually reading the value of a pin input, you can have code that runs when an input level changes on a pin. These are pin events and they are triggered when an input switches from one level to another or if the input level is beginning to change.

## Pulses

Information is often communicated between digital circuits using _pulses_. A pulse is a change in voltage level for brief period time. Usually for microseconds or even a shorter amount of time, like nanoseconds.

### Digital data signals #data-signals

Data is transmitted between digital circuits using changes between high and low voltage levels. A change to high can mean a signal for the value of `1`. The change down to low can mean a signal for the value of `0`. One of these signals, a pulse, can represent a binary digit, or _bit_. Combining several digital signals will form a binary number which can represent some type of data, such as a [number](/types/number) or [text character](/types/string).

In the diagram below, a pulse is created every 4 microseconds to signal a binary digit. If the value of the **A1** pin is read repeatedly at the proper time, a binary number can be assembled. Here, the first digit is a `1`, the second a `0`, and then `1` and another `1`. Together they form the binary number `1101` when each bit received is the next greater digit of the number. This is a 4 bit number is which equals `13` in decimal. 

![Pulsed data signal](/static/cp/learn/pins-tutorial/digital-input/pulsed-signal.jpg)

Another way to signal data is to keep the signal level constant while the a value represented is the same. More values  might be read by pin **A1** in the same amount of time using this method.

![Logic level data signal](/static/cp/learn/pins-tutorial/digital-input/logic-level-signal.jpg)

There are many more ways to signal digital data. Transmiting and receiving data by digital signals is part of the science of _data communications_.

### Clock signals #clock-signals

The timing events is an important part of digital electronics. Actions in a computer are sequenced by a system clock. This clock is actually a digital signal using continuous pulses that occur at a regular interval. In fact, each part of a program on your @boardname@ is run in the microcontoller at a certain time that's controlled by a clock signal. A clock signal received by the **A2** pin is shown in the following diagram.

![Clock signal pulses](/static/cp/learn/pins-tutorial/digital-input/clock-signal.jpg)

A pulse going high occurs during a 2 microsecond period of time. The pulses repeat their shape every 4 microseconds though. This 4 microsecond time span is also the _period_ of the clock signal which makes it have a _frequency_ of 250 kilohertz (kHz). The clock signal on your @boardname@ repeats itself millions of times a second so it's measured in megahertz (mHz).

Often a clock signal is received at one pin in order to to tell your program when to read a data signal at another pin. If the **A1** pin is receiving a data signal and the **A2** pin input is a clock signal, then the input at **A1** is valid when a pin event happens at **A2**. This is called _clocking_ the input, or you can say that pin **A1** is a _clocked_ input.

## Triggers #triggers

Other pin events aren't used to receive any data but are just for notification. These are trigger events that happen during a very short amount of time when the pin input changes levels. A trigger signal can be a either a short pulse or a long steady signal. In either case, the pin is set to only detect the change of voltage from low to high or high to low. This is like a quick wake up alarm to tell a waiting program to take some action.

![Triggering signal](/static/cp/learn/pins-tutorial/digital-input/triggering-signal.jpg)

## Pulse events

You can have your program wait for a pin input to be pulsed. A pulse is detected at a pin if the input level changes to high or low, stays that way for some amount of time, and then returns back to the input level where it was before. The amount of time that the pin is at this new logic level is called the _pulse width_. This is the period of time between when the new input level is detected and when it starts to change back again.


There are two events to detect a pulse:


```block
pins.A1.onEvent(PinEvent.PulseHigh, function () {
	
})
pins.A1.onEvent(PinEvent.PulseLow, function () {
	
})
```

### Pulse high

The ``||pins:on pin pulse high||`` event occurs when the pin input changes to the high level, stays there for some time, and then drops back to low. This diagram shows that the pin **A1** input went to the high level and stayed there for 2 microseconds. If there was a pin event for pulse high in your program, the code inside would've executed right after the 2 microseconds passed and the input level started to fall to low.

![Pin pulse high event diagram](/static/cp/learn/pins-tutorial/digital-input/pin-event-high.jpg)


Let's say that our @boardname@ is connected to an anemometer, a device to that measures wind speed. The anenometer signals one pulse every time that its cup wheel spins for one rotation. The diameter of the anemometer cup wheel is `10` centmeters. We can calculate the current revolutions per minute (RPM) of the anemometer by counting the number of rotations for some amount of time.

```blocks
let windSpeed = 0
let rotations = 0
pins.A1.setPull(PinPullMode.PullDown)
pins.A1.onEvent(PinEvent.PulseHigh, function () {
    rotations += 1
})
loops.forever(function () {
    pause(15000)
    windSpeed = (rotations * 4 * 60) * (2 * 3.14159 * 5) / 100000
    rotations = 0
})
```

If we check the number of rotations every `15` seconds, then the current average wind speed (km/h) is: ``windSpeed = (4 * rotations * 60) * (2 * PI * 5) / 100000``.

### Pulse low

The ``||pins:on pin pulse low||`` event works in the same way as ``||pins:on pin pulse high||`` except that the pulse is detected when the input voltage on the pin is near the low level. The diagram shows that the pin **A1** input went to the low level and stayed there for 2 microseconds. If there was a pin event for pulse low in your program, the code inside would’ve executed right after the 2 microseconds passed and the input level started to rise to high.

![Falling input pin event](/static/cp/learn/pins-tutorial/digital-input/pin-event-low.jpg)

The pulse low event can be used for a negative logic signal. For example, a pushbutton or keypad switch could ground a pin input (set the pin voltage to **GND**) to signal a key press. You could code a key press event like this:

```blocks
let keyPresses: string[] = []
let keyTime = 100000
pins.A1.setPull(PinPullMode.PullUp)
pins.A1.onEvent(PinEvent.PulseLow, function () {
    if (pins.pulseDuration() > keyTime) {
        keyPresses.push("A1")
    }
})
```

If we had a rule that the valid time for a key press was at least one-tenth of a second long, then we can add a check for the pulse duration to see if the pulse lasted for more than `100000` microseconds. This is the pulse width for the key press.

### Pulse width

To find out how long a pulse lasted, you can read the duration of the last pulse. You do this inside the event where the pulse type was detected using ``||pins:pulse duration||``.

```blocks
let pulseTime = 0
pins.A1.onEvent(PinEvent.PulseHigh, function () {
    pulseTime = pins.pulseDuration()
})
```

A pulse can also be used to encode a value. If a pin is expecting a pulse input to happen at a regular interval, the width of the pulse can change to be a fraction of the interval time. This fraction, or ratio, represents a percentage of the total interval time. If the an interval is 100 milliseconds, a pulse width of 40 milliseconds is 40% of the interval. If the pulse width changes, different ratios are input and can represent different values. This type of signalling is used for _pulse width modulation (pwm)_.

## Edge events

A pulse event has a duration which my last too long to properly signal a new level change if data inputs are happening rapidly. Instead of waiting for a full pulse to occur before the pin event happens, you can have an event for _edge detection_. An edge event happens when there is just a change the in input level. This type of signal was shown in the diagram for [Triggers](/learnsystem/pins-tutorial/digital-input/pin-events#triggers). If the pin input is changing from low to high, the input is _rising_. When the input level is going from high to low then the input is _falling_. The events for these are called edge events because they happen at the edge of the signal pattern when shown on a diagram.

Here are the events for edge detection:

```block
pins.A1.onEvent(PinEvent.Rise, function () {
	
})
pins.A1.onEvent(PinEvent.Fall, function () {
	
})
```

### Rising edge

If drawn in a diagram, the change in pin input from low to high creates an edge on the signal pattern that's like climbing a hill or going up a cliff side. This is the part of the diagram that shows the signal _rising_. If the input voltage goes from **GND** to  **3.3V**, the pin can be set to detect this change.

![Rising input pin event](/static/cp/learn/pins-tutorial/digital-input/pin-event-rise.jpg)

When a pin is receiving pulse inputs, an ``||pins:on pin rise||`` will trigger at the beginning of the pulse. This is useful for detecting the next period of a clock signal input. If you are using a pulse event, the pin event would only occur after each pulse duration. That was 2 microseconds in the [Clock signals](/learnsystem/pins-tutorial/digital-input/pin-events#clock-signals) example. If a ``rise`` event is used, the event will trigger only at the beginning of each clock cycle which is every 4 microseconds.

If we want to code an event to read digital numbers from a pin (as discussed in [Digital data signals](/learnsystem/pins-tutorial/digital-input/pin-events#data-signals)), we could put it in a ``||pins:on pin rise||`` event. We'll code the event for the clock signal on pin **A2** and the data signal is read from **A1**. The bits are accumulated until an 8 bit number is formed. Then, each 8 bit number is stored in a data array.

```blocks
let pinData: number[] = []
let digitalNum = 0
let bits = 0
pins.A2.onEvent(PinEvent.Rise, function () {
    if (bits > 7) {
        pinData.push(digitalNum)
        digitalNum = 0
        bits = 0
    }
    digitalNum = digitalNum * 2
    if (pins.A1.digitalRead()) {
        digitalNum += 1
    }
    bits += 1
})
```

### Falling edge

A pin can detect when an input signal is changing from a high to low voltage level (**3.3V** to **GND**). This is shown in a signal diagram as going down a hill or a cliff. This is called the _falling_ edge of the signal. When the pin input is a pulse, the falling edge is the when the pulse ends.

![Falling input pin event](/static/cp/learn/pins-tutorial/digital-input/pin-event-fall.jpg)

As an example, you could have a micro switch next to a doorway that breaks a closed circuit from pin **A1** to **3.3V** when the door is opened. The input from the switch changing could signal an entry alarm. If the door is opened, the switch causes the input at the pin to go to **GND**, or to fall.

```blocks
pins.A1.onEvent(PinEvent.Fall, function () {
    light.showAnimation(light.rainbowAnimation, 500)
    music.playSoundUntilDone(music.sounds(Sounds.Wawawawaa))
})
pins.A1.setPull(PinPullMode.PullDown)
```
