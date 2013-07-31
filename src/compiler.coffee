opra = require 'opra'

exports.run = ->
  fs.readFile './package.json', 'utf8', (err, data) ->
    opra.export(data.opra, ->)
