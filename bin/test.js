#!/usr/bin/env node

'use strict';

var program = require('commander');

program
    .version('0.0.1')
    .option('-f, --foo <number>', 'enable some foo')
    .option('-b, --bar <string>', 'enable some bar')
    .option('-B, --baz []', 'enable some baz')
    .parse(process.argv);

if(program.foo && program.bar && program.baz){
    console.log('%s,%s,%s', program.foo, program.bar, program.baz);
}

