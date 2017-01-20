namespace pxsim.visuals {
    const MB_STYLE = `
        svg.sim {
            margin-bottom:1em;
        }
        svg.sim.grayscale {
            -moz-filter: grayscale(1);
            -webkit-filter: grayscale(1);
            filter: grayscale(1);
        }
        .sim-button {
            pointer-events: none;
        }

        .sim-button-outer:hover {
            stroke:grey;
            stroke-width: 1px;
        }
        .sim-button-nut {
            fill:#704A4A;
            pointer-events:none;
        }
        .sim-button-nut:hover {
            stroke:1px solid #704A4A;
        }
        .sim-pin-touch:hover {
            stroke:#D4AF37;
            stroke-width:1px;
        }

        .sim-pin-touch.touched:hover {
            stroke:darkorange;
        }

        .sim-led-back:hover {
            stroke:#fff;
            stroke-width:3px;
        }
        .sim-led:hover {
            stroke:#ff7f7f;
            stroke-width:3px;
        }

        .sim-systemled {
            fill:#333;
            stroke:#555;
            stroke-width: 1px;
        }

        .sim-light-level-button {
            stroke:#f1c40f;
            stroke-width: 1px;
        }

        .sim-sound-level-button {
            stroke:#7f8c8d;
            stroke-width: 1px;
        }

        .sim-antenna {
            stroke:#555;
            stroke-width: 2px;
        }

        .sim-text {
        font-family:"Lucida Console", Monaco, monospace;
        font-size:8px;
        fill:#fff;
        pointer-events: none; user-select: none;
        }
        .sim-text.inverted {
            fill:#000;
        }

        .sim-text-pin {
        font-family:"Lucida Console", Monaco, monospace;
        font-size:5px;
        fill:#fff;
        pointer-events: none;
        }

        .sim-thermometer {
            stroke:#aaa;
            stroke-width: 1px;
        }

        #rgbledcircle:hover {
            r:8px;
        }

        .sim-slide-switch:hover #SLIDE_HOVER {
            stroke:grey;
            stroke-width: 2px;
        }

        .sim-slide-switch-inner.on {
            fill:#ff0000;
        }

        /* animations */
        .sim-theme-glow {
            animation-name: sim-theme-glow-animation;
            animation-timing-function: ease-in-out;
            animation-direction: alternate;
            animation-iteration-count: infinite;
            animation-duration: 1.25s;
        }
        @keyframes sim-theme-glow-animation {
            from { opacity: 1; }
            to   { opacity: 0.75; }
        }

        .sim-flash {
            animation-name: sim-flash-animation;
            animation-duration: 0.1s;
        }

        @keyframes sim-flash-animation {
            from { fill: yellow; }
            to   { fill: default; }
        }

        .sim-flash-stroke {
            animation-name: sim-flash-stroke-animation;
            animation-duration: 0.4s;
            animation-timing-function: ease-in;
        }

        @keyframes sim-flash-stroke-animation {
            from { stroke: yellow; }
            to   { stroke: default; }
        }


        .sim-sound-stroke {
            animation-name: sim-sound-stroke-animation;
            animation-duration: 0.4s;
        }

        @keyframes sim-sound-stroke-animation {
            from { stroke: yellow; }
            to   { stroke: default; }
        }

        /* wireframe */
        .sim-wireframe * {
            fill: none;
            stroke: black;
        }
        .sim-wireframe .sim-display,
        .sim-wireframe .sim-led,
        .sim-wireframe .sim-led-back,
        .sim-wireframe .sim-head,
        .sim-wireframe .sim-theme,
        .sim-wireframe .sim-button-group,
        .sim-wireframe .sim-button-label,
        .sim-wireframe .sim-button,
        .sim-wireframe .sim-text-pin
        {
            visibility: hidden;
        }
        .sim-wireframe .sim-label
        {
            stroke: none;
            fill: #777;
        }
        .sim-wireframe .sim-board {
            stroke-width: 2px;
        }
    `;
    const BOARD_SVG = `<svg xmlns="http://www.w3.org/2000/svg" height="2.01424in" style="enable-background:new 0 0 144.058 145.025;" gorn="0" width="2.00081in" viewBox="0 0 144.058 145.025" x="0px" y="0px" xml:space="preserve" version="1.1" id="Layer_1"><desc><referenceFile>circuitplay rev D_breadboard.svg</referenceFile></desc><style type="text/css">	.st0{fill:#0A0A0A;}	.st1{fill:none;stroke:#FFFFFF;stroke-width:0.576;stroke-linecap:round;}	.st2{fill:none;stroke:#FFFFFF;stroke-width:0.864;stroke-linecap:round;}	.st3{fill:none;stroke:#FFFFFF;stroke-width:0.36;stroke-linecap:round;}	.st4{fill:none;stroke:#FFFFFF;stroke-width:0.432;stroke-linecap:round;}	.st5{fill:none;stroke:#FFFFFF;stroke-width:0.432;}	.st6{fill:none;stroke:#FFFFFF;stroke-width:0.144;}	.st7{fill:none;stroke:#FFFFFF;stroke-width:1.152;}	.st8{fill:none;stroke:#FFFFFF;stroke-width:0.36;}	.st9{fill:none;stroke:#FFFFFF;stroke-width:0.576;}	.st10{fill:none;stroke:#9A916C;stroke-width:1.44;}	.st11{fill:#9A916C;}	.st12{fill:none;stroke:#9A916C;stroke-width:0.72;}	.st13{fill:none;stroke:#9A916C;stroke-width:2.1444;}	.st14{fill:#666666;}	.st15{fill:#333333;}	.st16{fill:#DCDCDC;}	.st17{fill:#6E554B;}	.st18{fill:#B4B4B4;}	.st19{fill:#F0F0F0;}	.st20{fill:#303030;}	.st21{fill:#4D4D4D;}	.st22{fill:#FF0000;}	.st23{fill:#A00000;}	.st24{fill:#FFFFFF;}	.st25{fill:#C8C8C8;}	.st26{fill:#1E1432;}	.st27{fill:#00FF00;}	.st28{fill:#00B400;}	.st29{fill:#1E1E1E;}	.st30{fill:#1F1F1F;}	.st31{fill:#3D3D3D;}	.st32{fill:#CCCCCC;}</style><desc>Fritzing breadboard generated by brd2svg</desc><g gorn="0.2" id="breadboard"><g gorn="0.2.0" id="icon"><path d="M62.129,1.65h19.8c39.403,5.468,66.913,41.842,61.445,81.245c-5.468,39.403-41.842,66.913-81.245,61.445S-4.784,102.498,0.684,63.095C5.113,31.174,30.208,6.079,62.129,1.65 M76.565,13.89c0,0.548,0.444,0.992,0.992,0.992c0.548,0,0.992-0.444,0.992-0.992l0,0c0-0.548-0.444-0.992-0.992-0.992C77.009,12.898,76.565,13.342,76.565,13.89z M65.51,13.89c0,0.548,0.444,0.992,0.992,0.992c0.548,0,0.992-0.444,0.992-0.992l0,0c0-0.548-0.444-0.992-0.992-0.992C65.954,12.898,65.51,13.342,65.51,13.89z M74.864,98.49c0,0.783,0.635,1.417,1.417,1.417c0.783,0,1.417-0.635,1.417-1.417l0,0c0-0.783-0.635-1.417-1.417-1.417C75.498,97.072,74.864,97.707,74.864,98.49z M66.36,98.49c0,0.783,0.635,1.417,1.417,1.417c0.783,0,1.417-0.635,1.417-1.417l0,0c0-0.783-0.635-1.417-1.417-1.417C66.995,97.072,66.36,97.707,66.36,98.49z M1.794,72.929c-0.004,2.505,2.024,4.538,4.529,4.542s4.538-2.024,4.542-4.529c0-0.005,0-0.009,0-0.014c0.004-2.505-2.024-4.538-4.529-4.542s-4.538,2.024-4.542,4.529C1.794,72.921,1.794,72.925,1.794,72.929z M100.254,15.883c-0.004,2.505,2.023,4.539,4.528,4.543c2.505,0.004,4.539-2.023,4.543-4.528c0-0.005,0-0.01,0-0.016c0.004-2.505-2.023-4.539-4.528-4.543s-4.539,2.023-4.543,4.528C100.254,15.872,100.254,15.877,100.254,15.883z M80.25,16.441c0,0.626,0.508,1.134,1.134,1.134c0.626,0,1.134-0.508,1.134-1.134c0-0.626-0.508-1.134-1.134-1.134C80.758,15.307,80.25,15.815,80.25,16.441L80.25,16.441z M61.541,16.441c0,0.626,0.507,1.134,1.133,1.135s1.134-0.507,1.135-1.133c0-0.001,0-0.001,0-0.002c0-0.626-0.507-1.134-1.133-1.135s-1.134,0.507-1.135,1.133C61.541,16.44,61.541,16.44,61.541,16.441z M80.959,8.504c-0.001,0.704,0.57,1.276,1.274,1.277c0.704,0.001,1.276-0.57,1.277-1.274c0-0.001,0-0.002,0-0.003c0.001-0.704-0.57-1.276-1.274-1.277c-0.704-0.001-1.276,0.57-1.277,1.274C80.959,8.502,80.959,8.503,80.959,8.504z M60.549,8.504c0,0.704,0.571,1.276,1.276,1.276c0.704,0,1.276-0.571,1.276-1.276c0.001-0.704-0.57-1.276-1.274-1.277c-0.704-0.001-1.276,0.57-1.277,1.274C60.549,8.502,60.549,8.503,60.549,8.504z M129.327,95.382c-0.004,2.505,2.023,4.539,4.528,4.543c2.505,0.004,4.539-2.023,4.543-4.528c0-0.005,0-0.01,0-0.016c0.004-2.505-2.023-4.539-4.528-4.543c-2.505-0.004-4.539,2.023-4.543,4.528C129.327,95.372,129.327,95.377,129.327,95.382z M34.554,16.063c-0.004,2.505,2.024,4.538,4.529,4.542c2.505,0.004,4.538-2.024,4.542-4.529c0-0.004,0-0.009,0-0.013c0.004-2.505-2.024-4.538-4.529-4.542c-2.505-0.004-4.538,2.024-4.542,4.529C34.554,16.054,34.554,16.058,34.554,16.063z M133.194,72.929c-0.004,2.505,2.023,4.539,4.528,4.543c2.505,0.004,4.539-2.023,4.543-4.528c0-0.005,0-0.01,0-0.016c0.004-2.505-2.023-4.539-4.528-4.543c-2.505-0.004-4.539,2.023-4.543,4.528C133.194,72.919,133.194,72.924,133.194,72.929z M34.734,129.977c-0.004,2.505,2.024,4.538,4.529,4.542c2.505,0.004,4.538-2.024,4.542-4.529c0-0.004,0-0.009,0-0.013c0.004-2.505-2.024-4.538-4.529-4.542c-2.505-0.004-4.538,2.024-4.542,4.529C34.734,129.968,34.734,129.973,34.734,129.977z M129.327,50.477c-0.004,2.505,2.023,4.539,4.528,4.543c2.505,0.004,4.539-2.023,4.543-4.528c0-0.005,0-0.01,0-0.016c0.004-2.505-2.023-4.539-4.528-4.543c-2.505-0.004-4.539,2.023-4.543,4.528C129.327,50.467,129.327,50.472,129.327,50.477z M117.917,30.604c-0.003,2.505,2.025,4.538,4.53,4.541c2.505,0.003,4.538-2.025,4.541-4.53c0-0.003,0-0.007,0-0.01c0.004-2.505-2.023-4.539-4.528-4.543c-2.505-0.004-4.539,2.023-4.543,4.528C117.917,30.594,117.917,30.599,117.917,30.604z M117.917,115.255c-0.003,2.505,2.025,4.538,4.53,4.541c2.505,0.003,4.538-2.025,4.541-4.53c0-0.003,0-0.007,0-0.01c0.004-2.505-2.023-4.539-4.528-4.543c-2.505-0.004-4.539,2.023-4.543,4.528C117.917,115.245,117.917,115.25,117.917,115.255z M5.841,96.102c-0.004,2.505,2.024,4.538,4.529,4.542s4.538-2.024,4.542-4.529c0-0.004,0-0.009,0-0.013c0.004-2.505-2.024-4.538-4.529-4.542s-4.538,2.024-4.542,4.529C5.841,96.093,5.841,96.098,5.841,96.102z M17.071,30.784c-0.004,2.505,2.024,4.538,4.529,4.542s4.538-2.024,4.542-4.529c0-0.004,0-0.009,0-0.013c0.004-2.505-2.024-4.538-4.529-4.542s-4.538,2.024-4.542,4.529C17.071,30.775,17.071,30.78,17.071,30.784z M5.661,50.477c-0.004,2.505,2.024,4.538,4.529,4.542c2.505,0.004,4.538-2.024,4.542-4.529c0-0.005,0-0.009,0-0.014c0.004-2.505-2.024-4.538-4.529-4.542c-2.505-0.004-4.538,2.024-4.542,4.529C5.661,50.468,5.661,50.473,5.661,50.477z M17.791,115.975c-0.004,2.505,2.024,4.538,4.529,4.542s4.538-2.024,4.542-4.529c0-0.004,0-0.009,0-0.013c0.004-2.505-2.024-4.538-4.529-4.542s-4.538,2.024-4.542,4.529C17.791,115.966,17.791,115.971,17.791,115.975z M100.254,129.977c-0.004,2.505,2.023,4.539,4.528,4.543c2.505,0.004,4.539-2.023,4.543-4.528c0-0.005,0-0.01,0-0.016c0.004-2.505-2.023-4.539-4.528-4.543c-2.505-0.004-4.539,2.023-4.543,4.528C100.254,129.967,100.254,129.972,100.254,129.977z" class="st0"/><g><title>layer 21</title><g><title>element:3.3VTAP</title><g><title>package:SEWALLI</title></g></g><g><title>element:3V3TAP2</title><g><title>package:SEWALLI</title></g></g><g><title>element:BATT</title><g><title>package:JSTPH2</title><line y1="142.633" y2="142.633" x1="78.408" x2="65.651" class="st1"/><line y1="132.713" y2="121.374" x1="60.691" x2="60.691" class="st1"/><line y1="121.374" y2="121.374" x1="60.691" x2="63.1" class="st1"/><line y1="121.374" y2="128.46" x1="63.1" x2="63.1" class="st1"/><line y1="128.46" y2="128.46" x1="63.1" x2="67.069" class="st1"/><line y1="128.46" y2="128.46" x1="76.99" x2="80.959" class="st1"/><line y1="128.46" y2="121.374" x1="80.959" x2="80.959" class="st1"/><line y1="121.374" y2="121.374" x1="80.959" x2="83.368" class="st1"/><line y1="121.374" y2="132.713" x1="83.368" x2="83.368" class="st1"/></g></g><g><title>element:CN1</title><g><title>package:4UCONN_20329_V2</title><line y1="17.008" y2="17.008" x1="79.116" x2="76.848" class="st3"/><line y1="17.008" y2="17.008" x1="67.21" x2="64.943" class="st3"/><line y1="4.252" y2="1.701" x1="82.801" x2="82.801" class="st3"/><line y1="1.701" y2="1.701" x1="82.801" x2="61.258" class="st3"/><line y1="1.701" y2="4.252" x1="61.258" x2="61.258" class="st3"/></g></g><g><title>element:D6</title><g><title>package:SEWALLI</title></g></g><g><title>element:F1</title><g><title>package:R1206</title></g></g><g><title>element:GND3TAP</title><g><title>package:SEWALLI</title></g></g><g><title>element:GNDTAP</title><g><title>package:SEWALLI</title></g></g><g><title>element:GNDTAP2</title><g><title>package:SEWALLI</title></g></g><g><title>element:IC2</title><g><title>package:MSOP08</title><line y1="84.167" y2="84.167" x1="93.187" x2="100.557" class="st4"/><line y1="93.379" y2="93.379" x1="100.557" x2="93.187" class="st4"/><path d="M93.187,84.167c-0.508,0-0.921,0.412-0.921,0.921" class="st5"/><path d="M92.266,92.457c0,0.509,0.412,0.921,0.921,0.922" class="st5"/><path d="M100.557,93.379c0.509,0,0.921-0.413,0.921-0.922c0,0,0,0,0,0" class="st5"/><path d="M101.478,85.087c0-0.509-0.412-0.921-0.921-0.921" class="st5"/><circle r="1.417" cx="99.111" cy="91.45" class="st6"/></g></g><g><title>element:IC4</title><g><title>package:LGA16_3X3MM</title><line y1="74.339" y2="72.071" x1="76.848" x2="76.848" class="st1"/><line y1="72.071" y2="72.071" x1="76.848" x2="75.856" class="st1"/><line y1="74.339" y2="72.071" x1="67.21" x2="67.21" class="st1"/><line y1="72.071" y2="72.071" x1="67.21" x2="68.203" class="st1"/><line y1="81.709" y2="81.709" x1="68.203" x2="67.21" class="st1"/><line y1="81.709" y2="79.441" x1="67.21" x2="67.21" class="st1"/><line y1="79.441" y2="81.709" x1="76.848" x2="76.848" class="st1"/><line y1="81.709" y2="81.709" x1="76.848" x2="75.856" class="st1"/><circle r="0.283" cx="76.423" cy="70.512" class="st7"/></g></g><g><title>element:IO9</title><g><title>package:SEWALLI</title></g></g><g><title>element:IO10</title><g><title>package:SEWALLI</title></g></g><g><title>element:IO12</title><g><title>package:SEWALLI</title></g></g><g><title>element:L</title><g><title>package:CHIPLED_0805_NOOUTLINE</title><g><title>polygon</title><path d="M89.669,9.57l1.08,1.44h-2.16L89.669,9.57 M88.805,10.722h1.728H88.805 M89.129,10.29h1.08H89.129" class="st4"/></g></g></g><g><title>element:PWR</title><g><title>package:CHIPLED_0805_NOOUTLINE</title><g><title>polygon</title><path d="M54.029,10.29l1.08,1.44h-2.16L54.029,10.29 M53.165,11.442h1.728H53.165 M53.489,11.01h1.08H53.489" class="st4"/></g></g></g><g><title>element:R6</title><g><title>package:RESPACK_4X0603_NO</title></g></g><g><title>element:R10</title><g><title>package:RESPACK_4X0603_NO</title></g></g><g><title>element:RESET</title><g><title>package:BTN_KMR2_4.6X2.8</title><line y1="70.774" y2="70.774" x1="77.982" x2="66.077" class="st1"/><line y1="62.126" y2="62.126" x1="66.077" x2="77.982" class="st1"/></g></g><g><title>element:RX</title><g><title>package:SEWALLI</title></g></g><g><title>element:SCL</title><g><title>package:SEWALLI</title></g></g><g><title>element:SDA</title><g><title>package:SEWALLI</title></g></g><g><title>element:SP1</title><g><title>package:BUZZER_SMT_5MM</title><line y1="85.283" y2="85.283" x1="40.463" x2="52.368" class="st3"/><line y1="85.283" y2="87.551" x1="52.368" x2="54.636" class="st3"/><line y1="87.551" y2="99.456" x1="54.636" x2="54.636" class="st3"/><line y1="99.456" y2="99.456" x1="54.636" x2="40.463" class="st3"/><line y1="99.456" y2="85.283" x1="40.463" x2="40.463" class="st3"/><circle r="1.417" cx="47.266" cy="89.535" class="st8"/></g></g><g><title>element:SW1</title><g><title>package:EVQ-Q2_SMALLER</title><line y1="79.633" y2="79.633" x1="53.304" x2="34.595" class="st1"/><line y1="62.626" y2="62.626" x1="34.595" x2="53.304" class="st1"/><line y1="67.728" y2="74.532" x1="53.304" x2="53.304" class="st1"/><line y1="74.532" y2="67.728" x1="34.595" x2="34.595" class="st1"/><circle r="4.261" cx="43.949" cy="71.13" class="st9"/><circle r="2.835" cx="43.949" cy="71.13" class="st9"/></g></g><g><title>element:SW2</title><g><title>package:EVQ-Q2_SMALLER</title><line y1="79.633" y2="79.633" x1="109.463" x2="90.755" class="st1"/><line y1="62.626" y2="62.626" x1="90.755" x2="109.463" class="st1"/><line y1="67.728" y2="74.532" x1="109.463" x2="109.463" class="st1"/><line y1="74.532" y2="67.728" x1="90.755" x2="90.755" class="st1"/><circle r="4.261" cx="100.109" cy="71.13" class="st9"/><circle r="2.835" cx="100.109" cy="71.13" class="st9"/></g></g><g><title>element:SWITCH</title><g><title>package:EG1390</title><line y1="93.529" y2="93.529" x1="61.825" x2="82.234" class="st3"/><line y1="93.529" y2="103.45" x1="82.234" x2="82.234" class="st3"/><line y1="103.45" y2="103.45" x1="82.234" x2="61.825" class="st3"/><line y1="103.45" y2="93.529" x1="61.825" x2="61.825" class="st3"/></g></g><g><title>element:THM1</title><g><title>package:_0402</title><line y1="45.075" y2="45.075" x1="89.913" x2="95.907" class="st1"/><line y1="45.075" y2="48.225" x1="95.907" x2="95.907" class="st1"/><line y1="48.225" y2="48.225" x1="95.907" x2="89.913" class="st1"/><line y1="48.225" y2="45.075" x1="89.913" x2="89.913" class="st1"/></g></g><g><title>element:TP5</title><g><title>package:TESTPOINT_ROUND_1.5MM</title></g></g><g><title>element:TP6</title><g><title>package:TESTPOINT_ROUND_1.5MM</title></g></g><g><title>element:TX</title><g><title>package:SEWALLI</title></g></g><g><title>element:U$1</title><g><title>package:SYMBOL_MINUS</title><line y1="123.69" y2="123.69" x1="87.735" x2="85.485" class="st2"/><circle r="2.216" cx="86.609" cy="123.69" class="st9"/></g></g><g><title>element:U$2</title><g><title>package:FIDUCIAL_1MM</title></g></g><g><title>element:U$3</title><g><title>package:FIDUCIAL_1MM</title></g></g><g><title>element:U$4</title><g><title>package:FLORAMED</title></g></g><g><title>element:U$5</title><g><title>package:TQFN48_7MM</title><line y1="35.905" y2="35.905" x1="63.384" x2="61.825" class="st3"/><line y1="35.905" y2="37.464" x1="61.825" x2="61.825" class="st3"/><line y1="35.905" y2="35.905" x1="80.675" x2="82.234" class="st3"/><line y1="35.905" y2="37.464" x1="82.234" x2="82.234" class="st3"/><line y1="54.755" y2="56.314" x1="61.825" x2="61.825" class="st3"/><line y1="56.314" y2="56.314" x1="61.825" x2="63.384" class="st3"/><line y1="54.755" y2="56.314" x1="82.234" x2="82.234" class="st3"/><line y1="56.314" y2="56.314" x1="82.234" x2="80.675" class="st3"/><circle r="0.36" cx="61.037" cy="57.256" class="st7"/></g></g><g><title>element:U$6</title><g><title>package:FIDUCIAL_1MM</title></g></g><g><title>element:U$7</title><g><title>package:PCBFEAT-REV-040</title></g></g><g><title>element:U$34</title><g><title>package:CPLAY_EXPRESS_FRONT_REVD</title></g></g><g><title>element:U$35</title><g><title>package:SYMBOL_PLUS</title><line y1="124.05" y2="124.05" x1="58.754" x2="56.504" class="st2"/><line y1="122.925" y2="125.175" x1="57.629" x2="57.629" class="st2"/><circle r="2.216" cx="57.629" cy="124.05" class="st9"/></g></g><g><title>element:U$46</title><g><title>package:CPLAY_EXPRESS_BACK_REVD</title></g></g><g><title>element:U1</title><g><title>package:SPW2430HR5H-B</title><line y1="101.994" y2="94.342" x1="93.13" x2="93.13" class="st3"/><line y1="94.342" y2="94.342" x1="93.13" x2="102.768" class="st3"/><line y1="94.342" y2="102.278" x1="102.768" x2="102.768" class="st3"/><line y1="102.278" y2="102.278" x1="102.768" x2="93.13" class="st3"/><line y1="102.278" y2="101.994" x1="93.13" x2="93.13" class="st3"/><circle r="0.638" cx="96.362" cy="98.31" class="st8"/></g></g><g><title>element:U2</title><g><title>package:ALS-PT19-315C</title><line y1="52.675" y2="52.675" x1="48.262" x2="46.136" class="st3"/><line y1="52.675" y2="52.675" x1="46.136" x2="45.853" class="st3"/><line y1="52.675" y2="52.675" x1="45.853" x2="42.876" class="st3"/><line y1="52.675" y2="49.264" x1="42.876" x2="42.876" class="st3"/><line y1="49.264" y2="49.264" x1="42.876" x2="45.853" class="st3"/><line y1="49.264" y2="49.264" x1="46.136" x2="48.262" class="st3"/><line y1="49.264" y2="52.675" x1="48.262" x2="48.262" class="st3"/><line y1="52.675" y2="49.264" x1="46.136" x2="46.136" class="st3"/><line y1="49.264" y2="49.264" x1="46.136" x2="45.853" class="st3"/><line y1="49.264" y2="52.675" x1="45.853" x2="45.853" class="st3"/></g></g><g><title>element:VCC2</title><g><title>package:SEWALLI</title></g></g></g><circle r="5.255" cx="6.329" gorn="0.2.0.2" cy="72.929" class="st10" id="connector5pin"/><circle r="5.255" cx="104.789" gorn="0.2.0.3" cy="15.883" class="st10" id="connector6pin"/><g transform="matrix(-1, 0, 0, -1, 149.728, 247.283)"></g><g transform="matrix(0, 1, -1, 0, 220.049, 56.7149)"><g><g transform="matrix(2.535182e-06 1 -1 2.535182e-06 220.0478 56.7143)"><rect height="9.638" gorn="0.2.0.6.0.0.0" width="4.535" x="79.399" y="133.562" class="st11" id="connector9pin"/></g></g></g><g transform="matrix(0, 1, -1, 0, 200.773, 75.9902)"><g><g transform="matrix(2.535182e-06 1 -1 2.535182e-06 200.7725 75.9897)"><rect height="9.638" gorn="0.2.0.7.0.0.0" width="4.535" x="60.124" y="133.562" class="st11" id="connector10pin"/></g></g></g><g transform="matrix(0, 1, -1, 0, 82.3752, -65.9346)"><g><g transform="matrix(2.535182e-06 1 -1 2.535182e-06 82.375 -65.935)"><rect height="5.669" gorn="0.2.0.26.0.0.0" width="2.835" x="72.738" y="5.385" class="st11" id="connector29pin"/></g></g></g><g transform="matrix(0, 1, -1, 0, 78.1236, -61.6826)"><g><g transform="matrix(2.535182e-06 1 -1 2.535182e-06 78.123 -61.683)"><rect height="5.669" gorn="0.2.0.27.0.0.0" width="2.835" x="68.486" y="5.385" class="st11" id="connector30pin"/></g></g></g><g transform="matrix(-1, 0, 0, -1, 144.058, 32.1732)"><g><rect height="3.827" gorn="0.2.0.28.0.0" width="1.134" x="71.462" y="14.173" class="st11" id="connector31pin"/></g></g><g transform="matrix(-1, 0, 0, -1, 147.743, 32.1732)"><g><rect height="3.827" gorn="0.2.0.29.0.0" width="1.134" x="73.304" y="14.173" class="st11" id="connector32pin"/></g></g><g transform="matrix(-1, 0, 0, -1, 136.688, 32.1732)"><g><rect height="3.827" gorn="0.2.0.30.0.0" width="1.134" x="67.777" y="14.173" class="st11" id="connector33pin"/></g></g><g transform="matrix(-1, 0, 0, -1, 140.373, 32.1732)"><g><rect height="3.827" gorn="0.2.0.31.0.0" width="1.134" x="69.619" y="14.173" class="st11" id="connector34pin"/></g></g><circle r="1.494" cx="81.383" gorn="0.2.0.32" cy="16.441" class="st12" id="connector35pin"/><path d="M79.89,14.947h4.482v2.988H79.89V14.947 M79.89,16.441c-0.001,0.825,0.667,1.495,1.492,1.496c0.825,0.001,1.495-0.667,1.496-1.492c0-0.001,0-0.003,0-0.004c0.001-0.825-0.667-1.495-1.492-1.496c-0.825-0.001-1.495,0.667-1.496,1.492C79.89,16.438,79.89,16.439,79.89,16.441z" class="st11"/><circle r="1.494" cx="62.675" gorn="0.2.0.34" cy="16.441" class="st12" id="connector36pin"/><path d="M59.687,14.947h4.482v2.988h-4.482V14.947 M61.181,16.441c-0.001,0.825,0.667,1.495,1.492,1.496c0.825,0.001,1.495-0.667,1.496-1.492c0-0.001,0-0.003,0-0.004c0-0.825-0.669-1.494-1.494-1.494C61.85,14.947,61.181,15.616,61.181,16.441z" class="st11"/><circle r="2.348" cx="82.234" gorn="0.2.0.36" cy="8.504" class="st13" id="connector37pin"/><rect height="4.696" width="4.696" x="79.887" y="6.156" class="st13"/><circle r="2.348" cx="61.825" gorn="0.2.0.38" cy="8.504" class="st13" id="connector38pin"/><rect height="4.696" width="4.696" x="59.477" y="6.156" class="st13"/><g transform="matrix(-1, 0, 0, -1, 151.428, 32.1732)"><g><rect height="3.827" gorn="0.2.0.40.0.0" width="1.134" x="75.147" y="14.173" class="st11" id="connector39pin"/></g></g><circle r="5.255" cx="133.862" gorn="0.2.0.47" cy="95.382" class="st10" id="connector46pin"/><g transform="matrix(0, -1, 1, 0, -81.7913, 194.53)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -81.7927 194.5312)"><rect height="4.535" gorn="0.2.0.48.0.0.0" width="5.111" x="53.814" y="135.894" class="st11" id="connector47pin"/></g></g></g><g transform="matrix(0, -1, 1, 0, -73.7302, 186.468)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -73.7306 186.4691)"><rect height="4.535" gorn="0.2.0.49.0.0.0" width="5.111" x="53.814" y="127.832" class="st11" id="connector48pin"/></g></g></g><circle r="5.255" cx="39.089" gorn="0.2.0.50" cy="16.063" class="st10" id="connector49pin"/><circle r="5.255" cx="137.729" gorn="0.2.0.51" cy="72.929" class="st10" id="connector50pin"/><circle r="5.255" cx="39.269" gorn="0.2.0.52" cy="129.977" class="st10" id="connector51pin"/><g transform="matrix(0, 1, -1, 0, 147.927, -1.8007)"><g><g transform="matrix(2.535182e-06 1 -1 2.535182e-06 147.9259 -1.8014)"><rect height="1.417" gorn="0.2.0.61.0.0.0" width="0.709" x="74.509" y="72.354" class="st11" id="connector60pin"/></g></g></g><g transform="matrix(0, 1, -1, 0, 146.509, -0.383377)"><g><g transform="matrix(2.535182e-06 1 -1 2.535182e-06 146.5089 -0.3844)"><rect height="1.417" gorn="0.2.0.62.0.0.0" width="0.709" x="73.092" y="72.354" class="st11" id="connector61pin"/></g></g></g><g transform="matrix(0, 1, -1, 0, 145.092, 1.03395)"><g><g transform="matrix(2.535182e-06 1 -1 2.535182e-06 145.0913 1.0332)"><rect height="1.417" gorn="0.2.0.63.0.0.0" width="0.709" x="71.675" y="72.354" class="st11" id="connector62pin"/></g></g></g><g transform="matrix(0, 1, -1, 0, 143.675, 2.45127)"><g><g transform="matrix(2.535182e-06 1 -1 2.535182e-06 143.674 2.4505)"><rect height="1.417" gorn="0.2.0.64.0.0.0" width="0.709" x="70.257" y="72.354" class="st11" id="connector63pin"/></g></g></g><g transform="matrix(0, 1, -1, 0, 142.258, 3.86859)"><g><g transform="matrix(2.535182e-06 1 -1 2.535182e-06 142.2567 3.8678)"><rect height="1.417" gorn="0.2.0.65.0.0.0" width="0.709" x="68.84" y="72.354" class="st11" id="connector64pin"/></g></g></g><rect height="0.709" gorn="0.2.0.66" width="1.417" x="67.494" y="75.118" class="st11" id="connector65pin"/><rect height="0.709" gorn="0.2.0.67" width="1.417" x="67.494" y="76.535" class="st11" id="connector66pin"/><rect height="0.709" gorn="0.2.0.68" width="1.417" x="67.494" y="77.953" class="st11" id="connector67pin"/><g transform="matrix(0, -1, 1, 0, -11.5222, 149.911)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -11.5222 149.9115)"><rect height="1.417" gorn="0.2.0.69.0.0.0" width="0.709" x="68.84" y="80.008" class="st11" id="connector68pin"/></g></g></g><g transform="matrix(0, -1, 1, 0, -10.1048, 151.328)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -10.1049 151.3288)"><rect height="1.417" gorn="0.2.0.70.0.0.0" width="0.709" x="70.257" y="80.008" class="st11" id="connector69pin"/></g></g></g><g transform="matrix(0, -1, 1, 0, -8.68752, 152.746)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -8.6876 152.7461)"><rect height="1.417" gorn="0.2.0.71.0.0.0" width="0.709" x="71.675" y="80.008" class="st11" id="connector70pin"/></g></g></g><g transform="matrix(0, -1, 1, 0, -7.2702, 154.163)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -7.27 154.1637)"><rect height="1.417" gorn="0.2.0.72.0.0.0" width="0.709" x="73.092" y="80.008" class="st11" id="connector71pin"/></g></g></g><g transform="matrix(0, -1, 1, 0, -5.85284, 155.58)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -5.853 155.5807)"><rect height="1.417" gorn="0.2.0.73.0.0.0" width="0.709" x="74.509" y="80.008" class="st11" id="connector72pin"/></g></g></g><g transform="matrix(-1, 0, 0, -1, 151.712, 156.614)"><g><rect height="0.709" gorn="0.2.0.74.0.0" width="1.417" x="75.147" y="77.953" class="st11" id="connector73pin"/></g></g><g transform="matrix(-1, 0, 0, -1, 151.712, 153.78)"><g><rect height="0.709" gorn="0.2.0.75.0.0" width="1.417" x="75.147" y="76.535" class="st11" id="connector74pin"/></g></g><g transform="matrix(-1, 0, 0, -1, 151.712, 150.945)"><g><rect height="0.709" gorn="0.2.0.76.0.0" width="1.417" x="75.147" y="75.118" class="st11" id="connector75pin"/></g></g><circle r="5.255" cx="133.862" gorn="0.2.0.77" cy="50.477" class="st10" id="connector76pin"/><circle r="5.255" cx="122.452" gorn="0.2.0.78" cy="30.604" class="st10" id="connector77pin"/><circle r="5.255" cx="122.452" gorn="0.2.0.79" cy="115.255" class="st10" id="connector78pin"/><rect height="3.402" gorn="0.2.0.80" width="3.402" x="87.969" y="11.565" class="st11" id="connector79pin"/><rect height="3.402" gorn="0.2.0.81" width="3.402" x="87.969" y="5.613" class="st11" id="connector80pin"/><rect height="3.402" gorn="0.2.0.122" width="3.402" x="52.329" y="12.285" class="st11" id="connector121pin"/><rect height="3.402" gorn="0.2.0.123" width="3.402" x="52.329" y="6.333" class="st11" id="connector122pin"/><circle r="5.255" cx="10.376" gorn="0.2.0.167" cy="96.102" class="st10" id="connector166pin"/><circle r="5.255" cx="21.606" gorn="0.2.0.168" cy="30.784" class="st10" id="connector167pin"/><circle r="5.255" cx="10.196" gorn="0.2.0.169" cy="50.477" class="st10" id="connector168pin"/><g transform="matrix(0, -1, 1, 0, -56.7262, 137.084)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -56.7267 137.0849)"><rect height="2.835" gorn="0.2.0.170.0.0.0" width="4.252" x="38.053" y="95.488" class="st11" id="connector169pin"/></g></g></g><g transform="matrix(0, -1, 1, 0, -42.2695, 151.541)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -42.2699 151.5417)"><rect height="2.835" gorn="0.2.0.171.0.0.0" width="4.252" x="52.51" y="95.488" class="st11" id="connector170pin"/></g></g></g><g transform="matrix(0, -1, 1, 0, -47.0884, 127.446)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -47.0887 127.4469)"><rect height="2.835" gorn="0.2.0.172.0.0.0" width="4.252" x="38.053" y="85.85" class="st11" id="connector171pin"/></g></g></g><g transform="matrix(-1, 0, 0, -1, 105.473, 130.921)"><g><rect height="3.402" gorn="0.2.0.173.0.0" width="5.669" x="49.901" y="63.76" class="st11" id="connector172pin"/></g></g><g transform="matrix(-1, 0, 0, -1, 70.3233, 130.921)"><g><rect height="3.402" gorn="0.2.0.174.0.0" width="5.669" x="32.327" y="63.76" class="st11" id="connector173pin"/></g></g><g transform="matrix(-1, 0, 0, -1, 105.473, 153.598)"><g><rect height="3.402" gorn="0.2.0.175.0.0" width="5.669" x="49.901" y="75.098" class="st11" id="connector174pin"/></g></g><g transform="matrix(-1, 0, 0, -1, 70.3233, 153.598)"><g><rect height="3.402" gorn="0.2.0.176.0.0" width="5.669" x="32.327" y="75.098" class="st11" id="connector175pin"/></g></g><g transform="matrix(-1, 0, 0, -1, 217.793, 130.921)"><g><rect height="3.402" gorn="0.2.0.177.0.0" width="5.669" x="106.062" y="63.76" class="st11" id="connector176pin"/></g></g><g transform="matrix(-1, 0, 0, -1, 182.643, 130.921)"><g><rect height="3.402" gorn="0.2.0.178.0.0" width="5.669" x="88.487" y="63.76" class="st11" id="connector177pin"/></g></g><g transform="matrix(-1, 0, 0, -1, 217.793, 153.598)"><g><rect height="3.402" gorn="0.2.0.179.0.0" width="5.669" x="106.062" y="75.098" class="st11" id="connector178pin"/></g></g><g transform="matrix(-1, 0, 0, -1, 182.643, 153.598)"><g><rect height="3.402" gorn="0.2.0.180.0.0" width="5.669" x="88.487" y="75.098" class="st11" id="connector179pin"/></g></g><rect height="4.252" gorn="0.2.0.181" width="2.835" x="63.525" y="88.427" class="st11" id="connector180pin"/><rect height="4.252" gorn="0.2.0.182" width="2.835" x="63.525" y="104.301" class="st11" id="connector181pin"/><rect height="4.252" gorn="0.2.0.183" width="2.835" x="70.612" y="88.427" class="st11" id="connector182pin"/><rect height="4.252" gorn="0.2.0.184" width="2.835" x="70.612" y="104.301" class="st11" id="connector183pin"/><rect height="4.252" gorn="0.2.0.185" width="2.835" x="77.698" y="88.427" class="st11" id="connector184pin"/><rect height="4.252" gorn="0.2.0.186" width="2.835" x="77.698" y="104.301" class="st11" id="connector185pin"/><rect height="1.701" gorn="0.2.0.187" width="1.701" x="90.619" y="45.799" class="st11" id="connector186pin"/><rect height="1.701" gorn="0.2.0.188" width="1.701" x="93.499" y="45.799" class="st11" id="connector187pin"/><circle r="5.255" cx="22.326" gorn="0.2.0.189" cy="115.975" class="st10" id="connector188pin"/><path gorn="0.2.0.190" d="M115.59,19.672L115.59,19.672c0.783,0,1.417,0.635,1.417,1.417v0c0,0.783-0.635,1.417-1.417,1.417h0c-0.783,0-1.417-0.635-1.417-1.417v0C114.172,20.307,114.807,19.672,115.59,19.672z" class="st11" id="connector189pin"/><path gorn="0.2.0.191" d="M28.109,124.433L28.109,124.433c0.783,0,1.417,0.635,1.417,1.417v0c0,0.783-0.635,1.417-1.417,1.417h0c-0.783,0-1.417-0.635-1.417-1.417v0C26.692,125.068,27.327,124.433,28.109,124.433z" class="st11" id="connector190pin"/><g transform="matrix(0, -1, 1, 0, 8.27359, 120.194)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 8.2735 120.1944)"><rect height="2.126" gorn="0.2.0.192.0.0.0" width="0.709" x="63.879" y="54.898" class="st11" id="connector191pin"/></g></g></g><g transform="matrix(0, -1, 1, 0, 9.69091, 121.612)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 9.6908 121.6117)"><rect height="2.126" gorn="0.2.0.193.0.0.0" width="0.709" x="65.297" y="54.898" class="st11" id="connector192pin"/></g></g></g><g transform="matrix(0, -1, 1, 0, 11.1082, 123.029)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 11.1081 123.029)"><rect height="2.126" gorn="0.2.0.194.0.0.0" width="0.709" x="66.714" y="54.898" class="st11" id="connector193pin"/></g></g></g><g transform="matrix(0, -1, 1, 0, 12.5256, 124.446)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 12.5254 124.4463)"><rect height="2.126" gorn="0.2.0.195.0.0.0" width="0.709" x="68.131" y="54.898" class="st11" id="connector194pin"/></g></g></g><g transform="matrix(0, -1, 1, 0, 13.9429, 125.863)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 13.9428 125.8637)"><rect height="2.126" gorn="0.2.0.196.0.0.0" width="0.709" x="69.549" y="54.898" class="st11" id="connector195pin"/></g></g></g><g transform="matrix(0, -1, 1, 0, 15.3602, 127.281)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 15.3601 127.281)"><rect height="2.126" gorn="0.2.0.197.0.0.0" width="0.709" x="70.966" y="54.898" class="st11" id="connector196pin"/></g></g></g><g transform="matrix(0, -1, 1, 0, 16.7776, 128.698)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 16.7774 128.6983)"><rect height="2.126" gorn="0.2.0.198.0.0.0" width="0.709" x="72.383" y="54.898" class="st11" id="connector197pin"/></g></g></g><g transform="matrix(0, -1, 1, 0, 18.1949, 130.116)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 18.1949 130.1158)"><rect height="2.126" gorn="0.2.0.199.0.0.0" width="0.709" x="73.801" y="54.898" class="st11" id="connector198pin"/></g></g></g><g transform="matrix(0, -1, 1, 0, 19.6122, 131.532)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 19.6119 131.5328)"><rect height="2.126" gorn="0.2.0.200.0.0.0" width="0.709" x="75.218" y="54.898" class="st11" id="connector199pin"/></g></g></g><g transform="matrix(0, -1, 1, 0, 21.0295, 132.95)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 21.0296 132.9505)"><rect height="2.126" gorn="0.2.0.201.0.0.0" width="0.709" x="76.636" y="54.898" class="st11" id="connector200pin"/></g></g></g><g transform="matrix(0, -1, 1, 0, 22.4469, 134.367)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 22.4465 134.3674)"><rect height="2.126" gorn="0.2.0.202.0.0.0" width="0.709" x="78.052" y="54.898" class="st11" id="connector201pin"/></g></g></g><g transform="matrix(0, -1, 1, 0, 23.8642, 135.785)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 23.8642 135.7851)"><rect height="2.126" gorn="0.2.0.203.0.0.0" width="0.709" x="79.47" y="54.898" class="st11" id="connector202pin"/></g></g></g><g transform="matrix(-1, 0, 0, -1, 163.759, 107.81)"><g><rect height="0.709" gorn="0.2.0.204.0.0" width="2.126" x="80.816" y="53.551" class="st11" id="connector203pin"/></g></g><g transform="matrix(-1, 0, 0, -1, 163.759, 104.975)"><g><rect height="0.709" gorn="0.2.0.205.0.0" width="2.126" x="80.816" y="52.133" class="st11" id="connector204pin"/></g></g><g transform="matrix(-1, 0, 0, -1, 163.759, 102.141)"><g><rect height="0.709" gorn="0.2.0.206.0.0" width="2.126" x="80.816" y="50.716" class="st11" id="connector205pin"/></g></g><g transform="matrix(-1, 0, 0, -1, 163.759, 99.306)"><g><rect height="0.709" gorn="0.2.0.207.0.0" width="2.126" x="80.816" y="49.299" class="st11" id="connector206pin"/></g></g><g transform="matrix(-1, 0, 0, -1, 163.759, 96.4714)"><g><rect height="0.709" gorn="0.2.0.208.0.0" width="2.126" x="80.816" y="47.881" class="st11" id="connector207pin"/></g></g><g transform="matrix(-1, 0, 0, -1, 163.759, 93.6367)"><g><rect height="0.709" gorn="0.2.0.209.0.0" width="2.126" x="80.816" y="46.464" class="st11" id="connector208pin"/></g></g><g transform="matrix(-1, 0, 0, -1, 163.759, 90.8021)"><g><rect height="0.709" gorn="0.2.0.210.0.0" width="2.126" x="80.816" y="45.047" class="st11" id="connector209pin"/></g></g><g transform="matrix(-1, 0, 0, -1, 163.759, 87.9674)"><g><rect height="0.709" gorn="0.2.0.211.0.0" width="2.126" x="80.816" y="43.63" class="st11" id="connector210pin"/></g></g><g transform="matrix(-1, 0, 0, -1, 163.759, 85.1328)"><g><rect height="0.709" gorn="0.2.0.212.0.0" width="2.126" x="80.816" y="42.212" class="st11" id="connector211pin"/></g></g><g transform="matrix(-1, 0, 0, -1, 163.759, 82.2982)"><g><rect height="0.709" gorn="0.2.0.213.0.0" width="2.126" x="80.816" y="40.795" class="st11" id="connector212pin"/></g></g><g transform="matrix(-1, 0, 0, -1, 163.759, 79.4635)"><g><rect height="0.709" gorn="0.2.0.214.0.0" width="2.126" x="80.816" y="39.377" class="st11" id="connector213pin"/></g></g><g transform="matrix(-1, 0, 0, -1, 163.759, 76.6289)"><g><rect height="0.709" gorn="0.2.0.215.0.0" width="2.126" x="80.816" y="37.96" class="st11" id="connector214pin"/></g></g><g transform="matrix(0, 1, -1, 0, 116.083, -43.565)"><g><g transform="matrix(2.535182e-06 1 -1 2.535182e-06 116.0832 -43.5656)"><rect height="2.126" gorn="0.2.0.216.0.0.0" width="0.709" x="79.47" y="35.196" class="st11" id="connector215pin"/></g></g></g><g transform="matrix(0, 1, -1, 0, 114.666, -42.1476)"><g><g transform="matrix(2.535182e-06 1 -1 2.535182e-06 114.6656 -42.1479)"><rect height="2.126" gorn="0.2.0.217.0.0.0" width="0.709" x="78.052" y="35.196" class="st11" id="connector216pin"/></g></g></g><g transform="matrix(0, 1, -1, 0, 113.249, -40.7303)"><g><g transform="matrix(2.535182e-06 1 -1 2.535182e-06 113.2487 -40.731)"><rect height="2.126" gorn="0.2.0.218.0.0.0" width="0.709" x="76.636" y="35.196" class="st11" id="connector217pin"/></g></g></g><g transform="matrix(0, 1, -1, 0, 111.832, -39.313)"><g><g transform="matrix(2.535182e-06 1 -1 2.535182e-06 111.831 -39.3133)"><rect height="2.126" gorn="0.2.0.219.0.0.0" width="0.709" x="75.218" y="35.196" class="st11" id="connector218pin"/></g></g></g><g transform="matrix(0, 1, -1, 0, 110.414, -37.8957)"><g><g transform="matrix(2.535182e-06 1 -1 2.535182e-06 110.414 -37.8963)"><rect height="2.126" gorn="0.2.0.220.0.0.0" width="0.709" x="73.801" y="35.196" class="st11" id="connector219pin"/></g></g></g><g transform="matrix(0, 1, -1, 0, 108.997, -36.4784)"><g><g transform="matrix(2.535182e-06 1 -1 2.535182e-06 108.9965 -36.4788)"><rect height="2.126" gorn="0.2.0.221.0.0.0" width="0.709" x="72.383" y="35.196" class="st11" id="connector220pin"/></g></g></g><g transform="matrix(0, 1, -1, 0, 107.58, -35.061)"><g><g transform="matrix(2.535182e-06 1 -1 2.535182e-06 107.5792 -35.0615)"><rect height="2.126" gorn="0.2.0.222.0.0.0" width="0.709" x="70.966" y="35.196" class="st11" id="connector221pin"/></g></g></g><g transform="matrix(0, 1, -1, 0, 106.163, -33.6437)"><g><g transform="matrix(2.535182e-06 1 -1 2.535182e-06 106.1619 -33.6442)"><rect height="2.126" gorn="0.2.0.223.0.0.0" width="0.709" x="69.549" y="35.196" class="st11" id="connector222pin"/></g></g></g><g transform="matrix(0, 1, -1, 0, 104.745, -32.2263)"><g><g transform="matrix(2.535182e-06 1 -1 2.535182e-06 104.7445 -32.2268)"><rect height="2.126" gorn="0.2.0.224.0.0.0" width="0.709" x="68.131" y="35.196" class="st11" id="connector223pin"/></g></g></g><g transform="matrix(0, 1, -1, 0, 103.328, -30.809)"><g><g transform="matrix(2.535182e-06 1 -1 2.535182e-06 103.3272 -30.8095)"><rect height="2.126" gorn="0.2.0.225.0.0.0" width="0.709" x="66.714" y="35.196" class="st11" id="connector224pin"/></g></g></g><g transform="matrix(0, 1, -1, 0, 101.91, -29.3917)"><g><g transform="matrix(2.535182e-06 1 -1 2.535182e-06 101.9099 -29.3922)"><rect height="2.126" gorn="0.2.0.226.0.0.0" width="0.709" x="65.297" y="35.196" class="st11" id="connector225pin"/></g></g></g><g transform="matrix(0, 1, -1, 0, 100.493, -27.9744)"><g><g transform="matrix(2.535182e-06 1 -1 2.535182e-06 100.4926 -27.9749)"><rect height="2.126" gorn="0.2.0.227.0.0.0" width="0.709" x="63.879" y="35.196" class="st11" id="connector226pin"/></g></g></g><rect height="0.709" gorn="0.2.0.228" width="2.126" x="61.116" y="37.96" class="st11" id="connector227pin"/><rect height="0.709" gorn="0.2.0.229" width="2.126" x="61.116" y="39.377" class="st11" id="connector228pin"/><rect height="0.709" gorn="0.2.0.230" width="2.126" x="61.116" y="40.795" class="st11" id="connector229pin"/><rect height="0.709" gorn="0.2.0.231" width="2.126" x="61.116" y="42.212" class="st11" id="connector230pin"/><rect height="0.709" gorn="0.2.0.232" width="2.126" x="61.116" y="43.63" class="st11" id="connector231pin"/><rect height="0.709" gorn="0.2.0.233" width="2.126" x="61.116" y="45.047" class="st11" id="connector232pin"/><rect height="0.709" gorn="0.2.0.234" width="2.126" x="61.116" y="46.464" class="st11" id="connector233pin"/><rect height="0.709" gorn="0.2.0.235" width="2.126" x="61.116" y="47.881" class="st11" id="connector234pin"/><rect height="0.709" gorn="0.2.0.236" width="2.126" x="61.116" y="49.299" class="st11" id="connector235pin"/><rect height="0.709" gorn="0.2.0.237" width="2.126" x="61.116" y="50.716" class="st11" id="connector236pin"/><rect height="0.709" gorn="0.2.0.238" width="2.126" x="61.116" y="52.133" class="st11" id="connector237pin"/><rect height="0.709" gorn="0.2.0.239" width="2.126" x="61.116" y="53.551" class="st11" id="connector238pin"/><rect height="13.323" gorn="0.2.0.240" width="13.323" x="65.368" y="39.448" class="st11" id="connector239pin"/><path gorn="0.2.0.241" d="M115.95,124.433L115.95,124.433c0.783,0,1.417,0.635,1.417,1.417v0c0,0.783-0.635,1.417-1.417,1.417h0c-0.783,0-1.417-0.635-1.417-1.417v0C114.532,125.068,115.167,124.433,115.95,124.433z" class="st11" id="connector240pin"/><g transform="matrix(0, -1, 1, 0, -5.37804, 195.068)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -5.3782 195.0695)"><rect height="2.551" gorn="0.2.0.242.0.0.0" width="1.871" x="93.91" y="98.948" class="st11" id="connector241pin"/></g></g></g><g transform="matrix(0, -1, 1, 0, 0.829836, 201.276)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 0.8296 201.2773)"><rect height="2.551" gorn="0.2.0.243.0.0.0" width="1.871" x="100.118" y="98.948" class="st11" id="connector242pin"/></g></g></g><g transform="matrix(0, -1, 1, 0, 4.65661, 197.449)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 4.6564 197.4504)"><rect height="2.551" gorn="0.2.0.244.0.0.0" width="1.871" x="100.118" y="95.121" class="st11" id="connector243pin"/></g></g></g><g transform="matrix(0, -1, 1, 0, -1.55127, 191.241)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -1.5514 191.2426)"><rect height="2.551" gorn="0.2.0.245.0.0.0" width="1.871" x="93.91" y="95.121" class="st11" id="connector244pin"/></g></g></g><g transform="matrix(-1, 0, 0, -1, 95.3899, 101.94)"><g><rect height="2.268" gorn="0.2.0.246.0.0" width="2.268" x="46.561" y="49.836" class="st11" id="connector245pin"/></g></g><g transform="matrix(-1, 0, 0, -1, 86.886, 101.94)"><g><rect height="2.268" gorn="0.2.0.247.0.0" width="2.268" x="42.309" y="49.836" class="st11" id="connector246pin"/></g></g><circle r="5.255" cx="104.789" gorn="0.2.0.261" cy="129.977" class="st10" id="connector260pin"/></g><g transform="matrix(1, 0, 0, 1, -1.42142, 66.2682)"><g gorn="0.2.1.0" id="sewalli"><g transform="matrix(0, -1, 1, 0, 1.134, 14.457)"><g><path d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677s4.677,2.094,4.677,4.677s-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427S2.562,0.718,0,0.994v4.534C0,9.833,3.49,13.323,7.795,13.323z" class="st11" id="PWR_0"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 96.971, 9.26021)"><g gorn="0.2.2.0" id="sewalli_1_"><g transform="matrix(0.866025, 0.5, -0.5, 0.866025, 4.37516, -3.00528)"><g><path d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677s4.677,2.094,4.677,4.677s-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427S2.562,0.718,0,0.994l0,4.534C0,9.833,3.49,13.323,7.795,13.323z" class="st11" id="PWR_2"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 60.6905, 117.405)"><g gorn="0.2.3.0" id="jstph2"><g transform="matrix(-1, 0, 0, -1, 22.677, 25.512)"><g><g><polygon class="st14" points="19.843,0 2.835,0 2.835,2.126 0,2.126 0,17.008 22.677,17.008 22.677,2.126 19.843,2.126 "/><rect height="8.504" width="2.835" x="4.252" y="5.669"/><rect height="8.504" width="2.835" x="15.591" y="5.669"/><rect height="2.835" width="2.835" x="4.252" y="14.173" class="st15"/><rect height="2.835" width="2.835" x="15.591" y="14.173" class="st15"/><rect height="4.252" width="2.268" x="0" y="17.008" class="st15"/><rect height="4.252" width="2.268" x="20.409" y="17.008" class="st15"/></g></g></g></g></g><g transform="matrix(1, 0, 0, 1, 60.6905, 1.26145)"><g gorn="0.2.13.0" id="_x34_uconn_x5F_20329_x5F_v2"><g transform="matrix(-1, 0, 0, -1, 22.677, 16.654)"><g><g><rect height="3.969" width="22.677" x="0" y="7.157" class="st18"/><rect height="3.402" width="0.567" x="11.055" y="0" class="st16"/><rect height="3.402" width="0.567" x="12.898" y="0" class="st16"/><rect height="3.402" width="0.567" x="14.74" y="0" class="st16"/><rect height="3.402" width="0.567" x="9.213" y="0" class="st16"/><rect height="3.402" width="0.567" x="7.37" y="0" class="st16"/><rect height="0.709" width="14.173" x="4.252" y="1.489" class="st18"/><rect height="2.976" width="14.173" x="4.252" y="1.771"/><polygon class="st16" points="17.008,1.347 17.008,3.473 14.74,3.473 14.74,4.182 13.323,4.182 13.323,1.63 9.354,1.63 9.354,4.182 7.937,4.182 7.937,3.473 5.669,3.473 5.669,1.347 0.567,1.347 0.567,14.953 22.11,14.953 22.11,1.347 "/><polygon points="5.811,12.119 3.827,12.119 4.11,7.867 5.527,7.867 "/><polygon points="18.85,12.119 16.866,12.119 17.149,7.867 18.567,7.867 "/><polygon class="st19" points="20.976,16.654 1.701,16.653 1.134,14.953 21.543,14.953 "/><polygon class="st18" points="0.567,16.653 0,16.653 0.567,14.953 1.134,14.953 "/><polygon class="st18" points="22.677,16.654 22.11,16.654 21.543,14.953 22.11,14.953 "/></g></g></g></g></g><g transform="matrix(1, 0, 0, 1, 126.024, 88.7054)"><g gorn="0.2.17.0" id="sewalli_2_"><g transform="matrix(-0.34202, 0.939693, -0.939693, -0.34202, 16.7215, 1.6145)"><g><path d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677s4.677,2.094,4.677,4.677s-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427C5.16,0.567,2.562,0.718,0,0.994l0,4.534C0,9.833,3.49,13.323,7.795,13.323z" class="st11" id="PIN_9"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 52.049, 131.97)"><g gorn="0.2.18.0" id="r1206"><g transform="matrix(0, -1, 1, 0, 2.16, 6.48)"><g><path gorn="0.2.18.0.0.0.0" d="M8.376,4.32H0.27C0.121,4.32,0,4.2,0,4.051V0.27C0,0.121,0.121,0,0.27,0h8.107c0.15,0,0.27,0.121,0.27,0.27v3.781C8.647,4.2,8.526,4.32,8.376,4.32L8.376,4.32z" class="st16" id="path3"/><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 2.1627 6.4834)"><rect height="5.945" gorn="0.2.18.0.0.0.1.0" width="4.32" x="2.163" y="-0.812" class="st15" id="rect5_3_"/></g></g></g></g></g><g transform="matrix(1, 0, 0, 1, 31.316, 9.44021)"><g gorn="0.2.19.0" id="sewalli_3_"><g transform="matrix(0.866025, -0.5, 0.5, 0.866025, -2.28635, 4.79023)"><g><path d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677c2.583,0,4.677,2.094,4.677,4.677s-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427C5.16,0.567,2.562,0.718,0,0.994l0,4.534C0,9.833,3.49,13.323,7.795,13.323z" class="st11" id="GND_0"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 129.889, 66.2682)"><g gorn="0.2.20.0" id="sewalli_4_"><g transform="matrix(0, 1, -1, 0, 14.457, -1.134)"><g><path d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677s4.677,2.094,4.677,4.677s-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427S2.562,0.718,0,0.994v4.534C0,9.833,3.49,13.323,7.795,13.323z" class="st11" id="GND_2"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 31.496, 123.276)"><g gorn="0.2.21.0" id="sewalli_5_"><g transform="matrix(-0.866025, -0.5, 0.5, -0.866025, 11.2159, 16.3283)"><g><path d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677c2.583,0,4.677,2.094,4.677,4.677s-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427S2.562,0.718,0,0.994l0,4.534C0,9.833,3.49,13.323,7.795,13.323z" class="st11" id="GND_1"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 92.6186, 81.8273)"><g gorn="0.2.22.0" id="msop08"><g transform="matrix(0, -1, 1, 0, -2.69302, 11.197)"><g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -5.4464 8.4444)"><rect height="0.85" width="13.89" x="-5.446" y="6.52" class="st16"/></g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -3.6044 10.2864)"><rect height="0.85" width="13.89" x="-3.604" y="6.52" class="st16"/></g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -1.7614 12.1294)"><rect height="0.85" width="13.89" x="-1.761" y="6.52" class="st16"/></g><g transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 0.0806 13.9714)"><rect height="0.85" width="13.89" x="0.081" y="6.52" class="st16"/></g><path d="M8.504,3.229v7.37c0,0.313-0.254,0.567-0.567,0.567h-7.37C0.254,11.166,0,10.912,0,10.599v-7.37c0-0.313,0.254-0.567,0.567-0.567h7.37C8.25,2.662,8.504,2.916,8.504,3.229z" class="st15"/><circle r="0.709" cx="1.417" cy="9.748"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 66.7852, 71.4995)"><g gorn="0.2.23.0" id="lga16_3x3mm"><g transform="matrix(0, 1, -1, 0, 9.64195, -0.99198)"><g><g transform="matrix(2.535182e-06 1 -1 2.535182e-06 10.7806 -1.9854)"><rect height="8.504" width="8.504" x="2.131" y="0.146" class="st15"/></g></g></g></g></g><g transform="matrix(1, 0, 0, 1, 126.024, 43.8312)"><g gorn="0.2.24.0" id="sewalli_6_"><g transform="matrix(0.34202, 0.939693, -0.939693, 0.34202, 11.389, -2.94224)"><g><path d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677c2.583,0,4.677,2.094,4.677,4.677c0,2.583-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427S2.562,0.718,0,0.994l0,4.534C0,9.833,3.49,13.323,7.795,13.323z" class="st11" id="PIN_10"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 114.622, 23.9716)"><g gorn="0.2.25.0" id="sewalli_7_"><g transform="matrix(0.642788, 0.766044, -0.766044, 0.642788, 7.88767, -3.59214)"><g><path d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677s4.677,2.094,4.677,4.677c0,2.583-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427S2.562,0.718,0,0.994l0,4.534C0,9.833,3.49,13.323,7.795,13.323z" class="st11" id="PIN_11"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 114.622, 108.565)"><g gorn="0.2.26.0" id="sewalli_8_"><g transform="matrix(-0.642788, 0.766044, -0.766044, -0.642788, 17.9094, 4.97174)"><g><path d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677c2.583,0,4.677,2.094,4.677,4.677s-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427S2.562,0.718,0,0.994l0,4.534C0,9.833,3.49,13.323,7.795,13.323z" class="st11" id="PIN_8"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 87.8976, 7.45574)"><g gorn="0.2.27.0" id="_x30_805-led-red"><path d="M3.543,0.282v5.103c0,0.156-0.127,0.283-0.283,0.283H0.283C0.127,5.668,0,5.541,0,5.385V0.283C0,0.126,0.127,0,0.283,0H3.26C3.416-0.001,3.543,0.126,3.543,0.282z" class="st16"/><rect height="3.543" width="3.543" x="0" y="1.062" class="st22" id="SERIAL_LED"/><circle r="0.567" cx="1.772" cy="2.833" class="st23"/></g></g><g transform="matrix(1, 0, 0, 1, 109.902, 91.0058)"><g gorn="0.2.28.0" id="led3535"><g transform="matrix(0.5, -0.866025, 0.866025, 0.5, -1.81567, 6.77619)"><g><g transform="matrix(0.5 -0.866 0.866 0.5 -1.816 6.7772)"><ellipse cx="4.961" cy="4.961" class="st25" rx="4.252" ry="4.252" id="LED6_OUTER"/></g><path d="M3.257,3.827V1.069c-0.42,0.184-0.798,0.442-1.134,0.745v2.012l-1.242,0C0.78,4.19,0.709,4.565,0.709,4.961h4.819v4.195c0.397-0.053,0.78-0.147,1.134-0.302l0-3.893h2.551c0-0.395-0.071-0.771-0.172-1.134L3.257,3.827z" class="st24" id="LED6"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 91.5451, 110.083)"><g gorn="0.2.29.0" id="led3535_1_"><g transform="matrix(0.866025, -0.5, 0.5, 0.866025, -1.81567, 3.14484)"><g><g transform="matrix(0.866 -0.5 0.5 0.866 -1.8159 3.1453)"><ellipse cx="4.961" cy="4.961" class="st25" rx="4.252" ry="4.252" id="LED5_OUTER"/></g><path d="M3.257,3.827l0-2.758c-0.42,0.184-0.798,0.442-1.134,0.745v2.012l-1.242,0C0.78,4.19,0.709,4.565,0.709,4.961h4.819v4.195c0.397-0.053,0.78-0.147,1.134-0.302l0-3.893h2.551c0-0.395-0.071-0.771-0.172-1.134H3.257z" class="st24" id="LED5"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 115.662, 68.6892)"><g gorn="0.2.30.0" id="led3535_2_"><g transform="matrix(0, -1, 1, 0, 0, 9.92102)"><g><circle r="4.252" cx="4.961" cy="4.961" class="st25" id="LED7_OUTER"/><path d="M3.257,3.827V1.069c-0.42,0.184-0.798,0.442-1.134,0.745v2.012l-1.242,0C0.78,4.19,0.709,4.565,0.709,4.961h4.819v4.195c0.397-0.053,0.78-0.147,1.134-0.302l0-3.893h2.551c0-0.395-0.071-0.771-0.172-1.134L3.257,3.827z" class="st24" id="LED7"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 109.542, 44.5728)"><g gorn="0.2.31.0" id="led3535_3_"><g transform="matrix(-0.5, -0.866025, 0.866025, -0.5, 3.14484, 11.7367)"><g><g transform="matrix(0.866 -0.5 0.5 0.866 -1.816 3.1451)"><ellipse cx="4.961" cy="4.961" class="st25" rx="4.252" ry="4.252" id="LED8_OUTER"/></g><path d="M3.257,3.827V1.069c-0.42,0.184-0.798,0.442-1.134,0.745v2.012l-1.242,0C0.78,4.19,0.709,4.565,0.709,4.961l4.819,0v4.195c0.397-0.053,0.78-0.147,1.134-0.302V4.961h2.551c0-0.395-0.071-0.771-0.172-1.134L3.257,3.827z" class="st24" id="LED8"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 91.1851, 25.8554)"><g gorn="0.2.32.0" id="led3535_4_"><g transform="matrix(-0.866025, -0.5, 0.5, -0.866025, 6.77619, 11.7367)"><g><g transform="matrix(0.5 -0.866 0.866 0.5 -1.8162 6.7767)"><ellipse cx="4.961" cy="4.961" class="st25" rx="4.252" ry="4.252" id="LED9_OUTER"/></g><path d="M3.257,3.827V1.069c-0.42,0.184-0.798,0.442-1.134,0.745v2.012l-1.242,0C0.78,4.19,0.709,4.565,0.709,4.961h4.819v4.195c0.397-0.053,0.78-0.147,1.134-0.302l0-3.893h2.551c0-0.395-0.071-0.771-0.172-1.134L3.257,3.827z" class="st24" id="LED9"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 42.2321, 25.4954)"><g gorn="0.2.33.0" id="led3535_5_"><g transform="matrix(-0.866025, 0.5, -0.5, -0.866025, 11.7367, 6.77619)"><g><g transform="matrix(0.866 -0.5 0.5 0.866 -1.8158 3.145)"><ellipse cx="4.961" cy="4.961" class="st25" rx="4.252" ry="4.252" id="LED0_OUTER"/></g><path d="M3.257,3.827V1.069c-0.42,0.184-0.798,0.442-1.134,0.745v2.012l-1.242,0C0.78,4.19,0.709,4.565,0.709,4.961h4.819v4.195c0.397-0.053,0.78-0.147,1.134-0.302l0-3.893l2.551,0c0-0.395-0.071-0.771-0.172-1.134L3.257,3.827z" class="st24" id="LED0"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 24.9547, 43.8528)"><g gorn="0.2.34.0" id="led3535_6_"><g transform="matrix(-0.5, 0.866025, -0.866025, -0.5, 11.7367, 3.14484)"><g><g transform="matrix(0.5 -0.866 0.866 0.5 -1.8157 6.7765)"><ellipse cx="4.961" cy="4.961" class="st25" rx="4.252" ry="4.252" id="LED1_OUTER"/></g><path d="M3.257,3.827V1.069c-0.42,0.184-0.798,0.442-1.134,0.745v2.012l-1.242,0C0.78,4.19,0.709,4.565,0.709,4.961h4.819v4.195c0.397-0.053,0.78-0.147,1.134-0.302l0-3.893h2.551c0-0.395-0.071-0.771-0.172-1.134L3.257,3.827z" class="st24" id="LED1"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 18.4756, 67.9692)"><g gorn="0.2.35.0" id="led3535_7_"><g transform="matrix(0, 1, -1, 0, 9.92102, 0)"><g><g transform="matrix(2.535182e-06 1 -1 2.535182e-06 2.8346 -3.774104e-04)"></g><circle r="4.252" cx="4.961" cy="4.961" class="st25" id="LED2_OUTER"/><path d="M3.257,3.827V1.069c-0.42,0.184-0.798,0.442-1.134,0.745v2.012l-1.242,0C0.78,4.19,0.709,4.565,0.709,4.961h4.819v4.195c0.397-0.053,0.78-0.147,1.134-0.302l0-3.893h2.551c0-0.395-0.071-0.771-0.172-1.134L3.257,3.827z" class="st24" id="LED2"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 24.9547, 93.1658)"><g gorn="0.2.36.0" id="led3535_8_"><g transform="matrix(0.5, 0.866025, -0.866025, 0.5, 6.77619, -1.81567)"><g><g transform="matrix(0.866 -0.5 0.5 0.866 -1.8157 3.1452)"><ellipse cx="4.961" cy="4.961" class="st25" rx="4.252" ry="4.252" id="LED3_OUTER"/></g><path d="M3.257,3.827V1.069c-0.42,0.184-0.798,0.442-1.134,0.745l0,2.012l-1.242,0C0.78,4.19,0.709,4.565,0.709,4.961h4.819v4.195c0.397-0.053,0.78-0.147,1.134-0.302l0-3.893h2.551c0-0.395-0.071-0.771-0.172-1.134L3.257,3.827z" class="st24" id="LED3"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 44.0321, 110.803)"><g gorn="0.2.37.0" id="led3535_9_"><g transform="matrix(0.866025, 0.5, -0.5, 0.866025, 3.14484, -1.81567)"><g><g transform="matrix(0.5 -0.866 0.866 0.5 -1.8155 6.777)"><ellipse cx="4.961" cy="4.961" class="st25" rx="4.252" ry="4.252" id="LED4_OUTER"/></g><path d="M3.257,3.827V1.069c-0.42,0.184-0.798,0.442-1.134,0.745v2.012l-1.242,0C0.78,4.19,0.709,4.565,0.709,4.961h4.819v4.195c0.397-0.053,0.78-0.147,1.134-0.302l0-3.893h2.551c0-0.395-0.071-0.771-0.172-1.134L3.257,3.827z" class="st24" id="LED4"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 52.2575, 8.17574)"><g gorn="0.2.38.0" id="_x30_805-led-green"><path d="M3.543,0.282v5.103c0,0.156-0.127,0.283-0.283,0.283H0.283C0.127,5.668,0,5.541,0,5.385V0.283C0,0.126,0.127,0,0.283,0H3.26C3.416-0.001,3.543,0.126,3.543,0.282z" class="st16"/><rect height="3.543" width="3.543" x="0" y="1.062" class="st27" id="PWR_LED"/><circle r="0.567" cx="1.772" cy="2.833" class="st28"/></g></g><g transform="matrix(1, 0, 0, 1, 65.651, 62.1978)"><g gorn="0.2.52.0" id="btn_kmr2_4.6x2.8"><g transform="matrix(-1, 0, 0, -1, 12.756, 8.50399)"><g><g><polygon class="st16" points="12.756,2.692 12.756,1.275 11.339,1.275 11.339,0 1.417,0 1.417,1.275 0,1.275 0,2.692 1.417,2.692 1.417,5.811 0,5.811 0,7.228 1.417,7.228 1.417,8.504 11.339,8.504 11.339,7.228 12.756,7.228 12.756,5.811 11.339,5.811 11.339,2.692 "/><circle r="2.48" cx="6.378" cy="4.252" class="st29"/><rect height="8.504" width="0.567" x="0.992" y="0" class="st18"/><rect height="8.504" width="0.567" x="11.197" y="0" class="st18"/></g></g></g></g></g><g transform="matrix(1, 0, 0, 1, 2.62271, 89.4254)"><g gorn="0.2.53.0" id="sewalli_9_"><g transform="matrix(-0.34202, -0.939693, 0.939693, -0.34202, 4.20196, 16.2653)"><g><path d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677c2.583,0,4.677,2.094,4.677,4.677s-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427C5.16,0.567,2.562,0.718,0,0.994l0,4.534C0,9.833,3.49,13.323,7.795,13.323z" class="st11" id="RX"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 13.845, 24.1516)"><g gorn="0.2.54.0" id="sewalli_10_"><g transform="matrix(0.642788, -0.766044, 0.766044, 0.642788, -2.31836, 8.35128)"><g><path d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677s4.677,2.094,4.677,4.677s-2.094,4.677-4.677,4.677C5.212,11.338,3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427C5.16,0.567,2.562,0.718,0,0.994l0,4.534C0,9.833,3.49,13.323,7.795,13.323z" class="st11" id="SCL"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 2.44271, 43.8312)"><g gorn="0.2.55.0" id="sewalli_11_"><g transform="matrix(0.34202, -0.939693, 0.939693, 0.34202, -1.13049, 11.7085)"><g><path d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677s4.677,2.094,4.677,4.677s-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427C5.16,0.567,2.562,0.718,0,0.994l0,4.534C0,9.833,3.49,13.323,7.795,13.323z" class="st11" id="SDA"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 38.9033, 85.2833)"><g gorn="0.2.56.0" id="buzzer_smt_5mm"><g><rect height="1.417" width="17.008" x="0" y="10.914" class="st16"/><rect height="1.417" width="2.684" x="0" y="1.276" class="st16"/><path d="M15.733,14.173H1.559V0h11.906c0.886,0.886,1.382,1.382,2.268,2.268V14.173z" class="st15"/><circle r="1.417" cx="8.362" cy="4.252"/></g></g></g><g transform="matrix(1, 0, 0, 1, 33.1775, 62.6257)"><g gorn="0.2.57.0" id="evq-q2_smaller"><g transform="matrix(-1, 0, 0, -1, 21.543, 17.008)"><g><g><polygon class="st16" points="21.543,3.685 21.543,1.984 19.842,1.984 19.842,0.001 1.701,0.001 1.701,1.984 0,1.984 0,3.685 1.701,3.685 1.701,13.323 0,13.323 0,15.024 1.701,15.024 1.701,17.008 19.842,17.008 19.842,15.024 21.543,15.024 21.543,13.323 19.842,13.323 19.842,3.685 " id="BTN_A_OUTER"/><circle r="4.252" cx="10.772" cy="8.504" class="st29" id="BTN_A_INNER"/><rect height="17.008" width="0.567" x="1.465" y="0" class="st18"/><rect height="17.008" width="0.567" x="19.559" y="0" class="st18"/></g></g></g></g></g><g transform="matrix(1, 0, 0, 1, 89.3376, 62.6257)"><g gorn="0.2.58.0" id="evq-q2_smaller_1_"><g transform="matrix(-1, 0, 0, -1, 21.543, 17.008)"><g><g><polygon class="st16" points="21.543,3.685 21.543,1.984 19.842,1.984 19.842,0.001 1.701,0.001 1.701,1.984 0,1.984 0,3.685 1.701,3.685 1.701,13.323 0,13.323 0,15.024 1.701,15.024 1.701,17.008 19.842,17.008 19.842,15.024 21.543,15.024 21.543,13.323 19.842,13.323 19.842,3.685 " id="BTN_B_OUTER"/><circle r="4.252" cx="10.772" cy="8.504" class="st29" id="BTN_B_INNER"/><rect height="17.008" width="0.567" x="1.465" y="0" class="st18"/><rect height="17.008" width="0.567" x="19.559" y="0" class="st18"/></g></g></g></g></g><g transform="matrix(1, 0, 0, 1, 62.129, 89.9899)" id="SLIDE"><g gorn="0.2.59.0" id="eg1390"><g><rect height="17" width="2.3" x="15.9" y="0" class="st16"/><rect height="17" width="2.3" x="8.8" y="0" class="st16"/><rect height="17" width="2.3" x="1.7" y="0" class="st16"/><rect height="11.3" width="2.3" x="15.9" y="2.8" class="st18"/><rect height="11.3" width="2.3" x="8.8" y="2.8" class="st18"/><rect height="11.3" width="2.3" x="1.7" y="2.8" class="st18"/><rect height="9.9" width="19.8" x="0" y="3.5" id="SLIDE_HOVER"/><polygon class="st16" points="1.4,10.6 1.4,13.5 18.4,13.5 18.4,10.6 19.8,10.6 19.8,6.4 18.4,6.4 18.4,3.5 14.2,3.5 14.2,6.4 5.7,6.4 5.7,3.5 1.4,3.5 1.4,6.4 0,6.4 0,10.6 "/><rect height="2.8" width="4.3" x="9.9" y="3.5" class="st15" id="SLIDE_INNER"/><circle r="1.4" cx="7.8" cy="8.5" class="st18"/><circle r="1.4" cx="12" cy="8.5" class="st18"/></g></g></g><g transform="matrix(1, 0, 0, 1, 91.4918, 45.9413)"><g gorn="0.2.60.0" id="_0402"><path d="M2.551,1.417H0.283C0.127,1.417,0,1.29,0,1.134v-0.85C0,0.127,0.127,0,0.283,0h2.268c0.157,0,0.283,0.127,0.283,0.283v0.85C2.835,1.29,2.708,1.417,2.551,1.417z" class="st16"/><rect height="1.417" width="1.417" x="0.709" y="0" class="st15"/></g></g><g transform="matrix(1, 0, 0, 1, 14.565, 109.285)"><g gorn="0.2.61.0" id="sewalli_12_"><g transform="matrix(-0.642788, -0.766044, 0.766044, -0.642788, 7.70335, 16.9152)"><g><path d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677c2.583,0,4.677,2.094,4.677,4.677s-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427S2.562,0.718,0,0.994l0,4.534C0,9.833,3.49,13.323,7.795,13.323z" class="st11" id="TX"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 61.2714, 36.2235)"><g gorn="0.2.62.0" id="tqfn48_7mm"><rect height="19.843" width="19.843" x="0.802" y="0" class="st15"/></g></g><g transform="matrix(1, 0, 0, 1, 94.4057, 93.9161)"><g gorn="0.2.63.0" id="spw2430hr5h-b"><g transform="matrix(0, -1, 1, 0, -0.85001, 7.93699)"><g><g><path d="M0,8.079v-7.37C0,0.317,0.317,0,0.709,0h5.669c0.391,0,0.709,0.317,0.709,0.709v7.37c0,0.391-0.317,0.709-0.709,0.709l-5.669,0C0.317,8.787,0,8.47,0,8.079z" class="st18"/><path d="M0.425,0.709c0-0.156,0.127-0.284,0.283-0.284h5.67c0.156,0,0.283,0.128,0.283,0.284v7.37c0,0.156-0.127,0.284-0.283,0.284h-5.67c-0.156,0-0.283-0.128-0.283-0.284L0.425,0.709z" class="st16"/><circle r="0.709" cx="3.543" cy="3.259"/></g></g></g></g></g><g transform="matrix(1, 0, 0, 1, 43.3015, 49.8357)"><g gorn="0.2.64.0" id="als-pt19-315c"><g transform="matrix(-1, 0, 0, -1, 4.535, 2.268)"><g><g><path d="M4.252,2.268H0.283C0.127,2.268,0,2.141,0,1.984V0.283C0,0.127,0.127,0,0.283,0h3.969c0.157,0,0.283,0.127,0.283,0.283v1.701C4.535,2.141,4.409,2.268,4.252,2.268z" class="st16"/><rect height="2.268" width="3.402" x="0.567" y="0" class="st24"/><rect height="1.701" width="1.701" x="0.85" y="0.283"/><circle r="0.354" cx="1.701" cy="1.134" class="st24"/></g></g></g></g></g><g transform="matrix(1, 0, 0, 1, 96.971, 123.276)"><g gorn="0.2.67.0" id="sewalli_13_"><g transform="matrix(-0.866025, 0.5, -0.5, -0.866025, 17.8774, 8.53279)"><g><path d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677s4.677,2.094,4.677,4.677s-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427C5.16,0.567,2.562,0.718,0,0.994l0,4.534C0,9.833,3.49,13.323,7.795,13.323z" class="st11" id="VBATT"/></g></g></g></g></g><g><path d="M131.096,75.913c-0.107-0.253-0.246-0.462-0.416-0.627c-0.169-0.165-0.346-0.299-0.528-0.4l-1.589,0.676l0.552,1.301l0.517-0.22l-0.315-0.744l0.783-0.333c0.091,0.054,0.176,0.127,0.256,0.221s0.146,0.202,0.199,0.327c0.064,0.152,0.095,0.304,0.091,0.454c-0.004,0.151-0.041,0.296-0.112,0.434s-0.175,0.267-0.312,0.387c-0.137,0.119-0.305,0.222-0.505,0.307l-0.03,0.013c-0.183,0.077-0.361,0.124-0.537,0.139c-0.175,0.015-0.338,0.001-0.487-0.041s-0.281-0.111-0.396-0.208s-0.203-0.218-0.265-0.362c-0.077-0.183-0.111-0.347-0.102-0.492s0.039-0.288,0.087-0.429l-0.614-0.151c-0.063,0.215-0.093,0.423-0.087,0.626c0.007,0.202,0.062,0.425,0.165,0.668c0.102,0.239,0.24,0.438,0.415,0.598c0.175,0.158,0.373,0.276,0.595,0.354c0.223,0.077,0.461,0.108,0.716,0.094c0.254-0.015,0.512-0.077,0.771-0.188l0.041-0.018c0.272-0.115,0.503-0.261,0.69-0.434s0.33-0.364,0.427-0.572c0.097-0.209,0.145-0.43,0.145-0.665S131.197,76.152,131.096,75.913z" class="st24"/><polygon class="st24" points="126.639,74.517 130.489,74.496 130.485,73.875 127.84,73.889 130.477,72.127 130.474,71.587 126.624,71.607 126.627,72.229 129.195,72.215 126.636,73.922 "/><path d="M128.374,67.688c-0.214,0.086-0.405,0.216-0.573,0.39c-0.168,0.174-0.304,0.388-0.405,0.644l-0.438,1.093l3.575,1.429l0.437-1.093c0.103-0.255,0.151-0.504,0.147-0.747c-0.003-0.242-0.053-0.469-0.148-0.679s-0.236-0.399-0.422-0.568c-0.185-0.169-0.408-0.306-0.671-0.411l-0.041-0.016c-0.262-0.105-0.518-0.16-0.767-0.165C128.82,67.562,128.589,67.603,128.374,67.688z M129.636,68.362c0.191,0.076,0.353,0.171,0.484,0.285c0.132,0.114,0.232,0.239,0.301,0.375c0.067,0.136,0.103,0.282,0.105,0.439c0.002,0.157-0.029,0.317-0.095,0.48l-0.198,0.496l-2.502-1.001l0.198-0.495c0.065-0.164,0.153-0.301,0.263-0.413c0.11-0.112,0.237-0.193,0.382-0.244s0.305-0.072,0.479-0.063c0.175,0.008,0.358,0.052,0.553,0.129L129.636,68.362z" class="st24"/><path d="M12.618,68.29c-0.086,0.194-0.133,0.404-0.14,0.63c-0.007,0.225,0.044,0.462,0.154,0.71c0.074,0.168,0.169,0.31,0.285,0.428c0.116,0.117,0.245,0.206,0.387,0.265c0.143,0.059,0.294,0.087,0.455,0.085c0.161-0.003,0.324-0.041,0.488-0.113l0.015-0.006c0.154-0.068,0.277-0.153,0.368-0.256c0.091-0.102,0.157-0.213,0.199-0.333c0.041-0.121,0.059-0.248,0.054-0.382c-0.005-0.134-0.024-0.266-0.057-0.396l1.414,0.441l0.458-0.202l-0.909-2.063l-0.528,0.233l0.587,1.334l-1.396-0.407l-0.333,0.237l0.078,0.176c0.108,0.245,0.145,0.461,0.112,0.648c-0.034,0.187-0.141,0.32-0.322,0.4l-0.015,0.007c-0.17,0.075-0.331,0.08-0.48,0.013s-0.26-0.182-0.333-0.346c-0.075-0.171-0.105-0.332-0.088-0.481c0.016-0.149,0.056-0.296,0.121-0.441L12.618,68.29z" class="st24"/><g transform="matrix(0.9753 -0.221 0.221 0.9753 -15.3658 4.7521)"><rect height="0.704" width="0.731" x="13.192" y="70.706" class="st24"/></g><path d="M17.261,71.892l-0.578-0.004l-0.01,1.458l-1.107-0.942l-0.401,0.08l-0.001,0.192c-0.002,0.268-0.057,0.479-0.164,0.637c-0.107,0.156-0.26,0.234-0.458,0.233h-0.016c-0.187-0.002-0.334-0.063-0.443-0.185c-0.109-0.122-0.163-0.273-0.162-0.452c0.001-0.188,0.04-0.346,0.116-0.476c0.076-0.129,0.173-0.247,0.291-0.353l-0.448-0.399c-0.159,0.142-0.287,0.314-0.386,0.517c-0.099,0.202-0.149,0.439-0.151,0.711c-0.001,0.184,0.027,0.353,0.084,0.507s0.139,0.288,0.245,0.4c0.106,0.112,0.232,0.2,0.381,0.263c0.148,0.063,0.312,0.096,0.491,0.097h0.017c0.168,0.002,0.315-0.025,0.44-0.082c0.125-0.056,0.231-0.129,0.318-0.222s0.156-0.202,0.206-0.326s0.087-0.252,0.11-0.384l1.109,0.98l0.5,0.004L17.261,71.892z" class="st24"/><polygon class="st24" points="17.13,75.33 13.034,75.324 12.841,75.881 16.063,78.406 16.284,77.772 13.845,75.926 16.903,75.985 "/><path d="M40.193,120.743l-0.069,0.557l0.801,0.101l-0.105,0.845c-0.091,0.053-0.198,0.089-0.319,0.11c-0.121,0.022-0.248,0.025-0.383,0.008c-0.164-0.02-0.31-0.07-0.438-0.148c-0.13-0.079-0.236-0.185-0.319-0.314c-0.083-0.131-0.143-0.286-0.177-0.465c-0.035-0.178-0.04-0.375-0.012-0.59l0.004-0.033c0.025-0.197,0.075-0.374,0.15-0.533c0.075-0.159,0.168-0.293,0.28-0.401c0.112-0.107,0.238-0.188,0.379-0.238c0.141-0.051,0.29-0.066,0.447-0.047c0.196,0.024,0.354,0.078,0.476,0.159c0.12,0.082,0.229,0.178,0.326,0.291l0.439-0.456c-0.152-0.163-0.318-0.292-0.497-0.389s-0.398-0.161-0.66-0.193c-0.258-0.032-0.501-0.013-0.726,0.059c-0.225,0.071-0.427,0.185-0.604,0.337c-0.179,0.154-0.325,0.344-0.44,0.571c-0.115,0.229-0.191,0.481-0.225,0.763l-0.005,0.043c-0.037,0.295-0.028,0.567,0.028,0.815c0.055,0.249,0.149,0.468,0.28,0.656c0.132,0.188,0.299,0.341,0.503,0.459c0.204,0.118,0.434,0.192,0.692,0.226c0.273,0.034,0.524,0.02,0.751-0.045s0.431-0.149,0.611-0.256l0.214-1.714L40.193,120.743z" class="st24"/><polygon class="st24" points="45.344,120.843 44.096,123.088 43.864,120.02 43.345,119.732 41.474,123.096 42.017,123.398 43.303,121.086 43.544,124.248 44.017,124.51 45.888,121.145 "/><path d="M48.006,123.224l-0.737-0.918l-3.001,2.412l0.737,0.918c0.171,0.214,0.364,0.379,0.577,0.494c0.213,0.116,0.435,0.184,0.665,0.204c0.23,0.02,0.464-0.01,0.703-0.088c0.238-0.078,0.467-0.206,0.688-0.383l0.034-0.027c0.22-0.177,0.394-0.373,0.52-0.588c0.127-0.214,0.205-0.436,0.235-0.664c0.03-0.229,0.012-0.459-0.058-0.691C48.299,123.661,48.178,123.437,48.006,123.224z M47.628,124.914c-0.093,0.147-0.221,0.287-0.384,0.418l-0.026,0.02c-0.16,0.129-0.322,0.223-0.485,0.282c-0.164,0.06-0.323,0.085-0.474,0.077c-0.153-0.008-0.297-0.049-0.435-0.123c-0.139-0.076-0.262-0.182-0.373-0.318l-0.334-0.416l2.1-1.688l0.335,0.416c0.11,0.138,0.187,0.281,0.23,0.432c0.044,0.151,0.052,0.302,0.026,0.452C47.781,124.616,47.721,124.766,47.628,124.914z" class="st24"/><polygon class="st24" points="25.367,105.898 25.499,105.32 22.905,104.726 22.772,105.305 23.758,105.53 23.031,108.705 23.652,108.847 24.38,105.673 "/><polygon class="st24" points="28.684,106.965 28.064,106.621 26.698,107.447 26.69,105.855 26.056,105.503 26.124,107.7 24.141,108.843 24.76,109.187 26.205,108.311 26.221,110.001 26.86,110.356 26.779,108.058 "/><path d="M29.711,115.141l3.02-2.806l-0.239-0.568l-4.117,0.2l0.25,0.593l0.96-0.059l0.581,1.38l-0.713,0.646L29.711,115.141z M31.821,112.371l-1.21,1.106l-0.427-1.013L31.821,112.371z" class="st24"/><polygon class="st24" points="32.874,114.954 32.962,116.629 29.616,115.322 29.652,116.015 33.097,117.314 33.575,117.29 33.451,114.923 "/><path d="M19.427,89.445l-0.465-0.536l-1.565,0.312l0.533-1.498l-0.476-0.548l-0.684,2.088l-1.999,0.354l-0.043-1.478c0.246,0.043,0.479,0.021,0.7-0.066c0.221-0.088,0.405-0.26,0.552-0.519l0.011-0.019c0.087-0.153,0.142-0.306,0.165-0.456c0.023-0.152,0.016-0.298-0.022-0.438c-0.044-0.16-0.126-0.312-0.247-0.452c-0.121-0.14-0.276-0.264-0.467-0.373l-1.209-0.689l-1.907,3.345l0.554,0.315l0.673-1.179l0.535,0.305c0.016,0.009,0.028,0.014,0.036,0.014l0.037,1.591l0.499,0.285l0.344,0.396l1.656-0.333l-0.56,1.596l0.48,0.552l0.707-2.189L19.427,89.445z M13.816,87.106l0.662-1.161l0.606,0.345c0.21,0.12,0.346,0.261,0.406,0.422c0.061,0.161,0.036,0.337-0.073,0.527l-0.005,0.011c-0.101,0.175-0.238,0.282-0.412,0.322c-0.175,0.039-0.371-0.002-0.587-0.126L13.816,87.106z" class="st24"/><path d="M17.539,95.129l0.907,0.322l-0.005,1.496l-0.908,0.316l-0.002,0.664l3.876-1.401l0.002-0.615l-3.868-1.425L17.539,95.129z M19.011,95.65l1.544,0.555l-1.547,0.546L19.011,95.65z" class="st24"/><path d="M19.973,98.799c-0.222-0.152-0.483-0.285-0.785-0.397l-0.037-0.014c-0.189-0.07-0.358-0.123-0.511-0.157c-0.151-0.035-0.289-0.055-0.412-0.06c-0.124-0.005-0.237,0.003-0.34,0.023s-0.2,0.052-0.289,0.092c-0.142,0.066-0.267,0.157-0.375,0.274c-0.108,0.119-0.196,0.27-0.264,0.45c-0.062,0.17-0.09,0.338-0.084,0.506c0.005,0.169,0.042,0.327,0.11,0.476c0.068,0.148,0.165,0.281,0.292,0.398c0.126,0.118,0.28,0.21,0.462,0.277l0.009,0.003c0.186,0.069,0.36,0.099,0.523,0.091c0.163-0.008,0.309-0.044,0.439-0.109c0.13-0.064,0.243-0.155,0.34-0.27c0.097-0.115,0.173-0.246,0.228-0.394c0.061-0.164,0.084-0.32,0.071-0.467c-0.014-0.146-0.053-0.283-0.117-0.413c0.151,0.061,0.291,0.133,0.418,0.218s0.233,0.179,0.314,0.28c0.083,0.104,0.136,0.213,0.164,0.332c0.027,0.117,0.017,0.241-0.032,0.371c-0.048,0.131-0.117,0.238-0.206,0.326c-0.09,0.086-0.187,0.16-0.292,0.223l0.363,0.47c0.157-0.099,0.291-0.21,0.401-0.335s0.199-0.281,0.269-0.468c0.083-0.223,0.111-0.438,0.085-0.646c-0.027-0.207-0.103-0.401-0.227-0.582C20.367,99.117,20.194,98.951,19.973,98.799z M18.822,99.686c-0.07,0.188-0.185,0.317-0.346,0.387c-0.161,0.07-0.339,0.068-0.535-0.004l-0.01-0.004c-0.196-0.073-0.337-0.187-0.423-0.342c-0.085-0.154-0.092-0.328-0.021-0.521c0.073-0.195,0.193-0.326,0.36-0.394c0.167-0.067,0.35-0.063,0.545,0.009l0.011,0.003c0.192,0.071,0.328,0.188,0.406,0.346C18.889,99.322,18.892,99.496,18.822,99.686z" class="st24"/><path d="M123.398,92.394l3.17,2.635l0.216-0.606l-0.746-0.606l0.504-1.408l0.962,0.005l0.224-0.626l-4.121,0.027L123.398,92.394z M125.942,92.403l-0.371,1.035l-1.271-1.038L125.942,92.403z" class="st24"/><path d="M128.515,89.186c-0.155-0.221-0.359-0.438-0.613-0.653l-0.029-0.024c-0.15-0.129-0.293-0.233-0.424-0.316c-0.133-0.083-0.257-0.148-0.372-0.196c-0.116-0.048-0.226-0.079-0.33-0.096s-0.202-0.02-0.296-0.013c-0.165,0.014-0.316,0.057-0.455,0.129c-0.139,0.073-0.272,0.186-0.399,0.337c-0.118,0.14-0.203,0.29-0.253,0.452c-0.051,0.161-0.068,0.322-0.052,0.485c0.016,0.163,0.065,0.321,0.148,0.476s0.197,0.293,0.343,0.416l0.012,0.011c0.148,0.126,0.3,0.215,0.456,0.268c0.155,0.052,0.306,0.071,0.452,0.058c0.145-0.013,0.285-0.058,0.419-0.134c0.135-0.076,0.255-0.177,0.362-0.303c0.111-0.132,0.186-0.269,0.223-0.412c0.039-0.144,0.047-0.287,0.026-0.43c0.114,0.103,0.216,0.214,0.303,0.332c0.087,0.12,0.149,0.241,0.188,0.366c0.039,0.124,0.05,0.246,0.034,0.367c-0.016,0.122-0.067,0.234-0.154,0.338c-0.091,0.105-0.194,0.186-0.312,0.24c-0.118,0.054-0.251,0.095-0.399,0.123l0.179,0.568c0.19-0.039,0.365-0.102,0.524-0.186c0.16-0.084,0.307-0.205,0.441-0.364c0.15-0.177,0.248-0.365,0.295-0.565c0.048-0.2,0.045-0.408-0.007-0.622S128.669,89.406,128.515,89.186z M127.148,89.65c-0.132,0.154-0.283,0.237-0.46,0.248c-0.175,0.011-0.347-0.056-0.515-0.198l-0.01-0.008c-0.162-0.138-0.259-0.295-0.292-0.475c-0.03-0.179,0.02-0.347,0.153-0.504c0.136-0.161,0.295-0.242,0.477-0.248c0.183-0.004,0.357,0.064,0.527,0.207l0.004,0.004c0.159,0.136,0.253,0.293,0.277,0.471C127.336,89.326,127.282,89.493,127.148,89.65z" class="st24"/><path d="M113.099,109.493l2.426,3.333l0.359-0.535l-0.575-0.77l0.834-1.242l0.931,0.241l0.371-0.553l-4.003-0.985L113.099,109.493z M115.562,110.127l-0.613,0.913l-0.977-1.317L115.562,110.127z" class="st24"/><path d="M118.902,107.7c-0.137-0.189-0.297-0.311-0.479-0.362s-0.372-0.059-0.574-0.021c0.075-0.158,0.109-0.322,0.104-0.491c-0.004-0.168-0.068-0.338-0.19-0.506l-0.014-0.019c-0.089-0.121-0.194-0.216-0.317-0.282c-0.123-0.067-0.254-0.105-0.394-0.116c-0.139-0.01-0.281,0.008-0.429,0.051c-0.147,0.044-0.29,0.116-0.431,0.218c-0.139,0.102-0.253,0.216-0.341,0.343c-0.089,0.128-0.148,0.261-0.182,0.397c-0.031,0.137-0.035,0.273-0.01,0.411c0.025,0.139,0.081,0.267,0.168,0.386l0.013,0.017c0.122,0.17,0.265,0.282,0.425,0.338c0.16,0.055,0.327,0.073,0.497,0.054c-0.102,0.177-0.153,0.362-0.158,0.553c-0.003,0.191,0.064,0.383,0.204,0.576l0.01,0.014c0.098,0.134,0.211,0.234,0.344,0.304c0.132,0.07,0.272,0.11,0.424,0.121c0.15,0.011,0.306-0.011,0.466-0.063s0.315-0.135,0.467-0.245c0.151-0.108,0.275-0.231,0.374-0.367c0.1-0.135,0.168-0.275,0.206-0.421c0.04-0.146,0.046-0.293,0.019-0.442c-0.025-0.147-0.09-0.29-0.188-0.427L118.902,107.7z M116.731,107.645c-0.154-0.021-0.281-0.102-0.382-0.24l-0.007-0.009c-0.097-0.133-0.131-0.273-0.101-0.42c0.028-0.147,0.112-0.272,0.252-0.374c0.14-0.101,0.284-0.143,0.433-0.124c0.148,0.018,0.271,0.093,0.367,0.226l0.008,0.009c0.103,0.142,0.14,0.289,0.112,0.44c-0.029,0.151-0.111,0.276-0.247,0.375C117.03,107.627,116.885,107.666,116.731,107.645z M118.194,108.942c-0.169,0.123-0.337,0.176-0.504,0.156c-0.169-0.019-0.304-0.099-0.408-0.241l-0.006-0.009c-0.054-0.074-0.09-0.153-0.106-0.235c-0.018-0.084-0.016-0.163,0.005-0.241c0.02-0.078,0.055-0.154,0.105-0.226c0.049-0.073,0.113-0.138,0.192-0.196c0.078-0.056,0.159-0.097,0.245-0.123c0.086-0.025,0.168-0.035,0.247-0.029s0.155,0.029,0.229,0.071c0.074,0.042,0.137,0.1,0.191,0.174l0.006,0.01c0.104,0.142,0.139,0.295,0.106,0.459S118.364,108.819,118.194,108.942z" class="st24"/><path d="M16.242,46.293c0.09,0.156,0.195,0.286,0.316,0.392c0.122,0.106,0.253,0.183,0.391,0.233c0.139,0.05,0.283,0.067,0.433,0.053c0.15-0.014,0.298-0.063,0.445-0.147l0.01-0.005c0.121-0.069,0.218-0.15,0.293-0.241c0.073-0.091,0.128-0.197,0.164-0.315c0.035-0.12,0.052-0.255,0.051-0.403c-0.001-0.15-0.017-0.32-0.044-0.511c-0.028-0.174-0.045-0.318-0.05-0.434c-0.005-0.116,0-0.211,0.013-0.287c0.014-0.076,0.04-0.137,0.076-0.183c0.036-0.046,0.083-0.085,0.141-0.119l0.005-0.002c0.111-0.064,0.229-0.074,0.351-0.03c0.122,0.043,0.227,0.142,0.314,0.294c0.078,0.134,0.122,0.28,0.135,0.44c0.013,0.159,0.006,0.323-0.02,0.489l0.605,0.071c0.046-0.229,0.05-0.45,0.012-0.663c-0.038-0.213-0.112-0.417-0.223-0.61c-0.089-0.156-0.194-0.285-0.313-0.387c-0.121-0.103-0.249-0.177-0.385-0.223c-0.136-0.047-0.277-0.063-0.421-0.05c-0.145,0.013-0.286,0.059-0.422,0.138l-0.009,0.005c-0.134,0.077-0.239,0.164-0.313,0.262c-0.074,0.099-0.128,0.21-0.159,0.335c-0.032,0.126-0.044,0.267-0.038,0.421c0.006,0.154,0.024,0.329,0.055,0.523c0.029,0.161,0.046,0.294,0.051,0.402c0.004,0.107-0.002,0.196-0.019,0.268c-0.016,0.07-0.042,0.128-0.079,0.172c-0.035,0.044-0.08,0.08-0.13,0.11l-0.004,0.002c-0.125,0.071-0.253,0.083-0.386,0.034c-0.134-0.048-0.247-0.153-0.34-0.315c-0.102-0.178-0.155-0.36-0.161-0.545c-0.004-0.185,0.013-0.372,0.052-0.56l-0.605-0.096c-0.064,0.278-0.076,0.541-0.037,0.788C16.036,45.846,16.118,46.077,16.242,46.293z" class="st24"/><path d="M20.767,46.795l-3.791,0.673l0.206,1.159c0.048,0.271,0.139,0.508,0.27,0.712c0.131,0.204,0.292,0.37,0.484,0.498c0.192,0.128,0.412,0.214,0.658,0.26s0.509,0.044,0.787-0.005l0.042-0.007c0.278-0.05,0.524-0.138,0.738-0.265c0.214-0.127,0.39-0.284,0.526-0.471c0.136-0.186,0.23-0.397,0.281-0.633c0.052-0.236,0.052-0.49,0.005-0.761L20.767,46.795z M20.398,48.54c-0.035,0.154-0.1,0.29-0.196,0.409c-0.097,0.119-0.22,0.222-0.373,0.307c-0.153,0.084-0.332,0.145-0.538,0.182l-0.033,0.006c-0.202,0.036-0.39,0.04-0.561,0.013c-0.174-0.027-0.325-0.081-0.454-0.16c-0.128-0.079-0.237-0.186-0.321-0.317c-0.083-0.132-0.143-0.284-0.173-0.458l-0.093-0.525l2.653-0.471l0.094,0.525C20.434,48.223,20.432,48.386,20.398,48.54z" class="st24"/><path d="M21.039,52.413l-3.505-2.169l-0.131,0.631l0.825,0.496l-0.304,1.465l-0.953,0.128l-0.135,0.652l4.078-0.601L21.039,52.413z M18.519,52.756l0.222-1.077l1.402,0.851L18.519,52.756z" class="st24"/><path d="M16.461,59.872l-1.104-3.971l-0.524,0.374l0.27,0.924l-1.217,0.871l-0.787-0.552l-0.542,0.388l3.403,2.326L16.461,59.872z M14.375,58.415l0.896-0.64l0.452,1.576L14.375,58.415z" class="st24"/><path d="M12.881,59.781l-0.426-0.142c-0.066,0.061-0.143,0.116-0.228,0.167c-0.085,0.051-0.184,0.093-0.298,0.123c-0.198,0.053-0.376,0.043-0.535-0.032c-0.16-0.075-0.266-0.212-0.319-0.41l-0.003-0.011c-0.055-0.201-0.038-0.379,0.05-0.532c0.088-0.153,0.233-0.256,0.435-0.311c0.152-0.042,0.3-0.047,0.443-0.017c0.142,0.029,0.291,0.083,0.444,0.159l0.228-0.551c-0.191-0.104-0.394-0.172-0.607-0.204c-0.214-0.032-0.437-0.017-0.666,0.045c-0.184,0.05-0.346,0.124-0.486,0.225c-0.14,0.101-0.252,0.221-0.335,0.361c-0.083,0.141-0.137,0.296-0.157,0.467c-0.02,0.17-0.004,0.352,0.047,0.543l0.003,0.011c0.053,0.197,0.13,0.361,0.232,0.489c0.102,0.129,0.217,0.226,0.349,0.291c0.131,0.064,0.273,0.102,0.426,0.11c0.151,0.008,0.309-0.009,0.467-0.052c0.104-0.027,0.189-0.06,0.263-0.095c0.072-0.037,0.141-0.078,0.209-0.123l0.18,0.903l-1.443,0.389l0.15,0.558l1.964-0.53L12.881,59.781z" class="st24"/><path d="M28.688,27.965c0.1,0.128,0.212,0.229,0.338,0.304c0.126,0.076,0.265,0.121,0.415,0.137c0.15,0.015,0.305-0.005,0.465-0.059l0.01-0.004c0.132-0.044,0.244-0.104,0.335-0.179c0.091-0.075,0.164-0.168,0.222-0.278c0.058-0.11,0.1-0.239,0.128-0.386c0.027-0.147,0.046-0.316,0.054-0.509c0.006-0.176,0.018-0.322,0.036-0.436c0.017-0.115,0.04-0.207,0.068-0.278c0.028-0.072,0.064-0.126,0.11-0.165c0.045-0.039,0.099-0.068,0.162-0.089l0.006-0.002c0.121-0.042,0.237-0.028,0.349,0.039s0.195,0.184,0.252,0.351c0.049,0.146,0.064,0.298,0.047,0.457c-0.018,0.159-0.056,0.318-0.114,0.477l0.579,0.188c0.089-0.216,0.136-0.433,0.141-0.648c0.005-0.216-0.029-0.431-0.1-0.642c-0.057-0.17-0.135-0.317-0.233-0.441c-0.098-0.124-0.21-0.222-0.334-0.293c-0.125-0.072-0.26-0.116-0.404-0.13c-0.145-0.016-0.292,0.002-0.44,0.053l-0.011,0.003c-0.145,0.05-0.265,0.115-0.356,0.197c-0.093,0.081-0.167,0.18-0.222,0.297c-0.055,0.118-0.095,0.253-0.119,0.406c-0.023,0.153-0.039,0.328-0.046,0.523c-0.002,0.164-0.012,0.298-0.029,0.405c-0.017,0.106-0.04,0.192-0.069,0.259c-0.03,0.066-0.068,0.117-0.112,0.153c-0.043,0.036-0.093,0.063-0.149,0.083l-0.005,0.001c-0.135,0.046-0.265,0.032-0.386-0.042c-0.121-0.073-0.211-0.198-0.271-0.375c-0.066-0.195-0.083-0.383-0.052-0.566c0.032-0.183,0.084-0.362,0.161-0.539l-0.576-0.211c-0.117,0.26-0.18,0.516-0.188,0.766c-0.008,0.25,0.027,0.494,0.108,0.73C28.512,27.69,28.59,27.838,28.688,27.965z" class="st24"/><path d="M31.658,28.768c-0.242-0.085-0.508-0.126-0.798-0.126h-0.038c-0.293,0.001-0.561,0.044-0.802,0.13c-0.242,0.085-0.447,0.202-0.618,0.352c-0.171,0.148-0.301,0.327-0.394,0.535c-0.093,0.207-0.14,0.434-0.139,0.68c0.001,0.268,0.048,0.502,0.144,0.703c0.094,0.201,0.229,0.386,0.405,0.554l0.45-0.375c-0.118-0.121-0.214-0.247-0.29-0.378c-0.076-0.131-0.114-0.29-0.114-0.473c0-0.15,0.031-0.291,0.097-0.421c0.066-0.13,0.158-0.243,0.276-0.339c0.119-0.096,0.264-0.17,0.434-0.224c0.17-0.054,0.36-0.081,0.568-0.082h0.022c0.206,0,0.393,0.025,0.562,0.078c0.169,0.053,0.313,0.126,0.433,0.222c0.119,0.095,0.212,0.207,0.278,0.337s0.101,0.271,0.1,0.42c0.001,0.176-0.034,0.33-0.105,0.46c-0.071,0.13-0.16,0.252-0.266,0.366l0.491,0.383c0.143-0.158,0.258-0.332,0.345-0.521c0.087-0.189,0.13-0.419,0.13-0.69c-0.001-0.25-0.05-0.479-0.146-0.69c-0.096-0.21-0.231-0.392-0.404-0.543C32.107,28.972,31.901,28.853,31.658,28.768z" class="st24"/><polygon class="st24" points="29.184,32.503 32.276,33.536 32.479,32.931 28.828,31.712 28.102,33.882 28.661,34.068 "/><path d="M27.221,40.242l-0.771-4.049l-0.554,0.33l0.192,0.943l-1.284,0.767l-0.74-0.616l-0.571,0.341l3.198,2.601L27.221,40.242z M25.264,38.617l0.945-0.563l0.319,1.609L25.264,38.617z" class="st24"/><path d="M23.677,38.698l-1.68,0.293l-0.143-0.823l-0.596,0.104l0.143,0.823l-0.471,0.083l0.092,0.526l0.472-0.083l0.43,2.465l0.558-0.097l1.363-2.851L23.677,38.698z M22.355,41.04l-0.267-1.523l1.074-0.186L22.355,41.04z" class="st24"/><polygon class="st24" points="95.743,123.778 97.702,126.13 94.735,125.38 94.366,125.967 98.354,126.897 98.669,126.399 96.101,123.211 "/><path d="M100.772,122.866c-0.161-0.201-0.339-0.312-0.534-0.336s-0.399,0.002-0.61,0.079c0.033-0.075,0.062-0.153,0.084-0.233c0.021-0.082,0.031-0.167,0.029-0.254c-0.003-0.088-0.021-0.178-0.054-0.269c-0.033-0.092-0.087-0.183-0.16-0.273l-0.011-0.014c-0.163-0.204-0.366-0.318-0.607-0.345c-0.15-0.017-0.31,0.006-0.479,0.068c-0.168,0.062-0.334,0.159-0.496,0.291l-1.073,0.859l2.411,3.003l1.103-0.886c0.159-0.128,0.292-0.263,0.394-0.404c0.104-0.142,0.173-0.284,0.21-0.43c0.037-0.144,0.04-0.287,0.011-0.43c-0.03-0.144-0.099-0.28-0.203-0.411L100.772,122.866z M97.708,122.503l0.551-0.443c0.164-0.131,0.317-0.197,0.46-0.199s0.265,0.061,0.368,0.189l0.008,0.01c0.111,0.139,0.148,0.285,0.108,0.435c-0.041,0.149-0.143,0.291-0.306,0.421l-0.521,0.419L97.708,122.503z M100.345,123.661c-0.041,0.154-0.148,0.3-0.321,0.438l-0.628,0.505l-0.686-0.853l0.607-0.488c0.189-0.152,0.363-0.229,0.523-0.234c0.159-0.004,0.291,0.06,0.396,0.19l0.007,0.009C100.354,123.363,100.388,123.509,100.345,123.661z" class="st24"/><path d="M101.501,119.607l-0.191,4.118l0.613-0.193l0.034-0.962l1.427-0.446l0.576,0.771l0.635-0.199l-2.506-3.273L101.501,119.607z M101.977,121.971l0.063-1.638l0.986,1.309L101.977,121.971z" class="st24"/><polygon class="st24" points="104.046,119.585 105.059,119.586 105.056,122.843 105.693,122.843 105.696,119.586 106.708,119.588 106.709,118.993 104.047,118.991 "/><polygon class="st24" points="107.026,119.631 108.005,119.892 107.168,123.038 107.784,123.202 108.621,120.055 109.6,120.315 109.752,119.741 107.18,119.058 "/><path d="M46.045,21.559l-0.391-0.328l-0.473,0.562l-0.593-0.498c0.006-0.095,0.03-0.194,0.073-0.297s0.104-0.202,0.184-0.296c0.096-0.116,0.206-0.203,0.33-0.261c0.124-0.06,0.256-0.089,0.397-0.087c0.141,0,0.288,0.031,0.441,0.093c0.153,0.061,0.306,0.156,0.457,0.282l0.023,0.02c0.139,0.116,0.25,0.243,0.333,0.378c0.084,0.136,0.14,0.273,0.167,0.411c0.028,0.139,0.026,0.275-0.005,0.408c-0.031,0.134-0.092,0.254-0.185,0.364c-0.116,0.138-0.235,0.232-0.356,0.284c-0.123,0.053-0.25,0.087-0.383,0.106l0.13,0.561c0.2-0.036,0.381-0.099,0.543-0.188c0.161-0.089,0.319-0.226,0.473-0.409c0.153-0.18,0.257-0.375,0.313-0.583c0.056-0.207,0.07-0.417,0.042-0.628c-0.029-0.211-0.103-0.417-0.219-0.618c-0.117-0.201-0.273-0.383-0.47-0.549l-0.03-0.025c-0.207-0.173-0.419-0.301-0.637-0.381c-0.217-0.081-0.431-0.117-0.64-0.11s-0.408,0.06-0.598,0.157c-0.19,0.097-0.362,0.236-0.514,0.417c-0.161,0.191-0.273,0.39-0.337,0.594c-0.064,0.206-0.1,0.404-0.107,0.593l1.203,1.012L46.045,21.559z" class="st24"/><polygon class="st24" points="43.332,25.527 42.231,23.469 44.69,24.802 45.166,24.547 43.517,21.46 43.019,21.727 44.152,23.848 41.617,22.476 41.184,22.707 42.834,25.794 "/><path d="M38.927,26.096c0.162,0.134,0.349,0.23,0.561,0.289c0.211,0.059,0.441,0.074,0.69,0.044l1.062-0.127l-0.414-3.476l-1.062,0.126c-0.249,0.03-0.468,0.1-0.66,0.208c-0.192,0.107-0.352,0.246-0.478,0.414c-0.126,0.167-0.216,0.362-0.271,0.584c-0.054,0.221-0.066,0.459-0.035,0.714l0.005,0.04c0.03,0.254,0.098,0.482,0.202,0.683C38.632,25.796,38.765,25.963,38.927,26.096z M38.932,24.285c0.034-0.155,0.09-0.289,0.168-0.403c0.079-0.113,0.181-0.204,0.305-0.275c0.125-0.069,0.266-0.114,0.425-0.133l0.482-0.057l0.29,2.433l-0.481,0.057c-0.159,0.019-0.307,0.009-0.444-0.03c-0.137-0.039-0.258-0.106-0.361-0.199c-0.104-0.094-0.19-0.212-0.259-0.354s-0.115-0.309-0.137-0.497l-0.004-0.03C38.894,24.611,38.899,24.441,38.932,24.285z" class="st24"/><path d="M127.326,53.605l-2.25,3.454l0.369,0.493l3.945-1.192l-0.386-0.515l-0.917,0.289l-0.898-1.196l0.535-0.8L127.326,53.605z M127.516,56.316l-1.566,0.487l0.906-1.367L127.516,56.316z" class="st24"/><polygon class="st24" points="123.667,54.445 124.268,55.168 124.742,54.871 124.353,54.374 127.346,53.206 127.115,52.617 123.503,54.026 "/><path d="M124.163,52.497c0.247,0.045,0.516,0.053,0.805,0.025l0.06-0.007c0.292-0.029,0.554-0.089,0.786-0.181c0.231-0.092,0.427-0.208,0.583-0.352c0.158-0.143,0.273-0.308,0.349-0.494s0.103-0.39,0.08-0.613c-0.022-0.223-0.09-0.418-0.203-0.588c-0.112-0.168-0.261-0.308-0.442-0.417c-0.183-0.109-0.396-0.187-0.643-0.232c-0.246-0.044-0.515-0.053-0.807-0.023l-0.061,0.006c-0.291,0.03-0.554,0.091-0.785,0.183c-0.232,0.094-0.427,0.212-0.584,0.355c-0.156,0.143-0.273,0.307-0.348,0.494c-0.076,0.186-0.103,0.389-0.08,0.608c0.021,0.223,0.09,0.418,0.203,0.588c0.112,0.168,0.26,0.307,0.442,0.416C123.7,52.374,123.916,52.453,124.163,52.497z M123.512,50.877c0.054-0.105,0.137-0.199,0.248-0.283c0.113-0.083,0.253-0.151,0.421-0.208c0.169-0.055,0.358-0.094,0.571-0.115l0.043-0.005c0.434-0.042,0.777-0.005,1.033,0.115c0.257,0.119,0.396,0.3,0.421,0.541c0.013,0.121-0.009,0.234-0.063,0.341c-0.053,0.107-0.137,0.201-0.248,0.285c-0.112,0.083-0.251,0.152-0.418,0.207c-0.166,0.056-0.357,0.095-0.573,0.116l-0.044,0.005c-0.433,0.042-0.777,0.004-1.033-0.118c-0.256-0.122-0.396-0.303-0.421-0.543C123.437,51.095,123.458,50.982,123.512,50.877z" class="st24"/><path d="M117.877,37.256l-1.126-0.984l0.357-0.894l-0.501-0.438l-1.484,3.845l0.464,0.406l3.612-1.986l-0.484-0.422L117.877,37.256z M115.925,38.354l0.603-1.526l0.828,0.725L115.925,38.354z" class="st24"/><polygon class="st24" points="113.205,36.53 113.944,37.109 114.345,36.719 113.86,36.314 116.539,34.542 116.19,34.016 112.956,36.154 "/><polygon class="st24" points="112.8,35.305 113.264,34.992 112.858,34.506 115.812,33.243 115.562,32.661 111.998,34.187 112.176,34.602 "/><path d="M102.774,23.917c-0.026,0.167-0.021,0.316,0.017,0.448c0.036,0.132,0.095,0.248,0.174,0.347c0.079,0.099,0.177,0.183,0.292,0.251s0.237,0.123,0.364,0.165l-1.135,0.953l-0.077,0.495l2.229,0.348l0.089-0.571l-1.439-0.225l1.095-0.958l-0.02-0.408l-0.19-0.029c-0.265-0.042-0.467-0.127-0.604-0.256c-0.141-0.129-0.194-0.291-0.164-0.486l0.002-0.017c0.029-0.185,0.111-0.321,0.248-0.411s0.293-0.121,0.471-0.093c0.186,0.029,0.336,0.09,0.453,0.185s0.219,0.208,0.305,0.34l0.462-0.385c-0.117-0.178-0.269-0.331-0.455-0.458s-0.412-0.212-0.681-0.254c-0.182-0.028-0.353-0.025-0.515,0.009c-0.16,0.034-0.304,0.096-0.431,0.184c-0.128,0.087-0.233,0.2-0.317,0.337c-0.085,0.137-0.141,0.294-0.169,0.472L102.774,23.917z" class="st24"/><g transform="matrix(0.3528 -0.9357 0.9357 0.3528 44.8815 110.639)"><rect height="0.704" width="0.732" x="102.053" y="22.524" class="st24"/></g><path d="M99.312,22.029c-0.093,0.141-0.15,0.279-0.174,0.414c-0.021,0.135-0.018,0.265,0.013,0.388c0.03,0.124,0.084,0.241,0.159,0.352c0.077,0.11,0.163,0.211,0.261,0.303l-1.428,0.389l-0.278,0.417l1.875,1.251l0.32-0.481l-1.212-0.808l1.396-0.408l0.153-0.379l-0.16-0.107c-0.222-0.148-0.37-0.311-0.442-0.486c-0.071-0.176-0.054-0.347,0.056-0.511l0.009-0.014c0.104-0.155,0.236-0.245,0.397-0.27c0.163-0.024,0.317,0.014,0.468,0.114c0.155,0.104,0.267,0.223,0.333,0.358c0.067,0.135,0.112,0.28,0.135,0.437l0.58-0.155c-0.031-0.21-0.104-0.413-0.221-0.606c-0.115-0.193-0.285-0.366-0.512-0.517c-0.152-0.102-0.31-0.17-0.47-0.207c-0.161-0.037-0.317-0.042-0.469-0.016c-0.152,0.026-0.296,0.084-0.429,0.173c-0.135,0.088-0.253,0.208-0.353,0.357L99.312,22.029z" class="st24"/><polygon class="st24" points="95.721,22.019 98.545,20.843 96.952,23.455 97.403,23.981 99.473,20.446 99.09,19.999 95.283,21.509 "/><path d="M92.713,9.029c0.166,0.159,0.367,0.283,0.602,0.371s0.493,0.132,0.775,0.132h0.045c0.281,0,0.539-0.044,0.771-0.132c0.233-0.088,0.434-0.212,0.6-0.371c0.168-0.16,0.297-0.352,0.389-0.575s0.137-0.473,0.137-0.748V6.529h-3.85v1.177c0,0.275,0.047,0.524,0.141,0.748S92.545,8.869,92.713,9.029z M92.76,7.167h2.694v0.534c0,0.176-0.03,0.336-0.091,0.48c-0.061,0.146-0.148,0.268-0.264,0.369c-0.115,0.101-0.256,0.18-0.421,0.236s-0.353,0.085-0.562,0.085h-0.033c-0.205,0-0.39-0.028-0.555-0.085s-0.305-0.136-0.418-0.236c-0.113-0.102-0.201-0.224-0.262-0.369c-0.061-0.145-0.09-0.305-0.09-0.48V7.167z" class="st24"/><polygon class="st24" points="96.059,10.759 95.762,9.868 95.212,9.973 95.394,10.577 92.182,10.577 92.182,11.21 96.059,11.21 "/><path d="M92.457,13.953c0.105,0.111,0.233,0.199,0.382,0.262c0.148,0.062,0.312,0.093,0.492,0.093h0.017c0.168,0,0.315-0.028,0.439-0.085c0.125-0.057,0.23-0.132,0.316-0.226s0.154-0.202,0.204-0.327s0.085-0.253,0.106-0.385l1.117,0.974h0.5v-2.256h-0.577v1.458l-1.114-0.936l-0.4,0.083v0.192c0,0.268-0.053,0.48-0.16,0.638c-0.105,0.158-0.258,0.237-0.455,0.237h-0.016c-0.188,0-0.336-0.061-0.445-0.182s-0.164-0.271-0.164-0.451c0-0.188,0.037-0.346,0.112-0.476c0.075-0.131,0.171-0.249,0.288-0.355l-0.451-0.396c-0.157,0.143-0.285,0.316-0.381,0.52c-0.098,0.204-0.146,0.441-0.146,0.713c0,0.183,0.029,0.352,0.088,0.506C92.268,13.708,92.35,13.841,92.457,13.953z" class="st24"/><path d="M48.127,13.701c0.174,0.15,0.381,0.269,0.622,0.353s0.503,0.126,0.79,0.126h0.055c0.286,0,0.548-0.041,0.787-0.123c0.238-0.083,0.444-0.199,0.616-0.35s0.307-0.33,0.404-0.539c0.097-0.209,0.146-0.438,0.146-0.688c0-0.253-0.049-0.484-0.146-0.693c-0.097-0.209-0.232-0.388-0.407-0.538s-0.381-0.268-0.622-0.353c-0.24-0.084-0.503-0.126-0.789-0.126h-0.055c-0.286,0-0.548,0.041-0.787,0.123c-0.238,0.083-0.443,0.199-0.616,0.35s-0.307,0.33-0.404,0.539s-0.146,0.438-0.146,0.688c0,0.253,0.049,0.483,0.146,0.692S47.953,13.552,48.127,13.701z M48.262,12.057c0.066-0.128,0.16-0.239,0.281-0.332c0.121-0.094,0.267-0.166,0.437-0.218c0.17-0.051,0.358-0.077,0.564-0.077h0.039c0.209,0,0.398,0.026,0.566,0.077c0.168,0.052,0.312,0.123,0.432,0.215s0.212,0.201,0.278,0.33c0.066,0.128,0.099,0.268,0.099,0.418s-0.033,0.289-0.099,0.418c-0.066,0.128-0.16,0.239-0.281,0.333c-0.121,0.093-0.267,0.167-0.437,0.22s-0.358,0.08-0.564,0.08h-0.038c-0.209,0-0.398-0.026-0.567-0.077c-0.168-0.052-0.312-0.123-0.432-0.215s-0.212-0.201-0.278-0.33c-0.066-0.128-0.099-0.268-0.099-0.418C48.163,12.326,48.196,12.186,48.262,12.057z" class="st24"/><path d="M48.999,9.582H48.57v0.622h2.915V9.582h-1.766c-0.202,0-0.359-0.05-0.473-0.151c-0.114-0.101-0.171-0.233-0.171-0.398s0.054-0.293,0.163-0.385c0.108-0.092,0.265-0.138,0.47-0.138h1.776V7.888h-1.953c-0.312,0-0.559,0.079-0.742,0.237c-0.184,0.157-0.275,0.377-0.275,0.659c0,0.198,0.049,0.36,0.146,0.487C48.758,9.397,48.871,9.502,48.999,9.582z" class="st24"/><path d="M50.657,49.856l-1.414,3.872h0.644l0.319-0.908h1.496l0.318,0.908h0.666l-1.414-3.872H50.657z M50.404,52.254l0.55-1.545l0.55,1.545H50.404z" class="st24"/><polygon class="st24" points="53.797,49.851 53.346,49.851 52.456,50.148 52.56,50.698 53.165,50.517 53.165,53.728 53.797,53.728 "/><path d="M91.263,43.192h1.496l0.318,0.908h0.666l-1.414-3.872h-0.615L90.3,44.1h0.644L91.263,43.192z M92.011,41.08l0.55,1.545h-1.1L92.011,41.08z" class="st24"/><path d="M95.412,41.784c-0.046,0.077-0.106,0.16-0.182,0.248s-0.168,0.189-0.278,0.302l-1.177,1.26V44.1h2.437v-0.578h-1.589l0.77-0.836c0.14-0.139,0.26-0.266,0.36-0.379s0.185-0.225,0.25-0.333c0.066-0.108,0.114-0.216,0.146-0.324c0.031-0.108,0.047-0.229,0.047-0.36v-0.011c0-0.165-0.028-0.314-0.085-0.448s-0.137-0.248-0.239-0.341c-0.103-0.093-0.225-0.166-0.366-0.217c-0.141-0.051-0.296-0.077-0.464-0.077c-0.279,0-0.517,0.06-0.713,0.181s-0.375,0.292-0.536,0.512l0.424,0.391c0.128-0.165,0.25-0.289,0.365-0.372c0.116-0.083,0.251-0.124,0.404-0.124c0.158,0,0.291,0.047,0.399,0.143c0.107,0.095,0.162,0.231,0.162,0.407c0,0.077-0.012,0.152-0.033,0.226C95.491,41.632,95.458,41.707,95.412,41.784z" class="st24"/><path d="M55.522,71.094c0.235,0.088,0.493,0.132,0.776,0.132h0.044c0.282,0,0.54-0.044,0.772-0.132s0.433-0.212,0.6-0.371c0.167-0.16,0.296-0.352,0.388-0.575s0.138-0.473,0.138-0.748v-1.177h-3.85V69.4c0,0.275,0.047,0.524,0.14,0.748c0.094,0.224,0.224,0.415,0.391,0.575C55.087,70.882,55.288,71.006,55.522,71.094z M54.967,68.861h2.695v0.534c0,0.176-0.03,0.336-0.091,0.48c-0.061,0.146-0.148,0.268-0.264,0.369c-0.116,0.101-0.256,0.18-0.421,0.236s-0.352,0.085-0.561,0.085h-0.033c-0.205,0-0.39-0.028-0.555-0.085s-0.305-0.136-0.418-0.236c-0.114-0.102-0.201-0.224-0.261-0.369c-0.061-0.145-0.091-0.305-0.091-0.48V68.861z" class="st24"/><path d="M55.226,71.384v1.705H54.39v0.605h0.836v0.477h0.534v-0.477h2.502v-0.567l-2.574-1.831L55.226,71.384z M55.759,72l1.545,1.089h-1.545V72z" class="st24"/><path d="M89.621,72.557c0-0.275-0.047-0.524-0.14-0.748c-0.094-0.224-0.224-0.415-0.391-0.575c-0.167-0.159-0.368-0.283-0.603-0.371s-0.493-0.132-0.775-0.132h-0.044c-0.282,0-0.54,0.044-0.772,0.132c-0.233,0.088-0.433,0.212-0.6,0.371c-0.167,0.16-0.296,0.352-0.388,0.575s-0.138,0.473-0.138,0.748v1.177h3.85V72.557z M89.044,73.096h-2.695v-0.534c0-0.176,0.03-0.336,0.091-0.48c0.061-0.146,0.148-0.268,0.264-0.369c0.116-0.101,0.256-0.18,0.421-0.236s0.353-0.085,0.562-0.085h0.033c0.205,0,0.39,0.028,0.555,0.085s0.305,0.136,0.418,0.236c0.114,0.102,0.201,0.224,0.262,0.369c0.061,0.145,0.091,0.305,0.091,0.48V73.096z" class="st24"/><path d="M87.889,70.12c-0.04-0.08-0.074-0.168-0.102-0.264s-0.041-0.202-0.041-0.319c0-0.205,0.057-0.375,0.17-0.509c0.114-0.134,0.273-0.2,0.479-0.2h0.012c0.209,0,0.375,0.062,0.5,0.187c0.125,0.125,0.188,0.292,0.188,0.501c0,0.157-0.033,0.302-0.1,0.432c-0.065,0.13-0.155,0.26-0.27,0.388l0.474,0.363c0.15-0.158,0.269-0.336,0.354-0.534c0.086-0.197,0.129-0.416,0.129-0.654c0-0.19-0.03-0.366-0.091-0.528c-0.061-0.161-0.147-0.3-0.261-0.418c-0.114-0.117-0.251-0.208-0.41-0.271c-0.159-0.064-0.338-0.097-0.536-0.097h-0.011c-0.205,0-0.384,0.032-0.534,0.097c-0.149,0.063-0.273,0.15-0.371,0.261c-0.097,0.11-0.169,0.237-0.217,0.383c-0.048,0.145-0.071,0.3-0.071,0.464c0,0.106,0.008,0.199,0.024,0.278s0.038,0.156,0.063,0.233l-0.919-0.061v-1.496h-0.577v2.035l1.87,0.104L87.889,70.12z" class="st24"/><path d="M92.255,103.218l-1.414,3.872h0.644l0.319-0.907H93.3l0.318,0.907h0.666l-1.414-3.872H92.255z M92.002,105.616l0.55-1.546l0.55,1.546H92.002z" class="st24"/><path d="M95.594,107.15c0.183,0,0.352-0.029,0.506-0.088c0.153-0.059,0.286-0.141,0.398-0.247c0.111-0.106,0.199-0.234,0.262-0.383c0.062-0.148,0.093-0.312,0.093-0.492v-0.017c0-0.168-0.028-0.315-0.085-0.439c-0.057-0.125-0.132-0.23-0.226-0.316s-0.202-0.154-0.327-0.204c-0.125-0.049-0.253-0.085-0.385-0.106l0.974-1.117v-0.5h-2.256v0.577h1.458l-0.936,1.114l0.083,0.401h0.192c0.268,0,0.48,0.053,0.638,0.159c0.158,0.105,0.237,0.258,0.237,0.455v0.017c0,0.187-0.061,0.335-0.182,0.444c-0.121,0.11-0.271,0.165-0.451,0.165c-0.188,0-0.346-0.038-0.476-0.113c-0.131-0.075-0.249-0.171-0.355-0.288l-0.396,0.451c0.143,0.157,0.316,0.285,0.52,0.382C95.085,107.102,95.322,107.15,95.594,107.15z" class="st24"/><path d="M44.958,104.268l0.319-0.908h1.496l0.318,0.908h0.666l-1.414-3.872h-0.615l-1.414,3.872H44.958z M46.025,101.248l0.55,1.545h-1.1L46.025,101.248z" class="st24"/><path d="M50.258,103.786c0.126-0.171,0.225-0.376,0.294-0.616s0.104-0.507,0.104-0.8v-0.061c0-0.294-0.035-0.561-0.104-0.801s-0.168-0.445-0.294-0.615c-0.127-0.171-0.279-0.303-0.457-0.396s-0.377-0.141-0.597-0.141c-0.224,0-0.426,0.048-0.604,0.144c-0.18,0.096-0.333,0.229-0.46,0.398c-0.126,0.171-0.225,0.377-0.294,0.619s-0.104,0.508-0.104,0.797v0.061c0,0.294,0.034,0.561,0.102,0.801c0.068,0.24,0.165,0.445,0.292,0.616c0.126,0.17,0.278,0.302,0.456,0.396s0.379,0.141,0.603,0.141s0.425-0.048,0.604-0.144C49.978,104.09,50.131,103.957,50.258,103.786z M49.204,103.75c-0.121,0-0.231-0.032-0.333-0.097c-0.101-0.064-0.187-0.156-0.258-0.275c-0.072-0.12-0.127-0.266-0.165-0.437c-0.039-0.171-0.058-0.365-0.058-0.582v-0.045c0-0.434,0.073-0.772,0.22-1.016s0.341-0.364,0.583-0.364c0.121,0,0.23,0.032,0.33,0.097c0.099,0.064,0.184,0.156,0.256,0.275c0.071,0.12,0.126,0.267,0.165,0.439c0.038,0.173,0.058,0.366,0.058,0.58v0.044c0,0.435-0.072,0.772-0.218,1.016C49.64,103.629,49.446,103.75,49.204,103.75z" class="st24"/><path d="M102.939,49.416c0-0.642-0.257-1.261-0.708-1.725v-7.204c0-0.977-0.795-1.772-1.772-1.772c-0.977,0-1.771,0.795-1.771,1.772v7.204c-0.452,0.464-0.709,1.083-0.709,1.725c0,1.368,1.113,2.48,2.48,2.48S102.939,50.784,102.939,49.416z M100.459,51.187c-0.977,0-1.771-0.794-1.771-1.771c0-0.501,0.21-0.967,0.592-1.311l0.117-0.105v-7.512c0-0.586,0.477-1.063,1.062-1.063c0.587,0,1.063,0.477,1.063,1.063v7.512l0.117,0.105c0.381,0.344,0.591,0.809,0.591,1.311C102.23,50.393,101.436,51.187,100.459,51.187z" class="st24"/><path d="M101.097,48.252v-5.119h-1.275v5.12c-0.415,0.23-0.708,0.656-0.708,1.164c0,0.743,0.604,1.347,1.346,1.347c0.743,0,1.347-0.604,1.347-1.347C101.806,48.908,101.513,48.481,101.097,48.252z" class="st24"/><path d="M54.579,42.892c-2.138,0-4.135,1.154-5.211,3.011l-0.103,0.178l0.103,0.178c1.077,1.857,3.073,3.012,5.211,3.012s4.135-1.154,5.211-3.012l0.103-0.178l-0.103-0.178C58.714,44.046,56.717,42.892,54.579,42.892z M54.579,48.561c-1.817,0-3.519-0.945-4.491-2.48c0.972-1.535,2.673-2.48,4.491-2.48s3.519,0.945,4.491,2.48C58.098,47.616,56.396,48.561,54.579,48.561z" class="st24"/><path d="M54.579,43.955c-1.174,0-2.126,0.952-2.126,2.126c0,1.174,0.952,2.126,2.126,2.126c1.174,0,2.126-0.952,2.126-2.126C56.705,44.907,55.753,43.955,54.579,43.955z M54.579,47.144c-0.587,0-1.063-0.476-1.063-1.063c0-0.587,0.476-1.063,1.063-1.063c0.587,0,1.063,0.476,1.063,1.063C55.642,46.668,55.166,47.144,54.579,47.144z" class="st24"/><path d="M91.939,100.399c0-0.854-0.332-1.654-0.934-2.256c-1.205-1.203-3.304-1.203-4.511,0c-0.602,0.603-0.934,1.403-0.934,2.256c0,0.195,0.159,0.354,0.354,0.354s0.354-0.159,0.354-0.354c0-0.663,0.258-1.286,0.726-1.754c0.939-0.938,2.571-0.938,3.509,0c0.468,0.467,0.726,1.09,0.726,1.754c0,0.663-0.258,1.286-0.727,1.753l-1.421,1.422c-0.334,0.336-0.519,0.78-0.519,1.252c0,0.587-0.477,1.063-1.062,1.063c-0.587,0-1.063-0.477-1.063-1.063c0-0.195-0.159-0.354-0.354-0.354s-0.354,0.159-0.354,0.354c0,0.978,0.795,1.772,1.772,1.772c0.977,0,1.771-0.795,1.771-1.772c0-0.283,0.11-0.55,0.312-0.751l1.42-1.421C91.607,102.053,91.939,101.252,91.939,100.399z" class="st24"/><path d="M86.979,101.886c-0.195,0-0.354,0.159-0.354,0.354v0.521c0,0.195,0.159,0.354,0.354,0.354s0.354-0.159,0.354-0.354v-0.218c0.53-0.153,0.92-0.645,0.92-1.225c0-0.554-0.429-1.022-0.893-1.199c0.13-0.648,0.704-1.139,1.39-1.139c0.781,0,1.417,0.636,1.417,1.418c0,0.195,0.159,0.354,0.354,0.354s0.354-0.159,0.354-0.354c0-1.173-0.954-2.127-2.126-2.127s-2.126,0.954-2.126,2.127c0,0.195,0.159,0.354,0.354,0.354c0.213,0,0.565,0.273,0.565,0.565C87.545,101.632,87.291,101.886,86.979,101.886z" class="st24"/><path d="M51.591,101.308v1.695v3.43c-0.221-0.073-0.474-0.108-0.749-0.084c-0.827,0.072-1.497,0.614-1.497,1.209s0.67,1.019,1.497,0.947c0.827-0.072,1.497-0.614,1.497-1.209v-4.479l3.674-0.913v3.244c-0.221-0.073-0.474-0.108-0.748-0.084c-0.827,0.072-1.497,0.614-1.497,1.209c0,0.595,0.67,1.019,1.497,0.947c0.827-0.072,1.497-0.614,1.497-1.209v-4.293v-1.695v-0.001l-0.001,0.001L51.591,101.308z" class="st24"/><polygon class="st24" points="34.595,75.12 34.595,67.138 29.612,71.129 "/><polygon class="st24" points="70.052,110.891 74.06,110.891 72.056,108.887 "/><path d="M67.509,60.144l0.671,1.116h0.603l-0.742-1.22c0.191-0.069,0.349-0.179,0.47-0.331c0.122-0.151,0.183-0.349,0.183-0.592V59.1c0-0.144-0.022-0.274-0.067-0.391c-0.045-0.117-0.109-0.218-0.193-0.302c-0.097-0.096-0.216-0.169-0.358-0.221c-0.143-0.051-0.304-0.076-0.483-0.076h-1.139v3.15h0.522v-1.111h0.504C67.492,60.148,67.503,60.147,67.509,60.144z M66.974,58.582h0.571c0.198,0,0.351,0.045,0.459,0.135s0.162,0.225,0.162,0.405v0.009c0,0.165-0.054,0.297-0.162,0.396s-0.264,0.148-0.468,0.148h-0.562V58.582z" class="st24"/><polygon class="st24" points="70.978,60.787 69.488,60.787 69.488,59.91 70.789,59.91 70.789,59.437 69.488,59.437 69.488,58.582 70.955,58.582 70.955,58.11 68.971,58.11 68.971,61.26 70.978,61.26 "/><path d="M72.641,60.715c-0.088,0.075-0.209,0.112-0.362,0.112c-0.168,0-0.318-0.036-0.452-0.108c-0.134-0.072-0.259-0.161-0.376-0.266l-0.314,0.392c0.171,0.159,0.353,0.274,0.544,0.347c0.192,0.072,0.391,0.108,0.595,0.108c0.146,0,0.282-0.022,0.407-0.065c0.124-0.043,0.232-0.104,0.323-0.182c0.092-0.078,0.163-0.173,0.214-0.286c0.052-0.113,0.077-0.238,0.077-0.376v-0.009c0-0.114-0.018-0.216-0.052-0.306c-0.035-0.09-0.087-0.171-0.158-0.245c-0.07-0.074-0.158-0.14-0.265-0.2c-0.107-0.06-0.233-0.119-0.381-0.176c-0.135-0.051-0.244-0.098-0.328-0.142s-0.15-0.085-0.198-0.126s-0.081-0.083-0.099-0.128c-0.019-0.045-0.027-0.094-0.027-0.148v-0.004c0-0.105,0.04-0.192,0.121-0.261c0.081-0.069,0.194-0.104,0.338-0.104c0.126,0,0.248,0.027,0.367,0.083c0.118,0.056,0.231,0.127,0.339,0.214l0.298-0.4c-0.145-0.126-0.3-0.219-0.466-0.279c-0.167-0.06-0.342-0.09-0.524-0.09c-0.147,0-0.281,0.021-0.403,0.065c-0.121,0.044-0.227,0.104-0.314,0.183c-0.089,0.078-0.157,0.171-0.207,0.279s-0.074,0.227-0.074,0.355v0.009c0,0.126,0.02,0.235,0.059,0.328c0.039,0.093,0.097,0.176,0.173,0.25s0.171,0.14,0.283,0.198c0.113,0.059,0.244,0.117,0.395,0.173c0.126,0.045,0.228,0.088,0.306,0.128s0.139,0.081,0.183,0.122c0.043,0.041,0.073,0.083,0.09,0.126s0.024,0.089,0.024,0.137v0.004C72.773,60.544,72.729,60.64,72.641,60.715z" class="st24"/><polygon class="st24" points="75.478,60.787 73.988,60.787 73.988,59.91 75.289,59.91 75.289,59.437 73.988,59.437 73.988,58.582 75.455,58.582 75.455,58.11 73.471,58.11 73.471,61.26 75.478,61.26 "/><polygon class="st24" points="76.45,61.26 76.973,61.26 76.973,58.596 77.801,58.596 77.801,58.11 75.622,58.11 75.622,58.596 76.45,58.596 "/><path d="M92.764,59.118V59.1c0-0.144-0.022-0.274-0.067-0.391c-0.045-0.117-0.109-0.218-0.193-0.302c-0.097-0.096-0.216-0.169-0.358-0.221c-0.143-0.051-0.304-0.076-0.483-0.076h-1.139v3.15h0.522v-1.111h0.504c0.015,0,0.025-0.001,0.031-0.005l0.671,1.116h0.603l-0.742-1.22c0.191-0.069,0.349-0.179,0.47-0.331C92.703,59.558,92.764,59.361,92.764,59.118z M92.237,59.131c0,0.165-0.054,0.297-0.162,0.396s-0.264,0.148-0.468,0.148h-0.562v-1.094h0.571c0.198,0,0.351,0.045,0.459,0.135s0.162,0.225,0.162,0.405V59.131z" class="st24"/><rect height="3.15" width="0.521" x="93.131" y="58.11" class="st24"/><path d="M94.416,60.871c0.126,0.14,0.277,0.247,0.454,0.322c0.177,0.075,0.372,0.112,0.585,0.112c0.225,0,0.427-0.038,0.605-0.112c0.178-0.075,0.335-0.165,0.47-0.27v-1.413h-1.156v0.459h0.661v0.697c-0.068,0.051-0.151,0.092-0.247,0.122s-0.199,0.045-0.311,0.045c-0.135,0-0.259-0.025-0.371-0.076c-0.112-0.051-0.209-0.125-0.29-0.224c-0.081-0.098-0.146-0.217-0.191-0.358c-0.047-0.141-0.07-0.3-0.07-0.478v-0.027c0-0.162,0.022-0.312,0.067-0.449c0.046-0.137,0.107-0.254,0.188-0.354c0.079-0.099,0.174-0.176,0.283-0.232s0.229-0.083,0.357-0.083c0.162,0,0.297,0.027,0.403,0.081c0.106,0.054,0.204,0.122,0.295,0.203l0.311-0.414c-0.142-0.117-0.289-0.206-0.443-0.266c-0.155-0.06-0.34-0.09-0.556-0.09c-0.214,0-0.407,0.041-0.583,0.121c-0.176,0.081-0.328,0.193-0.457,0.335s-0.229,0.312-0.299,0.508c-0.071,0.197-0.106,0.411-0.106,0.642v0.036c0,0.243,0.035,0.463,0.106,0.66C94.191,60.563,94.289,60.731,94.416,60.871z" class="st24"/><polygon class="st24" points="99.232,61.26 99.232,58.11 98.711,58.11 98.711,59.433 97.474,59.433 97.474,58.11 96.951,58.11 96.951,61.26 97.474,61.26 97.474,59.919 98.711,59.919 98.711,61.26 "/><polygon class="st24" points="100.817,61.26 100.817,58.596 101.646,58.596 101.646,58.11 99.467,58.11 99.467,58.596 100.295,58.596 100.295,61.26 "/><polygon class="st24" points="44.765,58.11 44.765,61.26 46.637,61.26 46.637,60.778 45.288,60.778 45.288,58.11 "/><polygon class="st24" points="48.854,58.582 48.854,58.11 46.87,58.11 46.87,61.26 48.876,61.26 48.876,60.787 47.387,60.787 47.387,59.91 48.688,59.91 48.688,59.437 47.387,59.437 47.387,58.582 "/><polygon class="st24" points="51.188,58.591 51.188,58.11 49.212,58.11 49.212,61.26 49.735,61.26 49.735,59.955 51.022,59.955 51.022,59.482 49.735,59.482 49.735,58.591 "/><polygon class="st24" points="52.68,61.26 52.68,58.596 53.508,58.596 53.508,58.11 51.33,58.11 51.33,58.596 52.158,58.596 52.158,61.26 "/><path d="M79.896,81.248v-1.247h0.706l-1.06-1.836l-1.06,1.836h0.706v1.247c-1.472,0.166-2.633,1.327-2.799,2.799h-1.247v-0.706l-1.836,1.06l1.836,1.06v-0.706h1.247c0.179,1.59,1.516,2.835,3.154,2.835c1.759,0,3.189-1.431,3.189-3.189C82.73,82.764,81.486,81.427,79.896,81.248z M79.541,86.882c-1.368,0-2.48-1.112-2.48-2.48s1.112-2.48,2.48-2.48s2.48,1.112,2.48,2.48S80.909,86.882,79.541,86.882z" class="st24"/><polygon class="st24" points="80.6,84.893 78.309,83.344 77.922,83.344 77.922,85.495 78.395,85.495 78.395,83.997 80.686,85.545 81.072,85.545 81.072,83.344 80.6,83.344 "/><polygon class="st24" points="69.682,85.707 71.577,84.645 72.833,84.645 72.833,84.123 71.573,84.123 69.682,83.065 69.682,83.646 71.046,84.38 69.682,85.108 "/><polygon class="st24" points="81.15,78.385 81.15,77.804 79.949,77.12 81.15,76.436 81.15,75.838 79.539,76.81 78,75.883 78,76.463 79.135,77.111 78,77.75 78,78.344 79.544,77.422 "/><path d="M70.157,107.797c0-0.282-0.044-0.54-0.132-0.772c-0.088-0.233-0.212-0.433-0.371-0.6c-0.16-0.167-0.352-0.296-0.575-0.388s-0.473-0.138-0.748-0.138h-1.177v3.85h1.177c0.275,0,0.524-0.047,0.748-0.14c0.224-0.094,0.415-0.224,0.575-0.391c0.159-0.167,0.283-0.368,0.371-0.603s0.132-0.493,0.132-0.775V107.797z M69.497,107.847c0,0.205-0.028,0.39-0.085,0.555s-0.136,0.305-0.236,0.418c-0.102,0.114-0.224,0.201-0.369,0.262c-0.145,0.061-0.305,0.091-0.48,0.091h-0.534v-2.695h0.534c0.176,0,0.336,0.03,0.48,0.091c0.146,0.061,0.268,0.148,0.369,0.264c0.101,0.116,0.18,0.256,0.236,0.421s0.085,0.353,0.085,0.562V107.847z" class="st24"/><polygon class="st24" points="74.332,106.477 76.01,106.477 74.53,109.749 75.224,109.749 76.703,106.378 76.703,105.899 74.332,105.899 "/><path d="M55.323,28.04c0.204-0.085,0.377-0.203,0.522-0.355s0.258-0.334,0.338-0.547c0.08-0.213,0.12-0.449,0.12-0.705v-0.04c0-0.257-0.04-0.491-0.12-0.703c-0.08-0.211-0.193-0.393-0.338-0.545s-0.319-0.269-0.522-0.353c-0.203-0.083-0.43-0.125-0.68-0.125h-1.07v3.5h1.07C54.893,28.167,55.12,28.124,55.323,28.04z M54.153,27.642v-2.45h0.485c0.16,0,0.306,0.028,0.438,0.083c0.132,0.055,0.244,0.135,0.335,0.24c0.092,0.105,0.164,0.232,0.215,0.382s0.077,0.32,0.077,0.51v0.03c0,0.187-0.025,0.355-0.077,0.505s-0.124,0.277-0.215,0.38c-0.091,0.104-0.203,0.183-0.335,0.238c-0.131,0.055-0.277,0.083-0.438,0.083H54.153z" class="st24"/><path d="M56.805,27.944c0.105,0.088,0.23,0.156,0.377,0.203c0.146,0.047,0.304,0.07,0.474,0.07c0.169,0,0.327-0.023,0.471-0.07c0.145-0.046,0.271-0.113,0.377-0.2c0.106-0.086,0.189-0.191,0.25-0.315c0.06-0.123,0.09-0.262,0.09-0.415v-0.02c0-0.213-0.053-0.387-0.159-0.522c-0.106-0.135-0.243-0.242-0.412-0.322c0.14-0.077,0.253-0.178,0.34-0.305c0.086-0.126,0.13-0.285,0.13-0.475v-0.02c0-0.136-0.028-0.262-0.083-0.377c-0.055-0.115-0.131-0.213-0.228-0.295c-0.097-0.082-0.211-0.146-0.343-0.192c-0.131-0.047-0.275-0.07-0.432-0.07s-0.302,0.023-0.435,0.07s-0.249,0.112-0.345,0.195c-0.097,0.083-0.172,0.183-0.228,0.298c-0.055,0.115-0.083,0.239-0.083,0.372v0.02c0,0.19,0.044,0.349,0.133,0.475c0.088,0.127,0.201,0.229,0.337,0.305c-0.17,0.077-0.308,0.184-0.413,0.322c-0.105,0.139-0.157,0.316-0.157,0.533v0.015c0,0.15,0.03,0.286,0.089,0.407C56.618,27.751,56.7,27.856,56.805,27.944z M57.123,25.604c0-0.149,0.05-0.27,0.15-0.363c0.1-0.093,0.229-0.139,0.385-0.139s0.285,0.046,0.385,0.139c0.1,0.093,0.15,0.214,0.15,0.363v0.01c0,0.16-0.051,0.287-0.152,0.383s-0.229,0.145-0.382,0.145s-0.281-0.049-0.383-0.147c-0.102-0.098-0.152-0.225-0.152-0.381V25.604z M57.033,27.172c0-0.083,0.016-0.16,0.047-0.23c0.032-0.07,0.076-0.128,0.132-0.175c0.057-0.047,0.123-0.083,0.198-0.11c0.075-0.027,0.157-0.04,0.248-0.04c0.086,0,0.168,0.013,0.245,0.04c0.077,0.026,0.143,0.063,0.198,0.11c0.055,0.046,0.098,0.105,0.13,0.175c0.032,0.07,0.047,0.147,0.047,0.23v0.01c0,0.16-0.056,0.292-0.167,0.395c-0.111,0.103-0.262,0.155-0.452,0.155s-0.342-0.052-0.455-0.155c-0.113-0.104-0.17-0.235-0.17-0.395V27.172z" class="st24"/><path d="M50.742,25.456c0,0.157,0.127,0.284,0.284,0.284h1.766c0.157,0,0.284-0.127,0.284-0.284s-0.127-0.284-0.284-0.284h-1.766C50.869,25.172,50.742,25.299,50.742,25.456z" class="st24"/><polygon class="st24" points="109.463,67.138 109.463,75.12 114.447,71.129 "/></g></svg>`

    const pinNames: {'name': string, 'touch': number, 'text': any, 'id'?: number, tooltip?: string}[] = [
        { 'name': "SCL", 'touch': 1, 'text': null, 'id': pxsim.CPlayPinName.A4, tooltip: "A4 - SCL" },
        { 'name': "SDA", 'touch': 1, 'text': null, 'id': pxsim.CPlayPinName.A5, tooltip: "A5 - SDA" },
        { 'name': "RX", 'touch': 1, 'text': null, 'id': pxsim.CPlayPinName.A6, tooltip: "A6 - RX" },
        { 'name': "TX", 'touch': 1, 'text': null, 'id': pxsim.CPlayPinName.A7, tooltip: "A7 - TX" },
        { 'name': "PIN_8", 'touch': 1, 'text': null, 'id': pxsim.CPlayPinName.A8, tooltip: "A8 - PMW" },
        { 'name': "PIN_9", 'touch': 1, 'text': null, 'id': pxsim.CPlayPinName.A9, tooltip: "A9 - PMW" },
        { 'name': "PIN_10", 'touch': 1, 'text': null, 'id': pxsim.CPlayPinName.A10, tooltip: "A10 - PMW" },
        { 'name': "PIN_11", 'touch': 1, 'text': null, 'id': pxsim.CPlayPinName.A11, tooltip: "A11 - PMW" },
        { 'name': "GND_0", 'touch': 0, 'text': null, tooltip: "Ground" },
        { 'name': "GND_1", 'touch': 0, 'text': null, tooltip: "Ground" },
        { 'name': "VBATT", 'touch': 0, 'text': null, tooltip: "Battery power" },
        { 'name': "GND_2", 'touch': 0, 'text': null, tooltip: "Ground" },
        { 'name': "PWR_0", 'touch': 0, 'text': null, tooltip: "3.3V, +3v3" },
        { 'name': "PWR_2", 'touch': 0, 'text': null, tooltip: "3.3V, +3v3" }
    ];
    const MB_WIDTH = 144.058;
    const MB_HEIGHT = 145.025;
    export interface IBoardTheme {
        accent?: string;
        display?: string;
        pin?: string;
        pinTouched?: string;
        pinActive?: string;
        ledOn?: string;
        ledOff?: string;
        buttonOuter?: string;
        buttonUps: string[];
        buttonDown?: string;
        virtualButtonOuter?: string;
        virtualButtonUp?: string;
        virtualButtonDown?: string;
        lightLevelOn?: string;
        lightLevelOff?: string;
        soundLevelOn?: string;
        soundLevelOff?: string;
    }

    export var themes: IBoardTheme[] = ["#3ADCFE"].map(accent => {
        return {
            accent: accent,
            pin: "#D4AF37",
            pinTouched: "#FFA500",
            pinActive: "#FF5500",
            ledOn: "#ff7777",
            ledOff: "#fff",
            buttonOuter: "#979797",
            buttonUps: ["#000", "#000", "#000"],
            buttonDown: "#FFA500",
            virtualButtonDown: "#FFA500",
            virtualButtonOuter: "#333",
            virtualButtonUp: "#fff",
            lightLevelOn: "yellow",
            lightLevelOff: "#555",
            soundLevelOn: "#7f8c8d",
            soundLevelOff: "#555"
        }
    });

    export function randomTheme(): IBoardTheme {
        return themes[Math.floor(Math.random() * themes.length)];
    }

    export interface IBoardProps {
        runtime?: pxsim.Runtime;
        theme?: IBoardTheme;
        disableTilt?: boolean;
        wireframe?: boolean;
    }

    export class CircuitPlaygroundBoardSvg implements BoardView {
        public element: SVGSVGElement;
        private style: SVGStyleElement;
        private defs: SVGDefsElement;
        private g: SVGGElement;

        private buttons: SVGElement[];
        private buttonsOuter: SVGElement[];
        private buttonABText: SVGTextElement;
        private pins: SVGElement[];
        private pinGradients: SVGLinearGradientElement[];
        private pinTexts: SVGTextElement[];
        private systemLed: SVGCircleElement;
        private redLED: SVGRectElement;
        private slideSwitch: SVGGElement;
        private lightLevelButton: SVGCircleElement;
        private lightLevelGradient: SVGLinearGradientElement;
        private lightLevelText: SVGTextElement;
        private soundLevelButton: SVGCircleElement;
        private soundLevelGradient: SVGLinearGradientElement;
        private soundLevelText: SVGTextElement;
        private thermometerGradient: SVGLinearGradientElement;
        private thermometer: SVGRectElement;
        private thermometerText: SVGTextElement;
        private antenna: SVGPolylineElement;
        private shakeButton: SVGCircleElement;
        private shakeText: SVGTextElement;
        public board: pxsim.DalBoard;
        private pinNmToCoord: Map<Coord> = {
        };

        constructor(public props: IBoardProps) {
            this.buildDom();
            if (props && props.wireframe)
                svg.addClass(this.element, "sim-wireframe");

            if (props && props.theme)
                this.updateTheme();

            if (props && props.runtime) {
                this.board = this.props.runtime.board as pxsim.DalBoard;
                this.board.updateSubscribers.push(() => this.updateState());
                this.updateState();
                this.attachEvents();
            }
        }

        public getView(): SVGAndSize<SVGSVGElement> {
            return {
                el: this.element,
                y: 0,
                x: 0,
                w: MB_WIDTH,
                h: MB_HEIGHT
            };
        }

        public getCoord(pinNm: string): Coord {
            return this.pinNmToCoord[pinNm];
        }

        public highlightPin(pinNm: string): void {
            //TODO: for instructions
        }

        public getPinDist(): number {
            return 10;
        }

        private recordPinCoords() {
            pinNames.forEach((pin, i) => {
                const nm = pin.name;
                const p = this.pins[i];
                const r = p.getBoundingClientRect();
                this.pinNmToCoord[nm] = [r.left + r.width / 2, r.top + r.height / 2];
            });
            console.log(JSON.stringify(this.pinNmToCoord, null, 2))
        }

        private updateTheme() {
            let theme = this.props.theme;

            svg.fills(this.buttonsOuter, theme.buttonOuter);
            svg.fill(this.buttons[0], theme.buttonUps[0]);
            svg.fill(this.buttons[1], theme.buttonUps[1]);
            svg.fill(this.buttons[2], theme.buttonUps[2]);
            if (this.shakeButton) svg.fill(this.shakeButton, theme.virtualButtonUp);

            this.pinGradients.forEach(lg => svg.setGradientColors(lg, theme.pin, theme.pinActive));
            svg.setGradientColors(this.lightLevelGradient, theme.lightLevelOn, theme.lightLevelOff);

            svg.setGradientColors(this.thermometerGradient, theme.ledOff, theme.ledOn);
            svg.setGradientColors(this.soundLevelGradient, theme.soundLevelOn, theme.soundLevelOff);
        }

        public updateState() {
            let state = this.board;
            if (!state) return;
            let theme = this.props.theme;

            let bpState = state.buttonPairState;
            let buttons = bpState.buttons;
            svg.fill(this.buttons[0], buttons[0].pressed ? theme.buttonDown : theme.buttonUps[0]);
            svg.fill(this.buttons[1], buttons[1].pressed ? theme.buttonDown : theme.buttonUps[1]);

            this.updatePins();
            this.updateTilt();
            this.updateRedLED();
            this.updateNeoPixels();
            this.updateSwitch();
            this.updateSound();
            this.updateLightLevel();
            this.updateSoundLevel();
            this.updateButtonAB();
            this.updateGestures();
            this.updateTemperature();

            if (!runtime || runtime.dead) svg.addClass(this.element, "grayscale");
            else svg.removeClass(this.element, "grayscale");
        }

        private lastFlashTime: number = 0;
        private flashSystemLed() {
            if (!this.systemLed)
                this.systemLed = <SVGCircleElement>svg.child(this.g, "circle", { class: "sim-systemled", cx: 75, cy: MB_HEIGHT - 171, r: 2 })
            let now = Date.now();
            if (now - this.lastFlashTime > 150) {
                this.lastFlashTime = now;
                svg.animate(this.systemLed, "sim-flash")
            }
        }

        private updateRedLED() {
            let state = this.board;
            if (!state) return;
            let ledOn = state.edgeConnectorState.getPin(pxsim.CPlayPinName.LED).value > 0;
            if (!this.redLED)
                this.redLED = this.element.querySelector("#SERIAL_LED") as SVGRectElement;
            let fillColor = ledOn ? "#FF0000" : "#000000";
            svg.fill(this.redLED, fillColor);
        }

        private updateNeoPixels() {
            let state = this.board;
            if (!state || !state.neopixelState) return;
            let neopixels = state.neopixelState.getNeoPixels();
            for (let i = 0; i < state.neopixelState.NUM_PIXELS; i++) {
                let rgb = neopixels[i];
                let p_outer = this.element.getElementById(`LED${i}_OUTER`) as SVGPathElement;
                let p_inner = this.element.getElementById(`LED${i}`) as SVGPathElement;
                if (p_inner) p_inner.setAttribute('d', `M 2, 5
        m 0, 0
        a 3,3 0 1,0 6,0
        a 3,3 0 1,0 -6,0`);

                if (!rgb || (rgb.length == 3 && rgb[0] == 0 && rgb[1] == 0 && rgb[2] == 0)) {
                    // Clear the pixel
                    svg.fill(p_outer, `rgb(0,0,0)`);
                    svg.fill(p_inner, `rgb(200,200,200)`);
                    svg.filter(p_inner, null);
                    svg.filter(p_outer, null);
                    continue;
                }

                let hsl = visuals.rgbToHsl(rgb);
                let [h, s, l] = hsl;
                // at least 10% luminosity
                let lx = Math.max(l * 1.4, 100);
                l = Math.max(l, 10);
                if (p_inner) svg.fill(p_inner, `hsl(${h}, ${s}%, ${lx}%)`);
                if (p_outer) svg.fill(p_outer, `hsl(${h}, ${s}%, ${Math.min(l * 3, 75)}%)`);
                if (p_inner) svg.filter(p_inner, `url(#neopixelglow)`);
                if (p_outer) svg.filter(p_outer, `url(#neopixelglow)`);
            }
        }

        private updateSwitch() {
            let state = this.board;
            if (!state || !state.slideSwitchState) return;
            let slideSwitchState = state.slideSwitchState;
            if (!this.slideSwitch) {
                this.slideSwitch = this.element.getElementById(`SLIDE`) as SVGGElement;
                svg.addClass(this.slideSwitch, "sim-slide-switch")
                this.slideSwitch.addEventListener(pointerEvents.up, ev => {
                    let state = this.board;
                    slideSwitchState.on = !slideSwitchState.on;
                    let switchSlide = this.element.getElementById(`SLIDE_INNER`) as SVGGElement;
                    svg.addClass(switchSlide, "sim-slide-switch-inner")
                    if (slideSwitchState.on) {
                        svg.addClass(switchSlide, "on");
                        switchSlide.setAttribute("x", "10");
                        state.buttonPairState.buttons[2].setPressed(true);
                    } else {
                        svg.removeClass(switchSlide, "on");
                        state.buttonPairState.buttons[2].setPressed(false);
                        switchSlide.setAttribute("x", "5.67");
                    }
                })
            }
        }

        private updateSound() {
            let state = this.board;
            if (!state || !state.audioState) return;
            let audioState = state.audioState;

            // FIXME
            // let soundBoard = this.element.getElementById('g4656') as SVGGElement;
            // if (audioState.isPlaying()) {
            //     svg.addClass(soundBoard, "sim-sound-stroke");
            // } else {
            //     svg.removeClass(soundBoard, "sim-sound-stroke");
            // }
        }

        private updatePins() {
            let state = this.board;
            if (!state || !state.edgeConnectorState || !state.capacitiveSensorState) return;
            state.edgeConnectorState.pins.forEach((pin, i) => this.updatePin(pin, i));
        }

        private updatePin(pin: Pin, index: number) {
            if (!pin || !this.pins[index]) return;
            let text = this.pinTexts[index];
            let v = "";

            if (pin.mode & PinFlags.Analog) {
                v = Math.floor(100 - (pin.value || 0) / 1023 * 100) + "%";
                if (text) text.textContent = (pin.period ? "~" : "") + (pin.value || 0) + "";
            }
            else if (pin.mode & PinFlags.Digital) {
                v = pin.value > 0 ? "0%" : "100%";
                if (text) text.textContent = pin.value > 0 ? "1" : "0";
            }
            else if (pin.mode & PinFlags.Touch) {
                v = pin.touched ? "0%" : "100%";
                if (text) text.textContent = "";
            } else {
                v = "100%";
                if (text) text.textContent = "";
            }
            if (v) svg.setGradientValue(this.pinGradients[index], v);
        }

        private updateLightLevel() {
            let state = this.board;
            if (!state || !state.lightSensorState.sensorUsed) return;

            if (!this.lightLevelButton) {
                let gid = "gradient-light-level";
                this.lightLevelGradient = svg.linearGradient(this.defs, gid)
                let cy = 15;
                let r = 10;
                this.lightLevelButton = svg.child(this.g, "circle", {
                    cx: `10px`, cy: `${cy}px`, r: `${r}px`,
                    class: 'sim-light-level-button',
                    fill: `url(#${gid})`
                }) as SVGCircleElement;
                let pt = this.element.createSVGPoint();
                svg.buttonEvents(this.lightLevelButton,
                    (ev) => {
                        let pos = svg.cursorPoint(pt, this.element, ev);
                        let rs = r / 2;
                        let level = Math.max(0, Math.min(255, Math.floor((pos.y - (cy - rs)) / (2 * rs) * 255)));
                        if (level != this.board.lightSensorState.getLevel()) {
                            this.board.lightSensorState.setLevel(level);
                            this.applyLightLevel();
                        }
                    }, ev => { },
                    ev => { })
                this.lightLevelText = svg.child(this.g, "text", { x: 21, y: cy + r - 15, text: '', class: 'sim-text' }) as SVGTextElement;
                this.updateTheme();
            }

            svg.setGradientValue(this.lightLevelGradient, Math.min(100, Math.max(0, Math.floor(state.lightSensorState.getLevel() * 100 / 255))) + '%')
            this.lightLevelText.textContent = state.lightSensorState.getLevel().toString();
        }

        private applyLightLevel() {
            let lv = this.board.lightSensorState.getLevel();
            svg.setGradientValue(this.lightLevelGradient, Math.min(100, Math.max(0, Math.floor(lv * 100 / 255))) + '%')
            this.lightLevelText.textContent = lv.toString();
        }

        private updateSoundLevel() {
            let state = this.board;
            if (!state || !state.soundSensorState.usesSoundLevel) return;

            if (!this.soundLevelButton) {
                let gid = "gradient-sound-level";
                this.soundLevelGradient = svg.linearGradient(this.defs, gid)
                let cy = 134;
                let r = 10;
                this.soundLevelButton = svg.child(this.g, "circle", {
                    cx: `10px`, cy: `${cy}px`, r: `${r}px`,
                    class: 'sim-sound-level-button',
                    fill: `url(#${gid})`
                }) as SVGCircleElement;

                let pt = this.element.createSVGPoint();
                svg.buttonEvents(this.soundLevelButton,
                    (ev) => {
                        let pos = svg.cursorPoint(pt, this.element, ev);
                        let rs = r / 2;
                        let level = Math.max(0, Math.min(255, Math.floor((pos.y - (cy - rs)) / (2 * rs) * 255)));
                        if (level != this.board.soundSensorState.soundLevel) {
                            this.board.soundSensorState.soundLevel = (255 - level);
                            this.applySoundLevel();
                        }
                    }, ev => { },
                    ev => { })
                this.soundLevelText = svg.child(this.g, "text", { x: 21, y: cy + r - 3, text: '', class: 'sim-text' }) as SVGTextElement;
                this.updateTheme();
            }

            svg.setGradientValue(this.soundLevelGradient, Math.min(100, Math.max(0, Math.floor((255 - state.soundSensorState.soundLevel) * 100 / 255))) + '%')
            this.soundLevelText.textContent = state.soundSensorState.soundLevel.toString();
        }

        private applySoundLevel() {
            let lv = this.board.soundSensorState.soundLevel;
            svg.setGradientValue(this.soundLevelGradient, Math.min(100, Math.max(0, Math.floor((255 - lv) * 100 / 255))) + '%')
            this.soundLevelText.textContent = lv.toString();
        }

        private updateTemperature() {
            let state = this.board;
            if (!state || !state.thermometerState || !state.thermometerState.sensorUsed) return;

            // Celsius
            let tmin = -5;
            let tmax = 50;
            if (!this.thermometer) {
                let gid = "gradient-thermometer";
                this.thermometerGradient = svg.linearGradient(this.defs, gid);
                this.thermometer = <SVGRectElement>svg.child(this.g, "rect", {
                    class: "sim-thermometer",
                    x: 135,
                    y: 3,
                    width: 7,
                    height: 32,
                    rx: 2, ry: 2,
                    fill: `url(#${gid})`
                });
                this.thermometerText = svg.child(this.g, "text", { class: 'sim-text', x: 112, y: 10 }) as SVGTextElement;
                this.updateTheme();

                let pt = this.element.createSVGPoint();
                svg.buttonEvents(this.thermometer,
                    (ev) => {
                        let cur = svg.cursorPoint(pt, this.element, ev);
                        let t = Math.max(0, Math.min(1, (35 - cur.y) / 30))
                        state.thermometerState.setLevel(Math.floor(tmin + t * (tmax - tmin)));
                        this.updateTemperature();
                    }, ev => { }, ev => { })
            }

            let t = Math.max(tmin, Math.min(tmax, state.thermometerState.getLevel()))
            let per = Math.floor((state.thermometerState.getLevel() - tmin) / (tmax - tmin) * 100)
            svg.setGradientValue(this.thermometerGradient, 100 - per + "%");
            this.thermometerText.textContent = t + "°C";
        }

        private updateButtonAB() {
            let state = this.board;
            if (state.buttonPairState.usesButtonAB) {
                (<any>this.buttonsOuter[2]).style.visibility = "visible";
                (<any>this.buttons[2]).style.visibility = "visible";
                this.updateTheme();
            }
        }

        private updateGestures() {
            let state = this.board;
            if (state.accelerometerState.useShake && !this.shakeButton) {
                this.shakeButton = svg.child(this.g, "circle", { cx: 380, cy: 100, r: 16.5 }) as SVGCircleElement;
                svg.fill(this.shakeButton, this.props.theme.virtualButtonUp)
                this.shakeButton.addEventListener(pointerEvents.down, ev => {
                    let state = this.board;
                    svg.fill(this.shakeButton, this.props.theme.buttonDown);
                })
                this.shakeButton.addEventListener(pointerEvents.leave, ev => {
                    let state = this.board;
                    svg.fill(this.shakeButton, this.props.theme.virtualButtonUp);
                })
                this.shakeButton.addEventListener(pointerEvents.up, ev => {
                    let state = this.board;
                    svg.fill(this.shakeButton, this.props.theme.virtualButtonUp);
                    this.board.bus.queue(CPLAY.ID_GESTURE, 11); // GESTURE_SHAKE
                })
                this.shakeText = svg.child(this.g, "text", { x: 400, y: 110, class: "sim-text" }) as SVGTextElement;
                this.shakeText.textContent = "SHAKE"
            }
        }

        private updateTilt() {
            if (this.props.disableTilt) return;
            let state = this.board;
            if (!state || !state.accelerometerState.accelerometer.isActive) return;

            let x = state.accelerometerState.accelerometer.getX();
            let y = state.accelerometerState.accelerometer.getY();
            let af = 8 / 1023;

            this.element.style.transform = "perspective(30em) rotateX(" + y * af + "deg) rotateY(" + x * af + "deg)"
            this.element.style.perspectiveOrigin = "50% 50% 50%";
            this.element.style.perspective = "30em";
        }

        private buildDom() {
            this.element = new DOMParser().parseFromString(BOARD_SVG, "image/svg+xml").querySelector("svg") as SVGSVGElement;
            svg.hydrate(this.element, {
                "version": "1.0",
                "viewBox": `0 0 ${MB_WIDTH} ${MB_HEIGHT}`,
                "class": "sim",
                "x": "0px",
                "y": "0px",
                "width": MB_WIDTH + "px",
                "height": MB_HEIGHT + "px",
            });
            this.style = <SVGStyleElement>svg.child(this.element, "style", {});
            this.style.textContent = MB_STYLE;

            this.defs = <SVGDefsElement>svg.child(this.element, "defs", {});
            this.g = <SVGGElement>svg.elt("g");
            this.element.appendChild(this.g);

            // filters
            let glow = svg.child(this.defs, "filter", { id: "filterglow", x: "-5%", y: "-5%", width: "120%", height: "120%" });
            svg.child(glow, "feGaussianBlur", { stdDeviation: "5", result: "glow" });
            let merge = svg.child(glow, "feMerge", {});
            for (let i = 0; i < 3; ++i) svg.child(merge, "feMergeNode", { in: "glow" })

            let neopixelglow = svg.child(this.defs, "filter", { id: "neopixelglow", x: "-200%", y: "-200%", width: "400%", height: "400%" });
            svg.child(neopixelglow, "feGaussianBlur", { stdDeviation: "4.3", result: "coloredBlur" });
            let neopixelmerge = svg.child(neopixelglow, "feMerge", {});
            svg.child(neopixelmerge, "feMergeNode", { in: "coloredBlur" })
            svg.child(neopixelmerge, "feMergeNode", { in: "SourceGraphic" })

            const btnids = ["BTN_A", "BTN_B"];
            this.buttonsOuter = btnids.map(n => this.element.getElementById(n + "_OUTER") as SVGElement);
            this.buttonsOuter.forEach(b => svg.addClass(b, "sim-button-outer"));
            this.buttons = btnids.map(n => this.element.getElementById(n + "_INNER") as SVGElement);
            this.buttons.forEach(b => svg.addClass(b, "sim-button"));

            this.pinTexts = [];
            this.pins = pinNames.map((pin, i) => {
                const n = pin.name;
                let p = this.element.getElementById(n) as SVGElement;
                if (p) {
                    svg.addClass(p, "sim-pin");
                    if (pin.touch)
                        svg.addClass(p, "sim-pin-touch");
                    if (pin.text)
                        this.pinTexts[i] = <SVGTextElement>svg.child(this.g, "text", { class: "sim-text-pin", x: pin.text.x, y: pin.text.y })
                    if (pin.tooltip)
                        svg.hydrate(p, { title: pin.touch })
                }
                return p;
            });

            this.pinGradients = this.pins.map((pin, i) => {
                if (!pin) return undefined;

                let gid = "gradient-pin-" + i
                let lg = svg.linearGradient(this.defs, gid)
                pin.setAttribute("fill", `url(#${gid})`);
                return lg;
            })

            // BTN A+B
            const outerBtn = (left: number, top: number) => {
                const button = this.mkBtn(left, top);
                this.buttonsOuter.push(button.outer);
                this.buttons.push(button.inner);

                return button;
            }

            let ab = outerBtn(132, MB_HEIGHT - 20);
            let abtext = svg.child(ab.outer, "text", { x: 131, y: MB_HEIGHT - 23, class: "sim-text inverted" }) as SVGTextElement;
            abtext.textContent = "L+R";
            (<any>this.buttonsOuter[2]).style.visibility = "hidden";
            (<any>this.buttons[2]).style.visibility = "hidden";
        }

        private mkBtn(left: number, top: number): { outer: SVGElement, inner: SVGElement } {
            const btnr = 2;
            const btnw = 10;
            const btnn = 1.6;
            const btnnm = 2;
            const btnb = 3;
            let btng = svg.child(this.g, "g", { class: "sim-button-group" });
            svg.child(btng, "rect", { class: "sim-button-outer", x: left, y: top, rx: btnr, ry: btnr, width: btnw, height: btnw });

            const outer = btng;
            const inner = svg.child(btng, "circle", {
                class: "sim-button",
                cx: left + btnw / 2,
                cy: top + btnw / 2,
                r: btnb
            });

            return { outer, inner };
        }

        private attachEvents() {
            Runtime.messagePosted = (msg) => {
                switch (msg.type || "") {
                    case "serial": this.flashSystemLed(); break;
                }
            }

            let tiltDecayer = 0;
            this.element.addEventListener(pointerEvents.move, (ev: MouseEvent) => {
                let state = this.board;
                if (!state.accelerometerState.accelerometer.isActive) return;

                if (tiltDecayer) {
                    clearInterval(tiltDecayer);
                    tiltDecayer = 0;
                }

                let bbox = this.element.getBoundingClientRect();
                let ax = (ev.clientX - bbox.width / 2) / (bbox.width / 3);
                let ay = (ev.clientY - bbox.height / 2) / (bbox.height / 3);

                let x = - Math.max(- 1023, Math.min(1023, Math.floor(ax * 1023)));
                let y = Math.max(- 1023, Math.min(1023, Math.floor(ay * 1023)));
                let z2 = 1023 * 1023 - x * x - y * y;
                let z = Math.floor((z2 > 0 ? -1 : 1) * Math.sqrt(Math.abs(z2)));

                state.accelerometerState.accelerometer.update(x, y, z);
                this.updateTilt();
            }, false);
            this.element.addEventListener(pointerEvents.leave, (ev: MouseEvent) => {
                let state = this.board;
                if (!state.accelerometerState.accelerometer.isActive) return;

                if (!tiltDecayer) {
                    tiltDecayer = setInterval(() => {
                        let accx = state.accelerometerState.accelerometer.getX(MicroBitCoordinateSystem.RAW);
                        accx = Math.floor(Math.abs(accx) * 0.85) * (accx > 0 ? 1 : -1);
                        let accy = state.accelerometerState.accelerometer.getY(MicroBitCoordinateSystem.RAW);
                        accy = Math.floor(Math.abs(accy) * 0.85) * (accy > 0 ? 1 : -1);
                        let accz = -Math.sqrt(Math.max(0, 1023 * 1023 - accx * accx - accy * accy));
                        if (Math.abs(accx) <= 24 && Math.abs(accy) <= 24) {
                            clearInterval(tiltDecayer);
                            tiltDecayer = 0;
                            accx = 0;
                            accy = 0;
                            accz = -1023;
                        }
                        state.accelerometerState.accelerometer.update(accx, accy, accz);
                        this.updateTilt();
                    }, 50)
                }
            }, false);

            this.pins.forEach((pin, index) => {
                if (!pin || !this.board.edgeConnectorState.pins[index]) return;
                let pt = this.element.createSVGPoint();

                if (!pinNames[index].touch) {
                    return;
                }

                svg.buttonEvents(pin,
                    // move
                    ev => {
                        let state = this.board;
                        let pin = state.edgeConnectorState.pins[index];
                        let svgpin = this.pins[index];
                        if (pin.mode & PinFlags.Input) {
                            let cursor = svg.cursorPoint(pt, this.element, ev);
                            let v = (400 - cursor.y) / 40 * 1023
                            pin.value = Math.max(0, Math.min(1023, Math.floor(v)));
                        }
                        this.updatePin(pin, index);
                    },
                    // start
                    ev => {
                        let state = this.board;
                        let pin = state.edgeConnectorState.pins[index];
                        let svgpin = this.pins[index];
                        svg.addClass(svgpin, "touched");
                        if (pin.mode & PinFlags.Input) {
                            let cursor = svg.cursorPoint(pt, this.element, ev);
                            let v = (400 - cursor.y) / 40 * 1023
                            pin.value = Math.max(0, Math.min(1023, Math.floor(v)));
                        }
                        this.updatePin(pin, index);
                    },
                    // stop
                    (ev: MouseEvent) => {
                        let state = this.board;
                        let pin = state.edgeConnectorState.pins[index];
                        let svgpin = this.pins[index];
                        svg.removeClass(svgpin, "touched");
                        this.updatePin(pin, index);
                        return false;
                    });
            })
            this.pins.forEach((btn, index) => {
                if (!pinNames[index].touch) {
                    return;
                }
                btn.addEventListener(pointerEvents.down, ev => {
                    let state = this.board;

                    const pin = state.edgeConnectorState.getPin(pinNames[index].id);
                    pin.touched = true;
                    this.updatePin(pin, index);

                    (pxtcore.getTouchButton(index) as CPButton).setPressed(true);
                })
                btn.addEventListener(pointerEvents.leave, ev => {
                    let state = this.board;

                    const pin = state.edgeConnectorState.getPin(pinNames[index].id);
                    pin.touched = false;
                    this.updatePin(pin, index);

                    (pxtcore.getTouchButton(index) as CPButton).setPressed(false);
                })
                btn.addEventListener(pointerEvents.up, ev => {
                    let state = this.board;

                    const pin = state.edgeConnectorState.getPin(pinNames[index].id);
                    pin.touched = false;
                    this.updatePin(pin, index);

                    (pxtcore.getTouchButton(index) as CPButton).setPressed(false);
                })
            })

            let bpState = this.board.buttonPairState;
            let stateButtons = bpState.buttons;
            this.buttonsOuter.forEach((btn, index) => {
                let button = stateButtons[index === 2 ? 3 : index];

                btn.addEventListener(pointerEvents.down, ev => {
                    button.setPressed(true);
                    svg.fill(this.buttons[index], this.props.theme.buttonDown);
                })
                btn.addEventListener(pointerEvents.leave, ev => {
                    button.setPressed(false);
                    svg.fill(this.buttons[index], this.props.theme.buttonUps[index]);
                })
                btn.addEventListener(pointerEvents.up, ev => {
                    button.setPressed(false);
                    svg.fill(this.buttons[index], this.props.theme.buttonUps[index]);
                })
            })
        }
    }
}