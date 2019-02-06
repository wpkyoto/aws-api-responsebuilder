# AWS Amazon API Gateway Response builder
[![Build Status](https://travis-ci.org/hideokamoto/aws-api-responsebuilder.svg?branch=master)](https://travis-ci.org/hideokamoto/aws-api-responsebuilder)
[![npm version](https://badge.fury.io/js/aws-api-responsebuilder.svg)](https://badge.fury.io/js/aws-api-responsebuilder)

## Getting started
```
$ npm i -S aws-api-responsebuilder
```

## Usage

```
import AWSAPIs from 'aws-api-responsebuilder'

const { ResponseBuilder } = AWSAPIs
ResponseBuilder.setStatusCode(400)
ResponseBuilder.setBody({
    message: `Invalid Request`,
    code: 'invalid_request'
})
console.log(ResponseBuilder.getResponse())

{ statusCode: 400,
  headers:
   { 'Access-Control-Allow-Origin': '*',
     'Access-Control-Allow-Credentials': true },
  body: '{"message":"Invalid Request","code":"invalid_request"}' }
```