/// <reference path="../node_modules/pxt-core/typings/bluebird/bluebird.d.ts"/>
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../libs/microbit/dal.d.ts"/>
/// <reference path="./visuals/neopixel.ts"/>

namespace pxsim {
    export interface PinBlockDefinition {
        x: number,
        y: number,
        labelPosition: "above" | "below";
        labels: string[]
    }
    export interface BoardImageDefinition {
        image: string,
        outlineImage?: string,
        width: number,
        height: number,
        pinDist: number,
        pinBlocks: PinBlockDefinition[],
    };
    export interface BoardDefinition {
        visual: BoardImageDefinition | string,
        gpioPinBlocks?: string[][],
        gpioPinMap: {[pin: string]: string},
        groundPins: string[],
        threeVoltPins: string[],
        attachPowerOnRight?: boolean,
        onboardComponents?: string[]
        useCrocClips?: boolean,
        marginWhenBreadboarding?: [number, number, number, number],
        spiPins?: {
            MOSI: string,
            MISO: string,
            SCK: string,
        },
        i2cPins?: {
            SDA: string,
            SCL: string,
        },
        analogInPins?: string[], //TODO: implement allocation
    }
    export interface FactoryFunctionPinAlloc {
        type: "factoryfunction",
        functionName: string,
        pinArgPositions: number[],
        otherArgPositions?: number[],
    }
    export interface PredefinedPinAlloc {
        type: "predefined",
        pins: string[],
    }
    export interface AutoPinAlloc {
        type: "auto",
        gpioPinsNeeded: number | number[],
    }
    export interface PartVisualDefinition {
        image: string,
        width: number,
        height: number,
        pinDist: number,
        extraColumnOffset?: number,
        firstPin: [number, number],
    }
    export interface PartDefinition {
        visual: string | PartVisualDefinition,
        breadboardColumnsNeeded: number,
        breadboardStartRow: string,
        wires: WireDefinition[],
        assemblyStep: number,
        pinAllocation: FactoryFunctionPinAlloc | PredefinedPinAlloc | AutoPinAlloc,
    }
    export interface WireDefinition {
        start: WireLocationDefinition,
        end: WireLocationDefinition,
        color: string,
        assemblyStep: number
    };
    export type SPIPin = "MOSI" | "MISO" | "SCK";
    export type I2CPin = "SDA" | "SCL";
    export type WireLocationDefinition = (
          ["breadboard", string, number]
        | ["GPIO", number]
        | SPIPin
        | I2CPin
        | "ground"
        | "threeVolt");

    export const MICROBIT_DEF: BoardDefinition = {
        visual: "microbit",
        gpioPinBlocks: [
            ["P0"], ["P1"], ["P2"],
            ["P3"],
            ["P4", "P5", "P6", "P7"],
            ["P8", "P9", "P10", "P11", "P12"],
            ["P16"],
        ],
        gpioPinMap: {
            "P0": "P0",
            "P1": "P1",
            "P2": "P2",
            "P3": "P3",
            "P4": "P4",
            "P5": "P5",
            "P6": "P6",
            "P7": "P7",
            "P8": "P8",
            "P9": "P9",
            "P10": "P10",
            "P11": "P11",
            "P12": "P12",
            "P13": "P13",
            "P14": "P14",
            "P15": "P15",
            "P16": "P16",
            "P19": "P19",
            "P20": "P20",
        },
        spiPins: {
            MOSI: "P15",
            MISO: "P14",
            SCK: "P13",
        },
        i2cPins: {
            SDA: "P20",
            SCL: "P19",
        },
        analogInPins: ["P0", "P1", "P2", "P3", "P10"],
        groundPins: ["GND"],
        threeVoltPins: ["+3v3"],
        attachPowerOnRight: true,
        onboardComponents: ["buttonpair", "ledmatrix", "speaker"],
        useCrocClips: true,
        marginWhenBreadboarding: [0, 0, 80, 0],
    }

    export const PART_DEFINITIONS: Map<PartDefinition> = {
        "ledmatrix": {
            visual: "ledmatrix",
            breadboardColumnsNeeded: 8,
            breadboardStartRow: "h",
            pinAllocation: {
                type: "auto",
                gpioPinsNeeded: [5, 5],
            },
            assemblyStep: 0,
            wires: [
                {start: ["breadboard", `j`, 0], end: ["GPIO", 5], color: "purple", assemblyStep: 1},
                {start: ["breadboard", `j`, 1], end: ["GPIO", 6], color: "purple", assemblyStep: 1},
                {start: ["breadboard", `j`, 2], end: ["GPIO", 7], color: "purple", assemblyStep: 1},
                {start: ["breadboard", `j`, 3], end: ["GPIO", 8], color: "purple", assemblyStep: 1},
                {start: ["breadboard", `a`, 7], end: ["GPIO", 9], color: "purple", assemblyStep: 1},
                {start: ["breadboard", `a`, 0], end: ["GPIO", 0], color: "green", assemblyStep: 2},
                {start: ["breadboard", `a`, 1], end: ["GPIO", 1], color: "green", assemblyStep: 2},
                {start: ["breadboard", `a`, 2], end: ["GPIO", 2], color: "green", assemblyStep: 2},
                {start: ["breadboard", `a`, 3], end: ["GPIO", 3], color: "green", assemblyStep: 2},
                {start: ["breadboard", `j`, 4], end: ["GPIO", 4], color: "green", assemblyStep: 2},
            ]
        },
        "buttonpair": {
            visual: "buttonpair",
            breadboardColumnsNeeded: 6,
            breadboardStartRow: "f",
            pinAllocation: {
                type: "predefined",
                pins: ["P13", "P12"],
            },
            assemblyStep: 0,
            wires: [
                {start: ["breadboard", "j", 0], end: ["GPIO", 0], color: "yellow", assemblyStep: 1},
                {start: ["breadboard", "a", 2], end: "ground", color: "blue", assemblyStep: 1},
                {start: ["breadboard", "j", 3], end: ["GPIO", 1], color: "orange", assemblyStep: 2},
                {start: ["breadboard", "a", 5], end: "ground", color: "blue", assemblyStep: 2},
            ],
        },
        "neopixel": {
            visual: "neopixel",
            breadboardColumnsNeeded: 5,
            breadboardStartRow: "h",
            pinAllocation: {
                type: "factoryfunction",
                functionName: "neopixel.create",
                pinArgPositions: [0],
                otherArgPositions: [1],
            },
            assemblyStep: 0,
            wires: [
                {start: ["breadboard", "j", 1], end: "ground", color: "blue", assemblyStep: 1},
                {start: ["breadboard", "j", 2], end: "threeVolt", color: "red", assemblyStep: 2},
                {start: ["breadboard", "j", 3], end: ["GPIO", 0], color: "green", assemblyStep: 2},
            ],
        },
        "speaker": {
            visual: {
                image: "/static/hardware/speaker.svg",
                width: 500,
                height: 500,
                firstPin: [180, 135],
                pinDist: 70,
                extraColumnOffset: 1,
            },
            breadboardColumnsNeeded: 5,
            breadboardStartRow: "f",
            pinAllocation: {
                type: "auto",
                gpioPinsNeeded: 1,
            },
            assemblyStep: 0,
            wires: [
                {start: ["breadboard", "j", 1], end: ["GPIO", 0], color: "#ff80fa", assemblyStep: 1},
                {start: ["breadboard", "j", 3], end: "ground", color: "blue", assemblyStep: 1},
            ],
        },
        "max6675": {
            visual: {
                image: "/static/hardware/max6675.svg",
                width: 58,
                height: 64,
                firstPin: [11, 5],
                pinDist: 7.2,
                extraColumnOffset: 2,
            },
            breadboardColumnsNeeded: 10,
            breadboardStartRow: "h",
            pinAllocation: {
                type: "factoryfunction",
                functionName: "max6675.temperature",
                pinArgPositions: [0]
            },
            assemblyStep: 0,
            wires: [
                {start: ["breadboard", "j", 2], end: "SCK", color: "green", assemblyStep: 1},
                {start: ["breadboard", "j", 3], end: ["GPIO", 0], color: "blue", assemblyStep: 1},
                {start: ["breadboard", "j", 4], end: "MISO", color: "orange", assemblyStep: 1},
                {start: ["breadboard", "j", 5], end: "ground", color: "blue", assemblyStep: 0},
                {start: ["breadboard", "j", 6], end: "threeVolt", color: "red", assemblyStep: 1},
            ],
        },
    }

    export const builtinComponentSimVisual: Map<() => visuals.IBoardComponent<any>> = {
        "buttonpair": () => new visuals.ButtonPairView(),
        "ledmatrix": () => new visuals.LedMatrixView(),
        "neopixel": () => new visuals.NeoPixelView(),
    };
    export const builtinComponentSimState: Map<(d: DalBoard) => any> = {
        "buttonpair": (d: DalBoard) => d.buttonPairState,
        "ledmatrix": (d: DalBoard) => d.ledMatrixState,
        "edgeconnector": (d: DalBoard) => d.edgeConnectorState,
        "serial": (d: DalBoard) => d.serialState,
        "radio": (d: DalBoard) => d.radioState,
        "thermometer": (d: DalBoard) => d.thermometerState,
        "accelerometer": (d: DalBoard) => d.accelerometerState,
        "compass": (d: DalBoard) => d.compassState,
        "lightsensor": (d: DalBoard) => d.lightSensorState,
        "neopixel": (d: DalBoard) => d.neopixelState,
    };
    export const builtinComponentPartVisual: Map<(xy: visuals.Coord) => visuals.SVGElAndSize> = {
        "buttonpair": (xy: visuals.Coord) => visuals.mkBtnSvg(xy),
        "ledmatrix": (xy: visuals.Coord) => visuals.mkLedMatrixSvg(xy, 8, 8),
        "neopixel": (xy: visuals.Coord) => visuals.mkNeoPixelPart(xy),
    };

    //TODO: add multiple board support
    export const CURRENT_BOARD = MICROBIT_DEF;
}