fs = require 'fs'
opra = require 'opra'

exports.run = ->
  fs.readFile './package.json', 'utf8', (err, data) ->
    json = JSON.parse(data)
    opra.export(json.opra, ->)
