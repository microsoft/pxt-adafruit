/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtwinrt.d.ts"/>

import lf = pxt.Util.lf;

namespace pxt.editor {
    const cpxDefaultVid = 0x0000; // TODO determine this value
    const cpxDefaultPid = 0x0000; // TODO determine this value

    initExtensionsAsync = function (opts: pxt.editor.ExtensionOptions): Promise<pxt.editor.ExtensionResult> {
        pxt.debug('loading pxt-adafruit target extensions...')
        const res: pxt.editor.ExtensionResult = {
            fieldEditors: [{
                selector: "lights",
                editor: FieldLights
            }],
            showUploadInstructionsAsync: (fn: string, url: string, confirmAsync?: (options: any) => Promise<number>) => {
                let resolve: (thenableOrResult?: void | PromiseLike<void>) => void;
                let reject: (error: any) => void;
                const deferred = new Promise<void>((res, rej) => {
                    resolve = res;
                    reject = rej;
                });
                const boardName = pxt.appTarget.appTheme.boardName || "???";
                const boardDriveName = pxt.appTarget.appTheme.driveDisplayName || pxt.appTarget.compile.driveName || "???";

                // https://msdn.microsoft.com/en-us/library/cc848897.aspx
                // "For security reasons, data URIs are restricted to downloaded resources.
                // Data URIs cannot be used for navigation, for scripting, or to populate frame or iframe elements"
                const downloadAgain = !pxt.BrowserUtils.isIE() && !pxt.BrowserUtils.isEdge();
                const docUrl = pxt.appTarget.appTheme.usbDocs;
                const saveAs = pxt.BrowserUtils.hasSaveAs();

                const htmlBody = `
                <div class="ui three column grid stackable">
                    <div class="column">
                        <div class="ui">
                            <div class="image">
                                <img class="ui medium rounded image" src="./static/download/connect.png" style="height:182px;width:300px">
                            </div>
                            <div class="content">
                                <div class="description">
                                    <span class="ui blue circular label">1</span>
                                    ${lf("Take the USB cable you connected to your computer. Plug it into your Circuit Playground Express.")}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="ui">
                            <div class="image">
                                <img class="ui medium rounded image" src="./static/download/reset.png" style="height:182px;width:300px">
                            </div>
                            <div class="content">
                                <div class="description">
                                    <span class="ui blue circular label">2</span>
                                    ${lf("Press the RESET button to go into programming mode. When the lights turn green, you're ready to go.")}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="ui">
                            <div class="image">
                                <img class="ui medium rounded image" src="./static/download/transfer.png" style="height:182px;width:300px">
                            </div>
                            <div class="content">
                                <div class="description">
                                    <span class="ui blue circular label">3</span>
                                    ${lf("Click and drag the file you downloaded onto {0}.", boardDriveName)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;

                return confirmAsync({
                    header: lf("Download completed..."),
                    htmlBody,
                    hasCloseIcon: true,
                    hideCancel: true,
                    hideAgree: true,
                    size: 'large',
                    buttons: [downloadAgain ? {
                        label: fn,
                        icon: "download",
                        class: "lightgrey focused",
                        url,
                        fileName: fn
                    } : undefined, docUrl ? {
                        label: lf("Help"),
                        icon: "help",
                        class: "lightgrey focused",
                        url: docUrl
                    } : undefined]
                    //timeout: 20000
                }).then(() => { });
            },
            winrtHandleDeviceNotFoundAsync: (io: pxt.winrt.WindowsRuntimeIO) => {
                // Device not found while deploying. It could be because it's a fresh device (no MakeCode program
                // running) that is in non-bootloader mode. Try to connect to that device via serial and set baud to
                // 1200, which sets the device into bootloader.
                let allSerialDevices: Windows.Devices.SerialCommunication.SerialDevice[];
                const defaultCpxHid: pxtc.HidSelector = {
                    vid: cpxDefaultVid.toString(),
                    pid: cpxDefaultPid.toString(),
                    usageId: undefined,
                    usagePage: undefined
                };
                return pxt.winrt.connectSerialDevicesAsync([defaultCpxHid])
                    .then((serialDevices) => {
                        if (!serialDevices || serialDevices.length === 0) {
                            // No device found, it really looks like no device is plugged in. Bail out.
                            return Promise.reject(new Error("no serial devices to switch into bootloader"));
                        }

                        // CPX with default program connected to; attempt to switch to bootloader using the baud trick
                        allSerialDevices = serialDevices;
                        allSerialDevices.forEach((dev) => {
                            dev.baudRate = 1200;
                        });
                        return Promise.delay(100);
                    })
                    .then(() => {
                        // Devices should be switched to bootloader by now; disconnect serial and reconnect HID
                        allSerialDevices.forEach((dev) => {
                            dev.close();
                        })
                        return io.initAsync(/* isRetry */ true);
                    });
            }
        };
        return Promise.resolve<pxt.editor.ExtensionResult>(res);
    }
}