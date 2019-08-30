
const getRequestParams = (data) => {
  let requestParams = '';
  for (var key in data) {
    if (data.hasOwnProperty(key) && data[key] !== null && data[key] !== undefined) {
      requestParams = `${requestParams}${key}=${data[key]}&`
    }
  }
  return requestParams;
}

export {
  getRequestParams
}
