import * as builderInterface from './ResponseBuilder'
import ResponseFactory from './ResponseFactory'

export * from './ResponseFactory'

export const ResponseBuilder = ResponseFactory.init()

export interface interfaces {
    ResponseBuilder: builderInterface.ResponseBuilder;
}

export default {
    ResponseFactory,
    ResponseBuilder
}

module.exports = {
    ResponseFactory,
    ResponseBuilder
}
