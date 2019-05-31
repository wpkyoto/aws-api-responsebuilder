import { APIGatewayProxyResult } from 'aws-lambda'
import { ResponseBuilder } from './ResponseBuilder'
export class ResponseFactory {
    public static init (): ResponseBuilder {
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
            setStatusCode (code: number): ResponseBuilder {
                response.statusCode = code
                return this
            },
            updateHeader (key: string, value: string): ResponseBuilder {
                if (!response.headers) {
                    response.headers = {
                        [key]: value
                    }
                } else {
                    response.headers[key] = value
                }
                return this
            },
            putHeaders (headers: {}): ResponseBuilder {
                response.headers = headers
                return this
            },
            setBody (body: {}): ResponseBuilder {
                response.body = JSON.stringify(body)
                return this
            },
            getResponse (): APIGatewayProxyResult {
                return response
            }
        }
    }
}
export default ResponseFactory
