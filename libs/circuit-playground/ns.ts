
//% color="#d65cd6"
namespace input {
}

//% color="#F55D3E"
namespace music {

}

//% color="#1B998B"
namespace control {

}

//% color="#EF2D56"
namespace pins {

}

//% color="#006E90"
namespace serial {

}

//% color="#006E90"
namespace console {

}

//% color="#40bf4a"
namespace loops {

}


enum LightAnimation {
    //% blockImage=1
    //% block="rainbow"
    Rainbow,
    //% blockImage=1
    //% block="running lights"
    RunningLights,
    //% blockImage=1
    //% block="comet"
    Comet,
    //% blockImage=1
    //% block="sparkle"
    Sparkle,
    //% blockImage=1
    //% block="theater chase"
    TheaterChase,
    //% blockImage=1
    //% block="color wipe"
    ColorWipe
}

//% color="#4c97ff"
//% groups='["other", "Color", "Photon", "More"]'
namespace light {

    //%
    export const pixels = light.createNeoPixelStrip();

    /**
     * Get the 10 NeoPixel strip built into the Circuit Playground Express.
     */
    //% help=light/onboard-strip
    //% blockId="neopixel_onboard_strip" block="onboard strip"
    //% weight=101 blockGap=8
    //% subcategory="NeoPixel"
    export function onboardStrip(): NeoPixelStrip {
        return pixels;
    }

    /**
     * Shows a pattern of colors on the pixel ring
     * @param colors a string describing the colors, eg: "red red red red red red red red red red"
     * @param interval the duration in milliseconds between frames, eg: 400
     */
    //% blockId="neopixel_show_ring_colors" block="show ring |%colors"
    //% weight=100
    //% help="light/show-ring"
    //% colors.fieldEditor="lights"
    //% colors.fieldOptions.onParentBlock=true
    //% colors.fieldOptions.decompileLiterals=true
    //% blockExternalInputs="true" blockGap=8
    export function showRing(colors: string, interval: number = 400) {
        const strip = light.pixels;
        return strip.showColors(colors, interval);
    }


    /**
     * Set all of the pixels on the strip to one RGB color.
     * @param rgb RGB color of the LED
     */
    //% blockId="builtin_neopixel_set_strip_color" block="set all pixels to %rgb=colorNumberPicker"
    //% help="light/set-all"
    //% weight=79 blockGap=8
    export function setAll(rgb: number) {
        light.pixels.setAll(rgb);
    }

    /**
     * Turn off all pixel LEDs on the onboard strip.
     */
    //% blockId="builtin_neopixel_clear" block="clear"
    //% parts="neopixel"
    //% help="light/clear"
    //% group="More" weight=9 blockGap=8
    export function clear() {
        light.pixels.clear();
    }

    /**
     * Display a vertical bar graph based on the `value` and `high` value.
     * If `high` is 0, the chart gets adjusted automatically.
     * @param value current value to plot
     * @param high maximum value, 0 to autoscale
     */
    //% blockId=builtin_neopixel_show_bar_graph block="graph %value |up to %high" icon="\uf080"
    //% help=light/graph blockGap=8
    //% weight=10
    export function graph(value: number, high: number): void {
        light.pixels.graph(value, high);
    }


    /**
     * Set the pixel to a given color.
     * @param pixeloffset position of the NeoPixel in the strip
     * @param color RGB color of the LED
     */
    //% blockId="builtin_neopixel_set_pixel_color" block="set pixel color at %pixeloffset|to %rgb=colorNumberPicker"
    //% help="light/set-pixel-color"
    //% group="More" weight=89 blockGap=8
    export function setPixelColor(pixeloffset: number, color: number): void {
        light.pixels.setPixelColor(pixeloffset, color);
    }

    /**
     * Gets the pixel color at a given offset.
     * @param pixeloffset position of the NeoPixel in the strip
     */
    //% blockId="builtin_neopixel_pixel_color" block="pixel color at %pixeloffset"
    //% help="light/pixel-color"
    //% group="More" weight=88
    export function pixelColor(pixeloffset: number): number {
        return light.pixels.pixelColor(pixeloffset);
    }

    /**
     * Set the brightness of the strip. This flag only applies to future operation.
     * @param brightness a measure of LED brightness in 0-255. eg: 20
     */
    //% blockId="builtin_neopixel_set_brightness" block="set brightness %brightness"
    //% brightness.min=0 brightness.max=255
    //% help="light/set-brightness"
    //% weight=2 blockGap=8
    export function setBrightness(brightness: number): void {
        light.pixels.setBrightness(brightness);
    }

    /**
     * Move a photon effect along the pixel strip by a number of steps.
     * @param steps number of steps (lights) to move, eg: 1
     */
    //% blockId=builtin_neophoton_fd block="photon forward by %steps"
    //% help="light/photon-forward"
    //% group="Photon" weight=41 blockGap=8
    export function photonForward(steps: number) {
        light.pixels.photonForward(steps);
    }
    /**
         * Switch the direction of the photon pulse.
         */
    //% blockId=builtin_neophoton_flip block="photon flip"
    //% help="light/photon-flip"
    //% parts="neopixel"
    //% group="Photon" weight=40 blockGap=8
    export function photonFlip() {
        light.pixels.photonFlip();
    }


    /**
     * Sets the photon position to a given light index
     * @param index index of the light, if out of bound, the index is wrapped
     */
    //% blockId=builtin_light_photon_set_position block="photon set position %index"
    //% help="light/set-photon-position"
    //% parts="neopixel"
    //% group="Photon" weight=39 blockGap=8
    export function setPhotonPosition(index: number) {
        light.pixels.setPhotonPosition(index);
    }

    /**
     * Set the photon color hue.
     * @param hue the color hue of the photon
     */
    //% blockId=builtin_neophoton_set_pen_hue block="photon set pen hue %hue=colorWheelPicker"
    //% help="light/set-photon-pen-hue"
    //% group="Photon" weight=39 blockGap=8
    export function setPhotonPenHue(hue: number) {
        light.pixels.setPhotonPenHue(hue);
    }

    /**
     * Set the photon mode to pen up, pen down, or eraser.
     * @param mode the desired mode
     */
    //% blockId=builtin_neophoton_set_photon block="photon %mode"
    //% help="light/set-photon-mode"
    //% group="Photon" weight=38
    export function setPhotonMode(mode: PhotonMode) {
        light.pixels.setPhotonMode(mode);
    }

    /**
     * Show an animation or queue an animation in the animation queue
     * @param animation the animation to run, eg: light.rainbowAnimation
     * @param duration the duration to run in milliseconds, eg: 500
     */
    //% blockId=builtin_neopixel_show_animation block="show animation %animation=light_animation_picker|for %duration=timePicker|ms"
    //% help="light/show-animation" blockGap=8
    //% weight=81
    export function showAnimation(animation: NeoPixelAnimation, duration: number) {
        light.pixels.showAnimation(animation, duration);
    }

    /**
      * Show a single animation frame
      * @param animation the animation to run, eg: light.rainbowAnimation
      */
    //% blockId=builtin_neopixel_show_animation_frame block="show frame of %animation=light_animation_picker|animation"
    //% help="light/show-animation-frame"
    //% group="More" weight=24 blockGap=8
    export function showAnimationFrame(animation: NeoPixelAnimation) {
        light.pixels.showAnimationFrame(animation);
    }

    /**
     * Stop the current animation and any other animations ready to show.
     */
    //% blockId=builtin_neopixel_stop_all_animations block="stop all animations"
    //% help="light/stop-all-animations"
    //% group="More" weight=23
    export function stopAllAnimations() {
        light.pixels.stopAllAnimations();
    }

    /**
     * Creates a builtin animation
     * @param kind the type of animation
     */
    //% kind.fieldEditor="imagedropdown"
    //% kind.fieldOptions.columns=3 blockGap=8
    //% blockId=light_animation block="%kind"
    //% group="More" weight=25
    //% help="light/animation" blockHidden=true deprecated=1
    export function animation(kind: LightAnimation): NeoPixelAnimation {
        switch (kind) {
            case LightAnimation.RunningLights: return runningLightsAnimation;
            case LightAnimation.Comet: return cometAnimation;
            case LightAnimation.ColorWipe: return colorWipeAnimation;
            case LightAnimation.TheaterChase: return theaterChaseAnimation;
            case LightAnimation.Sparkle: return sparkleAnimation;
            default: return rainbowAnimation;
        }
    }
}