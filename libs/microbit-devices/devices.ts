enum MesCameraEvent {
    //% block="take photo"
    TakePhoto = DAL.MES_CAMERA_EVT_TAKE_PHOTO as number,
    //% block="start video capture"
    StartVideoCapture = DAL.MES_CAMERA_EVT_START_VIDEO_CAPTURE as number,
    //% block="stop video capture"
    StopVideoCapture = DAL.MES_CAMERA_EVT_STOP_VIDEO_CAPTURE as number,
    //% block="toggle front-rear"
    ToggleFrontRear = DAL.MES_CAMERA_EVT_TOGGLE_FRONT_REAR as number,
    //% block="launch photo mode"
    LaunchPhotoMode = DAL.MES_CAMERA_EVT_LAUNCH_PHOTO_MODE as number,
    //% block="launch video mode"
    LaunchVideoMode = DAL.MES_CAMERA_EVT_LAUNCH_VIDEO_MODE as number,
    //% block="stop photo mode"
    StopPhotoMode = DAL.MES_CAMERA_EVT_STOP_PHOTO_MODE as number,
    //% block="stop video mode"
    StopVideoMode = DAL.MES_CAMERA_EVT_STOP_VIDEO_MODE as number,
}

enum MesAlertEvent {
    //% block="display toast"
    DisplayToast = DAL.MES_ALERT_EVT_DISPLAY_TOAST as number,
    //% block="vibrate"
    Vibrate = DAL.MES_ALERT_EVT_VIBRATE as number,
    //% block="play sound"
    PlaySound = DAL.MES_ALERT_EVT_PLAY_SOUND as number,
    //% block="play ring tone"
    PlayRingtone = DAL.MES_ALERT_EVT_PLAY_RINGTONE as number,
    //% block="find my phone"
    FindMyPhone = DAL.MES_ALERT_EVT_FIND_MY_PHONE as number,
    //% block="ring alarm"
    RingAlarm = DAL.MES_ALERT_EVT_ALARM1 as number,
    //% block="ring alarm 2"
    RingAlarm2 = DAL.MES_ALERT_EVT_ALARM2 as number,
    //% block="ring alarm 3"
    RingAlarm3 = DAL.MES_ALERT_EVT_ALARM3 as number,
    //% block="ring alarm 4"
    RingAlarm4 = DAL.MES_ALERT_EVT_ALARM4 as number,
    //% block="ring alarm 5"
    RingAlarm5 = DAL.MES_ALERT_EVT_ALARM5 as number,
    //% block="ring alarm 6"
    RingAlarm6 = DAL.MES_ALERT_EVT_ALARM6 as number,
}

enum MesDeviceInfo {
    //% block="incoming call"
    IncomingCall = DAL.MES_DEVICE_INCOMING_CALL as number,
    //% block="incoming message"
    IncomingMessage = DAL.MES_DEVICE_INCOMING_MESSAGE as number,
    //% block="orientation landscape"
    OrientationLandscape = DAL.MES_DEVICE_ORIENTATION_LANDSCAPE as number,
    //% block="orientation portrait"
    OrientationPortrait = DAL.MES_DEVICE_ORIENTATION_PORTRAIT as number,
    //% block="shaken"
    Shaken = DAL.MES_DEVICE_GESTURE_DEVICE_SHAKEN as number,
    //% block="display off"
    DisplayOff = DAL.MES_DEVICE_DISPLAY_OFF as number,
    //% block="display on"
    DisplayOn = DAL.MES_DEVICE_DISPLAY_ON as number,
}

enum MesRemoteControlEvent {
    //% block="play"
    play = DAL.MES_REMOTE_CONTROL_EVT_PLAY as number,
    //% block="pause"
    pause = DAL.MES_REMOTE_CONTROL_EVT_PAUSE as number,
    //% block="stop"
    stop = DAL.MES_REMOTE_CONTROL_EVT_STOP as number,
    //% block="next track"
    nextTrack = DAL.MES_REMOTE_CONTROL_EVT_NEXTTRACK as number,
    //% block="previous track"
    previousTrack = DAL.MES_REMOTE_CONTROL_EVT_PREVTRACK as number,
    //% block="forward"
    forward = DAL.MES_REMOTE_CONTROL_EVT_FORWARD as number,
    //% block="rewind"
    rewind = DAL.MES_REMOTE_CONTROL_EVT_REWIND as number,
    //% block="volume up"
    volumeUp = DAL.MES_REMOTE_CONTROL_EVT_VOLUMEUP as number,
    //% block="volume down"
    volumeDown = DAL.MES_REMOTE_CONTROL_EVT_VOLUMEDOWN as number,
}

enum MesDpadButtonInfo {
    //% block="A down"
    ADown = DAL.MES_DPAD_BUTTON_A_DOWN as number,
    //% block="A up"
    AUp = DAL.MES_DPAD_BUTTON_A_UP as number,
    //% block="B down"
    BDown = DAL.MES_DPAD_BUTTON_B_DOWN as number,
    //% block="B up"
    BUp = DAL.MES_DPAD_BUTTON_B_UP as number,
    //% block="C down"
    CDown = DAL.MES_DPAD_BUTTON_C_DOWN as number,
    //% block="C up"
    CUp = DAL.MES_DPAD_BUTTON_C_UP as number,
    //% block="D down"
    DDown = DAL.MES_DPAD_BUTTON_D_DOWN as number,
    //% block="D up"
    DUp = DAL.MES_DPAD_BUTTON_D_UP as number,
    //% block="1 down"
    _1Down = DAL.MES_DPAD_BUTTON_1_UP as number,
    //% block="1 up"
    _1Up = DAL.MES_DPAD_BUTTON_1_DOWN as number,
    //% block="2 down"
    _2Down = DAL.MES_DPAD_BUTTON_2_DOWN as number,
    //% block="2 up"
    _2Up = DAL.MES_DPAD_BUTTON_2_UP as number,
    //% block="3 down"
    _3Down = DAL.MES_DPAD_BUTTON_3_DOWN as number,
    //% block="3 up"
    _3Up = DAL.MES_DPAD_BUTTON_3_UP as number,
    //% block="4 down"
    _4Down = DAL.MES_DPAD_BUTTON_4_DOWN as number,
    //% block="4 up"
    _4Up = DAL.MES_DPAD_BUTTON_4_UP as number,
}

//% color=156 weight=80
namespace devices {
    /**
     * Sends a ``camera`` command to the parent device.
     * @param event TODO
     */
    //% weight=30 help=devices/tell-camera-to shim=micro_bit::devices::camera
    //% blockId=devices_camera icon="\uf030" block="tell camera to|%property" blockGap=8
    export function tellCameraTo(event: MesCameraEvent): void { }

    /**
     * Sends a ``remote control`` command to the parent device.
     * @param event TODO
     */
    //% weight=29 help=devices/tell-remote-control-to shim=micro_bit::devices::remote_control
    //% blockId=devices_remote_control block="tell remote control to|%property" blockGap=14 icon="\uf144"
    export function tellRemoteControlTo(event: MesRemoteControlEvent): void { }

    /**
     * Sends an ``alert`` command to the parent device.
     * @param event TODO
     */
    //% weight=27 help=devices/raise-alert-to shim=micro_bit::devices::alert
    //% blockId=devices_alert block="raise alert to|%property" icon="\uf0f3"
    export function raiseAlertTo(event: MesAlertEvent): void { }

    /**
     * Registers code to run when the device notifies about a particular event.
     * @param event TODO
     * @param body TODO
     */
    //% shim=micro_bit::onDeviceInfo help=devices/on-notified
    //% weight=26
    //% blockId=devices_device_info_event block="on notified" icon="\uf10a"
    export function onNotified(event: MesDeviceInfo, body: Action): void { }

    /**
     * Register code to run when the micro:bit receives a command from the paired gamepad.
     * @param name TODO
     * @param body TODO
     */
    //% help=devices/on-gamepad-button weight=40 shim=micro_bit::onGamepadButton
    //% weight=25
    //% blockId=devices_gamepad_event block="on gamepad button|%NAME" icon="\uf11b"
    export function onGamepadButton(name: MesDpadButtonInfo, body: Action): void { }

    /**
     * Returns the last signal strength reported by the paired device.
     */
    //% help=devices/signal-strength weight=24 shim=micro_bit::signalStrength
    //% blockId=devices_signal_strength block="signal strength" blockGap=14 icon="\uf012" blockGap=14
    export function signalStrength(): number {
        return 0;
    }

    /**
     * Registers code to run when the device notifies about a change of signal strength.
     * @param body TODO
     */
    //% shim=micro_bit::onSignalStrengthChanged weight=23 help=devices/on-signal-strength-changed
    //% blockId=devices_signal_strength_changed_event block="on signal strength changed" icon="\uf012"
    export function onSignalStrengthChanged(body: Action): void { }
}

