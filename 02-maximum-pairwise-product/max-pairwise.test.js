const maxPairwiseProductNaive = require("./max-pairwise-naive");
const maxPairwiseProductFast = require("./max-pairwise-fast");

describe("Naive Maximum Pairwise Product", () => {
  test("sample 1", () => {
    expect(maxPairwiseProductNaive([1, 2, 3])).toBe(6);
  });
  test("sample 2", () => {
    expect(maxPairwiseProductNaive([7, 5, 14, 2, 8, 8, 10, 1, 2, 3])).toBe(140);
  });
});

describe("Fast Maximum Pairwise Product", () => {
  test("sample 1", () => {
    expect(maxPairwiseProductFast([1, 2, 3])).toBe(6);
  });
  test("sample 2", () => {
    expect(maxPairwiseProductFast([7, 5, 14, 2, 8, 8, 10, 1, 2, 3])).toBe(140);
  });
  test("large numbers", () => {
    expect(maxPairwiseProductFast([100000, 90000])).toBe(9000000000);
  });
});
