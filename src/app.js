#!/usr/bin/env node

import { Command } from 'commander';
import { setupCommands } from './commands.js';
import { Action } from './action.js';

const program = new Command();
const action = new Action(program);
setupCommands(program, action);

program.showHelpAfterError();
program.showSuggestionAfterError();
program.version('0.0.1', '-v, --version');
program.description('CLI tool to decode / encode work with web3games chain');
program.parse(process.argv);
