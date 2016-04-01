enum EventCreationMode {
    /**
     * MicroBitEvent is initialised, and no further processing takes place.
     */
    CreateOnly = DAL.CREATE_ONLY as number,
    /**
     * MicroBitEvent is initialised, and queued on the MicroBitMessageBus.
     */
    CreateAndQueue = DAL.CREATE_AND_QUEUE as number,
    /**
     * MicroBitEvent is initialised, and its event handlers are immediately fired (not suitable for use in interrupts!).
     */
    CreateAndFire = DAL.CREATE_AND_FIRE as number,
}

enum EventBusSource {
    MICROBIT_ID_BUTTON_A = DAL.MICROBIT_ID_BUTTON_A as number,
    MICROBIT_ID_BUTTON_B = DAL.MICROBIT_ID_BUTTON_B as number,
    MICROBIT_ID_BUTTON_AB = DAL.MICROBIT_ID_BUTTON_AB as number,
    MICROBIT_ID_RADIO = DAL.MICROBIT_ID_RADIO as number,
    MICROBIT_ID_GESTURE = DAL.MICROBIT_ID_GESTURE as number,
    MICROBIT_ID_ACCELEROMETER = DAL.MICROBIT_ID_ACCELEROMETER as number,
    MICROBIT_ID_IO_P0 = DAL.MICROBIT_ID_IO_P0 as number,
    MICROBIT_ID_IO_P1 = DAL.MICROBIT_ID_IO_P1 as number,
    MICROBIT_ID_IO_P2 = DAL.MICROBIT_ID_IO_P2 as number,
    MICROBIT_ID_IO_P3 = DAL.MICROBIT_ID_IO_P3 as number,
    MICROBIT_ID_IO_P4 = DAL.MICROBIT_ID_IO_P4 as number,
    MICROBIT_ID_IO_P5 = DAL.MICROBIT_ID_IO_P5 as number,
    MICROBIT_ID_IO_P6 = DAL.MICROBIT_ID_IO_P6 as number,
    MICROBIT_ID_IO_P7 = DAL.MICROBIT_ID_IO_P7 as number,
    MICROBIT_ID_IO_P8 = DAL.MICROBIT_ID_IO_P8 as number,
    MICROBIT_ID_IO_P9 = DAL.MICROBIT_ID_IO_P9 as number,
    MICROBIT_ID_IO_P10 = DAL.MICROBIT_ID_IO_P10 as number,
    MICROBIT_ID_IO_P11 = DAL.MICROBIT_ID_IO_P11 as number,
    MICROBIT_ID_IO_P12 = DAL.MICROBIT_ID_IO_P12 as number,
    MICROBIT_ID_IO_P13 = DAL.MICROBIT_ID_IO_P13 as number,
    MICROBIT_ID_IO_P14 = DAL.MICROBIT_ID_IO_P14 as number,
    MICROBIT_ID_IO_P15 = DAL.MICROBIT_ID_IO_P15 as number,
    MICROBIT_ID_IO_P16 = DAL.MICROBIT_ID_IO_P16 as number,
    MICROBIT_ID_IO_P19 = DAL.MICROBIT_ID_IO_P19 as number,
    MICROBIT_ID_IO_P20 = DAL.MICROBIT_ID_IO_P20 as number,
    MES_DEVICE_INFO_ID = DAL.MES_DEVICE_INFO_ID as number,
    MES_SIGNAL_STRENGTH_ID = DAL.MES_SIGNAL_STRENGTH_ID as number,
    MES_DPAD_CONTROLLER_ID = DAL.MES_DPAD_CONTROLLER_ID as number,
    MES_BROADCAST_GENERAL_ID = DAL.MES_BROADCAST_GENERAL_ID as number,
}

enum EventBusValue {
    MICROBIT_EVT_ANY = DAL.MICROBIT_EVT_ANY as number,
    MICROBIT_BUTTON_EVT_CLICK = DAL.MICROBIT_BUTTON_EVT_CLICK as number,
    MICROBIT_RADIO_EVT_DATAGRAM = DAL.MICROBIT_RADIO_EVT_DATAGRAM as number,
    MICROBIT_ACCELEROMETER_EVT_DATA_UPDATE = DAL.MICROBIT_ACCELEROMETER_EVT_DATA_UPDATE as number,
    MES_ALERT_EVT_ALARM1 = DAL.MES_ALERT_EVT_ALARM1 as number,
    MES_ALERT_EVT_ALARM2 = DAL.MES_ALERT_EVT_ALARM2 as number,
    MES_ALERT_EVT_ALARM3 = DAL.MES_ALERT_EVT_ALARM3 as number,
    MES_ALERT_EVT_ALARM4 = DAL.MES_ALERT_EVT_ALARM4 as number,
    MES_ALERT_EVT_ALARM5 = DAL.MES_ALERT_EVT_ALARM5 as number,
    MES_ALERT_EVT_ALARM6 = DAL.MES_ALERT_EVT_ALARM6 as number,
    MES_ALERT_EVT_DISPLAY_TOAST = DAL.MES_ALERT_EVT_DISPLAY_TOAST as number,
    MES_ALERT_EVT_FIND_MY_PHONE = DAL.MES_ALERT_EVT_FIND_MY_PHONE as number,
    MES_ALERT_EVT_PLAY_RINGTONE = DAL.MES_ALERT_EVT_PLAY_RINGTONE as number,
    MES_ALERT_EVT_PLAY_SOUND = DAL.MES_ALERT_EVT_PLAY_SOUND as number,
    MES_ALERT_EVT_VIBRATE = DAL.MES_ALERT_EVT_VIBRATE as number,
    MES_CAMERA_EVT_LAUNCH_PHOTO_MODE = DAL.MES_CAMERA_EVT_LAUNCH_PHOTO_MODE as number,
    MES_CAMERA_EVT_LAUNCH_VIDEO_MODE = DAL.MES_CAMERA_EVT_LAUNCH_VIDEO_MODE as number,
    MES_CAMERA_EVT_START_VIDEO_CAPTURE = DAL.MES_CAMERA_EVT_START_VIDEO_CAPTURE as number,
    MES_CAMERA_EVT_STOP_PHOTO_MODE = DAL.MES_CAMERA_EVT_STOP_PHOTO_MODE as number,
    MES_CAMERA_EVT_STOP_VIDEO_CAPTURE = DAL.MES_CAMERA_EVT_STOP_VIDEO_CAPTURE as number,
    MES_CAMERA_EVT_STOP_VIDEO_MODE = DAL.MES_CAMERA_EVT_STOP_VIDEO_MODE as number,
    MES_CAMERA_EVT_TAKE_PHOTO = DAL.MES_CAMERA_EVT_TAKE_PHOTO as number,
    MES_CAMERA_EVT_TOGGLE_FRONT_REAR = DAL.MES_CAMERA_EVT_TOGGLE_FRONT_REAR as number,
    MES_DEVICE_DISPLAY_OFF = DAL.MES_DEVICE_DISPLAY_OFF as number,
    MES_DEVICE_DISPLAY_ON = DAL.MES_DEVICE_DISPLAY_ON as number,
    MES_DEVICE_GESTURE_DEVICE_SHAKEN = DAL.MES_DEVICE_GESTURE_DEVICE_SHAKEN as number,
    MES_DEVICE_INCOMING_CALL = DAL.MES_DEVICE_INCOMING_CALL as number,
    MES_DEVICE_INCOMING_MESSAGE = DAL.MES_DEVICE_INCOMING_MESSAGE as number,
    MES_DEVICE_ORIENTATION_LANDSCAPE = DAL.MES_DEVICE_ORIENTATION_LANDSCAPE as number,
    MES_DEVICE_ORIENTATION_PORTRAIT = DAL.MES_DEVICE_ORIENTATION_PORTRAIT as number,
    MES_DPAD_BUTTON_1_DOWN = DAL.MES_DPAD_BUTTON_1_DOWN as number,
    MES_DPAD_BUTTON_1_UP = DAL.MES_DPAD_BUTTON_1_UP as number,
    MES_DPAD_BUTTON_2_DOWN = DAL.MES_DPAD_BUTTON_2_DOWN as number,
    MES_DPAD_BUTTON_2_UP = DAL.MES_DPAD_BUTTON_2_UP as number,
    MES_DPAD_BUTTON_3_DOWN = DAL.MES_DPAD_BUTTON_3_DOWN as number,
    MES_DPAD_BUTTON_3_UP = DAL.MES_DPAD_BUTTON_3_UP as number,
    MES_DPAD_BUTTON_4_DOWN = DAL.MES_DPAD_BUTTON_4_DOWN as number,
    MES_DPAD_BUTTON_4_UP = DAL.MES_DPAD_BUTTON_4_UP as number,
    MES_DPAD_BUTTON_A_DOWN = DAL.MES_DPAD_BUTTON_A_DOWN as number,
    MES_DPAD_BUTTON_A_UP = DAL.MES_DPAD_BUTTON_A_UP as number,
    MES_DPAD_BUTTON_B_DOWN = DAL.MES_DPAD_BUTTON_B_DOWN as number,
    MES_DPAD_BUTTON_B_UP = DAL.MES_DPAD_BUTTON_B_UP as number,
    MES_DPAD_BUTTON_C_DOWN = DAL.MES_DPAD_BUTTON_C_DOWN as number,
    MES_DPAD_BUTTON_C_UP = DAL.MES_DPAD_BUTTON_C_UP as number,
    MES_DPAD_BUTTON_D_DOWN = DAL.MES_DPAD_BUTTON_D_DOWN as number,
    MES_DPAD_BUTTON_D_UP = DAL.MES_DPAD_BUTTON_D_UP as number,
    MES_REMOTE_CONTROL_EVT_FORWARD = DAL.MES_REMOTE_CONTROL_EVT_FORWARD as number,
    MES_REMOTE_CONTROL_EVT_NEXTTRACK = DAL.MES_REMOTE_CONTROL_EVT_NEXTTRACK as number,
    MES_REMOTE_CONTROL_EVT_PAUSE = DAL.MES_REMOTE_CONTROL_EVT_PAUSE as number,
    MES_REMOTE_CONTROL_EVT_PLAY = DAL.MES_REMOTE_CONTROL_EVT_PLAY as number,
    MES_REMOTE_CONTROL_EVT_PREVTRACK = DAL.MES_REMOTE_CONTROL_EVT_PREVTRACK as number,
    MES_REMOTE_CONTROL_EVT_REWIND = DAL.MES_REMOTE_CONTROL_EVT_REWIND as number,
    MES_REMOTE_CONTROL_EVT_STOP = DAL.MES_REMOTE_CONTROL_EVT_STOP as number,
    MES_REMOTE_CONTROL_EVT_VOLUMEDOWN = DAL.MES_REMOTE_CONTROL_EVT_VOLUMEDOWN as number,
    MES_REMOTE_CONTROL_EVT_VOLUMEUP = DAL.MES_REMOTE_CONTROL_EVT_VOLUMEUP as number,
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
