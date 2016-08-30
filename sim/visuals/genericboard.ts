/// <reference path="../../node_modules/pxt-core/typings/bluebird/bluebird.d.ts"/>
/// <reference path="../../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../../libs/microbit/dal.d.ts"/>

namespace pxsim.visuals {
    const svg = pxsim.svg;

    export interface IBoardSvgProps {
        runtime: pxsim.Runtime;
        boardDef: BoardDefinition;
        disableTilt?: boolean;
        activeComponents: string[];
        fnArgs?: any;
        componentDefinitions: Map<ComponentDefinition>;
    }

    export const VIEW_WIDTH = 498;
    export const VIEW_HEIGHT = 725;
    const TOP_MARGIN = 20;
    const MID_MARGIN = 40;
    const BOT_MARGIN = 20;
    const PIN_LBL_SIZE = PIN_DIST * 0.7;
    const PIN_LBL_HOVER_SIZE = PIN_LBL_SIZE * 1.5;
    const SQUARE_PIN_WIDTH = PIN_DIST * 0.66666;
    const SQUARE_PIN_HOVER_WIDTH = PIN_DIST * 0.66666 + PIN_DIST / 3.0;

    export type ComputedBoardDimensions = {
        scaleFn: (n: number) => number,
        height: number,
        width: number,
        xOff: number,
        yOff: number
    };
    export function getBoardDimensions(vis: BoardImageDefinition): ComputedBoardDimensions {
        let scaleFn = (n: number) => n * (PIN_DIST / vis.pinDist);
        let width = scaleFn(vis.width);
        return {
            scaleFn: scaleFn,
            height: scaleFn(vis.height),
            width: width,
            xOff: (VIEW_WIDTH - width) / 2.0,
            yOff: TOP_MARGIN
        }
    }

    export const BOARD_SYTLE = `
        .noselect {
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none;   /* Chrome/Safari/Opera */
            -khtml-user-select: none;    /* Konqueror */
            -moz-user-select: none;      /* Firefox */
            -ms-user-select: none;       /* Internet Explorer/Edge */
            user-select: none;           /* Non-prefixed version, currently
                                            not supported by any browser */
        }
        svg.sim.grayscale {
            -moz-filter: grayscale(1);
            -webkit-filter: grayscale(1);
            filter: grayscale(1);
        }

        .sim-text {
            font-family:"Lucida Console", Monaco, monospace;
            font-size:25px;
            fill:#fff;
            pointer-events: none;
        }

        /* animations */
        .sim-theme-glow {
            animation-name: sim-theme-glow-animation;
            animation-timing-function: ease-in-out;
            animation-direction: alternate;
            animation-iteration-count: infinite;
            animation-duration: 1.25s;
        }
        @keyframes sim-theme-glow-animation {
            from { opacity: 1; }
            to   { opacity: 0.75; }
        }

        .sim-flash {
            animation-name: sim-flash-animation;
            animation-duration: 0.1s;
        }

        @keyframes sim-flash-animation {
            from { fill: yellow; }
            to   { fill: default; }
        }

        .sim-flash-stroke {
            animation-name: sim-flash-stroke-animation;
            animation-duration: 0.4s;
            animation-timing-function: ease-in;
        }

        @keyframes sim-flash-stroke-animation {
            from { stroke: yellow; }
            to   { stroke: default; }
        }

        .sim-board-pin {
            fill:#999;
            stroke:#000;
            stroke-width:${PIN_DIST / 3.0}px;
        }
        .sim-board-pin-lbl {
            fill: #333;
        }
        .gray-cover {
            fill:#FFF;
            opacity: 0.7;
            stroke-width:0;
            visibility: hidden;
        }
        .sim-board-pin-hover {
            visibility: hidden;
            pointer-events: all;
            stroke-width:${PIN_DIST / 6.0}px;
        }
        .sim-board-pin-hover:hover {
            visibility: visible;
        }
        .sim-board-pin-lbl {
            visibility: hidden;
        }
        .sim-board-outline .sim-board-pin-lbl {
            visibility: visible;
        }
        .sim-board-pin-lbl {
            fill: #555;
        }
        .sim-board-pin-lbl-hover {
            fill: red;
        }
        .sim-board-outline .sim-board-pin-lbl-hover {
            fill: black;
        }
        .sim-board-pin-lbl,
        .sim-board-pin-lbl-hover {
            font-family:"Lucida Console", Monaco, monospace;
            pointer-events: all;
            stroke-width: 0;
        }
        .sim-board-pin-lbl-hover {
            visibility: hidden;
        }
        .sim-board-outline .sim-board-pin-hover:hover + .sim-board-pin-lbl,
        .sim-board-pin-lbl.highlight {
            visibility: hidden;
        }
        .sim-board-outline .sim-board-pin-hover:hover + * + .sim-board-pin-lbl-hover,
        .sim-board-pin-lbl-hover.highlight {
            visibility: visible;
        }
        /* Graying out */
        .grayed .sim-board-pin-lbl:not(.highlight) {
            fill: #AAA;
        }
        .grayed .sim-board-pin:not(.highlight) {
            fill:#BBB;
            stroke:#777;
        }
        .grayed .gray-cover {
            visibility: inherit;
        }
        .grayed .sim-cmp:not(.notgrayed) {
            opacity: 0.3;
        }
        /* Highlighting */
        .sim-board-pin-lbl.highlight {
            fill: #000;
            font-weight: bold;
        }
        .sim-board-pin.highlight {
            fill:#999;
            stroke:#000;
        }
        `;

    let nextBoardId = 0;
    export class GenericBoardSvg {
        public hostElement: SVGSVGElement;
        private style: SVGStyleElement;
        private defs: SVGDefsElement;
        private g: SVGGElement;
        public board: pxsim.DalBoard;
        public background: SVGElement;
        private components: IBoardComponent<any>[];
        public breadboard: Breadboard;
        private underboard: SVGGElement;
        public boardDef: BoardDefinition;
        private boardDim: ComputedBoardDimensions;
        public componentDefs: Map<ComponentDefinition>;
        private boardEdges: number[];
        private id: number;
        public bbX: number;
        public bbY: number;
        private boardTopEdge: number;
        private boardBotEdge: number;
        private wireFactory: WireFactory;
        //truth
        private allPins: GridPin[] = [];
        private allLabels: GridLabel[] = [];
        //cache
        private pinNmToLbl: Map<GridLabel> = {};
        private pinNmToPin: Map<GridPin> = {};

        constructor(public props: IBoardSvgProps) {
            this.id = nextBoardId++;
            this.boardDef = props.boardDef;
            this.boardDim = getBoardDimensions(<BoardImageDefinition>this.boardDef.visual);
            this.board = this.props.runtime.board as pxsim.DalBoard;
            this.board.updateView = () => this.updateState();
            this.hostElement = <SVGSVGElement>svg.elt("svg")
            svg.hydrate(this.hostElement, {
                "version": "1.0",
                "viewBox": `0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`,
                "enable-background": `new 0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`,
                "class": `sim sim-board-id-${this.id}`,
                "x": "0px",
                "y": "0px"
            });
            this.style = <SVGStyleElement>svg.child(this.hostElement, "style", {});
            this.style.textContent += BOARD_SYTLE;
            this.defs = <SVGDefsElement>svg.child(this.hostElement, "defs", {});
            this.g = <SVGGElement>svg.elt("g");
            this.hostElement.appendChild(this.g);
            this.underboard = <SVGGElement>svg.child(this.g, "g", {class: "sim-underboard"});
            this.components = [];
            this.componentDefs = props.componentDefinitions;

            // breadboard
            this.breadboard = new Breadboard()
            this.g.appendChild(this.breadboard.bb);
            let bbSize = this.breadboard.getSVGAndSize();
            let [bbWidth, bbHeight] = [bbSize.w, bbSize.h];
            const bbX = (VIEW_WIDTH - bbWidth) / 2;
            this.bbX = bbX;
            const bbY = TOP_MARGIN + this.boardDim.height + MID_MARGIN;
            this.bbY = bbY;
            this.breadboard.updateLocation(bbX, bbY);

            // edges
            this.boardTopEdge = TOP_MARGIN;
            this.boardBotEdge = TOP_MARGIN + this.boardDim.height;
            this.boardEdges = [this.boardTopEdge, this.boardBotEdge, bbY, bbY + bbHeight]

            this.wireFactory = new WireFactory(this.underboard, this.g, this.boardEdges, this.style, this.getLocCoord.bind(this));

            this.buildDom();

            this.updateTheme();
            this.updateState();

            let cmps = props.activeComponents;
            if (cmps.length) {
                let allocRes = allocateDefinitions({
                    boardDef: this.boardDef,
                    cmpDefs: this.componentDefs,
                    fnArgs: this.props.fnArgs,
                    getBBCoord: this.getBBCoord.bind(this),
                    cmpList: props.activeComponents,
                });
                this.addAll(allocRes);
            }
        }

        private getBoardPinCoord(pinNm: string): Coord {
            let pin = this.pinNmToPin[pinNm];
            if (!pin)
                return null;
            return [pin.cx, pin.cy];
        }
        private getBBCoord(rowCol: BBRowCol): Coord {
            let bbCoord = this.breadboard.getCoord(rowCol);
            if (!bbCoord)
                return null;
            let [x, y] = bbCoord;
            return [x + this.bbX, y + this.bbY];
        }

        public getLocCoord(loc: Loc): Coord {
            let coord: Coord;
            if (loc.type === "breadboard") {
                let rowCol = (<BBLoc>loc).rowCol;
                coord = this.getBBCoord(rowCol);
            } else {
                let pinNm = (<BoardLoc>loc).pin;
                coord = this.getBoardPinCoord(pinNm);
            }
            if (!coord) {
                console.error("Unknown location: " + name)
                return [0, 0];
            }
            return coord;
        }

        private mkGrayCover(x: number, y: number, w: number, h: number) {
            let rect = <SVGRectElement>svg.elt("rect");
            svg.hydrate(rect, {x: x, y: y, width: w, height: h, class: "gray-cover"});
            return rect;
        }

        private getCmpClass = (type: string) => `sim-${type}-cmp`;

        public addWire(inst: WireInst): Wire {
            return this.wireFactory.addWire(inst.start, inst.end, inst.color);
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

        public addComponent(cmpDesc: CmpInst): IBoardComponent<any> {
            let cmp: IBoardComponent<any> = null;
            if (typeof cmpDesc.visual === "string") {
                let builtinVisual = cmpDesc.visual as string;
                let cnstr = builtinComponentSimVisual[builtinVisual];
                let stateFn = builtinComponentSimState[builtinVisual];
                let state = stateFn(this.board);
                cmp = cnstr();
                cmp.init(this.board.bus, state, this.hostElement, cmpDesc.microbitPins, cmpDesc.otherArgs);
                this.components.push(cmp);
                this.g.appendChild(cmp.element);
                if (cmp.defs)
                    cmp.defs.forEach(d => this.defs.appendChild(d));
                this.style.textContent += cmp.style || "";
                let rowCol = <BBRowCol>[`${cmpDesc.breadboardStartRow}`, `${cmpDesc.breadboardStartColumn}`];
                let coord = this.getBBCoord(rowCol);
                cmp.moveToCoord(coord);
                let cls = this.getCmpClass(name);
                svg.addClass(cmp.element, cls);
                svg.addClass(cmp.element, "sim-cmp");
                cmp.updateTheme();
                cmp.updateState();
            } else {
                //TODO: adding generic components
            }
            return cmp;
        }

        private updateTheme() {
            this.components.forEach(c => c.updateTheme());
        }

        public updateState() {
            let state = this.board;
            if (!state) return;

            this.components.forEach(c => c.updateState());

            if (!runtime || runtime.dead) svg.addClass(this.hostElement, "grayscale");
            else svg.removeClass(this.hostElement, "grayscale");
        }

        private buildDom() {

            // filters
            let glow = svg.child(this.defs, "filter", { id: "filterglow", x: "-5%", y: "-5%", width: "120%", height: "120%" });
            svg.child(glow, "feGaussianBlur", { stdDeviation: "5", result: "glow" });
            let merge = svg.child(glow, "feMerge", {});
            for (let i = 0; i < 3; ++i)
                svg.child(merge, "feMergeNode", { in: "glow" })

            // main board
            this.background = svg.child(this.g, "image",
                { class: "sim-board", x: this.boardDim.xOff, y: this.boardDim.yOff, width: this.boardDim.width, height: this.boardDim.height,
                    "href": `${(<BoardImageDefinition>this.boardDef.visual).image}`});
            let backgroundCover = this.mkGrayCover(this.boardDim.xOff, this.boardDim.yOff, this.boardDim.width, this.boardDim.height);
            this.g.appendChild(backgroundCover);

            // ----- pins
            const mkSquarePin = (): SVGElAndSize => {
                let el = svg.elt("rect");
                let width = SQUARE_PIN_WIDTH;
                svg.hydrate(el, {
                    class: "sim-board-pin",
                    width: width,
                    height: width,
                });
                return {el: el, w: width, h: width, x: 0, y: 0};
            }
            const mkSquareHoverPin = (): SVGElAndSize => {
                let el = svg.elt("rect");
                let width = SQUARE_PIN_HOVER_WIDTH;
                svg.hydrate(el, {
                    class: "sim-board-pin-hover",
                    width: width,
                    height: width
                });
                return {el: el, w: width, h: width, x: 0, y: 0};
            }
            const mkPinBlockGrid = (pinBlock: PinBlockDefinition, blockIdx: number) => {
                let xOffset = this.boardDim.xOff + this.boardDim.scaleFn(pinBlock.x) + PIN_DIST / 2.0;
                let yOffset = this.boardDim.yOff + this.boardDim.scaleFn(pinBlock.y) + PIN_DIST / 2.0;
                let rowCount = 1;
                let colCount = pinBlock.labels.length;
                let getColName = (colIdx: number) => pinBlock.labels[colIdx];
                let getRowName = () => `${blockIdx + 1}`
                let getGroupName = () => pinBlock.labels.join(" ");
                let gridRes = mkGrid({
                    xOffset: xOffset,
                    yOffset: yOffset,
                    rowCount: rowCount,
                    colCount: colCount,
                    pinDist: PIN_DIST,
                    mkPin: mkSquarePin,
                    mkHoverPin: mkSquareHoverPin,
                    getRowName: getRowName,
                    getColName: getColName,
                    getGroupName: getGroupName,
                });
                let pins = gridRes.allPins;
                let pinsG = gridRes.g;
                svg.addClass(gridRes.g, "sim-board-pin-group");
                return gridRes;
            };
            let pinBlocks = (<BoardImageDefinition>this.boardDef.visual).pinBlocks.map(mkPinBlockGrid);
            pinBlocks.forEach(blk => blk.allPins.forEach(p => {
                this.allPins.push(p);
            }));
            //tooltip
            this.allPins.forEach(p => {
                let tooltip = p.col;
                svg.hydrate(p.el, {title: tooltip});
                svg.hydrate(p.hoverEl, {title: tooltip});
            });
            //attach pins
            this.allPins.forEach(p => {
                this.g.appendChild(p.el);
                this.g.appendChild(p.hoverEl);
            });
            //catalog pins
            this.allPins.forEach(p => {
                this.pinNmToPin[p.col] = p;
            });

            // ----- labels
            const mkLabelTxtEl = (pinX: number, pinY: number, size: number, txt: string): SVGTextElement => {
                //TODO: extract constants
                let lblY: number;
                let lblX: number;
                let edges = [this.boardTopEdge, this.boardBotEdge];
                let distFromTopBot = edges.map(e => Math.abs(e - pinY));
                let closestEdgeIdx = distFromTopBot.reduce((pi, n, ni) => n < distFromTopBot[pi] ? ni : pi, 0);
                let topEdge = closestEdgeIdx == 0;
                if (topEdge) {
                    let lblLen = size * 0.25 * txt.length;
                    lblX = pinX;
                    lblY = pinY + 12 + lblLen;
                } else {
                    let lblLen = size * 0.32 * txt.length;
                    lblX = pinX;
                    lblY = pinY - 11 - lblLen;
                }
                let el = mkTxt(lblX, lblY, size, -90, txt);
                return el;
            };
            const mkLabel = (pinX: number, pinY: number, txt: string): GridLabel => {
                let el = mkLabelTxtEl(pinX, pinY, PIN_LBL_SIZE, txt);
                svg.addClass(el, "sim-board-pin-lbl");
                let hoverEl = mkLabelTxtEl(pinX, pinY, PIN_LBL_HOVER_SIZE, txt);
                svg.addClass(hoverEl, "sim-board-pin-lbl-hover");
                let label: GridLabel = {el: el, hoverEl: hoverEl, txt: txt};
                return label;
            }
            this.allLabels = this.allPins.map(p => {
                return mkLabel(p.cx, p.cy, p.col);
            });
            //attach labels
            this.allLabels.forEach(l => {
                this.g.appendChild(l.el);
                this.g.appendChild(l.hoverEl);
            });
            //catalog labels
            this.allPins.forEach((pin, pinIdx) => {
                let lbl = this.allLabels[pinIdx];
                this.pinNmToLbl[pin.col] = lbl;
            });
        }

        public highlightLoc(pinNm: string) {
            let lbl = this.pinNmToLbl[pinNm];
            let pin = this.pinNmToPin[pinNm];
            if (lbl && pin) {
                svg.addClass(lbl.el, "highlight");
                svg.addClass(lbl.hoverEl, "highlight");
                svg.addClass(pin.el, "highlight");
                svg.addClass(pin.hoverEl, "highlight");
            }
        }

        public highlightWire(wire: Wire) {
            //underboard wires
            wire.wires.forEach(e => {
                (<any>e).style["visibility"] = "visible";
            });

            //un greyed out
            [wire.end1, wire.end2].forEach(e => {
                svg.addClass(e, "highlight");
            });
            wire.wires.forEach(e => {
                svg.addClass(e, "highlight");
            });
        }
    }
}