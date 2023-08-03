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

describe("timeConversion AM", () => {
  test("should return correct for 7AM", () => {
    const input = "07:13:32AM";
    const output = "07:13:32";
    expect(timeConversion(input)).toBe(output);
  });
  test("should return correct for 12AM", () => {
    const input = "12:03:02AM";
    const output = "00:03:02";
    expect(timeConversion(input)).toBe(output);
  });
});

describe("timeConversion invalid input", () => {
  test("should throw an error for invalid format", () => {
    const input = "13:70:80PM";
    expect(() => timeConversion(input)).toThrowError("Invalid time format");
  });
  test("should throw an error for invalid time", () => {
    const input = "13:30:45PM";
    expect(() => timeConversion(input)).toThrowError("Invalid time");
  });
});
