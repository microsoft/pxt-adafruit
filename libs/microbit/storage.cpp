#include "ksbit.h"

/**
* Allows to save and read values in the flash storage
*/
//% weight=10 color=#cc6600
namespace storage {
    /**
    * Writes the key and buffer pair into flash.
    */
    //% blockId="storage_put_buffer" block="storage put buffer %key|with %buffer" weight=50
    void putBuffer(StringData* key, Buffer buffer) {        
        uBit.storage.put(ManagedString(key), ManagedBuffer(buffer).getBytes());
    }
      
    /**
    * Gets the buffer at the given key if any. If no key is available, empty buffer is returned.
    */
    //% blockId="storage_get_buffer" block="storage get buffer %key" weight=49
    Buffer getBuffer(StringData* key) {
        KeyValuePair* pv = uBit.storage.get(ManagedString(key));
        if (pv == NULL) return ManagedBuffer().leakData();
        
        return ManagedBuffer(pv->value, sizeof(pv->value)).leakData();
    }
    
    /**
    * Removes an entry identified by the key.
    */
    //% blockId="storage_remove" block="storage remove %key" weight=20
    void remove(StringData * key) {
        uBit.storage.remove(ManagedString(key));
    }
    
    /**
    * The number of entries in the key value store
    */
    //% blockId="storage_size" block="storage size" weight=10
    int size() {
        return uBit.storage.size();
    }
}