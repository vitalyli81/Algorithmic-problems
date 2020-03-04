/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
  const DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const DAY_1970_01_01 = 4;
  let days = day - 1;
  month--;

  while (month - 1 >= 0) {
    days += daysInMonth(month - 1, year);
    month--;
  }

  while (year - 1 >= 1970) {
    days += daysInYear(year - 1);
    year--;
  }

  return DAYS[(days + DAY_1970_01_01) % DAYS.length];
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
