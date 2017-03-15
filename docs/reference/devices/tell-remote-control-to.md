# tell remote control to

Control the presentation of media content available on a remote device using the `tell remote control` to function.

### ~hint

The functions in the ``devices`` namespace allow the @boardname@ to communicate with a separate (remote) device, 
such as a smartphone, over Bluetooth (Smart).
The set of supported events will depend on the remote device and the @boardname@ apps available for the remote device.

### ~

```sig
devices.tellRemoteControlTo(MesRemoteControlEvent.play)
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

```blocks
devices.tellRemoteControlTo(MesRemoteControlEvent.play)
```

To tell the connected device to stop playing

```blocks
devices.tellRemoteControlTo(MesRemoteControlEvent.stop)
```

To tell the connected device to go to next track

```blocks
devices.tellRemoteControlTo(MesRemoteControlEvent.nextTrack)
```

To tell the connected device to go to previous track

```blocks
devices.tellRemoteControlTo(MesRemoteControlEvent.previousTrack)
```

To tell the connected device to go forward

```blocks
devices.tellRemoteControlTo(MesRemoteControlEvent.forward)
```

To tell the connected device to rewind

```blocks
devices.tellRemoteControlTo(MesRemoteControlEvent.rewind)
```

To tell the connected device volume up

```blocks
devices.tellRemoteControlTo(MesRemoteControlEvent.volumeUp)
```

To tell the connected device volume down

```blocks
devices.tellRemoteControlTo(MesRemoteControlEvent.volumeDown)
```

### See also

[tell camera to](/reference/devices/tell-camera-to), [raise alert to](/reference/devices/raise-alert-to)


```package
devices
```
