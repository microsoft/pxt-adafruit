# Adafruit Circuit Playground target for PXT

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## experiment with circuit playground

- install python 2.7.10
- pip install -U platformio
- Windows requires drivers (linux and MacOS don’t) for serial:
  - https://learn.adafruit.com/introducing-circuit-playground/windows-setup 
- cd libs/core
- pxt build
- cd ../..
- pxt serve
