/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../node_modules/pxt-core/localtypings/pxtarget.d.ts"/>

namespace pxsim {
    export class DalBoard extends CoreBoard {
        // state & update logic for component services
        redLEDState: RedLEDState;
        neopixelState: CPNeoPixelState;
        buttonPairState: ButtonPairState;
        slideSwitchState: SlideSwitchState;
        lightSensorState: LightSensorState;
        soundSensorState: SoundSensorState;
        thermometerState: ThermometerState;
        edgeConnectorState: EdgeConnectorState;
        capacitiveSensorState: CapacitiveSensorState;
        accelerometerState: AccelerometerState;
        audioState: AudioState;

        constructor() {
            super()

            //components
            this.builtinParts["redLED"] = this.redLEDState = new RedLEDState();
            this.builtinParts["neopixel"] = this.neopixelState = new CPNeoPixelState();

            this.builtinParts["buttonpair"] = this.buttonPairState = new ButtonPairState({
                ID_BUTTON_A: 0,
                ID_BUTTON_B: 1,
                ID_BUTTON_AB: 2,
                BUTTON_EVT_UP: 3,
                BUTTON_EVT_CLICK: 4
            });
            
            this.builtinParts["switch"] = this.slideSwitchState = new SlideSwitchState();
            this.builtinParts["audio"] = this.audioState = new AudioState();
            this.builtinParts["lightsensor"] = this.lightSensorState = new LightSensorState();
            this.builtinParts["soundsensor"] = this.soundSensorState = new SoundSensorState();
            this.builtinParts["thermometer"] = this.thermometerState = new ThermometerState();
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
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12                
                ]
            });
            this.builtinParts["microservo"] = this.edgeConnectorState;

            this.builtinVisuals["microservo"] = () => new visuals.MicroServoView();
            this.builtinPartVisuals["microservo"] = (xy: visuals.Coord) => visuals.mkMicroServoPart(xy);            
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

            const opts : visuals.BoardHostOpts = {
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
            document.body.appendChild(viewHost.getView());

            return Promise.resolve();
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

    export function board() {
        return runtime.board as DalBoard;
    }
}