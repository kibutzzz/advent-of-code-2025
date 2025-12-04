import fs from 'fs';

export default class FileReader {
    static readFile(file) {
        return fs.readFileSync(file, 'utf-8');
    }
}
