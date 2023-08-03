// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

export const timeConversion = (time: string): string => {
  const timeRegex = /^(0?[1-9]|1[012]):[0-5][0-9]:[0-5][0-9](AM|PM)$/;
  if (!timeRegex.test(time)) {
    throw new Error("Invalid time format");
  }

  let ampm = time.slice(-2).toLowerCase();
  let hour = time.slice(0, 2);
  let minutes = time.slice(3, 5);
  let seconds = time.slice(6, 8);

  if (ampm === "pm" && hour !== "12") {
    hour = (Number(hour) + 12).toString();
    return `${hour}:${minutes}:${seconds}`;
  } else if (ampm === "am" && hour === "12") {
    hour = "00";
    return `${hour}:${minutes}:${seconds}`;
  } else {
    return `${hour}:${minutes}:${seconds}`;
  }
};
