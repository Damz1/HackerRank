import { lonleyInteger } from "../lonleyInteger";

describe("lonley integer", () => {
  test("should return 4 in [1,1,3,3,4,5,5]", () => {
    const input = [1, 1, 3, 3, 4, 5, 5];
    const output = 4;
    expect(lonleyInteger(input)).toBe(output);
  });

  test("should return 3 in [1,1,2,2,3]", () => {
    const input = [1, 1, 2, 2, 3];
    const output = 3;
    expect(lonleyInteger(input)).toBe(output);
  });

  test("should return 0 for [1,1,2,2,3,3]", () => {
    const input = [1, 1, 2, 2, 3, 3];
    expect(lonleyInteger(input)).toBe(0);
  });

  test("should return 7 in [7]", () => {
    const input = [7];
    const output = 7;
    expect(lonleyInteger(input)).toBe(output);
  });

  test("should return 0 in [0,1,1,2,2]", () => {
    const input = [0, 1, 1, 2, 2];
    const output = 0;
    expect(lonleyInteger(input)).toBe(output);
  });
  test("should return 0 for an empty array", () => {
    const input: number[] = [];
    expect(lonleyInteger(input)).toBe(0);
  });
});
