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

