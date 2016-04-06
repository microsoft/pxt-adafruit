i2c_fram.writeByte(100, 42)
i2c_fram.writeByte(101, 108)

function toBuf(arr: number[]) {
    let buf = pins.createBuffer(arr.length)
    for (let i = 0; i < arr.length; ++i)
        buf[i] = arr[i]
    return buf
}

i2c_fram.writeBuffer(98, toBuf([1, 2, 3, 4, 5, 6, 7]))

console.log("100:" + i2c_fram.readByte(100))
console.log("101:" + i2c_fram.readByte(101))


