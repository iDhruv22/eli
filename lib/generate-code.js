import helpers from './helpers';
import rw from './rw';
import questions from './questions';
import path from 'path'

export default {
    generateES5Code(param) {
        let packageJson = rw.readTemplate(param.type, 'package.json');

        packageJson.vars['app_name'] = param.app_name;
        packageJson.vars['devDep'] = [];
        packageJson.vars['dep'] = [{
            name: 'express',
            version: '~4.16.0',
        }, {
            name: 'morgan',
            version: '~1.9.0'
        }, {
            name: 'morgan',
            version: '~1.9.0'
        }, {
            name: 'cookie-parser',
            version: '~1.4.3'
        }];

        let packageJsonRendered = packageJson.render()

        rw.writeFile(path.resolve(param.app_name, 'package.json'), JSON.parse(JSON.stringify(packageJsonRendered, null, 2)))

    },
    generateES2015Code(param) {
        
    },
    generateTypeScriptCode(param) {
    
    }
}