# tell remote control to

The tell remote control to function.

Control the presentation of media content available on a remote device using the `tell remote control` to function.

## 

The functions in the ``devices`` namespace allow the BBC micro:bit to communicate with a separate (remote) device, such as a smartphone, over Bluetooth (Smart).

The set of supported events will depend on the remote device and the BBC micro:bit apps available for the remote device.

### Block Editor

![](/static/mb/tell-remote-control-to-0.png)

### JavaScript

```
export function tellRemoteControlTo(event: string)
```

### Parameters

* event - an event identifier

### Event values

* play
* stop
* pause
* forward
* rewind
* volume up
* volume down
* previous track
* next track

### Examples

To tell the connected device to start playing:

```
devices.tellRemoteControlTo("play")
```

To tell the connected device to stop playing

```
devices.tellRemoteControlTo("stop")
```

To tell the connected device to go to next track

```
devices.tellRemoteControlTo("next track")
```

To tell the connected device to go to previous track

```
devices.tellRemoteControlTo("previous track")
```

To tell the connected device to go forward

```
devices.tellRemoteControlTo("forward")
```

To tell the connected device to rewind

```
devices.tellRemoteControlTo("rewind")
```

To tell the connected device volume up

```
devices.tellRemoteControlTo("volume up")
```

To tell the connected device volume down

```
devices.tellRemoteControlTo("volume down")
```

### See also

[tell camera to](/reference/devices/tell-camera-to), [raise alert to](/reference/devices/raise-alert-to)

