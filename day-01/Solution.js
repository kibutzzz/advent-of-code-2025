const INITIAL_DIAL_VALUE = 50;
const MAX_DIAL_VALUE = 100;
const MIN_DIAL_VALUE = 0;


class Solution {
    
    solve1(text) {
        let dial = INITIAL_DIAL_VALUE;
        totalTurns = 0;

        const instructions = text.split('\n')
            .map(toInstruction());

        for (const instruction of instructions) {
            const sign = instruction.direction === 'R' ? 1 : -1;
            dial = calculateNewDialValue(dial, instruction.amount * sign);
            if(dial === 0) {
                totalTurns++;
            }
        }

        return totalTurns;
    }

    solve2(text) {
        let dial = INITIAL_DIAL_VALUE;

        const instructions = text.split('\n')
            .map(toInstruction());

        const rotationsObject = {   
            rotations: 0
        };

        for (const instruction of instructions) {
            const sign = instruction.direction === 'R' ? 1 : -1;
            dial = calculateDialValueAfterFullRotation(dial, instruction.amount * sign, rotationsObject);
        }

        return rotationsObject.rotations;
    }

}

function calculateDialValueAfterFullRotation(currentValue, change, rotationsObject) {
    const possibleNewValue = currentValue + change;
    
    if(possibleNewValue >= MAX_DIAL_VALUE) {
        rotationsObject.rotations++;
        return calculateDialValueAfterFullRotation(MIN_DIAL_VALUE, possibleNewValue - MAX_DIAL_VALUE, rotationsObject);
    }

    if(possibleNewValue < MIN_DIAL_VALUE) {
        rotationsObject.rotations++;
        return calculateDialValueAfterFullRotation(MAX_DIAL_VALUE, possibleNewValue - MIN_DIAL_VALUE, rotationsObject);
    }
    
    return possibleNewValue;

}

function calculateNewDialValue(currentValue, change) {
    const possibleNewValue = currentValue + change;
    
    if(possibleNewValue >= MAX_DIAL_VALUE) {
        return calculateNewDialValue(MIN_DIAL_VALUE, possibleNewValue - MAX_DIAL_VALUE);
    }

    if(possibleNewValue < MIN_DIAL_VALUE) {
        return calculateNewDialValue(MAX_DIAL_VALUE, possibleNewValue - MIN_DIAL_VALUE);
    }

    return possibleNewValue;
}

function toInstruction() {
    return (line) => {
        const direction = line.charAt(0);
        const amount = parseInt(line.slice(1));

        return { direction, amount };
    }
}

module.exports = { default: Solution };