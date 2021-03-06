import fs from 'fs';
import path from 'path';

export default {
    getCurrentDirectoryBase() {
        return path.basename(process.cwd());
    },
    directoryExists(filePath) {
        try {
            return fs.statSync(filePath).isDirectory();
        } catch (err) {
            return false;
        }
    },
    getTemplateDir(module) {
        return path.join(__dirname, '..', `packages/${module}`)
    }
}