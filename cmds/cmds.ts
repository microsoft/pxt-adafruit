/// <reference path="../node_modules/pxt-core/built/pxt.d.ts"/>

import * as fs from "fs";
import * as path from "path";
import * as child_process from "child_process";

let writeFileAsync: any = Promise.promisify(fs.writeFile)
let execAsync: (cmd: string, options?: { cwd?: string }) => Promise<Buffer> = Promise.promisify(child_process.exec)
let readDirAsync = Promise.promisify(fs.readdir)

const buildPath = "libs/core/built/pio"

function pioFirmwareHex() {
    return buildPath + "/.pioenvs/myenv/firmware.hex"
}

function runPlatformioAsync(args: string[]) {
    console.log("*** platformio " + args.join(" "))
    let child = child_process.spawn("platformio", args, {
        cwd: buildPath,
        stdio: "inherit",
        env: process.env
    })
    return new Promise<void>((resolve, reject) => {
        child.on("close", (code: number) => {
            if (code === 0) resolve()
            else reject(new Error("platformio " + args.join(" ") + ": exit code " + code))
        })
    })
}

export function deployCoreAsync(r: pxtc.CompileResult) {
    let prevHex = fs.readFileSync(pioFirmwareHex())
    fs.writeFileSync(pioFirmwareHex(), r.outfiles[pxtc.BINARY_HEX])
    return runPlatformioAsync(["run", "--target", "upload", "-v"])
        .finally(() => {
            console.log('Restoring ' + pioFirmwareHex())
            fs.writeFileSync(pioFirmwareHex(), prevHex)
        })
}

