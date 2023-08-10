export const countingSort = (arr: number[]): number[] => {
  // find the maximum value
  let maxVal = Math.max(...arr);

  // fill the array with 0's
  let count: number[] = Array(maxVal + 1).fill(0);

  // Populate the counting array
  for (let num of arr) {
    count[num]++;
  }
  // create a sorted array using the counting array
  let sorted: number[] = [];
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      sorted.push(i);
      count[i]--;
    }
  }

  return sorted;
};
