// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

const timeConversion = (time) => {
  let ampm = time.slice(-2).toLowerCase();
  let hour = time.slice(0, 2);
  let minutes = time.slice(3, 5);
  let seconds = time.slice(6, 8);

  if (ampm === "pm" && hour < 12) {
    hour = Number(hour);
    hour += 12;
    return `${hour}:${minutes}:${seconds}`;
  } else if (ampm === "pm" && hour === "12") {
    return `${hour}:${minutes}:${seconds}`;
  } else if (ampm === "am" && hour < 12) {
    return `${hour}:${minutes}:${seconds}`;
  } else if (ampm === "am" && hour === "12") {
    hour = Number(hour);
    hour -= 12;
    return `0${hour}:${minutes}:${seconds}`;
  }
};

module.exports = timeConversion;
