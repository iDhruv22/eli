import chalk from 'chalk';
import figlet from 'figlet';
import files from './lib/files';
import clear from 'clear';
import questions from './lib/questions';
import cli from './lib/cli';

// clear();

console.log(
  chalk.yellow(
    figlet.textSync('ExCLI', { horizontalLayout: 'full' })
  )
);

console.log(chalk.green(`
  A CLI for Express 
`));

(async () => {
  try {
    let name = await questions.getName()
    let type = await questions.getTypes();
    let view = await questions.getView();
    await cli(Object.assign({}, type, view, name))    
  } catch (error) {
    console.error(error)
  }

})();