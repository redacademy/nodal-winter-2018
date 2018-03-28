import { firebaseAuth, firebaseDB } from "../config/firebaseConfig";
import { AsyncStorage } from "react-native";
import { resetUser } from "../redux/modules/user";
import { resetComps } from "../redux/modules/competition";
import { resetTeam } from "../redux/modules/teams";

export const createUserInAuthAndDB = async (fullname, email, password) => {
  const uid = await firebaseAuth
    .createUserWithEmailAndPassword(email, password)
    .then(authUser => {
      firebaseDB
        .collection("users")
        .doc(authUser.uid)
        .set({
          fullname,
          email,
          uid: authUser.uid
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

export const updateUserProfile = async (
  fullname,
  program,
  schoolName,
  aboutMe,
  chips
) => {
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
};
