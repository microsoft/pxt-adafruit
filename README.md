# microbit target for KindScript


## Local run

Make sure `kindscript-microbit` is in a directory next to `kindscript`.

```
npm install -g kindscript-cli
cd ../kindscript
jake
cd ../kindscript-microbit
npm link ../kindscript
kind serve
```

To re-build the `built/target.json` file, re-run `kind serve`.
