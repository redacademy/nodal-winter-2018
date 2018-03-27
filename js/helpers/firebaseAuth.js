import { firebaseAuth, firebaseDB } from "../config/firebaseConfig";
import { AsyncStorage } from "react-native";
import { getUserError } from "../redux/modules/user";
import { dispatch } from "react-redux";

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

export const signOut = () => firebaseAuth.signOut();

export const updateUserProfile = async (
  fullname,
  program,
  schoolName,
  aboutMe,
  chips
) => {
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
