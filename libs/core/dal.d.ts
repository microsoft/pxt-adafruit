// Auto-generated. Do not edit.
declare const enum DAL {
    // built/codal/libraries/codal-core/inc/core/CodalComponent.h
    DEVICE_ID_BUTTON_A = 1,
    DEVICE_ID_BUTTON_B = 2,
    DEVICE_ID_BUTTON_AB = 3,
    DEVICE_ID_BUTTON_RESET = 4,
    DEVICE_ID_ACCELEROMETER = 5,
    DEVICE_ID_COMPASS = 6,
    DEVICE_ID_DISPLAY = 7,
    DEVICE_ID_THERMOMETER = 8,
    DEVICE_ID_RADIO = 9,
    DEVICE_ID_RADIO_DATA_READY = 10,
    DEVICE_ID_MULTIBUTTON_ATTACH = 11,
    DEVICE_ID_SERIAL = 12,
    DEVICE_ID_GESTURE = 13,
    DEVICE_ID_SYSTEM_TIMER = 14,
    DEVICE_ID_SCHEDULER = 15,
    DEVICE_ID_COMPONENT = 16,
    DEVICE_ID_LIGHT_SENSOR = 17,
    DEVICE_ID_TOUCH_SENSOR = 18,
    DEVICE_ID_SYSTEM_DAC = 19,
    DEVICE_ID_SYSTEM_MICROPHONE = 20,
    DEVICE_ID_SYSTEM_LEVEL_DETECTOR = 21,
    DEVICE_ID_IO_P0 = 100,
    DEVICE_ID_MESSAGE_BUS_LISTENER = 1021,
    DEVICE_ID_NOTIFY_ONE = 1022,
    DEVICE_ID_NOTIFY = 1023,
    DEVICE_COMPONENT_RUNNING = 4096,
    DEVICE_COMPONENT_STATUS_SYSTEM_TICK = 8192,
    DEVICE_COMPONENT_STATUS_IDLE_TICK = 16384,
    DEVICE_COMPONENT_LISTENERS_CONFIGURED = 1,
    DEVICE_COMPONENT_EVT_SYSTEM_TICK = 1,
    // built/codal/libraries/codal-core/inc/core/CodalFiber.h
    DEVICE_SCHEDULER_RUNNING = 1,
    DEVICE_SCHEDULER_IDLE = 2,
    DEVICE_FIBER_FLAG_FOB = 1,
    DEVICE_FIBER_FLAG_PARENT = 2,
    DEVICE_FIBER_FLAG_CHILD = 4,
    DEVICE_FIBER_FLAG_DO_NOT_PAGE = 8,
    DEVICE_SCHEDULER_EVT_TICK = 1,
    DEVICE_SCHEDULER_EVT_IDLE = 2,
    // built/codal/libraries/codal-core/inc/core/CodalHeapAllocator.h
    DEVICE_MAXIMUM_HEAPS = 2,
    DEVICE_HEAP_BLOCK_FREE = 2147483648,
    // built/codal/libraries/codal-core/inc/core/CodalListener.h
    MESSAGE_BUS_LISTENER_PARAMETERISED = 1,
    MESSAGE_BUS_LISTENER_METHOD = 2,
    MESSAGE_BUS_LISTENER_BUSY = 4,
    MESSAGE_BUS_LISTENER_REENTRANT = 8,
    MESSAGE_BUS_LISTENER_QUEUE_IF_BUSY = 16,
    MESSAGE_BUS_LISTENER_DROP_IF_BUSY = 32,
    MESSAGE_BUS_LISTENER_NONBLOCKING = 64,
    MESSAGE_BUS_LISTENER_URGENT = 128,
    MESSAGE_BUS_LISTENER_DELETING = 32768,
    MESSAGE_BUS_LISTENER_IMMEDIATE = 192,
    // built/codal/libraries/codal-core/inc/core/CodalUSB.h
    GET_STATUS = 0,
    CLEAR_FEATURE = 1,
    SET_FEATURE = 3,
    SET_ADDRESS = 5,
    GET_DESCRIPTOR = 6,
    SET_DESCRIPTOR = 7,
    GET_CONFIGURATION = 8,
    SET_CONFIGURATION = 9,
    GET_INTERFACE = 10,
    SET_INTERFACE = 11,
    SYNCH_FRAME = 12,
    DIRECTION_OUT = 0,
    DIRECTION_IN = 1,
    DEVICE_REMOTE_WAKEUP = 1,
    // built/codal/libraries/codal-core/inc/core/ErrorNo.h
    DEVICE_OK = 0,
    DEVICE_INVALID_PARAMETER = -1001,
    DEVICE_NOT_SUPPORTED = -1002,
    DEVICE_CALIBRATION_IN_PROGRESS = -1003,
    DEVICE_CALIBRATION_REQUIRED = -1004,
    DEVICE_NO_RESOURCES = -1005,
    DEVICE_BUSY = -1006,
    DEVICE_CANCELLED = -1007,
    DEVICE_I2C_ERROR = -1010,
    DEVICE_SERIAL_IN_USE = -1011,
    DEVICE_NO_DATA = -1012,
    DEVICE_NOT_IMPLEMENTED = -1013,
    DEVICE_OOM = 20,
    DEVICE_HEAP_ERROR = 30,
    DEVICE_NULL_DEREFERENCE = 40,
    DEVICE_USB_ERROR = 50,
    // built/codal/libraries/codal-core/inc/core/NotifyEvents.h
    DEVICE_DISPLAY_EVT_FREE = 1,
    CODAL_SERIAL_EVT_TX_EMPTY = 2,
    DEVICE_UART_S_EVT_TX_EMPTY = 3,
    DEVICE_NOTIFY_USER_EVENT_BASE = 1024,
    // built/codal/libraries/codal-core/inc/drivers/AbstractButton.h
    DEVICE_BUTTON_EVT_DOWN = 1,
    DEVICE_BUTTON_EVT_UP = 2,
    DEVICE_BUTTON_EVT_CLICK = 3,
    DEVICE_BUTTON_EVT_LONG_CLICK = 4,
    DEVICE_BUTTON_EVT_HOLD = 5,
    DEVICE_BUTTON_EVT_DOUBLE_CLICK = 6,
    DEVICE_BUTTON_LONG_CLICK_TIME = 1000,
    DEVICE_BUTTON_HOLD_TIME = 1500,
    DEVICE_BUTTON_STATE = 1,
    DEVICE_BUTTON_STATE_HOLD_TRIGGERED = 2,
    DEVICE_BUTTON_STATE_CLICK = 4,
    DEVICE_BUTTON_STATE_LONG_CLICK = 8,
    DEVICE_BUTTON_SIGMA_MIN = 0,
    DEVICE_BUTTON_SIGMA_MAX = 12,
    DEVICE_BUTTON_SIGMA_THRESH_HI = 8,
    DEVICE_BUTTON_SIGMA_THRESH_LO = 2,
    DEVICE_BUTTON_DOUBLE_CLICK_THRESH = 50,
    DEVICE_BUTTON_SIMPLE_EVENTS = 0,
    DEVICE_BUTTON_ALL_EVENTS = 1,
    ACTIVE_LOW = 0,
    ACTIVE_HIGH = 1,
    // built/codal/libraries/codal-core/inc/drivers/AnalogSensor.h
    ANALOG_THRESHOLD_LOW = 1,
    ANALOG_THRESHOLD_HIGH = 2,
    ANALOG_SENSOR_UPDATE_NEEDED = 3,
    ANALOG_SENSOR_INITIALISED = 1,
    ANALOG_SENSOR_HIGH_THRESHOLD_PASSED = 2,
    ANALOG_SENSOR_LOW_THRESHOLD_PASSED = 4,
    ANALOG_SENSOR_LOW_THRESHOLD_ENABLED = 8,
    ANALOG_SENSOR_HIGH_THRESHOLD_ENABLED = 16,
    // built/codal/libraries/codal-core/inc/drivers/CapTouchButton.h
    CAP_TOUCH_BUTTON_CALIBRATION_PERIOD = 10,
    CAP_TOUCH_BUTTON_CALIBRATION_LINEAR_OFFSET = 100,
    CAP_TOUCH_BUTTON_CALIBRATION_PERCENTAGE_OFFSET = 30,
    CAP_TOUCH_BUTTON_SAMPLE_PERIOD = 50,
    CAP_TOUCH_BUTTON_CALIBRATING = 16,
    // built/codal/libraries/codal-core/inc/drivers/HID.h
    HID_REQUEST_GET_REPORT = 1,
    HID_REQUEST_GET_IDLE = 2,
    HID_REQUEST_GET_PROTOCOL = 3,
    HID_REQUEST_SET_REPORT = 9,
    HID_REQUEST_SET_IDLE = 10,
    HID_REQUEST_SET_PROTOCOL = 11,
    // built/codal/libraries/codal-core/inc/drivers/LIS3DH.h
    ACCELEROMETER_IMU_DATA_VALID = 2,
    ACCELEROMETER_EVT_DATA_UPDATE = 1,
    ACCELEROMETER_EVT_NONE = 0,
    ACCELEROMETER_EVT_TILT_UP = 1,
    ACCELEROMETER_EVT_TILT_DOWN = 2,
    ACCELEROMETER_EVT_TILT_LEFT = 3,
    ACCELEROMETER_EVT_TILT_RIGHT = 4,
    ACCELEROMETER_EVT_FACE_UP = 5,
    ACCELEROMETER_EVT_FACE_DOWN = 6,
    ACCELEROMETER_EVT_FREEFALL = 7,
    ACCELEROMETER_EVT_3G = 8,
    ACCELEROMETER_EVT_6G = 9,
    ACCELEROMETER_EVT_8G = 10,
    ACCELEROMETER_EVT_SHAKE = 11,
    ACCELEROMETER_REST_TOLERANCE = 200,
    ACCELEROMETER_TILT_TOLERANCE = 200,
    ACCELEROMETER_FREEFALL_TOLERANCE = 400,
    ACCELEROMETER_SHAKE_TOLERANCE = 400,
    ACCELEROMETER_3G_TOLERANCE = 3072,
    ACCELEROMETER_6G_TOLERANCE = 6144,
    ACCELEROMETER_8G_TOLERANCE = 8192,
    ACCELEROMETER_GESTURE_DAMPING = 5,
    ACCELEROMETER_SHAKE_DAMPING = 10,
    ACCELEROMETER_SHAKE_RTX = 30,
    ACCELEROMETER_SHAKE_COUNT_THRESHOLD = 4,
    // built/codal/libraries/codal-core/inc/drivers/LevelDetector.h
    LEVEL_THRESHOLD_LOW = 1,
    LEVEL_THRESHOLD_HIGH = 2,
    LEVEL_DETECTOR_INITIALISED = 1,
    LEVEL_DETECTOR_HIGH_THRESHOLD_PASSED = 2,
    LEVEL_DETECTOR_LOW_THRESHOLD_PASSED = 4,
    LEVEL_DETECTOR_DEFAULT_WINDOW_SIZE = 128,
    // built/codal/libraries/codal-core/inc/drivers/MultiButton.h
    MULTI_BUTTON_STATE_1 = 1,
    MULTI_BUTTON_STATE_2 = 2,
    MULTI_BUTTON_HOLD_TRIGGERED_1 = 4,
    MULTI_BUTTON_HOLD_TRIGGERED_2 = 8,
    MULTI_BUTTON_SUPRESSED_1 = 16,
    MULTI_BUTTON_SUPRESSED_2 = 32,
    MULTI_BUTTON_ATTACHED = 64,
    // built/codal/libraries/codal-core/inc/drivers/Pin.h
    IO_STATUS_DIGITAL_IN = 1,
    IO_STATUS_DIGITAL_OUT = 2,
    IO_STATUS_ANALOG_IN = 4,
    IO_STATUS_ANALOG_OUT = 8,
    IO_STATUS_TOUCH_IN = 16,
    IO_STATUS_EVENT_ON_EDGE = 32,
    IO_STATUS_EVENT_PULSE_ON_EDGE = 64,
    DEVICE_PIN_MAX_OUTPUT = 1023,
    DEVICE_PIN_MAX_SERVO_RANGE = 180,
    DEVICE_PIN_DEFAULT_SERVO_RANGE = 2000,
    DEVICE_PIN_DEFAULT_SERVO_CENTER = 1500,
    DEVICE_PIN_EVENT_NONE = 0,
    DEVICE_PIN_EVENT_ON_EDGE = 1,
    DEVICE_PIN_EVENT_ON_PULSE = 2,
    DEVICE_PIN_EVENT_ON_TOUCH = 3,
    DEVICE_PIN_EVT_RISE = 2,
    DEVICE_PIN_EVT_FALL = 3,
    DEVICE_PIN_EVT_PULSE_HI = 4,
    DEVICE_PIN_EVT_PULSE_LO = 5,
    PIN_CAPABILITY_DIGITAL = 1,
    PIN_CAPABILITY_ANALOG = 2,
    PIN_CAPABILITY_AD = 3,
    PIN_CAPABILITY_ALL = 3,
    // built/codal/libraries/codal-core/inc/drivers/Serial.h
    CODAL_SERIAL_DEFAULT_BAUD_RATE = 115200,
    CODAL_SERIAL_DEFAULT_BUFFER_SIZE = 20,
    CODAL_SERIAL_EVT_DELIM_MATCH = 1,
    CODAL_SERIAL_EVT_HEAD_MATCH = 2,
    CODAL_SERIAL_EVT_RX_FULL = 3,
    CODAL_SERIAL_RX_IN_USE = 1,
    CODAL_SERIAL_TX_IN_USE = 2,
    CODAL_SERIAL_RX_BUFF_INIT = 4,
    CODAL_SERIAL_TX_BUFF_INIT = 8,
    ASYNC = 0,
    SYNC_SPINWAIT = 1,
    SYNC_SLEEP = 2,
    RxInterrupt = 0,
    TxInterrupt = 1,
    // built/codal/libraries/codal-core/inc/drivers/Synthesizer.h
    SYNTHESIZER_SAMPLE_RATE = 44100,
    TONE_WIDTH = 1024,
    // built/codal/libraries/codal-core/inc/drivers/Timer.h
    SYSTEM_CLOCK_INIT = 1,
    // built/codal/libraries/codal-core/inc/drivers/TouchButton.h
    TOUCH_BUTTON_CALIBRATION_PERIOD = 10,
    TOUCH_BUTTON_CALIBRATION_LINEAR_OFFSET = 2,
    TOUCH_BUTTON_CALIBRATION_PERCENTAGE_OFFSET = 5,
    TOUCH_BUTTON_CALIBRATING = 16,
    // built/codal/libraries/codal-core/inc/drivers/TouchSensor.h
    TOUCH_SENSOR_MAX_BUTTONS = 10,
    TOUCH_SENSOR_SAMPLE_PERIOD = 50,
    TOUCH_SENSE_SAMPLE_MAX = 1000,
    TOUCH_SENSOR_UPDATE_NEEDED = 1,
    // built/codal/libraries/codal-core/inc/types/CoordinateSystem.h
    RAW = 0,
    SIMPLE_CARTESIAN = 1,
    NORTH_EAST_DOWN = 2,
    NORTH_EAST_UP = 3,
    // built/codal/libraries/codal-core/inc/types/DataStream.h
    DATASTREAM_MAXIMUM_BUFFERS = 1,
    // built/codal/libraries/codal-core/inc/types/Event.h
    DEVICE_ID_ANY = 0,
    DEVICE_EVT_ANY = 0,
    CREATE_ONLY = 0,
    CREATE_AND_FIRE = 1,
    DEVICE_EVENT_DEFAULT_LAUNCH_MODE = 1,
    // built/codal/libraries/codal-core/inc/types/RefCounted.h
    REF_TAG_STRING = 1,
    REF_TAG_BUFFER = 2,
    REF_TAG_IMAGE = 3,
    REF_TAG_USER = 32,
    // built/codal/pxtapp/hf2dbg.h
    HF2DBG_H = 1,
    // built/codal/pxtapp/pins.h
    CFG_PIN_ACCELEROMETER_INT = 1,
    CFG_PIN_ACCELEROMETER_SCL = 2,
    CFG_PIN_ACCELEROMETER_SDA = 3,
    CFG_PIN_BTN_A = 4,
    CFG_PIN_BTN_B = 5,
    CFG_PIN_BTN_SLIDE = 6,
    CFG_PIN_DOTSTAR_CLOCK = 7,
    CFG_PIN_DOTSTAR_DATA = 8,
    CFG_PIN_FLASH_CS = 9,
    CFG_PIN_FLASH_MISO = 10,
    CFG_PIN_FLASH_MOSI = 11,
    CFG_PIN_FLASH_SCK = 12,
    CFG_PIN_LED = 13,
    CFG_PIN_LIGHT = 14,
    CFG_PIN_MICROPHONE = 15,
    CFG_PIN_MIC_CLOCK = 16,
    CFG_PIN_MIC_DATA = 17,
    CFG_PIN_MISO = 18,
    CFG_PIN_MOSI = 19,
    CFG_PIN_NEOPIXEL = 20,
    CFG_PIN_RX = 21,
    CFG_PIN_RXLED = 22,
    CFG_PIN_SCK = 23,
    CFG_PIN_SCL = 24,
    CFG_PIN_SDA = 25,
    CFG_PIN_SPEAKER_AMP = 26,
    CFG_PIN_TEMPERATURE = 27,
    CFG_PIN_TX = 28,
    CFG_PIN_TXLED = 29,
    CFG_PIN_IR_OUT = 30,
    CFG_PIN_IR_IN = 31,
    CFG_PIN_A0 = 100,
    CFG_PIN_A1 = 101,
    CFG_PIN_A2 = 102,
    CFG_PIN_A3 = 103,
    CFG_PIN_A4 = 104,
    CFG_PIN_A5 = 105,
    CFG_PIN_A6 = 106,
    CFG_PIN_A7 = 107,
    CFG_PIN_A8 = 108,
    CFG_PIN_A9 = 109,
    CFG_PIN_A10 = 110,
    CFG_PIN_A11 = 111,
    CFG_PIN_A12 = 112,
    CFG_PIN_A13 = 113,
    CFG_PIN_A14 = 114,
    CFG_PIN_A15 = 115,
    CFG_PIN_D0 = 150,
    CFG_PIN_D1 = 151,
    CFG_PIN_D2 = 152,
    CFG_PIN_D3 = 153,
    CFG_PIN_D4 = 154,
    CFG_PIN_D5 = 155,
    CFG_PIN_D6 = 156,
    CFG_PIN_D7 = 157,
    CFG_PIN_D8 = 158,
    CFG_PIN_D9 = 159,
    CFG_PIN_D10 = 160,
    CFG_PIN_D11 = 161,
    CFG_PIN_D12 = 162,
    CFG_PIN_D13 = 163,
    CFG_PIN_D14 = 164,
    CFG_PIN_D15 = 165,
    CFG_NUM_NEOPIXELS = 200,
    CFG_NUM_DOTSTARS = 201,
    CFG_DEFAULT_BUTTON_MODE = 202,
    BUTTON_ACTIVE_HIGH_PULL_DOWN = 17,
    BUTTON_ACTIVE_HIGH_PULL_UP = 33,
    BUTTON_ACTIVE_HIGH_PULL_NONE = 49,
    BUTTON_ACTIVE_LOW_PULL_DOWN = 16,
    BUTTON_ACTIVE_LOW_PULL_UP = 32,
    BUTTON_ACTIVE_LOW_PULL_NONE = 48,
    DEV_NUM_PINS = 64,
    Click = 3,
    DoubleClick = 6,
    LongClick = 4,
    Up = 2,
    Down = 1,
    Hold = 5,
    // built/codal/pxtapp/pxt.h
    PAGE_SIZE = 256,
    DEVICE_ID_BUTTON_SLIDE = 3000,
    DEVICE_ID_MICROPHONE = 3001,
    DEVICE_ID_FIRST_BUTTON = 4000,
    DEVICE_ID_FIRST_TOUCHBUTTON = 4100,
    PA00 = 0,
    PA01 = 1,
    PA02 = 2,
    PA03 = 3,
    PA04 = 4,
    PA05 = 5,
    PA06 = 6,
    PA07 = 7,
    PA08 = 8,
    PA09 = 9,
    PA10 = 10,
    PA11 = 11,
    PA12 = 12,
    PA13 = 13,
    PA14 = 14,
    PA15 = 15,
    PA16 = 16,
    PA17 = 17,
    PA18 = 18,
    PA19 = 19,
    PA20 = 20,
    PA21 = 21,
    PA22 = 22,
    PA23 = 23,
    PA24 = 24,
    PA25 = 25,
    PA26 = 26,
    PA27 = 27,
    PA28 = 28,
    PA29 = 29,
    PA30 = 30,
    PA31 = 31,
    PB00 = 32,
    PB01 = 33,
    PB02 = 34,
    PB03 = 35,
    PB04 = 36,
    PB05 = 37,
    PB06 = 38,
    PB07 = 39,
    PB08 = 40,
    PB09 = 41,
    PB10 = 42,
    PB11 = 43,
    PB12 = 44,
    PB13 = 45,
    PB14 = 46,
    PB15 = 47,
    PB16 = 48,
    PB17 = 49,
    PB18 = 50,
    PB19 = 51,
    PB20 = 52,
    PB21 = 53,
    PB22 = 54,
    PB23 = 55,
    PB24 = 56,
    PB25 = 57,
    PB26 = 58,
    PB27 = 59,
    PB28 = 60,
    PB29 = 61,
    PB30 = 62,
    PB31 = 63,
    // built/codal/pxtapp/pxtbase.h
    Int8LE = 1,
    UInt8LE = 2,
    Int16LE = 3,
    UInt16LE = 4,
    Int32LE = 5,
    Int8BE = 6,
    UInt8BE = 7,
    Int16BE = 8,
    UInt16BE = 9,
    Int32BE = 10,
    UInt32LE = 11,
    UInt32BE = 12,
    Float32LE = 13,
    Float64LE = 14,
    Float32BE = 15,
    Float64BE = 16,
    Undefined = 0,
    Boolean = 1,
    Number = 2,
    String = 3,
    Object = 4,
    Function = 5,
    // built/codal/pxtapp/pxtconfig.h
    PXT_VM = 0,
    // built/codal/pxtapp/uf2format.h
    UF2FORMAT_H = 1,
    APP_START_ADDRESS = 8192,
    UF2_FLAG_NOFLASH = 1,
    // built/codal/pxtapp/uf2hid.h
    UF2_HID_H = 1,
}
