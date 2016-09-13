namespace pxsim.visuals {
    export function mkBoardView(opts: BoardHostOpts): BoardView {
        if (opts.boardDef.visual === "microbit") {
            return new visuals.MicrobitBoardSvg({
                runtime: runtime,
                theme: visuals.randomTheme(),
                disableTilt: false,
                wireframe: opts.wireframe,
            });
        } else {
            let boardVis = opts.boardDef.visual as BoardImageDefinition;
            return new visuals.GenericBoardSvg({
                visualDef: boardVis,
                wireframe: opts.wireframe,
            });
        }

    }
}