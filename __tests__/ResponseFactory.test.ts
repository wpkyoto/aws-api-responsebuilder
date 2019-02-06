import ResponseFactory from '../libs/ResponseFactory'

const getExpectedResponse = (statusCode: number = 500 , body: {} = {}) => {
    return {
        statusCode,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify(body)
    }
}

describe('libs/responseUtils.ts', () => {
    let builder = ResponseFactory.init()
    beforeEach(() => {
        builder = ResponseFactory.init()
    })
    describe('#getResponse()', () => {
        it('should return error response by default', () => {
            const response = getExpectedResponse(500, {
                message: 'Internal Server Error'
            })
            expect(builder.getResponse()).toEqual(response)
        })
    })
    describe('#setStatusCode', () => {
        it('should update status code', () => {
            builder.setStatusCode(400)
            const response = getExpectedResponse(400, {
                message: 'Internal Server Error'
            })
            expect(builder.getResponse()).toEqual(response)

        })
    })
    describe('#updateHeader', () => {
        it('should update currentry header', () => {
            builder.updateHeader('Access-Control-Allow-Origin', 'localhost')
            const response = {
                statusCode: 500,
                headers: {
                    'Access-Control-Allow-Origin': 'localhost',
                    'Access-Control-Allow-Credentials': true
                },
                body: JSON.stringify({
                    message: 'Internal Server Error'
                })
            }
            expect(builder.getResponse()).toEqual(response)
        })
        it('should add a new header', () => {
            builder.updateHeader('x-hoge', 'fuga')
            const response = {
                statusCode: 500,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'x-hoge': 'fuga'
                },
                body: JSON.stringify({
                    message: 'Internal Server Error'
                })
            }
            expect(builder.getResponse()).toEqual(response)
        })
    })
    describe('#putHeaders()', () => {
        it('should replace new headers', () => {
            builder.putHeaders({
                'x-hoge': 'fuga'
            })
            const response = {
                statusCode: 500,
                headers: {
                    'x-hoge': 'fuga'
                },
                body: JSON.stringify({
                    message: 'Internal Server Error'
                })
            }
            expect(builder.getResponse()).toEqual(response)
        })
    })
    describe('#setBody()', () => {
        it('should set body', () => {
            builder.setBody({
                message: 'hello',
                code: 'world'
            })
            const response = getExpectedResponse(500, {
                message: 'hello',
                code: 'world'
            })
            expect(builder.getResponse()).toEqual(response)
        })
    })
})
