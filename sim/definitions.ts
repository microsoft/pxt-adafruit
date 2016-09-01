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
    export type WireLocationDefinition =
        ["breadboard", string, number] | ["GPIO", number] | "ground" | "threeVolt";

    export const MICROBIT_DEF: BoardDefinition = {
        visual: "microbit",
        gpioPinBlocks: [
            ["P0"], ["P1"], ["P2"],
            ["P3"],
            ["P4", "P5", "P6", "P7"],
            ["P8", "P9", "P10", "P11", "P12"],
            ["P13", "P14", "P15", "P16"],
            ["P19", "P20"],
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
        groundPins: ["GND"],
        threeVoltPins: ["+3v3"],
        attachPowerOnRight: true,
        onboardComponents: ["buttonpair", "ledmatrix"],
        useCrocClips: true,
        marginWhenBreadboarding: [0, 0, 80, 0],
    }
    export const RASPBERRYPI_MODELB: BoardDefinition = {
        visual: {
            image: "/static/hardware/raspberrypi-model-b.svg",
            outlineImage: "/static/hardware/raspberrypi-model-b-outline.svg",
            width: 331,
            height: 230,
            pinDist: 9,
            pinBlocks: [
                { x: 5, y: 31, labelPosition: "above", labels: ["3V3", "SDA", "SCL", "#4", "--", "#17", "#21", "#22", "--", "MOSI", "MISO", "SCLK", "--"]},
                { x: 5, y: 39, labelPosition: "below", labels: ["5V", "--", "GND", "TXD", "RXD", "#18", "--", "#23", "#24", "--", "#25", "CS0", "CS1"]}
            ],
        },
        gpioPinBlocks: [
            ["SDA", "SCL", "#4"],
            ["#17", "#21", "#22"],
            ["MOSI", "MISO", "SCLK"],
            ["TXD", "RXD", "#18"],
            ["#23", "#24"],
            ["#25", "CS0", "CS1"],
        ],
        gpioPinMap: {
            "P0": "SDA",
            "P1": "SCL",
            "P2": "#4",
            "P3": "MOSI",
            "P4": "MISO",
            "P5": "SCLK",
            "P6": "TXD",
            "P7": "RXD",
            "P8": "#18",
            "P9": "#23",
            "P10": "#24",
            "P11": "#25",
            "P12": "CS0",
            "P13": "CS1",
        },
        groundPins: ["GND"],
        threeVoltPins: ["3V3"],
        marginWhenBreadboarding: [20, 0, 40, 0],
    }
    export const SPARKFUN_PHOTON: BoardDefinition = {
        visual: {
            image: "/static/hardware/sparkfun-photon.svg",
            outlineImage: "/static/hardware/sparkfun-photon-outline.svg",
            width: 264.4,
            height: 202.4,
            pinDist: 9.5,
            pinBlocks: [
                {x: 72, y: 6, labelPosition: "below", labels: ["~SCL/D1", "~SDA/D0", " ", "GND0", "SCK/A3", "~MISO/A4", "~MOSI/A5", "SS/A2", "~WKP", "DAC"]},
                {x: 174, y: 6, labelPosition: "below", labels: ["D7", "D6", "D5", "D4", "~D3", "~D2", "~TX", "~RX"]},
                {x: 107, y: 188, labelPosition: "above", labels: [" ", " ", "RESET", "3.3V", "V-USB", "GND1", "GND2", "VIN"]},
                {x: 193, y: 188, labelPosition: "above", labels: ["A0", "A1", "A2", "A3", "A4", "A5"]},
            ],
        },
        gpioPinBlocks: [
            ["~SCL/D1", "~SDA/D0", "SCK/A3", "~MISO/A4", "~MOSI/A5", "SS/A2"],
            ["D7", "D6", "D5", "D4", "~D3", "~D2", "~TX", "~RX"],
            ["A0", "A1", "A2", "A3", "A4", "A5"],
        ],
        gpioPinMap: {
            "P0": "A0",
            "P1": "A1",
            "P2": "A2",
            "P3": "A3",
            "P4": "A4",
            "P5": "A5",
            "P6": "~SDA/D0",
            "P7": "~SCL/D1",
            "P8": "~D2",
            "P9": "~D3",
            "P10": "D4",
            "P11": "D5",
            "P12": "D6",
            "P13": "D7",
            "P14": "SS/A2",
            "P15": "SCK/A3",
            "P16": "~MISO/A4",
            "P19": "~MOSI/A5",
        },
        groundPins: ["GND0", "GND1", "GND2"],
        threeVoltPins: ["3.3V"],
        marginWhenBreadboarding: [20, 0, 40, 0],
    }
    export const ARDUINO_ZERO: BoardDefinition = {
        visual: {
            image: "/static/hardware/arduino-zero.png",
            outlineImage: "/static/hardware/arduino-zero-outline.svg",
            width: 1000,
            height: 762,
            pinDist: 35.5,
            pinBlocks: [
                {x: 276.8, y: 17.8, labelPosition: "below", labels: ["SCL", "SDA", "AREF", "GND0", "~13", "~12", "~11", "~10", "~9", "~8"]},
                {x: 655.5, y: 17.8, labelPosition: "below", labels: ["7", "~6", "~5", "~4", "~3", "2", "TX->1", "RX<-0"]},
                {x: 411.7, y: 704.6, labelPosition: "above", labels: ["ATN", "IOREF", "RESET", "3.3V", "5V", "GND1", "GND2", "VIN"]},
                {x: 732.9, y: 704.6, labelPosition: "above", labels: ["A0", "A1", "A2", "A3", "A4", "A5"]},
            ],
        },
        gpioPinBlocks: [
            ["A0", "A1", "A2", "A3", "A4", "A5"],
            ["~13", "~12", "~11", "~10", "~9", "~8"],
            ["7", "~6", "~5", "~4", "~3", "2", "TX->1", "RX<-0"],
        ],
        gpioPinMap: {
            "P0": "A0",
            "P1": "A1",
            "P2": "A2",
            "P3": "A3",
            "P4": "A4",
            "P5": "A5",
            "P6": "RX<-0",
            "P7": "TX->1",
            "P8": "2",
            "P9": "~3",
            "P10": "~4",
            "P11": "~5",
            "P12": "~6",
            "P13": "7",
            "P14": "~8",
            "P15": "~9",
            "P16": "~10",
            "P19": "~11",
            "P20": "~12",
        },
        groundPins: ["GND0", "GND1", "GND2"],
        threeVoltPins: ["3.3V"],
        marginWhenBreadboarding: [20, 0, 40, 0],
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
    //export const CURRENT_BOARD = MICROBIT_DEF;
    export const CURRENT_BOARD = ARDUINO_ZERO;
}