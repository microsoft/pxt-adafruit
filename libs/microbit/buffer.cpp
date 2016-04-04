#include "ksbit.h"

//% indexerGet=BufferMethods::getByte indexerSet=BufferMethods::setByte
namespace BufferMethods {
    //%
    int getByte(Buffer buf, int off) {
        return max(ManagedBuffer(buf).getByte(off), 0);
    }

    //%
    void setByte(Buffer buf, int off, int v) {
        ManagedBuffer(buf).setByte(off, v);
    }

    //%
    uint8_t *getBytes(Buffer buf) {
        return buf->payload;
    }

    /** Returns the length of a Buffer object. */
    //% property
    int length(Buffer s) {
        return s->length;
    }

    /**
     * Fill (a fragment) of the buffer with given value.
     */
    //%
    void fill(Buffer buf, int value, int offset = 0, int length = -1)
    {
        ManagedBuffer(buf).fill(value, offset, length);
    }

    /**
     * Return a copy of a fragment of a buffer.
     */
    //%
    Buffer slice(Buffer buf, int offset = 0, int length = -1)
    {
        return ManagedBuffer(buf).slice(offset, length).leakData();
    }

    /**
     * Shift buffer left in place, with zero padding.
     * @param offset number of bytes to shift; use negative value to shift right
     */
    //%
    void shift(Buffer buf, int offset)
    {
        ManagedBuffer(buf).shift(offset);
    }

    /**
     * Rotate buffer left in place.
     * @param offset number of bytes to shift; use negative value to shift right
     */
    //%
    void rotate(Buffer buf, int offset)
    {
        ManagedBuffer(buf).rotate(offset);
    }

    // int readBytes(uint8_t *dst, int offset, int length, bool swapBytes = false) const;
    // int writeBytes(int dstOffset, uint8_t *src, int length, bool swapBytes = false);

    /**
     * Write contents of `src` at `dstOffset` in current buffer.
     */
    //%
    void write(Buffer buf, int dstOffset, Buffer src)
    {
        //Not supported, we only do up to 4 args :/
        //void write(Buffer buf, int dstOffset, Buffer src, int srcOffset = 0, int length = -1)
        ManagedBuffer(buf).writeBuffer(dstOffset, ManagedBuffer(src), 0, -1);
    }
}
