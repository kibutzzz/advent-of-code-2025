import FileReader from '../common/FileReader.js';
import Solution from './Solution.js';
import InputToRangesMapper from './InputToRangesMapper.js';

describe('Second Day', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution(new InputToRangesMapper());
    });

    it('solves the sample for puzzle 1', async () => {
        const input = FileReader.readFile('./day-02/example.txt');

        const result = solution.solve1(input);

        expect(result).toBe(1227775554);
    });
});
