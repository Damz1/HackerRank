// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:
// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = 15.
// The right to left diagonal = 17. Their absolute difference is 2.

export const diagonalDifference = (arr: number[][]): number => {
  let firstDiagonal = 0;
  let secondDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    firstDiagonal += arr[i][i];
    secondDiagonal += arr[i][arr.length - 1 - i];
  }

  return Math.abs(firstDiagonal - secondDiagonal);
};
