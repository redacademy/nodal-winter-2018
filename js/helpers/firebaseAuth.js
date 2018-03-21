import { firebaseAuth, firebaseDB } from "../config/firebaseConfig";
import { AsyncStorage } from "react-native";
import {
  getUserError,
  resetComps,
  resetTeam,
  resetUser
} from "../redux/modules/user";

export const createUserInAuthAndDB = async (fullname, email, password) => {
  const uid = await firebaseAuth
    .createUserWithEmailAndPassword(email, password)
    .then(authUser => {
      firebaseDB
        .collection("users")
        .doc(authUser.uid)
        .set({
          fullname,
          email
        });
      return authUser.uid;
    })
    .catch(err => {
      throw new Error(err);
    });
  await AsyncStorage.setItem("user", uid);
  await AsyncStorage.setItem("email", email.toLowerCase());
  await AsyncStorage.setItem("password", password);
};

export const signIn = async (email, password, writeToAsync = false) => {
  const uid = await firebaseAuth
    .signInWithEmailAndPassword(email, password)
    .then(currUser => currUser.uid)
    .catch(err => {
      throw new Error(err);
    });
  if (writeToAsync) {
    await AsyncStorage.setItem("user", uid);
    await AsyncStorage.setItem("email", email.toLowerCase());
    await AsyncStorage.setItem("password", password);
  }
};

export const signOut = async (navigation, dispatch) => {
  try {
    await firebaseAuth.signOut();
    await AsyncStorage.clear();
    dispatch(resetComps());
    dispatch(resetTeam());
    dispatch(resetUser());
  } finally {
    navigation.navigate("Landing", { disableOnboarding: true });
  }
};

export const updateUserProfile = (
  fullname,
  program,
  schoolName,
  aboutMe,
  chips
) => async dispatch => {
  try {
    const uid = await AsyncStorage.getItem("user");
    await firebaseDB
      .collection("users")
      .doc(uid)
      .set(
        {
          fullname,
          program,
          schoolName,
          aboutMe,
          chips
        },
        { merge: true }
      );
  } catch (err) {
    dispatch(getUserError(err));
  }
};
