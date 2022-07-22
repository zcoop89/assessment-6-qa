const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  
    test("shuffleArray should return an array", () => {
    expect(Array.isArray(shuffleArray([1, 2, 3]))).toBe(true);
  });

  test("shuffleArray should return an array of same length", () => {
    expect(shuffleArray([1, 2, 3]).length).toBe(3);
  });

  test("shuffleArray should return a shuffled array", () => {
    let testArray = [1,2,3]
    expect(shuffleArray(testArray)).not.toEqual(testArray);
  });
});
