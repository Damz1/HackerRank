import { diagonalDifference } from "../diagonalDifference";

describe("diagonal difference", () => {
  test("should return 2 for 1-9", () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const output = 2;
    expect(diagonalDifference(input)).toBe(output);
  });
});
