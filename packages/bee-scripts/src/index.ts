#!/usr/bin/env node
import { Command } from 'commander'
import { start } from './libs/start'

const program = new Command()

program.command('start').action(() => {
  start()
})

program.parse()
