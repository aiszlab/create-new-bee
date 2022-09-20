#!/usr/bin/env node
import { Command } from 'commander'

const program = new Command()

program.command('create').action(() => {
  console.log('1111')
})

program.parse()
