import React from "react";
import PropTypes from "prop-types";
import { View, Text, ScrollView } from "react-native";
import TeamUserCard from "../../components/TeamUserCard/";
import { getAvgCirgoal } from "../../helpers/teamUserCardHelper";
import Button from "../../components/Button";
import { colors } from "../../config/styles";

import { styles } from "./styles";

const GroupDetails = ({
  isCompStack,
  teamUsers,
  users,
  navigation,
  addUser
}) => {
  console.log(isCompStack);
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
          <Text style={styles.mainTitle}>GROUP DETAILS</Text>
        </View>

        {Object.entries(teamUsers).map(([uid, user]) => {
          return (
            <View key={uid} style={styles.bestMatchContainer}>
              <TeamUserCard
                onPress={() => {
                  navigation.navigate(isCompStack ? "UserC" : "User", {
                    uid
                  });
                }}
                fun={user.fun}
                grow={user.grow}
                win={user.win}
                profileImage={users[uid] && users[uid].profilePhoto}
              >
                <Text style={styles.teamTitle}>
                  {users[uid] && users[uid].fullname}
                </Text>
                <Text style={styles.text}>
                  {users[uid] && users[uid].program}
                </Text>
              </TeamUserCard>
            </View>
          );
        })}
      </View>
      {isCompStack ? (
        <View>
          <Button
            color={colors.coralOrange}
            text={"Browse Other Groups"}
            func={() => {
              navigation.navigate("Matches");
            }}
          />
          <Button
            color={colors.coralOrange}
            text={"Join the Group"}
            func={async () => {
              await addUser();
              navigation.pop();
              navigation.navigate("GroupDetails", {
                users: users,
                isCompStack: false
              });
            }}
          />
        </View>
      ) : (
        ""
      )}
    </ScrollView>
  );
};

GroupDetails.propTypes = {
  // bestMatch: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired
};

export default GroupDetails;
