/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>

namespace pxsim {
    export class DalBoard extends BaseBoard {
        id: string;

        // the bus
        bus: pxsim.EventBus;

        // state & update logic for component services
        ledMatrixState: LedMatrixState;
        edgeConnectorState: EdgeConnectorState;
        serialState: SerialState;
        accelerometerState: AccelerometerState;
        compassState: CompassState;
        thermometerState: ThermometerState;
        lightSensorState: LightSensorState;
        buttonPairState: ButtonPairState;
        radioState: RadioState;
        neopixelState: NeoPixelState;

        // updates
        updateSubscribers: (() => void)[];

        constructor() {
            super()
            this.id = "b" + Math_.random(2147483647);
            this.bus = new pxsim.EventBus(runtime);

            // components
            this.ledMatrixState = new LedMatrixState(runtime);
            this.buttonPairState = new ButtonPairState();
            this.edgeConnectorState = new EdgeConnectorState();
            this.radioState = new RadioState(runtime);
            this.accelerometerState = new AccelerometerState(runtime);
            this.serialState = new SerialState();
            this.thermometerState = new ThermometerState();
            this.lightSensorState = new LightSensorState();
            this.compassState = new CompassState();
            this.neopixelState = new NeoPixelState();

            // updates
            this.updateSubscribers = []
            this.updateView = () => {
                this.updateSubscribers.forEach(sub => sub());
            }
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
                    this.serialState.recieveData(data);
                    break;
                case "radiopacket":
                    let packet = <SimulatorRadioPacketMessage>msg;
                    this.radioState.recievePacket(packet);
                    break;
            }
        }

        kill() {
            super.kill();
            AudioContextManager.stop();
        }

        initAsync(msg: SimulatorRunMessage): Promise<void> {
            super.initAsync(msg);

            let options = (msg.options || {}) as RuntimeOptions;

            let boardDef = CURRENT_BOARD; //TODO: read from pxt.json/pxttarget.json

            let cmpsList = msg.parts;
            let cmpDefs = msg.partDefinitions || {}; //TODO: read from pxt.json/pxttarget.json
            let fnArgs = msg.fnArgs;

            let viewHost = new visuals.BoardHost({
                state: this,
                boardDef: boardDef,
                partsList: cmpsList,
                partDefs: cmpDefs,
                fnArgs: fnArgs,
                maxWidth: "100%",
                maxHeight: "100%",
            });

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
            led.setBrightness(255);
            let img = board().ledMatrixState.image;
            img.clear();
            img.set(0, 4, 255);
            img.set(1, 3, 255);
            img.set(2, 3, 255);
            img.set(3, 3, 255);
            img.set(4, 4, 255);
            img.set(0, 0, 255);
            img.set(1, 0, 255);
            img.set(0, 1, 255);
            img.set(1, 1, 255);
            img.set(3, 0, 255);
            img.set(4, 0, 255);
            img.set(3, 1, 255);
            img.set(4, 1, 255);
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