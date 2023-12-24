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
  if (date) {
    if (date !== 'Invalid Date' && isDateValid(date)) {
      const month = date.getMonth();
      switch (month) {
        case 0:
        case 1:
        case 11:
          return 'winter';
        case 2:
        case 3:
        case 4 :
          return 'spring';
        case 5:
        case 6:
        case 7 :
          return 'summer';
        case 8:
        case 9:
        case 10 :
          return 'autumn';
        default: return null
      }
    } else {
      throw new Error('Invalid date!')
    }
  } else {
    return 'Unable to determine the time of year!'
  }
}

function isDateValid(date) {
  return typeof date !== 'number' && !isNaN(new Date(date));
}

module.exports = {
  getSeason
};
