// Helper function to calculate relative days from now
// Output: #days left till the competition, or "Registration closed" if registration date has passed
// @param: target date object
export const timestampConvertion = dateObject => {
  const now = new Date().valueOf();
  const date = dateObject.valueOf();
  const relativeDays = Math.floor((date - now) / (1000 * 3600 * 24));
  if (relativeDays >= 0){
    return `${relativeDays} Days Left`
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
