import { firebaseDB } from "../config/firebaseConfig";

// Look up object for team work type
const typeLookup = {
  "110": "A",
  "101": "D",
  "011": "E",
  "010": "K",
  "001": "L",
  "100": "M"
};

// Look up object for similar work types
const similarTypeLookup = {
  "110": ["K", "M"],
  "101": ["L", "M"],
  "011": ["K", "L"],
  "010": ["A", "E"],
  "001": ["D", "E"],
  "100": ["A", "D"]
};

//Query helper function
export const generateQuery = (collection, competitionId, workstyle, type) =>
  firebaseDB
    .collection(collection)
    .where("competitionId", "==", competitionId)
    .where("workstyle", "==", workstyle)
    .where("type", "==", type);

// Helper function - default team name generator
// @params: team type, number of team existed with this types
export const teamName = (type, length) => {
  switch (type) {
    case "A":
      return `Alpha ${length}`;
    case "D":
      return `Delta ${length}`;
    case "E":
      return `Eta ${length}`;
    case "K":
      return `Kappa ${length}`;
    case "L":
      return `Lambda ${length}`;
    case "M":
      return `Mu ${length}`;
  }
};

//Helper function to filter other matches teams
export const filterOtherMatches = (score, team) => {
  let teamFun = 0;
  let teamGrow = 0;
  let teamWin = 0;
  const userFun = score[0] * team.length;
  const userGrow = score[1] * team.length;
  const userWin = score[2] * team.length;
  team.forEach(user => {
    teamFun += user.fun;
    teamGrow += user.grow;
    teamWin += user.win;
  });
  return (
    Math.abs(teamFun - userFun) +
      Math.abs(teamGrow - userGrow) +
      Math.abs(teamWin - userWin) <=
    3 * team.length
  );
};

// Helper function to determine the type of team based on user score of fun, grow, win
// @params: score of to have fun, to grow, to win
export const teamType = (fun, grow, win) =>
  typeLookup[`${fun > 3 ? 1 : 0}${grow > 3 ? 1 : 0}${win > 3 ? 1 : 0}`];

// Helper function to determine similar types of team based on user score of fun, grow, win
// @params: score of to have fun, to grow, to win
export const similarTeamType = (fun, grow, win) =>
  similarTypeLookup[`${fun > 3 ? 1 : 0}${grow > 3 ? 1 : 0}${win > 3 ? 1 : 0}`];

// Fetch best matches of the team - same competition, same team type, same workstyle, not full
// Match user with same type, almost full team
//@param: array of teams that are matches
export const findBestMatch = teams => {

  let otherMatches = teams;
  let teamUserNum = 0;
  let teamUserGap = 100;
  let match;
  let resultId;
  Object.entries(otherMatches).forEach(([key, value]) => {

    teamUserNum = Object.keys(value.users).length;
    if (value.teamSize - teamUserNum < teamUserGap) {
      resultId = key;
      match = value;
      match.id = key;
    }
  });
  delete otherMatches[resultId];
  otherMatches = Object.entries(otherMatches).map(([key, value]) => {
    const newTeam = value;
    newTeam.id = key;
    return newTeam;
  });
  return { match, otherMatches };
};
