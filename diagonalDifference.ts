export const diagonalDifference = (arr: number[][]): number => {
  let firstDiagonal = 0;
  let secondDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    firstDiagonal += arr[i][i];
    secondDiagonal += arr[i][arr.length - 1 - i];
  }

  return Math.abs(firstDiagonal - secondDiagonal);
};
