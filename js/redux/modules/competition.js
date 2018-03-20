import { firebaseDB } from "../../config/firebaseConfig";
import { competitionValidation } from "../../helpers/timestampHelpers";

// Action types
const GET_COMPETITION_LOADING = "GET_COMPETITION_LOADING";
const GET_COMPETITION = "GET_COMPETITION";
const GET_COMPETITION_ERROR = "GET_COMPETITION_ERROR";

// Action creators
const getCompetitionLoading = () => ({
  type: GET_COMPETITION_LOADING
});

const getCompetitionError = err => ({
  type: GET_COMPETITION_ERROR,
  payload: err
});

const getCompetition = competitions => ({
  type: GET_COMPETITION,
  payload: competitions
});

// Async action creator
export const fetchCompetitions = param => dispatch => {
  dispatch(getCompetitionLoading());
  const query = param
    ? firebaseDB.collection("competitions").where("category", "==", param)
    : firebaseDB.collection("competitions");
  const list = [];
  query
    .get()
    .then(snapshot => {
      snapshot.forEach(competition => {
        if (competitionValidation(competition.data().startTime)) {
          list.push(competition.data());
        }
      });
      dispatch(getCompetition(list));
    })
    .catch(err => dispatch(getCompetitionError(err)));
};

// Reducer
export default (
  state = { isLoading: false, competitions: [], error: "" },
  action
) => {
  switch (action.type) {
    case GET_COMPETITION_LOADING:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case GET_COMPETITION:
      return {
        ...state,
        isLoading: false,
        competitions: action.payload,
        error: ""
      };
    case GET_COMPETITION_ERROR:
      return {
        ...state,
        error: action.payload.message
      };
    default:
      return state;
  }
};
