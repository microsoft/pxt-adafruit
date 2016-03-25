# Antenna Library

The events library #docs

The functions in the ``antenna`` namespace allow the BBC micro:bit to communicate with a separate (remote) device, such as a smartphone, over Bluetooth (Smart).  The set of supported events will depend on the remote device and the BBC micro:bit apps available for the remote device.

### Remote control

Control the presentation of  media content available on a remote device using the `tell remote control to` function

```
export function tellRemoteControlTo(event: string)
```

The remote control specific events include:

* play
* pause
* stop
* next track
* previous track
* forward
* rewind
* volume up
* volume down

### Camera

Access the photo/video-taking functionality of a remote device using the *camera* function:

```
export function tellCameraTo(event: string)
```

The camera-specific events include:

* toggle front-rear
* launch photo mode
* take photo
* stop photo mode
* launch video mode
* start video capture
* stop video capture
* stop video mode

### Alert

Raise an alert on a remote device using the `raise alert to` function

```
export function raiseAlertTo(event: string)
```

The set of alerting-specific events include:

* display toast
* vibrate
* play sound
* play ringtone
* find my phone
* alarm 1
* alarm 2
* alarm 3
* alarm 4
* alarm 5
* alarm 6

### Microphone

Access the audio recording capabilities of the device using the `tell microphone to` function

```
export function tellMicrophoneTo(event: string)
```

The set of audio recorder events include:

* launch
* start capture
* end capture
* stop
