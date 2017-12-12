
declare namespace light {

    interface NeoPixelStrip {

        //% subcategory="NeoPixel"
        setAll(rgb: number): void;

        //% subcategory="NeoPixel"
        graph(value: number, high: number): void;

        //% subcategory="NeoPixel"
        setPixelColor(pixeloffset: number, color: number): void;

        //% subcategory="NeoPixel"
        pixelColor(pixeloffset: number): number;

        //% subcategory="NeoPixel"
        setPixelWhiteLED(pixeloffset: number, white: number): void;

        //% subcategory="NeoPixel"
        show(): void;

        //% subcategory="NeoPixel"
        clear(): void;

        //% subcategory="NeoPixel"
        length(): number;

        //% subcategory="NeoPixel"
        setBrightness(brightness: number): void;

        //% subcategory="NeoPixel"
        brightness(): number;

        //% subcategory="NeoPixel"
        range(start: number, length: number): NeoPixelStrip;

        //% subcategory="NeoPixel"
        move(kind: LightMove, offset: number): void;

        //% subcategory="NeoPixel"
        setPhotonPosition(index: number): void;
        
        //% subcategory="NeoPixel"
        photonForward(steps: number): void;

        //% subcategory="NeoPixel"
        photonFlip(): void;

        //% subcategory="NeoPixel"
        setPhotonPenHue(hue: number): void;

        //% subcategory="NeoPixel"
        setPhotonPenColor(color: number): void;

        //% subcategory="NeoPixel"
        setPhotonMode(mode: PhotonMode): void;

        //% subcategory="NeoPixel"
        showAnimation(animation: NeoPixelAnimation, duration: number): void;

        //% subcategory="NeoPixel"
        showAnimationFrame(animation: NeoPixelAnimation): void;

        //% subcategory="NeoPixel"
        stopAllAnimations(): void;

        //% subcategory="NeoPixel"
        setBuffered(on: boolean): void;

        //% subcategory="NeoPixel"
        buffered(): boolean;

        //% subcategory="NeoPixel"
        setMode(mode: NeoPixelMode): void;
    }
}