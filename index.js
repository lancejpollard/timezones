
/**
 * Expose `timezone`.
 */

exports = module.exports = timezone;

/**
 * List of time zones by common abbreviation.
 *
 * @see http://www.timeanddate.com/library/abbreviations/timezones/na/
 *
 * For a complete (but very large) list of every time zone,
 * @see http://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */

exports.collection = {
  ADT: -3,    // Atlantic Daylight Time UTC - 3 hours
  AKDT: -8,   // Alaska Daylight Time UTC - 8 hours
  AKST: -9,   // Alaska Standard Time UTC - 9 hours
  AST: -4,    // Atlantic Standard Time UTC - 4 hours
  CDT: -5,    // Central Daylight Time UTC - 5 hours
  CST: -6,    // Central Standard Time UTC - 6 hours
  EDT: -4,    // Eastern Daylight Time UTC - 4 hours
  EGST: 0,    // Eastern Greenland Summer Time UTC
  EGT: -1,    // East Greenland Time UTC - 1 hour
  EST: -5,    // Eastern Standard Time HNE, ET UTC - 5 hours
  HADT: -9,   // Hawaii-Aleutian Daylight Time UTC - 9 hours
  HAST: -10,  // Hawaii-Aleutian Standard Time UTC - 10 hours
  MDT: -6,    // Mountain Daylight Time UTC - 6 hours
  MST: -7,    // Mountain Standard Time UTC - 7 hours
  NDT: -2.5,  // Newfoundland Daylight Time UTC - 2:30 hours
  NST: -3.5,  // Newfoundland Standard Time UTC - 3:30 hours
  PDT: -7,    // Pacific Daylight Time HAP UTC - 7 hours
  PMDT: -2,   // Pierre & Miquelon Daylight Time UTC - 2 hours
  PMST: -3,   // Pierre & Miquelon Standard Time UTC - 3 hours
  PST: -8,    // Pacific Standard Time HNP, PT UTC - 8 hours
  WGST: -2,   // Western Greenland Summer Time UTC - 2 hours
  WGT: -3     // West Greenland Time UTC - 3 hours
};

/**
 * Return a date in `name` timezone.
 *
 * @see http://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 * @see http://en.wikipedia.org/wiki/Time_zone
 * @see http://www.timeanddate.com/library/abbreviations/timezones/na/pst.html
 *
 * @param {String|Number} name Name or offset of timezone.
 * @param {Date} [time] optional time, otherwise it defaults to now.
 *
 * @return Date
 */

function timezone(name, time) {
  if (!time) time = new Date;

  var offset = 'string' == typeof name
    ? exports.collection[name.toUpperCase()]
    : name;
  var utc = time.getTime() + (time.getTimezoneOffset() * 60000);

  return new Date(utc + (3600000 * offset));
}