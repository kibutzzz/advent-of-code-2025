import fs from 'fs';

class FileReader {
    static readFile(file) {
        return fs.readFileSync(file, 'utf-8');
    }
}   

export default FileReader;
