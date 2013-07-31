#!/usr/bin/env node

var optimist = require('optimist');
var compiler = require('../lib/compiler');

var argv = optimist
  .usage("Compiles an opra-project to a set of static files.\nUses config from package.json.")
  .describe('version', 'Print the current version number')
  .describe('help', 'Show this help message')
  .alias('version', 'v')
  .alias('help', 'h')
  .argv;

if (argv.help) {
  console.log(optimist.help());
  return;
}

if (argv.version) {
  console.log(require('../package.json').version);
  return;
}

compiler.run();
