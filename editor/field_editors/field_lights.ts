/// <reference path="../../node_modules/pxt-core/localtypings/blockly.d.ts" />
/// <reference path="../../node_modules/pxt-core/built/pxtsim.d.ts"/>

namespace pxt.editor {

    const BOARD_SVG = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
	xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" id="field-neopixels" version="1.1" inkscape:version="0.91 r13725" xml:space="preserve"
	width="180" height="180" viewBox="0 0 180 180" sodipodi:docname="rev_g_minimal.svg">
	<g id="g10" inkscape:groupmode="layer" inkscape:label="Circuit Playground Express Rev G Top Vectorized" transform="matrix(1.25,0,0,-1.25,0,180.00001)">
		<g id="g28">
			<g id="g30" clip-path="url(#clipPath32)">
				<g id="g36" transform="translate(142.2739,72.0873)">
					<circle style="fill:none; stroke: white; stroke-width: 0.5px" id="path4045" cx="-70.273903" cy="0.087292001" transform="scale(1,-1)" r="72" />
				</g>
			</g>
		</g>
		<g id="g632" transform="matrix(1.21,0,0,1.21,-15.127949,-15.103736)">
			<g id="g634" clip-path="url(#clipPath636)" transform="matrix(0.9025,0,0,0.9025,7.0236904,7.0124441)">
				<g id="g2164" transform="matrix(1.96,0,0,1.96,92.348345,37.206167)">
					<path d="M 0,0 C 2.033,1.174 4.634,0.478 5.809,-1.557 6.982,-3.59 6.285,-6.19 4.252,-7.364 2.218,-8.539 -0.383,-7.842 -1.557,-5.809 -2.73,-3.774 -2.034,-1.174 0,0"
						style="fill:#c8c8c8;fill-opacity:1;fill-rule:nonzero;stroke:none" id="LED5" inkscape:connector-curvature="0" />
				</g>
				<g id="g2144" transform="matrix(1.96,0,0,1.96,107.65549,53.23391)">
					<path d="M 0,0 C 1.174,2.033 3.774,2.73 5.808,1.556 7.842,0.382 8.538,-2.219 7.364,-4.252 6.19,-6.286 3.59,-6.982 1.556,-5.809 -0.478,-4.635 -1.175,-2.034 0,0"
						style="fill:#c8c8c8;fill-opacity:1;fill-rule:nonzero;stroke:none" id="LED6" inkscape:connector-curvature="0" />
				</g>
				<g id="g2182" transform="matrix(1.96,0,0,1.96,112.29748,71.3832)">
					<path d="M 0,0 C 0,2.349 1.904,4.252 4.252,4.252 6.601,4.252 8.504,2.349 8.504,0 8.504,-2.348 6.601,-4.252 4.252,-4.252 1.904,-4.252 0,-2.348 0,0"
						style="fill:#c8c8c8;fill-opacity:1;fill-rule:nonzero;stroke:none" id="LED7" inkscape:connector-curvature="0" />
				</g>
				<g id="g2200" transform="matrix(1.96,0,0,1.96,107.29328,91.332796)">
					<path d="M 0,0 C -1.174,2.034 -0.477,4.634 1.557,5.809 3.591,6.982 6.191,6.286 7.365,4.252 8.539,2.218 7.843,-0.382 5.809,-1.556 3.775,-2.73 1.175,-2.034 0,0"
						style="fill:#c8c8c8;fill-opacity:1;fill-rule:nonzero;stroke:none" id="LED8" inkscape:connector-curvature="0" />
				</g>
				<g id="g2220" transform="matrix(1.96,0,0,1.96,91.98659,106.99992)">
					<path d="M 0,0 C -2.033,1.174 -2.73,3.774 -1.556,5.808 -0.382,7.842 2.219,8.539 4.252,7.365 6.286,6.19 6.982,3.59 5.809,1.556 4.635,-0.478 2.034,-1.174 0,0"
						style="fill:#c8c8c8;fill-opacity:1;fill-rule:nonzero;stroke:none" id="LED9" inkscape:connector-curvature="0" />
				</g>
				<g id="g2240" transform="matrix(1.96,0,0,1.96,51.367804,107.35918)">
					<path d="M 0,0 C -2.034,-1.174 -4.634,-0.477 -5.809,1.557 -6.982,3.59 -6.286,6.19 -4.252,7.365 -2.218,8.539 0.382,7.842 1.556,5.809 2.73,3.775 2.034,1.174 0,0"
						style="fill:#c8c8c8;fill-opacity:1;fill-rule:nonzero;stroke:none" id="LED0" inkscape:connector-curvature="0" />
				</g>
				<g id="g2260" transform="matrix(1.96,0,0,1.96,37.140578,92.05214)">
					<path d="m 0,0 c -1.174,-2.034 -3.774,-2.73 -5.808,-1.556 -2.034,1.174 -2.731,3.774 -1.557,5.808 1.175,2.034 3.775,2.73 5.809,1.556 C 0.478,4.634 1.174,2.034 0,0"
						style="fill:#c8c8c8;fill-opacity:1;fill-rule:nonzero;stroke:none" id="LED1" inkscape:connector-curvature="0" />
				</g>
				<g id="g2278" transform="matrix(1.96,0,0,1.96,31.77822,72.1024)">
					<path d="m 0,0 c 0,-2.348 -1.904,-4.252 -4.252,-4.252 -2.348,0 -4.252,1.904 -4.252,4.252 0,2.348 1.904,4.252 4.252,4.252 C -1.904,4.252 0,2.348 0,0"
						style="fill:#c8c8c8;fill-opacity:1;fill-rule:nonzero;stroke:none" id="LED2" inkscape:connector-curvature="0" />
				</g>
				<g id="g2296" transform="matrix(1.96,0,0,1.96,37.141078,51.07256)">
					<path d="M 0,0 C 1.174,-2.034 0.478,-4.634 -1.556,-5.809 -3.59,-6.982 -6.19,-6.286 -7.365,-4.252 -8.539,-2.219 -7.842,0.382 -5.808,1.557 -3.774,2.73 -1.174,2.034 0,0"
						style="fill:#c8c8c8;fill-opacity:1;fill-rule:nonzero;stroke:none" id="LED3" inkscape:connector-curvature="0" />
				</g>
				<g id="g2316" transform="matrix(1.96,0,0,1.96,53.16846,36.485237)">
					<path d="M 0,0 C 2.034,-1.174 2.73,-3.774 1.556,-5.809 0.382,-7.842 -2.218,-8.539 -4.252,-7.364 -6.286,-6.19 -6.982,-3.59 -5.808,-1.556 -4.634,0.478 -2.034,1.175 0,0"
						style="fill:#c8c8c8;fill-opacity:1;fill-rule:nonzero;stroke:none" id="LED4" inkscape:connector-curvature="0" />
				</g>
		</g>
	</g>
</svg>`;


    export class FieldLights extends Blockly.Field implements Blockly.FieldCustom {
        public isFieldCustom_ = true;

        private params: any;


		/**
		 * SVG image of an image.
		 * @type {SVGElement}
		 * @private
		 */
		private imageElement_: SVGElement;

		private internalValue_: {[id: string]: number} = {};

		private neopixels_: SVGElement[] = [];
		static numPixels = 10;
		static neopixels_events: any[] = [];

		/**
		 * Array of colors for a 7-cell wide simple-grid color picker.
		 * @type {Array<string>}
		 */
		static GRID_COLORS = [
			'red', 'orange', 'yellow',
        	'green', 'grey', 'blue',
			'purple', 'pink', 'white'
		];

		static GRID_COLORS_VAL = [
			'Colors.Red', 'Colors.Orange', 'Colors.Yellow',
			'Colors.Green', '0', 'Colors.Blue',
			'Colors.Purple', 'Colors.Pink', 'Colors.White'
		];

		static GRID_COLORS_INDEX: {[color: string]: number} = {
			'Colors.Red': 0,
			'Colors.Orange': 1,
			'Colors.Yellow': 2,
			'Colors.Green': 3,
			'0': 4,
			'Colors.Blue': 5,
			'Colors.Purple': 6,
			'Colors.Pink': 7,
			'Colors.White': 8
		}

		static DEFAULT_INDEX = 0;

        constructor(text: string, params: any, validator?: Function) {
            super(text, validator);
            this.params = params;
        }

        /**
         * Show the inline free-text editor on top of the text.
         * @private
         */
        showEditor_() {
			
        }

        render_() {
			if (!this.visible_) {
				this.size_.width = 0;
				return;
			}

			goog.dom.removeChildren(/** @type {!Element} */ (this.textElement_));
			goog.dom.removeNode(this.imageElement_);

			const imageWidth = 200;
			const imageHeight = 200;

			const boardElement = new DOMParser().parseFromString(BOARD_SVG, "image/svg+xml").querySelector("svg") as SVGSVGElement;
			
			pxsim.svg.hydrate(boardElement, {
				'height': imageHeight, 
				'width': imageWidth,
				'padding': '2px'
			})

			const defs = <SVGDefsElement>pxsim.svg.child(boardElement, "defs", {});

			// Add the noepixel glow filter
			let neopixelglow = pxsim.svg.child(defs, "filter", { id: "neopixelglow", x: "-200%", y: "-200%", width: "400%", height: "400%" });
            pxsim.svg.child(neopixelglow, "feGaussianBlur", { stdDeviation: "4.3", result: "coloredBlur" });
            let neopixelmerge = pxsim.svg.child(neopixelglow, "feMerge", {});
            pxsim.svg.child(neopixelmerge, "feMergeNode", { in: "coloredBlur" })
            pxsim.svg.child(neopixelmerge, "feMergeNode", { in: "SourceGraphic" })

			
			this.fieldGroup_.appendChild(boardElement);

			for (let i = 0; i < 10; i++) {
				let neopixel = boardElement.getElementById("LED" + i) as SVGGElement;
				pxsim.svg.addClass(neopixel, 'neopixel');
				function callback(e: any) {
					this.onPixelClicked(neopixel, i);
				}
				Blockly.bindEventWithChecks_(neopixel, 'mouseup', this, callback);
				this.neopixels_.push(neopixel);
			}
			
			this.size_.height = Number(imageHeight) + 19;
			this.size_.width = Number(imageWidth);
        }

		onPixelClicked(neopixel: SVGElement, id: number) {
			pxsim.svg.addClass(neopixel, 'active');

			function widgetClosed() {
				pxsim.svg.removeClass(neopixel, 'active');
				FieldLights.widgetDispose_();
			}

			Blockly.WidgetDiv.show(this, this.sourceBlock_.RTL, widgetClosed);
			// Create the palette.
			var palette = new goog.ui.ColorPalette(FieldLights.GRID_COLORS);
			palette.setSize(3);
			
			var div = Blockly.WidgetDiv.DIV;
			palette.render(div);
    		goog.dom.classlist.add(palette.getElement(), 'simple-palette');

			// Position the palette in the middle of the field. 

			// Position the palette to line up with the field.
			// Record windowSize and scrollOffset before adding the palette.
			var windowSize = goog.dom.getViewportSize();
			var scrollOffset = goog.style.getViewportPageOffset(document);
			var xy = goog.style.getPageOffset(this.fieldGroup_);
			var borderBBox = this.fieldGroup_.getBoundingClientRect();
			// Record paletteSize after adding the palette.
			var paletteSize = goog.style.getSize(palette.getElement());

			// Position the palette picker in the middle
			xy.x += (borderBBox.width/2) - (paletteSize.width/2);
			xy.y += (borderBBox.height/2) - (paletteSize.height/2);
			Blockly.WidgetDiv.position(xy.x, xy.y, windowSize, scrollOffset,
										this.sourceBlock_.RTL);

			// Configure event handler.
			var thisField = this;
			function onColorEvent(event: any) {
				let colorIndex = event.target.getSelectedIndex() || FieldLights.DEFAULT_INDEX;
				Blockly.WidgetDiv.hide();
				if (colorIndex !== null) {
					const newValue = thisField.getValueArray(id, colorIndex);
					thisField.setValue(newValue)
				}
				pxsim.svg.removeClass(neopixel, 'active');
			}

			function onCloseEvent(event: any) {
				pxsim.svg.removeClass(neopixel, 'active');
			}

      		FieldLights.neopixels_events.push(goog.events.listen(palette, goog.ui.Component.EventType.ACTION, onColorEvent));
		};

		getText() {
			return this.getValueArray();
		}

		setValue(newValue: any) {
			if (newValue === null) {
				// No change if null.
				return;
			}
			var oldValue = this.getValue();
			if (oldValue == newValue) {
				return;
			}
			if (this.sourceBlock_ && Blockly.Events.isEnabled()) {
				Blockly.Events.fire(new Blockly.Events.Change(
					this.sourceBlock_, 'field', this.name, oldValue, newValue));
			}
			// Parse the text string
			const splitStr = newValue.replace('[','').replace(']','').split(',');
			for (let i = 0; i < splitStr.length; i++) {
				if (!this.neopixels_ || !this.neopixels_[i]) continue;
				const neopixel = this.neopixels_[i];
				const colorIndex = FieldLights.GRID_COLORS_INDEX[splitStr[i].trim()] || FieldLights.DEFAULT_INDEX;
				const colour = FieldLights.GRID_COLORS[colorIndex];
				this.internalValue_[i] = colorIndex;
				pxsim.svg.fill(neopixel, colour)
			}
		}

		setText(newText: string) {
			if (newText === null) {
				// No change if null.
				return;
			}
			newText = String(newText);
			if (newText === this.text_) {
				// No change.
				return;
			}
			this.text_ = newText;


			// Set width to 0 to force a rerender of this field.
			this.size_.width = 0;

			if (this.sourceBlock_ && this.sourceBlock_.rendered) {
				this.sourceBlock_.render();
				this.sourceBlock_.bumpNeighbours_();
			}
		}

		getValueArray(index?: number, colorInd?: number) {
			let retArray: string[] = [];
			for (let i = 0; i < FieldLights.numPixels; i++) {
				let colorIndex = FieldLights.DEFAULT_INDEX;
				if (this.internalValue_ && this.internalValue_[i])
					colorIndex = this.internalValue_[i];
				if (index == i)
					colorIndex = colorInd;
				const colorVal = FieldLights.GRID_COLORS_VAL[colorIndex]
				retArray.push(colorVal);
			}
			return '[' + retArray + ']';
		}

		/**
		 * Hide the colour palette.
		 * @private
		 */
		static widgetDispose_() {
			for (let i = 0; i < FieldLights.neopixels_events.length; i++) {
				const changeEventKey = FieldLights.neopixels_events[i];
				goog.events.unlistenByKey(changeEventKey);
			}
			Blockly.Events.setGroup(false);
		};

    }
}