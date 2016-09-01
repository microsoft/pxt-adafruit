namespace pxsim {
    export interface PacketBuffer {
        data: number[] | string;
        rssi?: number;
    }

    export class RadioDatagram {
        datagram: PacketBuffer[] = [];
        lastReceived: PacketBuffer = {
            data: [0, 0, 0, 0],
            rssi: -1
        };

        constructor(private runtime: Runtime) {
        }

        queue(packet: PacketBuffer) {
            if (this.datagram.length < 4) {
                this.datagram.push(packet);
            }
            (<DalBoard>runtime.board).bus.queue(DAL.MICROBIT_ID_RADIO, DAL.MICROBIT_RADIO_EVT_DATAGRAM);
        }

        send(buffer: number[] | string) {
            if (buffer instanceof String) buffer = buffer.slice(0, 32);
            else buffer = buffer.slice(0, 8);

            Runtime.postMessage(<SimulatorRadioPacketMessage>{
                type: "radiopacket",
                data: buffer
            })
        }

        recv(): PacketBuffer {
            let r = this.datagram.shift();
            if (!r) r = {
                data: [0, 0, 0, 0],
                rssi: -1
            };
            return this.lastReceived = r;
        }
    }

    export class RadioBus {
        // uint8_t radioDefaultGroup = MICROBIT_RADIO_DEFAULT_GROUP;
        groupId = 0; // todo
        power = 0;
        transmitSerialNumber = false;
        datagram: RadioDatagram;

        constructor(private runtime: Runtime) {
            this.datagram = new RadioDatagram(runtime);
        }

        setGroup(id: number) {
            this.groupId = id & 0xff; // byte only
        }

        setTransmitPower(power: number) {
            this.power = Math.max(0, Math.min(7, power));
        }

        setTransmitSerialNumber(sn: boolean) {
            this.transmitSerialNumber = !!sn;
        }

        broadcast(msg: number) {
            Runtime.postMessage(<SimulatorEventBusMessage>{
                type: "eventbus",
                id: DAL.MES_BROADCAST_GENERAL_ID,
                eventid: msg,
                power: this.power,
                group: this.groupId
            })
        }
    }

    export class RadioState {
        bus: RadioBus;

        constructor(runtime: Runtime) {
            this.bus = new RadioBus(runtime);
        }

        public recievePacket(packet: SimulatorRadioPacketMessage) {
            this.bus.datagram.queue({ data: packet.data, rssi: packet.rssi || 0 })
        }
    }
}

namespace pxsim.radio {
    export function broadcastMessage(msg: number): void {
        board().radioState.bus.broadcast(msg);
    }

    export function onBroadcastMessageReceived(msg: number, handler: RefAction): void {
        pxt.registerWithDal(DAL.MES_BROADCAST_GENERAL_ID, msg, handler);
    }

    export function setGroup(id: number): void {
        board().radioState.bus.setGroup(id);
    }

    export function setTransmitPower(power: number): void {
        board().radioState.bus.setTransmitPower(power);
    }

    export function setTransmitSerialNumber(transmit: boolean): void {
        board().radioState.bus.setTransmitSerialNumber(transmit);
    }

    export function sendNumber(value: number): void {
        board().radioState.bus.datagram.send([value]);
    }

    export function sendString(msg: string): void {
        board().radioState.bus.datagram.send(msg);
    }

    export function writeValueToSerial(): void {
        let b = board();
        let v = b.radioState.bus.datagram.recv().data[0];
        b.writeSerial(`{v:${v}}`);
    }

    export function sendValue(name: string, value: number) {
        board().radioState.bus.datagram.send([value]);
    }

    export function receiveNumber(): number {
        let buffer = board().radioState.bus.datagram.recv().data;
        if (buffer instanceof Array) return buffer[0];

        return 0;
    }

    export function receiveString(): string {
        let buffer = board().radioState.bus.datagram.recv().data;
        if (typeof buffer === "string") return <string>buffer;
        return "";
    }

    export function receivedNumberAt(index: number): number {
        let buffer = board().radioState.bus.datagram.recv().data;
        if (buffer instanceof Array) return buffer[index] || 0;

        return 0;
    }

    export function receivedSignalStrength(): number {
        return board().radioState.bus.datagram.lastReceived.rssi;
    }

    export function onDataReceived(handler: RefAction): void {
        pxt.registerWithDal(DAL.MICROBIT_ID_RADIO, DAL.MICROBIT_RADIO_EVT_DATAGRAM, handler);
        radio.receiveNumber();
    }
}