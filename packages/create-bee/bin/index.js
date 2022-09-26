#!/usr/bin/env node
import { Command } from 'commander';
import { create } from './libs/create.js';
const program = new Command();
program
    .command('create')
    .option('-l|--local')
    .action((options) => create(options));
program.parse();
