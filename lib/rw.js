import fs from 'fs';
import path from 'path';
import util from 'util'
import ejs from 'ejs';

const MODE_0666 = parseInt('0666', 8);
const MODE_0755 = parseInt('0755', 8)

export default {
    writeFile(file, content, mode) {
        fs.writeFileSync(file, content, {
            mode: mode || MODE_0666
        })
    },
    createDirectory(base, dirName) {
        let fullPath = path.join(base, dirName);
        if (!fs.existsSync(fullPath)){
            fs.mkdirSync(fullPath);
        }
    },
    readTemplate(moduleName, name) {
        let contents = fs
            .readFileSync(path.join(__dirname, '..', 'packages', moduleName, `${name}.ejs`), 'utf-8');
        
        let vars = Object.create(null);

        function render () {
            return ejs.render(contents, vars, {
                escape: util.inspect
            })
        }

        return {
            vars,
            render
        }
    },
    isEmptyDirectory(dir, fn) {
        return !fs.readdirSync(dir)
    },
    directoryExists(filePath) {
        try {
            return fs.statSync(filePath).isDirectory();
        } catch (err) {
            return false;
        }
    },
    
}