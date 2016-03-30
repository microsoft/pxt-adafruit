enum EventCreationMode {
    /**
     * MicroBitEvent is initialised, and no further processing takes place.
     */
    //% enumVal=CREATE_ONLY
    CreateOnly,
    /**
     * MicroBitEvent is initialised, and queued on the MicroBitMessageBus.
     */
    //% enumVal=CREATE_AND_QUEUE    
    CreateAndQueue,
    /**
     * MicroBitEvent is initialised, and its event handlers are immediately fired (not suitable for use in interrupts!).
     */
    //% enumVal=CREATE_AND_FIRE
    CreateAndFire
}

enum EventBusSource {
    //% enumVal=MICROBIT_ID_BUTTON_A
    MICROBIT_ID_BUTTON_A,
    //% enumVal=MICROBIT_ID_BUTTON_B
    MICROBIT_ID_BUTTON_B,
    //% enumVal=MICROBIT_ID_BUTTON_AB
    MICROBIT_ID_BUTTON_AB,
    //% enumVal=MICROBIT_ID_RADIO
    MICROBIT_ID_RADIO,
    //% enumVal=MICROBIT_ID_GESTURE
    MICROBIT_ID_GESTURE,
    //% enumVal=MICROBIT_ID_ACCELEROMETER
    MICROBIT_ID_ACCELEROMETER,    
    //% enumVal=MICROBIT_ID_IO_P0
    MICROBIT_ID_IO_P0,
    //% enumVal=MICROBIT_ID_IO_P1
    MICROBIT_ID_IO_P1,
    //% enumVal=MICROBIT_ID_IO_P2
    MICROBIT_ID_IO_P2,
    //% enumVal=MICROBIT_ID_IO_P3
    MICROBIT_ID_IO_P3,
    //% enumVal=MICROBIT_ID_IO_P4
    MICROBIT_ID_IO_P4,
    //% enumVal=MICROBIT_ID_IO_P5
    MICROBIT_ID_IO_P5,
    //% enumVal=MICROBIT_ID_IO_P6
    MICROBIT_ID_IO_P6,
    //% enumVal=MICROBIT_ID_IO_P7
    MICROBIT_ID_IO_P7,
    //% enumVal=MICROBIT_ID_IO_P8
    MICROBIT_ID_IO_P8,
    //% enumVal=MICROBIT_ID_IO_P9
    MICROBIT_ID_IO_P9,
    //% enumVal=MICROBIT_ID_IO_P10
    MICROBIT_ID_IO_P10,
    //% enumVal=MICROBIT_ID_IO_P11
    MICROBIT_ID_IO_P11,
    //% enumVal=MICROBIT_ID_IO_P12
    MICROBIT_ID_IO_P12,
    //% enumVal=MICROBIT_ID_IO_P13
    MICROBIT_ID_IO_P13,
    //% enumVal=MICROBIT_ID_IO_P14
    MICROBIT_ID_IO_P14,
    //% enumVal=MICROBIT_ID_IO_P15
    MICROBIT_ID_IO_P15,
    //% enumVal=MICROBIT_ID_IO_P16
    MICROBIT_ID_IO_P16,
    //% enumVal=MICROBIT_ID_IO_P19
    MICROBIT_ID_IO_P19,
    //% enumVal=MICROBIT_ID_IO_P20
    MICROBIT_ID_IO_P20,
    //% enumVal=MES_DEVICE_INFO_ID
    MES_DEVICE_INFO_ID,
    //% enumVal=MES_SIGNAL_STRENGTH_ID
    MES_SIGNAL_STRENGTH_ID,
    //% enumVal=MES_DPAD_CONTROLLER_ID
    MES_DPAD_CONTROLLER_ID,
    //% enumVal=MES_BROADCAST_GENERAL_ID
    MES_BROADCAST_GENERAL_ID,
}

enum EventBusValue {
    //% enumVal=MICROBIT_EVT_ANY
    MICROBIT_EVT_ANY,
    //% enumVal=MICROBIT_BUTTON_EVT_CLICK
    MICROBIT_BUTTON_EVT_CLICK,
    //% enumVal=MICROBIT_RADIO_EVT_DATAGRAM
    MICROBIT_RADIO_EVT_DATAGRAM,
    //% enumVal=MICROBIT_ACCELEROMETER_EVT_DATA_UPDATE
    MICROBIT_ACCELEROMETER_EVT_DATA_UPDATE,
    //% enumVal=MES_ALERT_EVT_ALARM1
    MES_ALERT_EVT_ALARM1,
    //% enumVal=MES_ALERT_EVT_ALARM2
    MES_ALERT_EVT_ALARM2,
    //% enumVal=MES_ALERT_EVT_ALARM3
    MES_ALERT_EVT_ALARM3,
    //% enumVal=MES_ALERT_EVT_ALARM4
    MES_ALERT_EVT_ALARM4,
    //% enumVal=MES_ALERT_EVT_ALARM5
    MES_ALERT_EVT_ALARM5,
    //% enumVal=MES_ALERT_EVT_ALARM6
    MES_ALERT_EVT_ALARM6,
    //% enumVal=MES_ALERT_EVT_DISPLAY_TOAST
    MES_ALERT_EVT_DISPLAY_TOAST,
    //% enumVal=MES_ALERT_EVT_FIND_MY_PHONE
    MES_ALERT_EVT_FIND_MY_PHONE,
    //% enumVal=MES_ALERT_EVT_PLAY_RINGTONE
    MES_ALERT_EVT_PLAY_RINGTONE,
    //% enumVal=MES_ALERT_EVT_PLAY_SOUND
    MES_ALERT_EVT_PLAY_SOUND,
    //% enumVal=MES_ALERT_EVT_VIBRATE
    MES_ALERT_EVT_VIBRATE,
    //% enumVal=MES_CAMERA_EVT_LAUNCH_PHOTO_MODE
    MES_CAMERA_EVT_LAUNCH_PHOTO_MODE,
    //% enumVal=MES_CAMERA_EVT_LAUNCH_VIDEO_MODE
    MES_CAMERA_EVT_LAUNCH_VIDEO_MODE,
    //% enumVal=MES_CAMERA_EVT_START_VIDEO_CAPTURE
    MES_CAMERA_EVT_START_VIDEO_CAPTURE,
    //% enumVal=MES_CAMERA_EVT_STOP_PHOTO_MODE
    MES_CAMERA_EVT_STOP_PHOTO_MODE,
    //% enumVal=MES_CAMERA_EVT_STOP_VIDEO_CAPTURE
    MES_CAMERA_EVT_STOP_VIDEO_CAPTURE,
    //% enumVal=MES_CAMERA_EVT_STOP_VIDEO_MODE
    MES_CAMERA_EVT_STOP_VIDEO_MODE,
    //% enumVal=MES_CAMERA_EVT_TAKE_PHOTO
    MES_CAMERA_EVT_TAKE_PHOTO,
    //% enumVal=MES_CAMERA_EVT_TOGGLE_FRONT_REAR
    MES_CAMERA_EVT_TOGGLE_FRONT_REAR,
    //% enumVal=MES_DEVICE_DISPLAY_OFF
    MES_DEVICE_DISPLAY_OFF,
    //% enumVal=MES_DEVICE_DISPLAY_ON
    MES_DEVICE_DISPLAY_ON,
    //% enumVal=MES_DEVICE_GESTURE_DEVICE_SHAKEN
    MES_DEVICE_GESTURE_DEVICE_SHAKEN,
    //% enumVal=MES_DEVICE_INCOMING_CALL
    MES_DEVICE_INCOMING_CALL,
    //% enumVal=MES_DEVICE_INCOMING_MESSAGE
    MES_DEVICE_INCOMING_MESSAGE,
    //% enumVal=MES_DEVICE_ORIENTATION_LANDSCAPE
    MES_DEVICE_ORIENTATION_LANDSCAPE,
    //% enumVal=MES_DEVICE_ORIENTATION_PORTRAIT
    MES_DEVICE_ORIENTATION_PORTRAIT,
    //% enumVal=MES_DPAD_BUTTON_1_DOWN
    MES_DPAD_BUTTON_1_DOWN,
    //% enumVal=MES_DPAD_BUTTON_1_UP
    MES_DPAD_BUTTON_1_UP,
    //% enumVal=MES_DPAD_BUTTON_2_DOWN
    MES_DPAD_BUTTON_2_DOWN,
    //% enumVal=MES_DPAD_BUTTON_2_UP
    MES_DPAD_BUTTON_2_UP,
    //% enumVal=MES_DPAD_BUTTON_3_DOWN
    MES_DPAD_BUTTON_3_DOWN,
    //% enumVal=MES_DPAD_BUTTON_3_UP
    MES_DPAD_BUTTON_3_UP,
    //% enumVal=MES_DPAD_BUTTON_4_DOWN
    MES_DPAD_BUTTON_4_DOWN,
    //% enumVal=MES_DPAD_BUTTON_4_UP
    MES_DPAD_BUTTON_4_UP,
    //% enumVal=MES_DPAD_BUTTON_A_DOWN
    MES_DPAD_BUTTON_A_DOWN,
    //% enumVal=MES_DPAD_BUTTON_A_UP
    MES_DPAD_BUTTON_A_UP,
    //% enumVal=MES_DPAD_BUTTON_B_DOWN
    MES_DPAD_BUTTON_B_DOWN,
    //% enumVal=MES_DPAD_BUTTON_B_UP
    MES_DPAD_BUTTON_B_UP,
    //% enumVal=MES_DPAD_BUTTON_C_DOWN
    MES_DPAD_BUTTON_C_DOWN,
    //% enumVal=MES_DPAD_BUTTON_C_UP
    MES_DPAD_BUTTON_C_UP,
    //% enumVal=MES_DPAD_BUTTON_D_DOWN
    MES_DPAD_BUTTON_D_DOWN,
    //% enumVal=MES_DPAD_BUTTON_D_UP
    MES_DPAD_BUTTON_D_UP,
    //% enumVal=MES_REMOTE_CONTROL_EVT_FORWARD
    MES_REMOTE_CONTROL_EVT_FORWARD,
    //% enumVal=MES_REMOTE_CONTROL_EVT_NEXTTRACK
    MES_REMOTE_CONTROL_EVT_NEXTTRACK,
    //% enumVal=MES_REMOTE_CONTROL_EVT_PAUSE
    MES_REMOTE_CONTROL_EVT_PAUSE,
    //% enumVal=MES_REMOTE_CONTROL_EVT_PLAY
    MES_REMOTE_CONTROL_EVT_PLAY,
    //% enumVal=MES_REMOTE_CONTROL_EVT_PREVTRACK
    MES_REMOTE_CONTROL_EVT_PREVTRACK,
    //% enumVal=MES_REMOTE_CONTROL_EVT_REWIND
    MES_REMOTE_CONTROL_EVT_REWIND,
    //% enumVal=MES_REMOTE_CONTROL_EVT_STOP
    MES_REMOTE_CONTROL_EVT_STOP,
    //% enumVal=MES_REMOTE_CONTROL_EVT_VOLUMEDOWN
    MES_REMOTE_CONTROL_EVT_VOLUMEDOWN,
    //% enumVal=MES_REMOTE_CONTROL_EVT_VOLUMEUP
    MES_REMOTE_CONTROL_EVT_VOLUMEUP,
}

//% weight=1 color="#333333"
namespace control {

    /**
     * Returns the value of a C++ runtime constant
     */
    //% weight=19 weight=19 blockId="control_event_source" block="%id"
    export function eventSource(id: EventBusSource) : number {
        return id;
    }
    /**
     * Returns the value of a C++ runtime constant
     */
    //% weight=19 weight=19 blockId="control_event_value" block="%id"
    export function eventValue(id: EventBusValue) : number {
        return id;
    }

    /**
     * Raises an event in the event bus.
     * @param src ID of the MicroBit Component that generated the event e.g. MICROBIT_ID_BUTTON_A.
     * @param value Component specific code indicating the cause of the event.
     * @param mode optional definition of how the event should be processed after construction (default is CREATE_AND_QUEUE).
     */
    // shim=micro_bit::busRaiseEvent
    //% weight=21 blockGap=12 blockId="control_raise_event" block="raise event|from source %src=control_event_source|with value %value=control_event_value" blockExternalInputs=1
    export function raiseEvent(src: number, value: number, mode: EventCreationMode = EventCreationMode.CreateAndQueue): void { }

    /**
     * Raises an event in the event bus.
     */
    // shim=micro_bit::onBusEvent
    //% weight=20 blockGap=8 blockId="control_on_event" block="on event|from %src=control_event_source|with value %value=control_event_value" 
    //% blockExternalInputs=1 blockStatement=1
    export function onEvent(src: number, value: number, handler: Action): void { }
}
