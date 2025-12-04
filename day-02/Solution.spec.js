import FileReader from "../common/FileReader.js";
import Solution from "./Solution.js";

describe("Second Day", () => {
    it("solves the sample for puzzle 1", async () => {
        const input = FileReader.readFile("./day-02/example.txt");
        
        const solution = new Solution();
        const result = solution.solve1(input);
        
        expect(result).toBe(1227775554); 
    });

});