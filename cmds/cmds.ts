/// <reference path="../node_modules/pxt-core/built/pxt.d.ts"/>

import * as fs from "fs";
import * as path from "path";
import * as child_process from "child_process";

let writeFileAsync: any = Promise.promisify(fs.writeFile)
let execAsync: (cmd: string, options?: { cwd?: string }) => Promise<Buffer> = Promise.promisify(child_process.exec)
let readDirAsync = Promise.promisify(fs.readdir)


export function deployCoreAsync(res: pxtc.CompileResult) {
    return getBitDrivesAsync()
        .then(drives => {
            if (drives.length == 0) {
                console.log("cannot find any drives to deploy to")
            } else {
                console.log(`copy ${pxtc.BINARY_HEX} to ` + drives.join(", "))
            }
            return Promise.map(drives, d =>
                writeFileAsync(d + pxtc.BINARY_HEX, res.outfiles[pxtc.BINARY_HEX])
                    .then(() => {
                        console.log("wrote hex file to " + d)
                    }))
        })
        .then(() => { })
}

function getBitDrivesAsync(): Promise<string[]> {
    if (process.platform == "win32") {
        let rx = new RegExp("^([A-Z]:).* " + pxt.appTarget.compile.deployDrives)
        return execAsync("wmic PATH Win32_LogicalDisk get DeviceID, VolumeName, FileSystem")
            .then(buf => {
                let res: string[] = []
                buf.toString("utf8").split(/\n/).forEach(ln => {
                    let m = rx.exec(ln)
                    if (m) {
                        res.push(m[1] + "/")
                    }
                })
                return res
            })
    }
    else if (process.platform == "darwin") {
        let rx = new RegExp(pxt.appTarget.compile.deployDrives)
        return readDirAsync("/Volumes")
            .then(lst => lst.filter(s => rx.test(s)).map(s => "/Volumes/" + s + "/"))
    } else {
        return Promise.resolve([])
    }
}
