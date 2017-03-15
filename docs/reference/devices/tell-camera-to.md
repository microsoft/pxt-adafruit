# tell camera to

Access the photo/video-taking functionality of a remote device using the ``tell camera to`` function.

### ~hint

The functions in the ``devices`` namespace allow the @boardname@ to communicate with a separate (remote) device, 
such as a smartphone, over Bluetooth (Smart).
The set of supported events will depend on the remote device and the @boardname@ apps available for the remote device.

### ~

```sig
devices.tellCameraTo(MesCameraEvent.TakePhoto)
```

### Parameters

* event - an event identifier

### Examples

To tell the connected device to take a picture:

```blocks
devices.tellCameraTo(MesCameraEvent.StartVideoCapture)
```

To tell the connected device to start recording a video

```blocks
devices.tellCameraTo(MesCameraEvent.StopVideoCapture)
```

To tell the connected device to stop recording a video

```blocks
devices.tellCameraTo(MesCameraEvent.ToggleFrontRear)
```

To tell the connected device to toggle front-rear

```blocks
devices.tellCameraTo(MesCameraEvent.LaunchPhotoMode)
```

To tell the connected device to launch photo mode

```blocks
devices.tellCameraTo(MesCameraEvent.LaunchPhotoMode)
```

To tell the connected device to launch video mode

```blocks
devices.tellCameraTo(MesCameraEvent.LaunchVideoMode)
```

To tell the connected device to stop photo mode

```blocks
devices.tellCameraTo(MesCameraEvent.StopPhotoMode)
```

To tell the connected device to stop video mode

```blocks
devices.tellCameraTo(MesCameraEvent.StopVideoMode)
```

### See Also

[tell remote control to](/reference/devices/tell-remote-control-to), [raise alert to](/reference/devices/raise-alert-to)

```package
devices
```
