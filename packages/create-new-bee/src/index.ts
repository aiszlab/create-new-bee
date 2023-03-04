#!/usr/bin/env node
import { Command } from 'commander'
import { create } from './libs/create.js'
import { release } from './libs/release.js'

const program = new Command()

/**
 * 创建 bee 项目模板
 */
program
  .command('create')
  .option('-l|--local')
  .action((options) => create(options))

/**
 * 发布 npm 包
 */
program.command('release').action(() => release())

program.parse()
