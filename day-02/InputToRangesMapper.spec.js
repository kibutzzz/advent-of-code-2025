import InputToRangesMapper from './InputToRangesMapper.js';

describe('InputToRangesMapper', () => {
    const mapper = new InputToRangesMapper();

    it('maps empty input to empty array', () => {
        const result = mapper.map('');
        expect(result).toEqual([[]]);
    });

    it('maps single range correctly', () => {
        const result = mapper.map('3-9');
        expect(result).toEqual([[3, 4, 5, 6, 7, 8, 9]]);
    });

    it('maps multiple ranges correctly', () => {
        const result = mapper.map('1-3,5-7');
        expect(result).toEqual([
            [1, 2, 3],
            [5, 6, 7],
        ]);
    });

    it('handles spaces around ranges', () => {
        const result = mapper.map(' 10-12 , 15-17 ');
        expect(result).toEqual([
            [10, 11, 12],
            [15, 16, 17],
        ]);
    });
});
