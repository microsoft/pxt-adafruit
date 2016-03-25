# On Gamepad Button

Register code to run when the micro:bit receives a command from the paired gamepad.

## Bluetooth required

The functions in the ``devices`` namespace allow the BBC micro:bit to communicate with a separate (remote) device, such as a smartphone, over Bluetooth (Smart).

The set of supported events will depend on the remote device and the BBC micro:bit apps available for the remote device.

### Block Editor

![](/static/mb/on-gamepad-button-0.png)

### KindScript

```
export function onGamepadButton(name: string, body:td.Action)
```

### Parameters

* ``body``: Action code to run when the the micro:bit receives a command from the paired gamepad.

### See Also

[tell remote control to](/microbit/reference/devices/tell-remote-control-to), [raise alert to](/microbit/reference/devices/raise-alert-to), [on notified](/microbit/reference/devices/on-notified), [signal strength](/microbit/reference/devices/signal-strength), [on signal strength changed](/microbit/reference/devices/on-signal-strength-changed)

