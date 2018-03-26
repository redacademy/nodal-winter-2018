// Helper function to calculate relative days from now
// Output: #days left till the competition, or "Registration closed" if registration date has passed
// @param: target date object
export const timestampConvertion = dateObject => {
  const now = new Date().valueOf();
  const date = dateObject.valueOf();
  const relativeDays = Math.floor((date - now) / (1000 * 3600 * 24));
  if (relativeDays > 0) {
    return `${relativeDays} Days Left`;
  } else if (relativeDays === 0) {
    return `Today`;
  }
  return `Registration Closed`;
};

// Helper function to check if a competition in DB has already passed (we cannot join competition in the past!)
// @param: CompetitionDate (object) in DB
export const competitionValidation = competitionDate => {
  const now = new Date().valueOf();
  const date = competitionDate.valueOf();
  if (date - now >= 0) {
    return true;
  }
  return false;
};

// Helper function to format start date and end date into design format
//@params: competition start date, competition end date
export const formatCompetitionTime = (start, end) => {
  if (start.getDate() !== end.getDate()) {
    return `${getDayOfWeek(start)}, ${getMonthOfYear(
      start
    )} ${start.getDate()} ${formatHours(
      start
    )}, ${start.getFullYear()} -\n${getDayOfWeek(end)}, ${getMonthOfYear(
      end
    )} ${end.getDate()} ${formatHours(end)}, ${end.getFullYear()}`;
  } else {
    return `${getDayOfWeek(start)}, ${getMonthOfYear(
      start
    )} ${start.getDate()}, ${start.getFullYear()}\n ${formatHours(
      start
    )} -${formatHours(end)}`;
  }
};

// Helper function to get specific day of the week of certain date
//@param: target date
const getDayOfWeek = date => {
  switch (date.getDay()) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
};

// Helper function to get month name of the year
//@param: target date
const getMonthOfYear = date => {
  switch (date.getMonth()) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
  }
};

// Helper function to format minutes with 2 digits
//@param: target date
const formatMinutes = date => {
  if (date.getMinutes().toString().length === 1) {
    return `0${date.getMinutes()}`;
  }
  return `${date.getMinutes()}`;
};

// Helper function to format hours into `XX:XX am/pm`
//@param: target date
const formatHours = date => {
  if (date.getHours() === 12) {
    return `${date.getHours()}:${formatMinutes(date)} pm`;
  } else if (date.getHours() < 12) {
    return `${date.getHours()}:${formatMinutes(date)} am`;
  }
  return `${date.getHours() - 12}:${formatMinutes(date)} pm`;
};
