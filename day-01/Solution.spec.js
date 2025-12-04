
import Solution from "./Solution.js";
import FileReader from "../common/FileReader.js";

describe("First Day", () => {
    it("solves the sample", async () => {
        const input = FileReader.readFile("./day-01/example.txt");
        
        const solution = new Solution();
        const result = solution.solve1(input);
        
        expect(result).toBe(3); 
    });

    it("solves the first puzzle", async () => {
        const input = FileReader.readFile("./day-01/input1.txt");
        
        const solution = new Solution();
        const result = solution.solve1(input);
        
        expect(result).toBe(1154); 
    });

    it("solves the second puzzle sample", async () => {
        const input = FileReader.readFile("./day-01/example.txt");
        
        const solution = new Solution();
        const result = solution.solve2(input);
        
        expect(result).toBe(6); 
    });

    it("solves the second puzzle", async () => {
        const input = FileReader.readFile("./day-01/input1.txt");
        
        const solution = new Solution();
        const result = solution.solve2(input);
        
        expect(result).toBe(6819); 
    });

});
