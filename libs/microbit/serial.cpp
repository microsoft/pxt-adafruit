#include "ksbit.h"

//% weight=2 color=30
namespace serial {
    // note that at least one // followed by % is needed per declaration!
    
    /**
     * Reads a line of text from the serial port.
     */
    //% help=serial/read-line
    //% blockId=serial_read_line block="serial read line"
    //% weight=20
    //% async
    StringData* readLine() {
      return uBit.serial.readUntil(ManagedString("\n")).leakData();
    }

    /**
     * Sends a piece of text through Serial connection.
     */
    //% help=serial/write-string
    //% weight=87
    //% blockId=serial_writestring block="serial write string %text"
    //% async
    void writeString(StringData *text) { 
      uBit.serial.send(ManagedString(text));
    }
    
    /**
    * Registers an event to be fired when one of the delimiter is matched
    * @param delimiters the characters to match received characters against. eg:"\n"
    */
    //% help=serial/on-data-received
    //% weight=19
    void onDataReceived(StringData* delimiters, Action body) {
      uBit.serial.eventOn(ManagedString(delimiters));
      registerWithDal(MICROBIT_ID_SERIAL, MICROBIT_SERIAL_EVT_DELIM_MATCH, body);
    }
}
