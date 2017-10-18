
declare namespace light {

    interface NeoPixelStrip {

        //% subcategory="External" blockHidden=false
        setAll(rgb: number): void;

        //% subcategory="External" blockHidden=false
        graph(value: number, high: number): void;

        //% subcategory="External" blockHidden=false
        setPixelColor(pixeloffset: number, color: number): void;

        //% subcategory="External" blockHidden=false
        pixelColor(pixeloffset: number): number;

        //% subcategory="External" blockHidden=false
        setPixelWhiteLED(pixeloffset: number, white: number): void;

        //% subcategory="External" blockHidden=false
        show(): void;

        //% subcategory="External" blockHidden=false
        clear(): void;

        //% subcategory="External" blockHidden=false
        length(): number;

        //% subcategory="External" blockHidden=false
        setBrightness(brightness: number): void;

        //% subcategory="External" blockHidden=false
        brightness(): number;

        //% subcategory="External" blockHidden=false
        range(start: number, length: number): NeoPixelStrip;

        //% subcategory="External" blockHidden=false
        move(kind: LightMove, offset: number): void;

        //% subcategory="External" blockHidden=false
        photonForward(steps: number): void;

        //% subcategory="External" blockHidden=false
        photonFlip(): void;

        //% subcategory="External" blockHidden=false
        setPhotonColor(color: number): void;

        //% subcategory="External" blockHidden=false
        setPhotonMode(mode: PhotonMode): void;

        //% subcategory="External" blockHidden=false
        showAnimation(animation: NeoPixelAnimation, duration: number): void;

        //% subcategory="External" blockHidden=false
        showAnimationFrame(animation: NeoPixelAnimation): void;

        //% subcategory="External" blockHidden=false
        stopAllAnimations(): void;

        //% subcategory="External" blockHidden=false
        setBuffered(on: boolean): void;
    }
}