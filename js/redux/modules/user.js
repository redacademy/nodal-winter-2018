import { AsyncStorage } from "react-native";

import { firebaseDB } from "../../config/firebaseConfig";


const GET_USER_SCORE = "GET_USER_SCORE";
const GET_USER_WORKSTYLE = "GET_USER_WORKSTYLE";

export const getUserScore = ([fun, grow, win])  => ({
  type: GET_USER_SCORE,
  payload: [fun, grow, win]
});

const getUserWorkstyle = workstyle =>({
  type: GET_USER_WORKSTYLE,
  payload: workstyle
})

export const fetchUserWorkstyle = () => async dispatch => {
  const uid = await AsyncStorage.getItem("user");
  const userQuery = firebaseDB.collection("users").doc(uid);

  await userQuery
    .get()
    .then(doc => {
      dispatch(getUserWorkstyle(doc.data().workstyle))
    })
    .catch(error => console.log(error));
}



export default (state = { score: [], workstyle: '' }, action) => {
  switch (action.type) {
    case GET_USER_SCORE:
      return {
        ...state,
        score: action.payload
      };
      case GET_USER_WORKSTYLE: 
      return {
        ...state,
        workstyle: action.payload
      }
    default:
      return state;
  }
};
