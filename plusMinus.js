/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
*/

function plusMinus(arr) {
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
    positiveRatio: total ? plusCount / total : 0,
    negativeRatio: total ? minusCount / total : 0,
    zeroRatio: total ? zeroCount / total : 0,
  };
}

module.exports = plusMinus;
