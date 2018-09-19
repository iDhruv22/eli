import inquirer from 'inquirer';

export default {
    getTypes() {
        const questions = [
            {
                type: 'list',
                name: 'type',
                message: 'Select ES or TypeScript module',
                choices: ['es5', 'es6', 'ts'],
                default: ['es5'],
                validate: answer => {
                    if (answer.length < 1) {
                      return 'You must choose at least one topping.';
                    }
                    return true;
                  }
            }
        ];

        return inquirer.prompt(questions);
    },
    getView() {
        const questions = [
            {
                type: 'list',
                name: 'view',
                message: 'Select view engine',
                choices: ['jade', 'ejs', 'pug', 'no-view'],
                default: ['ejs'],
                validate: answer => {
                    if (answer.length < 1) {
                      return 'You must choose at least one topping.';
                    }
                    return true;
                }
            }
        ];

        return inquirer.prompt(questions);
    },
    getName() {
        return inquirer.prompt([{
                type: 'input',
                name: 'app_name',
                message: "Enter application name:",
                validate: answer => answer !== ''
            }
        ])
    },
    doWannaContinue() {
        const questions = [
            {
                type: 'list',
                name: 'continue',
                message: 'Directory is not empty, do you wanna continue?',
                choices: ['no', 'yes'],
                default: ['yes'],
                validate: answer => {
                    if (answer.length < 1) {
                      return 'You must choose at least one topping.';
                    }
                    return true;
                  }
            }
        ];

        return inquirer.prompt(questions);
    }
}