import { firebaseDB } from "../config/firebaseConfig";
import { AsyncStorage } from "react-native";

export const updateProfilePic = async profilePhoto => {
  try {
    const uid = await AsyncStorage.getItem("user");
    await firebaseDB
      .collection("users")
      .doc(uid)
      .set(
        {
          profilePhoto
        },
        { merge: true }
      );
  } catch (err) {
    console.log(err);
  }
};
