namespace console {
    export function log(msg: string) {
        serial.writeString(msg);
        serial.writeString("\r\n");
    }
}
