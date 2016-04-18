#include "ksbit.h"

/**
* This allows reading and writing of small blocks of data to FLASH memory.
*/
//% weight=10 color=#cc6600
namespace storage {
    /**
    * Writes the key and buffer pair into FLASH. This operation is rather costly as all the key/value pairs
    * have to be rewritten as well.
    */
    //% 
    void putBuffer(StringData* key, Buffer buffer) {        
        uBit.storage.put(ManagedString(key), ManagedBuffer(buffer).getBytes());
    }
      
    /**
    * Gets the buffer at the given key if any. If no key is available, empty buffer is returned.
    */
    //%
    Buffer getBuffer(StringData* key) {
        KeyValuePair* pv = uBit.storage.get(ManagedString(key));
        if (pv == NULL) return ManagedBuffer().leakData();
        
        return ManagedBuffer(pv->value, sizeof(pv->value)).leakData();
    }
    
    /**
    * Removes an entry identified by the key.
    */
    //%
    void remove(StringData * key) {
        uBit.storage.remove(ManagedString(key));
    }
    
    /**
    * The number of entries in the key value store
    */
    //%
    int size() {
        return uBit.storage.size();
    }
}