import { firebaseAuth, firebaseDB } from "../config/firebaseConfig";

export const createUserInAuthAndDB = (fullname, email, password) => {
  console.log("creating account...");
  return firebaseAuth
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
};

export const signIn = (email, password) =>
  firebaseAuth
    .signInWithEmailAndPassword(email, password)
    .then(currUser => currUser.uid)
    .catch(err => {
      throw new Error(err);
    });

export const signOut = () =>
  firebaseAuth
    .signOut()
    .then(() => console.log("sign out success"))
    .catch(err => console.log("something went wrong with sign out"));
