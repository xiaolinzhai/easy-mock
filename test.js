const pathToRegexp = require('path-to-regexp')
const fullURL = '/foo/cde/fgt/lokj/'
let params = {}
const paramNames = []
const util = require('./util')
//const api = pathToRegexp('/foo/:bar*', paramNames)
//console.log('api', api)
//console.log(fullURL.match(api))
params = util.params('/foo/:bar*', '/foo/cde/fgt/lokj/')
console.log(params)
const pathname = pathToRegexp.compile('/foo/:bar*')(params)
console.log('pathname', pathname)
