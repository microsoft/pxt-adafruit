/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />

namespace pxt.editor {
    initFieldExtensionsAsync = function (opts: pxt.editor.FieldExtensionOptions): Promise<pxt.editor.FieldExtensionResult> {
        pxt.debug('loading pxt-adafruit target extensions...')
        const res: pxt.editor.FieldExtensionResult = {
            fieldEditors: [{
                selector: "lights",
                editor: FieldLights
            }]
        };
        return Promise.resolve<pxt.editor.FieldExtensionResult>(res);
    }
}