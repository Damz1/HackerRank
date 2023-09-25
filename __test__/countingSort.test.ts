import { countingSort } from "../countingSort";

describe("countingSort", () => {
  test("should sort a list of numbers correctly", () => {
    expect(countingSort([1, 1, 3, 2, 1])).toEqual([1, 1, 1, 2, 3]);
    expect(countingSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(countingSort([3, 3, 3])).toEqual([3, 3, 3]);
  });
  test("should sort empty or arrays of 1 corretly", () => {
    expect(countingSort([1])).toEqual([1]);
    expect(countingSort([])).toEqual([]);
  });
  test("should handle arrays with a mix of large and small numbers", () => {
    expect(countingSort([100, 1, 5, 0, 10])).toEqual([0, 1, 5, 10, 100]);
  });
});
