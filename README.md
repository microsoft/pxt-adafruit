# micro:bit target for KindScript

This target allow to program a [BBC micro:bit](https://www.microbit.co.uk/) using [KindScript](https://github.com/Microsoft/kindscript).

# Getting started

> If you're making changes to kindscript repository itself, proceed to **Local installation** below.

* Clone this repo and run

```
npm install
```

* Install the `KindScript` tool and launch the local server:

```
npm install -g kindscript-cli
kind serve
```
To re-build the `built/target.json` file, re-run `kind serve`.


## Local installation

* Clone and build [KindScript](https://github.com/Microsoft/kindscript) in a `kindscript` folder.
* Clone this repo  in a `kindscript-microbit` folder next to `kindscript`

```
npm install
```
* To build and deploy new changes

```
npm install -g kindscript-cli
cd ../kindscript
jake
cd ../kindscript-microbit
npm link ../kindscript
kind serve
```
* open `localhost:3232` to try your editor!