
namespace pxsim {
    export interface AllocatorOpts {
        boardDef: BoardDefinition,
        cmpDefs: Map<ComponentDefinition>,
        fnArgs: any,
        getBBCoord: (loc: BBRowCol) => visuals.Coord,
        cmpList: string[]
    };
    export interface AllocatorResult {
        powerWires: WireInst[],
        components: CmpAndWireInst[]
    }

    export interface CmpAndWireInst {
        component: CmpInst,
        wires: WireInst[]
    }
    export interface CmpInst {
        name: string,
        breadboardStartColumn: number,
        breadboardStartRow: string,
        assemblyStep: number,
        visual: string | ComponentVisualDefinition,
        microbitPins: string[],
        otherArgs?: string[],
    }
    export interface WireInst {
        start: Loc,
        end: Loc,
        color: string,
        assemblyStep: number
    };
    interface PartialCmpAlloc {
        name: string,
        def: ComponentDefinition,
        pinsAssigned: string[],
        pinsNeeded: number | number[],
        breadboardColumnsNeeded: number,
        otherArgs?: string[],
    }

    interface AllocLocOpts {
        nearestBBPin?: BBRowCol,
        startColumn?: number,
        cmpGPIOPins?: string[],
    };
    interface AllocWireOpts {
        startColumn: number,
        cmpGPIOPins: string[],
    }
    interface AllocBlock {
        cmpIdx: number,
        cmpBlkIdx: number,
        gpioNeeded: number,
        gpioAssigned: string[]
    }
    function copyDoubleArray(a: string[][]) {
         return a.map(b => b.map(p => p));
    }
    function readPin(arg: string): string {
        U.assert(!!arg, "Invalid pin: " + arg);
        let pin = arg.split("DigitalPin.")[1];
        return pin;
    }
    function mkReverseMap(map: {[key: string]: string}) {
        let origKeys: string[] = [];
        let origVals: string[] = [];
        for (let key in map) {
            origKeys.push(key);
            origVals.push(map[key]);
        }
        let newMap: {[key: string]: string} = {};
        for (let i = 0; i < origKeys.length; i++) {
            let newKey = origVals[i];
            let newVal = origKeys[i];
            newMap[newKey] = newVal;
        }
        return newMap;
    }
    class Allocator {
        private opts: AllocatorOpts;
        private availablePowerPins = {
            top: {
                threeVolt: mkRange(26, 51).map(n => <BBRowCol>["+", `${n}`]),
                ground: mkRange(26, 51).map(n => <BBRowCol>["-", `${n}`]),
            },
            bottom: {
                threeVolt: mkRange(1, 26).map(n => <BBRowCol>["+", `${n}`]),
                ground: mkRange(1, 26).map(n => <BBRowCol>["-", `${n}`]),
            },
        };

        constructor(opts: AllocatorOpts) {
            this.opts = opts;
        }

        private allocateLocation(location: LocationDefinition, opts: AllocLocOpts): Loc {
            if (location === "ground" || location === "threeVolt") {
                U.assert(!!opts.nearestBBPin);
                let nearLoc = opts.nearestBBPin;
                let nearestCoord = this.opts.getBBCoord(nearLoc);
                let firstTopAndBot = [
                    this.availablePowerPins.top.ground[0] || this.availablePowerPins.top.threeVolt[0],
                    this.availablePowerPins.bottom.ground[0] || this.availablePowerPins.bottom.threeVolt[0]
                ].map(loc => {
                    return this.opts.getBBCoord(loc);
                });
                if (!firstTopAndBot[0] || !firstTopAndBot[1]) {
                    console.debug(`No more available "${location}" locations!`);
                    //TODO
                }
                let nearTop = visuals.findClosestCoordIdx(nearestCoord, firstTopAndBot) == 0;
                let pins: BBRowCol[];
                if (nearTop) {
                    if (location === "ground") {
                        pins = this.availablePowerPins.top.ground;
                    } else if (location === "threeVolt") {
                        pins = this.availablePowerPins.top.threeVolt;
                    }
                } else {
                    if (location === "ground") {
                        pins = this.availablePowerPins.bottom.ground;
                    } else if (location === "threeVolt") {
                        pins = this.availablePowerPins.bottom.threeVolt;
                    }
                }
                let pinCoords = pins.map(rowCol => {
                    return this.opts.getBBCoord(rowCol);
                });
                let pinIdx = visuals.findClosestCoordIdx(nearestCoord, pinCoords);
                let pin = pins[pinIdx];
                if (nearTop) {
                    this.availablePowerPins.top.ground.splice(pinIdx, 1);
                    this.availablePowerPins.top.threeVolt.splice(pinIdx, 1);
                } else {
                    this.availablePowerPins.bottom.ground.splice(pinIdx, 1);
                    this.availablePowerPins.bottom.threeVolt.splice(pinIdx, 1);
                }
                return {type: "breadboard", rowCol: pin};
            } else if (location[0] === "breadboard") {
                U.assert(!!opts.startColumn);
                let row = <string>location[1];
                let col = (<number>location[2] + opts.startColumn).toString();
                return {type: "breadboard", rowCol: [row, col]}
            } else if (location[0] === "GPIO") {
                U.assert(!!opts.cmpGPIOPins);
                let idx = <number>location[1];
                let pin = opts.cmpGPIOPins[idx];
                return {type: "dalboard", pin: pin};
            } else {
                //TODO
                U.assert(false);
                return null;
            }
        }
        private allocatePowerWires(): WireInst[] {
            let boardGround = this.opts.boardDef.groundPins[0] || null;
            if (!boardGround) {
                console.log("No available ground pin on board!");
                //TODO
            }
            let threeVoltPin = this.opts.boardDef.threeVoltPins[0] || null;
            if (!threeVoltPin) {
                console.log("No available 3.3V pin on board!");
                //TODO
            }
            let topLeft: BBRowCol = ["-", "26"];
            let botLeft: BBRowCol = ["-", "1"];
            let topRight: BBRowCol = ["-", "50"];
            let botRight: BBRowCol = ["-", "25"];
            let top: BBRowCol, bot: BBRowCol;
            if (this.opts.boardDef.attachPowerOnRight) {
                top = topRight;
                bot = botRight;
            } else {
                top = topLeft;
                bot = botLeft;
            }
            const GROUND_COLOR = "blue";
            const POWER_COLOR = "red";
            const wires: WireInst[] = [
                {start: this.allocateLocation("ground", {nearestBBPin: top}),
                 end: this.allocateLocation("ground", {nearestBBPin: bot}),
                 color: GROUND_COLOR, assemblyStep: 0},
                {start: this.allocateLocation("ground", {nearestBBPin: top}),
                 end: {type: "dalboard", pin: boardGround},
                color: GROUND_COLOR, assemblyStep: 0},
                {start: this.allocateLocation("threeVolt", {nearestBBPin: top}),
                 end: this.allocateLocation("threeVolt", {nearestBBPin: bot}),
                 color: POWER_COLOR, assemblyStep: 1},
                {start: this.allocateLocation("threeVolt", {nearestBBPin: top}),
                 end: {type: "dalboard", pin: threeVoltPin},
                color: POWER_COLOR, assemblyStep: 1},
            ];
            return wires;
        }
        private allocateWire(wireDef: WireDefinition, opts: AllocWireOpts): WireInst {
            let ends = [wireDef.start, wireDef.end];
            let endIsPower = ends.map(e => e === "ground" || e === "threeVolt");
            let endInsts = ends.map((e, idx) => !endIsPower[idx] ? this.allocateLocation(e, opts) : null)
            endInsts = endInsts.map((e, idx) => {
                if (e)
                    return e;
                let locInst = <BBLoc>endInsts[1 - idx];
                let l = this.allocateLocation(ends[idx], {
                    nearestBBPin: locInst.rowCol,
                    startColumn: opts.startColumn,
                    cmpGPIOPins: opts.cmpGPIOPins
                });
                return l;
            });
            return {start: endInsts[0], end: endInsts[1], color: wireDef.color, assemblyStep: wireDef.assemblyStep};
        }
        private allocatePartialCmps(): PartialCmpAlloc[] {
            let cmpNmAndDefs = this.opts.cmpList.map(cmpName => <[string, ComponentDefinition]>[cmpName, this.opts.cmpDefs[cmpName]]).filter(d => !!d[1]);
            let cmpNmsList = cmpNmAndDefs.map(p => p[0]);
            let cmpDefsList = cmpNmAndDefs.map(p => p[1]);
            let partialCmps: PartialCmpAlloc[] = [];
            cmpDefsList.forEach((def, idx) => {
                let nm = cmpNmsList[idx];
                if (def.pinAllocation.type === "predefined") {
                    let mbPins = (<PredefinedPinAlloc>def.pinAllocation).pins;
                    let pinsAssigned = mbPins.map(p => this.opts.boardDef.gpioPinMap[p]);
                    partialCmps.push({
                        name: nm,
                        def: def,
                        pinsAssigned: pinsAssigned,
                        pinsNeeded: 0,
                        breadboardColumnsNeeded: def.breadboardColumnsNeeded,
                    });
                } else if (def.pinAllocation.type === "factoryfunction") {
                    let fnPinAlloc = (<FactoryFunctionPinAlloc>def.pinAllocation);
                    let fnNm = fnPinAlloc.functionName;
                    let fnsAndArgs = <string[]>this.opts.fnArgs[fnNm];
                    let success = false;
                    if (fnsAndArgs && fnsAndArgs.length) {
                        let pinArgPoses = fnPinAlloc.pinArgPositions;
                        let otherArgPoses = fnPinAlloc.otherArgPositions || [];
                        fnsAndArgs.forEach(fnArgsStr => {
                            let fnArgsSplit = fnArgsStr.split(",");
                            let pinArgs: string[] = [];
                            pinArgPoses.forEach(i => {
                                pinArgs.push(fnArgsSplit[i]);
                            });
                            let mbPins = pinArgs.map(arg => readPin(arg));
                            let otherArgs: string[] = [];
                            otherArgPoses.forEach(i => {
                                otherArgs.push(fnArgsSplit[i]);
                            });
                            let pinsAssigned = mbPins.map(p => this.opts.boardDef.gpioPinMap[p]);
                            partialCmps.push({
                                name: nm,
                                def: def,
                                pinsAssigned: pinsAssigned,
                                pinsNeeded: 0,
                                breadboardColumnsNeeded: def.breadboardColumnsNeeded,
                                otherArgs: otherArgs.length ? otherArgs : null,
                            });
                        });
                    } else {
                        // failed to find pin allocation from callsites
                        console.debug("Failed to read pin(s) from callsite for: " + fnNm);
                        let pinsNeeded = fnPinAlloc.pinArgPositions.length;
                        partialCmps.push({
                            name: nm,
                            def: def,
                            pinsAssigned: [],
                            pinsNeeded: pinsNeeded,
                            breadboardColumnsNeeded: def.breadboardColumnsNeeded,
                        });
                    }
                } else if (def.pinAllocation.type === "auto") {
                    let pinsNeeded = (<AutoPinAlloc>def.pinAllocation).gpioPinsNeeded;
                    partialCmps.push({
                        name: nm,
                        def: def,
                        pinsAssigned: [],
                        pinsNeeded: pinsNeeded,
                        breadboardColumnsNeeded: def.breadboardColumnsNeeded,
                    });
                }
            });
            return partialCmps;
        }
        private allocateGPIOPins(partialCmps: PartialCmpAlloc[]): string[][] {
            let availableGPIOBlocks = copyDoubleArray(this.opts.boardDef.gpioPinBlocks);
            let sortAvailableGPIOBlocks = () => availableGPIOBlocks.sort((a, b) => a.length - b.length); //smallest blocks first
            // determine blocks needed
            let blockAssignments: AllocBlock[] = [];
            let preassignedPins: string[] = [];
            partialCmps.forEach((cmp, idx) => {
                if (cmp.pinsAssigned && cmp.pinsAssigned.length) {
                    //already assigned
                    blockAssignments.push({cmpIdx: idx, cmpBlkIdx: 0, gpioNeeded: 0, gpioAssigned: cmp.pinsAssigned});
                    preassignedPins = preassignedPins.concat(cmp.pinsAssigned);
                } else if (cmp.pinsNeeded) {
                    if (typeof cmp.pinsNeeded === "number") {
                        //individual pins
                        for (let i = 0; i < cmp.pinsNeeded; i++) {
                            blockAssignments.push(
                                {cmpIdx: idx, cmpBlkIdx: 0, gpioNeeded: 1, gpioAssigned: []});
                        }
                    } else {
                        //blocks of pins
                        let blocks = <number[]>cmp.pinsNeeded;
                        blocks.forEach((numNeeded, blkIdx) => {
                            blockAssignments.push(
                                {cmpIdx: idx, cmpBlkIdx: blkIdx, gpioNeeded: numNeeded, gpioAssigned: []});
                        });
                    }
                }
            });
            // remove assigned blocks
            availableGPIOBlocks.forEach(blks => {
                for (let i = blks.length - 1; 0 <= i; i--) {
                    let pin = blks[i];
                    if (0 <= preassignedPins.indexOf(pin)) {
                        blks.splice(i, 1);
                    }
                }
            });
            // sort by size of blocks
            let sortBlockAssignments = () => blockAssignments.sort((a, b) => b.gpioNeeded - a.gpioNeeded); //largest blocks first
            // allocate each block
            if (0 < blockAssignments.length && 0 < availableGPIOBlocks.length) {
                do {
                    sortBlockAssignments();
                    sortAvailableGPIOBlocks();
                    let assignment = blockAssignments[0];
                    let smallestAvailableBlockThatFits: string[];
                    for (let j = 0; j < availableGPIOBlocks.length; j++) {
                        smallestAvailableBlockThatFits = availableGPIOBlocks[j];
                        if (assignment.gpioNeeded <= availableGPIOBlocks[j].length) {
                            break;
                        }
                    }
                    if (!smallestAvailableBlockThatFits || smallestAvailableBlockThatFits.length <= 0) {
                        break; // out of pins
                    }
                    while (0 < assignment.gpioNeeded && 0 < smallestAvailableBlockThatFits.length) {
                        assignment.gpioNeeded--;
                        let pin = smallestAvailableBlockThatFits[0];
                        smallestAvailableBlockThatFits.splice(0, 1);
                        assignment.gpioAssigned.push(pin);
                    }
                    sortBlockAssignments();
                } while (0 < blockAssignments[0].gpioNeeded);
            }
            if (0 < blockAssignments.length && 0 < blockAssignments[0].gpioNeeded) {
                console.debug("Not enough GPIO pins!");
                return null;
            }
            let cmpGPIOPinBlocks: string[][][] = partialCmps.map((def, cmpIdx) => {
                if (!def)
                    return null;
                let assignments = blockAssignments.filter(a => a.cmpIdx === cmpIdx);
                let gpioPins: string[][] = [];
                for (let i = 0; i < assignments.length; i++) {
                    let a = assignments[i];
                    let blk = gpioPins[a.cmpBlkIdx] || (gpioPins[a.cmpBlkIdx] = []);
                    a.gpioAssigned.forEach(p => blk.push(p));
                }
                return gpioPins;
            });
            let cmpGPIOPins = cmpGPIOPinBlocks.map(blks => blks.reduce((p, n) => p.concat(n), []));
            return cmpGPIOPins;
        }
        private allocateColumns(partialCmps: PartialCmpAlloc[]): number[] {
            let componentsCount = partialCmps.length;
            let totalAvailableSpace = 30; //TODO allow multiple breadboards
            let totalSpaceNeeded = partialCmps.map(d => d.breadboardColumnsNeeded).reduce((p, n) => p + n, 0);
            let extraSpace = totalAvailableSpace - totalSpaceNeeded;
            if (extraSpace <= 0) {
                console.log("Not enough breadboard space!");
                //TODO
            }
            let padding = Math.floor(extraSpace / (componentsCount - 1 + 2));
            let componentSpacing = padding; //Math.floor(extraSpace/(componentsCount-1));
            let totalCmpPadding = extraSpace - componentSpacing * (componentsCount - 1);
            let leftPadding = Math.floor(totalCmpPadding / 2);
            let rightPadding = Math.ceil(totalCmpPadding / 2);
            let nextAvailableCol = 1 + leftPadding;
            let cmpStartCol = partialCmps.map(cmp => {
                let col = nextAvailableCol;
                nextAvailableCol += cmp.breadboardColumnsNeeded + componentSpacing;
                return col;
            });
            return cmpStartCol;
        }
        private allocateComponent(partialCmp: PartialCmpAlloc, startColumn: number, microbitPins: string[]): CmpInst {
            return {
                name: partialCmp.name,
                breadboardStartColumn: startColumn,
                breadboardStartRow: partialCmp.def.breadboardStartRow,
                assemblyStep: partialCmp.def.assemblyStep,
                visual: partialCmp.def.visual,
                microbitPins: microbitPins,
                otherArgs: partialCmp.otherArgs,
            };
        }
        public allocateAll(): AllocatorResult {
            let cmpList = this.opts.cmpList;
            let basicWires: WireInst[] = [];
            let cmpsAndWires: CmpAndWireInst[] = [];
            if (cmpList.length > 0) {
                basicWires = this.allocatePowerWires();
                let partialCmps = this.allocatePartialCmps();
                let cmpGPIOPins = this.allocateGPIOPins(partialCmps);
                let reverseMap = mkReverseMap(this.opts.boardDef.gpioPinMap);
                let cmpMicrobitPins = cmpGPIOPins.map(pins => pins.map(p => reverseMap[p]));
                let cmpStartCol = this.allocateColumns(partialCmps);
                let cmps = partialCmps.map((c, idx) => this.allocateComponent(c, cmpStartCol[idx], cmpMicrobitPins[idx]));
                let wires = partialCmps.map((c, idx) => c.def.wires.map(d => this.allocateWire(d, {
                    cmpGPIOPins: cmpGPIOPins[idx],
                    startColumn: cmpStartCol[idx],
                })));
                cmpsAndWires = cmps.map((c, idx) => {
                    return {component: c, wires: wires[idx]}
                });
            }
            return {
                powerWires: basicWires,
                components: cmpsAndWires
            };
        }
    }

    export function allocateDefinitions(opts: AllocatorOpts): AllocatorResult {
        return new Allocator(opts).allocateAll();
    }
}