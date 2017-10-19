
declare namespace light {

    interface NeoPixelStrip {

        //% subcategory="External"
        setAll(rgb: number): void;

        //% subcategory="External"
        graph(value: number, high: number): void;

        //% subcategory="External"
        setPixelColor(pixeloffset: number, color: number): void;

        //% subcategory="External"
        pixelColor(pixeloffset: number): number;

        //% subcategory="External"
        setPixelWhiteLED(pixeloffset: number, white: number): void;

        //% subcategory="External"
        show(): void;

        //% subcategory="External"
        clear(): void;

        //% subcategory="External"
        length(): number;

        //% subcategory="External"
        setBrightness(brightness: number): void;

        //% subcategory="External"
        brightness(): number;

        //% subcategory="External"
        range(start: number, length: number): NeoPixelStrip;

        //% subcategory="External"
        move(kind: LightMove, offset: number): void;

        //% subcategory="External"
        photonForward(steps: number): void;

        //% subcategory="External"
        photonFlip(): void;

        //% subcategory="External"
        setPhotonColor(color: number): void;

        //% subcategory="External"
        setPhotonMode(mode: PhotonMode): void;

        //% subcategory="External"
        showAnimation(animation: NeoPixelAnimation, duration: number): void;

        //% subcategory="External"
        showAnimationFrame(animation: NeoPixelAnimation): void;

        //% subcategory="External"
        stopAllAnimations(): void;

        //% subcategory="External"
        setBuffered(on: boolean): void;

        //% subcategory="External"
        setMode(mode: NeoPixelMode);
    }
}