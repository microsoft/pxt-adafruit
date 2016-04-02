// Auto-generated. Do not edit.



    //% color=45 weight=31
declare namespace images {

    /**
     * Creates an image that fits on the LED screen.
     */
    //% weight=75 help=images/create-image
    //% blockId=device_build_image block="create image" imageLiteral=1 shim=images::createImage
    function createImage(leds: string): Image;

    /**
     * Creates an image with 2 frames.
     */
    //% weight=74 help=images/create-big-image
    //% blockId=device_build_big_image block="create big image" imageLiteral=2 shim=images::createBigImage
    function createBigImage(leds: string): Image;
}


declare interface Image {
    /**
     * Shows an frame from the image at offset ``x offset``.
     * @param xOffset TODO
     */
    //% help=images/show-image weight=80 async
    //% blockId=device_show_image_offset block="show image %sprite|at offset %offset" blockGap=8 xOffset.defl=0 shim=ImageMethods::showImage
    showImage(xOffset?: number): void;

    /**
     * Scrolls an image .
     * @param frameOffset x offset moved on each animation step, eg: 5, 1, -1
     * @param interval time between each animation step in milli seconds, eg: 200
     */
    //% help=images/show-image weight=79 async
    //% blockId=device_scroll_image block="scroll image %sprite|with offset %frameoffset|and interval (ms) %delay" blockGap=8 frameOffset.defl=0 interval.defl=200 shim=ImageMethods::scrollImage
    scrollImage(frameOffset?: number, interval?: number): void;

    /**
     * Plots the image at a given column to the screen
     */
    //% help=images/plot-image xOffset.defl=0 shim=ImageMethods::plotImage
    plotImage(xOffset?: number): void;

    /**
     * Sets all pixels off.
     */
    //% help=images/clear shim=ImageMethods::clear
    clear(): void;

    /**
     * Sets a specific pixel brightness at a given position
     */
    //% help= shim=ImageMethods::setPixelBrightness
    setPixelBrightness(x: number, y: number, value: number): void;

    /**
     * Gets the pixel brightness ([0..255]) at a given position
     */
    //% help= shim=ImageMethods::pixelBrightness
    pixelBrightness(x: number, y: number): number;
}


    /**
     * Provides access to basic micro:bit functionality.
     */
    //% color=190 weight=100
declare namespace basic {

    /**
     * Scroll a number on the screen. If the number fits on the screen (i.e. is a single digit), do not scroll.
     * @param interval speed of scroll; eg: 150, 100, 200, -100
     */
    //% help=basic/show-number
    //% weight=96
    //% blockId=device_show_number block="show|number %number" blockGap=8 icon="\uf1ec"
    //% async interval.defl=150 shim=basic::showNumber
    function showNumber(value: number, interval?: number): void;

    /**
     * Draws an image on the LED screen.
     * @param leds TODO
     * @param interval TODO
     */
    //% help=basic/show-leds 
    //% weight=95 blockGap=8
    //% imageLiteral=1 async
    //% blockId=device_show_leds
    //% block="show leds" icon="\uf00a" interval.defl=400 shim=basic::showLeds
    function showLeds(leds: string, interval?: number): void;

    /**
     * Display text on the display, one character at a time. If the string fits on the screen (i.e. is one letter), does not scroll.
     * @param text the text to scroll on the screen, eg: "Hello!"
     * @param interval how fast to shift characters; eg: 150, 100, 200, -100
     */
    //% help=basic/show-string 
    //% weight=87 blockGap=8
    //% block="show|string %text" icon="\uf031" 
    //% async
    //% blockId=device_print_message interval.defl=150 shim=basic::showString
    function showString(text: string, interval?: number): void;

    /**
     * Turn off all LEDs
     */
    //% help=basic/clear-screen weight=79
    //% blockId=device_clear_display block="clear screen" icon="\uf12d" shim=basic::clearScreen
    function clearScreen(): void;

    /**
     * Shows a sequence of LED screens as an animation.
     * @param leds TODO
     * @param interval TODO
     */
    //% help=basic/show-animation shim=micro_bit::showAnimation imageLiteral=1 async interval.defl=400 shim=basic::showAnimation
    function showAnimation(leds: string, interval?: number): void;

    /**
     * Draws an image on the LED screen.
     * @param leds TODO
     */
    //% help=basic/plot-leds weight=80 shim=micro_bit::plotLeds imageLiteral=1 shim=basic::plotLeds
    function plotLeds(leds: string): void;

    /**
     * Repeats the code forever in the background. On each iteration, allows other codes to run.
     * @param body TODO
     */
    //% help=basic/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever" icon="\uf01e" shim=basic::forever
    function forever(a: () => void): void;

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=basic/pause weight=54
    //% async block="pause (ms) %pause"
    //% blockId=device_pause icon="\uf110" shim=basic::pause
    function pause(ms: number): void;
}



    //% weight=1 color="#333333"
declare namespace control {

    /**
     * Schedules code that run in the background.
     */
    //% help=control/in-background
    //% blockId="control_in_background" block="run in background" blockGap=8 shim=control::inBackground
    function inBackground(a: () => void): void;

    /**
     * Resets the BBC micro:bit.
     */
    //% weight=30 async help=control/reset
    //% blockId="control_reset" block="reset" shim=control::reset
    function reset(): void;

    /**
     * Raises an event in the event bus.
     * @param src ID of the MicroBit Component that generated the event e.g. MICROBIT_ID_BUTTON_A.
     * @param value Component specific code indicating the cause of the event.
     * @param mode optional definition of how the event should be processed after construction (default is CREATE_AND_QUEUE).
     */
    //% weight=21 blockGap=12 blockId="control_raise_event" block="raise event|from source %src=control_event_source|with value %value=control_event_value" blockExternalInputs=1
    //%  mode.defl=1 shim=control::raiseEvent
    function raiseEvent(src: number, value: number, mode: EventCreationMode ): void;

    /**
     * Raises an event in the event bus.
     */
    //% weight=20 blockGap=8 blockId="control_on_event" block="on event|from %src=control_event_source|with value %value=control_event_value" 
    //% blockExternalInputs=1 blockStatement=1 shim=control::onEvent
    function onEvent(src: number, value: number, handler: () => void): void;
}

// Auto-generated. Do not edit. Really.
