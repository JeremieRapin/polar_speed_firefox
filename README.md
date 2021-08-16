# Polar Flow Append Speed

This is a simple test to deal with Javascript and the web modifier of Firefox.
Currently, the code works but it's not optimized at all.

## Aim of the project

With the Polar Vantage V2 and the Grit X, we now have the ascent and descent in the lap chart.
The aim, is to compute the elevation speed and display it. (Hi Polar developers, it could be a good idea to add it directly ;))

## How to develop

Through NPM install:

``` bash
npm install --global web-ext
```

Then from the folder of the source files

``` bash
web-ext run --verbose
```

## How to install

Follow the explanations [here](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)

Take care that the sources must be zipped.

``` bash
zip -r -FS ../polar-flow-speed.zip * --exclude '*.git*' --exclude '*.md'
```

## How to lint

Before publish the extension, it could be a great idea to lint the project.

``` bash
web-ext lint
```
