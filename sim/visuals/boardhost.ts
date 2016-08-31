namespace pxsim.visuals {
    export class BoardHost {
        private components: IBoardComponent<any>[] = [];
        private wireFactory: WireFactory;
        private breadboard: Breadboard;
        private fromBBCoord: (xy: Coord) => Coord;
        private fromMBCoord: (xy: Coord) => Coord;
        private boardView: BoardView;
        private view: SVGSVGElement;
        private style: SVGStyleElement;
        private defs: SVGDefsElement;
        private state: DalBoard;

        constructor(state: DalBoard, boardDef: BoardDefinition, cmpsList: string[], cmpDefs: Map<ComponentDefinition>, fnArgs: any) {
            this.state = state;
            let onboardCmps = boardDef.onboardComponents || [];
            let activeComponents = (cmpsList || []).filter(c => onboardCmps.indexOf(c) < 0);
            activeComponents.sort();

          //  if (boardDef.visual === "microbit") {
                this.boardView = new visuals.MicrobitBoardSvg({
                    runtime: runtime,
                    theme: visuals.randomTheme(),
                    disableTilt: false
                });
         //   } else {
                //TODO: port Arduino/generic board
                // this.boardView = new visuals.GenericBoardSvg({
                //     boardDef: boardDef,
                //     activeComponents: activeComponents,
                //     componentDefinitions: cmpDefs,
                //     runtime: runtime,
                //     fnArgs: fnArgs
                // })
        //    }

            const VIEW_WIDTH = "100%";
            const VIEW_HEIGHT = "100%";

            if (0 < activeComponents.length) {
                this.breadboard = new Breadboard();
                let composition = composeSVG({
                    el1: this.boardView.getView(),
                    scaleUnit1: this.boardView.getPinDist(),
                    el2: this.breadboard.getSVGAndSize(),
                    scaleUnit2: this.breadboard.getPinDist(),
                    margin: [0, 0, 10, 0],
                    middleMargin: 80,
                    maxWidth: VIEW_WIDTH,
                    maxHeight: VIEW_HEIGHT,
                });
                let under = composition.under;
                let over = composition.over;
                this.view = composition.host;
                let edges = composition.edges;
                this.fromMBCoord = composition.toHostCoord1;
                this.fromBBCoord = composition.toHostCoord2;
                let pinDist = composition.scaleUnit;

                this.style = <SVGStyleElement>svg.child(this.view, "style", {});
                this.defs = <SVGDefsElement>svg.child(this.view, "defs", {});

                this.wireFactory = new WireFactory(under, over, edges, this.style, this.getLocCoord.bind(this));

                let allocRes = allocateDefinitions({
                    boardDef: boardDef,
                    cmpDefs: cmpDefs,
                    fnArgs: fnArgs,
                    getBBCoord: this.breadboard.getCoord.bind(this.breadboard),
                    cmpList: activeComponents,
                });

                this.addAll(allocRes);
            } else {
                let el = this.boardView.getView().el;
                this.view = el;
                svg.hydrate(this.view, {
                    width: VIEW_WIDTH,
                    height: VIEW_HEIGHT,
                });
            }

            this.state.updateSubscribers.push(() => this.updateState());
        }

        public getView(): SVGElement {
            return this.view;
        }

        private updateState() {
            this.components.forEach(c => c.updateState());
        }

        private getBBCoord(rowCol: BBRowCol) {
            let bbCoord = this.breadboard.getCoord(rowCol);
            return this.fromBBCoord(bbCoord);
        }
        private getPinCoord(pin: string) {
            let boardCoord = this.boardView.getCoord(pin);
            return this.fromMBCoord(boardCoord);
        }
        public getLocCoord(loc: Loc): Coord {
            let coord: Coord;
            if (loc.type === "breadboard") {
                let rowCol = (<BBLoc>loc).rowCol;
                coord = this.getBBCoord(rowCol);
            } else {
                let pinNm = (<BoardLoc>loc).pin;
                coord = this.getPinCoord(pinNm);
            }
            if (!coord) {
                console.error("Unknown location: " + name)
                return [0, 0];
            }
            return coord;
        }

        public addComponent(cmpDesc: CmpInst): IBoardComponent<any> {
            let cmp: IBoardComponent<any> = null;
            if (typeof cmpDesc.visual === "string") {
                let builtinVisual = cmpDesc.visual as string;
                let cnstr = builtinComponentSimVisual[builtinVisual];
                let stateFn = builtinComponentSimState[builtinVisual];
                let cmp = cnstr();
                cmp.init(this.state.bus, stateFn(this.state), this.view, cmpDesc.microbitPins, cmpDesc.otherArgs);
                this.components.push(cmp);
                this.view.appendChild(cmp.element);
                if (cmp.defs)
                    cmp.defs.forEach(d => this.defs.appendChild(d));
                this.style.textContent += cmp.style || "";
                let rowCol = <BBRowCol>[`${cmpDesc.breadboardStartRow}`, `${cmpDesc.breadboardStartColumn}`];
                let coord = this.getBBCoord(rowCol);
                cmp.moveToCoord(coord);
                let getCmpClass = (type: string) => `sim-${type}-cmp`;
                let cls = getCmpClass(name);
                svg.addClass(cmp.element, cls);
                svg.addClass(cmp.element, "sim-cmp");
                cmp.updateTheme();
                cmp.updateState();
            } else {
                //TODO: support generic parts
            }
            return cmp;
        }
        public addWire(inst: WireInst): Wire {
            return this.wireFactory.addWire(inst.start, inst.end, inst.color, true);
        }
        public addAll(basicWiresAndCmpsAndWires: AllocatorResult) {
            let {powerWires, components} = basicWiresAndCmpsAndWires;
            powerWires.forEach(w => this.addWire(w));
            components.forEach((cAndWs, idx) => {
                let {component, wires} = cAndWs;
                wires.forEach(w => this.addWire(w));
                this.addComponent(component);
            });
        }
    }
}