const fs = require('fs');

class FileReader {
    static readFile(file) {
        return fs.readFileSync(file, 'utf-8');
    }
}   

module.exports = { default: FileReader };