[![Build Status](https://travis-ci.org/aniltako/request-param-js.svg?branch=master)](https://travis-ci.org/aniltako/request-param-js)
[![Greenkeeper badge](https://badges.greenkeeper.io/aniltako/request-param-js.svg)](https://greenkeeper.io/)

# request-param-js

request-param-js

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