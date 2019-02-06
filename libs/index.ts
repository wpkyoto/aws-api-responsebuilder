import { ResponseBuilder } from './ResponseBuilder'
import ResponseFactory from './ResponseFactory'

export interface interfaces {
  ResponseBuilder: ResponseBuilder,
  ResponseFactory: ResponseBuilder
}

export default {
  ResponseFactory,
  ResponseBuilder: ResponseFactory.init()
}

module.exports = {
  ResponseFactory,
  ResponseBuilder: ResponseFactory.init()
}