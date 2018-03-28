import React from "react";
import { ScrollView, Text, View } from "react-native";
import TeamUserCard from "../../components/TeamUserCard";
import { getAvgCirgoal } from "../../helpers/teamUserCardHelper";

import { styles } from "./styles";
const Teams = ({ teams, goToTeam, users }) => (
  <ScrollView>
    <View style={styles.mainContainer}>
      {teams.map((team, index) => {
        console.log(team);
        return (
          <TeamUserCard
            key={index}
            fun={getAvgCirgoal(team.users, "fun")}
            grow={getAvgCirgoal(team.users, "grow")}
            win={getAvgCirgoal(team.users, "win")}
            profileImage={
              team.users &&
              Object.values(team.users).map(
                user => users[user.id] && users[user.id].profilePhoto
              )
            }
            onPress={() => {
              goToTeam(team.users);
            }}
          >
            <Text style={styles.teamTitle}>{team.name}</Text>
            <Text style={styles.text}>
              {Object.keys(team.users).length +
                "/" +
                team.teamSize +
                " Members"}
            </Text>
          </TeamUserCard>
        );
      })}
    </View>
  </ScrollView>
);

export default Teams;
