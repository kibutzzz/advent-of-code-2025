import InputToRangesMapper from './InputToRangesMapper.js';

export default class Solution {
    constructor(inputMapper) {
        this.inputMapper = inputMapper;
    }

    solve1(input) {
        const ranges = this.inputMapper.map(input);

        return ranges
            .map((range) => range.filter(byIdValidity()).reduce(summing, 0))
            .reduce(summing, 0);
    }
}

function summing(a, b) {
    return a + b;
}
