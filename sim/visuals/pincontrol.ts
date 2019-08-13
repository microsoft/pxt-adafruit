namespace pxsim.visuals {
    export class AnalogPinControl {
        private outerElement: SVGElement;

        private innerCircle: SVGCircleElement;
        private gradient: SVGLinearGradientElement;
        private currentValue: number;
        private pin: Pin;

        constructor(private parent: CircuitPlaygroundBoardSvg, private defs: SVGDefsElement, private id: number, name: string) {
            this.pin = board().edgeConnectorState.getPin(this.id);

            // Init the button events
            this.outerElement = parent.element.getElementById(name) as SVGElement;
            pxsim.U.addClass(this.outerElement, "sim-pin-touch");
            this.addButtonEvents();

            if ((this.pin as pins.CommonPin).used) {
                accessibility.makeFocusable(this.outerElement);
                accessibility.setAria(this.outerElement, "button", this.outerElement.firstChild.textContent);
            }

            // Init the gradient controls
            // const gid = `gradient-${CPlayPinName[id]}-level`;
            // this.innerCircle = parent.element.getElementById("PIN_CONNECTOR_" + CPlayPinName[id]) as SVGCircleElement;
            // this.gradient = svg.linearGradient(this.defs, gid);
            // this.innerCircle.setAttribute("fill", `url(#${gid})`);
            // this.innerCircle.setAttribute("class", "sim-light-level-button")
            // this.addLevelControlEvents()

            this.updateTheme();
        }

        public updateTheme() {
            const theme = this.parent.props.theme;
            svg.setGradientColors(this.gradient, theme.lightLevelOff, 'darkorange');
        }

        public updateValue() {
            const value = this.pin.value;

            if (value === this.currentValue) {
                return;
            }

            this.currentValue = value;

            // svg.setGradientValue(this.gradient, 100 - Math.min(100, Math.max(0, Math.floor(value * 100 / 1023))) + '%')
            // if (this.innerCircle.childNodes.length) {
            //    this.innerCircle.removeChild(this.innerCircle.childNodes[0])
            // }

            svg.title(this.outerElement, value.toString());
        }

        private addButtonEvents() {
            pointerEvents.down.forEach(evid => this.outerElement.addEventListener(evid, ev => {
                this.pin.touched = true;
                pxsim.U.addClass(this.outerElement, "touched");

                (pxtcore.getTouchButton(this.id) as CommonButton).setPressed(true);
            }))
            this.outerElement.addEventListener(pointerEvents.leave, ev => {
                this.pin.touched = false;
                pxsim.U.removeClass(this.outerElement, "touched");

                (pxtcore.getTouchButton(this.id) as CommonButton).setPressed(false);
            })
            this.outerElement.addEventListener(pointerEvents.up, ev => {
                this.pin.touched = false;
                pxsim.U.removeClass(this.outerElement, "touched");

                (pxtcore.getTouchButton(this.id) as CommonButton).setPressed(false);
            })
            accessibility.enableKeyboardInteraction(this.outerElement,
                () => {
                    this.pin.touched = true;
                    pxsim.U.addClass(this.outerElement, "touched");

                    (pxtcore.getTouchButton(this.id) as CommonButton).setPressed(true);
                },
                () => {
                    this.pin.touched = false;
                    pxsim.U.removeClass(this.outerElement, "touched");

                    (pxtcore.getTouchButton(this.id) as CommonButton).setPressed(false);
                }
            );
        }

        private addLevelControlEvents() {
            const cy = parseFloat(this.innerCircle.getAttribute("cy"));
            const r = parseFloat(this.innerCircle.getAttribute("r"));
            const pt = this.parent.element.createSVGPoint();

            svg.buttonEvents(this.innerCircle,
                (ev) => {
                    const pos = svg.cursorPoint(pt, this.parent.element, ev);
                    const rs = r / 2;
                    const level = Math.max(0, Math.min(1023, Math.floor((1 - (pos.y - (cy - rs)) / (2 * rs)) * 1023)));

                    if (level != this.pin.value) {
                        this.pin.value = level;
                        this.updateValue();
                    }
                }, ev => { },
                ev => { });
        }
    }
}