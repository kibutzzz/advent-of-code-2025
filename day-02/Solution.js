import InputToRangesMapper from './InputToRangesMapper.js';

export default class Solution {
    constructor(inputMapper) {
        this.inputMapper = inputMapper;
    }

    solve1(input) {
        const ranges = this.inputMapper
            .map(input)
            .map((range) => range.map(String));

        return ranges
            .map((range) => {
                const filtered = range.filter(byIdValidity()).map(Number);
                console.log('Filtered IDs:', filtered);
                const total = filtered.reduce(summing, 0);
                return total;
            })
            .reduce(summing, 0);
    }
}

function byIdValidity() {
    return (id) => {
        const parts = extractParts(id);

        const grouped = groupByOcurrences(parts);

        for (const value of grouped.values()) {
            if (value === 2) {
                return true;
            }
        }

        return false;
    };
}

function groupByOcurrences(parts) {
    const grouped = new Map();

    parts.forEach((part) => {
        const count = grouped.get(part) || 0;
        grouped.set(part, count + 1);
    });

    return grouped;
}

function groupBySequencedOcurrences(parts, number) {
    // wut ??
    return parts.some((part) => {
        for (let i = 0; i <= number.length - part.length; i++) {}
    });
}

function extractParts(id) {
    const chars = id.split('');

    const parts = [];
    for (let i = 1; i < chars.length; i++) {
        parts.push(calculateCombinations(chars, i));
    }

    return parts.flat();
}

function calculateCombinations(parts, size) {
    if (size === 0) {
        throw new Error('size should be greater than 0');
    }

    if (size > parts.length) {
        throw new Error('size should be less than or equal to parts length');
    }

    let combinations = [];

    for (let i = 0; i <= parts.length - size; i++) {
        combinations.push(parts.slice(i, i + size).join(''));
    }

    return combinations;
}

function summing(a, b) {
    return a + b;
}
