# tell microphone to

The tell microphone to function. #docs #antenna #ble

Access the audio recording capabilities of the device using the ``tell microphone to`` function.

The functions in the antenna namespace allow the BBC micro:bit to communicate with a separate (remote) device, such as a smartphone, over Bluetooth (Smart). The set of supported events will depend on the remote device and the BBC micro:bit apps available for the remote device.

### Block Editor

![](/static/mb/tell-microphone-to-0.png)

### KindScript

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
antenna.tellMicrophoneTo("start capture")
```

To tell the connected device to stop recording audio

```
antenna.tellMicrophoneTo("stop capture")
```

### Other show functions

* use [tell remote control to](/microbit/reference/devices/tell-remote-control-to) to control presentation of media content
* use [tell camera to](/microbit/reference/devices/tell-camera-to) to control the photo/video recording of connected devices
* use [raise alert to](/microbit/reference/devices/raise-alert-to) to control the microphone of connected devices

### See also

[Antenna](/microbit/js/antenna)

