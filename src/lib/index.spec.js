import { getRequestParams } from ".";

describe("Request Params", () => {

    test("Request params with all data.", () => {
        const requestParam = {
            searchText: 'john',
            page: 1,
            size: 10,
        }
        expect(getRequestParams(requestParam)).toBe("searchText=john&page=1&size=10&");
    })

    test("Request params with  page = null .", () => {
        const requestParam = {
            searchText: 'john',
            page: null,
            size: 10,
        }
        expect(getRequestParams(requestParam)).toBe("searchText=john&size=10&");
    })

    test("Request params with  page = undefined .", () => {
        const requestParam = {
            searchText: 'john',
            page: undefined,
            size: 10,
        }
        expect(getRequestParams(requestParam)).toBe("searchText=john&size=10&");
    })
})
