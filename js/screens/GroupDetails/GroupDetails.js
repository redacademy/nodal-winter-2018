/* global require */
import React from "react";
import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Button from "../../components/Button";

import { styles } from "./styles";
import { colors } from "../../config/styles";

const GroupDetails = ({ list }) => {
  return (
    <ScrollView contentContainerStyle={{ backgroundColor: colors.white }}>
      <View style={styles.main}>
        <View style={styles.heading}>
          <Text style={styles.headingTitle}>Ace the Case</Text>
          <Text style={styles.text}>
            Charles School of Business Case Competition
          </Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Group Details</Text>
        </View>

        <View style={styles.element}>
          <View style={styles.left}>
            <Image
              source={require("../../../js/assets/images/placeholder/profile-5.jpg")}
              style={styles.image}
            />
          </View>
          <View style={styles.profileData}>
            <Text style={styles.name}>{list.name}</Text>
            <Text style={styles.programOrEmail}>Program Placeholder</Text>
            <Text style={styles.programOrEmail}>place@hold.er</Text>
          </View>
          <View>
            <Image
              source={require("../../../js/assets/icons/matching.png")}
              style={styles.image}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color={colors.coralOrange}
          text={"You are a member".toUpperCase()}
          func={() => {}}
        />
        <TouchableOpacity>
          <Text style={styles.leave}>Leave Group</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default GroupDetails;

GroupDetails.propTypes = {
  list: PropTypes.array.isRequired
};
