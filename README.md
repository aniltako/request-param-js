[![Build Status](https://travis-ci.org/aniltako/request-param-js.svg?branch=master)](https://travis-ci.org/aniltako/request-param-js)
[![Greenkeeper badge](https://badges.greenkeeper.io/aniltako/request-param-js.svg)](https://greenkeeper.io/)

# create-npm-package-js

create-npm-package-js

## Usage

```js

import { getRequestParams } from 'request-param-js'

const params = {
    searchText: 'john',
    page: 1,
    size: 10,
}
               
const requestParams = getRequestParams(params) // searchText=john&page=1&size=10&

```