# raise alert to

The raise alert to function. #docs #antenna #ble

Raise an alert on a remote device.

## 

The functions in the ``devices`` namespace allow the BBC micro:bit to communicate with a separate (remote) device, such as a smartphone, over Bluetooth (Smart).

The set of supported events will depend on the remote device and the BBC micro:bit apps available for the remote device.

### KindScript

![](/static/mb/raise-alert-to-0.png)

### KindScript

```
export function raiseAlertTo(event: string)
```

### Parameters

* event - an event identifier

### Examples

To tell the connected device to display toast

```
devices.raiseAlertTo("display toast")
```

To tell the connected device to vibrate

```
devices.raiseAlertTo("vibrate")
```

To tell the connected device to play a sound

```
devices.raiseAlertTo("play sound")
```

To tell the connected device to play a ringtone

```
devices.raiseAlertTo("play ringtone")
```

To tell the connected device to find my phone

```
devices.raiseAlertTo("find my phone")
```

To tell the connected device to ring alarm

```
devices.raiseAlertTo("ring alarm")
```

### See also

[tell remote control to](/microbit/reference/devices/tell-remote-control-to), [tell camera to](/microbit/reference/devices/tell-camera-to), [on notified](/microbit/reference/devices/on-notified)

