/// <reference path="../node_modules/pxt-core/localtypings/pxtarget.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtblocks.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtcompiler.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtlib.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />
import * as React from "react";

namespace pxt.editor {
    function showUploadInstructionsAsync(fn: string, url: string, confirmAsync?: (options: any) => Promise<number>) {
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

        const jsx = <div className="ui three column grid stackable">
            <div className="column">
                <div className="ui">
                    <div className="image">
                        <img className="ui medium rounded image" src="./static/download/connect.png" style="height:182px;width:300px">
                    </div>
                    <div className="content">
                        <div className="description">
                            <span className="ui blue circular label">1</span>
                            ${lf("Take the USB cable you connected to your computer. Plug it into your Circuit Playground Express.")}
                        </div>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="ui">
                    <div className="image">
                        <img className="ui medium rounded image" src="./static/download/reset.png" style="height:182px;width:300px">
                    </div>
                    <div className="content">
                        <div className="description">
                            <span className="ui blue circular label">2</span>
                            ${lf("Press the RESET button to go into programming mode. When the lights turn green, you're ready to go.")}
                        </div>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="ui">
                    <div className="image">
                        <img className="ui medium rounded image" src="./static/download/transfer.png" style="height:182px;width:300px">
                    </div>
                    <div className="content">
                        <div className="description">
                            <span className="ui blue circular label">3</span>
                            ${lf("Click and drag the file you downloaded onto {0}.", boardDriveName)}
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        return confirmAsync({
            header: lf("Download completed..."),
            jsx,
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
    }

    initExtensionsAsync = function (opts: pxt.editor.ExtensionOptions): Promise<pxt.editor.ExtensionResult> {
        pxt.debug('loading pxt-adafruit target extensions...')
        const res: pxt.editor.ExtensionResult = {
        };
        return Promise.resolve<pxt.editor.ExtensionResult>(res);
    }
}