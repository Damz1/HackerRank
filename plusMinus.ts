/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. return the decimal value of each fraction on a new line with 6 places after the decimal.
*/

export const plusMinus = (
  arr: number[]
): { positiveRatio: string; negativeRatio: string; zeroRatio: string } => {
  let plusCount = 0;
  let minusCount = 0;
  let zeroCount = 0;

  for (let num of arr) {
    if (num > 0) {
      plusCount++;
    } else if (num < 0) {
      minusCount++;
    } else {
      zeroCount++;
    }
  }

  let total = arr.length;
  return {
    positiveRatio: total ? (plusCount / total).toFixed(6) : "0.000000",
    negativeRatio: total ? (minusCount / total).toFixed(6) : "0.000000",
    zeroRatio: total ? (zeroCount / total).toFixed(6) : "0.000000",
  };
};
