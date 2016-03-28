/// <reference path="../node_modules/kindscript/built/kind.d.ts"/>

import * as fs from 'fs';
import * as path from 'path';
import * as child_process from 'child_process';

let writeFileAsync: any = Promise.promisify(fs.writeFile)
let execAsync: (cmd: string, options?: { cwd?: string }) => Promise<Buffer> = Promise.promisify(child_process.exec)

export function deployCoreAsync(res: ts.ks.CompileResult) {
    return getBitDrivesAsync()
        .then(drives => {
            if (drives.length == 0) {
                console.log("cannot find any drives to deploy to")
            } else {
                console.log("copy microbit.hex to " + drives.join(", "))
            }
            return Promise.map(drives, d =>
                writeFileAsync(d + "microbit.hex", res.outfiles["microbit.hex"])
                    .then(() => {
                        console.log("wrote hex file to " + d)
                    }))
        })
        .then(() => { })
}

function getBitDrivesAsync(): Promise<string[]> {
    if (process.platform == "win32") {
        return execAsync("wmic PATH Win32_LogicalDisk get Device ID, VolumeName, FileSystem")
            .then(buf => {
                let res: string[] = []
                buf.toString("utf8").split(/\n/).forEach(ln => {
                    let m = /^([A-Z]:).* MICROBIT/.exec(ln)
                    if (m) {
                        res.push(m[1] + "/")
                    }
                })
                return res
            })
    } else {
        return Promise.resolve([])
    }
}