import { AsyncStorage } from "react-native";
import { firebaseDB } from "../config/firebaseConfig";
export const getAvgCirgoal = (users, fgw) =>
  users &&
  Math.floor(
    Object.values(users).reduce((totalFun, user) => totalFun + user[fgw], 0) /
      Object.values(users).length +
      0.5
  );

export const getAllTeams = async () => {
  const uid = await AsyncStorage.getItem("user");
  const teamsIds = await firebaseDB
    .collection("users")
    .doc(uid)
    .get()
    .then(snapshot => snapshot.data().teams);
  return (
    teamsIds &&
    Object.keys(teamsIds).map(async id => {
      return await firebaseDB
        .collection("teams")
        .doc(id)
        .get()
        .then(snapshot => snapshot.data());
    })
  );
};
