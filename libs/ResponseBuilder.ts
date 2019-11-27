import { APIGatewayProxyResult } from 'aws-lambda'

export interface APIGatewayResponseHeaders {
    [header: string]: boolean | number | string;
}
export interface ResponseBuilder<Body = any, Headers extends APIGatewayResponseHeaders = APIGatewayResponseHeaders> {
    setStatusCode(code: number): ResponseBuilder<Body, Headers>;
    updateHeader(key: string, value: string): ResponseBuilder<Body, Headers>;
    putHeaders(headers: Headers): ResponseBuilder<Body, Headers>;
    setBody(body?: Body): ResponseBuilder<Body, Headers>;
    unsetBody(): ResponseBuilder<Body, Headers>;
    getResponse(): APIGatewayProxyResult;
}
