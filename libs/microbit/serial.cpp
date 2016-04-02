#include "ksbit.h"

//% weight=2 color=30
namespace serial {
    // note that at least one // followed by % is needed per declaration!
    
    /**
     * Reads a line of text from the serial port.
     */
    //%
    StringData* readString() {
      return uBit.serial.readString().leakData();
    }

    /**
     * Sends a piece of text through Serial connection.
     */
    //%
    void writeString(StringData *text) { 
      uBit.serial.sendString(ManagedString(text));
    }

    /**
     * Sends the current pixel values, byte-per-pixel, over serial.
     */
    //%
    void writeScreen() {
        uBit.serial.sendDisplayState(); 
    }

    /**
     * Reads the screen from serial.
     */
    //%
    void readScreen() { 
        uBit.serial.readDisplayState();
    }
}
