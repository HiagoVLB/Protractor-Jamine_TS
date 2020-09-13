# Protractor and Jasmine with TS

This project provides a basic boilerplate and some examples of how to use Protractor with Jasmine (Typescript)

![Output sample](https://github.com/HiagoVLB/Protractor-Jamine_TS/blob/master/Demo.gif)

## What's being used on this Project?

Bellow it is listed what is being used in this project:

- Protractor
- Jasmine
- TS Node
- Typescript
- Prettier
- Protractor Beatiful Reporter

## Installation

First you need Node:

```sh
https://nodejs.org/
```

## Configuration

After installing node create a folder for your project, then use CMD/Terminal and run:

#### Package.json

```sh
npm init -y
```

This will create a default: "package.json".

#### Protractor

Use npm to install Protractor globally (omit the -g if you’d prefer not to install globally):

```sh
npm install -g protractor
```

#### TS Node

Use npm to install TS Node globally (omit the -g if you’d prefer not to install globally):

```sh
npm install --save-dev @types/node
```

#### TS Node - Types

Use npm to install @types/node globally (omit the --save-dev if you’d prefer not to install package for development purpose):

```sh
npm install --save-dev @types/node
```

This what makes your IDE (Visual Code, Webstorm ...) recognize commands from TS Node

#### Typescript

Use npm to install Typescript globally (omit the -g if you’d prefer not to install globally):

```sh
npm install -g typescript
```

#### Jasmine

Use npm to install Jasmine globally (omit the -g if you’d prefer not to install globally):

```sh
npm install -g jasmine
```

#### Jasmine - Types

Use npm to install @types/jasmine globally (omit the --save-dev if you’d prefer not to install package for development purpose):

```sh
npm install --save-dev @types/jasmine
```

This what makes your IDE (Visual Code, Webstorm ...) recognize commands from Jasmine

#### Jasmine - Types Typescript

Use npm to install @types/jasminewd2 globally (omit the --save-dev if you’d prefer not to install package for development purpose):

```sh
npm install --save-dev @types/jasminewd2
```

This what makes your IDE (Visual Code, Webstorm ...) recognize commands from Jasmine Typescript

#### Webdriver Update

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

```sh
webdriver-manager update
```

### Prettier

Prettier is an opinionated code formatter for installing it run:

```sh
npm install --save-dev prettier
```

### Protractor Beatiful Reporter

For a better looking report run:

```sh
npm install protractor-beautiful-reporter --save-dev
```

If you don't want to use this you will need to remove code inside "OnPrepare" on "conf.js"

## Running Project

#### Converting Typescript to Javascript

After all the setup above for running your project we need compilied Javascript (Typescript to Javascript). If you installed Typescript globally run:

```sh
tsc -w
or
tsc
```

Otherwise use:

```sh
npm run tsc
or
npm run tsc -w
```

#### Runnig Specs (Tests)

For running your tests type:

```sh
protractor conf.js
```

## More Information

Consider reading topics below for more information:

**[Typescript](https://www.typescriptlang.org/docs)**</br>
**[TSCongig](https://www.typescriptlang.org/tsconfig)**</br>
**[ProtractorConfig](https://github.com/angular/protractor/blob/master/lib/config.ts)**</br>
**[ProtractorTypescript](https://github.com/angular/protractor/tree/5.4.1/exampleTypescript)**</br>
**[ProtractorSyleGuide](https://www.protractortest.org/#/style-guide)**</br>
**[ProtractorAPI](https://www.protractortest.org/#/api)**</br>
