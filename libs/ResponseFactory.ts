import { APIGatewayProxyResult } from 'aws-lambda'
import { ResponseBuilder, APIGatewayResponseHeaders } from './ResponseBuilder'
export class ResponseFactory {
    public static init<Body = any, Headers extends APIGatewayResponseHeaders = APIGatewayResponseHeaders> (): ResponseBuilder<Body, Headers> {
        const response: APIGatewayProxyResult = {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify({
                message: 'Internal Server Error'
            })
        }
        return {
            setStatusCode (code: number): ResponseBuilder<Body, Headers> {
                response.statusCode = code
                return this
            },
            updateHeader (key: string, value: string): ResponseBuilder<Body, Headers> {
                if (!response.headers) {
                    response.headers = {
                        [key]: value
                    }
                } else {
                    response.headers[key] = value
                }
                return this
            },
            putHeaders (headers: Headers): ResponseBuilder<Body, Headers> {
                response.headers = headers
                return this
            },
            setBody (body?: Body): ResponseBuilder<Body, Headers> {
                if (!body) return this.unsetBody()
                response.body = typeof body !== 'string' ? JSON.stringify(body) : body
                return this
            },
            unsetBody (): ResponseBuilder<Body, Headers> {
                delete response.body
                return this
            },
            getResponse (): APIGatewayProxyResult {
                return response
            }
        }
    }
}
export default ResponseFactory
