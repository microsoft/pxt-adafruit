
declare namespace light {

    interface NeoPixelStrip {

        //% subcategory="External" blockHidden=true
        graph(value: number, high: number): void;

        //% subcategory="External" blockHidden=true
        setPixelColor(pixeloffset: number, color: number): void;

        //% subcategory="External" blockHidden=true
        pixelColor(pixeloffset: number): number;

        //% subcategory="External" blockHidden=true
        setPixelWhiteLED(pixeloffset: number, white: number): void;

        //% subcategory="External" blockHidden=true
        show(): void;

        //% subcategory="External" blockHidden=true
        clear(): void;

        //% subcategory="External" blockHidden=true
        length(): number;

        //% subcategory="External" blockHidden=true
        setBrightness(brightness: number): void;

        //% subcategory="External" blockHidden=true
        brightness(): number;

        //% subcategory="External" blockHidden=true
        range(start: number, length: number): NeoPixelStrip;

        //% subcategory="External" blockHidden=true
        move(kind: LightMove, offset: number): void;

        //% subcategory="External" blockHidden=true
        photonForward(steps: number): void;

        //% subcategory="External" blockHidden=true
        photonFlip(): void;

        //% subcategory="External" blockHidden=true
        setPhotonColor(color: number): void;

        //% subcategory="External" blockHidden=true
        setPhotonMode(mode: PhotonMode): void;

        //% subcategory="External" blockHidden=true
        showAnimation(animation: NeoPixelAnimation, duration: number): void;

        //% subcategory="External" blockHidden=true
        showAnimationFrame(animation: NeoPixelAnimation): void;

        //% subcategory="External" blockHidden=true
        stopAllAnimations(): void;

        //% subcategory="External" blockHidden=true
        setBuffered(on: boolean): void;
    }
}

declare interface light {

    //% subcategory="External" blockHidden=true
    createNeoPixelStrip(
        pin: DigitalPin,
        numleds: number,
        mode?: NeoPixelMode
    ): light.NeoPixelStrip;
}