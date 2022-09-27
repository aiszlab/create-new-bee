#!/usr/bin/env node
import { Command } from 'commander'
import { build } from './libs/build'
import { start } from './libs/start'

const program = new Command()

program.command('start').action(async () => {
  await start().catch(() => false)
})

program.command('build').action(async () => {
  await build().catch(() => false)
})

program.parse()
