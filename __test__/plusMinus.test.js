const plusMinus = require("../plusMinus");

describe("plusMinus", () => {
  test("should return correct ratios when given 1 positive number", () => {
    const result = plusMinus([6]);
    expect(result.positiveRatio).toBe(1);
    expect(result.negativeRatio).toBe(0);
    expect(result.zeroRatio).toBe(0);
  });
});
