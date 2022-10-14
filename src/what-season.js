const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  };
  // const date = new Date(_date);


  if (isNaN(Date.parse(date))) {
    throw new Error("Invalid date!");
  }

  if (!date instanceof Date) {
    throw new Error("Invalid date!");
  }

  const seasonsWithMonth = {
    winter: [0, 1, 11],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10],
  };
  try {
    const currentMonth = date.getMonth();
    date.getUTCDay();

    return Object.entries(seasonsWithMonth).reduce((acc, [season, months]) => {
      return months.includes(currentMonth) ? season : acc;
    }, '');
  } catch {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason
};