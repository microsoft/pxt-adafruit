/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../node_modules/pxt-core/localtypings/pxtarget.d.ts"/>
/// <reference path="../built/common-sim.d.ts"/>

namespace pxsim {
    export enum CPlayPinName {
        A0,
        A1,
        A2,
        A3,
        A4,
        A5,
        A6,
        A7,
        A8,
        A9,
        D4,
        D5,
        D6,
        D7,
        D8,
        D13
    }

    export class DalBoard extends CoreBoard implements
    AccelerometerBoard, CommonBoard, LightBoard, LightSensorBoard, MicrophoneBoard, MusicBoard, SlideSwitchBoard, TemperatureBoard, CapTouchBoard
    {
        // state & update logic for component services
        neopixelState: CommonNeoPixelState;
        buttonState: CommonButtonState;
        slideSwitchState: SlideSwitchState;
        lightSensorState: AnalogSensorState;
        thermometerState: AnalogSensorState;
        thermometerUnitState: number;
        microphoneState: AnalogSensorState;
        edgeConnectorState: EdgeConnectorState;
        capacitiveSensorState: CapacitiveSensorState;
        accelerometerState: AccelerometerState;
        audioState: AudioState;
        touchButtonState: TouchButtonState;

        view: SVGSVGElement;

        constructor() {
            super()

            this.bus.setNotify(DAL.DEVICE_ID_NOTIFY, DAL.DEVICE_ID_NOTIFY_ONE);

            //components
            this.builtinParts["neopixel"] = this.neopixelState = new CommonNeoPixelState();
            this.builtinParts["buttonpair"] = this.buttonState = new CommonButtonState();

            this.builtinParts["switch"] = this.slideSwitchState = new SlideSwitchState();
            this.builtinParts["audio"] = this.audioState = new AudioState();
            this.builtinParts["lightsensor"] = this.lightSensorState = new AnalogSensorState(DAL.DEVICE_ID_LIGHT_SENSOR, 0, 255);
            this.builtinParts["thermometer"] = this.thermometerState = new AnalogSensorState(DAL.DEVICE_ID_THERMOMETER, -5, 50);
            this.builtinParts["soundsensor"] = this.microphoneState = new AnalogSensorState(DAL.DEVICE_ID_TOUCH_SENSOR + 1, 0, 255);
            this.builtinParts["capacitivesensor"] = this.capacitiveSensorState = new CapacitiveSensorState({
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                6: 4,
                9: 5,
                10: 6,
                12: 7
            });

            this.builtinParts["accelerometer"] = this.accelerometerState = new AccelerometerState(runtime);
            this.builtinParts["edgeconnector"] = this.edgeConnectorState = new EdgeConnectorState({
                pins: [
                    pxsim.CPlayPinName.A0,
                    pxsim.CPlayPinName.A1,
                    pxsim.CPlayPinName.A2,
                    pxsim.CPlayPinName.A3,
                    pxsim.CPlayPinName.A4,
                    pxsim.CPlayPinName.A5,
                    pxsim.CPlayPinName.A6,
                    pxsim.CPlayPinName.A7,
                    pxsim.CPlayPinName.A8,
                    pxsim.CPlayPinName.A9,
                    pxsim.CPlayPinName.D4,
                    pxsim.CPlayPinName.D5,
                    pxsim.CPlayPinName.D6,
                    pxsim.CPlayPinName.D7,
                    pxsim.CPlayPinName.D8,
                    pxsim.CPlayPinName.D13
                ]
            });
            this.builtinParts["microservo"] = this.edgeConnectorState;

            this.builtinVisuals["microservo"] = () => new visuals.MicroServoView();
            this.builtinPartVisuals["microservo"] = (xy: visuals.Coord) => visuals.mkMicroServoPart(xy);
            this.touchButtonState = new TouchButtonState([
                pxsim.CPlayPinName.A1,
                pxsim.CPlayPinName.A2,
                pxsim.CPlayPinName.A3,
                pxsim.CPlayPinName.A4,
                pxsim.CPlayPinName.A5,
                pxsim.CPlayPinName.A6,
                pxsim.CPlayPinName.A7
            ]);
        }

        receiveMessage(msg: SimulatorMessage) {
            if (!runtime || runtime.dead) return;

            switch (msg.type || "") {
                case "eventbus":
                    let ev = <SimulatorEventBusMessage>msg;
                    this.bus.queue(ev.id, ev.eventid, ev.value);
                    break;
                case "serial":
                    let data = (<SimulatorSerialMessage>msg).data || "";
                    // TODO
                    break;
            }
        }

        initAsync(msg: SimulatorRunMessage): Promise<void> {
            super.initAsync(msg);

            const options = (msg.options || {}) as pxt.RuntimeOptions;

            const boardDef = msg.boardDefinition;
            const cmpsList = msg.parts;
            const cmpDefs = msg.partDefinitions || {};
            const fnArgs = msg.fnArgs;

            const opts: visuals.BoardHostOpts = {
                state: this,
                boardDef: boardDef,
                partsList: cmpsList,
                partDefs: cmpDefs,
                fnArgs: fnArgs,
                maxWidth: "100%",
                maxHeight: "100%",
            };
            const viewHost = new visuals.BoardHost(pxsim.visuals.mkBoardView({
                visual: boardDef.visual
            }), opts);

            document.body.innerHTML = ""; // clear children
            document.body.appendChild(this.view = viewHost.getView() as SVGSVGElement);

            return Promise.resolve();
        }

        screenshot(): string {
            return svg.toDataUri(new XMLSerializer().serializeToString(this.view));
        }

        defaultNeopixelPin() {
            return this.edgeConnectorState.getPin(CPlayPinName.D8);
        }

        getDefaultPitchPin() {
            return this.edgeConnectorState.getPin(CPlayPinName.D6);
        }
    }

    export function initRuntimeWithDalBoard() {
        U.assert(!runtime.board);
        let b = new DalBoard();
        runtime.board = b;
        runtime.postError = (e) => {
            // TODO
            runtime.updateDisplay();
        }
    }

    if (!pxsim.initCurrentRuntime) {
        pxsim.initCurrentRuntime = initRuntimeWithDalBoard;
    }
}