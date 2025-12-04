

export default class InputToRangesMapper {

    map(input) {
    return input.split(',')
        .map(range => range.trim())
        .map(range => {
            const [first, second] = range.split('-').map(Number);

            return Array.from({ length: second - first + 1 }, (_, i) => first + i);
        });
    }
}
