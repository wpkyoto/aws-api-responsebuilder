import * as builderInterface from './ResponseBuilder'
import ResponseFactory from './ResponseFactory'

export * from './ResponseFactory'

export const ResponseBuilder = ResponseFactory.init()

export namespace interfaces {
    export type ResponseBuilder = builderInterface.ResponseBuilder;
}

export default {
    ResponseFactory,
    ResponseBuilder
}

module.exports = {
    ResponseFactory,
    ResponseBuilder
}
