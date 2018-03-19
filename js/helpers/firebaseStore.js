import { firebaseDB } from "../config/firebaseConfig";
import { AsyncStorage } from "react-native";

export const updateWorkStyle = async workStyle => {
  const uid = await AsyncStorage.getItem("user");
  await firebaseDB
    .collection("users")
    .doc(uid)
    .set(
      {
        workStyle
      },
      { merge: true }
    );
};
