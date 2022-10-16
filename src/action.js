// import { resolve } from 'path';
// import inquirer from 'inquirer';
// import chalk from 'chalk';
import child_process from 'child_process';


export class Action {
  constructor(program) {
    this.program = program;
  }

  async openURL(url){
    console.log(process.platform);
    switch (process.platform) {
      // Mac
      case "darwin":
        child_process.spawn('open', [url]);
        break;
      // Windows
      case "win32":
        child_process.spawn('start', [url]);
        break;
      // Linux
      default:
        child_process.spawn('xdg-open', [url]);
    }
  }
}
