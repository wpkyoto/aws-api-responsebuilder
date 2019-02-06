import { APIGatewayProxyResult } from 'aws-lambda'

export interface ResponseBuilder {
    setStatusCode(code: number): ResponseBuilder;
    updateHeader(key: string, value: string): ResponseBuilder;
    putHeaders(headers: {}): ResponseBuilder;
    setBody(body: {}): ResponseBuilder;
    getResponse(): APIGatewayProxyResult;
}
