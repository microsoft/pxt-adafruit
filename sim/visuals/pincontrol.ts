namespace pxsim.visuals {
    export class AnalogPinControl {
        private element: SVGCircleElement;
        private gradient: SVGLinearGradientElement;

        constructor(private parent: CircuitPlaygroundBoardSvg, private defs: SVGDefsElement, private id: CPlayPinName) {
            const gid = `gradient-${CPlayPinName[id]}-level`;

            this.element = parent.element.getElementById("PIN_CONNECTOR_" + CPlayPinName[id]) as SVGCircleElement;
            this.gradient = svg.linearGradient(this.defs, gid);

            const cy = parseFloat(this.element.getAttribute("cy"));
            const r = parseFloat(this.element.getAttribute("r"));
            this.element.setAttribute("fill", `url(#${gid})`);
            this.element.setAttribute("class", "sim-light-level-button")

            const pt = parent.element.createSVGPoint();
            svg.buttonEvents(this.element,
                (ev) => {
                    const pos = svg.cursorPoint(pt, this.parent.element, ev);
                    const rs = r / 2;
                    const level = Math.max(0, Math.min(1023, Math.floor((1 - (pos.y - (cy - rs)) / (2 * rs)) * 1023)));
                    const pin = board().edgeConnectorState.getPin(this.id)

                    if (level != pin.value) {
                        pin.value = level;
                        this.updateValue();
                    }
                }, ev => { },
                ev => { })
            this.updateTheme();
        }

        public updateTheme() {
            const theme = this.parent.props.theme;
            svg.setGradientColors(this.gradient, theme.lightLevelOff, 'darkorange');
        }

        public updateValue() {
            const value = board().edgeConnectorState.getPin(this.id).value;

            svg.setGradientValue(this.gradient, 100 - Math.min(100, Math.max(0, Math.floor(value * 100 / 1023))) + '%')
        }
    }
}