import { diagonalDifference } from "../diagonalDifference";

describe("diagonal difference", () => {
  test("should return 2 for [[1,2,3][4,5,6][9,8,9]]", () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [9, 8, 9],
    ];
    const output = 2;
    expect(diagonalDifference(input)).toBe(output);
  });
  test("should return 2 for the matrix [[1,2,3],[4,5,6],[7,8,9]]", () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const output = 0;
    expect(diagonalDifference(input)).toBe(output);
  });
  test("should return 0 for the matrix [[2,3],[4,2]]", () => {
    const input = [
      [2, 3],
      [4, 2],
    ];
    const output = 3;
    expect(diagonalDifference(input)).toBe(output);
  });
  test("should return 4 for the matrix [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]", () => {
    const input = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const output = 0;
    expect(diagonalDifference(input)).toBe(output);
  });
  test("should return 4 for the matrix [[-1,2],[-3,4]]", () => {
    const input = [
      [-1, 2],
      [-3, 4],
    ];
    const output = 4;
    expect(diagonalDifference(input)).toBe(output);
  });
  test("should return 0 for the matrix [[5]]", () => {
    const input = [[5]];
    const output = 0;
    expect(diagonalDifference(input)).toBe(output);
  });
});
