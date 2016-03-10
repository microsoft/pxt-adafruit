# microbit target for KindScript


## Regular installation

If you're making changes to kindscript repository itself, proceed to **Local installation** below.

Installation:
```
npm install -g kindscript-cli
kind serve
```
To re-build the `built/target.json` file, re-run `kind serve`.


## Local installation

Make sure `kindscript-microbit` is in a directory next to `kindscript`.

```
npm install -g kindscript-cli
cd ../kindscript
jake
cd ../kindscript-microbit
npm link ../kindscript
kind serve
```

