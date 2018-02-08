# React-Core-Loading-Spinner

[![npm](https://img.shields.io/npm/v/react-core-loading-spinner.svg?maxAge=2592000)]()
![Node Version](https://img.shields.io/node/v/react-core-loading-spinner.svg "Node Version")
[![Build Status](https://travis-ci.org/JackPu/react-core-loading-spinner.svg?branch=master)](https://travis-ci.org/JackPu/react-core-loading-spinner)

<img src="./shots/react-loading-spinner.png" height="180"/>

A component for loading spinner.

[Example](http://events.jackpu.com/react-core-loading-spinner/)


## Install

Use Npm

```bash
npm install react-core-loading-spinner --save-dev
```

Use Yarn

``` bash
yarn add react-core-loading-spinner
```

Code Example
``` js
import React from 'react';
import {Spinner}  from 'react-core-loading-spinner';
let App = React.createClass({
//...

  render() {
    return(
      <div>
        <Spinner show={true} text="Requesting..."></Spinner>
      </div>
    );
  },

})

```



## Run Demo
``` bash
npm run start
```
[http://localhost:9000/webpack-dev-server/demo/index.html](http://localhost:9000/webpack-dev-server/demo/index.html)

[Demo](http://vanthink-ued.github.io/react-core-loading-spinner/)

## Props

| Props        | Type         | Example  | Description  |
| ------------- |:----------| ---------|--------------|
| show     | Boolean | true | show or hide  |
| text      | String      |  'Loading...' | the text you want to show |
| size | String     |   28px | the size of the loading spinner |
| children | Component   |    ... | change the loading element |
| type | String   |   gif | loading gif |
| style | Object   |   {} | change loading wrap style|

## Contributions

Your contributions and suggestions are welcome 😄😄💐💐🌠🌠

## MIT Liscense
