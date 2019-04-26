[![Build Status](https://travis-ci.org/PeterNgTr/amazon-ui-tests.svg?branch=master)](https://travis-ci.org/PeterNgTr/amazon-ui-tests)

# Introduction

Basically, this is used for e2e tests.

# How to use

This e2e test is done using CodeceptJS https://codecept.io/

### Tech

e2e test uses a number of open source projects to work properly:

* https://nodejs.org/en/ - evented I/O for the backend
* https://codecept.io/ - CodeceptJS
* https://www.npmjs.com/package/webdriver-manager - A selenium server and browser driver manager for your end to end tests.

### Installation

e2e test requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and devDependencies.

```sh
$ cd codeceptjs-wdio-services
$ npm install -d
```

### How to trigger UI test

This demo project uses [Wdio-Services](https://codecept.io/plugins#wdio) hence you don't need to start the selenium

To run all e2e tests just simply type

```sh
$ yarn start
```





