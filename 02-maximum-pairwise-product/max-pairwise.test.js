const maxPairwiseProduct = require("./max-pairwise");

describe("Maximum Pairwise Product", () => {
  test("sample 1", () => {
    expect(maxPairwiseProduct([1, 2, 3])).toBe(6);
  });
  test("sample 2", () => {
    expect(maxPairwiseProduct([7, 5, 14, 2, 8, 8, 10, 1, 2, 3])).toBe(140);
  });
});
