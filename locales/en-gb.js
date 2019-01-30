import { createLocale } from '@fullcalendar/core';

export default createLocale("en-gb", {
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 4  // The week that contains Jan 4th is the first week of the year.
  }
});
