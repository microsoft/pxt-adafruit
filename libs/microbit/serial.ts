/**
 * Reading and writing data over a serial connection.
 */
//% weight=2 color=30
namespace serial {
    /**
     * Prints a line of text to the serial
     * @param value to send over serial
     */
    //% blockId=serial_writeline block="serial|write %text"
    export function writeLine(text: string): void {
        writeString(text);
        writeString("\r\n");
    }

    /**
     * Prints a numeric value to the serial
     */
    export function writeNumber(value: number): void {
        writeString(value.toString());
    }

    /**
     * Writes a ``name: value`` pair line to the serial.
     * @param name name of the value stream, eg: x
     * @param value to write
     */
    //% weight=80
    //% blockId=serial_writevalue block="serial|write %name|= %value"
    export function writeValue(name: string, value: number): void {
        writeString(name);
        writeString(": ");
        writeNumber(value);
        writeLine("");
    }
}
