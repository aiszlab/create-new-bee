#!/usr/bin/env node
import { Command } from 'commander'

const program = new Command()

program.command('start').action(() => {
  console.log('1111')
})

program.parse()
