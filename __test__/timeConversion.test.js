const timeConversion = require("../timeConversion");

describe("timeConversion PM", () => {
  test("should return 7 PM correctly", () => {
    const input = "07:05:45PM";
    const output = "19:05:45";

    expect(timeConversion(input)).toBe(output);
  });
  test("should return 12 PM correctly", () => {
    const input = "12:00:45PM";
    const output = "12:00:45";

    expect(timeConversion(input)).toBe(output);
  });
  test("should return 1 PM correctly", () => {
    const input = "01:27:25PM";
    const output = "13:27:25";

    expect(timeConversion(input)).toBe(output);
  });
});
