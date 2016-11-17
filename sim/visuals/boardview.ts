namespace pxsim.visuals {
    mkBoardView = (opts: BoardViewOptions): BoardView => {
        return new visuals.CircuitPlaygroundBoardSvg({
            runtime: runtime,
            theme: visuals.randomTheme(),
            disableTilt: false,
            wireframe: opts.wireframe,
        });
    }
}