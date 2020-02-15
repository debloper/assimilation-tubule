#!/usr/bin/env node

const cli = require('inquirer')

const { intent } = require('./src/choices')
const engage = require('./src/actions')

// Setup CLI
cli.prompt(intent).then(engage)
