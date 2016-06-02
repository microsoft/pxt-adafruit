# Extensions

You can publish libraries (also known as packages or extensions)
that users can then add to their scripts. These typically
provide a driver for a particular hardware device you can connect
to a microbit.

* [Sample C++ extension](https://github.com/Microsoft/pxt-microbit-cppsample)
* [Sample TypeScript extension](https://github.com/Microsoft/pxt-microbit/tree/master/libs/i2c-fram)

## Finding libraries

From the editor, the user clicks on **More** then **Add Package** and searches for the package. 

To see the list of packages, click on **More** then **Show Files** to see the project file list.

To remove a package, click on the garbage button in the file list next to the package.

## Publishing libraries

Packages can be published from the pxt command line. We are still sorting out the details.

## Localizing libraries

It is possible to package localization strings for the **jsDoc** description associated to the API in the package.

When compiling a package, the PXT compiler generates a `strings.json` file under the `_locales/` folder. 
This file contains a map from the symbol name to the en

```
{
  ...
  "basic": "Provides access to basic micro:bit functionality.",
   ...
}
```

```
{
  "basic.clearScreen": "Eteint toutes les diodes."
}
```

```
_locales/
_locales/fr/strings.json
_locales/pt-BR/strings.json
```
