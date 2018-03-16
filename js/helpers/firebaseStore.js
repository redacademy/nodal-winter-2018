import { firebaseDB } from "../config/firebaseConfig";

export const updateWorkStyle = (uid, workStyle) =>
  firebaseDB
    .collection("users")
    .doc(uid)
    .set(
      {
        workStyle
      },
      { merge: true }
    );
