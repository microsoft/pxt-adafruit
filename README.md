# Adafruit Circuit Playground Express target for PXT

[![Build Status](https://travis-ci.org/Microsoft/pxt-adafruit.svg?branch=master)](https://travis-ci.org/Microsoft/pxt-adafruit)

This repo contains the editor target hosted at https://makecode.adafruit.com .

## Local Dev setup

These instructions assume familiarity with dev tools and languages.

* install Node.js 6+
* install [yotta](http://docs.yottabuild.org/#installing)
* (optional) install [Visual Studio Code](https://code.visualstudio.com/)

In a common folder,

* clone https://github.com/Microsoft/pxt to ``pxt`` folder
* clone https://github.com/Microsoft/pxt-common-packages to ``pxt-common-packages`` folder
* clone https://github.com/Microsoft/pxt-adafruit to ``pxt-adafruit`` folder
* go to ``pxt`` and run

```
npm install
typings install
jake
```

* go to ``pxt-common-packages`` and run

```
npm install
npm link ../pxt
```

* go to ``pxt-adafruit`` and run

```
npm install
npm link ../pxt
npm link ../pxt-common-packages
```

## to run the local server

From root github folder,

```
cd pxt-adafruit
pxt serve --cloud
```

## to build and deploy a single package via command line

```
cd libs/core
pxt deploy
```

## Misc

* Art and logos  https://www.dropbox.com/sh/qvasw5uozbja9l1/AACear3H1X9QmX4ZU_2zCB-Xa?dl=0 
* Fonts https://www.dropbox.com/sh/xo03b1yhzj56q3g/AAAkKR3waKWTJbANfl5bftDKa?dl=0

## Jenkins build

https://ci2.dot.net/job/Private/job/pxt_project_pink/job/master/

## License
MIT

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.