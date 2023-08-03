import { minMaxSum } from "../minMaxSum";

describe("minMaxSum", () => {
  test("should return correct for [1,2,3,4,5]", () => {
    const input = [1, 2, 3, 4, 5];
    const output = {
      min: 10,
      max: 14,
    };
    expect(minMaxSum(input)).toEqual(output);
  });
  test("should return correct result for [10, 20, 30, 40, 50]", () => {
    const input = [10, 20, 30, 40, 50];
    const output = {
      min: 100,
      max: 140,
    };
    expect(minMaxSum(input)).toEqual(output);
  });
  test("should return correct result for [3, 7, 11, 15, 20]", () => {
    const input = [3, 7, 11, 15, 20];
    const output = {
      min: 36,
      max: 53,
    };
    expect(minMaxSum(input)).toEqual(output);
  });
  test("should return correct result for [100, 100, 100, 100, 100]", () => {
    const input = [100, 100, 100, 100, 100];
    const output = {
      min: 400,
      max: 400,
    };
    expect(minMaxSum(input)).toEqual(output);
  });
  test("should return correct result for [1, 2, 3, 4, 10]", () => {
    const input = [1, 2, 3, 4, 10];
    const output = {
      min: 10,
      max: 19,
    };
    expect(minMaxSum(input)).toEqual(output);
  });
});
