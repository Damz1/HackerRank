// Given an array of integers, where all elements but one occur twice, find the unique element.

export const lonleyInteger = (arr: number[]): number => {
  const countMap: { [key: number]: number } = {};
  for (let num of arr) {
    countMap[num] = (countMap[num] || 0) + 1;
  }
  for (const num of arr) {
    if (countMap[num] === 1) {
      return num;
    }
  }
  return 0;
};
