import { firebaseAuth, firebaseDB } from "../config/firebaseConfig";

export const createUserInAuthAndDB = (fullname, email, password) => {
  console.log("creating account...");
  return firebaseAuth
    .createUserWithEmailAndPassword(email, password)
    .then(authUser =>
      firebaseDB.collection("users").add({
        fullname,
        email,
        password
      })
    )
    .catch(err =>
      console.log("something went wrong with creating account: ", err.message)
    );
};

export const signIn = (email, password) => {
  firebaseAuth
    .signInWithEmailAndPassword(email, password)
    .then(currUser => console.log(currUser.uid))
    .catch(err =>
      console.log("something went wrong with signIn: ", err.message)
    );
};

export const signOut = () =>
  firebaseAuth
    .signOut()
    .then(() => console.log("sign out success"))
    .catch(err => console.log("something went wrong with sign out"));
