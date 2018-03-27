import { AsyncStorage } from "react-native";

import { firebaseDB } from "../../config/firebaseConfig";
import {
  teamType,
  teamName,
  similarTeamType,
  findBestMatch,
  generateQuery,
  filterOtherMatches
} from "../../helpers/matchingHelpers";

// Action types
const GET_TEAM_BEST_MATCH = "GET_TEAM_BEST_MATCH";
const GET_TEAM_OTHER_MATCHES = "GET_TEAM_OTHER_MATCHES";
const GET_TEAM_RESET = "GET_TEAM_RESET";
const GET_TEAM_LOADING = "GET_TEAM_LOADING";
const GET_TEAM_ERROR = "GET_TEAM_ERROR";
const GET_TEAM_TEMP_DATA = "GET_TEAM_TEMP_DATA";
const RESET_TEAM = "RESET_TEAM";
// Action creators
const getTeamBestMatch = match => ({
  type: GET_TEAM_BEST_MATCH,
  payload: match
});
const getTeamOtherMatches = otherMatches => ({
  type: GET_TEAM_OTHER_MATCHES,
  payload: otherMatches
});
const getTeamError = error => ({
  type: GET_TEAM_ERROR,
  payload: error.message
});
const getTeamLoading = () => ({
  type: GET_TEAM_LOADING
});
const getTeamTempData = data => ({
  type: GET_TEAM_TEMP_DATA,
  payload: data
});

export const resetTeam = () => ({
  type: RESET_TEAM
});

export const getTeamReset = () => ({
  type: GET_TEAM_RESET
});

// Async action creators
// Async action to fetch best match to user
export const fetchBestMatch = (
  workstyle,
  score,
  competitionId,
  teamSize
) => async dispatch => {
  dispatch(getTeamReset());
  dispatch(getTeamLoading());

  const type = teamType(...score);
  const teams = {};

  const teamsQuery = generateQuery("teams", competitionId, workstyle, type);

  try {
    await teamsQuery.get().then(snapshot => {
      if (!snapshot.empty) {
        snapshot.forEach(team => {
          teams[team.id] = team.data();
        });
      }
    });

    if (Object.keys(teams).length) {
      const { match, otherMatches } = findBestMatch(teams);
      dispatch(getTeamBestMatch(match));
      dispatch(getTeamOtherMatches(otherMatches));
    } else {
      // if there's no match with the user type, fetch similar type teams
      const rematch = await dispatch(
        fetchOtherMatches(workstyle, score, competitionId, true)
      );
      const result = findBestMatch(rematch);

      if (result.match !== undefined) {
        dispatch(getTeamBestMatch(result.match));
        dispatch(getTeamOtherMatches(result.otherMatches));
      } else {
        // if there is no match for other types either, reset bestMatch and otherMatches
        dispatch(
          getTeamTempData({
            workstyle,
            type,
            competitionId,
            teamSize,
            score
          })
        );
        dispatch(getTeamReset());
      }
    }
  } catch (err) {
    dispatch(getTeamError(err));
  }
};

// Async action to fetch other matches when user clicks "browse other groups"
// @param: user workstyle, score[fun, grow, win], competition id and flag true for refetch if no best match exists
export const fetchOtherMatches = (
  workstyle,
  score,
  competitionId,
  flag
) => async dispatch => {
  dispatch(getTeamLoading());

  const [typeOne, typeTwo] = similarTeamType(...score);
  const matches = {};

  const teamsQueryOne = generateQuery(
    "teams",
    competitionId,
    workstyle,
    typeOne
  );

  const teamsQueryTwo = generateQuery(
    "teams",
    competitionId,
    workstyle,
    typeTwo
  );

  try {
    await teamsQueryOne.get().then(snapshot =>
      snapshot.forEach(team => {
        const newMatch = team.data();
        if (
          team.users &&
          filterOtherMatches(score, Object.values(team.users))
        ) {
          newMatch.id = team.id;
          matches[team.id] = newMatch;
        }
      })
    );

    await teamsQueryTwo.get().then(snapshot =>
      snapshot.forEach(team => {
        const newMatch = team.data();
        if (
          team.users &&
          filterOtherMatches(score, Object.values(team.users))
        ) {
          newMatch.id = team.id;
          matches[team.id] = newMatch;
        }
      })
    );
    if (flag) {
      return matches;
    } else {
      const result = Object.values(matches);
      dispatch(getTeamOtherMatches(result));
    }
  } catch (error) {
    dispatch(getTeamError(error));
  }
};

// Async action to create new team for user
export const createTeamAndAddUser = (
  workstyle,
  type,
  competitionId,
  teamSize,
  score
) => async dispatch => {
  try {
    const uid = await AsyncStorage.getItem("user");
<<<<<<< HEAD
    firebaseDB
=======
    const name = teamName(type);
    let teamId = "";
    await firebaseDB
>>>>>>> Add matches screen; add random team name when create new team.
      .collection("teams")
      .add({
        workstyle,
        type,
        competitionId,
        teamSize,
        name,
        users: {
          [uid]: { fun: score[0], grow: score[1], win: score[2], id: uid }
        }
      })
      .then(async docRef => {
        // Refetch newly added team, which is a perfect match :)
        const newTeam = await docRef.get();
        dispatch(getTeamBestMatch(newTeam.data()));
      });
  } catch (error) {
    dispatch(getTeamError(error));
  }
};

//TODO: action to add user to team
export const addUserToTeam = (score, teamId, userId) => async dispatch => {
  try {
    const teamRef = await firebaseDB.collection("teams").doc(teamId);
    await teamRef.update({
      users: {
        [userId]: {
          fun: score[0],
          grow: score[1],
          win: score[2],
          id: userId
        }
      }
    });
    //TODO: add competition id to user
  } catch (error) {
    dispatch(getTeamError(error));
  }
};

//TODO: action to remove user from the team
export const removeUserFromTeam = (teamId, userId) => {
  //
};
const intitialState = {
  isLoading: false,
  bestMatch: {},
  otherMatches: [],
  error: "",
  tempData: {},
  noMatch: false
};
// Reducer
export default (state = intitialState, action) => {
  switch (action.type) {
    case GET_TEAM_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case GET_TEAM_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        noMatch: false
      };
    case GET_TEAM_BEST_MATCH:
      return {
        ...state,
        bestMatch: action.payload,
        isLoading: false,
        error: "",
        noMatch: false
      };
    case GET_TEAM_OTHER_MATCHES:
      return {
        ...state,
        isLoading: false,
        otherMatches: state.otherMatches.concat(action.payload),
        error: "",
        noMatch: false
      };
    case GET_TEAM_TEMP_DATA:
      return {
        ...state,
        tempData: action.payload,
        noMatch: true,
        isLoading: false
      };
    case GET_TEAM_RESET:
      return {
        ...state,
        bestMatch: {},
        otherMatches: []
      };
    case RESET_TEAM:
      return intitialState;
    default:
      return state;
  }
};
