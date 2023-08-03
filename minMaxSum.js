// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then return an object with the respective minimum and maximum values.

const minMaxSum = (arr) => {
  let smalletstNumber = Math.min(...arr);
  let largestNumber = Math.max(...arr);
  const sumAll = arr.reduce((acc, curr) => acc + curr, 0);

  const result = {
    min: sumAll - largestNumber,
    max: sumAll - smalletstNumber,
  };

  return result;
};

module.exports = minMaxSum;
