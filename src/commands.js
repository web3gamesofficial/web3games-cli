// import chalk from 'chalk';
import { Command } from 'commander';
import { Action } from './action.js';


const options = {
  login:['-l --login <path>',`web3games developer login in `] ,
};

/**
 *
 * @param {Command} program
 * @param {Action} action
 */
export function setupCommands(program, action) {

  program
    .command('login')
    .description("open web3games wallet")
    .argument('[]','type name')
    .action( async (typeName) => {
        await action.openURL('https://w3wallet.vercel.app/')
    })

  program.commands.forEach((command) => {
    switch (command.name()) {
      case 'login':
        command.option(...options.login);
        break;
    }
  });

  Object.values(options).forEach((option) => {
    program.option(...option);
  });
}
