const timeConversion = require("../timeConversion");

describe("timeConversion", () => {
  test("should return PM correctly", () => {
    const input = "07:05:45PM";
    const output = "19:05:45";

    expect(timeConversion(input)).toBe(output);
  });
});
