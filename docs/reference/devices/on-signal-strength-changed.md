# On Signal Strength Changed

The `on signal strength changed` function.

Register code to run when the signal strength of the paired device changes.

## Bluetooth required

The functions in the ``devices`` namespace allow the BBC micro:bit to communicate with a separate (remote) device, such as a smartphone, over Bluetooth (Smart).

The set of supported events will depend on the remote device and the BBC micro:bit apps available for the remote device.

### Block Editor

![](/static/mb/on-signal-strength-changed-0.png)

### KindScript

```
export function onSignalStrengthChanged(body:td.Action)
```

### Parameters

* ``body``: code to run when the signal strength changes.

### Examples

Display the signal strength on screen:

```
devices.onSignalStrengthChanged(() => {
    basic.showNumber(devices.signalStrength(), 150)
})
```

### See Also

[tell remote control to](/microbit/reference/devices/tell-remote-control-to), [raise alert to](/microbit/reference/devices/raise-alert-to), [on notified](/microbit/reference/devices/on-notified), [signal strength](/microbit/reference/devices/signal-strength)

