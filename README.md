# Adafruit Circuit Playground target for PXT

[![Build Status](https://ci2.dot.net/buildStatus/icon?job=Private/pxt_project_pink/master/pxt-adafruit_Push)](https://ci2.dot.net/job/Private/job/pxt_project_pink/job/master/job/pxt-adafruit_Push/)

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## installation requirements
- install python 2.7.10
- pip install -U platformio
- Windows requires drivers (linux and MacOS don’t) for serial:
  - https://learn.adafruit.com/introducing-circuit-playground/windows-setup 
 
## to run via web app

- cd libs/core
- pxt build
- cd ../..
- pxt serve

## to deploy via command line

- remove cmds/ and built/ directories at top-level
- cd libs/core
- pxt deploy

## Misc

* Art and logos  https://www.dropbox.com/sh/qvasw5uozbja9l1/AACear3H1X9QmX4ZU_2zCB-Xa?dl=0 
* Fonts https://www.dropbox.com/sh/xo03b1yhzj56q3g/AAAkKR3waKWTJbANfl5bftDKa?dl=0

## Jenkins build
https://ci2.dot.net/job/Private/job/pxt_project_pink/job/master/
