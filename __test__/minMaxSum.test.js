const minMaxSum = require("../minMaxSum");

describe("minMaxSum", () => {
  test("should return correct for 1,2,3,4,5", () => {
    const input = [1, 2, 3, 4, 5];
    const output = {
      min: 10,
      max: 14,
    };
    expect(minMaxSum(input)).toEqual(output);
  });
});
