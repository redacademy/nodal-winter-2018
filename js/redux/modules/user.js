import { AsyncStorage } from "react-native";
import { firebaseDB } from "../../config/firebaseConfig";
import { updateUserProfile } from "../../helpers/firebaseAuth";
import { updateProfilePic } from "../../helpers/uploadProfilePicHelper";
import { updateWorkstyle } from "../../helpers/firebaseStore";

const GET_USER_LOADING = "GET_USER_LOADING";
const GET_USER_SCORE = "GET_USER_SCORE";
const GET_USER_WORKSTYLE = "GET_USER_WORKSTYLE";
const GET_USER = "GET_USER";
const GET_USER_ERROR = "GET_USER_ERROR";
const GET_UPDATE_USER = "GET_UPDATE_USER";

const getUserLoading = () => ({
  type: GET_USER_LOADING
});

export const getUserScore = ([fun, grow, win]) => ({
  type: GET_USER_SCORE,
  payload: [fun, grow, win]
});

const getUserWorkstyle = workstyle => ({
  type: GET_USER_WORKSTYLE,
  payload: workstyle
});

const getUser = user => ({
  type: GET_USER,
  payload: user
});

const getUserError = err => ({
  type: GET_USER_ERROR,
  payload: err
});

const updateUser = updatedUser => ({
  type: GET_UPDATE_USER,
  payload: updatedUser
});

export const updateProfileOnEdit = ({
  fullname,
  program,
  schoolName,
  aboutMe,
  workstyle,
  profilePhoto,
  chips
}) => async dispatch => {
  dispatch(getUserLoading());
  // Add checking for empty data fields
  try {
    await updateUserProfile(fullname, program, schoolName, aboutMe, chips);
    await updateProfilePic(profilePhoto);
    await updateWorkstyle(workstyle);
    dispatch(
      updateUser({
        fullname,
        program,
        schoolName,
        aboutMe,
        workstyle,
        profilePhoto,
        chips
      })
    );
  } catch (err) {
    dispatch(
      getUserError({
        isError: true,
        text: err.message
      })
    );
  }
};

export const fetchUserWorkstyle = () => async dispatch => {
  dispatch(getUserLoading());
  const uid = await AsyncStorage.getItem("user");
  const userQuery = firebaseDB.collection("users").doc(uid);
  await userQuery
    .get()
    .then(doc => {
      dispatch(getUserWorkstyle(doc.data().workstyle));
    })
    .catch(err => dispatch(getUserError(err)));
};

export const fetchUser = () => async dispatch => {
  dispatch(getUserLoading());
  const uid = await AsyncStorage.getItem("user");
  const userQuery = firebaseDB.collection("users").doc(uid);
  await userQuery
    .get()
    .then(doc => {
      dispatch(getUser(doc.data()));
    })
    .catch(err => dispatch(getUserError(err)));
};

export const fetchOtherUser = uid => async dispatch => {
  dispatch(getUserLoading());
  const userQuery = firebaseDB.collection("users").doc(uid);
  await userQuery
    .get()
    .then(doc => {
      dispatch(getUser(doc.data()));
    })
    .catch(err => dispatch(getUserError(err)));
};

export default (
  state = { isLoading: false, score: [], workstyle: "", user: {}, error: "" },
  action
) => {
  switch (action.type) {
    case GET_USER_LOADING:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case GET_USER_SCORE:
      return {
        ...state,
        score: action.payload,
        error: ""
      };
    case GET_USER_WORKSTYLE:
      return {
        ...state,
        workstyle: action.payload,
        error: ""
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: ""
      };
    case GET_USER_ERROR:
      return {
        ...state,
        error: action.payload.message
      };
    case GET_UPDATE_USER:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
        isLoading: false
      };
    default:
      return state;
  }
};
