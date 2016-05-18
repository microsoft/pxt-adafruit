# micro:bit target for PXT

This target allow to program a [BBC micro:bit](https://www.microbit.co.uk/) using 
[Microsoft Programming Experience Toolkit](https://github.com/Microsoft/pxt).

* [Try it live](https://m.pxt.io)

[![Build Status](https://travis-ci.org/Microsoft/pxt-microbit.svg?branch=master)](https://travis-ci.org/Microsoft/pxt-microbit)

# Getting started

The following commands are a 1-time setup after synching the repo on your machine.

* install the PXT command line
```
npm install -g pxt
```
* install the dependencies
```
npm install
```

After you're done, simple run this command to open a local web server:
```
pxt serve
```

More instructions at https://github.com/Microsoft/pxt#running-a-target-from-localhost 

## Universal Windows App

The Windows 10 app is a [Universal Windows Hosted Web App](https://microsoftedge.github.io/WebAppsDocs/en-US/win10/CreateHWA.htm)
that wraps m.pxt.io and provides additional features.

### Building

* Install Visual Studio 2015 Update 2 or higher. Make sure the Windows 10 templates are installed.
* open the ``win10/app.sln`` solution and launch the ``m.pxt.io`` project.
