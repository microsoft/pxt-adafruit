/// <reference path="../node_modules/pxt-core/localtypings/blockly.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>

namespace pxt.editor {

  export class FieldLights extends Blockly.Field implements Blockly.FieldCustom {
    public isFieldCustom_ = true;

    private params: any;

    private boardElement: SVGSVGElement;
    private paletteElement_: SVGGElement;
    private neopixels_: SVGElement[];
    private paletteButtons: SVGElement[];

    static NUM_PIXELS = 10;
    static imageWidth = 200;
    static imageHeight = 200;

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

    initRing() {
      const BOARD_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" id="field-neopixels" viewBox="0 0 180.09375 179.22874">
  <g id="g28">
    <g id="g30" clip-path="url(#clipPath32)" transform="matrix(1.25 0 0 -1.25 0 179.23)">
      <g id="g36">
        <path id="path38" d="M143.3829 81.9373c-4.429 31.921-29.524 57.016-61.445 61.445h-19.8c-39.403-5.467-66.913-41.842-61.446-81.244 5.468-39.404 41.843-66.913 81.246-61.446 39.402 5.467 66.912 41.842 61.445 81.245"/>
      </g>
    </g>
  </g>
  <g id="g428" transform="matrix(1.25 0 0 -1.25 98.02 176.23)" filter="url(#filter5965)">
    <path id="path430" fill="none" stroke="#fff" stroke-width=".57599998" d="M0 0h-12.756" stroke-linecap="round"/>
  </g>
  <g id="g432" transform="matrix(1.25 0 0 -1.25 75.87 163.83)" filter="url(#filter5969)">
    <path id="path434" fill="none" stroke="#fff" stroke-width=".57599998" d="M0 0v11.339" stroke-linecap="round"/>
  </g>
  <g id="g436" transform="matrix(1.25 0 0 -1.25 75.87 149.66)" filter="url(#filter5973)">
    <path id="path438" fill="none" stroke="#fff" stroke-width=".57599998" d="M0 0h2.409" stroke-linecap="round"/>
  </g>
  <g id="g440" transform="matrix(1.25 0 0 -1.25 78.89 149.66)" filter="url(#filter5977)">
    <path id="path442" fill="none" stroke="#fff" stroke-width=".57599998" d="M0 0v-7.086" stroke-linecap="round"/>
  </g>
  <g id="g444" transform="matrix(1.25 0 0 -1.25 78.89 158.51)" filter="url(#filter5981)">
    <path id="path446" fill="none" stroke="#fff" stroke-width=".57599998" d="M0 0h3.969" stroke-linecap="round"/>
  </g>
  <g id="g448" transform="matrix(1.25 0 0 -1.25 96.25 158.51)" filter="url(#filter5985)">
    <path id="path450" fill="none" stroke="#fff" stroke-width=".57599998" d="M0 0h3.969" stroke-linecap="round"/>
  </g>
  <g id="g452" transform="matrix(1.25 0 0 -1.25 101.21 158.51)" filter="url(#filter5989)">
    <path id="path454" fill="none" stroke="#fff" stroke-width=".57599998" d="M0 0v7.086" stroke-linecap="round"/>
  </g>
  <g id="g456" transform="matrix(1.25 0 0 -1.25 101.21 149.66)" filter="url(#filter5993)">
    <path id="path458" fill="none" stroke="#fff" stroke-width=".57599998" d="M0 0h2.409" stroke-linecap="round"/>
  </g>
  <g id="g460" transform="matrix(1.25 0 0 -1.25 104.22 149.66)" filter="url(#filter5997)">
    <path id="path462" fill="none" stroke="#fff" stroke-width=".57599998" d="M0 0v-11.339" stroke-linecap="round"/>
  </g>
  <path id="path1930" fill="#4d4d4d" d="M84.73125 169.49875H81.1875v-10.63h3.54375v10.63zm14.175 0H95.3625v-10.63h3.54375v10.63zm1.77062 4.42925h3.54375v-18.6025H75.874375v18.6025h3.5425v2.6575h21.259995v-2.6575z" opacity=".65"/>
  <g id="g2022" opacity=".797">
    <path id="path2024" fill="#ececec" d="M82.783875 8.49975h-1.7725l-.35375-5.315h2.48l-.35375 5.315zm16.29875 0h-1.77125l-.355-5.315h2.48l-.35375 5.315zm-13.287375 5.4925V13.106h1.77125v3.19h4.96125v-3.19H94.299v.88625h2.835v2.6575h6.3775V-.35775H76.58275v17.0075h6.3775v-2.6575h2.835z"/>
  </g>
  <g id="palette" stroke-opacity="0" stroke-linecap="round" stroke-linejoin="round">
    <circle id="paletteback" cx="90.046875" cy="89.614372" r="45.914173" fill="#fff" stroke="#969696" stroke-width="2"/>
    <path id="paletteslice0" fill="#fff" stroke="#781927" stroke-width="2" d="M87.789062 46.578125a43.153011 43.153011 0 0 0-26.574218 11.011719l19.052734 19.050781a16.268755 16.268755 0 0 1 7.521484-3.126953V46.578125z" data-color="white"/>
    <path id="paletteslice1" fill="red" stroke="#781927" stroke-width="2" d="M92.304688 46.558594v26.96875a16.268755 16.268755 0 0 1 7.523437 3.113281l19.058595-19.058594a43.153011 43.153011 0 0 0-26.582032-11.023437z" data-color="red"/>
    <path id="paletteslice2" fill="#FF8C00" stroke="#781927" stroke-width="2" d="M122.08203 60.773438l-19.05664 19.05664a16.268755 16.268755 0 0 1 3.125 7.527344h26.93164a43.153011 43.153011 0 0 0-11-26.583984z" data-color="orange"/>
    <path id="paletteslice3" fill="#ff0" stroke="#781927" stroke-width="2" d="M106.13867 91.873047a16.268755 16.268755 0 0 1-3.11719 7.523437l19.04688 19.044926a43.153011 43.153011 0 0 0 11.05078-26.568363h-26.98047z" data-color="yellow"/>
    <path id="paletteslice4" fill="green" stroke="#781927" stroke-width="2" d="M99.826172 102.58789a16.268755 16.268755 0 0 1-7.521484 3.12695v26.93555a43.153011 43.153011 0 0 0 26.574222-11.01172l-19.052738-19.05078z" data-color="green"/>
    <path id="paletteslice5" fill="#00f" stroke="#781927" stroke-width="2" d="M80.265625 102.58789l-19.058594 19.05859a43.153011 43.153011 0 0 0 26.582031 11.02344v-26.96875a16.268755 16.268755 0 0 1-7.523437-3.11328z" data-color="blue"/>
    <path id="paletteslice6" fill="purple" stroke="#781927" stroke-width="2" d="M47.011719 91.873047a43.153011 43.153011 0 0 0 11 26.582033l19.05664-19.056642a16.268755 16.268755 0 0 1-3.125-7.525391h-26.93164z" data-color="purple"/>
    <path id="paletteslice7" fill="#FF1493" stroke="#781927" stroke-width="2" d="M58.025391 60.787109a43.153011 43.153011 0 0 0-11.050782 26.570313h26.980469a16.268755 16.268755 0 0 1 3.117188-7.523438L58.025391 60.787109z" data-color="pink"/>
    <ellipse id="palettecenter" cx="90.046875" cy="89.614372" fill="#c8c8c8" stroke="#969696" stroke-width=".42138419" data-color="black" ry="10.992458" rx="11.529466"/>
  </g>
  <path id="LED0" fill="#c8c8c8" d="M67.441473 39.831066c-6.648473 3.285402-14.699621.559743-17.988175-6.088931-3.282454-6.64512-.559948-14.69647 6.088728-17.985024 6.648473-3.285403 14.699621-.559744 17.985225 6.085578 3.285403 6.648472.562694 14.702975-6.085778 17.988377"/>
  <path id="LED1" fill="#c8c8c8" d="M44.27892256 59.6792352c-3.70702403 6.42256122-11.91678765 8.6202518-18.33934888 4.91322775-6.42256123-3.70702403-8.62341015-11.91678765-4.91638612-18.33934888 3.7101824-6.42256123 11.919946-8.6202518 18.34250723-4.91322776 6.4225612 3.70702406 8.6202518 11.91678768 4.91322774 18.3393489"/>
  <path id="LED2" fill="#c8c8c8" d="M33.64271755 87.9056233c0 7.41161627-6.0101011 13.42171738-13.42171738 13.42171738-7.4116163 0-13.4217174-6.0101011-13.4217174-13.4217174 0-7.41161627 6.0101011-13.42171738 13.4217174-13.42171738 7.41161628 0 13.42171738 6.0101011 13.42171738 13.4217174"/>
  <path id="LED3" fill="#c8c8c8" d="M43.14440856 129.1733782c-3.70702403 6.42256122-11.91678765 8.6202518-18.33934888 4.91322775-6.42256123-3.70702403-8.62341015-11.91678765-4.91638612-18.33934888 3.7101824-6.42256123 11.919946-8.6202518 18.34250723-4.91322776 6.4225612 3.70702406 8.6202518 11.91678768 4.91322774 18.3393489"/>
  <path id="LED4" fill="#c8c8c8" d="M63.288287 158.98944c-6.648473 3.2854-14.699622.55974-17.988176-6.08893-3.282454-6.64512-.559948-14.69647 6.088728-17.98503 6.648474-3.2854 14.699622-.55974 17.985226 6.08558 3.285403 6.64847.562694 14.70297-6.085778 17.98838"/>
  <path id="LED6" fill="#c8c8c8" d="M137.72869744 129.1733822c3.70702403 6.42256122 11.91678765 8.6202518 18.33934888 4.91322775 6.42256123-3.70702403 8.62341015-11.91678765 4.91638612-18.33934888-3.7101824-6.42256123-11.919946-8.6202518-18.34250723-4.91322776-6.4225612 3.70702406-8.6202518 11.91678768-4.91322774 18.3393489"/>
  <path id="LED5" fill="#c8c8c8" d="M117.58481 158.98944c6.64847 3.2854 14.69962.55974 17.98818-6.08893 3.28245-6.64512.55995-14.69647-6.08873-17.98503-6.64847-3.2854-14.69962-.55974-17.98523 6.08558-3.2854 6.64847-.56269 14.70297 6.08578 17.98838"/>
  <path id="LED7" fill="#c8c8c8" d="M147.23038745 87.9056273c0 7.41161627 6.0101011 13.42171738 13.42171738 13.42171738 7.4116163 0 13.4217174-6.0101011 13.4217174-13.4217174 0-7.41161627-6.0101011-13.42171738-13.4217174-13.42171738-7.41161628 0-13.42171738 6.0101011-13.42171738 13.4217174"/>
  <path id="LED8" fill="#c8c8c8" d="M136.59417744 59.6792392c3.70702403 6.42256122 11.91678765 8.6202518 18.33934888 4.91322775 6.42256123-3.70702403 8.62341015-11.91678765 4.91638612-18.33934888-3.7101824-6.42256123-11.919946-8.6202518-18.34250723-4.91322776-6.4225612 3.70702406-8.6202518 11.91678768-4.91322774 18.3393489"/>
  <path id="LED9" fill="#c8c8c8" d="M113.43163 39.83107c6.64847 3.285402 14.69962.559743 17.98817-6.088931 3.28245-6.64512.55995-14.69647-6.08873-17.985024-6.64847-3.285403-14.69962-.559744-17.98522 6.085578-3.28541 6.648472-.5627 14.702975 6.08578 17.988377"/>
</svg>
`;

      this.boardElement = pxsim.svg.parseString(BOARD_SVG);
      pxsim.svg.hydrate(this.boardElement, {
        'height': FieldLights.imageHeight,
        'width': FieldLights.imageWidth,
        'padding': '2px'
      })

      this.paletteElement_ = this.boardElement.getElementById("palette") as SVGGElement;

      this.neopixels_ = [];
      for (let i = 0; i < FieldLights.NUM_PIXELS; i++) {
        let neopixel = this.boardElement.getElementById("LED" + i) as SVGGElement;
        if (this.isCurrentlyEditable() && !this.isInFlyout()) {
          pxsim.svg.addClass(neopixel, 'neopixel');
          pxsim.svg.onClick(neopixel, ev => this.onPixelClicked(ev, neopixel, i));
        }
        this.neopixels_.push(neopixel);
      }

      this.paletteButtons = [];
      ['paletteslice0', 'paletteslice1', 'paletteslice2', 'paletteslice3',
        'paletteslice4', 'paletteslice5', 'paletteslice6', 'paletteslice7', 'palettecenter']
        .forEach((id, i) => {
          let btn = this.boardElement.getElementById(id) as SVGGElement;
          pxsim.svg.addClass(btn, 'colorbutton');
          if (this.isCurrentlyEditable() && !this.isInFlyout()) {
            if (i == 4) pxsim.svg.addClass(btn, 'active');
            pxsim.svg.onClick(btn, ev => this.onColorClicked(ev, btn));
          }
          this.paletteButtons.push(btn);
        })

      if (this.fieldGroup_) this.fieldGroup_.appendChild(this.boardElement);

      // Hide the borderRect since we're not using it.
      //(this.borderRect_ as HTMLElement).style.display = 'none';
    }

    private isInFlyout() {
      return ((<Blockly.WorkspaceSvg>this.sourceBlock_.workspace).getParentSvg() as SVGElement).className.baseVal == "blocklyFlyout";
    }

    render_() {
      if (!this.visible_) {
        this.size_.width = 0;
        return;
      }

      if (!this.neopixels_) this.initRing();

      const colors = this.getValue().replace(/["`']/g, "").split(/\s+/) || [];
      for (let i = 0; i < FieldLights.NUM_PIXELS; i++) {
        const neopixel = this.neopixels_[i];
        let c = colors[i] || "0xff";
        if (c == 'black' || c == '0')
          c = 'grey';
        pxsim.svg.fill(neopixel, c)
        neopixel.setAttribute("data-color", colors[i] || "0xff");
      }

      this.size_.height = Number(FieldLights.imageHeight) + 19;
      this.size_.width = Number(FieldLights.imageWidth);
    }

    onColorClicked(e: Event, btn: SVGElement) {
      if (Blockly.utils.isRightButton(e)) return;
      let previous = this.paletteButtons.filter(btn => pxsim.svg.hasClass(btn, 'active'))[0];
      if (previous) pxsim.svg.removeClass(previous, 'active');

      pxsim.svg.addClass(btn, 'active');
      if (this.sourceBlock_ && this.sourceBlock_.workspace) (<Blockly.WorkspaceSvg>this.sourceBlock_.workspace).getAudioManager().play('click');
    }

    onPixelClicked(e: Event, neopixel: SVGElement, id: number) {
      if (Blockly.utils.isRightButton(e)) return;
      let btn = this.paletteButtons.filter(btn => pxsim.svg.hasClass(btn, 'active'))[0];
      if (btn) {
        const current = neopixel.getAttribute("data-color");
        const btncol = btn.getAttribute("data-color");
        if (current == btncol)
          neopixel.setAttribute("data-color", "black");
        else
          neopixel.setAttribute("data-color", btncol);
        this.setValue(this.getValueArray())
        if (this.sourceBlock_ && this.sourceBlock_.workspace) (<Blockly.WorkspaceSvg>this.sourceBlock_.workspace).getAudioManager().play('click');
      }
    };

    getValue() {
      let text = this.getText();
      if (!/^(?:".*?")|(?:`.*?`)|(?:'.*?')$/.test(text)) {
        // Text is not correctly surrounded by quotes; remove all quotes and surround with backticks
        text.replace(/[`"']/g, "");
        text = `\`${text}\``;
      }
      return text;
    }

    getValueArray(): string {
      return this.neopixels_.map(neo => neo.getAttribute("data-color")).join(' ');
    }
  }
}