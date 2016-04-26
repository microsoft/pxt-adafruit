/**
 * Reading and writing data over a serial connection.
 */
//% weight=2 color=30
namespace serial {
    /**
     * Prints a line of text to the serial
     * @param value to send over serial
     */
    //% help=serial/write-line
    //% blockId=serial_writeline block="serial|write line %text"
    export function writeLine(text: string): void {
        writeString(text);
        writeString("\r\n");
    }

    /**
     * Prints a numeric value to the serial
     */
    //% blockId=serial_writenumber block="serial|write number %value"
    export function writeNumber(value: number): void {
        writeString(value.toString());
    }

    /**
     * Writes a ``name: value`` pair line to the serial.
     * @param name name of the value stream, eg: x
     * @param value to write
     */
    //% weight=80
    //% help=serial/write-value
    //% blockId=serial_writevalue block="serial|write line %name|= %value"
    export function writeValue(name: string, value: number): void {
        writeString(name);
        writeString(": ");
        writeNumber(value);
        writeLine("");
    }
}
