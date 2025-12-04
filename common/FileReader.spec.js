import FileReader from './FileReader.js';

describe('FileReader', () => {
    it('reads a file and returns its content', async () => {
        const fileContent = 'example\n123';
        const file = './common/example.txt';
        const content = FileReader.readFile(file);
        expect(content).toBe(fileContent);
    });
});
