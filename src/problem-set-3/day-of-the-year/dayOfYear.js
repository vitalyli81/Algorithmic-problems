/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
  let [year, month, day] = date.split('-').map(Number);
  let days = day;
  month--;
  while (month - 1 >= 0) {
    days += daysInYear(month - 1, year);
    month--;
  }
  return days;
};

const daysInYear = (month, year) => {
  const days = [
    31, // January
    28 + (isLeap(year) ? 1 : 0), // Feb,
    31, // March
    30, // April
    31, // May
    30, // June
    31, // July
    31, // August
    30, // September
    31, // October
    30, // November
    31 // December
  ];
  return days[month];
};

const isLeap = year => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
