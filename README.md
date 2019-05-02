# MakeCode for Adafruit Circuit Playground Express [![Build Status](https://travis-ci.org/Microsoft/pxt-adafruit.svg?branch=master)](https://travis-ci.org/Microsoft/pxt-adafruit)

This repo contains the editor hosted at https://makecode.adafruit.com .

* (optional) install [Visual Studio Code](https://code.visualstudio.com/)

## Local server setup

This setup gives you a local version of the editor and the ability to load packages from your machine. This is the setup to develop new packages.

### Setup

* install [Node.js 8+](https://nodejs.org/en/download/)
* clone https://github.com/Microsoft/pxt-adafruit to ``pxt-adafruit`` folder
* go to ``pxt-adafruit`` and run

```
npm install
```

Don't forget to periodically ``git pull`` and ``npm install`` to get the latest changes.

### Launching the server

This command launches a local web server. Note that this web server is meant for development purposes only. It was not designed or secured to be run on a web server.

```
npm run serve
```

### Creating and editing a package

* go to ``/projects`` under the ``pxt-adafruit`` folder
* clone your package repo, say ``pxt-helloworld``
* launch the server with ``npm run serve`` from the ``pxt-adafruit`` folder using ``npm serve``
* create a new project
* go to **project settings** and click on **Edit settings as text**
* add an entry in the dependency section that points to your project
```
    "dependencies": {
        "circuit-playground": "*",
        "helloworld": "file:../pxt-helloworld"
    },
```
* click on the **Blocks** icon to reload the blocks.

Once this project is setup, simply reload the editor after making changes on disk.

## Local Dev setup

This setup is needed if you plan to make changes in PXT itself. In most cases, it's a bit of an overkill
if you are building a package for the Adafruit editor.

* install [Node.js 8+](https://nodejs.org/en/download/)
* install the PXT command line
```
npm install -g pxt
```

In a common folder,

* clone https://github.com/Microsoft/pxt to ``pxt`` folder
* clone https://github.com/Microsoft/pxt-common-packages to ``pxt-common-packages`` folder
* clone https://github.com/Microsoft/pxt-adafruit to ``pxt-adafruit`` folder
* go to ``pxt`` and run

```
npm install
npm run build
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

### to run the local server

From root github folder,

```
cd pxt-adafruit
pxt serve
```

### to build and deploy a single package via command line

```
cd libs/core
pxt deploy
```

## License
MIT

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

MICROSOFT, the Microsoft Logo, and MAKECODE are registered trademarks of Microsoft Corporation. They can only be used for the purposes described in and in accordance with Microsoft’s Trademark and Brand guidelines published at https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general.aspx. If the use is not covered in Microsoft’s published guidelines or you are not sure, please consult your legal counsel or MakeCode team (makecode@microsoft.com).
