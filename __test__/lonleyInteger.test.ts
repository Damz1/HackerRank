import { lonleyInteger } from "../lonleyInteger";

describe("lonley integer", () => {
  test("should return 4 in [1,1,3,3,4,5,5]", () => {
    const input = [1, 1, 3, 3, 4, 5, 5];
    const output = 4;

    expect(lonleyInteger(input)).toBe(output);
  });
});
