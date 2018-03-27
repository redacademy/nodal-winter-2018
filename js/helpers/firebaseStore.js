import { firebaseDB } from "../config/firebaseConfig";
import { AsyncStorage } from "react-native";

export const updateWorkStyle = async workstyle => {
  const uid = await AsyncStorage.getItem("user");
  await firebaseDB
    .collection("users")
    .doc(uid)
    .set(
      {
        workstyle
      },
      { merge: true }
    );
};
