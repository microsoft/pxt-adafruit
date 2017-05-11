/// <reference path="../../node_modules/pxt-core/localtypings/blockly.d.ts" />
/// <reference path="../../node_modules/pxt-core/built/pxtsim.d.ts"/>

namespace pxt.editor {

    export class FieldLights extends Blockly.Field implements Blockly.FieldCustom {
        public isFieldCustom_ = true;

        private params: any;


		/**
		 * SVG image of an image.
		 * @type {SVGElement}
		 * @private
		 */
		private imageElement_: SVGElement;

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
			'red', 'orange', 'yellow',
			'green', 'black', 'blue',
			'purple', 'pink', 'white'
		];

		static GRID_COLORS_INDEX: {[color: string]: number} = {
			'red': 0, 'RED': 0, 
			'orange': 1, 'ORANGE': 1, 
			'yellow': 2, 'YELLOW': 2,
			'green': 3, 'GREEN': 3,
			'black': 4, 'BLACK': 4, '0': 4,
			'blue': 5, 'BLUE': 5,
			'purple': 6, 'PURPLE': 6,
			'pink': 7, 'PINK': 7,
			'white': 8, 'WHITE': 8
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

			const BOARD_SVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" id="field-neopixels" version="1.1" xml:space="preserve"
	width="180.09375" height="179.22874" viewBox="0 0 180.09375 179.22874">
	<g id="g10" transform="matrix(1.25,0,0,-1.25,0,179.22875)">
		<g id="g28" style="">
			<g id="g30" clip-path="url(#clipPath32)">
				<g id="g36" transform="translate(142.2739,72.0873)">
					<path d="M 1.109,9.85 C -3.32,41.771 -28.415,66.866 -60.336,71.295 l -19.8,0 c -39.403,-5.467 -66.913,-41.842 -61.446,-81.244 5.468,-39.404 41.843,-66.913 81.246,-61.446 39.402,5.467 66.912,41.842 61.445,81.245"
						style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path38" inkscape:connector-curvature="0"
					/>
				</g>
			</g>
		</g>
		<g id="g428" transform="translate(78.4155,2.3998)" style="filter:url(#filter5965)">
			<path d="M 0,0 -12.756,0" style="fill:none;stroke:#ffffff;stroke-width:0.57599998;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path430" inkscape:connector-curvature="0" />
		</g>
		<g id="g432" transform="translate(60.6992,12.3197)" style="filter:url(#filter5969)">
			<path d="M 0,0 0,11.339" style="fill:none;stroke:#ffffff;stroke-width:0.57599998;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path434" inkscape:connector-curvature="0" />
		</g>
		<g id="g436" transform="translate(60.6992,23.6586)" style="filter:url(#filter5973)">
			<path d="M 0,0 2.409,0" style="fill:none;stroke:#ffffff;stroke-width:0.57599998;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path438" inkscape:connector-curvature="0" />
		</g>
		<g id="g440" transform="translate(63.1084,23.6586)" style="filter:url(#filter5977)">
			<path d="M 0,0 0,-7.086" style="fill:none;stroke:#ffffff;stroke-width:0.57599998;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path442" inkscape:connector-curvature="0" />
		</g>
		<g id="g444" transform="translate(63.1084,16.5726)" style="filter:url(#filter5981)">
			<path d="M 0,0 3.969,0" style="fill:none;stroke:#ffffff;stroke-width:0.57599998;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path446" inkscape:connector-curvature="0" />
		</g>
		<g id="g448" transform="translate(76.9986,16.5726)" style="filter:url(#filter5985)">
			<path d="M 0,0 3.969,0" style="fill:none;stroke:#ffffff;stroke-width:0.57599998;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path450" inkscape:connector-curvature="0" />
		</g>
		<g id="g452" transform="translate(80.9673,16.5726)" style="filter:url(#filter5989)">
			<path d="M 0,0 0,7.086" style="fill:none;stroke:#ffffff;stroke-width:0.57599998;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path454" inkscape:connector-curvature="0" />
		</g>
		<g id="g456" transform="translate(80.9673,23.6586)" style="filter:url(#filter5993)">
			<path d="M 0,0 2.409,0" style="fill:none;stroke:#ffffff;stroke-width:0.57599998;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path458" inkscape:connector-curvature="0" />
		</g>
		<g id="g460" transform="translate(83.3765,23.6586)" style="filter:url(#filter5997)">
			<path d="M 0,0 0,-11.339" style="fill:none;stroke:#ffffff;stroke-width:0.57599998;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
				id="path462" inkscape:connector-curvature="0" />
		</g>
		<g id="g632" style="opacity:1;">
			<g id="g634" clip-path="url(#clipPath636)" style="">
				<g id="g1924" transform="translate(80.5415,4.2416)" style="" />
				<path id="path1930" style="fill:#4d4d4d;fill-opacity:1;fill-rule:nonzero;stroke:none;opacity:0.65" d="m 67.785,7.785 -2.835,0 0,8.504 2.835,0 0,-8.504 z m 11.34,0 -2.835,0 0,8.504 2.835,0 0,-8.504 z m 1.4165,-3.5434 2.835,0 0,14.882 -22.677,0 0,-14.882 2.834,0 0,-2.126 17.008,0 0,2.126 z"
					inkscape:connector-curvature="0" />
				<g id="g2022" transform="translate(66.2271,136.5842)" style="opacity:0.797">
					<path id="path2024" style="fill:#ececec;fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 0,0 -1.418,0 -0.283,4.252 1.984,0 L 0,0 Z m 13.039,0 -1.417,0 -0.284,4.252 1.984,0 L 13.039,0 Z m -10.6299,-4.394 0,0.709 1.417,0 0,-2.552 3.969,0 0,2.552 1.417,0 0,-0.709 2.268,0 0,-2.126 5.102,0 0,13.606 -21.543,0 0,-13.606 5.102,0 0,2.126 2.268,0 z"
						inkscape:connector-curvature="0" />
				</g>
				<g id="g2346" transform="translate(35.2637,87.2255)" style="" />
				<g id="g2430" transform="translate(59.9859,44.0111)" style="" />
				<g id="g2456" transform="translate(43.957,70.7308)" style="opacity:0.65">
					<path id="BTN_A_INNER" style="fill:#cccccc;fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 0,0 c -2.348,0 -4.252,1.904 -4.252,4.252 0,2.349 1.904,4.252 4.252,4.252 2.349,0 4.252,-1.903 4.252,-4.252 C 4.252,1.904 2.349,0 0,0 m -9.0698,-2.2675 0,-1.983 18.141,0 0,1.983 1.701,0 0,1.7 -1.701,0 0,9.639 1.701,0 0,1.701 -1.701,0 0,1.983 -18.141,0 0,-1.983 -1.701,0 0,-1.701 1.701,0 0,-9.639 -1.701,0 0,-1.7 1.701,0 z"
						inkscape:connector-curvature="0" />
				</g>
				<g id="g2464" transform="translate(91.0474,68.4633)" style="" />
				<g id="g2468" transform="translate(100.1177,70.7308)" style="opacity:0.65">
					<path id="BTN_B_INNER" style="fill:#cccccc;fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 0,0 c -2.349,0 -4.252,1.904 -4.252,4.252 0,2.349 1.903,4.252 4.252,4.252 2.348,0 4.252,-1.903 4.252,-4.252 C 4.252,1.904 2.348,0 0,0 m -9.0703,-2.2675 0,-1.983 18.141,0 0,1.983 1.701,0 0,1.7 -1.701,0 0,9.639 1.701,0 0,1.701 -1.701,0 0,1.983 -18.141,0 0,-1.983 -1.701,0 0,-1.701 1.701,0 0,-9.639 -1.701,0 0,-1.7 1.701,0 z"
						inkscape:connector-curvature="0" />
				</g>
				<g id="g7289" style="opacity:0.583">
					<g style="opacity:0.92" transform="translate(13.0444,72.1024)" id="g1916">
						<path inkscape:connector-curvature="0" id="PWR_1" style="fill:#9a916c;fill-opacity:1;fill-rule:nonzero;stroke:none"
							d="m 0,0 c 0,4.305 -3.49,7.795 -7.795,7.795 l -4.534,0 C -12.605,5.233 -12.756,2.635 -12.756,0 c 0,-2.635 0.151,-5.233 0.427,-7.795 l 4.534,0 C -3.49,-7.795 0,-4.305 0,0 m -6.662,-4.677 c -2.583,0 -4.677,2.094 -4.677,4.677 0,2.583 2.094,4.677 4.677,4.677 2.583,0 4.677,-2.094 4.677,-4.677 0,-2.583 -2.093,-4.677 -4.677,-4.677"
						/>
					</g>
					<g style="opacity:0.92" transform="translate(101.4439,123.3422)" id="g1920">
						<path inkscape:connector-curvature="0" id="PWR_2" style="fill:#9a916c;fill-opacity:1;fill-rule:nonzero;stroke:none"
							d="M 0,0 C 3.729,-2.152 8.496,-0.875 10.648,2.853 L 12.915,6.78 C 10.835,8.3 8.66,9.729 6.378,11.047 4.096,12.364 1.771,13.533 -0.586,14.575 L -2.853,10.648 C -5.006,6.92 -3.729,2.152 0,0 M -0.72,8.108 C 0.572,10.345 3.433,11.111 5.67,9.82 7.906,8.528 8.673,5.668 7.382,3.431 6.09,1.194 3.229,0.428 0.992,1.719 -1.244,3.011 -2.012,5.87 -0.72,8.108"
						/>
					</g>
					<g style="opacity:0.92" transform="translate(127.5689,51.9447)" id="g2070">
						<path inkscape:connector-curvature="0" id="PIN_1" style="fill:#9a916c;fill-opacity:1;fill-rule:nonzero;stroke:none"
							d="m 0,0 c -1.473,-4.046 0.613,-8.519 4.658,-9.991 l 4.261,-1.551 c 1.136,2.313 2.166,4.703 3.067,7.179 0.902,2.476 1.649,4.969 2.265,7.471 L 9.99,4.658 C 5.945,6.131 1.472,4.045 0,0 M 7.859,2.116 C 10.287,1.232 11.538,-1.451 10.655,-3.878 9.771,-6.306 7.088,-7.557 4.66,-6.674 2.233,-5.79 0.981,-3.106 1.865,-0.679 2.748,1.748 5.432,3 7.859,2.116"
						/>
					</g>
					<g style="opacity:0.92" transform="translate(42.4507,123.1615)" id="g2080">
						<path inkscape:connector-curvature="0" id="GND_0" style="fill:#9a916c;fill-opacity:1;fill-rule:nonzero;stroke:none"
							d="M 0,0 C 3.728,2.153 5.005,6.92 2.853,10.648 L 0.586,14.575 C -1.771,13.533 -4.096,12.365 -6.378,11.047 -8.66,9.729 -10.834,8.3 -12.916,6.78 l 2.268,-3.927 C -8.496,-0.875 -3.729,-2.152 0,0 M -7.382,3.431 C -8.673,5.668 -7.907,8.528 -5.67,9.82 -3.433,11.111 -0.572,10.345 0.719,8.108 2.011,5.871 1.244,3.011 -0.993,1.719 -3.229,0.428 -6.089,1.193 -7.382,3.431"
						/>
					</g>
					<g style="opacity:0.92" transform="translate(131.0318,72.1034)" id="g2084">
						<path inkscape:connector-curvature="0" id="GND_2" style="fill:#9a916c;fill-opacity:1;fill-rule:nonzero;stroke:none"
							d="m 0,0 c 0,-4.305 3.49,-7.795 7.795,-7.795 l 4.534,0 c 0.275,2.562 0.427,5.16 0.427,7.795 0,2.635 -0.152,5.233 -0.427,7.795 l -4.534,0 C 3.49,7.795 0,4.305 0,0 m 6.662,4.677 c 2.583,0 4.677,-2.094 4.677,-4.677 0,-2.583 -2.094,-4.677 -4.677,-4.677 -2.583,0 -4.677,2.094 -4.677,4.677 0,2.583 2.093,4.677 4.677,4.677"
						/>
					</g>
					<g style="opacity:0.92" transform="translate(42.6314,20.8636)" id="g2088">
						<path inkscape:connector-curvature="0" id="path2090" style="fill:#9a916c;fill-opacity:1;fill-rule:nonzero;stroke:none"
							d="m 0,0 c -3.728,2.152 -8.496,0.875 -10.648,-2.853 l -2.267,-3.926 c 2.081,-1.521 4.255,-2.95 6.537,-4.268 2.282,-1.317 4.607,-2.485 6.964,-3.527 l 2.267,3.926 C 5.006,-6.92 3.729,-2.152 0,0 m 0.719,-8.107 c -1.291,-2.238 -4.152,-3.004 -6.388,-1.712 -2.237,1.291 -3.004,4.151 -1.712,6.388 1.291,2.238 4.152,3.003 6.388,1.712 2.238,-1.292 3.004,-4.151 1.712,-6.388"
						/>
					</g>
					<g style="opacity:0.92" transform="translate(127.5679,92.2621)" id="g2114">
						<path inkscape:connector-curvature="0" id="PIN_2" style="fill:#9a916c;fill-opacity:1;fill-rule:nonzero;stroke:none"
							d="m 0,0 c 1.473,-4.045 5.946,-6.131 9.991,-4.659 l 4.261,1.551 C 13.635,-0.606 12.889,1.887 11.987,4.363 11.086,6.839 10.056,9.229 8.92,11.542 L 4.659,9.991 C 0.614,8.519 -1.472,4.045 0,0 M 4.661,6.673 C 7.088,7.557 9.772,6.305 10.655,3.878 11.539,1.451 10.287,-1.233 7.86,-2.117 5.433,-3 2.749,-1.749 1.865,0.679 0.982,3.106 2.232,5.79 4.661,6.673"
						/>
					</g>
					<g style="opacity:0.92" transform="translate(117.3228,110.118)" id="g2118">
						<path inkscape:connector-curvature="0" id="PIN_3" style="fill:#9a916c;fill-opacity:1;fill-rule:nonzero;stroke:none"
							d="m 0,0 c 2.768,-3.298 7.685,-3.728 10.982,-0.961 l 3.473,2.915 C 13.02,4.094 11.466,6.181 9.771,8.199 8.078,10.218 6.292,12.111 4.435,13.896 L 0.961,10.982 C -2.337,8.214 -2.767,3.298 0,0 M 2.098,7.865 C 4.076,9.525 7.026,9.267 8.687,7.289 10.347,5.31 10.089,2.36 8.109,0.699 6.131,-0.961 3.181,-0.703 1.521,1.276 -0.14,3.254 0.118,6.204 2.098,7.865"
						/>
					</g>
					<g style="opacity:0.92" transform="translate(117.3237,34.0882)" id="g2122">
						<path inkscape:connector-curvature="0" id="PIN_0" style="fill:#9a916c;fill-opacity:1;fill-rule:nonzero;stroke:none"
							d="m 0,0 c -2.768,-3.298 -2.337,-8.215 0.961,-10.981 l 3.473,-2.915 c 1.858,1.785 3.644,3.678 5.337,5.697 1.694,2.018 3.249,4.105 4.684,6.246 L 10.981,0.961 C 7.684,3.729 2.767,3.298 0,0 m 8.109,-0.699 c 1.979,-1.66 2.238,-4.611 0.577,-6.589 -1.661,-1.98 -4.611,-2.237 -6.589,-0.577 -1.979,1.661 -2.237,4.61 -0.576,6.59 1.66,1.978 4.609,2.237 6.588,0.576"
						/>
					</g>
					<g style="opacity:0.92" transform="translate(16.687,51.224)" id="g2418">
						<path inkscape:connector-curvature="0" id="RX" style="fill:#9a916c;fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 0,0 c -1.473,4.045 -5.946,6.131 -9.991,4.658 l -4.26,-1.551 c 0.616,-2.502 1.363,-4.994 2.264,-7.47 0.902,-2.477 1.932,-4.866 3.068,-7.179 l 4.26,1.551 C -0.614,-8.519 1.472,-4.046 0,0 m -4.661,-6.674 c -2.427,-0.884 -5.111,0.368 -5.994,2.795 -0.884,2.428 0.368,5.111 2.795,5.995 2.427,0.883 5.111,-0.368 5.995,-2.796 0.883,-2.426 -0.367,-5.11 -2.796,-5.994"
						/>
					</g>
					<g style="opacity:0.92" transform="translate(26.752,109.9374)" id="g2422">
						<path inkscape:connector-curvature="0" id="SCL" style="fill:#9a916c;fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 0,0 c 2.767,3.298 2.337,8.214 -0.961,10.981 l -3.473,2.915 C -6.292,12.111 -8.078,10.218 -9.772,8.199 -11.465,6.181 -13.02,4.093 -14.455,1.954 l 3.473,-2.915 C -7.684,-3.728 -2.767,-3.298 0,0 m -8.11,0.699 c -1.978,1.66 -2.237,4.611 -0.576,6.59 1.66,1.978 4.61,2.236 6.589,0.576 C -0.119,6.205 0.14,3.254 -1.521,1.276 -3.181,-0.703 -6.13,-0.962 -8.11,0.699"
						/>
					</g>
					<g style="opacity:0.92" transform="translate(16.5064,92.2611)" id="g2426">
						<path inkscape:connector-curvature="0" id="SDA" style="fill:#9a916c;fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 0,0 c 1.473,4.045 -0.613,8.519 -4.659,9.991 l -4.26,1.551 c -1.136,-2.313 -2.166,-4.703 -3.068,-7.179 -0.901,-2.476 -1.647,-4.969 -2.264,-7.471 l 4.26,-1.551 C -5.945,-6.131 -1.472,-4.045 0,0 m -7.86,-2.116 c -2.427,0.883 -3.679,3.567 -2.795,5.994 0.884,2.427 3.567,3.679 5.994,2.795 C -2.233,5.79 -0.982,3.106 -1.865,0.679 -2.749,-1.749 -5.432,-3 -7.86,-2.116"
						/>
					</g>
					<g style="opacity:0.92" transform="translate(27.4727,33.3675)" id="g2510">
						<path inkscape:connector-curvature="0" id="TX" style="fill:#9a916c;fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 0,0 c -2.768,3.298 -7.684,3.728 -10.982,0.961 l -3.473,-2.914 c 1.435,-2.141 2.99,-4.228 4.683,-6.246 1.694,-2.019 3.48,-3.912 5.338,-5.697 l 3.473,2.915 C 2.337,-8.215 2.767,-3.298 0,0 m -2.097,-7.865 c -1.979,-1.66 -4.929,-1.403 -6.59,0.577 -1.66,1.978 -1.401,4.929 0.577,6.589 1.979,1.66 4.929,1.402 6.589,-0.577 1.661,-1.979 1.403,-4.928 -0.576,-6.589"
						/>
					</g>
					<g style="opacity:0.92" transform="translate(101.4448,20.8646)" id="g2580">
						<path inkscape:connector-curvature="0" id="VBATT" style="fill:#9a916c;fill-opacity:1;fill-rule:nonzero;stroke:none"
							d="m 0,0 c -3.729,-2.152 -5.006,-6.92 -2.854,-10.648 l 2.268,-3.927 c 2.357,1.042 4.682,2.21 6.964,3.528 2.282,1.318 4.457,2.747 6.537,4.267 l -2.267,3.926 C 8.496,0.875 3.729,2.152 0,0 M 7.382,-3.432 C 8.673,-5.668 7.906,-8.528 5.67,-9.82 c -2.237,-1.291 -5.098,-0.525 -6.39,1.712 -1.291,2.237 -0.524,5.097 1.712,6.388 2.237,1.292 5.098,0.527 6.39,-1.712"
						/>
					</g>
				</g>
			</g>
		</g>
		<g transform="translate(-0.04256849,-0.0084294)" id="g5399">
			<g transform="matrix(1.6796,0,0,1.6796,108.68786,52.637703)" id="g2144" style="stroke:#ffffff;stroke-opacity:1">
				<path inkscape:connector-curvature="0" id="LED6" style="fill:#c8c8c8;fill-opacity:1;fill-rule:nonzero;stroke:#ffffff;stroke-opacity:1"
					d="M 0,0 C 1.174,2.033 3.774,2.73 5.808,1.556 7.842,0.382 8.538,-2.219 7.364,-4.252 6.19,-6.286 3.59,-6.982 1.556,-5.809 -0.478,-4.635 -1.175,-2.034 0,0"
				/>
			</g>
			<g transform="matrix(1.6796,0,0,1.6796,92.944431,36.173667)" id="g2164" style="stroke:#ffffff;stroke-opacity:1">
				<path inkscape:connector-curvature="0" id="LED5" style="fill:#c8c8c8;fill-opacity:1;fill-rule:nonzero;stroke:#ffffff;stroke-opacity:1"
					d="M 0,0 C 2.033,1.174 4.634,0.478 5.809,-1.557 6.982,-3.59 6.285,-6.19 4.252,-7.364 2.218,-8.539 -0.383,-7.842 -1.557,-5.809 -2.73,-3.774 -2.034,-1.174 0,0"
				/>
			</g>
			<g transform="matrix(1.6796,0,0,1.6796,113.48974,71.3832)" id="g2182" style="stroke:#ffffff;stroke-opacity:1">
				<path inkscape:connector-curvature="0" id="LED7" style="fill:#c8c8c8;fill-opacity:1;fill-rule:nonzero;stroke:#ffffff;stroke-opacity:1"
					d="M 0,0 C 0,2.349 1.904,4.252 4.252,4.252 6.601,4.252 8.504,2.349 8.504,0 8.504,-2.348 6.601,-4.252 4.252,-4.252 1.904,-4.252 0,-2.348 0,0"
				/>
			</g>
			<g transform="matrix(1.6796,0,0,1.6796,108.32589,91.928964)" id="g2200" style="stroke:#ffffff;stroke-opacity:1">
				<path inkscape:connector-curvature="0" id="LED8" style="fill:#c8c8c8;fill-opacity:1;fill-rule:nonzero;stroke:#ffffff;stroke-opacity:1"
					d="M 0,0 C -1.174,2.034 -0.477,4.634 1.557,5.809 3.591,6.982 6.191,6.286 7.365,4.252 8.539,2.218 7.843,-0.382 5.809,-1.556 3.775,-2.73 1.175,-2.034 0,0"
				/>
			</g>
			<g transform="matrix(1.6796,0,0,1.6796,92.582797,108.03246)" id="g2220" style="stroke:#ffffff;stroke-opacity:1">
				<path inkscape:connector-curvature="0" id="LED9" style="fill:#c8c8c8;fill-opacity:1;fill-rule:nonzero;stroke:#ffffff;stroke-opacity:1"
					d="M 0,0 C -2.033,1.174 -2.73,3.774 -1.556,5.808 -0.382,7.842 2.219,8.539 4.252,7.365 6.286,6.19 6.982,3.59 5.809,1.556 4.635,-0.478 2.034,-1.174 0,0"
				/>
			</g>
			<g transform="matrix(1.6796,0,0,1.6796,50.771632,108.39175)" id="g2240" style="stroke:#ffffff;stroke-opacity:1">
				<path inkscape:connector-curvature="0" id="LED0" style="fill:#c8c8c8;fill-opacity:1;fill-rule:nonzero;stroke:#ffffff;stroke-opacity:1"
					d="M 0,0 C -2.034,-1.174 -4.634,-0.477 -5.809,1.557 -6.982,3.59 -6.286,6.19 -4.252,7.365 -2.218,8.539 0.382,7.842 1.556,5.809 2.73,3.775 2.034,1.174 0,0"
				/>
			</g>
			<g transform="matrix(1.6796,0,0,1.6796,36.108044,92.64827)" id="g2260" style="stroke:#ffffff;stroke-opacity:1">
				<path inkscape:connector-curvature="0" id="LED1" style="fill:#c8c8c8;fill-opacity:1;fill-rule:nonzero;stroke:#ffffff;stroke-opacity:1"
					d="m 0,0 c -1.174,-2.034 -3.774,-2.73 -5.808,-1.556 -2.034,1.174 -2.731,3.774 -1.557,5.808 1.175,2.034 3.775,2.73 5.809,1.556 C 0.478,4.634 1.174,2.034 0,0"
				/>
			</g>
			<g transform="matrix(1.6796,0,0,1.6796,30.585959,72.1024)" id="g2278" style="stroke:#ffffff;stroke-opacity:1">
				<path inkscape:connector-curvature="0" id="LED2" style="fill:#c8c8c8;fill-opacity:1;fill-rule:nonzero;stroke:#ffffff;stroke-opacity:1"
					d="m 0,0 c 0,-2.348 -1.904,-4.252 -4.252,-4.252 -2.348,0 -4.252,1.904 -4.252,4.252 0,2.348 1.904,4.252 4.252,4.252 C -1.904,4.252 0,2.348 0,0"
				/>
			</g>
			<g transform="matrix(1.6796,0,0,1.6796,36.108554,50.47643)" id="g2296" style="stroke:#ffffff;stroke-opacity:1">
				<path inkscape:connector-curvature="0" id="LED3" style="fill:#c8c8c8;fill-opacity:1;fill-rule:nonzero;stroke:#ffffff;stroke-opacity:1"
					d="M 0,0 C 1.174,-2.034 0.478,-4.634 -1.556,-5.809 -3.59,-6.982 -6.19,-6.286 -7.365,-4.252 -8.539,-2.219 -7.842,0.382 -5.808,1.557 -3.774,2.73 -1.174,2.034 0,0"
				/>
			</g>
			<g transform="matrix(1.6796,0,0,1.6796,52.572333,35.452804)" id="g2316" style="stroke:#ffffff;stroke-opacity:1">
				<path inkscape:connector-curvature="0" id="LED4" style="fill:#c8c8c8;fill-opacity:1;fill-rule:nonzero;stroke:#ffffff;stroke-opacity:1"
					d="M 0,0 C 2.034,-1.174 2.73,-3.774 1.556,-5.809 0.382,-7.842 -2.218,-8.539 -4.252,-7.364 -6.286,-6.19 -6.982,-3.59 -5.808,-1.556 -4.634,0.478 -2.034,1.175 0,0"
				/>
			</g>
		</g>
	</g>
</svg>`;

			const boardElement = new DOMParser().parseFromString(BOARD_SVG, "image/svg+xml").querySelector('svg') as SVGSVGElement;
			
			pxsim.svg.hydrate(boardElement, {
                "version": "1.0",
                "viewBox": `0 0 ${imageWidth} ${imageHeight}`,
				'height': imageHeight, 
				'width': imageWidth,
				'padding': '2px'
			})

			const defs = <SVGDefsElement>pxsim.svg.child(boardElement, "defs", {});

			const colors = this.getValue().replace(/\"/g, "").split(' ');

			for (let i = 0; i < 10; i++) {
				let neopixel = boardElement.getElementById(`LED${i}`) as SVGPathElement;
				pxsim.svg.addClass(neopixel, 'neopixel');
				function callback(e: any) {
					this.onPixelClicked(neopixel, i);
				}
				Blockly.bindEventWithChecks_(neopixel, 'mouseup', this, callback);

				const colorIndex = colors && colors[i] ? FieldLights.GRID_COLORS_INDEX[colors[i].trim()] : FieldLights.DEFAULT_INDEX;
				const colour = FieldLights.GRID_COLORS[colorIndex];
				pxsim.svg.fill(neopixel, colour)

				this.neopixels_.push(neopixel);
			}

			this.fieldGroup_.appendChild(boardElement);

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

      		FieldLights.neopixels_events.push(goog.events.listen(palette as any, goog.ui.Component.EventType.ACTION, onColorEvent));
		};

		getValue() {
			const val = this.getText();
			if (val == "") return '"red red red red red red red red red red"';
			return val;
		}

		getValueArray(index: number, colorInd: number) {
			let colors = this.getValue().replace(/\"/g, "").trim().split(' ');
			let retArray: string[] = [];
			for (let i = 0; i < FieldLights.numPixels; i++) {
				let colorIndex = colors && colors[i] ? FieldLights.GRID_COLORS_INDEX[colors[i].trim()] : FieldLights.DEFAULT_INDEX;
				if (index == i)
					colorIndex = colorInd;
				const colorVal = FieldLights.GRID_COLORS_VAL[colorIndex];
				retArray.push(colorVal);
			}
			return `"` + retArray.join(' ') + `"`;
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