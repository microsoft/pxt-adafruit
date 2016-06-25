# Devices

Control a phone with the BBC micro:bit via Bluetooth.

```cards
devices.tellCameraTo(MesCameraEvent.TakePhoto);
devices.tellRemoteControlTo(MesRemoteControlEvent.play);
devices.raiseAlertTo(MesAlertEvent.DisplayToast);
devices.onNotified(MesDeviceInfo.IncomingCall, () => {
    
});
devices.onGamepadButton(MesDpadButtonInfo.ADown, () => {
    
});
devices.signalStrength();
devices.onSignalStrengthChanged(() => {
    
});
```
