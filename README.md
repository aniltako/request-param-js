[![Build Status](https://travis-ci.org/aniltako/request-param-js.svg?branch=master)](https://travis-ci.org/aniltako/request-param-js)

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