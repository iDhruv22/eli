const chalk = require('chalk');
const figlet = require('figlet');

// clear();
console.log(
  chalk.yellow(
    figlet.textSync('ELI', { horizontalLayout: 'full' })
  )
);