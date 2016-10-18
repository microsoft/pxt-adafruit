# Adafruit Circuit Playground target for PXT

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## experiment with circuit playground
- install python 2.7.10
- pip install -U platformio
- Windows requires drivers (linux and MacOS don’t) for serial:
  - https://learn.adafruit.com/introducing-circuit-playground/windows-setup 
- cd to newly created directory
- platformio init  
  - this creates file platformio.ini
- edit platformio.ini and add following lines
```[env:myenv]
platform = atmelavr
framework = arduino
board = feather32u4
lib_deps = Adafruit Circuit Playground
```
- create a src/main.cpp file. Find examples at https://github.com/adafruit/Adafruit_CircuitPlayground/tree/master/examples  
  - copy one of the .ino files in the example directory to src/main.cpp
- platformio run
  - the first time, it will install the AVR toolchain and adafruit library
  - this command is the build step
- plug in your board
- platformio run --target upload  
  - flashes latest hex file compiled via “platformio run”
