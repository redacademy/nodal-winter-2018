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
  let result = [];
  teamsIds &&
    (await new Promise((res, rej) => {
      const proms = Object.keys(teamsIds).map(id =>
        firebaseDB
          .collection("teams")
          .doc(id)
          .get()
          .then(snapshot => {
            result.push(snapshot.data());
          })
      );
      Promise.all(proms).then(() => {
        res();
      });
    }));
  console.log(result);
  return result;
};
