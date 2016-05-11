namespace i2c_fram {
    const devaddr = 0x50;
    const memend = 0x7fff;

    //% shim=pxtrt::panic
    function panic(code: number) { }

    function die() { panic(142) }

    export function readByte(addr: number) {
        if (addr < 0 || addr > memend)
            die();

        let buf = pins.createBuffer(2)
        buf[0] = (addr >> 8) & 0xff;
        buf[1] = addr & 0xff;

        pins.i2cWriteBuffer(devaddr, buf);
        buf = pins.i2cReadBuffer(devaddr, 1);

        return buf[0];
    }

    export function writeByte(addr: number, val: number) {
        if (addr < 0 || addr > memend)
            die();

        if (val < 0 || val > 0xff)
            die();

        let buf = pins.createBuffer(3)

        buf[0] = (addr >> 8) & 0xff;
        buf[1] = addr & 0xff;
        buf[2] = val;

        pins.i2cWriteBuffer(devaddr, buf)
    }

    export function readBuffer(addr: number, length: number) {
        if (addr < 0 || length < 0 || (addr + length) > memend)
            die();
        let buf = pins.createBuffer(length)
        for (let i = 0; i < length; ++i)
            buf[i] = readByte(addr + i)
        return buf
    }

    export function writeBuffer(addr: number, buf: Buffer) {
        if (addr < 0 || (addr + buf.length) > memend)
            die();
        for (let i = 0; i < buf.length; ++i)
            writeByte(addr + i, buf[i])
    }
}
