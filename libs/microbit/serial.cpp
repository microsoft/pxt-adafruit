#include "ksbit.h"

//% weight=2 color=30
namespace serial {
    // note that at least one // followed by % is needed per declaration!
    
    /**
     * Reads a line of text from the serial port.
     */
    //%
    StringData* readString() {
      return uBit.serial.readUntil(ManagedString("\r\n")).leakData();
    }

    /**
     * Sends a piece of text through Serial connection.
     */
    //% blockId=serial_writestring block="serial write %text"
    void writeString(StringData *text) { 
      uBit.serial.send(ManagedString(text));
    }
}
