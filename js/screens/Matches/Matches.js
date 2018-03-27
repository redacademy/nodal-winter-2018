import React from "react";
import { Image, View, Text, ScrollView } from "react-native";
import PropTypes from "prop-types";

import TeamUserCard from "../../components/TeamUserCard/";
import { getAvgCirgoal } from "../../helpers/teamUserCardHelper";

import { styles } from "./styles";

const Matches = ({ bestMatch, otherMatches, goToTeam }) => {
  return (
    <ScrollView>
      <View style={styles.main}>
        <View style={styles.heading}>
          <Text style={styles.headingTitle}>Ace the Case</Text>
          <Text style={styles.text}>
            Charles School of Business Case Competition
          </Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.mainTitle}>YOUR MATCHES</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>BEST MATCH</Text>
        </View>

        <View style={styles.bestMatchContainer}>
          <TeamUserCard
            fun={getAvgCirgoal(bestMatch.users, "fun")}
            grow={getAvgCirgoal(bestMatch.users, "grow")}
            win={getAvgCirgoal(bestMatch.users, "win")}
            profileImage={
              bestMatch.users &&
              Object.values(bestMatch.users).map(user => user.profileImage)
            }
            onPress={goToTeam}
          >
            <Text style={styles.teamTitle}>{bestMatch.name}</Text>
            <Text style={styles.text}>
              {Object.keys(bestMatch.users).length +
                "/" +
                bestMatch.teamSize +
                " Members"}
            </Text>
          </TeamUserCard>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>OTHER MATCHES</Text>
        </View>
        {otherMatches.length &&
          otherMatches.map((team, index) => {
            return (
              <TeamUserCard
                key={index}
                fun={getAvgCirgoal(team.users, "fun")}
                grow={getAvgCirgoal(team.users, "grow")}
                win={getAvgCirgoal(team.users, "win")}
                profileImage={
                  team.users &&
                  Object.values(team.users).map(user => user.profileImage)
                }
                onPress={goToTeam}
              >
                <View>
                  <Text />
                </View>
              </TeamUserCard>
            );
          })}
      </View>
    </ScrollView>
  );
};

export default Matches;

Matches.propTypes = {
  bestMatch: PropTypes.object.isRequired,
  otherMatches: PropTypes.array.isRequired,
  goToTeam: PropTypes.func.isRequired
};
