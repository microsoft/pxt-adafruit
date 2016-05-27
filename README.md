# micro:bit target for PXT

This target allow to program a [BBC micro:bit](https://www.microbit.co.uk/) using 
PXT ([Microsoft Programming Experience Toolkit](https://github.com/Microsoft/pxt)).

* [Try it live](https://m.pxt.io)

[![Build Status](https://travis-ci.org/Microsoft/pxt-microbit.svg?branch=master)](https://travis-ci.org/Microsoft/pxt-microbit)

## Local server

### Setup

The following commands are a 1-time setup after synching the repo on your machine.

* install the PXT command line
```
npm install -g pxt
```
* install the dependencies
```
npm install
```

### Running

Run this command to open a local web server:
```
pxt serve
```
If the local server opens in the wrong browser, make sure to copy the URL containing the local token. 
Otherwise, the editor will not be able to load the projects.

If you need modify the `.cpp` files, turn on yotta compilation with the ``-yt`` flag:
```
pxt serve -yt
```

To make sure you're running the latest tools, run
```
npm update
```


More instructions at https://github.com/Microsoft/pxt#running-a-target-from-localhost 

## Universal Windows App

The Windows 10 app is a [Universal Windows Hosted Web App](https://microsoftedge.github.io/WebAppsDocs/en-US/win10/CreateHWA.htm)
that wraps ``m.pxt.io`` and provides additional features.

### Building

* Install Visual Studio 2015 Update 2 or higher. Make sure the Windows 10 templates are installed.
* open the ``win10/app.sln`` solution and launch the ``m.pxt.io`` project.
