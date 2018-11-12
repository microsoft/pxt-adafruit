// Auto-generated. Do not edit.
declare namespace storage {

    /** 
     * Append string data to a new or existing file. 
     * @param filename name of the file, eg: "log.txt"
     */
    //% part="storage" 
    //% blockId="storage_append" block="append file $filename with $data" shim=storage::append
    function append(filename: string, data: string): void;

    /** 
     * Append a buffer to a new or existing file. 
     * @param filename name of the file, eg: "log.txt"
     */
    //% part="storage" shim=storage::appendBuffer
    function appendBuffer(filename: string, data: Buffer): void;

    /** 
     * Overwrite file with string data. 
     * @param filename name of the file, eg: "log.txt"
     */
    //% part="storage"
    //% blockId="storage_overwrite" block="overwrite file $filename with $data" shim=storage::overwrite
    function overwrite(filename: string, data: string): void;

    /** 
     * Overwrite file with a buffer. 
     * @param filename name of the file, eg: "log.txt"
     */
    //% part="storage" shim=storage::overwriteWithBuffer
    function overwriteWithBuffer(filename: string, data: Buffer): void;

    /** 
     * Return true if the file already exists. 
     * @param filename name of the file, eg: "log.txt"
     */
    //% part="storage"
    //% blockId="storage_exists" block="file $filename exists" shim=storage::exists
    function exists(filename: string): boolean;

    /** 
     * Delete a file, or do nothing if it doesn't exist. 
     * @param filename name of the file, eg: "log.txt"
     */
    //% part="storage"
    //% blockId="storage_remove" block="remove file $filename" shim=storage::remove
    function remove(filename: string): void;

    /** 
     * Return the size of the file, or -1 if it doesn't exists. 
     * @param filename name of the file, eg: "log.txt"
     */
    //% part="storage"
    //% blockId="storage_size" block="size of file $filename" shim=storage::size
    function size(filename: string): int32;

    /** 
     * Read contents of file as a string. 
     * @param filename name of the file, eg: "log.txt"
     */
    //% part="storage"
    //% blockId="storage_read" block="read file $filename" shim=storage::read
    function read(filename: string): string;

    /** 
     * Read contents of file as a buffer. 
     * @param filename name of the file, eg: "log.txt"
     */
    //% part="storage" shim=storage::readAsBuffer
    function readAsBuffer(filename: string): Buffer;
}

// Auto-generated. Do not edit. Really.
