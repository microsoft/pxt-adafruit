
declare namespace light {

    //% blockHidden=1
    function range(start: number, length: number): NeoPixelStrip;

    //% blockHidden=1
    function setLength(numleds: number): void;

    //% blockHidden=1
    function setMode(mode: NeoPixelMode): void;

    //% advanced=false
    //% subcategory="NeoPixel"
    function onboardStrip(): NeoPixelStrip;

    //% advanced=false
    //% blockHidden=1
    function defaultStrip(): NeoPixelStrip;

    //% advanced=false
    //% subcategory="NeoPixel"
    export function createAPA102Strip(
        dataPin: DigitalInOutPin,
        clkPin: DigitalInOutPin,
        numleds: number): NeoPixelStrip;


    interface NeoPixelStrip {

        //% advanced=false
        //% subcategory="NeoPixel"
        setAll(rgb: number): void;

        //% advanced=false
        //% subcategory="NeoPixel"
        graph(value: number, high: number): void;

        //% advanced=false
        //% subcategory="NeoPixel"
        setPixelColor(pixeloffset: number, color: number): void;

        //% advanced=false
        //% subcategory="NeoPixel"
        pixelColor(pixeloffset: number): number;

        //% advanced=false
        //% subcategory="NeoPixel"
        setPixelWhiteLED(pixeloffset: number, white: number): void;

        //% advanced=false
        //% subcategory="NeoPixel"
        show(): void;

        //% advanced=false
        //% subcategory="NeoPixel"
        clear(): void;

        //% advanced=false
        //% subcategory="NeoPixel"
        length(): number;

        //% advanced=false
        //% subcategory="NeoPixel"
        setBrightness(brightness: number): void;

        //% advanced=false
        //% subcategory="NeoPixel"
        brightness(): number;

        //% advanced=false
        //% subcategory="NeoPixel"
        range(start: number, length: number): NeoPixelStrip;

        //% advanced=false
        //% subcategory="NeoPixel"
        move(kind: LightMove, offset: number): void;

        //% advanced=false
        //% subcategory="NeoPixel"
        setPhotonPosition(index: number): void;

        //% advanced=false
        //% subcategory="NeoPixel"
        photonForward(steps: number): void;

        //% advanced=false
        //% subcategory="NeoPixel"
        photonFlip(): void;

        //% advanced=false
        //% subcategory="NeoPixel"
        setPhotonPenHue(hue: number): void;

        //% advanced=false
        //% subcategory="NeoPixel"
        setPhotonPenColor(color: number): void;

        //% advanced=false
        //% subcategory="NeoPixel"
        setPhotonMode(mode: PhotonMode): void;

        //% advanced=false
        //% subcategory="NeoPixel"
        showAnimation(animation: NeoPixelAnimation, duration: number): void;

        //% advanced=false
        //% subcategory="NeoPixel"
        showAnimationFrame(animation: NeoPixelAnimation): void;

        //% advanced=false
        //% subcategory="NeoPixel"
        stopAllAnimations(): void;

        //% advanced=false
        //% subcategory="NeoPixel"
        setBuffered(on: boolean): void;

        //% advanced=false
        //% subcategory="NeoPixel"
        buffered(): boolean;

        //% advanced=false
        //% subcategory="NeoPixel"
        setMode(mode: NeoPixelMode): void;

        //% advanced=false
        //% subcategory="NeoPixel"
        setLength(length: number): void;
    }
}