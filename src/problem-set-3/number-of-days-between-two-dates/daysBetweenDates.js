/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
  return Math.abs(
    countDaysFrom1970(...date1.split('-').map(Number)) -
      countDaysFrom1970(...date2.split('-').map(Number))
  );
};

const countDaysFrom1970 = (year, month, day) => {
  month--;
  let days = day - 1;
  while (month - 1 >= 0) {
    days += daysInMonth(month - 1, year);
    month--;
  }
  while (year - 1 >= 1970) {
    days += daysInYear(year - 1);
    year--;
  }
  return days;
};

const daysInMonth = (month, year) => {
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

const daysInYear = year => 365 + (isLeap(year) ? 1 : 0);

const isLeap = year => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
