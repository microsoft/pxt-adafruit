# tell microphone to

The tell microphone to function.

Access the audio recording capabilities of the device using the ``tell microphone to`` function.

The functions in the antenna namespace allow the BBC micro:bit to communicate with a separate (remote) device, such as a smartphone, over Bluetooth (Smart). The set of supported events will depend on the remote device and the BBC micro:bit apps available for the remote device.

### Block Editor

![](/static/mb/tell-microphone-to-0.png)

### JavaScript

```
export function tellMicrophoneTo(event: string)
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

To tell the connected device to start recording audio

```
devices.tellMicrophoneTo("start capture")
```

To tell the connected device to stop recording audio

```
devices.tellMicrophoneTo("stop capture")
```
