import { AsyncStorage } from "react-native";

import { firebaseDB } from "../../config/firebaseConfig";
import {
  teamType,
  similarTeamType,
  findBestMatch
} from "../../helpers/matchingHelpers";

// Action types
const GET_TEAM_BEST_MATCH = "GET_TEAM_BEST_MATCH";
const GET_TEAM_OTHER_MATCHES = "GET_TEAM_OTHER_MATCHES";
const GET_TEAM_RESET = "GET_TEAM_RESET";
const GET_TEAM_LOADING = "GET_TEAM_LOADING";
const GET_TEAM_ERROR = "GET_TEAM_ERROR";

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
  payload: error
});
const getTeamLoading = () => ({
  type: GET_TEAM_LOADING
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

  const teamsQuery = firebaseDB
    .collection("teams")
    .where("competitionId", "==", competitionId)
    .where("workstyle", "==", workstyle)
    .where("type", "==", type);

  await teamsQuery
    .get()
    .then(snapshot => {
      if (!snapshot.empty) {
        snapshot.forEach(team => {
          teams[team.id] = team.data();
        });
      }
    })
    .catch(error => dispatch(getTeamError(error)));

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

    // if there's no match with the similar types either
    // create new team
    if (result.match === undefined) {
      const uid = await AsyncStorage.getItem("user");
      firebaseDB
        .collection("teams")
        .add({
          workstyle,
          type,
          competitionId,
          teamSize,
          users: {
            uid: { fun: score[0], grow: score[1], win: score[2], id: uid }
          }
        })
        .then(async docRef => {
          // Refetch newly added team, which is a perfect match
          const newTeam = await docRef.get();
          dispatch(getTeamBestMatch(newTeam.data()));
        })
        .catch(err => dispatch(getTeamError(err)));
    } else {
      dispatch(getTeamBestMatch(result.match));
      dispatch(getTeamOtherMatches(result.otherMatches));
    }
  }
};

// Async action to fetch other matches when user clicks "browse other groups"
// @param: user workstyle, score, competition id and flag true for refetch if no best match exists
export const fetchOtherMatches = (
  workstyle,
  score,
  competitionId,
  flag
) => async dispatch => {
  dispatch(getTeamLoading());

  const [typeOne, typeTwo] = similarTeamType(...score);
  const matches = [];

  const teamsQueryOne = firebaseDB
    .collection("teams")
    .where("competitionId", "==", competitionId)
    .where("workstyle", "==", workstyle)
    .where("type", "==", typeOne);

  const teamsQueryTwo = firebaseDB
    .collection("teams")
    .where("competitionId", "==", competitionId)
    .where("workstyle", "==", workstyle)
    .where("type", "==", typeTwo);

  await teamsQueryOne.get().then(snapshot =>
    snapshot.forEach(team => {
      matches.push(team.data());
    })
  );
  await teamsQueryTwo.get().then(snapshot =>
    snapshot.forEach(team => {
      matches.push(team.data());
    })
  );

  if (flag) {
    return matches;
  } else {
    dispatch(getTeamOtherMatches(matches));
  }
};

//TODO: action to add user to team
export const addUserToTeam = (teamId, userId) => {
  //
};

//TODO: action to remove user from the team
export const removeUserFromTeam = (teamId, userId) => {
  //
};

// Reducer
export default (
  state = { isLoading: false, bestMatch: {}, otherMatches: [], error: "" },
  action
) => {
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
        isLoading: false
      };
    case GET_TEAM_BEST_MATCH:
      return {
        ...state,
        bestMatch: action.payload,
        isLoading: false,
        error: ""
      };
    case GET_TEAM_OTHER_MATCHES:
      return {
        ...state,
        isLoading: false,
        otherMatches: state.otherMatches.concat(action.payload),
        error: ""
      };
    case GET_TEAM_RESET:
      return {
        ...state,
        bestMatch: {},
        otherMatches: []
      };
    default:
      return state;
  }
};
