import rw from './rw'
import gc from './generate-code';
import program from 'commander';
import helpers from './helpers';
import packageJSON from '../package.json'
import path from 'path';
import questions from './questions';


program
  .name('xli')
  .version(packageJSON.version, '    --version')


function createApp(param) {
    switch (param.type) {
        case 'es5':
            rw.createDirectory(path.resolve('.'), param.app_name)
            gc.generateES5Code(param);
            break;
        case 'es-2015':
            gc.generateES2015Code(param);
            break;
        case 'ts':
            gc.generateTypeScriptCode(param);
            break;
        default:
            throw('Please select an type')
    }
}



async function init(param) {
    let dirName = param.app_name;
    let appName = helpers.getAppName(path.resolve(param.app_name));

    if (rw.directoryExists(dirName) && !rw.isEmptyDirectory(dirName)) {
      let wannaContinue = await questions.doWannaContinue();
      if (wannaContinue.continue == 'yes') createApp(param)
      else process.exit()
    }
    else createApp(param)
}

export default init;