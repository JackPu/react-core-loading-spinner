# React-Core-Loading-Spinner

[![npm](https://img.shields.io/npm/v/react-core-image-upload.svg?maxAge=2592000)]()
![Node Version](https://img.shields.io/node/v/react-core-image-upload.svg "Node Version")
[![Build Status](https://travis-ci.org/Vanthink-UED/react-core-image-upload.svg?branch=master)](https://travis-ci.org/Vanthink-UED/react-core-image-upload)

<img src="./shots/react-loading-spinner.png" height="180"/>

A component for loading spinner


### Install
Use Npm
```bash
npm install react-core-loading-spinner --save-dev
```

Use yarn
``` bash
yarn add react-core-loading-spinner
```

Code Example
``` js
import React from 'react';
import {Spinner}  from '../react-core-image-upload';
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



### Run demo
``` bash
npm run start
```
[http://localhost:9000/webpack-dev-server/demo/index.html](http://localhost:9000/webpack-dev-server/demo/index.html)


### Options

| Props        | Type         | Example  | Description  |
| ------------- |:----------| ---------|--------------|
| show     | Boolean | true | show or hide  |
| text      | String      |  'Loading...' | the text you want to show |
| size | Number     |   28 | the size of the loading spinner |
| children | Element   |    ... | change the loading element |
| type | String   |   gif | loading gif |
| style | Object   |   '1:1' | change loading wrap style|



### MIT Liscense 