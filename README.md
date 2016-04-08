# micro:bit target for PXT

This target allow to program a [BBC micro:bit](https://www.microbit.co.uk/) using 
[Microsoft Programming Experience Toolkit](https://github.com/Microsoft/pxt).

[![Build Status](https://travis-ci.org/Microsoft/pxt-microbit.svg?branch=master)](https://travis-ci.org/Microsoft/pxt-microbit)

# Getting started

Please follow instructions at https://github.com/Microsoft/pxt#running-a-target-from-localhost 

## Universal Windows App

The Windows 10 app is a [Universal Windows Hosted Web App](https://microsoftedge.github.io/WebAppsDocs/en-US/win10/CreateHWA.htm)
that wraps codemicrobit.com and provides additional features.

### Sideloading

Find the latest build under ``win10/app/AppPackages/latest`` and run the ``Add-AppDevPackage.ps1`` PowerShell script.

### Building

* Install Visual Studio 2015 Update 2 or higher. Make sure the Windows 10 templates are installed.
* open the ``win10/app.sln`` solution and launch the ``codemicrobit`` project.