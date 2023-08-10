import { countingSort } from "../countingSort";

describe("countingSort", () => {
  test("should sort a list of numbers correctly", () => {
    expect(countingSort([1, 1, 3, 2, 1])).toEqual([1, 1, 1, 2, 3]);
  });
});
