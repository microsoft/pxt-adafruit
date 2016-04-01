# Signal Strength

The `signal strength` function.

Returns the signal strength reported by the paired device from ``0`` (no signal) to ``4`` (full strength).

## Bluetooth required

The functions in the ``devices`` namespace allow the BBC micro:bit to communicate with a separate (remote) device, such as a smartphone, over Bluetooth (Smart).

The set of supported events will depend on the remote device and the BBC micro:bit apps available for the remote device.

### Block Editor

![](/static/mb/signal-strength-0.png)

### KindScript

```
export function signalStrength() : number
```

### Returns

* the signal strength from ``0`` (no signal) to ``4`` (full strength).

### Examples

Display the signal strength on screen:

```
devices.onSignalStrengthChanged(() => {
    basic.showNumber(devices.signalStrength(), 150)
})
```

### See Also

[tell remote control to](/microbit/reference/devices/tell-remote-control-to), [raise alert to](/microbit/reference/devices/raise-alert-to), [on notified](/microbit/reference/devices/on-notified), [on signal strength changed](/microbit/reference/devices/on-signal-strength-changed)

