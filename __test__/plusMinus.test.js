const plusMinus = require("../plusMinus");

describe("plusMinus", () => {
  test("should return correct ratios when given 1 number", () => {
    const result = plusMinus([6]);
    expect(result.positiveRatio).toBe(1);
    expect(result.negativeRatio).toBe(0);
    expect(result.zeroRatio).toBe(0);
  });
  test("should return correct ratios when given an array of multiple numbers", () => {
    const result = plusMinus([6, 0, 0, 5, 4, -2, -4]);
    expect(result).toEqual({
      positiveRatio: 3 / 7,
      negativeRatio: 2 / 7,
      zeroRatio: 2 / 7,
    });
  });
  test("should return correct ratios when given an array of only positive numbers", () => {
    const result = plusMinus([3, 5, 1, 8, 4]);
    expect(result.positiveRatio).toBe(1);
    expect(result.negativeRatio).toBe(0);
    expect(result.zeroRatio).toBe(0);
  });
  test("should return correct ratios when given an array of only negative numbers", () => {
    const result = plusMinus([-2, -4, -1, -7]);
    expect(result.positiveRatio).toBe(0);
    expect(result.negativeRatio).toBe(1);
    expect(result.zeroRatio).toBe(0);
  });
  test("should return correct ratios when given an array of only zero elements", () => {
    const result = plusMinus([0, 0, 0, 0]);
    expect(result.positiveRatio).toBe(0);
    expect(result.negativeRatio).toBe(0);
    expect(result.zeroRatio).toBe(1);
  });
  test("should return correct ratios when given an empty array", () => {
    const result = plusMinus([]);
    expect(result.positiveRatio).toBe(0);
    expect(result.negativeRatio).toBe(0);
    expect(result.zeroRatio).toBe(0);
  });
});