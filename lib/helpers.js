import path from 'path';

export default {
    getAppName(name) {
        console.log(name);
        return path.basename(name)
            .replace(/[^A-Za-z0-9.-]+/g, '-')
            .replace(/^[-_.]+|-+$/g, '')
            .toLowerCase()
    }
}